<template>
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

  &__description {
    &-logo {
      height: 15vh;
      font-family: 'Anton', sans-serif;
      font-weight: 600;
      font-size: 100px;
      letter-spacing: 1px;

      &--left {
        color: vars.$green-color;
      }
    }

    &-label {
      font-size: 27px;
    }
  }

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

@media (min-width: 570px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    &__description {
      &-logo {
        //height: 400px;
        font-family: 'Anton', sans-serif;
        font-weight: 600;
        font-size: 130px;
        letter-spacing: 1px;

        &--left {
          color: vars.$green-color;
        }
      }

      &-label {
        font-size: 36px;
        margin-top: 60px;
      }
    }

    &__socials {
      &-label {
        font-size: 32px;
      }

      &-links {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-button {
          background-color: vars.$dark-color;
          font-size: 32px;
          margin: 20px;
          border-radius: 2vh;
          height: 7vh;
          width: 400px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;

          &:hover {
            background-color: vars.$darker-color;
          }

          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
}

@media (min-width: 1100px) {
  .header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    margin-right: 15vw;

    &__description {
      &-logo {
        //height: 400px;
        font-family: 'Anton', sans-serif;
        font-weight: 600;
        font-size: 130px;
        letter-spacing: 1px;

        &--left {
          color: vars.$green-color;
        }
      }

      &-label {
        font-size: 36px;
        margin-top: 60px;
      }
    }

    &__socials {
      &-label {
        font-size: 32px;
      }

      &-links {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-button {
          background-color: vars.$dark-color;
          font-size: 32px;
          margin: 20px;
          border-radius: 2vh;
          height: 7vh;
          width: 400px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: flex-end;

          &:hover {
            background-color: vars.$darker-color;
          }

          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
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
}
</style>
