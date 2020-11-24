<template>
  <div class="wrapper">
    <div class="hamburger__wrapper">
      <button class="hamburger" ref="hamburger" @click="handleClick()">
        <span class="hamburger__box">
          <span class="hamburger__inner"></span>
        </span>
      </button>
      <nav class="navbar" ref="nav">
        <div class="navbar__list" :key="page" v-for="page in pages">
          <div v-if="perms === page.perms">
            <button class="navbar__item" @click="go(page.link)">
              {{ page.name }}
            </button>
          </div>
          <div v-else-if="perms === 'admin'">
            <button class="navbar__item" @click="go(page.link)">
              {{ page.name }}
            </button>
          </div>
        </div>
      </nav>
    </div>
    <component :is="componentToShow" ref="component"></component>
  </div>
</template>

<script>
import { h } from 'vue';
import WlView from '../components/WlView';
import SupView from '../components/SupView';
import OrgView from '../components/OrgView';
import FirmView from '../components/FirmView';
import LscmView from '../components/LscmView';
import LspdView from '../components/LspdView';
import EmsView from '../components/EmsView';
import AdminManagement from '../components/AdminManagement';

const pages = {
  WlView,
  SupView,
  OrgView,
  FirmView,
  LscmView,
  LspdView,
  EmsView,
  AdminManagement,
};

export default {
  name: 'Admin',
  data() {
    return {
      pages: [
        {
          perms: 'wl',
          link: 'WlView',
          name: 'Whitelist',
        },
        {
          perms: 'sup',
          link: 'SupView',
          name: 'Support',
        },
        {
          perms: 'org',
          link: 'OrgView',
          name: 'Organizacja Przestępcza',
        },
        {
          perms: 'firm',
          link: 'FirmView',
          name: 'Firma',
        },
        {
          perms: 'lscm',
          link: 'LscmView',
          name: 'LSCM',
        },
        {
          perms: 'lspd',
          link: 'LspdView',
          name: 'LSPD',
        },
        {
          perms: 'ems',
          link: 'EmsView',
          name: 'EMS',
        },
        {
          link: 'AdminManagement',
          name: 'Zarządanie',
        },
      ],
      perms: '',
      componentToShow: {
        render: () => h('div', ''),
      },
    };
  },
  created() {
    if (!this.$store.state.token) return this.$router.push('/admin/login');
    this.go('WlView');
    this.perms = this.$store.state.perms;
  },
  methods: {
    handleClick() {
      this.$refs.hamburger.classList.toggle('hamburger--active');
      this.$refs.nav.classList.toggle('navbar--active');
    },
    async go(where) {
      this.componentToShow = pages[where];
      await this.$nextTick();
    },
  },
};
</script>

<style lang="scss" scoped>
@use '../styles/vars';

html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  background-color: vars.$dark-color;
  padding: 20px;
}

.wrapper {
  background-color: vars.$dark-color;
  min-height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  position: relative;
}

.hamburger__wrapper {
  position: fixed;
  top: 0;
  z-index: 1;
  max-width: 100px;
}

.hamburger {
  height: 20px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  margin-top: 10px;
  position: sticky;
  z-index: 1;
}

.hamburger,
.navbar {
  transition: transform 0.3s 0.1s ease-in-out;
}

.hamburger--active {
  transform: translatex(250px);
}

.hamburger__box {
  width: 35px;
  height: 24px;
  display: inline-block;
  position: relative;
}

@mixin hamburger-line {
  width: 100%;
  height: 3px;
  background-color: vars.$light-color;
  position: absolute;
}

.hamburger__inner {
  @include hamburger-line;

  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.1s 0.2s ease-in-out;
}

.hamburger__inner::before,
.hamburger__inner::after {
  @include hamburger-line;

  content: '';
  left: 0;
  transition: transform 0.2s 0.2s ease-in-out;
}

.hamburger__inner::before {
  top: -10px;
}

.hamburger__inner::after {
  top: 10px;
}

.hamburger--active .hamburger__inner {
  background-color: transparent;
}

.hamburger--active .hamburger__inner:before {
  transform: translateY(10px) rotate(45deg);
}

.hamburger--active .hamburger__inner:after {
  transform: translateY(-10px) rotate(-45deg);
}

.navbar {
  height: 100vh;
  width: 250px;
  background-color: vars.$darker-color;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  transform: translateX(-250px);
}

.navbar--active {
  transform: translateX(0px);
}

.navbar__list {
  margin-top: 10px;
  list-style: none;

  button {
    font-family: sans-serif;
    font-size: 24px;
    width: 100px;
    background: #00000000;
    outline: none;
    border: none;
    color: vars.$light-color;

    &:hover {
      border-bottom: vars.$light-color 2px solid;
    }
    &:active {
      border-bottom: vars.$green-color 2px solid;
      transition: 0.1s ease-in-out;
    }
  }
}

.navbar__item {
  margin-bottom: 20px;
}
</style>
