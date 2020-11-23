<template>
  <div class="wrapper">
    <div class="info">
      <h1>Złożono podanie</h1>
      <p>
        Gratulację, udało ci się złożyć podanie. Jeżeli twoje podanie zostanie
        rozpatrzone zostaniesz poinformowany o tym na naszym discordzie na
        kanale #📩podania-status
      </p>
      <div class="info__back">
        <router-link to="/">Powrót do strony głównej</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer';

export default {
  name: 'ApplicationsDone',
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

.info {
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;

  &__back {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: vars.$dark-color;
    width: 400px;
    height: 100px;
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    font-family: sans-serif;
    border-radius: 25px;
    transition: 0.35s ease-in;
    border: vars.$dark-color solid 2px;

    &:hover {
      background-color: vars.$darker-color;
      transform: translatex(-15px);

      &::after {
        transform: translatex(-15px);
      }
    }

    &:active {
      border: vars.$green-color solid 2px;
    }

    a {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      width: 100%;
      height: 100%;

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
}

@media (max-width: 720px) {
  .info {
    width: 90vw;

    &__back {
      width: 300px;
      height: 80px;
    }
  }
}
</style>
