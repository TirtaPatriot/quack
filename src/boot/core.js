import { Dark } from 'quasar';

export default async ({ store }) => {
  Dark.set(store.state.layout.dark);
};
