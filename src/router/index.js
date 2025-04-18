import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'json-formatter' },
    },
    {
      path: '/json-formatter',
      name: 'json-formatter',
      component: () => import('../views/JsonFormatterView.vue'),
    },
    {
      path: '/url-decoder',
      name: 'url-decoder',
      component: () => import('../views/UrlDecoderView.vue'),
    },
    {
      path: '/upsig-decoder',
      name: 'upsig-decoder',
      component: () => import('../views/UpsigDecoderView.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingView.vue'),
    },
  ],
})

export default router
