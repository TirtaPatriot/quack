<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated :class="{'bg-dark': darken}">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="menu"
          aria-label="Menu"
          @click="mainNavMenu = !mainNavMenu"
        />

        <q-toolbar-title>
          Patriot
        </q-toolbar-title>

        <div>
          <q-btn
          flat
          dense
          round
          aria-label="Theme"
          :icon="!darken ? icons.dark : icons.light"
          @click="darken = !darken"
        />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="mainNavMenu"
      show-if-above
      :bordered="!darken"
      :elevated="darken"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import {
  mdiMenu, mdiWeatherNight, mdiWhiteBalanceSunny,
} from '@quasar/extras/mdi-v5';
import EssentialLink from '../components/EssentialLink.vue';
import linksData from './main-menu';

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data: () => ({
    icons: {
      dark: mdiWeatherNight,
      light: mdiWhiteBalanceSunny,
    },
    menu: mdiMenu,
    essentialLinks: linksData,
  }),
  computed: {
    darken: {
      get() {
        return this.$store.state.layout.dark;
      },
      set(theme) {
        this.$store.dispatch('layout/setDark', theme);
      },
    },
    mainNavMenu: {
      get() {
        return this.$store.state.layout.mainNavMenu;
      },
      set(open) {
        this.$store.commit('layout/setMainNavOpen', open);
      },
    },
  },
};
</script>
