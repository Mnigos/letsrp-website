<template>
  <div class="container">
    <header class="header">
      <h2>Podanie na Whitelist</h2>
    </header>
    <main>
      <article class="form">
        <section class="form-ic">
          <div class="form__element--header">
            <h3>Strefa IC</h3>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label">
                <b>IC</b> | Imię i Nazwisko
              </label>
              <input
                type="text"
                class="form__element-input"
                name="ic/name"
                placeholder="Imię i Nazwisko twojej postaci."
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label"
                ><b>IC</b> | Data Urodzenia
              </label>
              <input
                type="text"
                class="form__element-inputt"
                name="ic/date"
                placeholder="Data urodzenia twojej postaci.(dd-mm-rrrr)"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label"
                ><b>IC</b> | Pomysł na Postać
              </label>
              <input
                type="text"
                class="form__element-input"
                name="ic/idea"
                placeholder="Pomysł na twoją postać."
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element"><b>IC</b> | Kreatywna Akcja </label>
              <input
                type="text"
                class="form__element-input"
                name="ic/action"
                placeholder="Kreatywna akcja z udziałem twojej postaci.(nie wymagane)"
              />
            </form>
          </div>
        </section>
        <section class="form-ooc">
          <div class="form__element--header">
            <h3>Strefa OOC</h3>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element"> <b>OOC</b> | Wiek </label>
              <input
                type="text"
                class="form__element-inputt"
                name="ooc/old"
                placeholder="Twój wiek"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label">
                <b>OOC</b> | Co wiesz o RP?
              </label>
              <input
                type="text"
                class="form__element-inputt"
                name="ooc/rpKnow"
                placeholder="Co wiesz o RP"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label">
                <b>OOC</b> | Jakie masz doświadczenie w RP?
              </label>
              <input
                type="text"
                class="form__element-input"
                name="ooc/rpExperience"
                label="Twoje doświadczenie w RP"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label">
                <b>OOC</b> | Nick Discord
              </label>
              <input
                type="text"
                class="form__element-input"
                name="ooc/dc"
                label="Twój nick discord np.MoneyIgos#2000"
              />
            </form>
          </div>
          <div class="form__element">
            <form>
              <label class="form__element-label">
                <b>OOC</b> | Steam HEX
              </label>
              <input
                type="text"
                class="form__element-input"
                name="ooc/old"
                label="Twój Steam HEX np.11000011966ab8c"
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

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.header {
  width: 100vw;
}
.form {
  height: 10vh;
  width: 50vw;
}
</style>
