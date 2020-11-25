<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na Whitelist</h2>
    </header>
    <main>
      <article class="form" id="form">
        <section class="form-half">
          <div class="form__element--header">
            <h3>Strefa IC</h3>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>IC</b> | Imię i Nazwisko</div>
              <input
                type="text"
                v-model="name"
                class="form__element-input"
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
                v-model="date"
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
                v-model="idea"
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
                v-model="story"
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
                v-model="action"
                placeholder="Kreatywna akcja z udziałem twojej postaci."
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
                v-model="old"
                placeholder="Twój wiek"
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label"><b>OOC</b> | Co wiesz o RP?</div>
              <textarea
                type="text"
                name="ooc/rpKnow"
                v-model="know"
                placeholder="Co wiesz o RP"
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>OOC</b> | Jakie masz doświadczenie w RP?
              </div>
              <textarea
                type="text"
                class="form__element-input"
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
                v-model="hex"
                placeholder="Twój Steam HEX np.11000011966ab8c"
              />
            </form>
          </div>
        </section>
      </article>
      <div class="send-button__wrapper">
        <button class="send-button" @click="submit()">Wyślij Aplikację</button>
        <div class="send-button__message" v-html="message"></div>
      </div>
    </main>
  </div>
</template>

<script>
import { validationLength, validationRegexp } from '../validation';
import Axios from 'axios';

export default {
  name: 'wlApp',
  data() {
    return {
      message: '',
      name: '',
      date: '',
      idea: '',
      story: '',
      action: '',
      old: '',
      know: '',
      experience: '',
      dc: '',
      hex: '',
    };
  },
  methods: {
    submit() {
      const dateRegexp = /^([0-2][0-9]|[0-9]|3[0-1])-(([0][0-9])|[0-9]|1[0-2])-[0-9]{4}$/;
      const dcRegexp = /.{1,}#[0-9]{4}|[0-9]{18}$/;
      const messagesArray = [];

      validationRegexp(
        [this.date, this.dc],
        [dateRegexp, dcRegexp],
        [
          'Musisz podać datę urodzenia twojej postaci w odpowiednim formacie',
          '<br /> Niepoprawny nick discord',
        ],
        messagesArray
      );

      validationLength(
        [
          this.name,
          this.idea,
          this.story,
          this.action,
          this.know,
          this.experience,
          this.hex,
        ],
        [8, 20, 200, 50, 0, 15, 10],
        [
          '<br />Imię i nazwisko twojej postaci musi zawierać co najmniej 8 znaków',
          '<br /> Musisz podać pomysł na twoją postać',
          '<br /> Historia twojej postaci musi zawierać conajmniej 200 znaków',
          '<br /> Kreatywna akcja musi zawierać co najmniej 50 znaków',
          '<br /> Musisz podać swoją wiedzę o rozgrywkach Roleplay',
          '<br /> Musisz podać swoje doświadczenie w rozgrywkach Roleplay',
          '<br /> Niepoprawny steam HEX ID',
        ],
        messagesArray
      );
      if (!this.old || typeof +this.old !== 'number')
        messagesArray.push('<br /> Musisz podać swój wiek');
      if (this.old) messagesArray[4] = '';

      this.message = messagesArray.slice(0).join('');

      const dateNow = new Date(Date.now()).toDateString();

      if (!this.message)
        Axios.post(`${process.env.VUE_APP_API_URL}/applications/wl`, {
          name: this.name,
          date: this.date,
          idea: this.idea,
          story: this.story,
          action: this.action,
          know: this.know,
          experience: this.experience,
          old: +this.old,
          dc: this.dc,
          hex: this.hex,
          submissionDate: dateNow,
        }).then(() => this.$router.push('/applications/done'));
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/form';
</style>
