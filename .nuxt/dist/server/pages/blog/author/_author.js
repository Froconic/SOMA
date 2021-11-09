exports.ids = [27];
exports.modules = {

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/author/_author.vue?vue&type=template&id=d21e750c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"author"},[_vm._ssrNode("<h1>"+_vm._ssrEscape("Author: "+_vm._s(_vm.articles[0].author.name))+"</h1> <p>"+_vm._ssrEscape("Bio: "+_vm._s(_vm.articles[0].author.bio))+"</p> <h3>"+_vm._ssrEscape("Articles by: "+_vm._s(_vm.articles[0].author.name)+" ")+"</h3> "),_vm._ssrNode("<ul>","</ul>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<li>","</li>",[_c('NuxtLink',{attrs:{"to":{ name: 'blog-slug', params: { slug: article.slug } }}},[_c('img',{attrs:{"src":article.img,"alt":article.alt}}),_vm._v(" "),_c('div',[_c('h2',[_vm._v(" "+_vm._s(article.title)+" ")]),_vm._v(" "),_c('p',[_vm._v(" "+_vm._s(article.description)+" ")]),_vm._v(" "),_c('p',[_vm._v("{{}formatDate(article.createdAt)}")])])])],1)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/author/_author.vue?vue&type=template&id=d21e750c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/author/_author.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _authorvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const articles = await $content('articles', params.slug).where({
      'author.name': {
        $regex: [params.author, 'i']
      }
    }).without('body').sortBy('createdAt', 'asc').fetch();
    return {
      articles
    };
  },

  methods: {
    formatDate(date) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(date).toLocaleDateString('en', options);
    }

  }
});
// CONCATENATED MODULE: ./pages/blog/author/_author.vue?vue&type=script&lang=js&
 /* harmony default export */ var author_authorvue_type_script_lang_js_ = (_authorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/author/_author.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  author_authorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "35faefab"
  
)

/* harmony default export */ var _author = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_author.js.map