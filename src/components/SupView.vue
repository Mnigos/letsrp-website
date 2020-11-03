<template>
  <div class="wrapper">
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <h2><b>IC | </b>Imię:</h2>
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
          <h2><b>IC | </b>O sobie:</h2>
          {{ form.about }}
          <h2><b>IC | </b>Dlaczego ty:</h2>
          {{ form.whyU }}
          <h2><b>IC | </b>Historia Postaci:</h2>
          {{ form.story }}
          <h2><b>IC | </b>Twoje doświadczenie na tym stanowisku:</h2>
          {{ form.experience }}
          <h2>
            <b>IC | </b>
            Ile czasu dziennie jesteś w stanie poświęcić na serwer:
          </h2>
          {{ form.hoursPerDay }}
          <h2><b>OOC | </b>Wiek:</h2>
          {{ form.old }}
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
