<template>
  <div class="wrapper">
    <div
      :class="{
        window: window.container,
        'display-none': !window.container,
      }"
    >
      <div
        class="window__element"
        :class="{
          display: window.verificationDiscard,
          'display-none': !window.verificationDiscard,
        }"
      >
        <h4>Czy napewno chcesz odrzucić to podanie?</h4>
        <div class="window__element__buttons">
          <button class="accept-button" @click="prompt">Odrzuć</button>
          <button class="discard-button" @click="cancel">Anuluj</button>
        </div>
      </div>

      <div
        class="window__element"
        :class="{
          display: window.promptDiscard,
          'display-none': !window.promptDiscard,
        }"
      >
        <h4>Podaj powód odrzucenia podania</h4>
        <textarea
          type="text"
          class="window__element__input"
          v-model="reason"
          placeholder="Powód odrzucenia podania."
        ></textarea>
        <button class="accept-button" @click="alert('discard')">
          Zapisz
        </button>
      </div>

      <div
        class="window__element"
        :class="{
          display: window.alertDiscard,
          'display-none': !window.alertDiscard,
        }"
      >
        <h4>Odrzucono podanie</h4>
        <button class="accept-button" @click="cancel">OK</button>
      </div>

      <div
        class="window__element"
        :class="{
          display: window.verificationAccept,
          'display-none': !window.verificationAccept,
        }"
      >
        <h4>Czy napewno chcesz zatwierdzić to podanie?</h4>
        <div class="window__element__buttons">
          <button class="accept-button" @click="alert('accept')">
            Zatwierdź
          </button>
          <button class="discard-button" @click="cancel">Anuluj</button>
        </div>
      </div>

      <div
        class="window__element"
        :class="{
          display: window.alertAccept,
          'display-none': !window.alertAccept,
        }"
      >
        <h4>Zatwierdzono podanie</h4>
        <button class="accept-button" @click="cancel">OK</button>
      </div>
    </div>

    <div class="status-type">
      <h3>Zaapceptowane podania</h3>
      <input type="checkbox" v-model="acceptedForms" @change="formFilter" />
    </div>
    <div class="search-bar">
      <h3>Wyszukaj podania</h3>
      <input
        type="text"
        v-model="search"
        placeholder="Wyszukaj podanie za pomocą discord ID"
      />
    </div>
    <article class="forms">
      <section class="forms__item" v-for="form in filteredForms" :key="form">
        <div
          class="forms__item__header"
          :class="{ display: !form.isActive, 'display-none': form.isActive }"
        >
          <h2><b>OOC | </b>Discord:</h2>
          <h3>&nbsp;{{ form.dc }}</h3>
        </div>
        <button
          class="collapse-button"
          @click="form.isActive = true"
          :class="{ display: !form.isActive, 'display-none': form.isActive }"
        >
          ...
        </button>
        <div
          class="forms__item-content center-col"
          :class="{ display: form.isActive, 'display-none': !form.isActive }"
        >
          <h2>Imię i Nazwisko:</h2>
          {{ form.name }}
          <h2>Data Urodzenia:</h2>
          {{ form.date }}
          <h2>Właściciel firmy:</h2>
          {{ form.owner }}
          <h2>Historia firmy:</h2>
          {{ form.story }}
          <h2>Oczekiwania od serwera:</h2>
          {{ form.expects }}
          <h2>Wiek:</h2>
          {{ form.old }}
          <h2>Czym się zajmuje firma:</h2>
          {{ form.type }}
          <h2>Kwatera firma:</h2>
          {{ form.headquarters }}
          <h2>Członkowie firmy:</h2>
          {{ form.members }}
          <h2>Discord:</h2>
          {{ form.dc }}
          <h2>Steam HEX:</h2>
          {{ form.hex }}
          <div class="forms__item-check">
            <button
              class="accept-button"
              @click="verification('accept', form._id)"
            >
              Zaakceptuj
            </button>
            <button
              class="discard-button"
              @click="verification('discard', form._id)"
            >
              Odrzuć
            </button>
          </div>
          <button class="collapse-button" @click="form.isActive = false">
            Zwiń
          </button>
        </div>
      </section>
    </article>
  </div>
</template>
<script>
import Axios from 'axios';

export default {
  name: 'FirmView',
  data() {
    return {
      forms: [],
      search: '',
      checking: false,
      reason: '',
      acceptedForms: false,
      formsType: 'awaiting',
      id: '',
      window: {
        container: false,
        alertAccept: false,
        alertDiscard: false,
        promptDiscard: false,
        verificationAccept: false,
        verificationDiscard: false,
      },
    };
  },
  created() {
    Axios.post(`${process.env.VUE_APP_API_URL}/admin/firm`, {
      token: this.$store.state.token,
    }).then(res => (this.forms = res.data.form));
  },
  methods: {
    verification(type, id) {
      this.window.alertAccept = false;
      this.window.alertDiscard = false;
      this.window.promptDiscard = false;
      this.verificationDiscard = false;
      this.verificationAccept = false;
      this.window.container = true;

      this.id = id;

      if (type === 'accept') this.window.verificationAccept = true;
      else this.window.verificationDiscard = true;
    },
    prompt() {
      this.window.verificationDiscard = false;
      this.window.promptDiscard = true;
    },
    alert(type) {
      this.window.verificationAccept = false;
      this.window.promptDiscard = false;
      if (type === 'accept') {
        this.window.alertAccept = true;
        console.log(this.id);

        Axios.post(`${process.env.VUE_APP_API_URL}/admin/firm/check`, {
          token: this.$store.state.token,
          id: this.id,
          status: 'accepted',
        });
      } else {
        this.window.alertDiscard = true;
        console.log(this.id);

        Axios.post(`${process.env.VUE_APP_API_URL}/admin/firm/check`, {
          token: this.$store.state.token,
          id: this.id,
          status: 'accepted',
          reason: this.reason,
        });
      }

      this.form = '';
    },
    cancel() {
      this.window.container = false;
      this.window.alertAccept = false;
      this.window.alertDiscard = false;
      this.window.promptDiscard = false;
      this.window.verificationDiscard = false;
      this.window.verificationAccept = false;

      this.form = '';
    },
  },
  computed: {
    filteredForms() {
      if (!this.acceptedForms)
        return this.forms.filter(form => {
          this.formsType = 'awaiting';
          return form.dc.match(this.search) && form.status.match('awaiting');
        });
      else
        return this.forms.filter(form => {
          this.formsType = 'accepted';
          return form.dc.match(this.search) && form.status.match('accepted');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/adminForms';
</style>
