webpackJsonp([0],{

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_TeamComponent_vue__ = __webpack_require__(69);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7de0a50_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TeamComponent_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(17);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(84)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e7de0a50"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_TeamComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7de0a50_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TeamComponent_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e7de0a50_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_TeamComponent_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\team\\TeamComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e7de0a50", Component.options)
  } else {
    hotAPI.reload("data-v-e7de0a50", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_index__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PlayerComponent__ = __webpack_require__(86);
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




var auth = __WEBPACK_IMPORTED_MODULE_1__router_index__["a" /* default */].app.$options.store.state.auth;
/* harmony default export */ __webpack_exports__["a"] = ({
    name: "team-component",
    props: ['teamId', 'Team', 'Players', 'dataLoaded'],
    components: {
        PlayerComponent: __WEBPACK_IMPORTED_MODULE_2__PlayerComponent__["a" /* default */]
    },
    data: function data() {
        return {
            player: {
                first_name: '',
                last_name: ''
            },
            showPlayers: '',
            mutableTeamId: this.teamId,
            dataLoader: this.dataLoaded,
            mutableTeam: this.Team,
            addablePlayer: false,
            validated: true,
            errors: null,
            singleError: null
        };
    },
    mounted: function mounted() {
        this.fetchTeam();
        this.validated = false;
    },

    methods: {
        fetchTeam: function fetchTeam() {
            var _this = this;

            axios.get('/api/v1/team/' + this.teamId, {
                headers: {
                    Authorization: 'Bearer ' + auth.accessToken
                }
            }).then(function (response) {
                _this.mutableTeam = response.data;
                _this.showPlayers = response.data.team.players;
                _this.dataLoader = true;
            }).catch(function (error) {
                if (error.response.data.error == 'token_expired') {
                    __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */]._refreshToken(error);
                }
                console.log(error.response.data.error);
            });
        },
        addPlayer: function addPlayer(player) {
            var _this2 = this;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
            axios.post('/api/v1/team/' + this.mutableTeamId + '/player/', {
                team_id: this.mutableTeamId,
                first_name: player.first_name,
                last_name: player.last_name
            }).then(function (response) {
                if (response.data.success === true) {
                    _this2.showPlayers.unshift(response.data.payload);
                    _this2.addablePlayer = false;
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
        verify: function verify(player) {
            if (player.first_name.length === 0 && player.last_name.length === 0) {
                this.validated = false;
            } else if (player.first_name.length === 0 || player.last_name.length === 0) {
                this.validated = false;
            } else {
                this.validated = true;
            }
        }
    }
});

/***/ }),

/***/ 70:
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



var auth = __WEBPACK_IMPORTED_MODULE_1__router_index__["a" /* default */].app.$options.store.state.auth;
/* harmony default export */ __webpack_exports__["a"] = ({
    name: "PlayerComponent",
    props: ['player', 'index'],
    data: function data() {
        return {
            mutableTeam: this.Team,
            mutablePlayer: this.player,
            samplePlayer: {
                id: '',
                first_name: '',
                last_name: ''
            },
            editablePlayer: null,
            validated: true,
            cachedUser: null,
            errors: null,
            singleError: null
        };
    },
    mounted: function mounted() {
        this.cachedUser = Object.assign({}, this.player);
    },

    methods: {
        cancel: function cancel() {
            this.mutablePlayer = Object.assign({}, this.cachedUser);
            this.errors = null;
            this.singleError = null;
        },
        editPlayer: function editPlayer(player) {
            var _this = this;

            this.errors = null;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
            axios.patch('/api/v1/player/' + player.id, {
                body: player
            }).then(function (response) {
                if (response.data.success === false) {
                    _this.mutablePlayer = Object.assign({}, _this.cachedUser);
                    _this.errors = response.data.error;
                } else if (response.data.error === 'token_expired') {
                    _this.errors = '';
                    _this.singleError = 'Token Expired, please refresh the page to refresh the token';
                } else {
                    _this.singleError = null;
                    _this.errors = response.data.error;
                }
                _this.cachedUser = Object.assign({}, player);
                _this.editablePlayer = null;
            }).catch(function (error) {
                if (error.response.data.error === 'token_expired') {
                    __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */]._refreshToken(error);
                }
                _this.errors = error.response.data.error;
                console.log(_this.errors);
            });
        },
        deletePlayer: function deletePlayer(id, index) {
            var _this2 = this;

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + auth.accessToken;
            axios.delete('/api/v1/player/' + id).then(function (response) {
                console.log(response.data);
                _this2.$parent.mutablePlayers.splice(index, 1);
            }).catch(function (error) {
                if (error.response.data.error === 'token_expired') {
                    __WEBPACK_IMPORTED_MODULE_0__auth__["a" /* default */]._refreshToken(error);
                }
                console.log(error.response.data.error);
            });
        },
        verify: function verify(mutablePlayer) {
            if (mutablePlayer.first_name.length === 0 && mutablePlayer.last_name.length === 0) {
                this.validated = false;
            } else if (mutablePlayer.first_name.length === 0 || mutablePlayer.last_name.length === 0) {
                this.validated = false;
            } else {
                this.validated = true;
            }
        }
    }
});

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(63).default
var update = add("5afdacf3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e7de0a50\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamComponent.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-e7de0a50\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "\n.navbar[data-v-e7de0a50]{\n    background-color: #c6d5ef;\n}\n.active[data-v-e7de0a50]{\n    border-bottom: 1px solid #000000;\n    color: cornflowerblue !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_PlayerComponent_vue__ = __webpack_require__(70);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f325e58_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlayerComponent_vue__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(17);
var disposed = false
function injectStyle (context) {
  if (disposed) return
  __webpack_require__(87)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5f325e58"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_cacheDirectory_true_presets_env_modules_false_targets_browsers_2_uglify_true_plugins_transform_object_rest_spread_transform_runtime_polyfill_false_helpers_false_node_modules_vue_loader_lib_selector_type_script_index_0_PlayerComponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f325e58_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlayerComponent_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f325e58_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PlayerComponent_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\team\\PlayerComponent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f325e58", Component.options)
  } else {
    hotAPI.reload("data-v-5f325e58", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(63).default
var update = add("e150ad62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5f325e58\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlayerComponent.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-5f325e58\",\"scoped\":true,\"sourceMap\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlayerComponent.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(58)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "col-md-6" }, [
    _c("div", { staticClass: "card mt-3 text-center" }, [
      _c("div", { staticClass: "card-body" }, [
        _vm.errors
          ? _c(
              "div",
              { staticClass: "alert alert-danger" },
              _vm._l(_vm.errors, function(e) {
                return _c("div", [_c("p", [_vm._v(_vm._s(e.toString()))])])
              })
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h6", { staticClass: "card-title py-1" }, [
          _vm._v(
            _vm._s(_vm.mutablePlayer.first_name) +
              " " +
              _vm._s(_vm.mutablePlayer.last_name)
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer py-3" }, [
        _vm.editablePlayer === _vm.mutablePlayer.id
          ? _c("div", [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", { attrs: { for: "firstname" } }, [
                    _vm._v("First Name:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mutablePlayer.first_name,
                        expression: "mutablePlayer.first_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "firstname", id: "firstname" },
                    domProps: { value: _vm.mutablePlayer.first_name },
                    on: {
                      keyup: [
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          _vm.editPlayer(_vm.mutablePlayer)
                        },
                        function($event) {
                          _vm.verify(_vm.mutablePlayer)
                        }
                      ],
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.mutablePlayer,
                          "first_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group col-md-6" }, [
                  _c("label", { attrs: { for: "lastname" } }, [
                    _vm._v("Last Name:")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.mutablePlayer.last_name,
                        expression: "mutablePlayer.last_name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", name: "lastname", id: "lastname" },
                    domProps: { value: _vm.mutablePlayer.last_name },
                    on: {
                      keyup: [
                        function($event) {
                          if (
                            !("button" in $event) &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          _vm.editPlayer(_vm.mutablePlayer)
                        },
                        function($event) {
                          _vm.verify(_vm.mutablePlayer)
                        }
                      ],
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.mutablePlayer,
                          "last_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-md-12 text-center border-top pt-3" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-warning",
                        on: {
                          click: function($event) {
                            _vm.editablePlayer = null | _vm.cancel()
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
                            _vm.editPlayer(_vm.mutablePlayer)
                          }
                        }
                      },
                      [_vm._v("save")]
                    )
                  ]
                )
              ])
            ])
          : _c("div", [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger",
                  on: {
                    click: function($event) {
                      _vm.deletePlayer(_vm.mutablePlayer.id, _vm.index)
                    }
                  }
                },
                [_vm._v("Delete")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-info",
                  on: {
                    click: function($event) {
                      _vm.editablePlayer = _vm.mutablePlayer.id
                    }
                  }
                },
                [_vm._v("Edit")]
              )
            ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5f325e58", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.dataLoader
    ? _c("div", { staticClass: "row py-5" }, [
        _c("div", { staticClass: "col-md-8 offset-md-2" }, [
          _c("h3", [
            _vm._v('"' + _vm._s(_vm.mutableTeam.team.name) + '" team players:')
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row my-5" }, [
            _vm.addablePlayer === true
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
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "firstname" } }, [
                              _vm._v("First Name:")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.player.first_name,
                                  expression: "player.first_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "firstname",
                                id: "firstname"
                              },
                              domProps: { value: _vm.player.first_name },
                              on: {
                                keyup: function($event) {
                                  _vm.verify(_vm.player)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.player,
                                    "first_name",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-md-6" }, [
                            _c("label", { attrs: { for: "lastname" } }, [
                              _vm._v("Last Name:")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.player.last_name,
                                  expression: "player.last_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                name: "lastname",
                                id: "lastname"
                              },
                              domProps: { value: _vm.player.last_name },
                              on: {
                                keyup: function($event) {
                                  _vm.verify(_vm.player)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.player,
                                    "last_name",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-md-12 text-center border-top pt-3"
                            },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-warning",
                                  on: {
                                    click: function($event) {
                                      _vm.addablePlayer = false
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
                                      _vm.addPlayer(_vm.player)
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
                        attrs: { title: "Add a new player to this team" },
                        on: {
                          click: function($event) {
                            _vm.addablePlayer = true
                          }
                        }
                      },
                      [_vm._v("Add a new player")]
                    )
                  ])
                ])
          ]),
          _vm._v(" "),
          _vm.showPlayers.length > 0
            ? _c(
                "div",
                { staticClass: "row mt-5" },
                _vm._l(_vm.showPlayers, function(player, index) {
                  return _c("player-component", {
                    key: player.id,
                    attrs: { player: player, index: index }
                  })
                })
              )
            : _c("div", { staticClass: "row mt-5" }, [_vm._m(0)])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12" }, [
      _c("div", { staticClass: "well-lg" }, [
        _vm._v("Currently this team doesn't have any player")
      ])
    ])
  }
]
render._withStripped = true

if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e7de0a50", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

});