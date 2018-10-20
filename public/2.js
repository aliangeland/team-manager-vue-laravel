webpackJsonp([2],{

/***/ 110:
/***/ (function(module, exports) {

module.exports = "/images/teammanager1.png?78d82b9ae01b40e74ed8d3671aebcde1";

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterComponent_vue__ = __webpack_require__(67);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78afc6d0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterComponent_vue__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(17);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(78)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-78afc6d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_RegisterComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78afc6d0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterComponent_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_78afc6d0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_RegisterComponent_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\register\\RegisterComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78afc6d0", Component.options)
  } else {
    hotAPI.reload("data-v-78afc6d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'spinner',
  /**
   * Props the parent can use to manipulate this component.
   * Note: Components themselves should not mutate their own props.
   */
  props: {
    /**
     * The message displayed with the spinner
     */
    'message': {
      type: String,
      default: 'Loading...'
    }
  },
  data: function data() {
    return {};
  },

  methods: {}
});

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_extra_Spinner__ = __webpack_require__(73);
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
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'register-component',
    components: { Spinner: __WEBPACK_IMPORTED_MODULE_0__components_extra_Spinner__["a" /* default */] },
    data: function data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            loggingIn: false,
            signingUp: false,
            errors: '',
            singleError: null,
            img: __webpack_require__(110)
        };
    },

    methods: {
        submitRegister: function submitRegister() {
            var _this = this;

            this.signingUp = true;
            axios.post('/api/v1/user/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            }).then(function (response) {
                console.log(response.data);
                _this.signingUp = false;
                if (response.data.success === true) {
                    _this.loggingIn = true;
                    var credentials = {
                        email: _this.email,
                        password: _this.password
                    };
                    _this.$auth.login(credentials, 'dashboard').then(function (response) {
                        _this.loggingIn = false;
                    });
                } else {
                    _this.singleError = null;
                    _this.errors = response.data.error;
                }
            }).catch(function (error) {
                _this.errorMessage = error.response.data.error;
            });
        },
        redirect: function redirect(path) {
            this.$router.push(path);
        }
    }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__ = __webpack_require__(66);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_286abc34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(17);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(74)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-286abc34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_Spinner_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_286abc34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_286abc34_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Spinner_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\extra\\Spinner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-286abc34", Component.options)
  } else {
    hotAPI.reload("data-v-286abc34", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(63).default
var update = add("16a2ffa4", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-286abc34\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-286abc34\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Spinner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "\n.spinner-container[data-v-286abc34] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 999;\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.spinner-message[data-v-286abc34] {\n  padding: 1px 4px;\n  border-radius: 8px;\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.spinner[data-v-286abc34] {\n  -webkit-animation: rotator-data-v-286abc34 1.4s linear infinite;\n          animation: rotator-data-v-286abc34 1.4s linear infinite;\n  margin: auto;\n}\n@-webkit-keyframes rotator-data-v-286abc34 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n}\n}\n@keyframes rotator-data-v-286abc34 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n}\n}\n.path[data-v-286abc34] {\n  stroke-dasharray: 187;\n  stroke-dashoffset: 0;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  -webkit-animation: dash-data-v-286abc34 1.4s ease-in-out infinite,colors-data-v-286abc34 5.6s ease-in-out infinite;\n          animation: dash-data-v-286abc34 1.4s ease-in-out infinite,colors-data-v-286abc34 5.6s ease-in-out infinite;\n}\n@-webkit-keyframes colors-data-v-286abc34 {\n0% {\n    stroke: #4285F4;\n}\n25% {\n    stroke: #DE3E35;\n}\n50% {\n    stroke: #F7C223;\n}\n75% {\n    stroke: #1B9A59;\n}\n100% {\n    stroke: #4285F4;\n}\n}\n@keyframes colors-data-v-286abc34 {\n0% {\n    stroke: #4285F4;\n}\n25% {\n    stroke: #DE3E35;\n}\n50% {\n    stroke: #F7C223;\n}\n75% {\n    stroke: #1B9A59;\n}\n100% {\n    stroke: #4285F4;\n}\n}\n@-webkit-keyframes dash-data-v-286abc34 {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg);\n}\n}\n@keyframes dash-data-v-286abc34 {\n0% {\n    stroke-dashoffset: 187;\n}\n50% {\n    stroke-dashoffset: 46.75;\n    -webkit-transform: rotate(135deg);\n            transform: rotate(135deg);\n}\n100% {\n    stroke-dashoffset: 187;\n    -webkit-transform: rotate(450deg);\n            transform: rotate(450deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "spinner-container" }, [
    _c("div", { staticClass: "spinner-content" }, [
      _c(
        "svg",
        {
          staticClass: "spinner",
          attrs: {
            width: "65px",
            height: "65px",
            viewBox: "0 0 66 66",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _c("circle", {
            staticClass: "path",
            attrs: {
              fill: "none",
              "stroke-width": "6",
              "stroke-linecap": "round",
              cx: "33",
              cy: "33",
              r: "30"
            }
          })
        ]
      ),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "spinner-message" }, [
        _vm._v(_vm._s(_vm.message))
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-286abc34", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(63).default
var update = add("0cb9939a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-78afc6d0\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RegisterComponent.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-78afc6d0\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RegisterComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "\n.register-comp[data-v-78afc6d0] {\n    margin-top: 100px;\n    margin-bottom: 100px;\n}\na[data-v-78afc6d0]:not([href]):not([tabindex]) {\n    -webkit-transition: 0.5s color;\n    transition: 0.5s color;\n    color: royalblue;\n    cursor: pointer;\n}\na[data-v-78afc6d0]:not([href]):not([tabindex]):hover{\n    color: deepskyblue;\n}\n", ""]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row mx-0 mt-5 px-0" }, [
    _c(
      "div",
      { staticClass: "login-comp col-sm-4 offset-sm-2" },
      [
        _c("spinner", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.signingUp,
              expression: "signingUp"
            }
          ],
          attrs: { message: "Signing Up..." }
        }),
        _vm._v(" "),
        _vm.errors && _vm.errors !== ""
          ? _c("div", { staticClass: "alert alert-danger" }, [
              _c(
                "ul",
                _vm._l(_vm.errors, function(e) {
                  return _c("li", [_vm._v(_vm._s(e.toString()))])
                })
              )
            ])
          : _vm.singleError
            ? _c("div", { staticClass: "alert alert-danger" }, [
                _c("p", [_vm._v(_vm._s(_vm.singleError))])
              ])
            : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.name,
                expression: "name"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              "data-id": "register.name",
              placeholder: "Enter your name"
            },
            domProps: { value: _vm.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.name = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "email",
              "data-id": "register.email",
              placeholder: "Enter your email"
            },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "password", placeholder: "Enter your password" },
            domProps: { value: _vm.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password_confirmation,
                expression: "password_confirmation"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "password", placeholder: "Repeat your password" },
            domProps: { value: _vm.password_confirmation },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password_confirmation = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary solid blank",
            attrs: { "data-id": "register.submit" },
            on: {
              click: function($event) {
                _vm.submitRegister()
              }
            }
          },
          [
            _vm._v("\n            Register   "),
            _c("i", { staticClass: "fa fa-arrow-circle-o-right" })
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _c("br"),
        _c("br"),
        _vm._v("\n        Do have an account?  "),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                _vm.redirect("/login/")
              }
            }
          },
          [_vm._v("Login Here.")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col-sm-4" }, [
      _c("img", { staticClass: "img-fluid", attrs: { src: _vm.img } })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-78afc6d0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});