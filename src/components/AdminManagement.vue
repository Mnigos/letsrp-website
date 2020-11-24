<template>
  <div class="wrapper">
    <header class="header">
      <h2>Dodawanie Użytkownika</h2>
    </header>
    <div class="form" action="#" @submit.prevent="addUser">
      <form>
        <div class="form__element">
          <label>Login</label>
          <input type="text" v-model="name" />
        </div>
        <div class="form__element">
          <label class>Hasło</label>
          <input class :type="formPasswordType" v-model="pass" />
        </div>
        <div class="form__element--checkbox">
          <label>Pokaż hasło</label>
          <input
            type="checkbox"
            @change="showPasswordAsText"
            v-model="switchVisibility"
          />
        </div>
        <div class="form__element">
          <label class>Rodzaj permisji</label>
          <input class v-model="perms" />
        </div>
        <div class="form__element">
          <button>Dodaj użytkownika</button>
        </div>
        <div class="form__error">{{ messageError }}</div>
        <div class="form__done">{{ messageDone }}</div>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'AdminManagement',
  data() {
    return {
      formPasswordType: 'password',
      switchVisibility: false,
      name: '',
      pass: '',
      pers: '',
      messageError: '',
      messageDone: '',
    };
  },
  methods: {
    showPasswordAsText() {
      this.formPasswordType = this.switchVisibility ? 'text' : 'password';
    },
    addUser() {
      if (!this.name || !this.pass)
        return (this.messageError =
          'Podaj nazwę użytkownika, hasło oraz permisje');
      else this.messageError = '';

      Axios.post(`${process.env.VUE_APP_API_URL}/admin/management`, {
        token: this.$store.state.token,
        name: this.name,
        pass: this.pass,
        perms: this.perms,
      })
        .then(() => {
          this.messageDone = 'Dodano użytkownika';
          this.name = '';
          this.pass = '';
          this.perms = '';
          this.messageError = '';
        })
        .catch(e => (this.messageError = e.response.data));
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  background-color: vars.$dark-color;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: vars.$darker-color;
  height: 70vh;
  width: 40vw;
  border-radius: 40px;

  &__element {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      border-radius: 10px;
      height: 30px;
      width: 300px;
    }
    &--checkbox {
      font-size: 18px;

      input[type='checkbox'] {
        margin-left: 30px;
        border-radius: 10px;
        height: 15px;
        width: 15px;
      }
    }
  }

  &__error {
    color: #dd0000;
    height: 200px;
    margin: 20px;
    font-size: 0.7em;
  }
}

input {
  font-size: 24px;
  font-family: sans-serif;
}

button {
  background-color: #fff;
  color: vars.$dark-color;
  text-decoration: none;
  outline: none;
  font-size: 24px;
  font-family: sans-serif;
}
</style>
