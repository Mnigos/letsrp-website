<template>
  <div class="about">
    <div class="header__wrapper">
      <header class="header">
        <h1>Podania</h1>
      </header>
    </div>
    <div class="content_wrapper">
      <main>
        <article class="content">
          <div class="content__element">
            <router-link to="/Applications">Podanie na Whitelist</router-link>
          </div>
          <div class="content__element">
            <router-link to="/Applications">Podanie na Supporta</router-link>
          </div>
          <div class="content__element">
            <router-link to="/Applications"
              >Podanie na frakcję LSPD</router-link
            >
          </div>
          <div class="content__element">
            <router-link to="/Applications"
              >Podanie na frakcję LSCM</router-link
            >
          </div>
          <div class="content__element">
            <router-link to="/Applications"
              >Podanie na frakcję LSCM</router-link
            >
          </div>
          <div class="content__element">
            <router-link to="/Applications">Podanie na Firmę</router-link>
          </div>
          <div class="content__element">
            <router-link to="/Applications"
              >Podanie na Organizację Przestępczą</router-link
            >
          </div>
        </article>
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@use './../../styles/vars';

.content__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  width: 100%;
}

.content__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  flex-wrap: wrap;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 25px;
    background-color: vars.$dark-color;
    width: 80vw;
    margin: 10px;
    &:hover {
      background-color: vars.$darker-color;
    }
  }
}

@media (min-width: 1024px) {
  .content__element {
    width: 30vw;
    margin: 30px 40px;
  }
}
</style>
