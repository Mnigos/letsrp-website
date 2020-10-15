<template>
  <div class="wrapper">
    <div class="navbar__wrapper" ref="nav">
      <nav class="navbar">
        <div class="navbar__element">
          <button @click="go('WlView')">Whitelist</button>
        </div>
        <div class="navbar__element">
          <button @click="go('SupView')">Support</button>
        </div>
        <div class="navbar__element">
          <button @click="go('LspdView')">LSPD</button>
        </div>
        <div class="navbar__element">
          <button @click="go('EmsView')">EMS</button>
        </div>
        <div class="navbar__element">
          <button @click="go('LscmView')">LSCM</button>
        </div>
        <div class="navbar__element">
          <button @click="go('FirmView')">Firma</button>
        </div>
        <div class="navbar__element">
          <button @click="go('OrgView')">Organizacja Przestępcza</button>
        </div>
      </nav>
    </div>
    <!-- <Login /> -->
    <WlView />
  </div>
</template>

<script>
import Login from '../components/Login';
import WlView from '../components/WlView';

const pages = {
  WlView,
};

export default {
  name: 'Admin',
  components: {
    Login,
    WlView,
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
