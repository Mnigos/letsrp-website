<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      <img src="./../assets/logo.png" />
    </div>
    <div class="header__wrapper">
      <header class="header">
        <div class="header__description">
          <h1>
            <div class="header__description-logo">
              <span class="header__description-logo--left">Let's </span>
              <span>RP</span>
            </div>
            <div class="header__description-label">
              <p>Polski serwer RolePlay</p>
            </div>
          </h1>
        </div>
        <div class="header__socials">
          <div class="header__socials-label">
            <p>Możesz nas znaleźć na:</p>
          </div>
          <div class="header__socials-links">
            <div class="header__socials-links-button">
              <a href="https://discord.gg/Ffrh3KY" target="_blank">Discord</a>
            </div>
            <div class="header__socials-links-button">
              <a href="https://twitter.com/letsrp2" target="_blank">Twitter</a>
            </div>
            <div class="header__socials-links-button">
              <a href="https://patronite.pl/letsrp" target="_blank"
                >Patronite</a
              >
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
@use './../styles/vars';

body {
  align-items: flex-start;
}

@media (max-width: 480px) {
  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .logo-wrapper {
    img {
      display: none;
    }
  }
}
</style>
