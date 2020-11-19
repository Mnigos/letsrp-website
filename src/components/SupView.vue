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
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <h2>EMSImię:</h2>
        {{ form.name }}
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
          <h2>O sobie:</h2>
          {{ form.about }}
          <h2>Dlaczego ty:</h2>
          {{ form.whyU }}
          <h2>Historia Postaci:</h2>
          {{ form.story }}
          <h2>Twoje doświadczenie na tym stanowisku:</h2>
          {{ form.experience }}
          <h2>
            Ile czasu dziennie jesteś w stanie poświęcić na serwer:
          </h2>
          {{ form.hoursPerDay }}
          <h2>Wiek:</h2>
          {{ form.old }}
          <h2>Discord:</h2>
          {{ form.dc }}
          <h2>Steam HEX:</h2>
          {{ form.hex }}
          <div class="forms__item-check">
            <button class="accept-button" @click="verification('accept')">
              Zaakceptuj
            </button>
            <button class="discard-button" @click="verification('discard')">
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
export default {
  name: 'SupView',
  data() {
    return {
      forms: [
        {
          name: 'e',
          about:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          whyU:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          hoursPerDay: 3,
          old: 1,
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form2',
          about:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          whyU:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          hoursPerDay: 3,
          old: 1,
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form3',
          about:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          whyU:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          hoursPerDay: 3,
          old: 1,
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form4',
          about:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          whyU:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          hoursPerDay: 3,
          old: 1,
          hex: '110000100000638',
          isActive: false,
        },
      ],
      checking: false,
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
  methods: {
    verification(type) {
      this.window.alertAccept = false;
      this.window.alertDiscard = false;
      this.window.promptDiscard = false;
      this.verificationDiscard = false;
      this.verificationAccept = false;
      this.window.container = true;
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
      if (type === 'accept') this.window.alertAccept = true;
      else this.window.alertDiscard = true;
    },
    cancel() {
      this.window.container = false;
      this.window.alertAccept = false;
      this.window.alertDiscard = false;
      this.window.promptDiscard = false;
      this.window.verificationDiscard = false;
      this.window.verificationAccept = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/adminForms';
</style>
