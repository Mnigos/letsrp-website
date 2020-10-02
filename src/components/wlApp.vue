<template>
  <div class="wl-app">
    <header class="header">
      <h2>Podanie na Whitelist</h2>
    </header>
    <main>
      <article class="form">
        <section class="form-half">
          <div class="form__element--header">
            <h3>Strefa IC</h3>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>IC</b> | Imię i Nazwisko</div>
              <input
                type="text"
                id="name"
                v-model="name"
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
                v-model="date"
                name="ic/date"
                placeholder="Data urodzenia twojej postaci.(dd-mm-rrrr)"
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>IC</b> | Pomysł na Postać
              </div>
              <textarea
                type="text"
                class="form__element-input"
                name="ic/idea"
                v-model="idea"
                id="form__element-idea"
                placeholder="Pomysł na twoją postać."
              ></textarea>
            </form>
          </div>
          <div class="form__element--large">
            <form>
              <div class="form__element-label">
                <b>IC</b> | Hisroria postaci
              </div>
              <textarea
                type="text"
                class="form__element-input"
                name="ic/story"
                v-model="story"
                id="form__element-story"
                placeholder="Historia twojej postaci."
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label"><b>IC</b> | Kreatywna Akcja</div>
              <textarea
                type="text"
                class="form__element-input"
                name="ic/action"
                v-model="action"
                id="form__element-action"
                placeholder="Kreatywna akcja z udziałem twojej postaci.(nie wymagane)"
              ></textarea>
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
                v-model="old"
                id="form__element-old"
                placeholder="Twój wiek"
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label"><b>OOC</b> | Co wiesz o RP?</div>
              <textarea
                type="text"
                class="form__element-input"
                name="ooc/rpKnow"
                v-model="rpKnow"
                id="form__element-rpKnow"
                placeholder="Co wiesz o RP"
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label--medium">
                <b>OOC</b> | Jakie masz doświadczenie w RP?
              </div>
              <textarea
                type="text"
                class="form__element-input"
                name="ooc/experience"
                v-model="experience"
                placeholder="Twoje doświadczenie w RP"
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>OOC</b> | Nick Discord</div>
              <input
                type="text"
                class="form__element-input"
                name="ooc/dc"
                v-model="dc"
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
                name="ooc/hex"
                v-model="hex"
                placeholder="Twój Steam HEX np.11000011966ab8c"
              />
            </form>
          </div>
        </section>
      </article>
      <div class="send-button-wrapper">
        <button class="send-button" @click="submit()">Wyślij Aplikację</button>
        <div class="send-button-message" v-html="message"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'wlApp',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    submit() {
      if (!this.name || this.name.length < 8)
        this.message =
          'Imię i nazwisko twojej postaci musi zawierać co najmniej 8 znaków.';
      if (!this.date)
        this.message += '<br /> Musisz podać datę urodzenia twojej postaci.';
      if (!this.idea)
        this.message += '<br /> Musisz podać pomysł na twoją postać.';
      if (!this.story || this.story.length < 200)
        this.message +=
          '<br /> Historia twojej postaci musi zawierać conajmniej 200 znaków.';
      if (!this.old) this.message += '<br /> Musisz podać swój wiek.';
      if (!this.rpKnow)
        this.message +=
          '<br /> Musisz podać swoją wiedzę o rozgrywkach Roleplay.';
      if (!this.experience)
        this.message +=
          '<br /> Musisz podać swoje doświadczenie w rozgrywkach Roleplay.';
      if (!this.dc || this.dc.length < 5)
        this.message += '<br /> Niepoprawny nick discord.';
      if (!this.hex || this.hex.length < 15)
        this.message += '<br /> Niepoprawny steam HEX ID';
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/wlApp';
</style>
