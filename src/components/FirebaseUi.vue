<template>
    <div
    id="session-container"
    class="screen"
  >
    <img
      src="../assets/logo.svg"
      alt="PDAM Tirta Patriot"
      class="splash-logo"
    />

    <div class="tirta wave">
      <p style="text-align: left">PDAM</p>
      <h1>Tirta Patriot</h1>
      <p style="text-align: right">Kota Bekasi</p>
    </div>

    <div id="authentication"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'FirebaseUi',
  async mounted() {
    if (process.env.SERVER) return;
    const firebaseui = await import('firebaseui-id/dist/npm__id');
    const UIAuthConfig = {
      siteName: 'Tirta Patriot',
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      queryParameterForSignInSuccessUrl: 'next',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
          provider: 'microsoft.com',
          customParameters: {
            prompt: 'consent',
            language: 'id',
          },
        },
        {
          provider: 'yahoo.com',
          customParameters: {
            prompt: 'consent',
            language: 'id',
          },
        },
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
          requireDisplayName: true,
        },
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          recaptchaParameters: {
            size: 'invisible',
          },
          defaultCountry: 'ID',
        },
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      callbacks: {
        signInSuccessWithAuthResult: (user) => {
          console.log(user);
          setTimeout(() => {
            this.$router.replace('/');
          }, 800);

          return false;
        },
      },
    };
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#authentication', UIAuthConfig);
  },
};
</script>

<style lang="scss" scoped>
@import '~firebaseui-id/dist/firebaseui.css';

#authentication ::v-deep {
  .firebaseui-idp-button {
    max-width: 260px;
  }
  .mdl-card {
    margin-top: 18px;
  }
}

* {
  color: white;
  font-family: Roboto;
}

#session-container {
  min-height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.screen {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-image:
    linear-gradient(to bottom, #005c97, rgba(42, 155, 175, 0.73));
  background-size: cover;
}

.splash-logo {
  width: 120px;
  margin-top: 2rem;
}

h1 {
  font-family: Roboto;
  font-weight: 200;
  font-size: 48px;
  margin: 0;
  line-height: 1.4em;
}

p {
  margin: 0;
}
</style>
