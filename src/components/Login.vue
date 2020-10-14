<template>
  <div class="wrapper">
    <form class="form">
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
        <button @click="login">Zaloguj</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPasswordType: 'password',
      switchVisibility: false,
      name: '',
      pass: '',
    };
  },
  methods: {
    showPasswordAsText() {
      this.formPasswordType = this.switchVisibility ? 'password' : 'text';
    },
    login() {
      const name = 'John';
      const pass = 'zaq1@WSX';
      if (this.name === name && this.pass === pass) {
        return true;
      } else {
        return false;
      }
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
