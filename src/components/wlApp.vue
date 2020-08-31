<template>
  <div class="container">
    <header class="header">
      <h2>Podanie na Whitelist</h2>
    </header>
    <main>
      <article class="form">
        <section class="form-half">
          <div class="form__element--header--first">
            <h3>Strefa IC</h3>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>IC</b> | Imię i Nazwisko</div>
              <input
                type="text"
                id="form__element-name"
                class="form__element-input"
                name="ic/name"
                placeholder="Imię i Nazwisko twojej postaci."
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>IC</b> | Data Urodzenia</div>
              <input
                type="text"
                class="form__element-input"
                id="form__element-date"
                name="ic/date"
                placeholder="Data urodzenia twojej postaci.(dd-mm-rrrr)"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">
                <b>IC</b> | Pomysł na Postać
              </div>
              <input
                type="text"
                class="form__element-input"
                name="ic/idea"
                id="form__element-idea"
                placeholder="Pomysł na twoją postać."
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element"><b>IC</b> | Kreatywna Akcja</div>
              <input
                type="text"
                class="form__element-input"
                name="ic/action"
                id="form__element-action"
                placeholder="Kreatywna akcja z udziałem twojej postaci.(nie wymagane)"
              />
            </form>
          </div>
        </section>
        <section class="form-half">
          <div class="form__element--header">
            <h3>Strefa OOC</h3>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>OOC</b> | Wiek</div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/old"
                id="form__element-old"
                placeholder="Twój wiek"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>OOC</b> | Co wiesz o RP?</div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/rpKnow"
                id="form__element-rpKnow"
                placeholder="Co wiesz o RP"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">
                <b>OOC</b> | Jakie masz doświadczenie w RP?
              </div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/rpExperience"
                placeholder="Twoje doświadczenie w RP"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>OOC</b> | Nick Discord</div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/dc"
                placeholder="Twój nick discord np.MoneyIgos#2000"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>OOC</b> | Steam HEX</div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/old"
                placeholder="Twój Steam HEX np.11000011966ab8c"
              />
            </form>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'wlApp',
};
</script>

<style lang="scss" scooped>
@use './../styles/vars';

.container {
  background-color: rgba(32, 32, 33, 0.5);
  min-height: 100vh;
  width: 70vw;
  display: flex;
  //align-items: flex-end;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;
  border-radius: 20px;
}
.header {
  padding-top: 15vh;
  width: 100vw;
  height: 10vh;
  margin: 0;
  font-size: 1.3em;
}
.form {
  min-height: 200vh;
  width: 50vw;

  &__element {
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    &--header {
      font-size: 1.2em;
      margin-top: 240px;

      &--first {
        margin-top: 20px;
      }
    }
    &-label {
      width: 50vw;
      height: 4vh;
    }
    input {
      width: 40vw;
      height: 7vh;
      margin: 20px;
      background-color: vars.$dark-color;
      color: #fff;
      border-radius: 20px;
      border: vars.$darker-color solid 2px;
      text-align: center;
    }
  }
  &-half {
    height: 50vh;
  }
}
</style>
