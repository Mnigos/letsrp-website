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
@use './../styles/vars';

body {
  align-items: flex-start;
}

h1,
h2 {
  margin: 0;
}

.wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}

.logo-wrapper {
  img {
    display: none;
  }
}

.header {
  height: 30vh;
  &__description {
    width: 100%;

    &-logo {
      height: 120px;
      width: 100%;
      text-align: center;

      &__wrapper {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        font-family: 'Anton', sans-serif;
        font-weight: 600;
        font-size: 47px;
        letter-spacing: 1px;
      }

      &--left {
        color: vars.$green-color;
      }
    }

    &-label {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      font-size: 18px;
    }
  }

  &__socials {
    margin-top: 50px;
    text-align: center;

    &-label {
      font-size: 27px;
    }

    &-links {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;

      &__button {
        background-color: vars.$dark-color;
        margin: 10px;
        border-radius: 20px;
        color: #fff;

        height: 60px;
        width: 280px;

        &:hover {
          background-color: vars.$darker-color;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          -webkit-appearance: button;
          -moz-appearance: button;
          appearance: button;
          text-decoration: none;

          height: 100%;
          width: 100%;

          &:hover {
            color: #fff;
          }
          &:visited {
            color: #fff;
          }
        }
      }
    }
  }
}

@media (min-width: 720px) {
  .header {
    padding: 0;
    height: 60vh;
    &__description {
      height: 20vh;
      width: 100%;

      &-logo {
        height: 150px;

        &__wrapper {
          font-size: 60px;
        }
      }

      &-label {
        font-size: 22.8px;
      }
    }

    &__socials {
      &-label {
        font-size: 30px;
      }

      &-links {
        &__button {
          border-radius: 25px;

          height: 80px;
          width: 320px;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .logo-wrapper {
    img {
      display: block;
      width: 300px;
    }
  }

  .header {
    height: 60vh;
    &__description {
      height: 20vh;
      width: 100%;

      &-logo {
        height: 150px;

        &__wrapper {
          font-size: 60px;
        }
      }

      &-label {
        font-size: 22.8px;
      }
    }

    &__socials {
      &-label {
        font-size: 30px;
      }

      &-links {
        &__button {
          border-radius: 25px;

          height: 80px;
          width: 320px;
        }
      }
    }
  }
}
</style>
