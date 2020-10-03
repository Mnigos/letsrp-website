<template>
  <footer class="footer">
    <p>Copyright &copy;2020 Let's RP | Made by MoneyIgos</p>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/vars';

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 0;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100vw;
  font-size: 0.8em;
  text-align: center;
  background-color: vars.$dark-color;

  p {
    margin: 5px, 0;
  }
}
</style>
