<template>
  <div class="wrapper">
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <h2><b>IC | </b>Imię i Nazwisko:</h2>
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
          <h2><b>IC | </b>Data Urodzenia:</h2>
          {{ form.date }}
          <h2><b>IC | </b>Pomysł na postać:</h2>
          {{ form.idea }}
          <h2><b>IC | </b>Historia Postaci:</h2>
          {{ form.story }}
          <h2><b>IC | </b>Kreatywna Akcja:</h2>
          {{ form.action }}
          <h2><b>IC | </b>Wiek:</h2>
          {{ form.old }}
          <h2><b>OOC | </b>Wiedza RP:</h2>
          {{ form.know }}
          <h2><b>OOC | </b>Doświadczenie w RP:</h2>
          {{ form.experience }}
          <h2><b>OOC | </b>Discord:</h2>
          {{ form.dc }}
          <h2><b>OOC | </b>Steam HEX:</h2>
          {{ form.hex }}
          <div class="forms__item-check">
            <button class="forms__item-content--accept" @click="accept">
              Zaakceptuj
            </button>
            <button class="forms__item-content--discard" @click="discard">
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
  name: 'WlView',
  data() {
    return {
      forms: [
        {
          name: 'e',
          date: '01-01-2020',
          idea:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          action:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          know:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form2',
          date: '01-01-2020',
          idea:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          action:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          know:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form3',
          date: '01-01-2020',
          idea:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          action:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          know:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
        {
          name: 'Form4',
          date: '01-01-2020',
          idea:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          story:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          action:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum utviverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          old: 1,
          know:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          experience:
            'viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut',
          dc: 'MoneyIgos#2000',
          hex: '110000100000638',
          isActive: false,
        },
      ],
      checking: false,
    };
  },
  methods: {
    discard() {
      confirm('Czy na pewno chcesz odrzucić to podanie?').then(
        prompt('Podaj powód odrzucenia podania(opcjonalne)').then(
          alert('Podanie zostało odrzucone!')
        )
      );
    },
    accept() {
      confirm('Czy na pewno chcesz zatwierdzić to podanie?').then(
        alert('Podanie zostało zatwierdzone!')
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/adminForms';
</style>
