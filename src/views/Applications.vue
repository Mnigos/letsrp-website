<template>
  <div class="wrapper">
    <div class="about">
      <div class="header__wrapper">
        <header class="header">
          <h1>Aplikacje</h1>
        </header>
      </div>
      <div class="content_wrapper">
        <main>
          <article class="content">
            <div>
              <button @click="go('wlApp')" class="content__element">
                Formularz na Whitelist
              </button>
            </div>
            <div>
              <button to="/Applications/sup" class="content__element">
                Formularz na Support
              </button>
            </div>
            <div>
              <button to="/Applications/lspd" class="content__element">
                Formularz na frakcję LSPD
              </button>
            </div>
            <div>
              <button to="/Applications/ems" class="content__element">
                Formularz na frakcję EMS
              </button>
            </div>
            <div>
              <button to="/Applications/lscm" class="content__element">
                formularz na frakcję LSCM
              </button>
            </div>
            <div>
              <button to="/Applications/firm" class="content__element">
                Formularz na Firmę
              </button>
            </div>
            <div>
              <button to="/Applications/org" class="content__element">
                Formularz na Organizację Przestępczą
              </button>
            </div>

            <component :is="componentToShow"></component>
          </article>
        </main>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { h } from 'vue';
import wlApp from '../components/wlApp.vue';
import Footer from '../components/Footer';

const pages = {
  wlApp,
};

export default {
  name: 'Applications',
  components: {
    Footer,
  },
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

<style lang="scss" scoped>
@use './../styles/vars';
@import './../styles/applications';
</style>
