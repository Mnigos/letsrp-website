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

const pages = {
  WlView,
};

export default {
  name: 'Admin',
  components: {
    Login,
    WlView,
    Hamburger,
  },
  methods: {
    async go(where) {
      this.componentToShow = pages[where];
      await this.$nextTick();
      window.scrollTo({
        top: this.$refs.component.$el.getBoundingClientRect().top,
        behavior: 'smooth',
      });
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

button {
  color: #fff;
  text-decoration: none;
  outline: none;
  border: none;
  font-size: 24px;
  font-family: sans-serif;
  background-color: vars.$dark-color;
}

.navbar {
  display: flex;
  justify-content: center;
  margin-right: 3vw;
}
</style>
