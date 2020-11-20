<template>
  <div class="wrapper">
    <form class="form" action="#" @submit.prevent="login">
      <header class="form__header">
        <h1>Logowanie</h1>
      </header>
      <div class="form__element">
        <input type="text" v-model="name" />
      </div>
      <div class="form__element">
        <input :type="formPasswordType" v-model="pass" />
      </div>
      <div class="form__element--checkbox">
        <label>Pokaż hasło</label>
        <input
          type="checkbox"
          @change="showPasswordAsText"
          v-model="switchVisibility"
        />
      </div>
      <div class="form__button">
        <button type="submit">Zaloguj</button>
      </div>
      <div class="form__error">{{ messageError }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formPasswordType: 'password',
      switchVisibility: false,
      name: '',
      pass: '',
      messageError: '',
    };
  },
  methods: {
    showPasswordAsText() {
      this.formPasswordType = this.switchVisibility ? 'text' : 'password';
    },
    login() {
      this.$store
        .dispatch('retrieveToken', {
          name: this.name,
          pass: this.pass,
        })
        .then(() => this.$router.push('/admin'))
        .catch(e => console.log(e));
      console.log('e');
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  background-color: vars.$dark-color;
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__element {
    margin-top: 40px;

    input {
      border-radius: 10px;
      height: 30px;
      width: 300px;
    }

    &--checkbox {
      display: flex;
      justify-content: center;
      margin-top: 40px;

      input[type='checkbox'] {
        margin-left: 30px;
        border-radius: 10px;
        height: 30px;
        width: 30px;

        &:checked {
          background: vars.$green-color;
        }
      }
    }
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
