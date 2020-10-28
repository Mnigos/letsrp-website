<template>
  <div class="wrapper">
    <!-- <Login /> -->
    <Hamburger />
    <WlView />
  </div>
</template>

<script>
import Login from '../components/Login';
import Hamburger from '../components/Hamburger';
import WlView from '../components/WlView';

export default {
  name: 'Admin',
  components: {
    Login,
    WlView,
    Hamburger,
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  background-color: vars.$dark-color;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  position: relative;
}
</style>
