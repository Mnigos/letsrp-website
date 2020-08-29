<template>
  <div class="application">
    <div class="about">
      <div class="header__wrapper">
        <header class="header">
          <h1>Podania</h1>
        </header>
      </div>
      <div class="content_wrapper">
        <main>
          <article class="content">
            <div>
              <button @click="go('wlApp')" class="content__element">
                Podanie na Whitelist
              </button>
            </div>
            <div class="content__element">
              <router-link to="/Applications/sup">
                Podanie na Supporta
              </router-link>
            </div>
            <div class="content__element">
              <router-link to="/Applications/lspd">
                Podanie na frakcję LSPD
              </router-link>
            </div>
            <div class="content__element">
              <router-link to="/Applications/ems">
                Podanie na frakcję EMS
              </router-link>
            </div>
            <div class="content__element">
              <router-link to="/Applications/lscm">
                Podanie na frakcję LSCM
              </router-link>
            </div>
            <div class="content__element">
              <router-link to="/Applications/firm"
                >Podanie na Firmę</router-link
              >
            </div>
            <div class="content__element">
              <router-link to="/Applications/org">
                Podanie na Organizację Przestępczą
              </router-link>
            </div>

            <component :is="componentToShow"></component>
          </article>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
import wlApp from './../../components/wlApp.vue';

const pages = {
  wlApp,
};

export default {
  name: 'Applications',
  data() {
    return {
      componentToShow: {
        render: () => h('div', ''),
      },
    };
  },
  methods: {
    go(where) {
      this.componentToShow = pages[where];
    },
  },
};
</script>

<style lang="scss">
@use './../../styles/vars';

.content__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  width: 100%;
}

.content__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  flex-wrap: wrap;

  &__element {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 25px;
    background-color: vars.$dark-color;
    width: 80vw;
    margin: 10px;
    height: 100px;

    &:hover {
      background-color: vars.$darker-color;
    }

    a {
      color: #fff;
      text-decoration: none;

      &:hover {
        color: #fff;
        text-decoration: none;
      }

      &:visited {
        color: #fff;
        text-decoration: none;
      }
    }
  }
}

button {
  color: #fff;
  text-decoration: none;
  outline: none;
  font-size: 24px;
  font-family: sans-serif;
}

@media (min-width: 1024px) {
  .content__element {
    width: 30vw;
    margin: 30px 40px;
  }
}
</style>
