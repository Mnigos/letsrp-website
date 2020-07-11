<template>
  <div class="header__wrapper">
    <header class="header">
      <div class="header__description">
        <h1>Polski serwer RolePlay</h1>
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
            <a href="https://patronite.pl/letsrp" target="_blank">Patronite</a>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
@use './../styles/vars';

.header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;

  &__socials {
    &-links {
      &-button {
        background-color: vars.$dark-color;
        margin: 20px;
        border-radius: 15px;
        height: 7vh;
        display: flex;
        align-items: center;

        &:hover {
          background-color: vars.$darker-color;
        }
      }
    }

    a {
      padding-top: 15px;
      color: #fff;
      text-decoration: none;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
