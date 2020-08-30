<template>
  <div class="container">
    <header class="header">
      <h2>Podanie na Whitelist</h2>
    </header>
    <main>
      <article class="content">
        <section class="content-ic">
          <div class="content-ic__element--header">
            <h3>Strefa IC</h3>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Imię i Nazwisko
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/name"
                label="Imię i Nazwisko twojej postaci."
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Data Urodzenia
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/date"
                label="Data urodzenia twojej postaci.(dd-mm-rrrr)"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Pomysł na Postać
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/idea"
                label="Pomysł na twoją postać."
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label"
                ><b>IC</b> | Kreatywna Akcja
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ic/action"
                label="Kreatywna akcja z udziałem twojej postaci.(nie wymagane)"
              />
            </form>
          </div>
        </section>
        <section class="content-ooc">
          <div class="content-ooc__element--header">
            <h3>Strefa OOC</h3>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label">
                <b>OOC</b> | Wiek
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ooc/old"
                label="Twój wiek"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label">
                <b>OOC</b> | Co wiesz o RP?
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ooc/rpKnow"
                label="Co wiesz o RP"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label">
                <b>OOC</b> | Jakie masz doświadczenie w RP?
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ooc/rpExperience"
                label="Twoje doświadczenie w RP"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label">
                <b>OOC</b> | Nick Discord
              </label>
              <input
                type="text"
                class="content-ic__element-form"
                name="ooc/dc"
                label="Twój nick discord np.MoneyIgos#2000"
              />
            </form>
          </div>
          <div class="content-ic__element">
            <form>
              <label class="content-ic__element-label">
                <b>OOC</b> | Steam HEX
              </label>
              <input
                type="text"
                class="content-ic__element-form"
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
