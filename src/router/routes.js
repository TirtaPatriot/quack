const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ],
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/session',
    name: 'Session',
    component: () => import('pages/Authentication.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
