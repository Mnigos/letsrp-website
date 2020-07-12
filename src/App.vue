<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar__element">
        <router-link to="/">Strona Główna</router-link>
      </div>
      <div class="navbar__element">
        <router-link to="/Applications">Applications</router-link>
      </div>
    </nav>
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

.navbar {
  width: 100vw;
  height: 7vh;
  display: flex;
  justify-content: flex-end;

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
