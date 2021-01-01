import { Dark } from 'quasar';

export function toggleMainNavMenu({ commit, state }) {
  commit('setMainNavOpen', !state.setMainNavOpen);
}

export function setDark({ commit }, dark) {
  Dark.set(dark);
  commit('setDark', dark);
}
