<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na Firmę</h2>
    </header>
    <main>
      <article class="form" id="form">
        <section class="form-half">
          <div class="form__element">
            <form>
              <div class="form__element-label">Imię</div>
              <input
                type="text"
                v-model="name"
                class="form__element-input"
                placeholder="Twoje imię."
              />
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">Pomysł na firmę</div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="idea"
                placeholder="Pomysł na twoją firmę."
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">Właściciel</div>
              <input
                type="text"
                class="form__element-input"
                v-model="whyU"
                placeholder="Imię IC właściciela firmy."
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
                placeholder="Ilość członków twojej firmy.(Wpisz liczbę)"
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
                Typ firmy
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
                Kwatera twojej firmy
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="headquarters"
                placeholder="Opisz gdzie będzie znajdowała się kwatera twojej firmy."
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
import { validationRegexp, validationLength } from '../store/validation';

export default {
  name: 'supApp',
  data() {
    return {
      message: '',
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
      if (!this.old) messagesArray.push('<br /> Musisz podać swój wiek');
      if (this.old) messagesArray[6] = '';
      if (!this.members)
        messagesArray.push('<br /> Musisz podać członków swojej firmy');
      if (this.hoursPerDay) messagesArray[7] = '';

      this.message = messagesArray.slice(0).join('');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/form';
</style>
