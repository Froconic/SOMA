import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3674a615 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _2a7b042a = () => interopDefault(import('..\\pages\\Art.vue' /* webpackChunkName: "pages/Art" */))
const _daf9566c = () => interopDefault(import('..\\pages\\Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _6e604928 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _04cf9552 = () => interopDefault(import('..\\pages\\Support.vue' /* webpackChunkName: "pages/Support" */))
const _eeac64f8 = () => interopDefault(import('..\\pages\\art\\page\\_page.vue' /* webpackChunkName: "pages/art/page/_page" */))
const _15205476 = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _37c14836 = () => interopDefault(import('..\\pages\\blog\\category\\_category.vue' /* webpackChunkName: "pages/blog/category/_category" */))
const _3e8b3d45 = () => interopDefault(import('..\\pages\\blog\\page\\_page.vue' /* webpackChunkName: "pages/blog/page/_page" */))
const _61effacf = () => interopDefault(import('..\\pages\\art\\_slug.vue' /* webpackChunkName: "pages/art/_slug" */))
const _3a8c8f50 = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _428b3e0c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _3674a615,
    name: "About"
  }, {
    path: "/Art",
    component: _2a7b042a,
    name: "Art"
  }, {
    path: "/Blog",
    component: _daf9566c,
    name: "Blog"
  }, {
    path: "/Contact",
    component: _6e604928,
    name: "Contact"
  }, {
    path: "/Support",
    component: _04cf9552,
    name: "Support"
  }, {
    path: "/art/page/:page?",
    component: _eeac64f8,
    name: "art-page-page"
  }, {
    path: "/blog/author/:author?",
    component: _15205476,
    name: "blog-author-author"
  }, {
    path: "/blog/category/:category?",
    component: _37c14836,
    name: "blog-category-category"
  }, {
    path: "/blog/page/:page?",
    component: _3e8b3d45,
    name: "blog-page-page"
  }, {
    path: "/art/:slug?",
    component: _61effacf,
    name: "art-slug"
  }, {
    path: "/blog/:slug?",
    component: _3a8c8f50,
    name: "blog-slug"
  }, {
    path: "/",
    component: _428b3e0c,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
