import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/main.vue"),
      name: "main",
    },
    {
      path: '/documents/aml',
      component: () => import('../views/documents/aml.vue'),
      name: "aml"
    },
    {
      path: '/documents/terms_of_use',
      component: () => import('../views/documents/terms.vue'),
      name: "terms_of_use"
    },
    {
      path: '/documents/privacy_policy',
      component: () => import('../views/documents/policy.vue'),
      name: "privacy_policy"
    },
    {
      path: '/documents/cookie',
      component: () => import('../views/documents/cookie.vue'),
      name: "policy_cookie"
    }
  ],
});

export default router;
