/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "E:\\Future\\code-master\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-67658c13",
    path: "/front/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-67658c13").then(next)
    },
  },
  {
    path: "/front/index.html",
    redirect: "/front/"
  },
  {
    path: "/00.目录页/01.前端.html",
    redirect: "/front/"
  },
  {
    name: "v-5af2c716",
    path: "/pages/a8a2c8/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5af2c716").then(next)
    },
  },
  {
    path: "/pages/a8a2c8/index.html",
    redirect: "/pages/a8a2c8/"
  },
  {
    path: "/08.收藏/01.网站.html",
    redirect: "/pages/a8a2c8/"
  },
  {
    name: "v-510cd091",
    path: "/pages/6a22b0/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-510cd091").then(next)
    },
  },
  {
    path: "/pages/6a22b0/index.html",
    redirect: "/pages/6a22b0/"
  },
  {
    path: "/01.前端/01.React/01.基于antd的列表显隐组件.html",
    redirect: "/pages/6a22b0/"
  },
  {
    name: "v-669ad55b",
    path: "/about/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-669ad55b").then(next)
    },
  },
  {
    path: "/about/index.html",
    redirect: "/about/"
  },
  {
    path: "/99.关于/01.关于.html",
    redirect: "/about/"
  },
  {
    name: "v-4d8519b1",
    path: "/archives/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4d8519b1").then(next)
    },
  },
  {
    path: "/archives/index.html",
    redirect: "/archives/"
  },
  {
    path: "/@pages/archivesPage.html",
    redirect: "/archives/"
  },
  {
    name: "v-1599a7dd",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1599a7dd").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4ce3c1de",
    path: "/categories/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4ce3c1de").then(next)
    },
  },
  {
    path: "/categories/index.html",
    redirect: "/categories/"
  },
  {
    path: "/@pages/categoriesPage.html",
    redirect: "/categories/"
  },
  {
    name: "v-bf7d299e",
    path: "/tags/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-bf7d299e").then(next)
    },
  },
  {
    path: "/tags/index.html",
    redirect: "/tags/"
  },
  {
    path: "/@pages/tagsPage.html",
    redirect: "/tags/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]