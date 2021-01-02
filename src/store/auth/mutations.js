export function authenticate(state, payload) {
  const { claims: allClaims = null, token = null, ...meta } = payload || {};

  if (payload) {
    const {
      sub: id, email, email_verified: emailVerified, phone_number: phone, name, picture, ...claims
    } = allClaims;

    state.user = {
      id, email, emailVerified, phone, name, picture,
    };

    state.claims = claims;
    state.token = token;
    state.meta = meta;
  } else {
    state.user = null;
    state.claims = null;
    state.token = null;
    state.meta = null;
  }
}
