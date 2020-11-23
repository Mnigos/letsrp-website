<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na frakcję LSCM</h2>
    </header>
    <main>
      <article class="form" id="form">
        <section class="form-half">
          <div class="form__element--header">
            <h3>Strefa IC</h3>
          </div>
          <div class="form__element">
            <form>
              <div class="form__element-label"><b>IC</b> | Imię</div>
              <input
                type="text"
                v-model="name"
                class="form__element-input"
                placeholder="Twoje imię"
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
                <b>IC</b> | Pełniłeś już kiedyś rolę LSCM?
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="act"
                placeholder="Opisz swoją dawną rolę w LSCM jeżęli takową pełniłeś."
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>IC</b> | Co możesz wnieść do LSCM?
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="bring"
                placeholder="Co jesteś w stanie wnieść do LSCM"
              ></textarea>
            </form>
          </div>
        </section>
        <section class="form-half">
          <div class="form__element--header">
            <h3>Strefa OOC</h3>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>OOC</b> | Odegraj krótką scenkę
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="action"
                placeholder="Odegraj scenkę z komendami /me i /do"
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label"><b>OOC</b> | Dlaczego ty?</div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="whyU"
                placeholder="Dlaczego ty powinieneś być w frakcji LSCM?"
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>OOC</b> | Ile godzin dziennie możesz poświecić na granie?
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="hoursPerDay"
                placeholder="Ile godzin dziennie możesz poświęcić na serwer(Wpisz liczbę)."
              ></textarea>
            </form>
          </div>
          <div class="form__element--medium">
            <form>
              <div class="form__element-label">
                <b>OOC</b> | Doświadczenie w frakcji LSCM
              </div>
              <textarea
                type="text"
                class="form__element-input"
                v-model="experience"
                placeholder="Doświadczenie w frakcji LSCM"
              ></textarea>
            </form>
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
      act: '',
      bring: '',
      action: '',
      whyU: '',
      hoursPerDay: undefined,
      experience: '',
      old: undefined,
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
          this.act,
          this.bring,
          this.action,
          this.whyU,
          this.experience,
          this.hex,
        ],
        [8, 20, 20, 20, 20, 20, 15],
        [
          '<br />Imię i nazwisko twojej postaci musi zawierać co najmniej 8 znaków',
          '<br /> Musisz podać czy pełniłeś już kiedyś role w LSCM',
          '<br /> Musisz podać co wniesiesz do frakcji',
          '<br /> Akcja z /me i /do musi zawierać co najmniej 20 znaków',
          '<br /> Musisz podać dlaczego ty powinieneś być w frakcji LSCM',
          '<br /> Musisz podać swoje doświadczenie w frakcji LSCM',
          '<br /> Niepoprawny steam HEX ID',
        ],
        messagesArray
      );
      if (!this.old) messagesArray.push('<br /> Musisz podać swój wiek');
      if (this.old) messagesArray[4] = '';
      if (!this.hoursPerDay)
        messagesArray.push(
          '<br /> Musisz podać ile godzin dziennie jesteś w stanie spędzić'
        );
      if (this.hoursPerDay) messagesArray[7] = '';

      this.message = messagesArray.slice(0).join('');

      const dateNow = new Date(Date.now()).toDateString();

      if (!this.message)
        Axios.post(`${process.env.VUE_APP_API_URL}/applications/lscm`, {
          name: this.name,
          date: this.date,
          act: this.act,
          bring: this.bring,
          action: this.action,
          whyU: this.whyU,
          hoursPerDay: +this.hoursPerDay,
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
