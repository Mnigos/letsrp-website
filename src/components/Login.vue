<template>
  <div class="wrapper">
    <div class="form">
      <div class="form__element">
        <form>
          <input type="text" />
        </form>
      </div>
      <div class="form__element">
        <form>
          <input :type="formPasswordType" />
        </form>
      </div>
      <div class="form__element--checkbox">
        <label>Pokaż hasło</label>
        <input
          type="checkbox"
          @change="showPasswordAsText"
          v-model="switchVisibility"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPasswordType: 'password',
      switchVisibility: false,
    };
  },
  methods: {
    showPasswordAsText() {
      this.formPasswordType = this.switchVisibility ? 'password' : 'text';
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
</style>
