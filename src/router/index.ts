import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import { userRouter } from './user'
// import { adminRouter } from './admin'
import { rootRouter } from './root'
Vue.use(VueRouter)

const root: any = rootRouter
const routes: Array<any> = [
  {
    path: '/',
    permission: 'Root',
    component: () => import('@/views/root/Base.vue'),
    children: rootRouter
  },
  {
    path: "/user/",
    permission: 'User',
    component: () => import('@/views/farmer/Base.vue'),
    children: userRouter
  },
  {
    path: "/export/cert",
    permission: 'export-cert',
    component: () => import('@/views/CertPdf.vue'),

  },
  {
    path: "/export/cert-endorse",
    permission: 'export-cert-endorse',
    component: () => import('@/views/CertPdfEndorse.vue'),

  },
  // {
  //   path: "/admin/",
  //   permission:'Admin',
  //   component: () => import('@/views/admin/Base.vue'),
  //   children: adminRouter
  // },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
