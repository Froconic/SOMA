exports.ids = [11];
exports.modules = {

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrevNext.vue?vue&type=template&id=bf4220c2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.prev)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'blog-slug', params: { slug: _vm.prev.slug }}}},[_vm._v("Previous: "+_vm._s(_vm.prev.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-6 text-center\">","</div>",[(_vm.next)?_c('NuxtLink',{staticClass:"font-bold text-primary hover:underline",attrs:{"to":{name: 'blog-slug', params: { slug:_vm.next.slug }}}},[_vm._v("Next: "+_vm._s(_vm.next.title)+"\n  ")]):_c('span',[_vm._v("End of the line")])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/PrevNext.vue?vue&type=template&id=bf4220c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PrevNext.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PrevNextvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./components/PrevNext.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PrevNextvue_type_script_lang_js_ = (PrevNextvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PrevNext.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PrevNextvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "41767b48"
  
)

/* harmony default export */ var PrevNext = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=prev-next.js.map