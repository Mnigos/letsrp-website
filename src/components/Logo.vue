<template>
  <div class="logo__wrapper">
    <section class="logo">
      <img src="./../assets/logo.png" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'logo',
};
</script>

<style lang="scss" scooped>
@use "./../styles/vars.scss";

.logo {
  display: flex;
  justify-content: center;

  img {
    display: none;
    width: 80%;
    height: 80%;
  }
}

@media (min-width: 1024px) {
  .logo {
    margin: 20vh;
    display: flex;
    justify-content: center;
    width: 25vw;

    img {
      display: flex;
      width: 80%;
      height: 80%;
    }
  }
}
</style>
