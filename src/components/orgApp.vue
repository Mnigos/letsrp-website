<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na Organizację Przestępczą</h2>
    </header>
    <main>
      <article class="form" id="form">
        <section class="form-half">
          <div class="form__element">
            <form>
              <div class="form__element-label">Nazwa</div>
              <input
                type="text"
                v-model="name"
                class="form__element-input"
                placeholder="Nazwa Organizacji"
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">Pomysł na Organizację</div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="idea"
                placeholder="Pomysł na twoją organizację."
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">Właściciel</div>
              <input
                type="text"
                class="form__element-input"
                v-model="owner"
                placeholder="Imię IC właściciela organizacji."
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                Czego oczekujecie od serwera?
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="expects"
                placeholder="Twoje oczekiwania względem serwera."
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">
                Ilość członków
              </div>
              <input
                type="text"
                class="form__element-input"
                v-model="members"
                placeholder="Ilość członków twojej organizacji.(Wpisz liczbę)"
              />
            </form>
          </div>
        </section>
        <section class="form-half">
          <div class="form__element">
            <form>
              <div class="form__element-label">Wiek</div>
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
              <div class="form__element-label">
                Typ Organizacji
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="type"
                placeholder="Czy będzie się zajmowała twoja firma."
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                Kwatera twojej Organizacji
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="headquarters"
                placeholder="Opisz gdzie będzie znajdowała się kwatera twojej organizacji."
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">Nick Discord</div>
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
              <div class="form__element-label">Steam HEX</div>
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
import { validationRegexp, validationLength } from '../validation';
import Axios from 'axios';

export default {
  name: 'orgApp',
  data() {
    return {
      message: '',
      name: '',
      idea: '',
      owner: '',
      expects: '',
      members: undefined,
      old: undefined,
      type: '',
      headquarters: '',
      dc: '',
      hex: '',
    };
  },
  methods: {
    submit() {
      const dcRegexp = /.{1,}#[0-9]{4}|[0-9]{18}$/;
      const messagesArray = [];

      validationRegexp(
        [this.dc],
        [dcRegexp],
        ['<br /> Niepoprawny nick discord'],
        messagesArray
      );

      validationLength(
        [
          this.name,
          this.idea,
          this.owner,
          this.expects,
          this.type,
          this.headquarters,
          this.hex,
        ],
        [1, 20, 8, 20, 15],
        [
          '<br /> Musisz podać swoje imię',
          '<br /> Musisz podać pomysł na firmę',
          '<br /> Musisz podać właściciela swojej firmy',
          '<br /> Musisz podać typ swojej firmy',
          '<br /> Musisz podać kwaterę firmy',
          '<br /> Niepoprawny steam HEX ID',
        ],
        messagesArray
      );
      if (!this.old || typeof this.old !== 'number')
        messagesArray.push('<br /> Musisz podać swój wiek');
      if (this.old) messagesArray[6] = '';
      if (!this.members || typeof this.members !== 'number')
        messagesArray.push('<br /> Musisz podać członków swojej firmy');
      if (this.members) messagesArray[7] = '';

      this.message = messagesArray.slice(0).join('');

      const dateNow = new Date(Date.now()).toDateString();

      if (!this.message)
        Axios.post(`${process.env.VUE_APP_API_URL}/applications/org`, {
          name: this.name,
          idea: this.idea,
          owner: this.owner,
          expects: this.expects,
          members: +this.members,
          old: +this.old,
          type: this.type,
          headquarters: this.headquarters,
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
