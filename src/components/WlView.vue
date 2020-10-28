<template>
  <div class="wrapper">
    <article class="forms">
      <section class="forms__item" v-for="form in forms" :key="form">
        <p><b>Imię i Nazwisko: </b>{{ form.name }}</p>
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
          <p><b>Content: </b>{{ form.content }}</p>
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
          name: 'Form1',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
          isActive: false,
        },
        {
          name: 'Form2',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
          isActive: false,
        },
        {
          name: 'Form3',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
          isActive: false,
        },
        {
          name: 'Form4',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet risus feugiat in ante metus dictum at. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Nulla malesuada pellentesque elit eget. Vestibulum sed arcu non odio euismod lacinia. Morbi tempus iaculis urna id volutpat lacus. Viverra justo nec ultrices dui sapien eget mi proin. Quis vel eros donec ac odio tempor orci dapibus. Proin sed libero enim sed',
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

.center-col {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
