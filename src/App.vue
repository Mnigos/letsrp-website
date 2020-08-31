<template>
  <div id="app">
    <div class="navbar__wrapper">
      <nav class="navbar">
        <div class="navbar__element">
          <router-link to="/">Strona Główna</router-link>
        </div>
        <div class="navbar__element">
          <router-link to="/Applications">Aplikacje</router-link>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@use './styles/vars';

@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

body {
  overflow-x: hidden;
  margin: 0 !important;
  color: #fff;
  font-size: 24px;
  font-family: sans-serif;
  background-color: vars.$dark-color;
  display: flex;
}

.navbar__wrapper {
  width: 100vw;
  height: 45px;
}

.navbar {
  display: flex;
  justify-content: flex-end;
  margin-right: 3vw;

  &__element {
    margin: 10px 10px 0 10px;

    &:hover {
      border-bottom: solid 2px #fff;
      cursor: pointer;
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
</style>
