export { default as ArticleList } from '../..\\components\\ArticleList.vue'
export { default as ArtPagination } from '../..\\components\\ArtPagination.vue'
export { default as ArtPrevNext } from '../..\\components\\ArtPrevNext.vue'
export { default as ArtworkList } from '../..\\components\\ArtworkList.vue'
export { default as Author } from '../..\\components\\Author.vue'
export { default as Category } from '../..\\components\\Category.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as HomeFooter } from '../..\\components\\HomeFooter.vue'
export { default as Navbar } from '../..\\components\\Navbar.vue'
export { default as NuxtLogo } from '../..\\components\\NuxtLogo.vue'
export { default as Pagination } from '../..\\components\\Pagination.vue'
export { default as PrevNext } from '../..\\components\\PrevNext.vue'
export { default as Related } from '../..\\components\\Related.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Social } from '../..\\components\\Social.vue'
export { default as Tutorial } from '../..\\components\\Tutorial.vue'
export { default as SvgDoubleBack } from '../..\\components\\svg\\DoubleBack.vue'
export { default as SvgDoubleFwd } from '../..\\components\\svg\\DoubleFwd.vue'
export { default as SvgSingleBack } from '../..\\components\\svg\\SingleBack.vue'
export { default as SvgSingleFwd } from '../..\\components\\svg\\SingleFwd.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
