<template>
  <div class="wrapper">
    <div class="form">
      <div class="form__login">
        <form>
          <input type="text" />
        </form>
      </div>
      <div class="form__password">
        <form>
          <input :type="formPasswordType" />
        </form>
      </div>
      <div class="form__checkbox">
        <label>Pokaż hasło</label>
        <input
          type="checkbox"
          @change="showPasswordAsText"
          v-model="shouldShow"
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
      shouldShow: false,
    };
  },
  methods: {
    showPasswordAsText() {
      this.formPasswordType = this.shouldShow ? 'password' : 'text';
    },
  },
};
</script>
