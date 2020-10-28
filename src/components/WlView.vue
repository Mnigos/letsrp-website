<template>
  <div class="wrapper">
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <p>Imię i Nazwisko: {{ form.name }}</p>
        <button ref="expandBtn" @click="display">...</button>
        <div class="forms__item-content" ref="content">
          <p>Content: {{ form.content }}</p>
          <p><button @click="display">Zwiń</button></p>
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
          name: 'Form1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
        },
        {
          name: 'Form2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
        },
        {
          name: 'Form3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
        },
        {
          name: 'Form4',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
        },
      ],
    };
  },
  methods: {
    display() {
      this.$refs.content.classList.toggle('display');
      this.$refs.expandBtn.classList.toggle('display-none');
      console.log('e');
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

.wrapper {
  height: 200vh;
  display: flex;
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
  flex-wrap: wrap;

  button {
    font-family: sans-serif;
    font-size: 24px;
    background: #00000000;
    outline: none;
    border: none;
    color: vars.$light-color;

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
</style>
