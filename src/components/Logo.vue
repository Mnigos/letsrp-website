<template>
  <div class="logo__wrapper">
    <section class="logo">
      <img src="./../assets/logo.png" />
    </section>
  </div>
</template>

<script>
export default {
  name: "logo"
};
</script>

<style lang="scss">
@use "./../styles/vars.scss";

.logo {
  margin: 60px 0;
  display: flex;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
  }
}
</style>
