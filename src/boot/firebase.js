import firebase from 'firebase/app';
import 'firebase/auth';

export default async ({ store }) => {
  firebase.initializeApp(process.env.FIREBASE);

  // load auth on initial load
  await new Promise((resolve, reject) => {
    firebase.auth().onIdTokenChanged(async (user) => {
      const tokenResult = await user?.getIdTokenResult();
      store.commit('auth/authenticate', tokenResult);
      resolve();
    }, reject);
  });
};
