<template>
  <div class="wl-app">
    <header class="header">
      <h2>Formularz na Whitelist</h2>
    </header>
    <main>
      <article class="form" id="form">
        <section class="form-half">
          <div class="form__element">
            <form>
              <div class="form__element-label">Imię</div>
              <input
                type="text"
                id="name"
                v-model="name"
                class="form__element-input"
                name="ic/name"
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
                id="form__element-date"
                v-model="about"
                name="ic/date"
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
                name="ic/idea"
                v-model="whyU"
                id="form__element-idea"
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
                name="ic/story"
                v-model="experience"
                id="form__element-story"
                placeholder="Historia twojej postaci."
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
                name="ic/action"
                v-model="hoursPerDay"
                id="form__element-action"
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
                name="ooc/old"
                v-model="old"
                id="form__element-old"
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
                name="ooc/dc"
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
                name="ooc/hex"
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
export default {
  name: 'supApp',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    submit() {
      const dateRegexp = /^([0-2][0-9]|[0-9]|3[0-1])-(([0][0-9])|[0-9]|1[0-2])-[0-9]{4}$/;
      const dcRegexp = /.{1,}#[0-9]{4}|[0-9]{18}$/;
      const messagesArray = [];

      const validationLength = (keys, expectedLength, message) => {
        keys.forEach((key, i) => {
          if (key) {
            if (key.length < expectedLength[i]) messagesArray.push(message[i]);
          } else messagesArray.push(message[i]);
        });
      };

      const validationRegexp = (keys, expectedRegexp, message) => {
        keys.forEach((key, i) => {
          if (key) {
            if (!expectedRegexp[i].test(key)) messagesArray.push(message[i]);
          } else {
            messagesArray.push(message[i]);
          }
        });
      };

      validationRegexp(
        [this.dc],
        [dcRegexp],
        ['<br /> Niepoprawny nick discord']
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
        ]
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
