<template>
  <div class="wrapper">
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <h2><b>IC | </b>Imię i Nazwisko:</h2>
        {{ form.name }}
        <button
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
          <button @click="form.isActive = false">Zwiń</button>
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
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  display: flex;
}

h2 {
  font-weight: 400;
}

.forms {
  justify-content: center;
  align-items: center;
  width: 90vw;

  &__item-content {
    display: none;
  }
}

.display {
  display: flex;
}

.display-none {
  display: none;
}

.forms__item {
  background-color: vars.$darker-color;
  width: 60vw;
  min-height: 130px;
  margin-left: 15vw;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding-bottom: 30px;

  button {
    font-family: sans-serif;
    font-size: 24px;
    background: #00000000;
    outline: none;
    border: none;
    color: vars.$light-color;
    border-bottom: #00000000 2px solid;

    &:hover {
      border-bottom: vars.$light-color 2px solid;
      cursor: pointer;
    }
    &:active {
      border-bottom: vars.$green-color 2px solid;
      transition: 0.1s ease-in-out;
    }
  }
}

.forms__item-content {
  width: 70%;

  button {
    margin-top: 30px;
  }
}

.center-col {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
