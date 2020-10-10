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
              <button @click="go('supApp')" class="content__element">
                Formularz na Support
              </button>
            </div>
            <div>
              <button @click="go('lspdApp')" class="content__element">
                Formularz na frakcję LSPD
              </button>
            </div>
            <div>
              <button @click="go('emsApp')" class="content__element">
                Formularz na frakcję EMS
              </button>
            </div>
            <div>
              <button @click="go('lscmApp')" class="content__element">
                formularz na frakcję LSCM
              </button>
            </div>
            <div>
              <button @click="go('firmApp')" class="content__element">
                Formularz na Firmę
              </button>
            </div>
            <div>
              <button @click="go('orgApp')" class="content__element">
                Formularz na Organizację Przestępczą
              </button>
            </div>

            <component :is="componentToShow" ref="component"></component>
          </article>
        </main>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { h } from 'vue';
import wlApp from '../components/wlApp';
import supApp from '../components/supApp';
import firmApp from '../components/firmApp';
import orgApp from '../components/orgApp';
import emsApp from '../components/emsApp';
import lspdApp from '../components/lspdApp';
import Footer from '../components/Footer';

const pages = {
  wlApp,
  supApp,
  firmApp,
  orgApp,
  emsApp,
  lspdApp,
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
    async go(where) {
      this.componentToShow = pages[where];
      await this.$nextTick();
      window.scrollTo({
        top: this.$refs.component.$el.getBoundingClientRect().top,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use './../styles/vars';
@import './../styles/applications';
</style>
