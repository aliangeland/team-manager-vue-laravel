webpackJsonp([3],{

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardComponent_vue__ = __webpack_require__(68);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bfd3d0f0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardComponent_vue__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(17);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(81)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bfd3d0f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_DashboardComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bfd3d0f0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardComponent_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bfd3d0f0_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_DashboardComponent_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\dashboard\\DashboardComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bfd3d0f0", Component.options)
  } else {
    hotAPI.reload("data-v-bfd3d0f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_index__ = __webpack_require__(5);
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



var auth = __WEBPACK_IMPORTED_MODULE_1__router_index__["a" /* default */].app.$options.store.state.auth;
/* harmony default export */ __webpack_exports__["a"] = ({
    name: "dashboard-component",
    props: ['list', 'dataLoaded'],
    data: function data() {
        return {
            team: {
                id: '',
                name: ''
            },
            mutableList: this.list,
            errors: null,
            singleError: null,
            addableTeam: false,
            validated: null
        };
    },
    mounted: function mounted() {
        this.fetchTeams();
        this.validated = false;
    },

    methods: {
        fetchTeams: function fetchTeams() {
            var _this = this;

            axios.get('/api/v1/teams', {
                headers: {
                    Authorization: 'Bearer ' + auth.accessToken
                }
            }).then(function (response) {
                _this.mutableList = response.data.payload;
                console.log(_this.mutableList);
            }).catch(function (error) {
                if (error.response.data.error === 'token_expired') {
                    __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */]._refreshToken(error);
                }
                console.log(error.response.data.error);
            });
        },
        addTeam: function addTeam(team) {
            var _this2 = this;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
            axios.post('/api/v1/team/', {
                name: team.name
            }).then(function (response) {
                if (response.data.success === true) {
                    _this2.mutableList.unshift(response.data.payload);
                    _this2.addableTeam = false;
                    _this2.errors = '';
                    _this2.singleError = null;
                }
                if (response.data.success === false) {
                    _this2.errors = response.data.error;
                } else if (response.data.error === 'token_expired') {
                    _this2.errors = '';
                    _this2.singleError = 'Token Expired, please refresh the page to refresh the token';
                } else {
                    _this2.singleError = null;
                    _this2.errors = response.data.error;
                }
            }).catch(function (error) {
                if (error.response.data.error === 'token_expired') {
                    __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */]._refreshToken(error);
                }
                console.log(error.response.data.error);
                _this2.errors = error.response.data.error;
            });
        },
        verify: function verify(team) {
            if (team.name.length === 0) {
                this.validated = false;
            } else {
                this.validated = true;
            }
        },
        redirect: function redirect(path) {
            this.$router.push(path);
        }
    }
});

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(63).default
var update = add("e7d41c38", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-bfd3d0f0\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardComponent.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-bfd3d0f0\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DashboardComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "\na[data-v-bfd3d0f0]:not([href]):not([tabindex]) {\n    -webkit-transition: 0.5s color;\n    transition: 0.5s color;\n    color: royalblue;\n    cursor: pointer;\n}\na[data-v-bfd3d0f0]:not([href]):not([tabindex]):hover{\n    color: deepskyblue;\n}\n", ""]);

// exports


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row py-5" }, [
    _c("div", { staticClass: "col-md-8 offset-md-2" }, [
      _c("h1", [_vm._v("Teams")]),
      _vm._v(" "),
      _c("div", { staticClass: "row my-5" }, [
        _vm.addableTeam === true
          ? _c("div", [
              _c("div", { staticClass: "col-md-12" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-6" }, [
                    _c("div", { staticClass: "row" }, [
                      _vm.errors
                        ? _c("div", { staticClass: "col-md-12" }, [
                            _c(
                              "div",
                              { staticClass: "alert alert-danger" },
                              _vm._l(_vm.errors, function(e) {
                                return _c("div", [
                                  _c("p", [_vm._v(_vm._s(e.toString()))])
                                ])
                              })
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group col-md-12" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Team Name:")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.team.name,
                              expression: "team.name"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { type: "text", name: "name", id: "name" },
                          domProps: { value: _vm.team.name },
                          on: {
                            keyup: function($event) {
                              _vm.verify(_vm.team)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.team, "name", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "col-md-12 text-center border-top pt-3"
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-warning",
                              on: {
                                click: function($event) {
                                  _vm.addableTeam = false
                                }
                              }
                            },
                            [_vm._v("cancel")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success",
                              attrs: { disabled: !_vm.validated },
                              on: {
                                click: function($event) {
                                  _vm.addTeam(_vm.team)
                                }
                              }
                            },
                            [_vm._v("finish")]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          : _c("div", [
              _c("div", { staticClass: "col-md-12" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { title: "Add a new team" },
                    on: {
                      click: function($event) {
                        _vm.addableTeam = true
                      }
                    }
                  },
                  [_vm._v("Add a new team")]
                )
              ])
            ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row mt-5" },
        _vm._l(_vm.mutableList, function(team) {
          return _c("div", { staticClass: "col-md-6 mt-3" }, [
            _c("div", { staticClass: "card mt-2 text-center" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h6", { staticClass: "card-title py-1" }, [
                  _vm._v(_vm._s(team.name))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-footer py-3" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function($event) {
                        _vm.redirect("/team/" + team.id)
                      }
                    }
                  },
                  [_vm._v("View Players")]
                )
              ])
            ])
          ])
        })
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-bfd3d0f0", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});