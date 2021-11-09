import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7a0422d6 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _e4479228 = () => interopDefault(import('..\\pages\\Art.vue' /* webpackChunkName: "pages/Art" */))
const _52a0bbe9 = () => interopDefault(import('..\\pages\\Blog.vue' /* webpackChunkName: "pages/Blog" */))
const _0c0399a9 = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _c988f450 = () => interopDefault(import('..\\pages\\Support.vue' /* webpackChunkName: "pages/Support" */))
const _c27b03ba = () => interopDefault(import('..\\pages\\art\\page\\_page.vue' /* webpackChunkName: "pages/art/page/_page" */))
const _5297b086 = () => interopDefault(import('..\\pages\\blog\\author\\_author.vue' /* webpackChunkName: "pages/blog/author/_author" */))
const _6069ee26 = () => interopDefault(import('..\\pages\\blog\\category\\_category.vue' /* webpackChunkName: "pages/blog/category/_category" */))
const _28eebef4 = () => interopDefault(import('..\\pages\\blog\\page\\_page.vue' /* webpackChunkName: "pages/blog/page/_page" */))
const _3bf562a4 = () => interopDefault(import('..\\pages\\art\\_slug.vue' /* webpackChunkName: "pages/art/_slug" */))
const _85bc915e = () => interopDefault(import('..\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _2249ddbb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _7a0422d6,
    name: "About"
  }, {
    path: "/Art",
    component: _e4479228,
    name: "Art"
  }, {
    path: "/Blog",
    component: _52a0bbe9,
    name: "Blog"
  }, {
    path: "/Contact",
    component: _0c0399a9,
    name: "Contact"
  }, {
    path: "/Support",
    component: _c988f450,
    name: "Support"
  }, {
    path: "/art/page/:page?",
    component: _c27b03ba,
    name: "art-page-page"
  }, {
    path: "/blog/author/:author?",
    component: _5297b086,
    name: "blog-author-author"
  }, {
    path: "/blog/category/:category?",
    component: _6069ee26,
    name: "blog-category-category"
  }, {
    path: "/blog/page/:page?",
    component: _28eebef4,
    name: "blog-page-page"
  }, {
    path: "/art/:slug?",
    component: _3bf562a4,
    name: "art-slug"
  }, {
    path: "/blog/:slug?",
    component: _85bc915e,
    name: "blog-slug"
  }, {
    path: "/",
    component: _2249ddbb,
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
