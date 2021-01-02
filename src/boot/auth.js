export default async ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    const signedIn = store.getters['auth/signedIn'];
    if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
      if (!signedIn) {
        next({
          path: '/session',
          query: { next: to.fullPath },
        });
      } else {
        next();
      }
    } else {
      next(); // make sure to always call next()!
    }
  });
};
