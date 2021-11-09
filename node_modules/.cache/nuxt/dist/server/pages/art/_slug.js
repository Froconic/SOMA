exports.ids = [24,2,13];
exports.modules = {

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=template&id=cac48244&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"has-divider\">","</section>",[_vm._ssrNode("<div class=\"container pt-3\">","</div>",[_vm._ssrNode("<div class=\"row justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-7 col-lg-8 col-md-10\">","</div>",[_vm._ssrNode("<hr> "),_vm._ssrNode("<div class=\"d-flex align-items-center\">","</div>",[_vm._ssrNode("<span class=\"text-small mr-1\">Share this article:</span> "),_vm._ssrNode("<div class=\"d-flex mx-2\">","</div>",[_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.facebook,"alt":"social.facebookAlt"}})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.instagram,"alt":"social.instagramAlt"}})]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"btn btn-round btn-primary mx-1",attrs:{"to":'/'}},[_c('img',{staticClass:"icon icon-sm",attrs:{"src":_vm.social.youtube,"alt":"social.youtubeAlt"}})])],2)],2)],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Social.vue?vue&type=template&id=cac48244&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Social.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var Socialvue_type_script_lang_js_ = ({
  props: {
    social: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Social.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Socialvue_type_script_lang_js_ = (Socialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Social.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Socialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cfff3fa"
  
)

/* harmony default export */ var Social = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArtPrevNext.vue?vue&type=template&id=12abb408&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container-fluid\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.prev)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'art-slug', params: { slug: _vm.prev.slug }}}},[_vm._v("\n    Previous: "+_vm._s(_vm.prev.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.next)?_c('NuxtLink',{staticClass:"font-bold text-primary justify-content-between hover:underline",attrs:{"to":{name: 'art-slug', params: { slug: _vm.next.slug }}}},[_vm._v("Next: "+_vm._s(_vm.next.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ArtPrevNext.vue?vue&type=template&id=12abb408&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArtPrevNext.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ArtPrevNextvue_type_script_lang_js_ = ({
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
});
// CONCATENATED MODULE: ./components/ArtPrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArtPrevNextvue_type_script_lang_js_ = (ArtPrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ArtPrevNext.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArtPrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "50f825a3"
  
)

/* harmony default export */ var ArtPrevNext = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/art/_slug.vue?vue&type=template&id=2bcf4daa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"art-single"},[_vm._ssrNode("<section class=\"py-0\">","</section>",[_vm._ssrNode("<div class=\"container-fluid px-lg-0\">","</div>",[_vm._ssrNode("<div class=\"row no-gutters justify-content-center\">","</div>",[_vm._ssrNode("<div class=\"col-xl-4  mb-5 pt-5\">","</div>",[_c('nuxt-content',{attrs:{"document":_vm.artwork}}),_vm._ssrNode(" <h1 class=\"text-center\">"+_vm._ssrEscape(" "+_vm._s(_vm.artwork.title)+" ")+"</h1> <div class=\"text-center text-small mb-4\">"+_vm._ssrEscape(" "+_vm._s(_vm.formatDate(_vm.artwork.createdAt)))+"</div> <div class=\"row\"><div class=\"col\"><div class=\"container mb-5\"><img"+(_vm._ssrAttr("src",_vm.artwork.img))+(_vm._ssrAttr("alt",_vm.artwork.alt))+"></div> <div class=\"container mb-5\"><strong>"+_vm._ssrEscape(_vm._s(_vm.artwork.description))+"</strong></div></div></div> "),_c('ArtPrevNext',{attrs:{"prev":_vm.prev,"next":_vm.next}})],2)]),_vm._ssrNode(" "),_c('Social',{attrs:{"social":_vm.artwork.social}})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/art/_slug.vue?vue&type=template&id=2bcf4daa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/art/_slug.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params
  }) {
    const artwork = await $content("artworks", params.slug).fetch();
    const [prev, next] = await $content('artworks').only(['title', 'slug']).sortBy(['createdAt', 'asc']).surround(params.slug).fetch();
    return {
      artwork,
      prev,
      next
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
// CONCATENATED MODULE: ./pages/art/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var art_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/art/_slug.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  art_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "651524a9"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ArtPrevNext: __webpack_require__(69).default,Social: __webpack_require__(58).default})


/***/ })

};;
//# sourceMappingURL=_slug.js.map