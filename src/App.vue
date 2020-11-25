<template>
  <div id="app">
    <div class="navbar__wrapper" ref="nav">
      <nav class="navbar">
        <div class="navbar__element">
          <router-link to="/">Strona Główna</router-link>
        </div>
        <div class="navbar__element">
          <router-link to="/applications">Aplikacje</router-link>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler() {
        document.title = "Let's RP";
      },
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.$refs.nav.classList.toggle('sticky', window.scrollY > 0);
    });
  },
  beforeUnmount() {
    window.removeEventListener('scroll');
  },
};
</script>

<style lang="scss">
@use './styles/vars';

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

body {
  scroll-behavior: smooth;
  background-image: url('./assets/background.jpg');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-x: hidden;
  margin: 0 !important;
  color: #fff;
  font-size: 24px;
  font-family: sans-serif;
  background-color: vars.$dark-color;
  display: flex;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navbar__wrapper {
  width: 100vw;
  height: 45px;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: 0.5s ease-in-out;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  margin-right: 3vw;

  &__element {
    margin: 10px 10px 0 10px;
    position: sticky;
    left: 0;
    top: 0;

    &::after {
      content: '';
      width: 0;
      height: 3px;
      background-color: #fff;
      position: absolute;
      bottom: -15%;
      left: 50%;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    &:hover::after {
      transform: translateX(-50%);
      width: 100%;
    }
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-decoration: none;
    }

    &:visited {
      color: #fff;
      text-decoration: none;
    }
  }
}

.sticky {
  background-color: vars.$dark-color;
  opacity: 0.8;
}
</style>
