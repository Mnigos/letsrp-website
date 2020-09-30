<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <img src="./../assets/logo.png" />
    </div>
    <div class="header__wrapper">
      <header class="header">
        <div class="header__description">
          <div class="header__description-logo__wrapper">
            <div class="header__description-logo">
              <h1>
                <span class="header__description-logo--left">Let's </span>
                <span>RP</span>
              </h1>
            </div>
          </div>
          <div class="header__description-label">
            <h2>Polski serwer RolePlay</h2>
          </div>
        </div>
        <div class="header__socials">
          <div class="header__socials-label">
            <p>Możesz nas znaleźć na:</p>
          </div>
          <div class="header__socials-links">
            <div class="header__socials-links__button">
              <a href="https://discord.gg/Ffrh3KY" target="_blank">Discord</a>
            </div>
            <div class="header__socials-links__button">
              <a href="https://twitter.com/letsrp2" target="_blank">Twitter</a>
            </div>
            <div class="header__socials-links__button">
              <a href="https://patronite.pl/letsrp" target="_blank">
                Patronite
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="scss" scoped>
@import './../styles/home';
</style>
