<template>
  <div class="home">
    <Logo />
    <Header />
  </div>
</template>

<script>
import Header from './../components/Header.vue';
import Logo from './../components/Logo.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Logo,
  },
};
</script>

<style lang="scss" scooped>
@use './../styles/vars';

body {
  background-image: url('./../assets/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: flex-start;
}

@media (min-width: 1024px) {
  .home {
    display: flex;
    justify-content: space-between;
  }
}
</style>
