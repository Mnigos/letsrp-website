<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na Support</h2>
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
              <div class="form__element-label">O sobie</div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="about"
                placeholder="Kilka zdań o sobie."
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                Dlaczego ty
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="whyU"
                placeholder="Dlaczego właśnie ty powinieneś zostać supportem?"
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                Twoje doświadczenie na tym stanowisku
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="experience"
                placeholder="Twoje doświadczenie na stanowisku supporta."
              ></textarea>
            </form>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label">
                Ile czasu dziennie jesteś w stanie poświęcić na serwer
              </div>
              <input
                type="text"
                class="form__element-input"
                v-model="hoursPerDay"
                placeholder="Ile godzin dziennie możesz poświęcić na serwer(Wpisz liczbę)."
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
        [this.name, this.about, this.whyU, this.experience, this.hex],
        [8, 20, 20, 20, 15],
        [
          '<br />Imię i nazwisko twojej postaci musi zawierać co najmniej 8 znaków',
          '<br /> Musisz podać informację o sobie',
          '<br /> Musisz podać informację dlaczego ty',
          '<br /> Musisz podać swoje doświadczenie na tym stanowisku',
          '<br /> Niepoprawny steam HEX ID',
        ],
        messagesArray
      );
      if (!this.old) messagesArray.push('<br /> Musisz podać swój wiek');
      if (this.old) messagesArray[6] = '';
      if (!this.hoursPerDay)
        messagesArray.push(
          '<br /> Musisz podać ile godzin dziennie jesteś w stanie spędzić'
        );
      if (this.hoursPerDay) messagesArray[7] = '';

      this.message = messagesArray.slice(0).join('');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../styles/form';
</style>
