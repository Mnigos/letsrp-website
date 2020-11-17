<template>
  <div class="wrapper">
    <div
      class="window"
      :class="{
        display: window.container,
        'display-none': !window.container,
      }"
    >
      <div
        class="window__verification--discard"
        :class="{
          display: window.verificationDiscard,
          'display-none': !window.verificationDiscard,
        }"
      >
        <h4>Czy napewno chcesz odrzucić to podanie?</h4>
        <button class="accept-button" @click="prompt">Odrzuć</button>
        <button class="discard-button" @click="cancel">Anuluj</button>
      </div>

      <div
        class="window__prompt--discard"
        :class="{
          display: window.promptDiscard,
          'display-none': !window.promptDiscard,
        }"
      >
        <h4>Podaj powód odrzucenia podania</h4>
        <textarea
          type="text"
          class="window__prompt--discard__input"
          v-model="reason"
          placeholder="Powód odrzucenia podania."
        ></textarea>
        <button class="accept-button" @click="alert('discard')">
          Zapisz
        </button>
      </div>

      <div
        class="window__alert--discard"
        :class="{
          display: window.alertDiscard,
          'display-none': !window.alertDiscard,
        }"
      >
        <h4>Odrzucono podanie</h4>
        <button class="accept-button" @click="cancel">OK</button>
      </div>

      <div
        class="window__verification--accept"
        :class="{
          display: window.verificationAccept,
          'display-none': !window.verificationAccept,
        }"
      >
        <h4>Czy napewno chcesz zatwierdzić to podanie?</h4>
        <button class="accept-button" @click="alert('accept')">
          Zatwierdź
        </button>
        <button class="discard-button" @click="cancel">Anuluj</button>
      </div>

      <div
        class="window__alert--accept"
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
        <h2>Imię i Nazwisko:</h2>
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
          <h2>Data Urodzenia:</h2>
          {{ form.date }}
          <h2>Właściciel organizacji:</h2>
          {{ form.owner }}
          <h2>Historia organizacji:</h2>
          {{ form.story }}
          <h2>Oczekiwania od serwera:</h2>
          {{ form.expects }}
          <h2>Wiek:</h2>
          {{ form.old }}
          <h2>Czym się zajmuje organizacja:</h2>
          {{ form.type }}
          <h2>Kwatera organizacji:</h2>
          {{ form.headquarters }}
          <h2>Członkowie organizacji:</h2>
          {{ form.members }}
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
  name: 'OrgView',
  data() {
    return {
      forms: [
        {
          name: 'e',
          date: '01-01-2020',
          owner: 'e',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          expects:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          type:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          headquarters:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          members: 2,
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form2',
          date: '01-01-2020',
          owner: 'e',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          expects:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          type:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          headquarters:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          members: 2,
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form3',
          date: '01-01-2020',
          owner: 'e',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          expects:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          type:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          headquarters:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          members: 2,
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form4',
          date: '01-01-2020',
          owner: 'e',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          expects:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          type:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          headquarters:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          members: 2,
          dc: 'MoneyIgos#2000',
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
