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
      component: () => import('../views/aml.vue'),
      name: "aml"
    },
    {
      path: '/documents/terms_of_use',
      component: () => import('../views/terms.vue'),
      name: "terms_of_use"
    },
    {
      path: '/documents/privacy_policy',
      component: () => import('../views/policy.vue'),
      name: "privacy_policy"
    }
  ],
});

export default router;
