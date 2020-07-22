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
          <div class="content__element"><p>Podanie na Whitelist</p></div>
          <div class="content__element"><p>Podanie na Supporta</p></div>
          <div class="content__element"><p>Podanie na frakcję LSPD</p></div>
          <div class="content__element"><p>Podanie na frakcję LSCM</p></div>
          <div class="content__element"><p>Podanie na frakcję LSCM</p></div>
          <div class="content__element"><p>Podanie na Firmę</p></div>
          <div class="content__element">
            <p>Podanie na Organizację Przestępczą</p>
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
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 25px;
    background-color: vars.$dark-color;
    width: 80vw;
    margin: 10px;
    //height: 10vh;
  }
}
</style>
