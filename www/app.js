(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".card[data-v-42fd26f0] {\n  width: 100%;\n}\n\na.btn-star[data-v-42fd26f0] {\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  margin-top: -5px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-align: center;\n}\na.btn-star i[data-v-42fd26f0] {\n  line-height: 40px;\n}")
;(function(){


module.exports = {
  props: ['data'],
  data() {
    return {
      isClick: false,
      classStar: 'grey-text'
    };
  },
  methods: {
    substanceToggleStar() {
      if (this.isClick) {
        this.classStar = 'grey-text';
      } else {
        this.classStar = 'orange-text';
        this.$store.dispatch('addStar', this.data);
      }

      this.isClick = !this.isClick;
    },
    getSubstanceLink(req) {
      return "/substance?q=" + req;
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{attrs:{"to":_vm.getSubstanceLink(_vm.data.label)}},[_c('div',{staticClass:"card waves-effect"},[_c('img',{attrs:{"src":"http://cosmetic.ua/uploads/spool/photo/00000018037-filename-00002-tape.jpg","alt":""}}),_vm._v(" "),_c('div',{staticClass:"card-content white-text"},[_c('span',{staticClass:"card-title"},[_vm._v(_vm._s(_vm.data.formula))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.data.label))])]),_vm._v(" "),_c('a',{staticClass:"waves-effect btn-star",class:_vm.classStar},[_c('i',{staticClass:"material-icons"},[_vm._v("star")])])])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-42fd26f0"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42fd26f0", __vue__options__)
  } else {
    hotAPI.rerender("data-v-42fd26f0", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],2:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".error-log {\n  border-radius: 10px;\n  top: 0px;\n  margin-bottom: 12px;\n  width: 90%;\n  left: 50%;\n  margin-left: -45%;\n}")
;(function(){


module.exports = {
  props: ['errorLog'],
  computed: {
    showError() {
      Materialize.toast(this.errorLog, 10000, 'error-log');
      return this.errorLog;
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"errors","error-log":_vm.showError}})}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34e3276b", __vue__options__)
  } else {
    hotAPI.rerender("data-v-34e3276b", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],3:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".card[data-v-199f4e12] {\n  margin-top: 90%;\n  width: 100%;\n}")
;(function(){


module.exports = {
  computed: {
    data() {
      return this.$store.state.substance.info;
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_c('h1',[_vm._v(_vm._s(_vm.data.label))]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(_vm.data.formula))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.data.text))])])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-199f4e12"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-199f4e12", __vue__options__)
  } else {
    hotAPI.rerender("data-v-199f4e12", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],4:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#model {\n  position: absolute;\n  top: 60px;\n  left: 0px;\n}")
;(function(){


const Model = require('../model');

module.exports = {
  methods: {
    generateStructure(data) {
      this.model.removeMolecule(0);
      this.model.addMolecule(data);
    }
  },
  mounted() {
    let wrap = document.getElementById('model');
    this.model = new Model(wrap, window.innerWidth, window.innerHeight / 2);
    this.model.start();

    this.$parent.$on('generateStructure', this.generateStructure);
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"model"}})}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5383ea47", __vue__options__)
  } else {
    hotAPI.rerender("data-v-5383ea47", __vue__options__)
  }
})()}
},{"../model":16,"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],5:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".row[data-v-96bedcd8] {\n  margin-top: 6px;\n}")
;(function(){


const Search = require('./Search.vue');
const SideNav = require('./SideNav.vue');

module.exports = {
  components: {
    Search,
    SideNav
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row",attrs:{"id":"navigation"}},[_c('div',{staticClass:"col s2"},[_c('side-nav')],1),_vm._v(" "),_c('div',{staticClass:"col s10"},[_c('search')],1)])}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-96bedcd8"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-96bedcd8", __vue__options__)
  } else {
    hotAPI.rerender("data-v-96bedcd8", __vue__options__)
  }
})()}
},{"./Search.vue":7,"./SideNav.vue":8,"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],6:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".preloader-wrapper {\n  top: 50%;\n  left: 50%;\n  margin: -32px;\n  position: fixed;\n}")
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preloader-wrapper big active"},[_c('div',{staticClass:"spinner-layer spinner-blue"},[_c('div',{staticClass:"circle-clipper left"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"gap-patch"},[_c('div',{staticClass:"circle"})]),_c('div',{staticClass:"circle-clipper right"},[_c('div',{staticClass:"circle"})])])])}]
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61fa2826", __vue__options__)
  } else {
    hotAPI.rerender("data-v-61fa2826", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],7:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".search-wrapper[data-v-b00e91b0] {\n  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.1), 0 1px 1px 0 rgba(0,0,0,0.05), 0 3px 1px -6px rgba(0,0,0,0.1) !important;\n}\n.search-wrapper input#search[data-v-b00e91b0] {\n  display: block;\n  font-size: 16px;\n  font-weight: 300;\n  width: 100%;\n  height: 45px;\n  margin: 0;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0 45px 0 15px;\n  border: 0;\n}\n.search-wrapper i.material-icons[data-v-b00e91b0] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}")
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-wrapper card"},[_c('input',{attrs:{"id":"search"}}),_c('i',{staticClass:"material-icons"},[_vm._v("search")])])}]
__vue__options__._scopeId = "data-v-b00e91b0"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b00e91b0", __vue__options__)
  } else {
    hotAPI.rerender("data-v-b00e91b0", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],8:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert(".button-collapse[data-v-3fa316fc] {\n  margin-top: 6px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  box-shadow: none;\n}\n.button-collapse i[data-v-3fa316fc] {\n  position: absolute;\n  top: 10px;\n  right: 13px;\n  cursor: pointer;\n  line-height: 33px;\n  color: #333;\n}\n.router-link-active[data-v-3fa316fc] {\n  color: #1976D2;\n}\n.router-link-active i[data-v-3fa316fc] {\n  color: #1976D2 !important;\n}")
;(function(){


module.exports = {
  methods: {
    closeSideNav() {
      $('.button-collapse').sideNav('hide');
    }
  },
  mounted() {
    $(".button-collapse").sideNav();
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"side-nav"}},[_c('ul',{staticClass:"side-nav",attrs:{"id":"slide-out"}},[_c('br'),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/main"}},[_c('i',{staticClass:"material-icons"},[_vm._v("visibility")]),_vm._v("Главная")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/types"}},[_c('i',{staticClass:"material-icons"},[_vm._v("view_module")]),_vm._v("Типы веществ")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/stars"}},[_c('i',{staticClass:"material-icons"},[_vm._v("star")]),_vm._v("Отмеченные")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/history"}},[_c('i',{staticClass:"material-icons"},[_vm._v("history")]),_vm._v("История")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/trainer_types"}},[_c('i',{staticClass:"material-icons"},[_vm._v("extension")]),_vm._v("Тренажер")])],1),_vm._v(" "),_vm._m(1),_vm._v(" "),_c('br'),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/choose_lang"}},[_vm._v("Сменить язык")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/star_app"}},[_vm._v("Оценить приложение")])],1),_vm._v(" "),_c('li',{on:{"click":_vm.closeSideNav}},[_c('router-link',{attrs:{"to":"/author"}},[_vm._v("Автор")])],1)]),_vm._v(" "),_vm._m(2)])}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{staticClass:"subheader"},[_vm._v("Molecules")])])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('div',{staticClass:"divider"})])},function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"waves-effect button-collapse",attrs:{"data-activates":"slide-out"}},[_c('i',{staticClass:"material-icons"},[_vm._v("menu")])])}]
__vue__options__._scopeId = "data-v-3fa316fc"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fa316fc", __vue__options__)
  } else {
    hotAPI.rerender("data-v-3fa316fc", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],9:[function(require,module,exports){
'use strict';

var Vue = require('vue');
var VueRouter = require('vue-router');
var Vuex = require('vuex');

var store = require('./store');

var App = require('./views/App.vue');
var Main = require('./views/Main.vue');
var TypesSubstances = require('./views/TypesSubstances.vue');
var Substances = require('./views/Substances.vue');
var ViewSubstance = require('./views/ViewSubstance.vue');
// const TrainerTypes = require('./views/TrainerTypes.vue');
// const Trainer = require('./views/Trainer.vue');
// const MarkedSubstances = require('./views/MarkedSubstances.vue');

Vue.use(VueRouter);
Vue.use(Vuex);

var router = new VueRouter({
	routes: [{ path: '/', redirect: '/main' }, { path: '/main', component: Main }, { path: '/types', component: TypesSubstances }, { path: '/type/:type', component: Substances }, { path: '/substance', component: ViewSubstance, props: function props(route) {
			return { query: route.query.q };
		} }]
});

new Vue({
	el: '#app',
	render: function render(h) {
		return h(App);
	},
	router: router,
	store: new Vuex.Store(store)
});

},{"./store":21,"./views/App.vue":24,"./views/Main.vue":25,"./views/Substances.vue":26,"./views/TypesSubstances.vue":27,"./views/ViewSubstance.vue":28,"vue":62,"vue-router":61,"vuex":64}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var atoms = require('./atoms.json');

var Atom = function () {
	function Atom(molecule, id, x, y, z) {
		_classCallCheck(this, Atom);

		this.molecule = molecule;
		this.model = molecule.model;

		this.id = id;

		this.x = x;
		this.y = y;
		this.z = z;

		this.nodes = [];

		this.data = atoms[id - 1];

		this.color = +('' + this.data.color).toLowerCase();
		this.shadow = +('' + this.data.shadow).toLowerCase();
		this.radius = +this.data['Ковалентный радиус, Å'] ? Math.min(+this.data['Ковалентный радиус, Å'] * 10, 10) : 10;
		this.detail = 2;

		// create three.js objects
		this.geometry = new THREE.IcosahedronGeometry(this.radius, this.detail);
		this.mesh = new THREE.Object3D();
		this.mesh.add(new THREE.Mesh(this.geometry, new THREE.MeshPhongMaterial({
			color: this.color,
			emissive: this.shadow,
			side: THREE.DoubleSide,
			shading: THREE.FlatShading
		})));
		this.mesh.position.set(this.x, this.y, this.z);
		this.molecule.stage.add(this.mesh);

		this.materialSelect = new THREE.MeshBasicMaterial({ color: 0x3992FF, side: THREE.BackSide });
		this.meshSelect = new THREE.Mesh(this.geometry, this.materialSelect);
		this.meshSelect.scale.multiplyScalar(1.2);
		this.meshSelect.position.x = this.x;
		this.meshSelect.position.y = this.y;
		this.meshSelect.position.z = this.z;
		this.meshSelect.visible = false;
		this.molecule.stage.add(this.meshSelect);

		this._bindEvents();
	}

	_createClass(Atom, [{
		key: '_bindEvents',
		value: function _bindEvents() {
			var _this = this;

			this.model.domEvents.addEventListener(this.mesh, 'click', function (event) {

				_this.molecule.atoms.forEach(function (atom) {
					atom.meshSelect.visible = false;
				});
				_this.meshSelect.visible = true;

				var table = $('<table class="ui blue table"><tbody></tbody></table>');

				table.find('tbody').append('<tr><td>\u041F\u043E\u0440\u044F\u0434\u043A\u043E\u0432\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0430\u0442\u043E\u043C\u0430</td><td>' + _this.id + '</td></tr>');
				for (var key in _this.data) {
					if (key == 'description' || key == 'label' || key == 'shadow' || key == 'color') continue;
					table.find('tbody').append('<tr><td>' + key + '</td><td>' + _this.data[key] + '</td></tr>');
				}
				$('#info-atom .content').empty();
				$('#info-atom .content').append('<i class="right floated large close icon" style="cursor: pointer"></i>');
				$('#info-atom .content i.close').on('click', function () {
					$('#info-atom').hide();
					$('#info-substance').show().transition('pulse');
				});
				$('#info-atom .content').append('<div class="header">' + _this.data.label.split(' ')[0] + '</div>');
				$('#info-atom .content').append('<div class="meta">' + _this.data.label.split(' ')[1] + '</div>');
				$('#info-atom .content').append('<div class="description">' + _this.data.description + '</div>');
				$('#info-atom .content').append(table);
				$('#info-substance').hide();
				$('#info-atom').show().transition('pulse');
			}, false);
		}
	}, {
		key: 'remove',
		value: function remove() {
			this.model.domEvents.unbind(this.mesh, 'click');
		}
	}]);

	return Atom;
}();

module.exports = Atom;

},{"./atoms.json":14}],11:[function(require,module,exports){
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function Link(molecula, atom1, atom2, type) {
	_classCallCheck(this, Link);

	this.molecula = molecula;
	this.atom1 = atom1;
	this.atom2 = atom2;
	this.type = type;

	// create three.js objects

	this.tubes = new THREE.Group();
	this.molecula.stage.add(this.tubes);

	for (var i = 0; i < type; i++) {

		var p1 = new THREE.Vector3(this.atom1.x, this.atom1.y, this.atom1.z + i * (6 / type) - 2 / type * (type - 1));
		var p2 = new THREE.Vector3(this.atom2.x, this.atom2.y, this.atom2.z + i * (6 / type) - 2 / type * (type - 1));

		var mesh = new THREE.Object3D();
		var geometry = new THREE.TubeGeometry(new THREE.CatmullRomCurve3([p1, p2]), 12, 2 / type);

		mesh.add(new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
			color: 0xB0B0B0,
			emissive: 0x7B7B7B,
			side: THREE.DoubleSide,
			shading: THREE.FlatShading
		})));
		this.tubes.add(mesh);
	}
};

module.exports = Link;

},{}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Atom = require('./Atom');
var Link = require('./Link');

var Molecule = function () {
	function Molecule(model, index, data) {
		_classCallCheck(this, Molecule);

		this.model = model;
		this.index = 0;
		this._data = data.PC_Compounds[0];

		this.typeStructure = data.typeStructure;

		this.stage = new THREE.Group();
		this.model.scene.add(this.stage);

		this.atoms = [];
		this.links = [];

		this.typeStructure === '2d' && this._computedCenter();
		this._initAtoms();
		this._bindNodes();

		this.model.camera.position.z = Math.max(Math.min(this.atoms.length * 20, 200), 70);
	}

	_createClass(Molecule, [{
		key: '_computedCenter',
		value: function _computedCenter() {
			var pos = this._data.coords[0].conformers[0];
			var sortX = pos.x.slice(0).sort(function (a, b) {
				return a - b;
			});
			var sortY = pos.y.slice(0).sort(function (a, b) {
				return a - b;
			});

			this.center = {
				x: sortX[Math.round(sortX.length / 2)],
				y: sortY[Math.round(sortY.length / 2)]
			};
		}
	}, {
		key: '_initAtoms',
		value: function _initAtoms() {
			var pos = this._data.coords[0].conformers[0];

			for (var i = 0; i < this._data.atoms.element.length; i++) {
				var x = void 0,
				    y = void 0,
				    z = void 0;

				if (this.typeStructure === '3d') {
					x = pos.x[i] * 20;
					y = pos.y[i] * 20;
					z = pos.z[i] * 20;
				} else {
					x = this.center.x * 30 - pos.x[i] * 30;
					y = this.center.y * 30 - pos.y[i] * 30;
					z = 0;
				}

				var atom = new Atom(this, this._data.atoms.element[i], x, y, z);
				this.atoms.push(atom);
			}
		}
	}, {
		key: '_bindNodes',
		value: function _bindNodes() {
			if (!this._data.bonds) return;

			for (var i = 0; i < this._data.bonds.aid1.length; i++) {
				var aid1 = this._data.bonds.aid1[i] - 1;
				var aid2 = this._data.bonds.aid2[i] - 1;
				var type = this._data.bonds.order[i];

				this.links.push(new Link(this, this.atoms[aid1], this.atoms[aid2], type));
			}
		}
	}, {
		key: 'remove',
		value: function remove() {
			for (var i = 0; i < this.atoms.length; i++) {
				this.atoms[i].remove();
			}
			this.stage.parent.remove(this.stage);
		}
	}, {
		key: 'update',
		value: function update() {
			this.stage.rotation.x += 0.001;
			this.stage.rotation.y += 0.0001;
		}
	}]);

	return Molecule;
}();

module.exports = Molecule;

},{"./Atom":10,"./Link":11}],13:[function(require,module,exports){
'use strict';

/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author mrflix / http://felixniklas.de
 * 
 * released under MIT License (MIT)
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function (object, domElement, localElement) {

		this.object = object;
		this.domElement = domElement !== undefined ? domElement : document;
		this.localElement = localElement !== undefined ? localElement : document;

		// API

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the control orbits around
		// and where it pans with respect to.
		this.target = new THREE.Vector3();
		// center is old, deprecated; use "target" instead
		this.center = this.target;

		// This option actually enables dollying in and out; left as "zoom" for
		// backwards compatibility
		this.noZoom = false;
		this.zoomSpeed = 1.0;
		// Limits to how far you can dolly in and out
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// Set to true to disable this control
		this.noRotate = false;
		this.rotateSpeed = 1.0;

		// Set to true to disable this control
		this.noPan = false;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// Set to true to disable use of the keys
		this.noKeys = false;
		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		////////////
		// internals

		var scope = this;

		var EPS = 0.000001;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		var phiDelta = 0;
		var thetaDelta = 0;
		var scale = 1;
		var pan = new THREE.Vector3();

		var lastPosition = new THREE.Vector3();

		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };
		var state = STATE.NONE;

		// events

		var changeEvent = { type: 'change' };

		this.rotateLeft = function (angle) {

				if (angle === undefined) {

						angle = getAutoRotationAngle();
				}

				thetaDelta -= angle;
		};

		this.rotateUp = function (angle) {

				if (angle === undefined) {

						angle = getAutoRotationAngle();
				}

				phiDelta -= angle;
		};

		// pass in distance in world space to move left
		this.panLeft = function (distance) {

				var panOffset = new THREE.Vector3();
				var te = this.object.matrix.elements;
				// get X column of matrix
				panOffset.set(te[0], te[1], te[2]);
				panOffset.multiplyScalar(-distance);

				pan.add(panOffset);
		};

		// pass in distance in world space to move up
		this.panUp = function (distance) {

				var panOffset = new THREE.Vector3();
				var te = this.object.matrix.elements;
				// get Y column of matrix
				panOffset.set(te[4], te[5], te[6]);
				panOffset.multiplyScalar(distance);

				pan.add(panOffset);
		};

		// main entry point; pass in Vector2 of change desired in pixel space,
		// right and down are positive
		this.pan = function (delta) {

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				if (scope.object.fov !== undefined) {

						// perspective
						var position = scope.object.position;
						var offset = position.clone().sub(scope.target);
						var targetDistance = offset.length();

						// half of the fov is center to top of screen
						targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);
						// we actually don't use screenWidth, since perspective camera is fixed to screen height
						scope.panLeft(2 * delta.x * targetDistance / element.clientHeight);
						scope.panUp(2 * delta.y * targetDistance / element.clientHeight);
				} else if (scope.object.top !== undefined) {

						// orthographic
						scope.panLeft(delta.x * (scope.object.right - scope.object.left) / element.clientWidth);
						scope.panUp(delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight);
				} else {

						// camera neither orthographic or perspective - warn user
						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
				}
		};

		this.dollyIn = function (dollyScale) {

				if (dollyScale === undefined) {

						dollyScale = getZoomScale();
				}

				scale /= dollyScale;
		};

		this.dollyOut = function (dollyScale) {

				if (dollyScale === undefined) {

						dollyScale = getZoomScale();
				}

				scale *= dollyScale;
		};

		this.update = function () {

				var position = this.object.position;
				var offset = position.clone().sub(this.target);

				// angle from z-axis around y-axis

				var theta = Math.atan2(offset.x, offset.z);

				// angle from y-axis

				var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

				if (this.autoRotate) {

						this.rotateLeft(getAutoRotationAngle());
				}

				theta += thetaDelta;
				phi += phiDelta;

				// restrict phi to be between desired limits
				phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

				// restrict phi to be betwee EPS and PI-EPS
				phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

				var radius = offset.length() * scale;

				// restrict radius to be between desired limits
				radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

				// move target to panned location
				this.target.add(pan);

				offset.x = radius * Math.sin(phi) * Math.sin(theta);
				offset.y = radius * Math.cos(phi);
				offset.z = radius * Math.sin(phi) * Math.cos(theta);

				position.copy(this.target).add(offset);

				this.object.lookAt(this.target);

				thetaDelta = 0;
				phiDelta = 0;
				scale = 1;
				pan.set(0, 0, 0);

				if (lastPosition.distanceTo(this.object.position) > 0) {

						this.dispatchEvent(changeEvent);

						lastPosition.copy(this.object.position);
				}
		};

		function getAutoRotationAngle() {

				return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}

		function getZoomScale() {

				return Math.pow(0.95, scope.zoomSpeed);
		}

		function onMouseDown(event) {

				if (scope.enabled === false) {
						return;
				}
				event.preventDefault();

				if (event.button === 0) {
						if (scope.noRotate === true) {
								return;
						}

						state = STATE.ROTATE;

						rotateStart.set(event.clientX, event.clientY);
				} else if (event.button === 1) {
						if (scope.noZoom === true) {
								return;
						}

						state = STATE.DOLLY;

						dollyStart.set(event.clientX, event.clientY);
				} else if (event.button === 2) {
						if (scope.noPan === true) {
								return;
						}

						state = STATE.PAN;

						panStart.set(event.clientX, event.clientY);
				}

				// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
				scope.domElement.addEventListener('mousemove', onMouseMove, false);
				scope.domElement.addEventListener('mouseup', onMouseUp, false);
		}

		function onMouseMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				if (state === STATE.ROTATE) {

						if (scope.noRotate === true) return;

						rotateEnd.set(event.clientX, event.clientY);
						rotateDelta.subVectors(rotateEnd, rotateStart);

						// rotating across whole screen goes 360 degrees around
						scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
						// rotating up and down along whole screen attempts to go 360, but limited to 180
						scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

						rotateStart.copy(rotateEnd);
				} else if (state === STATE.DOLLY) {

						if (scope.noZoom === true) return;

						dollyEnd.set(event.clientX, event.clientY);
						dollyDelta.subVectors(dollyEnd, dollyStart);

						if (dollyDelta.y > 0) {

								scope.dollyIn();
						} else {

								scope.dollyOut();
						}

						dollyStart.copy(dollyEnd);
				} else if (state === STATE.PAN) {

						if (scope.noPan === true) return;

						panEnd.set(event.clientX, event.clientY);
						panDelta.subVectors(panEnd, panStart);

						scope.pan(panDelta);

						panStart.copy(panEnd);
				}

				// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
				scope.update();
		}

		function onMouseUp() /* event */{

				if (scope.enabled === false) return;

				// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
				scope.domElement.removeEventListener('mousemove', onMouseMove, false);
				scope.domElement.removeEventListener('mouseup', onMouseUp, false);

				state = STATE.NONE;
		}

		function onMouseWheel(event) {

				if (scope.enabled === false || scope.noZoom === true) return;

				var delta = 0;

				if (event.wheelDelta) {
						// WebKit / Opera / Explorer 9

						delta = event.wheelDelta;
				} else if (event.detail) {
						// Firefox

						delta = -event.detail;
				}

				if (delta > 0) {

						scope.dollyOut();
				} else {

						scope.dollyIn();
				}
		}

		function onKeyDown(event) {

				if (scope.enabled === false) {
						return;
				}
				if (scope.noKeys === true) {
						return;
				}
				if (scope.noPan === true) {
						return;
				}

				// pan a pixel - I guess for precise positioning?
				// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
				var needUpdate = false;

				switch (event.keyCode) {

						case scope.keys.UP:
								scope.pan(new THREE.Vector2(0, scope.keyPanSpeed));
								needUpdate = true;
								break;
						case scope.keys.BOTTOM:
								scope.pan(new THREE.Vector2(0, -scope.keyPanSpeed));
								needUpdate = true;
								break;
						case scope.keys.LEFT:
								scope.pan(new THREE.Vector2(scope.keyPanSpeed, 0));
								needUpdate = true;
								break;
						case scope.keys.RIGHT:
								scope.pan(new THREE.Vector2(-scope.keyPanSpeed, 0));
								needUpdate = true;
								break;
				}

				// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
				if (needUpdate) {

						scope.update();
				}
		}

		function touchstart(event) {

				if (scope.enabled === false) {
						return;
				}

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate
								if (scope.noRotate === true) {
										return;
								}

								state = STATE.TOUCH_ROTATE;

								rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
								break;

						case 2:
								// two-fingered touch: dolly
								if (scope.noZoom === true) {
										return;
								}

								state = STATE.TOUCH_DOLLY;

								var dx = event.touches[0].pageX - event.touches[1].pageX;
								var dy = event.touches[0].pageY - event.touches[1].pageY;
								var distance = Math.sqrt(dx * dx + dy * dy);
								dollyStart.set(0, distance);
								break;

						case 3:
								// three-fingered touch: pan
								if (scope.noPan === true) {
										return;
								}

								state = STATE.TOUCH_PAN;

								panStart.set(event.touches[0].pageX, event.touches[0].pageY);
								break;

						default:
								state = STATE.NONE;

				}
		}

		function touchmove(event) {

				if (scope.enabled === false) {
						return;
				}

				event.preventDefault();
				event.stopPropagation();

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate
								if (scope.noRotate === true) {
										return;
								}
								if (state !== STATE.TOUCH_ROTATE) {
										return;
								}

								rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
								rotateDelta.subVectors(rotateEnd, rotateStart);

								// rotating across whole screen goes 360 degrees around
								scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
								// rotating up and down along whole screen attempts to go 360, but limited to 180
								scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

								rotateStart.copy(rotateEnd);
								break;

						case 2:
								// two-fingered touch: dolly
								if (scope.noZoom === true) {
										return;
								}
								if (state !== STATE.TOUCH_DOLLY) {
										return;
								}

								var dx = event.touches[0].pageX - event.touches[1].pageX;
								var dy = event.touches[0].pageY - event.touches[1].pageY;
								var distance = Math.sqrt(dx * dx + dy * dy);

								dollyEnd.set(0, distance);
								dollyDelta.subVectors(dollyEnd, dollyStart);

								if (dollyDelta.y > 0) {

										scope.dollyOut();
								} else {

										scope.dollyIn();
								}

								dollyStart.copy(dollyEnd);
								break;

						case 3:
								// three-fingered touch: pan
								if (scope.noPan === true) {
										return;
								}
								if (state !== STATE.TOUCH_PAN) {
										return;
								}

								panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
								panDelta.subVectors(panEnd, panStart);

								scope.pan(panDelta);

								panStart.copy(panEnd);
								break;

						default:
								state = STATE.NONE;

				}
		}

		function touchend() /* event */{

				if (scope.enabled === false) {
						return;
				}

				state = STATE.NONE;
		}

		this.domElement.addEventListener('contextmenu', function (event) {
				event.preventDefault();
		}, false);
		this.localElement.addEventListener('mousedown', onMouseDown, false);
		this.domElement.addEventListener('mousewheel', onMouseWheel, false);
		this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false); // firefox

		this.domElement.addEventListener('keydown', onKeyDown, false);

		this.localElement.addEventListener('touchstart', touchstart, false);
		this.domElement.addEventListener('touchend', touchend, false);
		this.domElement.addEventListener('touchmove', touchmove, false);
};

THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);

module.exports = THREE.OrbitControls;

},{}],14:[function(require,module,exports){
module.exports=[
    {
        "Химический символ": "H",
        "label": "Водород Hydrogen",
        "color": "0xFFFFFF",
        "shadow": "0xEEEEEE",
        "Электронная формула": "()1s0",
        "description": "<b>&#x412;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;</b> (&#x43B;&#x430;&#x442;. Hydrogenium), H, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E; &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x43E;&#x43C;&#x443; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x443; &#x432; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x435; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 1,0079. &#x41F;&#x440;&#x438; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; &#x412;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434; - &#x433;&#x430;&#x437;; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; &#x446;&#x432;&#x435;&#x442;&#x430;, &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430; &#x438; &#x432;&#x43A;&#x443;&#x441;&#x430;.\n",
        "Атомная масса": "1.0079",
        "Плотность, кг/м³": "0.0898",
        "Температура плавления, °С": "-259.1",
        "Температура кипения, °С": "-252.8",
        "Теплоемкость, кДж/(кг·°С)": "14.442",
        "Электроотрицательность": "2.1",
        "Ковалентный радиус, Å": "0.32",
        "1-й ионизац. потенциал, эв": "13.60"
    },
    {
        "Химический символ": "He",
        "label": "Гелий Helium",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "Электронная формула": "()1s0",
        "description": "<b>&#x413;&#x435;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Helium), &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; &#x41D;&#x435;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;; &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 2, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 4,0026; &#x433;&#x430;&#x437; &#x431;&#x435;&#x437; &#x446;&#x432;&#x435;&#x442;&#x430; &#x438; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x413;&#x435;&#x43B;&#x438;&#x439; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 2 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>3</sup>&#x41D;&#x435; &#x438; <sup>4</sup>&#x41D;&#x435; (&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; <sup>4</sup>&#x41D;&#x435; &#x440;&#x435;&#x437;&#x43A;&#x43E; &#x43F;&#x440;&#x435;&#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442;).\n",
        "Атомная масса": "4.0026",
        "Плотность, кг/м³": "0.179",
        "Температура плавления, °С": "-272.2",
        "Температура кипения, °С": "-268.9",
        "Теплоемкость, кДж/(кг·°С)": "5.232",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "0.93",
        "1-й ионизац. потенциал, эв": "24.59"
    },
    {
        "Химический символ": "Li",
        "label": "Литий Lithium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "Электронная формула": "(He)2s1",
        "description": "<b>&#x41B;&#x438;&#x442;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Lithium), Li, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 3, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 6,941, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x41B;&#x438;&#x442;&#x438;&#x439; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; - <sup>6</sup>Li (7,42%) &#x438; <sup>7</sup>Li (92,58%). &#x41B;&#x438;&#x442;&#x438;&#x439; &#x431;&#x44B;&#x43B; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1817 &#x433;&#x43E;&#x434;&#x443; &#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x410;. &#x410;&#x440;&#x444;&#x432;&#x435;&#x434;&#x441;&#x43E;&#x43D;&#x43E;&#x43C; &#x432; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x435; &#x43F;&#x435;&#x442;&#x430;&#x43B;&#x438;&#x442;&#x435;; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. lithos - &#x43A;&#x430;&#x43C;&#x435;&#x43D;&#x44C;. &#x41C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x41B;&#x438;&#x442;&#x438;&#x439; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x432; 1818 &#x433;&#x43E;&#x434;&#x443; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x413;. &#x414;&#x44D;&#x432;&#x438;.\n",
        "Атомная масса": "6.941",
        "Плотность, кг/м³": "530",
        "Температура плавления, °С": "180.5",
        "Температура кипения, °С": "1342",
        "Теплоемкость, кДж/(кг·°С)": "3.307",
        "Электроотрицательность": "1.0",
        "Ковалентный радиус, Å": "1.23",
        "1-й ионизац. потенциал, эв": "5.39"
    },
    {
        "Химический символ": "Be",
        "label": "Бериллий Beryllium",
        "color": "0x3E7819",
        "shadow": "0x206827",
        "Электронная формула": "(He)2s2",
        "description": "<b>&#x411;&#x435;&#x440;&#x438;&#x43B;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Beryllium), Be, &#x445;&#x44F;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 4, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 9,0122; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x439; &#x441;&#x432;&#x435;&#x442;&#x43B;&#x43E;-&#x441;&#x435;&#x440;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x418;&#x43C;&#x435;&#x435;&#x442; &#x43E;&#x434;&#x438;&#x43D; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>9</sup>&#x412;&#x435;. \n",
        "Атомная масса": "9.0122",
        "Плотность, кг/м³": "1850",
        "Температура плавления, °С": "1285",
        "Температура кипения, °С": "2470",
        "Теплоемкость, кДж/(кг·°С)": "1.884",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": "0.90",
        "1-й ионизац. потенциал, эв": "9.32"
    },
    {
        "Химический символ": "B",
        "label": "Бор Boron",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(He)2s22p1",
        "description": "<b>&#x411;&#x43E;&#x440;</b> (&#x43B;&#x430;&#x442;. Borum), &#x412;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 5, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 10,811; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x441;&#x435;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x43E;-&#x447;&#x435;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; (&#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x447;&#x438;&#x441;&#x442;&#x44B;&#x439; &#x411;&#x43E;&#x440; &#x431;&#x435;&#x441;&#x446;&#x432;&#x435;&#x442;&#x435;&#x43D;). &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x411;&#x43E;&#x440; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>10</sup>B (19%) &#x438; <sup>11</sup>B (81%). \n",
        "Атомная масса": "10.811",
        "Плотность, кг/м³": "2340",
        "Температура плавления, °С": "2030",
        "Температура кипения, °С": "3860",
        "Теплоемкость, кДж/(кг·°С)": "1.293",
        "Электроотрицательность": "2.0",
        "Ковалентный радиус, Å": "0.82",
        "1-й ионизац. потенциал, эв": "8.30"
    },
    {
        "Химический символ": "C",
        "label": "Углерод Carbon",
        "color": "0x343434",
        "shadow": "0x000000",
        "Электронная формула": "(He)2s22p2",
        "description": "<b>&#x423;&#x433;&#x43B;&#x435;&#x440;&#x43E;&#x434;</b> (&#x43B;&#x430;&#x442;. Carboneum), &#x421;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 6, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 12,011. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x434;&#x432;&#x430; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;: <sup>12</sup>&#x421; (98,892%) &#x438; <sup>13</sup>&#x421; (1,108%). &#x418;&#x437; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x432;&#x430;&#x436;&#x435;&#x43D; <sup>14</sup>&#x421; &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430;(&#x422;<sub>&#xBD;</sub> = 5,6&#xB7;10<sup>3</sup> &#x43B;&#x435;&#x442;). &#x41D;&#x435;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x435; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430; <sup>14</sup>&#x421; (&#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 2&#xB7;10<sup>-10</sup>% &#x43F;&#x43E; &#x43C;&#x430;&#x441;&#x441;&#x435;) &#x43F;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x43D;&#x43E; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x432;&#x435;&#x440;&#x445;&#x43D;&#x438;&#x445; &#x441;&#x43B;&#x43E;&#x44F;&#x445; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x44B; &#x43F;&#x440;&#x438; &#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x438; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x43A;&#x43E;&#x441;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x43D;&#x430; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x430;&#x437;&#x43E;&#x442;&#x430; <sup>14</sup>N. &#x41F;&#x43E; &#x443;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>14</sup>&#x421; &#x432; &#x43E;&#x441;&#x442;&#x430;&#x442;&#x43A;&#x430;&#x445; &#x431;&#x438;&#x43E;&#x433;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x440;&#x43E;&#x438;&#x441;&#x445;&#x43E;&#x436;&#x434;&#x435;&#x43D;&#x438;&#x44F; &#x43E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x44F;&#x44E;&#x442; &#x438;&#x445; &#x432;&#x43E;&#x437;&#x440;&#x430;&#x441;&#x442;. <sup>14</sup>&#x421; &#x448;&#x438;&#x440;&#x43E;&#x43A;&#x43E; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;&#x430;.\n",
        "Атомная масса": "12.011",
        "Плотность, кг/м³": "2260",
        "Температура плавления, °С": "3700 (возг.)",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.69",
        "Электроотрицательность": "2.5",
        "Ковалентный радиус, Å": "0.77",
        "1-й ионизац. потенциал, эв": "11.26"
    },
    {
        "Химический символ": "N",
        "label": "Азот Nitrogen",
        "color": "0x1157FF",
        "shadow": "0x1030FF",
        "Электронная формула": "(He)2s22p3",
        "description": "<b>&#x410;&#x437;&#x43E;&#x442;</b> (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. azoos - &#x431;&#x435;&#x437;&#x436;&#x438;&#x437;&#x43D;&#x435;&#x43D;&#x43D;&#x44B;&#x439;, &#x43B;&#x430;&#x442;. Nitrogenium), N, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 7, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 14,0067; &#x431;&#x435;&#x441;&#x446;&#x432;&#x435;&#x442;&#x43D;&#x44B;&#x439; &#x433;&#x430;&#x437;, &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x44E;&#x449;&#x438;&#x439; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430; &#x438; &#x432;&#x43A;&#x443;&#x441;&#x430;.\n",
        "Атомная масса": "14.007",
        "Плотность, кг/м³": "1.251",
        "Температура плавления, °С": "-210",
        "Температура кипения, °С": "-195.8",
        "Теплоемкость, кДж/(кг·°С)": "1.034",
        "Электроотрицательность": "3.0",
        "Ковалентный радиус, Å": "0.74",
        "1-й ионизац. потенциал, эв": "14.53"
    },
    {
        "Химический символ": "O",
        "label": "Кислород Oxygen",
        "color": "0xFF3A3A",
        "shadow": "0xFF1313",
        "Электронная формула": "(He)2s22p4",
        "description": "<b>&#x41A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;</b> (&#x43B;&#x430;&#x442;. Oxygenium), &#x41E;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 8, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 15,9994. &#x41F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; &#x41A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434; &#x433;&#x430;&#x437; &#x431;&#x435;&#x437; &#x446;&#x432;&#x435;&#x442;&#x430;, &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430; &#x438; &#x432;&#x43A;&#x443;&#x441;&#x430;. &#x422;&#x440;&#x443;&#x434;&#x43D;&#x43E; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x442;&#x44C; &#x434;&#x440;&#x443;&#x433;&#x43E;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x438;&#x433;&#x440;&#x430;&#x43B; &#x431;&#x44B; &#x43D;&#x430; &#x43D;&#x430;&#x448;&#x435;&#x439; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442;&#x435; &#x442;&#x430;&#x43A;&#x443;&#x44E; &#x432;&#x430;&#x436;&#x43D;&#x443;&#x44E; &#x440;&#x43E;&#x43B;&#x44C;, &#x43A;&#x430;&#x43A; &#x41A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;.\n",
        "Атомная масса": "15.999",
        "Плотность, кг/м³": "1.429",
        "Температура плавления, °С": "-218.8",
        "Температура кипения, °С": "-183",
        "Теплоемкость, кДж/(кг·°С)": "0.913",
        "Электроотрицательность": "3.5",
        "Ковалентный радиус, Å": "0.73",
        "1-й ионизац. потенциал, эв": "13.62"
    },
    {
        "Химический символ": "F",
        "label": "Фтор Fluorine",
        "color": "0x55B940",
        "shadow": "0x1F7B00",
        "Электронная формула": "(He)2s22p5",
        "description": "<b>&#x424;&#x442;&#x43E;&#x440;</b> (&#x43B;&#x430;&#x442;. Fluorum), F, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;&#x43C;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 9, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 18,998403; &#x43F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; (0 &#xB0;&#x421;; 0,1 &#x41C;&#x43D;/&#x43C;<sup>2</sup>, &#x438;&#x43B;&#x438; 1 &#x43A;&#x433;&#x441;/&#x441;&#x43C;<sup>2</sup>) - &#x433;&#x430;&#x437; &#x431;&#x43B;&#x435;&#x434;&#x43D;&#x43E;-&#x436;&#x435;&#x43B;&#x442;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441; &#x440;&#x435;&#x437;&#x43A;&#x438;&#x43C; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x43E;&#x43C;.\n",
        "Атомная масса": "18.998",
        "Плотность, кг/м³": "1.696",
        "Температура плавления, °С": "-219.6",
        "Температура кипения, °С": "-188.2",
        "Теплоемкость, кДж/(кг·°С)": "0.753",
        "Электроотрицательность": "4.0",
        "Ковалентный радиус, Å": "0.72",
        "1-й ионизац. потенциал, эв": "17.42"
    },
    {
        "Химический символ": "Ne",
        "label": "Неон Neon",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "Электронная формула": "(He)2s22p6",
        "description": "<b>&#x41D;&#x435;&#x43E;&#x43D;</b> (&#x43B;&#x430;&#x442;. Neonum), Ne, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 10, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 20,179. &#x41D;&#x430; &#x417;&#x435;&#x43C;&#x43B;&#x435; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x43C; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x43C; &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435;, &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x41D;&#x435;&#x43E;&#x43D;&#x430; &#x432; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x439; &#x43E;&#x446;&#x435;&#x43D;&#x438;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; 7,1&#xB7;10<sup>11</sup> &#x442;. &#x412; 1 &#x43C;<sup>3</sup>&#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x438;&#x442;&#x441;&#x44F; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 16 &#x441;&#x43C;<sup>3</sup> &#x41D;&#x435;&#x43E;&#x43D;&#x430;. &#x410;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x41D;&#x435;&#x43E;&#x43D; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x442;&#x440;&#x435;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>20</sup>Ne, <sup>21</sup>Ne &#x438; <sup>22</sup>Ne; &#x43F;&#x440;&#x435;&#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; <sup>20</sup>Ne (90,92%). &#x41D;&#x435;&#x43E;&#x43D; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1898 &#x433;&#x43E;&#x434;&#x443; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x423;. &#x420;&#x430;&#x43C;&#x437;&#x430;&#x435;&#x43C; &#x438; M. &#x422;&#x440;&#x430;&#x432;&#x435;&#x440;&#x441;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x43B;&#x435;&#x433;&#x43A;&#x43E;&#x43B;&#x435;&#x442;&#x443;&#x447;&#x435;&#x439; &#x444;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x438; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x433;&#x43E; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430;; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x43F;&#x440;&#x43E;&#x438;&#x441;&#x445;&#x43E;&#x434;&#x438;&#x442; &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x433;&#x43E; neos - &#x43D;&#x43E;&#x432;&#x44B;&#x439;.\n",
        "Атомная масса": "20.180",
        "Плотность, кг/м³": "0.901",
        "Температура плавления, °С": "-248.6",
        "Температура кипения, °С": "-246",
        "Теплоемкость, кДж/(кг·°С)": "0.904",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "0.71",
        "1-й ионизац. потенциал, эв": "21.56"
    },
    {
        "Химический символ": "Na",
        "label": "Натрий Sodium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "Электронная формула": "(Ne)3s1",
        "description": "<b>&#x41D;&#x430;&#x442;&#x440;&#x438;&#x439;</b> (Natrium), Na, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;: &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 11, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 22,9898; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43D;&#x430; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x435; &#x431;&#x44B;&#x441;&#x442;&#x440;&#x43E; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x44F;&#x44E;&#x449;&#x438;&#x439;&#x441;&#x44F; &#x441; &#x43F;&#x43E;&#x432;&#x435;&#x440;&#x445;&#x43D;&#x43E;&#x441;&#x442;&#x438;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>23</sup>Na.\n",
        "Атомная масса": "22.990",
        "Плотность, кг/м³": "970",
        "Температура плавления, °С": "97.8",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "1.235",
        "Электроотрицательность": "0.9",
        "Ковалентный радиус, Å": "1.54",
        "1-й ионизац. потенциал, эв": "5.14"
    },
    {
        "Химический символ": "Mg",
        "label": "Магний Magnesium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ne)3s2",
        "description": "<b>&#x41C;&#x430;&#x433;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Magnesium), Mg, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 12, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 24,305. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x41C;&#x430;&#x433;&#x43D;&#x438;&#x439; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x442;&#x440;&#x435;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>24</sup>Mg (78,60%), <sup>25</sup>Mg (10,11%) &#x438; <sup>26</sup>Mg (11,29%). &#x41C;&#x430;&#x433;&#x43D;&#x438;&#x439; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1808 &#x433;&#x43E;&#x434;&#x443; &#x413;. &#x414;&#x44D;&#x432;&#x438;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x43F;&#x43E;&#x434;&#x432;&#x435;&#x440;&#x433; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x443; &#x441; &#x440;&#x442;&#x443;&#x442;&#x43D;&#x44B;&#x43C; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x443;&#x432;&#x43B;&#x430;&#x436;&#x43D;&#x435;&#x43D;&#x43D;&#x443;&#x44E; &#x43C;&#x430;&#x433;&#x43D;&#x435;&#x437;&#x438;&#x44E; (&#x434;&#x430;&#x432;&#x43D;&#x43E; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E;&#x435; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;); &#x414;&#x44D;&#x432;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B; &#x430;&#x43C;&#x430;&#x43B;&#x44C;&#x433;&#x430;&#x43C;&#x443;, &#x430; &#x438;&#x437; &#x43D;&#x435;&#x435; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x43E;&#x442;&#x433;&#x43E;&#x43D;&#x43A;&#x438; &#x440;&#x442;&#x443;&#x442;&#x438; - &#x43D;&#x43E;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x440;&#x43E;&#x448;&#x43A;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x43D;&#x44B;&#x439; &#x43C;&#x430;&#x433;&#x43D;&#x438;&#x435;&#x43C;. &#x412; 1828 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x410;. &#x411;&#x44E;&#x441;&#x441;&#x438; &#x432;&#x43E;&#x441;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x440;&#x430;&#x441;&#x43F;&#x43B;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x430; &#x41C;&#x430;&#x433;&#x43D;&#x438;&#x44F; &#x43F;&#x430;&#x440;&#x430;&#x43C;&#x438; &#x43A;&#x430;&#x43B;&#x438;&#x44F; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B; &#x41C;&#x430;&#x433;&#x43D;&#x438;&#x439; &#x432; &#x432;&#x438;&#x434;&#x435; &#x43D;&#x435;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x445; &#x448;&#x430;&#x440;&#x438;&#x43A;&#x43E;&#x432; &#x441; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x431;&#x43B;&#x435;&#x441;&#x43A;&#x43E;&#x43C;.\n",
        "Атомная масса": "24.305",
        "Плотность, кг/м³": "1740",
        "Температура плавления, °С": "650",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "1.047",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.36",
        "1-й ионизац. потенциал, эв": "7.64"
    },
    {
        "Химический символ": "Al",
        "label": "Алюминий Aluminium",
        "Электронная формула": "(Ne)3s23p1",
        "description": "<b>&#x410;&#x43B;&#x44E;&#x43C;&#x438;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Aluminium), Al, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 13, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 26,9815; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x421;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>27</sup>Al.\n",
        "Атомная масса": "26.982",
        "Плотность, кг/м³": "2700",
        "Температура плавления, °С": "660",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.9",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": "1.18",
        "1-й ионизац. потенциал, эв": "5.98"
    },
    {
        "Химический символ": "Si",
        "label": "Кремний Silicon",
        "Электронная формула": "(Ne)3s23p2",
        "description": "<b>&#x41A;&#x440;&#x435;&#x43C;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Silicium), Si, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 14, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 28,086. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x442;&#x440;&#x435;&#x43C;&#x44F; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438;: <sup>28</sup>Si (92,27%), <sup>29</sup>Si (4,68%) &#x438; <sup>30</sup>Si (3,05%).\n",
        "Атомная масса": "28.086",
        "Плотность, кг/м³": "2330",
        "Температура плавления, °С": "1410",
        "Температура кипения, °С": "2600",
        "Теплоемкость, кДж/(кг·°С)": "0.678",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.11",
        "1-й ионизац. потенциал, эв": "8.15"
    },
    {
        "Химический символ": "P",
        "label": "Фосфор Phosphorus",
        "color": "0xFF7A44",
        "shadow": "0xFF7320",
        "Электронная формула": "(Ne)3s23p3",
        "description": "<b>&#x424;&#x43E;&#x441;&#x444;&#x43E;&#x440;</b> (&#x43B;&#x430;&#x442;. Phosphorus), P, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 15, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 30,97376, &#x43D;&#x435;&#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x424;&#x43E;&#x441;&#x444;&#x43E;&#x440; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>31</sup>&#x420;; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x440;&#x44F;&#x434; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x432; &#x442;&#x43E;&#x43C; &#x447;&#x438;&#x441;&#x43B;&#x435;: <sup>28</sup>&#x420; (&#x422;<sub>&#xBD;</sub> = 6,27 &#x441;&#x435;&#x43A;); <sup>29</sup>&#x420; (&#x422;<sub>&#xBD;</sub> = 4,45 &#x441;&#x435;&#x43A;); <sup>30</sup>&#x420; (&#x422;<sub>&#xBD;</sub> = 2,55 &#x43C;&#x438;&#x43D;); <sup>32</sup>&#x420; (&#x422;<sub>&#xBD;</sub> = 14,22 &#x441;&#x443;&#x442;); <sup>33</sup>&#x420; (&#x422;<sub>&#xBD;</sub> = 25 &#x441;&#x443;&#x442;); <sup>34</sup>&#x420; (&#x422;<sub>&#xBD;</sub> =12,5 &#x441;&#x435;&#x43A;). &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x435;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; <sup>32</sup>&#x420;, &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x44E;&#x449;&#x438;&#x439; &#x437;&#x43D;&#x430;&#x447;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x438;&#x435;&#x439; &#x3B2;-&#x438;&#x437;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x438; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x435;&#x43C;&#x44B;&#x439; &#x432; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x438; &#x431;&#x438;&#x43E;&#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;&#x445; &#x432; &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435; &#x43C;&#x435;&#x447;&#x435;&#x43D;&#x43E;&#x433;&#x43E; &#x430;&#x442;&#x43E;&#x43C;&#x430;.\n",
        "Атомная масса": "30.974",
        "Плотность, кг/м³": "1820",
        "Температура плавления, °С": "44,2 (бел.), 410 (кр.)",
        "Температура кипения, °С": "280 (бел.)",
        "Теплоемкость, кДж/(кг·°С)": "0.741",
        "Электроотрицательность": "2.1",
        "Ковалентный радиус, Å": "1.06",
        "1-й ионизац. потенциал, эв": "10.49"
    },
    {
        "Химический символ": "S",
        "label": "Сера Sulfur",
        "color": "0xFFDF39",
        "shadow": "0xE9CE29",
        "Электронная формула": "(Ne)3s23p4",
        "description": "<b>&#x421;&#x435;&#x440;&#x430;</b> (&#x43B;&#x430;&#x442;. Sulfur) S, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 16, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 32,06. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x430;&#x44F; &#x421;&#x435;&#x440;&#x430; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x447;&#x435;&#x442;&#x44B;&#x440;&#x435;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>32</sup>S (95,02%), <sup>33</sup>S (0,75%), <sup>34</sup>S (4,21%), <sup>36</sup>S (0,02%). &#x41F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; <sup>31</sup>S (T<sub>&#xBD;</sub> = 2,4 &#x441;&#x435;&#x43A;), <sup>35</sup>S (T<sub>&#xBD;</sub> = 87,1 &#x441;&#x443;&#x442;), <sup>37</sup>S (&#x422;<sub>&#xBD;</sub>= 5,04 &#x43C;&#x438;&#x43D;) &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;.\n",
        "Атомная масса": "32.065",
        "Плотность, кг/м³": "2070",
        "Температура плавления, °С": "113 (ромб.), 119 (монокл.)",
        "Температура кипения, °С": "444",
        "Теплоемкость, кДж/(кг·°С)": "0.733",
        "Электроотрицательность": "2.5",
        "Ковалентный радиус, Å": "1.02",
        "1-й ионизац. потенциал, эв": "10.36"
    },
    {
        "Химический символ": "Cl",
        "label": "Хлор Chlorine",
        "color": "0x55B940",
        "shadow": "0x1F7B00",
        "Электронная формула": "(Ne)3s23p5",
        "description": "<b>&#x425;&#x43B;&#x43E;&#x440;</b> (&#x43B;&#x430;&#x442;. Chlorum), Cl, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 17, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 35,453; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x43E;&#x432;. &#x41F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; (0&#xB0;&#x421;, 0,1 &#x41C;&#x43D;/&#x43C;<sup>2</sup>, &#x438;&#x43B;&#x438; 1 &#x43A;&#x433;&#x441;/&#x441;&#x43C;<sup>2</sup>) &#x436;&#x435;&#x43B;&#x442;&#x43E;-&#x437;&#x435;&#x43B;&#x435;&#x43D;&#x44B;&#x439; &#x433;&#x430;&#x437; &#x441; &#x440;&#x435;&#x437;&#x43A;&#x438;&#x43C; &#x440;&#x430;&#x437;&#x434;&#x440;&#x430;&#x436;&#x430;&#x44E;&#x449;&#x438;&#x43C; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x43E;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x425;&#x43B;&#x43E;&#x440; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>35</sup>&#x421;l (75,77%) &#x438; <sup>37</sup>Cl (24,23%). &#x418;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 31-47, &#x432; &#x447;&#x430;&#x441;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438;: 32, 33, 34, 36, 38, 39, 40 &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x430;&#x43C;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; (T<sup>&#xBD;) &#x441;&#x43E;&#x43E;&#x442;&#x432;&#x435;&#x442;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; 0,31; 2,5; 1,56 &#x441;&#x435;&#x43A;; 3,1&#xB7;10<sup>5</sup> &#x43B;&#x435;&#x442;; 37,3, 55,5 &#x438; 1,4 &#x43C;&#x438;&#x43D;. <sup>36</sup>Cl &#x438; <sup>38</sup>Cl &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x43A;&#x430;&#x43A; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43D;&#x44B;&#x435; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;&#x44B;.\n<p><a class=\"ogln\" name=\"m0\">&#x418;&#x441;&#x442;&#x43E;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x430;&#x44F; &#x441;&#x43F;&#x440;&#x430;&#x432;&#x43A;&#x430;.</a> &#x425;&#x43B;&#x43E;&#x440; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x432; 1774 &#x433;&#x43E;&#x434;&#x443; &#x41A;. &#x428;&#x435;&#x435;&#x43B;&#x435; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x435;&#x43C; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B; &#x441; &#x43F;&#x438;&#x440;&#x43E;&#x43B;&#x44E;&#x437;&#x438;&#x442;&#x43E;&#x43C; Mn&#x41E;<sub>2</sub>. &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x432; 1810 &#x433;&#x43E;&#x434;&#x443; &#x413;. &#x414;&#x44D;&#x432;&#x438; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x43B;, &#x447;&#x442;&#x43E; &#x445;&#x43B;&#x43E;&#x440; - &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43B; &#x435;&#x433;&#x43E; chlorine (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. chloros - &#x436;&#x435;&#x43B;&#x442;&#x43E;-&#x437;&#x435;&#x43B;&#x435;&#x43D;&#x44B;&#x439;). &#x412; 1813 &#x433;&#x43E;&#x434;&#x443; &#x416;. &#x41B;. &#x413;&#x435;&#x439;-&#x41B;&#x44E;&#x441;&#x441;&#x430;&#x43A; &#x43F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x436;&#x438;&#x43B; &#x434;&#x43B;&#x44F; &#x44D;&#x442;&#x43E;&#x433;&#x43E; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;.\n</p><p><a class=\"ogln\" name=\"m1\">&#x420;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435;.</a> &#x425;&#x43B;&#x43E;&#x440; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x432; &#x432;&#x438;&#x434;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439;. &#x421;&#x440;&#x435;&#x434;&#x43D;&#x435;&#x435; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; (&#x43A;&#x43B;&#x430;&#x440;&#x43A;) 1,7&#xB7;10<sup>-2</sup>% &#x43F;&#x43E; &#x43C;&#x430;&#x441;&#x441;&#x435;, &#x432; &#x43A;&#x438;&#x441;&#x43B;&#x44B;&#x445; &#x438;&#x437;&#x432;&#x435;&#x440;&#x436;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x43F;&#x43E;&#x440;&#x43E;&#x434;&#x430;&#x445;- &#x433;&#x440;&#x430;&#x43D;&#x438;&#x442;&#x430;&#x445; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; 2,4&#xB7;10<sup>-2</sup>, &#x432; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x44B;&#x445; &#x438; &#x443;&#x43B;&#x44C;&#x442;&#x440;&#x430;&#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x44B;&#x445; 5&#xB7;10<sup>-3</sup>. &#x41E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x443;&#x44E; &#x440;&#x43E;&#x43B;&#x44C; &#x432; &#x438;&#x441;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; &#x438;&#x433;&#x440;&#x430;&#x435;&#x442; &#x432;&#x43E;&#x434;&#x43D;&#x430;&#x44F; &#x43C;&#x438;&#x433;&#x440;&#x430;&#x446;&#x438;&#x44F;. &#x412; &#x432;&#x438;&#x434;&#x435; &#x438;&#x43E;&#x43D;&#x430; Cl<sup>-</sup> &#x43E;&#x43D; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x438;&#x442;&#x441;&#x44F; &#x432; &#x41C;&#x438;&#x440;&#x43E;&#x432;&#x43E;&#x43C; &#x43E;&#x43A;&#x435;&#x430;&#x43D;&#x435; (1,93%), &#x43F;&#x43E;&#x434;&#x437;&#x435;&#x43C;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x441;&#x43E;&#x43B;&#x430;&#x445; &#x438; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x44B;&#x445; &#x43E;&#x437;&#x435;&#x440;&#x430;&#x445;. &#x427;&#x438;&#x441;&#x43B;&#x43E; &#x441;&#x43E;&#x431;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x43E;&#x432; (&#x43F;&#x440;&#x435;&#x438;&#x43C;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432;) 97, &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x439; &#x438;&#x437; &#x43D;&#x438;&#x445; &#x433;&#x430;&#x43B;&#x438;&#x442; NaCl (&#x41A;&#x430;&#x43C;&#x435;&#x43D;&#x43D;&#x430;&#x44F; &#x441;&#x43E;&#x43B;&#x44C;). &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43A;&#x440;&#x443;&#x43F;&#x43D;&#x44B;&#x435; &#x43C;&#x435;&#x441;&#x442;&#x43E;&#x440;&#x43E;&#x436;&#x434;&#x435;&#x43D;&#x438;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432; &#x43A;&#x430;&#x43B;&#x438;&#x44F; &#x438; &#x43C;&#x430;&#x433;&#x43D;&#x438;&#x44F; &#x438; &#x441;&#x43C;&#x435;&#x448;&#x430;&#x43D;&#x43D;&#x44B;&#x445; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432;: &#x441;&#x438;&#x43B;&#x44C;&#x432;&#x438;&#x43D; &#x41A;Cl, &#x441;&#x438;&#x43B;&#x44C;&#x432;&#x438;&#x43D;&#x438;&#x442; (Na,K)Cl, &#x43A;&#x430;&#x440;&#x43D;&#x430;&#x43B;&#x438;&#x442; KCl&#xB7;MgCl<sub>2</sub><sup>&#xB7;</sup>6H<sub>2</sub>O, &#x43A;&#x430;&#x438;&#x43D;&#x438;&#x442; KCl&#xB7;MgSO<sub>4</sub>&#xB7;3H<sub>2</sub>O, &#x431;&#x438;&#x448;&#x43E;&#x444;&#x438;&#x442; MgCl<sub>2</sub>&#xB7;6H<sub>2</sub>O. &#x412; &#x438;&#x441;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x417;&#x435;&#x43C;&#x43B;&#x438; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x43E;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x43C;&#x435;&#x43B;&#x43E; &#x43F;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x435;&#x433;&#x43E;&#x441;&#x44F; &#x432; &#x432;&#x443;&#x43B;&#x43A;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x433;&#x430;&#x437;&#x430;&#x445; &#x41D;Cl &#x432; &#x432;&#x435;&#x440;&#x445;&#x43D;&#x438;&#x435; &#x447;&#x430;&#x441;&#x442;&#x438; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x44B;.\n</p><p><a class=\"ogln\" name=\"m2\">&#x424;&#x438;&#x437;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430;.</a> &#x425;&#x43B;&#x43E;&#x440; &#x438;&#x43C;&#x435;&#x435;&#x442; t<sub>&#x43A;&#x438;&#x43F;</sub> -34,05&#xB0;&#x421;, t<sub>&#x43F;&#x43B;</sub> -101&#xB0;&#x421;. &#x41F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x433;&#x430;&#x437;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x43D;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; 3,214 &#x433;/&#x43B;; &#x43D;&#x430;&#x441;&#x44B;&#x449;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x430;&#x440;&#x430; &#x43F;&#x440;&#x438; 0&#xB0;&#x421; 12,21 &#x433;/&#x43B;; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x440;&#x438; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435; &#x43A;&#x438;&#x43F;&#x435;&#x43D;&#x438;&#x44F; 1,557 &#x433;/&#x441;&#x43C;<sup>3</sup>; &#x442;&#x432;&#x435;&#x440;&#x434;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x440;&#x438; - 102&#xB0;&#x421; 1,9 &#x433;/&#x441;&#x43C;<sup>3</sup>. &#x414;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x43D;&#x430;&#x441;&#x44B;&#x449;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x43F;&#x430;&#x440;&#x43E;&#x432; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x440;&#x438; 0&#xB0;&#x421; 0,369; &#x43F;&#x440;&#x438; 25&#xB0;&#x421; 0,772; &#x43F;&#x440;&#x438; 100&#xB0;&#x421; 3,814 &#x41C;&#x43D;/&#x43C;<sup>2</sup> &#x438;&#x43B;&#x438; &#x441;&#x43E;&#x43E;&#x442;&#x432;&#x435;&#x442;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; 3,69; 7,72; 38,14 &#x43A;&#x433;&#x441;/&#x441;&#x43C;<sup>2</sup>. &#x422;&#x435;&#x43F;&#x43B;&#x43E;&#x442;&#x430; &#x43F;&#x43B;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F; 90,3 &#x43A;&#x434;&#x436;/&#x43A;&#x433; (21,5 &#x43A;&#x430;&#x43B;/&#x433;); &#x442;&#x435;&#x43F;&#x43B;&#x43E;&#x442;&#x430; &#x438;&#x441;&#x43F;&#x430;&#x440;&#x435;&#x43D;&#x438;&#x44F; 288 &#x43A;&#x434;&#x436;/&#x43A;&#x433; (68,8 &#x43A;&#x430;&#x43B;/&#x433;); &#x442;&#x435;&#x43F;&#x43B;&#x43E;&#x435;&#x43C;&#x43A;&#x43E;&#x441;&#x442;&#x44C; &#x433;&#x430;&#x437;&#x430; &#x43F;&#x440;&#x438; &#x43F;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x43D;&#x43E;&#x43C; &#x434;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x438; 0,48 &#x43A;&#x434;&#x436;/(&#x43A;&#x433;&#xB7;&#x41A;) [0,11 &#x43A;&#x430;&#x43B;/(&#x433;&#xB7;&#xB0;&#x421;)]. &#x41A;&#x440;&#x438;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x43A;&#x43E;&#x43D;&#x441;&#x442;&#x430;&#x43D;&#x442;&#x44B; &#x425;&#x43B;&#x43E;&#x440;&#x430;: &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x430; 144&#xB0;&#x421;, &#x434;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; 7,72 &#x41C;&#x43D;/&#x43C;<sup>2</sup> (77,2 &#x43A;&#x433;&#x441;/&#x441;&#x43C;<sup>2</sup>), &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C; 573 &#x433;/&#x43B;, &#x443;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43E;&#x431;&#x44A;&#x435;&#x43C; 1,745&#xB7;10<sup>-3</sup> &#x43B;/&#x433;. &#x420;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x438;&#x43C;&#x43E;&#x441;&#x442;&#x44C; (&#x432; &#x433;/&#x43B;) &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x440;&#x438; &#x43F;&#x430;&#x440;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x434;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x438; 0,1 &#x41C;&#x43D;/&#x43C;<sup>2</sup>, &#x438;&#x43B;&#x438; 1 &#x43A;&#x433;&#x441;/&#x441;&#x43C;<sup>2</sup>, &#x432; &#x432;&#x43E;&#x434;&#x435; 14,8 (0&#xB0;&#x421;), 5,8 (30&#xB0;&#x421;), 2,8 (70&#xB0;&#x421;); &#x432; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x435; 300 &#x433;/&#x43B; NaCl 1,42 (30&#xB0;&#x421;), 0,64 (70&#xB0;&#x421;). &#x41D;&#x438;&#x436;&#x435; 9,6&#xB0;&#x421; &#x432; &#x432;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430;&#x445; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x433;&#x438;&#x434;&#x440;&#x430;&#x442;&#x44B; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x435;&#x440;&#x435;&#x43C;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x43E;&#x441;&#x442;&#x430;&#x432;&#x430; Cl<sub>2</sub>&#xB7;n&#x41D;<sub>2</sub>&#x41E; (&#x433;&#x434;&#x435; n = 6-8); &#x44D;&#x442;&#x43E; &#x436;&#x435;&#x43B;&#x442;&#x44B;&#x435; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x43A;&#x443;&#x431;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x43D;&#x433;&#x43E;&#x43D;&#x438;&#x438;, &#x440;&#x430;&#x437;&#x43B;&#x430;&#x433;&#x430;&#x44E;&#x449;&#x438;&#x435;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x43F;&#x43E;&#x432;&#x44B;&#x448;&#x435;&#x43D;&#x438;&#x438; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B; &#x43D;&#x430; &#x425;&#x43B;&#x43E;&#x440; &#x438; &#x432;&#x43E;&#x434;&#x443;. &#x425;&#x43B;&#x43E;&#x440; &#x445;&#x43E;&#x440;&#x43E;&#x448;&#x43E; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x432; TiCl<sub>4</sub>, SiCl<sub>4</sub>, SnCl<sub>4</sub> &#x438; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x438;&#x442;&#x435;&#x43B;&#x44F;&#x445; (&#x43E;&#x441;&#x43E;&#x431;&#x435;&#x43D;&#x43D;&#x43E; &#x432; &#x433;&#x435;&#x43A;&#x441;&#x430;&#x43D;&#x435; &#x421;<sub>6</sub>H<sub>14</sub> &#x438; &#x447;&#x435;&#x442;&#x44B;&#x440;&#x435;&#x445;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x441;&#x442;&#x43E;&#x43C; &#x443;&#x433;&#x43B;&#x435;&#x440;&#x43E;&#x434;&#x435; CCl<sub>4</sub>). &#x41C;&#x43E;&#x43B;&#x435;&#x43A;&#x443;&#x43B;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x434;&#x432;&#x443;&#x445;&#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430; (Cl<sub>2</sub>). &#x421;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x442;&#x435;&#x440;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x434;&#x438;&#x441;&#x441;&#x43E;&#x446;&#x438;&#x430;&#x446;&#x438;&#x438; Cl<sub>2</sub> + 243&#x43A;&#x434;&#x436; = 2Cl &#x43F;&#x440;&#x438; 1000 &#x41A; &#x440;&#x430;&#x432;&#x43D;&#x430; 2,07&#xB7;10<sup>-4</sup>%, &#x43F;&#x440;&#x438; 2500 &#x41A; 0,909%.\n</p><p><a class=\"ogln\" name=\"m3\">&#x425;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430;.</a> &#x412;&#x43D;&#x435;&#x448;&#x43D;&#x44F;&#x44F; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x430;&#x44F; &#x43A;&#x43E;&#x43D;&#x444;&#x438;&#x433;&#x443;&#x440;&#x430;&#x446;&#x438;&#x44F; &#x430;&#x442;&#x43E;&#x43C;&#x430; Cl 3s<sup>2</sup>&#x417;&#x440;<sup>5</sup>. &#x412; &#x441;&#x43E;&#x43E;&#x442;&#x432;&#x435;&#x442;&#x441;&#x442;&#x432;&#x438;&#x438; &#x441; &#x44D;&#x442;&#x438;&#x43C; &#x425;&#x43B;&#x43E;&#x440; &#x432; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;&#x445; &#x43F;&#x440;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x438; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; -1,+1, +3, +4, +5, +6 &#x438; +7. &#x41A;&#x43E;&#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x443;&#x441; &#x430;&#x442;&#x43E;&#x43C;&#x430; 0,99&#xC5;, &#x438;&#x43E;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x443;&#x441; Cl<sup>-</sup> 1.82&#xC5;, &#x441;&#x440;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E; &#x430;&#x442;&#x43E;&#x43C;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43A; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x443; 3,65 &#x44D;&#x432;, &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x438;&#x44F; &#x438;&#x43E;&#x43D;&#x438;&#x437;&#x430;&#x446;&#x438;&#x438; 12,97 &#x44D;&#x432;.\n</p><p>&#x425;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x425;&#x43B;&#x43E;&#x440; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x430;&#x43A;&#x442;&#x438;&#x432;&#x435;&#x43D;, &#x43D;&#x435;&#x43F;&#x43E;&#x441;&#x440;&#x435;&#x434;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x43E;&#x447;&#x442;&#x438; &#x441;&#x43E; &#x432;&#x441;&#x435;&#x43C;&#x438; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;&#x438; (&#x441; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x43C;&#x438; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x432; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x438;&#x438; &#x432;&#x43B;&#x430;&#x433;&#x438; &#x438;&#x43B;&#x438; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438;) &#x438; &#x441; &#x43D;&#x435;&#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;&#x438; (&#x43A;&#x440;&#x43E;&#x43C;&#x435; &#x443;&#x433;&#x43B;&#x435;&#x440;&#x43E;&#x434;&#x430;, &#x430;&#x437;&#x43E;&#x442;&#x430;, &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x430;, &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x445; &#x433;&#x430;&#x437;&#x43E;&#x432;), &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44F; &#x441;&#x43E;&#x43E;&#x442;&#x432;&#x435;&#x442;&#x441;&#x442;&#x432;&#x443;&#x44E;&#x449;&#x438;&#x435; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x44B;, &#x432;&#x441;&#x442;&#x443;&#x43F;&#x430;&#x435;&#x442; &#x432; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x44E; &#x441;&#x43E; &#x43C;&#x43D;&#x43E;&#x433;&#x438;&#x43C;&#x438; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;&#x43C;&#x438;, &#x437;&#x430;&#x43C;&#x435;&#x449;&#x430;&#x435;&#x442; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434; &#x432; &#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x433;&#x43B;&#x435;&#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x430;&#x445; &#x438; &#x43F;&#x440;&#x438;&#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43A; &#x43D;&#x435;&#x43D;&#x430;&#x441;&#x44B;&#x449;&#x435;&#x43D;&#x43D;&#x44B;&#x43C; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;&#x43C;. &#x425;&#x43B;&#x43E;&#x440; &#x432;&#x44B;&#x442;&#x435;&#x441;&#x43D;&#x44F;&#x435;&#x442; &#x431;&#x440;&#x43E;&#x43C; &#x438; &#x438;&#x43E;&#x434; &#x438;&#x437; &#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439; &#x441; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x438; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;&#x438;; &#x438;&#x437; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x441; &#x44D;&#x442;&#x438;&#x43C;&#x438; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x43C;&#x438; &#x43E;&#x43D; &#x432;&#x44B;&#x442;&#x435;&#x441;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x444;&#x442;&#x43E;&#x440;&#x43E;&#x43C;. &#x429;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x432; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x438;&#x438; &#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432; &#x432;&#x43B;&#x430;&#x433;&#x438; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x44E;&#x442; &#x441; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x441; &#x432;&#x43E;&#x441;&#x43F;&#x43B;&#x430;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x435;&#x43C;, &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x43D;&#x441;&#x442;&#x432;&#x43E; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432; &#x440;&#x435;&#x430;&#x433;&#x438;&#x440;&#x443;&#x435;&#x442; &#x441; &#x441;&#x443;&#x445;&#x438;&#x43C; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438;. &#x421;&#x442;&#x430;&#x43B;&#x44C;, &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x441;&#x442;&#x43E;&#x439;&#x43A;&#x438; &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435; &#x441;&#x443;&#x445;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; &#x43D;&#x435;&#x432;&#x44B;&#x441;&#x43E;&#x43A;&#x438;&#x445; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;, &#x43F;&#x43E;&#x44D;&#x442;&#x43E;&#x43C;&#x443; &#x438;&#x445; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442; &#x434;&#x43B;&#x44F; &#x438;&#x437;&#x433;&#x43E;&#x442;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x430;&#x43F;&#x43F;&#x430;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B; &#x438; &#x445;&#x440;&#x430;&#x43D;&#x438;&#x43B;&#x438;&#x449; &#x434;&#x43B;&#x44F; &#x441;&#x443;&#x445;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430;. &#x424;&#x43E;&#x441;&#x444;&#x43E;&#x440; &#x432;&#x43E;&#x441;&#x43F;&#x43B;&#x430;&#x43C;&#x435;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430;, &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44F; &#x420;Cl<sub>3</sub>, &#x430; &#x43F;&#x440;&#x438; &#x434;&#x430;&#x43B;&#x44C;&#x43D;&#x435;&#x439;&#x448;&#x435;&#x43C; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; - &#x420;&#x421;l<sub>5</sub>; &#x441;&#x435;&#x440;&#x430; &#x441; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x434;&#x430;&#x435;&#x442; S<sub>2</sub>Cl<sub>2</sub>, SCl<sub>2</sub> &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435; S<sub>n</sub>Cl<sub>m</sub>. &#x41C;&#x44B;&#x448;&#x44C;&#x44F;&#x43A;, &#x441;&#x443;&#x440;&#x44C;&#x43C;&#x430;, &#x432;&#x438;&#x441;&#x43C;&#x443;&#x442;, &#x441;&#x442;&#x440;&#x43E;&#x43D;&#x446;&#x438;&#x439;, &#x442;&#x435;&#x43B;&#x43B;&#x443;&#x440; &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x438;&#x447;&#x43D;&#x43E; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x44E;&#x442; &#x441; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C;. &#x421;&#x43C;&#x435;&#x441;&#x44C; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x441; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x433;&#x43E;&#x440;&#x438;&#x442; &#x431;&#x435;&#x441;&#x446;&#x432;&#x435;&#x442;&#x43D;&#x44B;&#x43C; &#x438;&#x43B;&#x438; &#x436;&#x435;&#x43B;&#x442;&#x43E;-&#x437;&#x435;&#x43B;&#x435;&#x43D;&#x44B;&#x43C; &#x43F;&#x43B;&#x430;&#x43C;&#x435;&#x43D;&#x435;&#x43C; &#x441; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x441;&#x442;&#x43E;&#x433;&#x43E; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x430; (&#x44D;&#x442;&#x43E; &#x446;&#x435;&#x43F;&#x43D;&#x430;&#x44F; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x44F;).\n</p><p>&#x41C;&#x430;&#x43A;&#x441;&#x438;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x430;&#x44F; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x430; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43D;&#x43E;-&#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x43B;&#x430;&#x43C;&#x435;&#x43D;&#x438; 2200&#xB0;&#x421;. &#x421;&#x43C;&#x435;&#x441;&#x438; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x441; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C;, &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x435; &#x43E;&#x442; 5,8 &#x434;&#x43E; 88,5% &#x41D;<sub>2</sub>, &#x432;&#x437;&#x440;&#x44B;&#x432;&#x43E;&#x43E;&#x43F;&#x430;&#x441;&#x43D;&#x44B;.\n</p><p>&#x421; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x425;&#x43B;&#x43E;&#x440; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442; &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x44B;: Cl<sub>2</sub>&#x41E;, &#x421;lO<sub>2</sub>, Cl<sub>2</sub>&#x41E;<sub>6</sub>, &#x421;l<sub>2</sub>&#x41E;<sub>7</sub>, Cl<sub>2</sub>&#x41E;<sub>8</sub>, &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x433;&#x438;&#x43F;&#x43E;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x442;&#x44B; (&#x441;&#x43E;&#x43B;&#x438; &#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x43E;&#x432;&#x430;&#x442;&#x438;&#x441;&#x442;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B;), &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x442;&#x44B;, &#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442;&#x44B; &#x438; &#x43F;&#x435;&#x440;&#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442;&#x44B;. &#x412;&#x441;&#x435; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x430; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x43E;&#x43E;&#x43F;&#x430;&#x441;&#x43D;&#x44B;&#x435; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x441; &#x43B;&#x435;&#x433;&#x43A;&#x43E; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x44F;&#x44E;&#x449;&#x438;&#x43C;&#x438;&#x441;&#x44F; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x430;&#x43C;&#x438;. &#x41E;&#x43A;&#x441;&#x438;&#x434;&#x44B; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43C;&#x430;&#x43B;&#x43E;&#x441;&#x442;&#x43E;&#x439;&#x43A;&#x438; &#x438; &#x43C;&#x43E;&#x433;&#x443;&#x442; &#x441;&#x430;&#x43C;&#x43E;&#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F;, &#x433;&#x438;&#x43F;&#x43E;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x442;&#x44B; &#x43F;&#x440;&#x438; &#x445;&#x440;&#x430;&#x43D;&#x435;&#x43D;&#x438;&#x438; &#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x43E; &#x440;&#x430;&#x437;&#x43B;&#x430;&#x433;&#x430;&#x44E;&#x442;&#x441;&#x44F;, &#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442;&#x44B; &#x438; &#x43F;&#x435;&#x440;&#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442;&#x44B; &#x43C;&#x43E;&#x433;&#x443;&#x442; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F; &#x43F;&#x43E;&#x434; &#x432;&#x43B;&#x438;&#x44F;&#x43D;&#x438;&#x435;&#x43C; &#x438;&#x43D;&#x438;&#x446;&#x438;&#x430;&#x442;&#x43E;&#x440;&#x43E;&#x432;.\n</p><p>&#x425;&#x43B;&#x43E;&#x440; &#x432; &#x432;&#x43E;&#x434;&#x435; &#x433;&#x438;&#x434;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F;, &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x43E;&#x432;&#x430;&#x442;&#x438;&#x441;&#x442;&#x443;&#x44E; &#x438; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x443;&#x44E; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B;: Cl<sub>2</sub> + &#x41D;<sub>2</sub>&#x41E; = &#x41D;Cl&#x41E; + &#x41D;Cl. &#x41F;&#x440;&#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x432;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x435;&#x439; &#x43D;&#x430; &#x445;&#x43E;&#x43B;&#x43E;&#x434;&#x443; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x433;&#x438;&#x43F;&#x43E;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x442;&#x44B; &#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x44B;: 2NaOH + Cl<sub>2</sub>= NaClO + NaCl + &#x41D;<sub>2</sub>&#x41E;, &#x430; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438; - &#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442;&#x44B;. &#x425;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; &#x441;&#x443;&#x445;&#x43E;&#x433;&#x43E; &#x433;&#x438;&#x434;&#x440;&#x43E;&#x43E;&#x43A;&#x441;&#x438;&#x434;&#x430; &#x43A;&#x430;&#x43B;&#x44C;&#x446;&#x438;&#x44F; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442; &#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x443;&#x44E; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x44C;.\n</p><p>&#x41F;&#x440;&#x438; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x438; &#x430;&#x43C;&#x43C;&#x438;&#x430;&#x43A;&#x430; &#x441; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x440;&#x435;&#x445;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x441;&#x442;&#x44B;&#x439; &#x430;&#x437;&#x43E;&#x442;. &#x41F;&#x440;&#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439; &#x425;&#x43B;&#x43E;&#x440; &#x43B;&#x438;&#x431;&#x43E; &#x437;&#x430;&#x43C;&#x435;&#x449;&#x430;&#x435;&#x442; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;, &#x43B;&#x438;&#x431;&#x43E; &#x43F;&#x440;&#x438;&#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x43E; &#x43A;&#x440;&#x430;&#x442;&#x43D;&#x44B;&#x43C; &#x441;&#x432;&#x44F;&#x437;&#x44F;&#x43C;, &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44F; &#x440;&#x430;&#x437;&#x43B;&#x438;&#x447;&#x43D;&#x44B;&#x435; &#x445;&#x43B;&#x43E;&#x440;&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x435; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;.\n</p><p>&#x425;&#x43B;&#x43E;&#x440; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442; &#x441; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;&#x43C;&#x438; &#x43C;&#x435;&#x436;&#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;. &#x424;&#x442;&#x43E;&#x440;&#x438;&#x434;&#x44B; ClF, ClF<sub>3</sub>, ClF<sub>3</sub> &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x43E;&#x43D;&#x43D;&#x43E;&#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x43D;&#x44B;; &#x43D;&#x430;&#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;, &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435; ClF<sub>3</sub> &#x441;&#x442;&#x435;&#x43A;&#x43B;&#x44F;&#x43D;&#x43D;&#x430;&#x44F; &#x432;&#x430;&#x442;&#x430; &#x441;&#x430;&#x43C;&#x43E;&#x432;&#x43E;&#x441;&#x43F;&#x43B;&#x430;&#x43C;&#x435;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x430; &#x441; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x438; &#x444;&#x442;&#x43E;&#x440;&#x43E;&#x43C; - &#x43E;&#x43A;&#x441;&#x438;&#x444;&#x442;&#x43E;&#x440;&#x438;&#x434;&#x44B; &#x425;&#x43B;&#x43E;&#x440;&#x430;: ClO<sub>3</sub>F, ClO<sub>2</sub>F<sub>3</sub>, ClOF, ClOF<sub>3</sub> &#x438; &#x43F;&#x435;&#x440;&#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442; &#x444;&#x442;&#x43E;&#x440;&#x430; FClO<sub>4</sub>.\n</p><p><a class=\"ogln\" name=\"m4\">&#x41F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430;.</a> &#x425;&#x43B;&#x43E;&#x440; &#x43D;&#x430;&#x447;&#x430;&#x43B;&#x438; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x438;&#x442;&#x44C; &#x432; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x432; 1785 &#x433;&#x43E;&#x434;&#x443; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x435;&#x43C; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B; &#x441; &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x43E;&#x43C; &#x43C;&#x430;&#x440;&#x433;&#x430;&#x43D;&#x446;&#x430; (II) &#x438;&#x43B;&#x438; &#x43F;&#x438;&#x440;&#x43E;&#x43B;&#x44E;&#x437;&#x438;&#x442;&#x43E;&#x43C;. &#x412; 1867 &#x433;&#x43E;&#x434;&#x443; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x413;. &#x414;&#x438;&#x43A;&#x43E;&#x43D; &#x440;&#x430;&#x437;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x43B; &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x41D;&#x421;l &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x432; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x438;&#x438; &#x43A;&#x430;&#x442;&#x430;&#x43B;&#x438;&#x437;&#x430;&#x442;&#x43E;&#x440;&#x430;. &#x421; &#x43A;&#x43E;&#x43D;&#x446;&#x430; 19 - &#x43D;&#x430;&#x447;&#x430;&#x43B;&#x430; 20 &#x432;&#x435;&#x43A;&#x430; &#x425;&#x43B;&#x43E;&#x440; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x43E;&#x43C; &#x432;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;. &#x41F;&#x43E; &#x44D;&#x442;&#x438;&#x43C; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430;&#x43C; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x438;&#x442;&#x441;&#x44F; 90-95% &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x43C;&#x438;&#x440;&#x435;. &#x41D;&#x435;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x435; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x43F;&#x43E;&#x43F;&#x443;&#x442;&#x43D;&#x43E; &#x43F;&#x440;&#x438; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x435; &#x43C;&#x430;&#x433;&#x43D;&#x438;&#x44F;, &#x43A;&#x430;&#x43B;&#x44C;&#x446;&#x438;&#x44F;, &#x43D;&#x430;&#x442;&#x440;&#x438;&#x44F; &#x438; &#x43B;&#x438;&#x442;&#x438;&#x44F; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x43E;&#x43C; &#x440;&#x430;&#x441;&#x43F;&#x43B;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432;. &#x41F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x44E;&#x442;&#x441;&#x44F; &#x434;&#x432;&#x430; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x430; &#x432;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432; NaCl: 1) &#x432; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x435;&#x440;&#x430;&#x445; &#x441; &#x442;&#x432;&#x435;&#x440;&#x434;&#x44B;&#x43C; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x438; &#x43F;&#x43E;&#x440;&#x438;&#x441;&#x442;&#x43E;&#x439; &#x444;&#x438;&#x43B;&#x44C;&#x442;&#x440;&#x443;&#x44E;&#x449;&#x435;&#x439; &#x434;&#x438;&#x430;&#x444;&#x440;&#x430;&#x433;&#x43C;&#x43E;&#x439;; 2) &#x432; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x435;&#x440;&#x430;&#x445; &#x441; &#x440;&#x442;&#x443;&#x442;&#x43D;&#x44B;&#x43C; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x43E;&#x43C;. &#x41F;&#x43E; &#x43E;&#x431;&#x43E;&#x438;&#x43C; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430;&#x43C; &#x43D;&#x430; &#x433;&#x440;&#x430;&#x444;&#x438;&#x442;&#x43E;&#x432;&#x43E;&#x43C; &#x438;&#x43B;&#x438; &#x43E;&#x43A;&#x438;&#x441;&#x43D;&#x43E;&#x43C; &#x442;&#x438;&#x442;&#x430;&#x43D;&#x43E;-&#x440;&#x443;&#x442;&#x435;&#x43D;&#x438;&#x435;&#x432;&#x43E;&#x43C; &#x430;&#x43D;&#x43E;&#x434;&#x435; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x433;&#x430;&#x437;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x43D;&#x44B;&#x439; &#x425;&#x43B;&#x43E;&#x440;. &#x41F;&#x43E; &#x43F;&#x435;&#x440;&#x432;&#x43E;&#x43C;&#x443; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x443; &#x43D;&#x430; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x435; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434; &#x438; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440; NaOH &#x438; NaCl, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x433;&#x43E; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x435;&#x439; &#x43F;&#x435;&#x440;&#x435;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x43E;&#x439; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x44F;&#x44E;&#x442; &#x442;&#x43E;&#x432;&#x430;&#x440;&#x43D;&#x443;&#x44E; &#x43A;&#x430;&#x443;&#x441;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x443;&#x44E; &#x441;&#x43E;&#x434;&#x443;. &#x41F;&#x43E; &#x432;&#x442;&#x43E;&#x440;&#x43E;&#x43C;&#x443; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x443; &#x43D;&#x430; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x435; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x430;&#x43C;&#x430;&#x43B;&#x44C;&#x433;&#x430;&#x43C;&#x430; &#x43D;&#x430;&#x442;&#x440;&#x438;&#x44F;, &#x43F;&#x440;&#x438; &#x435;&#x435; &#x440;&#x430;&#x437;&#x43B;&#x43E;&#x436;&#x435;&#x43D;&#x438;&#x438; &#x447;&#x438;&#x441;&#x442;&#x43E;&#x439; &#x432;&#x43E;&#x434;&#x43E;&#x439; &#x432; &#x43E;&#x442;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x430;&#x43F;&#x43F;&#x430;&#x440;&#x430;&#x442;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440; NaOH, &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434; &#x438; &#x447;&#x438;&#x441;&#x442;&#x430;&#x44F; &#x440;&#x442;&#x443;&#x442;&#x44C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x430;&#x44F; &#x432;&#x43D;&#x43E;&#x432;&#x44C; &#x438;&#x434;&#x435;&#x442; &#x432; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E;. &#x41E;&#x431;&#x430; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430; &#x434;&#x430;&#x44E;&#x442; &#x43D;&#x430; 1 &#x442; &#x425;&#x43B;&#x43E;&#x440;&#x430; 1,125 &#x442; NaOH.\n</p><p>&#x42D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437; &#x441; &#x434;&#x438;&#x430;&#x444;&#x440;&#x430;&#x433;&#x43C;&#x43E;&#x439; &#x442;&#x440;&#x435;&#x431;&#x443;&#x435;&#x442; &#x43C;&#x435;&#x43D;&#x44C;&#x448;&#x438;&#x445; &#x43A;&#x430;&#x43F;&#x438;&#x442;&#x430;&#x43B;&#x43E;&#x432;&#x43B;&#x43E;&#x436;&#x435;&#x43D;&#x438;&#x439; &#x434;&#x43B;&#x44F; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x437;&#x430;&#x446;&#x438;&#x438; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430;, &#x434;&#x430;&#x435;&#x442; &#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x435;&#x448;&#x435;&#x432;&#x44B;&#x439; NaOH. &#x41C;&#x435;&#x442;&#x43E;&#x434; &#x441; &#x440;&#x442;&#x443;&#x442;&#x43D;&#x44B;&#x43C; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x437;&#x432;&#x43E;&#x43B;&#x44F;&#x435;&#x442; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x442;&#x44C; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x447;&#x438;&#x441;&#x442;&#x44B;&#x439; NaOH, &#x43D;&#x43E; &#x43F;&#x43E;&#x442;&#x435;&#x440;&#x438; &#x440;&#x442;&#x443;&#x442;&#x438; &#x437;&#x430;&#x433;&#x440;&#x44F;&#x437;&#x43D;&#x44F;&#x44E;&#x442; &#x43E;&#x43A;&#x440;&#x443;&#x436;&#x430;&#x44E;&#x449;&#x443;&#x44E; &#x441;&#x440;&#x435;&#x434;&#x443;.\n</p><p><a class=\"ogln\" name=\"m5\">&#x41F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430;.</a> &#x41E;&#x434;&#x43D;&#x43E;&#x439; &#x438;&#x437; &#x432;&#x430;&#x436;&#x43D;&#x44B;&#x445; &#x43E;&#x442;&#x440;&#x430;&#x441;&#x43B;&#x435;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x430;&#x44F; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x44C;. &#x41E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x44B;&#x435; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43F;&#x435;&#x440;&#x435;&#x440;&#x430;&#x431;&#x430;&#x442;&#x44B;&#x432;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x441;&#x442;&#x435; &#x435;&#x433;&#x43E; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x430; &#x432; &#x445;&#x43B;&#x43E;&#x440;&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F;. &#x425;&#x440;&#x430;&#x43D;&#x44F;&#x442; &#x438; &#x43F;&#x435;&#x440;&#x435;&#x432;&#x43E;&#x437;&#x44F;&#x442; &#x425;&#x43B;&#x43E;&#x440; &#x432; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x43C; &#x432;&#x438;&#x434;&#x435; &#x432; &#x431;&#x430;&#x43B;&#x43B;&#x43E;&#x43D;&#x430;&#x445;, &#x431;&#x43E;&#x447;&#x43A;&#x430;&#x445;, &#x436;&#x435;&#x43B;&#x435;&#x437;&#x43D;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x436;&#x43D;&#x44B;&#x445; &#x446;&#x438;&#x441;&#x442;&#x435;&#x440;&#x43D;&#x430;&#x445; &#x438;&#x43B;&#x438; &#x432; &#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E; &#x43E;&#x431;&#x43E;&#x440;&#x443;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x44B;&#x445; &#x441;&#x443;&#x434;&#x430;&#x445;. &#x414;&#x43B;&#x44F; &#x438;&#x43D;&#x434;&#x443;&#x441;&#x442;&#x440;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x441;&#x442;&#x440;&#x430;&#x43D; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x43E; &#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x435;&#x435; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;&#x43D;&#x43E;&#x435; &#x43F;&#x43E;&#x442;&#x440;&#x435;&#x431;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;: &#x43D;&#x430; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E; &#x445;&#x43B;&#x43E;&#x440;&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x445; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439; - 60-75%; &#x43D;&#x435;&#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439;, &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x445; &#x425;&#x43B;&#x43E;&#x440;, -10-20%; &#x43D;&#x430; &#x43E;&#x442;&#x431;&#x435;&#x43B;&#x43A;&#x443; &#x446;&#x435;&#x43B;&#x43B;&#x44E;&#x43B;&#x43E;&#x437;&#x44B; &#x438; &#x442;&#x43A;&#x430;&#x43D;&#x435;&#x439;- 5-15%; &#x43D;&#x430; &#x441;&#x430;&#x43D;&#x438;&#x442;&#x430;&#x440;&#x43D;&#x44B;&#x435; &#x43D;&#x443;&#x436;&#x434;&#x44B; &#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x432;&#x43E;&#x434;&#x44B; - 2-6% &#x43E;&#x442; &#x43E;&#x431;&#x449;&#x435;&#x439; &#x432;&#x44B;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x438;.\n</p><p>&#x425;&#x43B;&#x43E;&#x440; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x434;&#x43B;&#x44F; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x440;&#x443;&#x434; &#x441; &#x446;&#x435;&#x43B;&#x44C;&#x44E; &#x438;&#x437;&#x432;&#x43B;&#x435;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x442;&#x438;&#x442;&#x430;&#x43D;&#x430;, &#x43D;&#x438;&#x43E;&#x431;&#x438;&#x44F;, &#x446;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x44F; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445;\n</p><p><a class=\"ogln\" name=\"m6\">&#x425;&#x43B;&#x43E;&#x440; &#x432; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x437;&#x43C;&#x435;.</a> &#x425;&#x43B;&#x43E;&#x440; - &#x43E;&#x434;&#x438;&#x43D; &#x438;&#x437; &#x431;&#x438;&#x43E;&#x433;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x432;, &#x43F;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x43D;&#x44B;&#x439; &#x43A;&#x43E;&#x43C;&#x43F;&#x43E;&#x43D;&#x435;&#x43D;&#x442; &#x442;&#x43A;&#x430;&#x43D;&#x435;&#x439; &#x440;&#x430;&#x441;&#x442;&#x435;&#x43D;&#x438;&#x439; &#x438; &#x436;&#x438;&#x432;&#x43E;&#x442;&#x43D;&#x44B;&#x445;. &#x421;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x440;&#x430;&#x441;&#x442;&#x435;&#x43D;&#x438;&#x44F;&#x445; (&#x43C;&#x43D;&#x43E;&#x433;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x432; &#x433;&#x430;&#x43B;&#x43E;&#x444;&#x438;&#x442;&#x430;&#x445;) - &#x43E;&#x442; &#x442;&#x44B;&#x441;&#x44F;&#x447;&#x43D;&#x44B;&#x445; &#x434;&#x43E;&#x43B;&#x435;&#x439; &#x43F;&#x440;&#x43E;&#x446;&#x435;&#x43D;&#x442;&#x430; &#x434;&#x43E; &#x446;&#x435;&#x43B;&#x44B;&#x445; &#x43F;&#x440;&#x43E;&#x446;&#x435;&#x43D;&#x442;&#x43E;&#x432;, &#x443; &#x436;&#x438;&#x432;&#x43E;&#x442;&#x43D;&#x44B;&#x445; - &#x434;&#x435;&#x441;&#x44F;&#x442;&#x44B;&#x435; &#x438; &#x441;&#x43E;&#x442;&#x44B;&#x435; &#x434;&#x43E;&#x43B;&#x438; &#x43F;&#x440;&#x43E;&#x446;&#x435;&#x43D;&#x442;&#x430;. &#x421;&#x443;&#x442;&#x43E;&#x447;&#x43D;&#x430;&#x44F; &#x43F;&#x43E;&#x442;&#x440;&#x435;&#x431;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x432;&#x437;&#x440;&#x43E;&#x441;&#x43B;&#x43E;&#x433;&#x43E; &#x447;&#x435;&#x43B;&#x43E;&#x432;&#x435;&#x43A;&#x430; &#x432; &#x425;&#x43B;&#x43E;&#x440;&#x435; (2-4 &#x433;) &#x43F;&#x43E;&#x43A;&#x440;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x437;&#x430; &#x441;&#x447;&#x435;&#x442; &#x43F;&#x438;&#x449;&#x435;&#x432;&#x44B;&#x445; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x43E;&#x432;. &#x421; &#x43F;&#x438;&#x449;&#x435;&#x439; &#x425;&#x43B;&#x43E;&#x440; &#x43F;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x430;&#x435;&#x442; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x43E; &#x432; &#x438;&#x437;&#x431;&#x44B;&#x442;&#x43A;&#x435; &#x432; &#x432;&#x438;&#x434;&#x435; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x430; &#x43D;&#x430;&#x442;&#x440;&#x438;&#x44F; &#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x430; &#x43A;&#x430;&#x43B;&#x438;&#x44F;. &#x41E;&#x441;&#x43E;&#x431;&#x435;&#x43D;&#x43D;&#x43E; &#x431;&#x43E;&#x433;&#x430;&#x442;&#x44B; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x445;&#x43B;&#x435;&#x431;, &#x43C;&#x44F;&#x441;&#x43D;&#x44B;&#x435; &#x438; &#x43C;&#x43E;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x435; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x44B;. &#x412; &#x43E;&#x440;&#x433;&#x430;&#x43D;&#x438;&#x437;&#x43C;&#x435; &#x436;&#x438;&#x432;&#x43E;&#x442;&#x43D;&#x44B;&#x445; &#x425;&#x43B;&#x43E;&#x440; - &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x43E;&#x435; &#x43E;&#x441;&#x43C;&#x43E;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x435; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E; &#x43F;&#x43B;&#x430;&#x437;&#x43C;&#x44B; &#x43A;&#x440;&#x43E;&#x432;&#x438;, &#x43B;&#x438;&#x43C;&#x444;&#x44B;, &#x441;&#x43F;&#x438;&#x43D;&#x43D;&#x43E;&#x43C;&#x43E;&#x437;&#x433;&#x43E;&#x432;&#x43E;&#x439; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x441;&#x442;&#x438; &#x438; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x442;&#x43A;&#x430;&#x43D;&#x435;&#x439;. &#x418;&#x433;&#x440;&#x430;&#x435;&#x442; &#x440;&#x43E;&#x43B;&#x44C; &#x432; &#x432;&#x43E;&#x434;&#x43D;&#x43E;-&#x441;&#x43E;&#x43B;&#x435;&#x432;&#x43E;&#x43C; &#x43E;&#x431;&#x43C;&#x435;&#x43D;&#x435;, &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x441;&#x442;&#x432;&#x443;&#x44F; &#x443;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x44E; &#x442;&#x43A;&#x430;&#x43D;&#x44F;&#x43C;&#x438; &#x432;&#x43E;&#x434;&#x44B;. &#x420;&#x435;&#x433;&#x443;&#x43B;&#x44F;&#x446;&#x438;&#x44F; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;-&#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x43E;&#x433;&#x43E; &#x440;&#x430;&#x432;&#x43D;&#x43E;&#x432;&#x435;&#x441;&#x438;&#x44F; &#x432; &#x442;&#x43A;&#x430;&#x43D;&#x44F;&#x445; &#x43E;&#x441;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430;&#x440;&#x44F;&#x434;&#x443; &#x441; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x43F;&#x440;&#x43E;&#x446;&#x435;&#x441;&#x441;&#x430;&#x43C;&#x438; &#x43F;&#x443;&#x442;&#x435;&#x43C; &#x438;&#x437;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x432; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x438; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43C;&#x435;&#x436;&#x434;&#x443; &#x43A;&#x440;&#x43E;&#x432;&#x44C;&#x44E; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x442;&#x43A;&#x430;&#x43D;&#x44F;&#x43C;&#x438;. &#x425;&#x43B;&#x43E;&#x440; &#x443;&#x447;&#x430;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x432; &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x435;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x43E;&#x431;&#x43C;&#x435;&#x43D;&#x435; &#x443; &#x440;&#x430;&#x441;&#x442;&#x435;&#x43D;&#x438;&#x439;, &#x430;&#x43A;&#x442;&#x438;&#x432;&#x438;&#x440;&#x443;&#x44F; &#x43A;&#x430;&#x43A; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x444;&#x43E;&#x441;&#x444;&#x43E;&#x440;&#x438;&#x43B;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;, &#x442;&#x430;&#x43A; &#x438; &#x444;&#x43E;&#x442;&#x43E;&#x444;&#x43E;&#x441;&#x444;&#x43E;&#x440;&#x438;&#x43B;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;. &#x425;&#x43B;&#x43E;&#x440; &#x43F;&#x43E;&#x43B;&#x43E;&#x436;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E; &#x432;&#x43B;&#x438;&#x44F;&#x435;&#x442; &#x43D;&#x430; &#x43F;&#x43E;&#x433;&#x43B;&#x43E;&#x449;&#x435;&#x43D;&#x438;&#x435; &#x43A;&#x43E;&#x440;&#x43D;&#x44F;&#x43C;&#x438; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x430;. &#x425;&#x43B;&#x43E;&#x440; &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C; &#x434;&#x43B;&#x44F; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x440;&#x43E;&#x434;&#x430; &#x432; &#x43F;&#x440;&#x43E;&#x446;&#x435;&#x441;&#x441;&#x435; &#x444;&#x43E;&#x442;&#x43E;&#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x430; &#x438;&#x437;&#x43E;&#x43B;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x445;&#x43B;&#x43E;&#x440;&#x43E;&#x43F;&#x43B;&#x430;&#x441;&#x442;&#x430;&#x43C;&#x438;. &#x412; &#x441;&#x43E;&#x441;&#x442;&#x430;&#x432; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x43D;&#x441;&#x442;&#x432;&#x430; &#x43F;&#x438;&#x442;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x441;&#x440;&#x435;&#x434; &#x434;&#x43B;&#x44F; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43A;&#x443;&#x43B;&#x44C;&#x442;&#x438;&#x432;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x440;&#x430;&#x441;&#x442;&#x435;&#x43D;&#x438;&#x439; &#x425;&#x43B;&#x43E;&#x440; &#x43D;&#x435; &#x432;&#x445;&#x43E;&#x434;&#x438;&#x442;. &#x412;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x43E;, &#x434;&#x43B;&#x44F; &#x440;&#x430;&#x437;&#x432;&#x438;&#x442;&#x438;&#x44F; &#x440;&#x430;&#x441;&#x442;&#x435;&#x43D;&#x438;&#x439; &#x434;&#x43E;&#x441;&#x442;&#x430;&#x442;&#x43E;&#x447;&#x43D;&#x44B; &#x432;&#x435;&#x441;&#x44C;&#x43C;&#x430; &#x43C;&#x430;&#x43B;&#x44B;&#x435; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x446;&#x438;&#x438; &#x425;&#x43B;&#x43E;&#x440;&#x430;.\n</p><p>&#x41E;&#x442;&#x440;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x425;&#x43B;&#x43E;&#x440;&#x43E;&#x43C; &#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x44B; &#x432; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439;, &#x446;&#x435;&#x43B;&#x43B;&#x44E;&#x43B;&#x43E;&#x437;&#x43D;&#x43E;-&#x431;&#x443;&#x43C;&#x430;&#x436;&#x43D;&#x43E;&#x439;, &#x442;&#x435;&#x43A;&#x441;&#x442;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x439;, &#x444;&#x430;&#x440;&#x43C;&#x430;&#x446;&#x435;&#x432;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445;. &#x425;&#x43B;&#x43E;&#x440; &#x440;&#x430;&#x437;&#x434;&#x440;&#x430;&#x436;&#x430;&#x435;&#x442; &#x441;&#x43B;&#x438;&#x437;&#x438;&#x441;&#x442;&#x44B;&#x435; &#x43E;&#x431;&#x43E;&#x43B;&#x43E;&#x447;&#x43A;&#x438; &#x433;&#x43B;&#x430;&#x437; &#x438; &#x434;&#x44B;&#x445;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x43F;&#x443;&#x442;&#x435;&#x439;. &#x41A; &#x43F;&#x435;&#x440;&#x432;&#x438;&#x447;&#x43D;&#x44B;&#x43C; &#x432;&#x43E;&#x441;&#x43F;&#x430;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C; &#x438;&#x437;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x44F;&#x43C; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x43E; &#x43F;&#x440;&#x438;&#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x432;&#x442;&#x43E;&#x440;&#x438;&#x447;&#x43D;&#x430;&#x44F; &#x438;&#x43D;&#x444;&#x435;&#x43A;&#x446;&#x438;&#x44F;. &#x41E;&#x441;&#x442;&#x440;&#x43E;&#x435; &#x43E;&#x442;&#x440;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x440;&#x430;&#x437;&#x432;&#x438;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x43E;&#x447;&#x442;&#x438; &#x43D;&#x435;&#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;. &#x41F;&#x440;&#x438; &#x432;&#x434;&#x44B;&#x445;&#x430;&#x43D;&#x438;&#x438; &#x441;&#x440;&#x435;&#x434;&#x43D;&#x438;&#x445; &#x438; &#x43D;&#x438;&#x437;&#x43A;&#x438;&#x445; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x446;&#x438;&#x439; &#x425;&#x43B;&#x43E;&#x440; &#x43E;&#x442;&#x43C;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x441;&#x442;&#x435;&#x441;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x438; &#x431;&#x43E;&#x43B;&#x44C; &#x432; &#x433;&#x440;&#x443;&#x434;&#x438;, &#x441;&#x443;&#x445;&#x43E;&#x439; &#x43A;&#x430;&#x448;&#x435;&#x43B;&#x44C;, &#x443;&#x447;&#x430;&#x449;&#x435;&#x43D;&#x43D;&#x43E;&#x435; &#x434;&#x44B;&#x445;&#x430;&#x43D;&#x438;&#x435;, &#x440;&#x435;&#x437;&#x44C; &#x432; &#x433;&#x43B;&#x430;&#x437;&#x430;&#x445;, &#x441;&#x43B;&#x435;&#x437;&#x43E;&#x442;&#x435;&#x447;&#x435;&#x43D;&#x438;&#x435;, &#x43F;&#x43E;&#x432;&#x44B;&#x448;&#x435;&#x43D;&#x438;&#x435; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x44F; &#x43B;&#x435;&#x439;&#x43A;&#x43E;&#x446;&#x438;&#x442;&#x43E;&#x432; &#x432; &#x43A;&#x440;&#x43E;&#x432;&#x438;, &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B; &#x442;&#x435;&#x43B;&#x430; &#x438; &#x442;. &#x43F;. &#x412;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x44B; &#x431;&#x440;&#x43E;&#x43D;&#x445;&#x43E;&#x43F;&#x43D;&#x435;&#x432;&#x43C;&#x43E;&#x43D;&#x438;&#x44F;, &#x442;&#x43E;&#x43A;&#x441;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x43E;&#x442;&#x435;&#x43A; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x445;, &#x434;&#x435;&#x43F;&#x440;&#x435;&#x441;&#x441;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x44F;, &#x441;&#x443;&#x434;&#x43E;&#x440;&#x43E;&#x433;&#x438;. &#x412; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x445; &#x441;&#x43B;&#x443;&#x447;&#x430;&#x44F;&#x445; &#x432;&#x44B;&#x437;&#x434;&#x43E;&#x440;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x43D;&#x430;&#x441;&#x442;&#x443;&#x43F;&#x430;&#x435;&#x442; &#x447;&#x435;&#x440;&#x435;&#x437; 3-7 &#x441;&#x443;&#x442;&#x43E;&#x43A;. &#x41A;&#x430;&#x43A; &#x43E;&#x442;&#x434;&#x430;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x441;&#x442;&#x432;&#x438;&#x44F; &#x43D;&#x430;&#x431;&#x43B;&#x44E;&#x434;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x43A;&#x430;&#x442;&#x430;&#x440;&#x44B; &#x432;&#x435;&#x440;&#x445;&#x43D;&#x438;&#x445; &#x434;&#x44B;&#x445;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x43F;&#x443;&#x442;&#x435;&#x439;, &#x440;&#x435;&#x446;&#x438;&#x434;&#x438;&#x432;&#x438;&#x440;&#x443;&#x44E;&#x449;&#x438;&#x439; &#x431;&#x440;&#x43E;&#x43D;&#x445;&#x438;&#x442;, &#x43F;&#x43D;&#x435;&#x432;&#x43C;&#x43E;&#x441;&#x43A;&#x43B;&#x435;&#x440;&#x43E;&#x437; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445;; &#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x430; &#x430;&#x43A;&#x442;&#x438;&#x432;&#x438;&#x437;&#x430;&#x446;&#x438;&#x44F; &#x442;&#x443;&#x431;&#x435;&#x440;&#x43A;&#x443;&#x43B;&#x435;&#x437;&#x430; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x445;. &#x41F;&#x440;&#x438; &#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x432;&#x434;&#x44B;&#x445;&#x430;&#x43D;&#x438;&#x438; &#x43D;&#x435;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x445; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x446;&#x438;&#x439; &#x425;&#x43B;&#x43E;&#x440;&#x430; &#x43D;&#x430;&#x431;&#x43B;&#x44E;&#x434;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x430;&#x43D;&#x430;&#x43B;&#x43E;&#x433;&#x438;&#x447;&#x43D;&#x44B;&#x435;, &#x43D;&#x43E; &#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x43E; &#x440;&#x430;&#x437;&#x432;&#x438;&#x432;&#x430;&#x44E;&#x449;&#x438;&#x435;&#x441;&#x44F; &#x444;&#x43E;&#x440;&#x43C;&#x44B; &#x437;&#x430;&#x431;&#x43E;&#x43B;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x44F;. &#x41F;&#x440;&#x43E;&#x444;&#x438;&#x43B;&#x430;&#x43A;&#x442;&#x438;&#x43A;&#x430; &#x43E;&#x442;&#x440;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x439;: &#x433;&#x435;&#x440;&#x43C;&#x435;&#x442;&#x438;&#x437;&#x430;&#x446;&#x438;&#x44F; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;, &#x43E;&#x431;&#x43E;&#x440;&#x443;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F;, &#x44D;&#x444;&#x444;&#x435;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x430;&#x44F; &#x432;&#x435;&#x43D;&#x442;&#x438;&#x43B;&#x44F;&#x446;&#x438;&#x44F;, &#x43F;&#x440;&#x438; &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C;&#x43E;&#x441;&#x442;&#x438; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x43F;&#x440;&#x43E;&#x442;&#x438;&#x432;&#x43E;&#x433;&#x430;&#x437;&#x430;. &#x41F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E; &#x425;&#x43B;&#x43E;&#x440;&#x430;, &#x445;&#x43B;&#x43E;&#x440;&#x43D;&#x43E;&#x439; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x438; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x445;&#x43B;&#x43E;&#x440;&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x445; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x430;&#x43C; &#x441; &#x432;&#x440;&#x435;&#x434;&#x43D;&#x44B;&#x43C;&#x438; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x43C;&#x438; &#x442;&#x440;&#x443;&#x434;&#x430;.\n</p></sup>",
        "Атомная масса": "35.453",
        "Плотность, кг/м³": "0.317",
        "Температура плавления, °С": "-101",
        "Температура кипения, °С": "-34",
        "Теплоемкость, кДж/(кг·°С)": "0.486",
        "Электроотрицательность": "3.0",
        "Ковалентный радиус, Å": "0.99",
        "1-й ионизац. потенциал, эв": "12.97"
    },
    {
        "Химический символ": "Ar",
        "label": "Аргон Argon",
        "Электронная формула": "(Ne)3s23p6",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "description": "<b>&#x410;&#x440;&#x433;&#x43E;&#x43D;</b> (&#x43B;&#x430;&#x442;. Argon), Ar, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 18, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 39,948. &#x41F;&#x440;&#x438; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; &#x410;&#x440;&#x433;&#x43E;&#x43D; - &#x433;&#x430;&#x437; &#x431;&#x435;&#x437; &#x446;&#x432;&#x435;&#x442;&#x430;, &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430; &#x438; &#x432;&#x43A;&#x443;&#x441;&#x430;. &#x41A; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44E; &#x410;&#x440;&#x433;&#x43E;&#x43D;&#x430; &#x43F;&#x440;&#x438;&#x432;&#x435;&#x43B;&#x43E; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x43D;&#x43E;&#x435; &#x432; 1892 &#x433;&#x43E;&#x434;&#x443; &#x414;&#x436;. &#x420;&#x44D;&#x43B;&#x435;&#x435;&#x43C; &#x43F;&#x440;&#x435;&#x432;&#x44B;&#x448;&#x435;&#x43D;&#x438;&#x435; &#x43D;&#x430; 0,0016 &#x433;/&#x43B; (&#x43F;&#x440;&#x438; 0&#xB0;&#x421; &#x438; 101325 &#x43D;/&#x43C;<sup>2</sup>) &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x430;&#x437;&#x43E;&#x442;&#x430; &#x438;&#x437; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x43F;&#x43E; &#x441;&#x440;&#x430;&#x432;&#x43D;&#x435;&#x43D;&#x438;&#x44E; &#x441; &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; &#x430;&#x437;&#x43E;&#x442;&#x430;, &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437; &#x435;&#x433;&#x43E; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439;. &#x412; 1894 &#x420;&#x44D;&#x43B;&#x435;&#x439; &#x438; &#x423;. &#x420;&#x430;&#x43C;&#x437;&#x430;&#x439; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x43B;&#x438; &#x438;&#x437; &#x430;&#x437;&#x43E;&#x442;&#x430; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x433;&#x430;&#x437;, &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x44E;&#x449;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; (&#x433;&#x440;&#x435;&#x447;. argos - &#x431;&#x435;&#x437;&#x434;&#x435;&#x44F;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;). &#x41F;&#x43E;&#x441;&#x43B;&#x435; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44F; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x445; &#x433;&#x430;&#x437;&#x43E;&#x432; &#x43E;&#x43D;&#x438; &#x431;&#x44B;&#x43B;&#x438; &#x43E;&#x431;&#x44A;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x44B; &#x432; &#x43E;&#x442;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x443;&#x44E; &#x43D;&#x443;&#x43B;&#x435;&#x432;&#x443;&#x44E; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x443; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B;; &#x442;&#x435;&#x43F;&#x435;&#x440;&#x44C; &#x43E;&#x431;&#x449;&#x435;&#x43F;&#x440;&#x438;&#x43D;&#x44F;&#x442;&#x43E; &#x440;&#x430;&#x441;&#x441;&#x43C;&#x430;&#x442;&#x440;&#x438;&#x432;&#x430;&#x442;&#x44C; &#x438;&#x445; &#x43A;&#x430;&#x43A; &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x443;&#x44E; &#x43F;&#x43E;&#x434;&#x433;&#x440;&#x443;&#x43F;&#x43F;&#x443; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B;.\n",
        "Атомная масса": "39.948",
        "Плотность, кг/м³": "1.784",
        "Температура плавления, °С": "-189.2",
        "Температура кипения, °С": "-185.8",
        "Теплоемкость, кДж/(кг·°С)": "0.523",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "0.98",
        "1-й ионизац. потенциал, эв": "15.76"
    },
    {
        "Химический символ": "K",
        "label": "Калий Potassium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "Электронная формула": "(Ar)4s1",
        "description": "<b>&#x41A;&#x430;&#x43B;&#x438;&#x439;</b> (Kalium), K , &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 19, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 39,098; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x44F;&#x43D;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439;, &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x439;, &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x438; &#x43B;&#x435;&#x433;&#x43A;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; - <sup>39</sup>K (93,08%), <sup>41</sup>K (6,91%) &#x438; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x43B;&#x430;&#x431;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x433;&#x43E; <sup>40</sup>K (0,01%) &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; 1,32&#xB7;10<sup>9</sup> &#x43B;&#x435;&#x442;.\n",
        "Атомная масса": "39.098",
        "Плотность, кг/м³": "860",
        "Температура плавления, °С": "63.6",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.741",
        "Электроотрицательность": "0.8",
        "Ковалентный радиус, Å": "2.03",
        "1-й ионизац. потенциал, эв": "4.34"
    },
    {
        "Химический символ": "Ca",
        "label": "Кальций Calcium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)4s2",
        "description": "<b>&#x41A;&#x430;&#x43B;&#x44C;&#x446;&#x438;&#x439;</b> (Calcium), Ca, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 20, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 40,08; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x44F;&#x43D;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x43C;&#x435;&#x441;&#x44C; &#x448;&#x435;&#x441;&#x442;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>40</sup>Ca, <sup>42</sup>Ca, <sup>43</sup>Ca, <sup>44</sup>Ca, <sup>46</sup>Ca &#x438; <sup>48</sup>Ca, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D; <sup>40</sup>Ca (96, 97%).\n",
        "Атомная масса": "40.078",
        "Плотность, кг/м³": "1550",
        "Температура плавления, °С": "838",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.624",
        "Электроотрицательность": "1.0",
        "Ковалентный радиус, Å": "1.74",
        "1-й ионизац. потенциал, эв": "6.11"
    },
    {
        "Химический символ": "Sc",
        "label": "Cкандий Scandium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d14s2",
        "description": "<b>&#x421;&#x43A;&#x430;&#x43D;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Scandium), Sc, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 21, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 44,9559; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x44B;&#x43C; &#x436;&#x435;&#x43B;&#x442;&#x44B;&#x43C; &#x43E;&#x442;&#x43B;&#x438;&#x432;&#x43E;&#x43C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x43F;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x43A;&#x43E;&#x43D;&#x442;&#x430;&#x43A;&#x442;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430; &#x441; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x43E;&#x43C;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x435;&#x43D; &#x43E;&#x434;&#x438;&#x43D; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>45</sup>Sc. &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x432;&#x430;&#x436;&#x43D;&#x435;&#x439;&#x448;&#x438;&#x439; <sup>46</sup>Sc &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; 84 &#x441;&#x443;&#x442;. &#x421;&#x43A;&#x430;&#x43D;&#x434;&#x438;&#x439; &#x431;&#x44B;&#x43B; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x43A;&#x430;&#x437;&#x430;&#x43D; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x44B;&#x43C; &#x432; 1870 &#x433;&#x43E;&#x434;&#x443; &#x438; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D; &#x432; 1879 &#x433;&#x43E;&#x434;&#x443; &#x41B;. &#x424;. &#x41D;&#x438;&#x43B;&#x44A;&#x441;&#x43E;&#x43D;&#x43E;&#x43C; &#x438;&#x437; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x43E;&#x432; &#x433;&#x430;&#x434;&#x43E;&#x43B;&#x438;&#x43D;&#x438;&#x442;&#x430; &#x438; &#x44D;&#x432;&#x43A;&#x441;&#x435;&#x43D;&#x438;&#x442;&#x430;, &#x43D;&#x430;&#x439;&#x434;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x432; &#x421;&#x43A;&#x430;&#x43D;&#x434;&#x438;&#x43D;&#x430;&#x432;&#x438;&#x438; (&#x43B;&#x430;&#x442;. Scandia), &#x43E;&#x442;&#x441;&#x44E;&#x434;&#x430; &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;.\n",
        "Атомная масса": "44.956",
        "Плотность, кг/м³": "3000",
        "Температура плавления, °С": "1539",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.544",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": "1.44",
        "1-й ионизац. потенциал, эв": "6.54"
    },
    {
        "Химический символ": "Ti",
        "label": "Титан Titanium",
        "color": "0x9E9E9E",
        "shadow": "0x666666",
        "Электронная формула": "(Ar)3d24s2",
        "description": "<b>&#x422;&#x438;&#x442;&#x430;&#x43D;</b> (&#x43B;&#x430;&#x442;. Titanium), Ti, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 22, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 47,90; &#x438;&#x43C;&#x435;&#x435;&#x442; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x446;&#x432;&#x435;&#x442;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x43B;&#x435;&#x433;&#x43A;&#x438;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x422;&#x438;&#x442;&#x430;&#x43D; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x43F;&#x44F;&#x442;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>46</sup>Ti (7,95%), <sup>47</sup>Ti (7,75%), <sup>48</sup>Ti (73,45%), <sup>49</sup>Ti (5,51%), <sup>50</sup>Ti (5,34%). &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; <sup>45</sup>Ti (T<sub>&#xBD;</sub> = 3,09 &#x447;), <sup>51</sup>Ti (&#x422;<sub>&#xBD;</sub> = 5,79 &#x43C;&#x438;&#x43D;) &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;.\n",
        "Атомная масса": "47.867",
        "Плотность, кг/м³": "4510",
        "Температура плавления, °С": "1668",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.527",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": "1.32",
        "1-й ионизац. потенциал, эв": "6.83"
    },
    {
        "Химический символ": "V",
        "label": "Ванадий Vanadium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d34s2",
        "description": "<b>&#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439;</b> (Vanadium), V, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 23, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 50,942; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x435;&#x440;&#x43E;-&#x441;&#x442;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>51</sup>V (99,75%) &#x438; <sup>50</sup>V (0,25%); &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x438;&#x439; &#x441;&#x43B;&#x430;&#x431;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x435;&#x43D; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 10<sup>14</sup> &#x43B;&#x435;&#x442;). &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439; &#x431;&#x44B;&#x43B; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1801 &#x433;&#x43E;&#x434;&#x443; &#x43C;&#x435;&#x43A;&#x441;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x43E;&#x433;&#x43E;&#x43C; &#x410;. &#x41C;. &#x434;&#x435;&#x43B;&#x44C; &#x420;&#x438;&#x43E; &#x432; &#x43C;&#x435;&#x43A;&#x441;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x43E;&#x439; &#x431;&#x443;&#x440;&#x43E;&#x439; &#x441;&#x432;&#x438;&#x43D;&#x446;&#x43E;&#x432;&#x43E;&#x439; &#x440;&#x443;&#x434;&#x435; &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x43F;&#x43E; &#x43A;&#x440;&#x430;&#x441;&#x438;&#x432;&#x43E;&#x43C;&#x443; &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x43E;&#x43C;&#x443; &#x446;&#x432;&#x435;&#x442;&#x443; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x442;&#x44B;&#x445; &#x441;&#x43E;&#x43B;&#x435;&#x439; &#x44D;&#x440;&#x438;&#x442;&#x440;&#x43E;&#x43D;&#x438;&#x435;&#x43C; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. erythros - &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x44B;&#x439;). &#x412; 1830 &#x433;&#x43E;&#x434;&#x443; &#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x41D;. &#x413;. &#x421;&#x435;&#x444;&#x441;&#x442;&#x440;&#x435;&#x43C; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x438;&#x43B; &#x43D;&#x43E;&#x432;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x432; &#x436;&#x435;&#x43B;&#x435;&#x437;&#x43D;&#x43E;&#x439; &#x440;&#x443;&#x434;&#x435; &#x438;&#x437; &#x422;&#x430;&#x431;&#x435;&#x440;&#x433;&#x430; (&#x428;&#x432;&#x435;&#x446;&#x438;&#x44F;) &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43B; &#x435;&#x433;&#x43E; &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x434;&#x440;&#x435;&#x432;&#x43D;&#x435;&#x441;&#x43A;&#x430;&#x43D;&#x434;&#x438;&#x43D;&#x430;&#x432;&#x441;&#x43A;&#x43E;&#x439; &#x431;&#x43E;&#x433;&#x438;&#x43D;&#x438; &#x43A;&#x440;&#x430;&#x441;&#x43E;&#x442;&#x44B; &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x441;. &#x410;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x413;. &#x420;&#x43E;&#x441;&#x43A;&#x43E; &#x432; 1869 &#x433;&#x43E;&#x434;&#x443; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B; &#x43F;&#x43E;&#x440;&#x43E;&#x448;&#x43A;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439; &#x432;&#x43E;&#x441;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C; VCl<sub>2</sub> &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C;. &#x412; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43C;&#x430;&#x441;&#x448;&#x442;&#x430;&#x431;&#x435; &#x412;&#x430;&#x43D;&#x430;&#x434;&#x438;&#x439; &#x434;&#x43E;&#x431;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x441; &#x43D;&#x430;&#x447;&#x430;&#x43B;&#x430; 20 &#x432;&#x435;&#x43A;&#x430;.\n",
        "Атомная масса": "50.942",
        "Плотность, кг/м³": "6110",
        "Температура плавления, °С": "1900",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.502",
        "Электроотрицательность": "1.6",
        "Ковалентный радиус, Å": "1.22",
        "1-й ионизац. потенциал, эв": "6.71"
    },
    {
        "Химический символ": "Cr",
        "label": "Хром Chromium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d54s1",
        "description": "<b>&#x425;&#x440;&#x43E;&#x43C;</b> (&#x43B;&#x430;&#x442;. Cromium), Cr, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 24, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 51,996; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x433;&#x43E;&#x43B;&#x443;&#x431;&#x43E;&#x432;&#x430;&#x442;&#x43E;-&#x441;&#x442;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;.\n",
        "Атомная масса": "51.996",
        "Плотность, кг/м³": "7190",
        "Температура плавления, °С": "1856",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.46",
        "Электроотрицательность": "1.6",
        "Ковалентный радиус, Å": "1.18",
        "1-й ионизац. потенциал, эв": "6.76"
    },
    {
        "Химический символ": "Mn",
        "label": "Марганец Manganese",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d54s2",
        "description": "<b>&#x41C;&#x430;&#x440;&#x433;&#x430;&#x43D;&#x435;&#x446;</b> (&#x43B;&#x430;&#x442;. Manganum), Mn, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 25, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 54,9380; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x43E;&#x434;&#x43D;&#x438;&#x43C; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x43C; <sup>35</sup>&#x41C;n.\n",
        "Атомная масса": "54.938",
        "Плотность, кг/м³": "7430",
        "Температура плавления, °С": "1244",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.481",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": "1.17",
        "1-й ионизац. потенциал, эв": "7.43"
    },
    {
        "Химический символ": "Fe",
        "label": "Железо Iron",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d64s2",
        "description": "<b>&#x416;&#x435;&#x43B;&#x435;&#x437;&#x43E;</b> (&#x43B;&#x430;&#x442;. Ferrum), Fe, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 26, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 55,847; &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x447;&#x435;&#x442;&#x44B;&#x440;&#x435;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>54</sup>Fe (5,84%), <sup>56</sup>Fe (91,68%), <sup>57</sup>Fe (2,17%) &#x438; <sup>58</sup>Fe (0,31%).\n",
        "Атомная масса": "55.845",
        "Плотность, кг/м³": "7860",
        "Температура плавления, °С": "1536",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.46",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.17",
        "1-й ионизац. потенциал, эв": "7.87"
    },
    {
        "Химический символ": "Co",
        "label": "Кобальт Cobalt",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d74s2",
        "description": "<b>&#x41A;&#x43E;&#x431;&#x430;&#x43B;&#x44C;&#x442;</b> (&#x43B;&#x430;&#x442;. Cobaltum), Co, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x435;&#x440;&#x432;&#x43E;&#x439; &#x442;&#x440;&#x438;&#x430;&#x434;&#x44B; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 27, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 58,9332; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441; &#x440;&#x43E;&#x437;&#x43E;&#x432;&#x430;&#x442;&#x44B;&#x43C; &#x43E;&#x442;&#x43B;&#x438;&#x432;&#x43E;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x43E;&#x434;&#x43D;&#x438;&#x43C; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x43C; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x43C; <sup>59</sup>Co; &#x438;&#x437; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x432;&#x430;&#x436;&#x43D;&#x435;&#x439;&#x448;&#x438;&#x439; <sup>60</sup>&#x421;&#x43E;.\n",
        "Атомная масса": "58.933",
        "Плотность, кг/м³": "8900",
        "Температура плавления, °С": "1495",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.414",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.16",
        "1-й ионизац. потенциал, эв": "7.86"
    },
    {
        "Химический символ": "Ni",
        "label": "Никель Nickel",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d84s2",
        "description": "<b>&#x41D;&#x438;&#x43A;&#x435;&#x43B;&#x44C;</b> (&#x43B;&#x430;&#x442;. Niccolum), Ni, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x435;&#x440;&#x432;&#x43E;&#x439; &#x442;&#x440;&#x438;&#x430;&#x434;&#x44B; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 28, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 58,70; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43A;&#x43E;&#x432;&#x43A;&#x438;&#x439; &#x438; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x41D;&#x438;&#x43A;&#x435;&#x43B;&#x44C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x43F;&#x44F;&#x442;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>58</sup>Ni (67,76%), <sup>60</sup>Ni (26,16%), <sup>61</sup>Ni (1,25%), <sup>63</sup>Ni (3,66%), <sup>64</sup>Ni (1,16%).\n",
        "Атомная масса": "58.693",
        "Плотность, кг/м³": "8900",
        "Температура плавления, °С": "1453",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.44",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.15",
        "1-й ионизац. потенциал, эв": "7.64"
    },
    {
        "Химический символ": "Cu",
        "label": "Медь Copper",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d104s1",
        "description": "<b>&#x41C;&#x435;&#x434;&#x44C;</b> (&#x43B;&#x430;&#x442;. Cuprum), &#x421;u, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 29, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 63,546; &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439;, &#x43A;&#x43E;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x430;&#x44F; &#x41C;&#x435;&#x434;&#x44C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; - <sup>63</sup>&#x421;u (69,1%) &#x438; <sup>65</sup>&#x421;u (30,9%).\n",
        "Атомная масса": "63.546",
        "Плотность, кг/м³": "8960",
        "Температура плавления, °С": "1083",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.385",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.17",
        "1-й ионизац. потенциал, эв": "7.73"
    },
    {
        "Химический символ": "Zn",
        "label": "Цинк Zinc",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Ar)3d104s2",
        "description": "<b>&#x426;&#x438;&#x43D;&#x43A;</b> (&#x43B;&#x430;&#x442;. Zincum), Zn, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 30, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 65,38, &#x441;&#x438;&#x43D;&#x435;&#x432;&#x430;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; 5 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 64, 66, 67, 68 &#x438; 70; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D; <sup>64</sup>Zn (48,89%). &#x418;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x440;&#x44F;&#x434; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x441;&#x440;&#x435;&#x434;&#x438; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>65</sup>Zn &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 245 &#x441;&#x443;&#x442;; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43A;&#x430;&#x43A; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43D;&#x44B;&#x439; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;.\n",
        "Атомная масса": "65.409",
        "Плотность, кг/м³": "7140",
        "Температура плавления, °С": "419.5",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.383",
        "Электроотрицательность": "1.6",
        "Ковалентный радиус, Å": "1.25",
        "1-й ионизац. потенциал, эв": "9.39"
    },
    {
        "Химический символ": "Ga",
        "label": "Галлий Gallium",
        "Электронная формула": "(Ar)3d104s24p1",
        "description": "<b>&#x413;&#x430;&#x43B;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Gallium), Ga, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 31, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 69,72; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x421;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 69 (60,5%) &#x438; 71 (39,5%).\n",
        "Атомная масса": "69.723",
        "Плотность, кг/м³": "5910",
        "Температура плавления, °С": "29.8",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.331",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.26",
        "1-й ионизац. потенциал, эв": "6.00"
    },
    {
        "Химический символ": "Ge",
        "label": "Германий Germanium",
        "Электронная формула": "(Ar)3d104s24p2",
        "description": "<b>&#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Germanium), Ge, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 32, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 72,59; &#x442;&#x432;&#x435;&#x440;&#x434;&#x43E;&#x435; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E; &#x441;&#x435;&#x440;&#x43E;-&#x431;&#x435;&#x43B;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x431;&#x43B;&#x435;&#x441;&#x43A;&#x43E;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x439; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x43E;&#x431;&#x43E;&#x439; &#x441;&#x43C;&#x435;&#x441;&#x44C; &#x43F;&#x44F;&#x442;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 70, 72, 73, 74 &#x438; 76. &#x421;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x438; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x44F; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x43A;&#x430;&#x437;&#x430;&#x43B; &#x432; 1871 &#x433;&#x43E;&#x434;&#x443; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432; &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43B; &#x44D;&#x442;&#x43E;&#x442; &#x43D;&#x435;&#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B;&#x439; &#x435;&#x449;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x44D;&#x43A;&#x430;&#x441;&#x438;&#x43B;&#x438;&#x446;&#x438;&#x435;&#x43C; &#x438;&#x437;-&#x437;&#x430; &#x431;&#x43B;&#x438;&#x437;&#x43E;&#x441;&#x442;&#x438; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432; &#x435;&#x433;&#x43E; &#x441; &#x43A;&#x440;&#x435;&#x43C;&#x43D;&#x438;&#x435;&#x43C;. &#x412; 1886 &#x433;&#x43E;&#x434;&#x443; &#x43D;&#x435;&#x43C;&#x435;&#x446;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x41A;. &#x412;&#x438;&#x43D;&#x43A;&#x43B;&#x435;&#x440; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x438;&#x43B; &#x432; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x435; &#x430;&#x440;&#x433;&#x438;&#x440;&#x43E;&#x434;&#x438;&#x442;&#x435; &#x43D;&#x43E;&#x432;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43B; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x435;&#x43C; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x441;&#x432;&#x43E;&#x435;&#x439; &#x441;&#x442;&#x440;&#x430;&#x43D;&#x44B;; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x439; &#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43B;&#x441;&#x44F; &#x432;&#x43F;&#x43E;&#x43B;&#x43D;&#x435; &#x442;&#x43E;&#x436;&#x434;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D; &#x44D;&#x43A;&#x430;&#x441;&#x438;&#x43B;&#x438;&#x446;&#x438;&#x44E;. &#x414;&#x43E; &#x432;&#x442;&#x43E;&#x440;&#x43E;&#x439; &#x43F;&#x43E;&#x43B;&#x43E;&#x432;&#x438;&#x43D;&#x44B; 20 &#x432;&#x435;&#x43A;&#x430; &#x43F;&#x440;&#x430;&#x43A;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x435; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x44F; &#x43E;&#x441;&#x442;&#x430;&#x432;&#x430;&#x43B;&#x43E;&#x441;&#x44C; &#x432;&#x435;&#x441;&#x44C;&#x43C;&#x430; &#x43E;&#x433;&#x440;&#x430;&#x43D;&#x438;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x43C;. &#x41F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x435; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x44F; &#x432;&#x43E;&#x437;&#x43D;&#x438;&#x43A;&#x43B;&#x43E; &#x432; &#x441;&#x432;&#x44F;&#x437;&#x438; &#x441; &#x440;&#x430;&#x437;&#x432;&#x438;&#x442;&#x438;&#x435;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x434;&#x43D;&#x438;&#x43A;&#x43E;&#x432;&#x43E;&#x439; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x438;&#x43A;&#x438;.\n",
        "Атомная масса": "72.64",
        "Плотность, кг/м³": "5320",
        "Температура плавления, °С": "937.4",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.305",
        "Электроотрицательность": "2.0",
        "Ковалентный радиус, Å": "1.22",
        "1-й ионизац. потенциал, эв": "8.13"
    },
    {
        "Химический символ": "As",
        "label": "Мышьяк Arsenic",
        "Электронная формула": "(Ar)3d104s24p3",
        "description": "<b>&#x41C;&#x44B;&#x448;&#x44C;&#x44F;&#x43A;</b> (&#x43B;&#x430;&#x442;. Arsenicum), As, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 33, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 74,9216; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x441;&#x435;&#x440;&#x43E;-&#x441;&#x442;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>75</sup>As.\n",
        "Атомная масса": "74.922",
        "Плотность, кг/м³": "5720",
        "Температура плавления, °С": "817 (под давл.)",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.343",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.20",
        "1-й ионизац. потенциал, эв": "9.81"
    },
    {
        "Химический символ": "Se",
        "label": "Селен Selenium",
        "Электронная формула": "(Ar)3d104s24p4",
        "description": "<b>&#x421;&#x435;&#x43B;&#x435;&#x43D;</b> (Selenium), Se, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 34, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 78, 96; &#x43F;&#x440;&#x435;&#x438;&#x43C;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43D;&#x435;&#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x421;&#x435;&#x43B;&#x435;&#x43D; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x43E;&#x431;&#x43E;&#x439; &#x441;&#x43C;&#x435;&#x441;&#x44C; &#x448;&#x435;&#x441;&#x442;&#x438; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; - <sup>74</sup>Se (0,87%), <sup>76</sup>Se (9,01%), <sup>77</sup>Se (7,58%), <sup>78</sup>Se (23,52%), <sup>80</sup>Se (49,82%), <sup>82</sup>Se (9,19%). &#x418;&#x437; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x435;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; <sup>75</sup>Se &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; 121 &#x441;&#x443;&#x442;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1817 &#x433;&#x43E;&#x434;&#x443; &#x418;. &#x411;&#x435;&#x440;&#x446;&#x435;&#x43B;&#x438;&#x443;&#x441;&#x43E;&#x43C; (&#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x434;&#x430;&#x43D;&#x43E; &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. selene - &#x41B;&#x443;&#x43D;&#x430;).\n",
        "Атомная масса": "78.96",
        "Плотность, кг/м³": "4790",
        "Температура плавления, °С": "217",
        "Температура кипения, °С": "685",
        "Теплоемкость, кДж/(кг·°С)": "0.352",
        "Электроотрицательность": "2.5",
        "Ковалентный радиус, Å": "1.16",
        "1-й ионизац. потенциал, эв": "9.75"
    },
    {
        "Химический символ": "Br",
        "label": "Бром Bromine",
        "color": "0xDF902B",
        "shadow": "0xAF6018",
        "Электронная формула": "(Ar)3d104s24p5",
        "description": "<b>&#x411;&#x440;&#x43E;&#x43C;</b> (&#x43B;&#x430;&#x442;. Bromum), &#x412;&#x433;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;&#x43C;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 35, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 79,904; &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x43E;-&#x431;&#x443;&#x440;&#x430;&#x44F; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x441;&#x442;&#x44C; &#x441; &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C; &#x43D;&#x435;&#x43F;&#x440;&#x438;&#x44F;&#x442;&#x43D;&#x44B;&#x43C; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x43E;&#x43C;. &#x411;&#x440;&#x43E;&#x43C; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1826 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x410;. &#x416;. &#x411;&#x430;&#x43B;&#x430;&#x440;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x438;&#x437;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x440;&#x430;&#x441;&#x441;&#x43E;&#x43B;&#x43E;&#x432; &#x441;&#x440;&#x435;&#x434;&#x438;&#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x43C;&#x43E;&#x440;&#x441;&#x43A;&#x438;&#x445; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x44B;&#x445; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x441;&#x43B;&#x43E;&#x432;; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. bromos - &#x437;&#x43B;&#x43E;&#x432;&#x43E;&#x43D;&#x438;&#x435;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x411;&#x440;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 2 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; <sup>79</sup>&#x412;r (50,54%) &#x438; <sup>81</sup>&#x412;r (49,46%). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x411;&#x440;&#x43E;&#x43C; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x438;&#x43D;&#x442;&#x435;&#x440;&#x435;&#x441;&#x435;&#x43D; <sup>80</sup>&#x412;r, &#x43D;&#x430; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;&#x435; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x433;&#x43E; &#x418;. &#x412;. &#x41A;&#x443;&#x440;&#x447;&#x430;&#x442;&#x43E;&#x432;&#x44B;&#x43C; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x43E; &#x44F;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;&#x438;&#x438; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x445; &#x44F;&#x434;&#x435;&#x440;.\n",
        "Атомная масса": "79.904",
        "Плотность, кг/м³": "3120",
        "Температура плавления, °С": "-7.2",
        "Температура кипения, °С": "58.8",
        "Теплоемкость, кДж/(кг·°С)": "0.293",
        "Электроотрицательность": "2.8",
        "Ковалентный радиус, Å": "1.14",
        "1-й ионизац. потенциал, эв": "11.81"
    },
    {
        "Химический символ": "Kr",
        "label": "Криптон Krypton",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "Электронная формула": "(Ar)3d104s24p6",
        "description": "<b>&#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D;</b> (&#x43B;&#x430;&#x442;. Kryptonum), Kr, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 36, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 83,80. &#x41D;&#x430; &#x417;&#x435;&#x43C;&#x43B;&#x435; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x43C; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x43C; &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435;. &#x410;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; 6 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x441;&#x440;&#x435;&#x434;&#x438; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43F;&#x440;&#x435;&#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; <sup>84</sup>Kr (56,90%). &#x41E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1898 &#x433;&#x43E;&#x434;&#x443; &#x423;. &#x420;&#x430;&#x43C;&#x437;&#x430;&#x435;&#x43C; &#x438; &#x41C;. &#x422;&#x440;&#x430;&#x432;&#x435;&#x440;&#x441;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x441;&#x43A;&#x43E;&#x43F;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x438;&#x437;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x442;&#x440;&#x443;&#x434;&#x43D;&#x43E;&#x43B;&#x435;&#x442;&#x443;&#x447;&#x438;&#x445; &#x444;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x439; &#x436;&#x438;&#x434;&#x43A;&#x43E;&#x433;&#x43E; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430;; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. kryptos - &#x441;&#x43A;&#x440;&#x44B;&#x442;&#x44B;&#x439;). &#x41F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; 1 &#x43C;<sup>3</sup> &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x438;&#x442; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 1 &#x441;&#x43C;<sup>3</sup> &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D;&#x430;. &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; - &#x43E;&#x434;&#x43D;&#x43E;&#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x433;&#x430;&#x437; &#x431;&#x435;&#x437; &#x446;&#x432;&#x435;&#x442;&#x430; &#x438; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430;; &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x43F;&#x440;&#x438; 0 &#xB0;&#x421; &#x438; 100 &#x43A;&#x43D;/&#x43C;<sup>2</sup> (760 &#x43C;&#x43C; &#x440;&#x442;. &#x441;&#x442;.) 3,745 &#x433;/&#x43B;, t<sub>&#x43F;&#x43B;</sub>-157,1 &#xB0;&#x421;, t<sub>&#x43A;&#x438;&#x43F;</sub>-153,2 &#xB0;&#x421;. &#x412; &#x442;&#x432;&#x435;&#x440;&#x434;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x438; &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; &#x43A;&#x443;&#x431;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x440;&#x435;&#x448;&#x435;&#x442;&#x43A;&#x43E;&#x439; &#x441; &#x43F;&#x430;&#x440;&#x430;&#x43C;&#x435;&#x442;&#x440;&#x43E;&#x43C; &#x430; = 5,706&#xC5; (-184 &#xB0;&#x421;). &#x41F;&#x43E;&#x441;&#x43B;&#x435; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x430; &#x432; 1961 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x442;&#x43E;&#x440;&#x438;&#x434;&#x430; &#x43A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430; &#x431;&#x44B;&#x43B;&#x43E; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x43E;, &#x447;&#x442;&#x43E; &#x438; &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x435;&#x43D; &#x432;&#x441;&#x442;&#x443;&#x43F;&#x430;&#x442;&#x44C; &#x432; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438;. &#x412; &#x447;&#x430;&#x441;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438;, &#x43F;&#x440;&#x438; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x438; &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D;&#x430; &#x438; &#x444;&#x442;&#x43E;&#x440;&#x430; (&#x43D;&#x430;&#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;, &#x432; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x440;&#x430;&#x437;&#x440;&#x44F;&#x434;&#x435;) &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x444;&#x442;&#x43E;&#x440;&#x438;&#x434;&#x44B; KrF<sub>2</sub> &#x438;&#x43B;&#x438; KrF<sub>4</sub>, &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x435; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x43F;&#x440;&#x438; &#x43F;&#x43E;&#x43D;&#x438;&#x436;&#x435;&#x43D;&#x43D;&#x43E;&#x439; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435;. &#x414;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x435;&#x43C; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430; Ba(&#x41E;&#x41D;)<sub>2</sub> &#x43D;&#x430; KrF<sub>4</sub> &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x43A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D;&#x430;&#x442; &#x431;&#x430;&#x440;&#x438;&#x44F; &#x412;&#x430;&#x41A;r&#x41E;<sub>4</sub>. &#x41A;&#x430;&#x43A; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x435; &#x433;&#x430;&#x437;&#x44B;, &#x41A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x432;&#x43A;&#x43B;&#x44E;&#x447;&#x435;&#x43D;&#x438;&#x44F;: Kr&#xB7;6&#x41D;<sub>2</sub>&#x41E;, Kr&#xB7;&#x417;&#x421;<sub>6</sub>&#x41D;<sub>5</sub>&#x41E;&#x41D; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;.\n",
        "Атомная масса": "83.798",
        "Плотность, кг/м³": "3.74",
        "Температура плавления, °С": "-157.3",
        "Температура кипения, °С": "-153.2",
        "Теплоемкость, кДж/(кг·°С)": "0.248",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "1.12",
        "1-й ионизац. потенциал, эв": "14.00"
    },
    {
        "Химический символ": "Rb",
        "label": "Рубидий Rubidium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "Электронная формула": "(Kr)5s1",
        "description": "<b>&#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Rubidium), Rb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 37, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 85,4678; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x439; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x43E;&#x431;&#x43E;&#x439; &#x441;&#x43C;&#x435;&#x441;&#x44C; &#x434;&#x432;&#x443;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; <sup>85</sup>Rb (72,15%) &#x438; &#x441;&#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x433;&#x43E; <sup>87</sup>Rb (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub>4,8&#xB7;10<sup>10</sup> &#x43B;&#x435;&#x442;). &#x41F;&#x440;&#x438; &#x3B2;-&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x435; <sup>87</sup>Rb &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; <sup>87</sup>Sr. &#x41E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x44F; <sup>87</sup>Sr &#x438; &#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x44F; &#x432; &#x433;&#x43E;&#x440;&#x43D;&#x44B;&#x445; &#x43F;&#x43E;&#x440;&#x43E;&#x434;&#x430;&#x445; &#x438; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430;&#x445; (&#x441;&#x442;&#x440;&#x43E;&#x43D;&#x446;&#x438;&#x435;&#x432;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x43E;&#x434;) &#x434;&#x430;&#x435;&#x442; &#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x43D;&#x430;&#x434;&#x435;&#x436;&#x43D;&#x43E; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x442;&#x44C; &#x438;&#x445; &#x433;&#x435;&#x43E;&#x43B;&#x43E;&#x433;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x432;&#x43E;&#x437;&#x440;&#x430;&#x441;&#x442;. &#x418;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43E; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 20 &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x44F;. &#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x439; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x43B;&#x438; &#x432; 1861 &#x433;&#x43E;&#x434;&#x443; &#x420;. &#x411;&#x443;&#x43D;&#x437;&#x435;&#x43D; &#x438; &#x413;. &#x41A;&#x438;&#x440;&#x445;&#x433;&#x43E;&#x444; &#x43F;&#x440;&#x438; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x441;&#x43E;&#x43B;&#x435;&#x439;, &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x438;&#x437; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x432;&#x43E;&#x434;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x443; &#x434;&#x430;&#x43D;&#x43E; &#x43F;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x443; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x44B;&#x445; &#x43B;&#x438;&#x43D;&#x438;&#x439; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x430; (&#x43E;&#x442; &#x43B;&#x430;&#x442;. rubidus - &#x43A;&#x440;&#x430;&#x441;&#x43D;&#x44B;&#x439;, &#x442;&#x435;&#x43C;&#x43D;&#x43E;&#x43A;&#x440;&#x430;&#x441;&#x43D;&#x44B;&#x439;). &#x41C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x420;&#x443;&#x431;&#x438;&#x434;&#x438;&#x439; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x432; 1863 &#x433;&#x43E;&#x434;&#x443; &#x411;&#x443;&#x43D;&#x437;&#x435;&#x43D;.\n",
        "Атомная масса": "85.468",
        "Плотность, кг/м³": "1530",
        "Температура плавления, °С": "38.9",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.335",
        "Электроотрицательность": "0.8",
        "Ковалентный радиус, Å": "2.16",
        "1-й ионизац. потенциал, эв": "4.18"
    },
    {
        "Химический символ": "Sr",
        "label": "Стронций Strontium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)5s2",
        "description": "<b>&#x421;&#x442;&#x440;&#x43E;&#x43D;&#x446;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Strontium), Sr, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 38, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 87,62, &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x421;&#x442;&#x440;&#x43E;&#x43D;&#x446;&#x438;&#x439; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x447;&#x435;&#x442;&#x44B;&#x440;&#x435;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>84</sup>Sr, <sup>86</sup>Sr, <sup>87</sup>Sr &#x438; <sup>88</sup>Sr; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D; <sup>88</sup>Sr (82,56%).\n",
        "Атомная масса": "87.62",
        "Плотность, кг/м³": "2600",
        "Температура плавления, °С": "768",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.737",
        "Электроотрицательность": "1.0",
        "Ковалентный радиус, Å": "1.91",
        "1-й ионизац. потенциал, эв": "5.69"
    },
    {
        "Химический символ": "Y",
        "label": "Иттрий Yttrium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d15s2",
        "description": "<b>&#x418;&#x442;&#x442;&#x440;&#x438;&#x439;</b> (Yttrium), Y, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 39, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 88,9059. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x43E;&#x434;&#x43D;&#x438;&#x43C; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x43C; <sup>89</sup>Y. &#x418;&#x442;&#x442;&#x440;&#x438;&#x439; &#x432;&#x43C;&#x435;&#x441;&#x442;&#x435; &#x441;&#x43E; &#x441;&#x43A;&#x430;&#x43D;&#x434;&#x438;&#x435;&#x43C;, &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x43C; &#x438; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;&#x438;</a> &#x441;&#x43E;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x443; &#x442;&#x430;&#x43A; &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x43C;&#x44B;&#x445; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x432;. &#x42D;&#x442;&#x438; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x44B; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x441;&#x445;&#x43E;&#x434;&#x43D;&#x44B; &#x43F;&#x43E; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430;&#x43C;, &#x441;&#x43E;&#x432;&#x43C;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435;, &#x438;&#x43C;&#x435;&#x44E;&#x442; &#x43E;&#x431;&#x449;&#x443;&#x44E; &#x438;&#x441;&#x442;&#x43E;&#x440;&#x438;&#x44E; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44F;.\n",
        "Атомная масса": "88.906",
        "Плотность, кг/м³": "4470",
        "Температура плавления, °С": "1525",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.297",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": "1.62",
        "1-й ионизац. потенциал, эв": "6.38"
    },
    {
        "Химический символ": "Zr",
        "label": "Цирконий Zirconium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d25s2",
        "description": "<b>&#x426;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Zirconium), Zr, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 40, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 91,22; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x44B;&#x43C; &#x431;&#x43B;&#x435;&#x441;&#x43A;&#x43E;&#x43C;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x43F;&#x44F;&#x442;&#x44C; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x426;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x44F;: <sup>90</sup>Zr (51,46%),<sup>91</sup>Zr (11,23%),<sup>92</sup>Zr (17,11%), <sup>94</sup>Zr (17,4%), <sup>96</sup>Zr (2,8%). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x432;&#x430;&#x436;&#x43D;&#x435;&#x439;&#x448;&#x438;&#x439; <sup>95</sup>Zr (&#x422;<sub>&#xBD;</sub> = 65 &#x441;&#x443;&#x442;); &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;&#x430;.\n",
        "Атомная масса": "91.224",
        "Плотность, кг/м³": "6490",
        "Температура плавления, °С": "1852",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.276",
        "Электроотрицательность": "1.4",
        "Ковалентный радиус, Å": "1.45",
        "1-й ионизац. потенциал, эв": "6.84"
    },
    {
        "Химический символ": "Nb",
        "label": "Ниобий Niobium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d45s1",
        "description": "<b>&#x41D;&#x438;&#x43E;&#x431;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Niobium), Nb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 41, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 92,9064; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x435;&#x440;&#x43E;-&#x441;&#x442;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x438;&#x43C;&#x435;&#x435;&#x442; &#x43E;&#x434;&#x438;&#x43D; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>93</sup>Nb.\n",
        "Атомная масса": "92.906",
        "Плотность, кг/м³": "8400",
        "Температура плавления, °С": "2468",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.272",
        "Электроотрицательность": "1.6",
        "Ковалентный радиус, Å": "1.34",
        "1-й ионизац. потенциал, эв": "6.88"
    },
    {
        "Химический символ": "Mo",
        "label": "Молибден Molybdenum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d55s1",
        "description": "<b>&#x41C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;</b> (&#x43B;&#x430;&#x442;. Molybdaenum), Mo, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 42, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 95,94; &#x441;&#x432;&#x435;&#x442;&#x43B;&#x43E;-&#x441;&#x435;&#x440;&#x44B;&#x439; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x441;&#x435;&#x43C;&#x44C;&#x44E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 92, 94-98 &#x438; 100, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D; <sup>98</sup>&#x41C;&#x43E; (23,75%). &#x412;&#x43F;&#x43B;&#x43E;&#x442;&#x44C; &#x434;&#x43E; 18 &#x432;&#x435;&#x43A;&#x430; &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x43E;&#x439; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B; &#x41C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D; &#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x43E;&#x432;&#x44B;&#x439; &#x431;&#x43B;&#x435;&#x441;&#x43A; (&#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x438;&#x442;) &#x43D;&#x435; &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x430;&#x43B;&#x438; &#x43E;&#x442; &#x433;&#x440;&#x430;&#x444;&#x438;&#x442;&#x430; &#x438; &#x441;&#x432;&#x438;&#x43D;&#x446;&#x43E;&#x432;&#x43E;&#x433;&#x43E; &#x431;&#x43B;&#x435;&#x441;&#x43A;&#x430;, &#x442;&#x430;&#x43A; &#x43A;&#x430;&#x43A; &#x43E;&#x43D;&#x438; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x441;&#x445;&#x43E;&#x436;&#x438; &#x43F;&#x43E; &#x432;&#x43D;&#x435;&#x448;&#x43D;&#x435;&#x43C;&#x443; &#x432;&#x438;&#x434;&#x443;. &#x42D;&#x442;&#x438; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x44B; &#x43D;&#x43E;&#x441;&#x438;&#x43B;&#x438; &#x43E;&#x431;&#x449;&#x435;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &quot;&#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&quot; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. molybdos - &#x441;&#x432;&#x438;&#x43D;&#x435;&#x446;).\n",
        "Атомная масса": "95.94",
        "Плотность, кг/м³": "10200",
        "Температура плавления, °С": "2620",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.255",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.30",
        "1-й ионизац. потенциал, эв": "7.10"
    },
    {
        "Химический символ": "Tc",
        "label": "Технеций Technetium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d55s2",
        "description": "<b>&#x422;&#x435;&#x445;&#x43D;&#x435;&#x446;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Technetium), &#x422;&#x441;, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 43, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 98, 9062; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43A;&#x43E;&#x432;&#x43A;&#x438;&#x439; &#x438; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439;.\n",
        "Атомная масса": "[98]",
        "Плотность, кг/м³": "11500",
        "Температура плавления, °С": "2140",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.21",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.27",
        "1-й ионизац. потенциал, эв": "7.28"
    },
    {
        "Химический символ": "Ru",
        "label": "Рутений Ruthenium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d75s1",
        "description": "<b>&#x420;&#x443;&#x442;&#x435;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Ruthenium), Ru, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 44, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 101,07; &#x43E;&#x434;&#x438;&#x43D; &#x438;&#x437; <a href=\"art.php?t=pt\">&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;</a>.\n",
        "Атомная масса": "101.07",
        "Плотность, кг/м³": "12200",
        "Температура плавления, °С": "2500",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.239",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.25",
        "1-й ионизац. потенциал, эв": "7.36"
    },
    {
        "Химический символ": "Rh",
        "label": "Родий Rhodium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d85s1",
        "description": "<b>&#x420;&#x43E;&#x434;&#x438;&#x439;</b> (Rhodium, Rh), &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 45, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 102,9055; &#x43E;&#x434;&#x438;&#x43D; &#x438;&#x437; <a href=\"art.php?t=pt\">&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;</a>.\n",
        "Атомная масса": "102.91",
        "Плотность, кг/м³": "12400",
        "Температура плавления, °С": "1966",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.247",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.25",
        "1-й ионизац. потенциал, эв": "7.46"
    },
    {
        "Химический символ": "Pd",
        "label": "Палладий Palladium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d105s0",
        "description": "<b>&#x41F;&#x430;&#x43B;&#x43B;&#x430;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Palladium; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44F; &#x43C;&#x430;&#x43B;&#x43E;&#x439; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442;&#x44B; &#x41F;&#x430;&#x43B;&#x43B;&#x430;&#x434;&#x44B;), Pd, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 46, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 106,4; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=pt\">&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "106.42",
        "Плотность, кг/м³": "12000",
        "Температура плавления, °С": "1552",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.243",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.28",
        "1-й ионизац. потенциал, эв": "8.33"
    },
    {
        "Химический символ": "Ag",
        "label": "Серебро Silver",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d105s1",
        "description": "<b>&#x421;&#x435;&#x440;&#x435;&#x431;&#x440;&#x43E;</b> (&#x43B;&#x430;&#x442;. Argentum), Ag, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 47, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 107,868; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x431;&#x435;&#x43B;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;, &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439;, &#x445;&#x43E;&#x440;&#x43E;&#x448;&#x43E; &#x43F;&#x43E;&#x43B;&#x438;&#x440;&#x443;&#x435;&#x442;&#x441;&#x44F;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x438;&#x442;&#x441;&#x44F; &#x432; &#x432;&#x438;&#x434;&#x435; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x434;&#x432;&#x443;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; <sup>107</sup>Ag &#x438; <sup>109</sup>Ag; &#x438;&#x437; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43F;&#x440;&#x430;&#x43A;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x432;&#x430;&#x436;&#x435;&#x43D; <sup>110</sup>Ag (T<sub>&#xBD;</sub> = 253 &#x441;&#x443;&#x442;). &#x421;&#x435;&#x440;&#x435;&#x431;&#x440;&#x43E; &#x431;&#x44B;&#x43B;&#x43E; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x432; &#x433;&#x43B;&#x443;&#x431;&#x43E;&#x43A;&#x43E;&#x439; &#x434;&#x440;&#x435;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x438; (4-&#x435; &#x442;&#x44B;&#x441;&#x44F;&#x447;&#x435;&#x43B;&#x435;&#x442;&#x438;&#x435; &#x434;&#x43E; &#x43D;. &#x44D;.) &#x432; &#x415;&#x433;&#x438;&#x43F;&#x442;&#x435;, &#x41F;&#x435;&#x440;&#x441;&#x438;&#x438;, &#x41A;&#x438;&#x442;&#x430;&#x435;.\n",
        "Атомная масса": "107.87",
        "Плотность, кг/м³": "10500",
        "Температура плавления, °С": "960.8",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.234",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.34",
        "1-й ионизац. потенциал, эв": "7.58"
    },
    {
        "Химический символ": "Cd",
        "label": "Кадмий Cadmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Kr)4d105s2",
        "description": "<b>&#x41A;&#x430;&#x434;&#x43C;&#x438;&#x439;</b> (Cadmium), Cd, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 48, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 112,40; &#x431;&#x435;&#x43B;&#x44B;&#x439;, &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439;, &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439;, &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439;, &#x442;&#x44F;&#x433;&#x443;&#x447;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; 8 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438;: 106 (1,215%), 108 (0,875%), 110 (12,39%), 111 (12,75%), 112 (24,07%), 113 (12,26%), 114 (28,86%), 116 (7,58%).\n",
        "Атомная масса": "112.41",
        "Плотность, кг/м³": "8650",
        "Температура плавления, °С": "320.9",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.23",
        "Электроотрицательность": "1.7",
        "Ковалентный радиус, Å": "1.48",
        "1-й ионизац. потенциал, эв": "8.99"
    },
    {
        "Химический символ": "In",
        "label": "Индий Indium",
        "Электронная формула": "(Kr)4d105s25p1",
        "description": "<b>&#x418;&#x43D;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Indium), In, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 49, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 114,82; &#x431;&#x435;&#x43B;&#x44B;&#x439; &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439; &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x434;&#x432;&#x443;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>113</sup>In (4,33%) &#x438; <sup>115</sup>In (95,67%); &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x438;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x441;&#x43B;&#x430;&#x431;&#x43E;&#x439; &#x3B2;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 6&#xB7;10<sup>14</sup> &#x43B;&#x435;&#x442;).\n",
        "Атомная масса": "114.82",
        "Плотность, кг/м³": "7310",
        "Температура плавления, °С": "156.2",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.239",
        "Электроотрицательность": "1.7",
        "Ковалентный радиус, Å": "1.44",
        "1-й ионизац. потенциал, эв": "5.78"
    },
    {
        "Химический символ": "Sn",
        "label": "Олово Tin",
        "Электронная формула": "(Kr)4d105s25p2",
        "description": "<b>&#x41E;&#x43B;&#x43E;&#x432;&#x43E;</b> (&#x43B;&#x430;&#x442;. Stannum), Sn, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 50, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 118,69; &#x431;&#x435;&#x43B;&#x44B;&#x439; &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439;, &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; &#x438; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 10 &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 112, 114-120, 122, 124; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x438;&#x439; &#x441;&#x43B;&#x430;&#x431;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x435;&#x43D;; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>120</sup>Sn &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D; (&#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 33%).\n",
        "Атомная масса": "118.71",
        "Плотность, кг/м³": "7300",
        "Температура плавления, °С": "231.9",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.226",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.41",
        "1-й ионизац. потенциал, эв": "7.34"
    },
    {
        "Химический символ": "Sb",
        "label": "Сурьма Antimony",
        "Электронная формула": "(Kr)4d105s25p3",
        "description": "<b>&#x421;&#x443;&#x440;&#x44C;&#x43C;&#x430;</b> (&#x43B;&#x430;&#x442;. Stibium), Sb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 51, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 121,75; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441; &#x441;&#x438;&#x43D;&#x435;&#x432;&#x430;&#x442;&#x44B;&#x43C; &#x43E;&#x442;&#x442;&#x435;&#x43D;&#x43A;&#x43E;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x434;&#x432;&#x430; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>121</sup>Sb (57,25%) &#x438; <sup>123</sup>Sb (42,75%). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x432;&#x430;&#x436;&#x43D;&#x435;&#x439;&#x448;&#x438;&#x435; <sup>122</sup>Sb (&#x422;<sub>&#xBD;</sub> = 2,8 &#x441;&#x443;&#x442;), <sup>124</sup>Sb (&#x422;<sub>&#xBD;</sub> = 60,2 &#x441;&#x443;&#x442;) &#x438; <sup>123</sup>Sb (&#x422;<sub>&#xBD;</sub> = 2 &#x433;&#x43E;&#x434;&#x430;).\n",
        "Атомная масса": "121.76",
        "Плотность, кг/м³": "6620",
        "Температура плавления, °С": "630.5",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.205",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.40",
        "1-й ионизац. потенциал, эв": "8.64"
    },
    {
        "Химический символ": "Te",
        "label": "Теллур Tellurium",
        "Электронная формула": "(Kr)4d105s25p4",
        "description": "<b>&#x422;&#x435;&#x43B;&#x43B;&#x443;&#x440;</b> (&#x43B;&#x430;&#x442;. Tellurium), &#x422;&#x435;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x43E;&#x439; &#x43F;&#x43E;&#x434;&#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 52, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 127,60, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x440;&#x435;&#x434;&#x43A;&#x438;&#x43C; &#x440;&#x430;&#x441;&#x441;&#x435;&#x44F;&#x43D;&#x43D;&#x44B;&#x43C; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x432;&#x438;&#x434;&#x435; &#x432;&#x43E;&#x441;&#x44C;&#x43C;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 120, 122-126, 128, 130, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D;&#x44B; <sup>128</sup>&#x422;&#x435; (31,79%) &#x438; <sup>130</sup>&#x422;&#x435; (34,48%). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x448;&#x438;&#x440;&#x43E;&#x43A;&#x43E;&#x435; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x432; &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435; &#x43C;&#x435;&#x447;&#x435;&#x43D;&#x44B;&#x445; &#x430;&#x442;&#x43E;&#x43C;&#x43E;&#x432; &#x438;&#x43C;&#x435;&#x44E;&#x442; <sup>127</sup>&#x422;&#x435; (&#x422;<sub>&#xBD;</sub> = 105 &#x441;&#x443;&#x442;) &#x438; <sup>129</sup>&#x422;&#x435; (&#x422;<sub>&#xBD;</sub> = 33,5 &#x441;&#x443;&#x442;). &#x422;&#x435;&#x43B;&#x43B;&#x443;&#x440; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x424;. &#x41C;&#x44E;&#x43B;&#x43B;&#x435;&#x440;&#x43E;&#x43C; &#x432; 1782 &#x433;&#x43E;&#x434;&#x443;. &#x41D;&#x435;&#x43C;&#x435;&#x446;&#x43A;&#x438;&#x439; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x439; &#x41C;. &#x413;. &#x41A;&#x43B;&#x430;&#x43F;&#x440;&#x43E;&#x442; &#x43F;&#x43E;&#x434;&#x442;&#x432;&#x435;&#x440;&#x434;&#x438;&#x43B; &#x44D;&#x442;&#x43E; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x435; &#x438; &#x434;&#x430;&#x43B; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x443; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &quot;&#x442;&#x435;&#x43B;&#x43B;&#x443;&#x440;&quot; (&#x43E;&#x442; &#x43B;&#x430;&#x442;. tellus, &#x440;&#x43E;&#x434;. &#x43F;&#x430;&#x434;&#x435;&#x436; telluris - &#x417;&#x435;&#x43C;&#x43B;&#x44F;). &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x445;&#x438;&#x43C;&#x438;&#x438; &#x422;&#x435;&#x43B;&#x43B;&#x443;&#x440;&#x430; &#x432;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x435;&#x43D;&#x44B; &#x432; 30-&#x445; &#x433;&#x43E;&#x434;&#x430;&#x445; 19 &#x432;&#x435;&#x43A;&#x430; &#x418;. &#x42F;. &#x411;&#x435;&#x440;&#x446;&#x435;&#x43B;&#x438;&#x443;&#x441;&#x43E;&#x43C;.\n",
        "Атомная масса": "127.6",
        "Плотность, кг/м³": "6240",
        "Температура плавления, °С": "449.5",
        "Температура кипения, °С": "990",
        "Теплоемкость, кДж/(кг·°С)": "0.197",
        "Электроотрицательность": "2.1",
        "Ковалентный радиус, Å": "1.36",
        "1-й ионизац. потенциал, эв": "9.01"
    },
    {
        "Химический символ": "I",
        "color": "0xA057E6",
        "shadow": "0xA429F4",
        "label": "Иод Iodine",
        "Электронная формула": "(Kr)4d105s25p5",
        "description": "<b>&#x418;&#x43E;&#x434;</b> (&#x43B;&#x430;&#x442;. Iodum), I, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;&#x43C; (&#x432; &#x43B;&#x438;&#x442;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x443;&#x441;&#x442;&#x430;&#x440;&#x435;&#x432;&#x448;&#x438;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x419;&#x43E;&#x434; &#x438; &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; J); &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 53, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 126,9045; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x44B; &#x447;&#x435;&#x440;&#x43D;&#x43E;-&#x441;&#x435;&#x440;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x431;&#x43B;&#x435;&#x441;&#x43A;&#x43E;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x418;&#x43E;&#x434; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C; &#x447;&#x438;&#x441;&#x43B;&#x43E;&#x43C; 127. &#x418;&#x43E;&#x434; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x43B; &#x432; 1811 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x411;. &#x41A;&#x443;&#x440;&#x442;&#x443;&#x430;. &#x41D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x44F; &#x43C;&#x430;&#x442;&#x43E;&#x447;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x441;&#x441;&#x43E;&#x43B; &#x437;&#x43E;&#x43B;&#x44B; &#x43C;&#x43E;&#x440;&#x441;&#x43A;&#x438;&#x445; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x441;&#x43B;&#x435;&#x439; &#x441; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x43E;&#x439;, &#x43E;&#x43D; &#x43D;&#x430;&#x431;&#x43B;&#x44E;&#x434;&#x430;&#x43B; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x444;&#x438;&#x43E;&#x43B;&#x435;&#x442;&#x43E;&#x432;&#x43E;&#x433;&#x43E; &#x43F;&#x430;&#x440;&#x430; (&#x43E;&#x442;&#x441;&#x44E;&#x434;&#x430; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x418;&#x43E;&#x434; - &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. iodes, ioeides - &#x43F;&#x43E;&#x445;&#x43E;&#x436;&#x438;&#x439; &#x446;&#x432;&#x435;&#x442;&#x43E;&#x43C; &#x43D;&#x430; &#x444;&#x438;&#x430;&#x43B;&#x43A;&#x443;, &#x444;&#x438;&#x43E;&#x43B;&#x435;&#x442;&#x43E;&#x432;&#x44B;&#x439;), &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x43A;&#x43E;&#x43D;&#x434;&#x435;&#x43D;&#x441;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43B;&#x441;&#x44F; &#x432; &#x432;&#x438;&#x434;&#x435; &#x442;&#x435;&#x43C;&#x43D;&#x44B;&#x445; &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x445; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x43D;&#x447;&#x430;&#x442;&#x44B;&#x445; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;. &#x412; 1813-1814 &#x433;&#x43E;&#x434;&#x430;&#x445; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x416;. &#x41B;. &#x413;&#x435;&#x439;-&#x41B;&#x44E;&#x441;&#x441;&#x430;&#x43A; &#x438; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x413;. &#x414;&#x44D;&#x432;&#x438; &#x434;&#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43B;&#x438; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x440;&#x43D;&#x443;&#x44E; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x443; &#x418;&#x43E;&#x434;&#x430;.\n",
        "Атомная масса": "126.90",
        "Плотность, кг/м³": "4940",
        "Температура плавления, °С": "113.7",
        "Температура кипения, °С": "183.5",
        "Теплоемкость, кДж/(кг·°С)": "0.218",
        "Электроотрицательность": "2.5",
        "Ковалентный радиус, Å": "1.33",
        "1-й ионизац. потенциал, эв": "10.45"
    },
    {
        "Химический символ": "Xe",
        "label": "Ксенон Xenon",
        "color": "0x30C7E6",
        "shadow": "0x10AFC8",
        "Электронная формула": "(Kr)4d105s25p6",
        "description": "<b>&#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;</b> (&#x43B;&#x430;&#x442;. Xenonum), Xe, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 54, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 131,30. &#x41D;&#x430; &#x417;&#x435;&#x43C;&#x43B;&#x435; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x43F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x433;&#x43B;&#x430;&#x432;&#x43D;&#x44B;&#x43C; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x43C; &#x432; &#x430;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x435;. &#x410;&#x442;&#x43C;&#x43E;&#x441;&#x444;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 9 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x441;&#x440;&#x435;&#x434;&#x438; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43F;&#x440;&#x435;&#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x44E;&#x442; <sup>129</sup>&#x425;&#x435;, <sup>131</sup>&#x425;&#x435; &#x438; <sup>132</sup>&#x425;&#x435;. &#x41E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1898 &#x433;&#x43E;&#x434;&#x443; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44F;&#x43C;&#x438; &#x423;. &#x420;&#x430;&#x43C;&#x437;&#x430;&#x435;&#x43C; &#x438; &#x41C;. &#x422;&#x440;&#x430;&#x432;&#x435;&#x440;&#x441;&#x43E;&#x43C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43F;&#x43E;&#x434;&#x432;&#x435;&#x440;&#x433;&#x43B;&#x438; &#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x43C;&#x443; &#x438;&#x441;&#x43F;&#x430;&#x440;&#x435;&#x43D;&#x438;&#x44E; &#x436;&#x438;&#x434;&#x43A;&#x438;&#x439; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445; &#x438; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x441;&#x43A;&#x43E;&#x43F;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43B;&#x438; &#x435;&#x433;&#x43E; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x442;&#x440;&#x443;&#x434;&#x43D;&#x43E;&#x43B;&#x435;&#x442;&#x443;&#x447;&#x438;&#x435; &#x444;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x438;. &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x431;&#x44B;&#x43B; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D; &#x43A;&#x430;&#x43A; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x441;&#x44C; &#x43A; &#x43A;&#x440;&#x438;&#x43F;&#x442;&#x43E;&#x43D;&#x443;, &#x441; &#x447;&#x435;&#x43C; &#x441;&#x432;&#x44F;&#x437;&#x430;&#x43D;&#x43E; &#x435;&#x433;&#x43E; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. xenos - &#x447;&#x443;&#x436;&#x43E;&#x439;). &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; -&#x432;&#x435;&#x441;&#x44C;&#x43C;&#x430; &#x440;&#x435;&#x434;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;. &#x41F;&#x440;&#x438; &#x43D;&#x43E;&#x440;&#x43C;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; 1000 &#x43C;<sup>3</sup> &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x430; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x442; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 87 &#x441;&#x43C;<sup>3</sup> &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430;. &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; - &#x43E;&#x434;&#x43D;&#x43E;&#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x433;&#x430;&#x437; &#x431;&#x435;&#x437; &#x446;&#x432;&#x435;&#x442;&#x430; &#x438; &#x437;&#x430;&#x43F;&#x430;&#x445;&#x430;; &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x43F;&#x440;&#x438; 0 &#xB0;&#x421; &#x438; 10<sup>5</sup> &#x43D;/&#x43C;<sup>2</sup> (760 &#x43C;&#x43C; &#x440;&#x442;. &#x441;&#x442;.) 5,851 &#x433;/&#x43B;, t<sub>&#x43F;&#x43B;</sub> -111,8 &#xB0;&#x421;, t<sub>&#x43A;&#x438;&#x43F;</sub> -108,1 &#xB0;&#x421;. &#x412; &#x442;&#x432;&#x435;&#x440;&#x434;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x438; &#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; &#x43A;&#x443;&#x431;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x440;&#x435;&#x448;&#x435;&#x442;&#x43A;&#x43E;&#x439; &#x441; &#x43F;&#x430;&#x440;&#x430;&#x43C;&#x435;&#x442;&#x440;&#x43E;&#x43C; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x440;&#x43D;&#x43E;&#x439; &#x44F;&#x447;&#x435;&#x439;&#x43A;&#x438; &#x430; = 6.25&#xC5; (&#x43F;&#x440;&#x438; -185 &#xB0;&#x421;). &#x41F;&#x44F;&#x442;&#x430;&#x44F;, &#x432;&#x43D;&#x435;&#x448;&#x43D;&#x44F;&#x44F; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x430;&#x44F; &#x43E;&#x431;&#x43E;&#x43B;&#x43E;&#x447;&#x43A;&#x430; &#x430;&#x442;&#x43E;&#x43C;&#x430; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x438;&#x442; 8 &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x438; &#x432;&#x435;&#x441;&#x44C;&#x43C;&#x430; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x430;. &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x43F;&#x440;&#x438;&#x442;&#x44F;&#x436;&#x435;&#x43D;&#x438;&#x435; &#x432;&#x43D;&#x435;&#x448;&#x43D;&#x438;&#x445; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x43A; &#x44F;&#x434;&#x440;&#x443; &#x432; &#x430;&#x442;&#x43E;&#x43C;&#x435; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430; &#x44D;&#x43A;&#x440;&#x430;&#x43D;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43E; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x43C; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x43E;&#x43C; &#x43F;&#x440;&#x43E;&#x43C;&#x435;&#x436;&#x443;&#x442;&#x43E;&#x447;&#x43D;&#x44B;&#x445; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x44B;&#x445; &#x43E;&#x431;&#x43E;&#x43B;&#x43E;&#x447;&#x435;&#x43A;, &#x438; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x442;&#x435;&#x43D;&#x446;&#x438;&#x430;&#x43B; &#x438;&#x43E;&#x43D;&#x438;&#x437;&#x430;&#x446;&#x438;&#x438; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430;, &#x445;&#x43E;&#x442;&#x44F; &#x438; &#x434;&#x43E;&#x432;&#x43E;&#x43B;&#x44C;&#x43D;&#x43E; &#x432;&#x435;&#x43B;&#x438;&#x43A; (12, 13 &#x44D;&#x432;), &#x43D;&#x43E; &#x437;&#x43D;&#x430;&#x447;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E; &#x43C;&#x435;&#x43D;&#x44C;&#x448;&#x435;, &#x447;&#x435;&#x43C; &#x443; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x445; &#x433;&#x430;&#x437;&#x43E;&#x432;. &#x41F;&#x43E;&#x44D;&#x442;&#x43E;&#x43C;&#x443; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x431;&#x44B;&#x43B; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x43C; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x43E;&#x43C;, &#x434;&#x43B;&#x44F; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x433;&#x43E; &#x443;&#x434;&#x430;&#x43B;&#x43E;&#x441;&#x44C; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x435; - XePtF<sub>6</sub> (&#x43A;&#x430;&#x43D;&#x430;&#x434;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x41D;. &#x411;&#x430;&#x440;&#x442;&#x43B;&#x435;&#x442;&#x442;, 1961). &#x414;&#x430;&#x43B;&#x44C;&#x43D;&#x435;&#x439;&#x448;&#x438;&#x435; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43F;&#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43B;&#x438;, &#x447;&#x442;&#x43E; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x435;&#x43D; &#x43F;&#x440;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x442;&#x44C; &#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438; I, II, IV, VI &#x438; VIII. &#x41B;&#x443;&#x447;&#x448;&#x435; &#x432;&#x441;&#x435;&#x433;&#x43E; &#x438;&#x437;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D; &#x441; &#x444;&#x442;&#x43E;&#x440;&#x43E;&#x43C;: XeF<sub>2</sub>, XeF<sub>4</sub>, XeF<sub>6</sub>, XeF<sub>8</sub>, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442; &#x432; &#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445;, &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44F; &#x43D;&#x438;&#x43A;&#x435;&#x43B;&#x435;&#x432;&#x443;&#x44E; &#x430;&#x43F;&#x43F;&#x430;&#x440;&#x430;&#x442;&#x443;&#x440;&#x443;. &#x422;&#x430;&#x43A;, &#x425;&#x435;F<sub>4</sub> &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C; &#x43F;&#x440;&#x438; &#x43F;&#x440;&#x43E;&#x441;&#x442;&#x43E;&#x43C; &#x43F;&#x440;&#x43E;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x43D;&#x438;&#x438; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x425;&#x435; &#x438; F<sub>2</sub> &#x447;&#x435;&#x440;&#x435;&#x437; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x442;&#x443;&#x44E; &#x43D;&#x438;&#x43A;&#x435;&#x43B;&#x435;&#x432;&#x443;&#x44E; &#x442;&#x440;&#x443;&#x431;&#x43A;&#x443;. &#x421;&#x438;&#x43D;&#x442;&#x435;&#x437; XeF<sub>2</sub> &#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x435;&#x43D; &#x43F;&#x440;&#x438; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x425;&#x435; &#x438; F<sub>2</sub> &#x443;&#x43B;&#x44C;&#x442;&#x440;&#x430;&#x444;&#x438;&#x43E;&#x43B;&#x435;&#x442;&#x43E;&#x432;&#x44B;&#x43C; &#x438;&#x437;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x435;&#x43C;. &#x41F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x436;&#x435; &#x444;&#x442;&#x43E;&#x440;&#x438;&#x434;&#x44B; XeF<sub>6</sub> &#x438; XeF<sub>8</sub> &#x443;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x43F;&#x440;&#x438; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x432;&#x44B;&#x441;&#x43E;&#x43A;&#x438;&#x445; &#x434;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x439; (&#x434;&#x43E; 20 &#x41C;&#x43D;/&#x43C;<sup>2</sup>, &#x438;&#x43B;&#x438; 200 &#x430;&#x442;) &#x438; &#x43F;&#x43E;&#x432;&#x44B;&#x448;&#x435;&#x43D;&#x43D;&#x43E;&#x439; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B; (300-600 &#xB0;&#x421;). &#x425;&#x435;F<sub>4</sub> &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; (&#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x432;&#x440;&#x435;&#x43C;&#x44F; &#x441;&#x43E;&#x445;&#x440;&#x430;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x43A;&#x43E;&#x43C;&#x43D;&#x430;&#x442;&#x43D;&#x43E;&#x439; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435;), &#x43D;&#x430;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; XeF<sub>8</sub> (&#x441;&#x43E;&#x445;&#x440;&#x430;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435; &#x43D;&#x438;&#x436;&#x435; 77 &#x41A;). &#x41F;&#x440;&#x438; &#x43E;&#x441;&#x442;&#x43E;&#x440;&#x43E;&#x436;&#x43D;&#x43E;&#x43C; &#x443;&#x43F;&#x430;&#x440;&#x438;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430; XeF<sub>4</sub> &#x432; &#x432;&#x43E;&#x434;&#x435; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432;&#x435;&#x441;&#x44C;&#x43C;&#x430; &#x43D;&#x435;&#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x439; &#x43D;&#x435;&#x43B;&#x435;&#x442;&#x443;&#x447;&#x438;&#x439; &#x43E;&#x43A;&#x441;&#x438;&#x434; &#x425;&#x435;&#x41E;<sub>3</sub> - &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x447;&#x430;&#x442;&#x43E;&#x435; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;. &#x414;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x435;&#x43C; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430; &#x412;&#x430;(&#x41E;&#x41D;)<sub>2</sub> &#x43D;&#x430; XeF<sub>6</sub> &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x43A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430;&#x442; &#x431;&#x430;&#x440;&#x438;&#x44F; &#x412;&#x430;<sub>3</sub>&#x425;&#x435;&#x41E;<sub>6</sub> &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438; &#x441;&#x43E;&#x43B;&#x438;, &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x449;&#x438;&#x435; &#x432;&#x43E;&#x441;&#x44C;&#x43C;&#x438;&#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x44B;&#x439; &#x41A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;, - &#x43F;&#x435;&#x440;&#x43A;&#x441;&#x435;&#x43D;&#x43E;&#x43D;&#x430;&#x442;&#x44B;, &#x43D;&#x430;&#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440; Na<sub>4</sub>&#x425;&#x435;&#x41E;<sub>6</sub>&#xB7;6&#x41D;<sub>2</sub>&#x41E;. &#x414;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x44F; &#x43D;&#x430; &#x43D;&#x435;&#x433;&#x43E; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x43E;&#x439;, &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x432;&#x44B;&#x441;&#x448;&#x438;&#x439; &#x43E;&#x43A;&#x441;&#x438;&#x434; &#x425;&#x435;O<sub>4</sub>. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x434;&#x432;&#x43E;&#x439;&#x43D;&#x44B;&#x435; &#x441;&#x43E;&#x43B;&#x438; XeF<sub>2&#xB7;</sub>2SbF<sub>5</sub>, XeF<sub>6</sub>&#xB7;AsF<sub>3</sub> &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445;, &#x43F;&#x435;&#x440;&#x445;&#x43B;&#x43E;&#x440;&#x430;&#x442; &#x425;&#x435;Cl&#x41E;<sub>4</sub>- &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;.\n",
        "Атомная масса": "131.29",
        "Плотность, кг/м³": "5.86",
        "Температура плавления, °С": "-111.9",
        "Температура кипения, °С": "-108",
        "Теплоемкость, кДж/(кг·°С)": "0.158",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "1.31",
        "1-й ионизац. потенциал, эв": "12.13"
    },
    {
        "Химический символ": "Cs",
        "label": "Цезий Caesium",
        "color": "0x5422ED",
        "shadow": "0x511DEB",
        "Электронная формула": "(Xe)6s1",
        "description": "<b>&#x426;&#x435;&#x437;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Caesium), Cs, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 55, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 132, 9054; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x432;&#x438;&#x434;&#x435; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>133</sup>Cs. &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 113 &#x434;&#x43E; 148 &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; <sup>137</sup>Cs &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 33 &#x433;&#x43E;&#x434;&#x430;.\n",
        "Атомная масса": "132.91",
        "Плотность, кг/м³": "1900",
        "Температура плавления, °С": "28.5",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.218",
        "Электроотрицательность": "0.7",
        "Ковалентный радиус, Å": "2.35",
        "1-й ионизац. потенциал, эв": "3.89"
    },
    {
        "Химический символ": "Ba",
        "label": "Барий Barium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)6s2",
        "description": "<b>&#x411;&#x430;&#x440;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Baryum), Ba, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 56, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 137,34; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x421;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; 7 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x441;&#x440;&#x435;&#x434;&#x438; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43F;&#x440;&#x435;&#x43E;&#x431;&#x43B;&#x430;&#x434;&#x430;&#x435;&#x442; <sup>138</sup>&#x412;&#x430; (71,66%). &#x41F;&#x440;&#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x43C; &#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x438; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>140</sup>&#x412;&#x430;, &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x43C;&#x44B;&#x439; &#x43A;&#x430;&#x43A; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;. &#x411;&#x430;&#x440;&#x438;&#x439; &#x431;&#x44B;&#x43B; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x41A;. &#x428;&#x435;&#x435;&#x43B;&#x435; (1774) &#x432; &#x432;&#x438;&#x434;&#x435; &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x430; &#x412;&#x430;&#x41E;, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &quot;&#x442;&#x44F;&#x436;&#x435;&#x43B;&#x43E;&#x439; &#x437;&#x435;&#x43C;&#x43B;&#x435;&#x439;&quot;, &#x438;&#x43B;&#x438; &#x431;&#x430;&#x440;&#x438;&#x442;&#x43E;&#x43C; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. barys -&#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439;). &#x41C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x411;&#x430;&#x440;&#x438;&#x439; (&#x432; &#x432;&#x438;&#x434;&#x435; &#x430;&#x43C;&#x430;&#x43B;&#x44C;&#x433;&#x430;&#x43C;&#x44B;) &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x413;. &#x414;&#x44D;&#x432;&#x438; (1808) &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x43E;&#x43C; &#x432;&#x43B;&#x430;&#x436;&#x43D;&#x43E;&#x433;&#x43E; &#x433;&#x438;&#x434;&#x440;&#x43E;&#x43E;&#x43A;&#x441;&#x438;&#x434;&#x430; &#x412;&#x430;(&#x41E;&#x41D;)<sub>2</sub>&#x441; &#x440;&#x442;&#x443;&#x442;&#x43D;&#x44B;&#x43C; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x43E;&#x43C;. &#x421;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x411;&#x430;&#x440;&#x438;&#x44F; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; 0,05% &#x43F;&#x43E; &#x43C;&#x430;&#x441;&#x441;&#x435;, &#x432; &#x441;&#x432;&#x43E;&#x431;&#x43E;&#x434;&#x43D;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x438; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43D;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F;. &#x418;&#x437; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x43E;&#x432; &#x411;&#x430;&#x440;&#x438;&#x44F; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x43C;&#x435;&#x44E;&#x442; &#x431;&#x430;&#x440;&#x438;&#x442; (&#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x448;&#x43F;&#x430;&#x442;) BaSO<sub>4</sub> &#x438; &#x440;&#x435;&#x436;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x449;&#x438;&#x439;&#x441;&#x44F; &#x432;&#x438;&#x442;&#x435;&#x440;&#x438;&#x442; &#x412;&#x430;&#x421;&#x41E;<sub>3</sub>.\n",
        "Атомная масса": "137.33",
        "Плотность, кг/м³": "3500",
        "Температура плавления, °С": "729",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.285",
        "Электроотрицательность": "0.9",
        "Ковалентный радиус, Å": "1.98",
        "1-й ионизац. потенциал, эв": "5.19"
    },
    {
        "Химический символ": "La",
        "label": "Лантан Lanthanum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)5d16s2",
        "description": "<b>&#x41B;&#x430;&#x43D;&#x442;&#x430;&#x43D;</b> (&#x43B;&#x430;&#x442;. Lanthanum), La, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 57; &#x441;&#x43C;&#x43E;&#x442;&#x440;&#x438; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x44B;</a>.\n",
        "Атомная масса": "138.91",
        "Плотность, кг/м³": "6170",
        "Температура плавления, °С": "920",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.188",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.69",
        "1-й ионизац. потенциал, эв": "5.61"
    },
    {
        "Химический символ": "Ce",
        "label": "Церий Cerium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f25d06s2",
        "description": "<b>&#x426;&#x435;&#x440;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Cerium), &#x421;&#x435;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 58, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 140,12; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "140.12",
        "Плотность, кг/м³": "6770",
        "Температура плавления, °С": "795",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.176",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.65",
        "1-й ионизац. потенциал, эв": "6.54"
    },
    {
        "Химический символ": "Pr",
        "label": "Празеодим Praseodymium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f35d06s2",
        "description": "<b>&#x41F;&#x440;&#x430;&#x437;&#x435;&#x43E;&#x434;&#x438;&#x43C;</b> (&#x43B;&#x430;&#x442;. Praseodymium), &#x420;&#x433;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 59, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 140,9077; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "140.91",
        "Плотность, кг/м³": "6780",
        "Температура плавления, °С": "935",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.201",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.65",
        "1-й ионизац. потенциал, эв": "5.76"
    },
    {
        "Химический символ": "Nd",
        "label": "Неодим Neodymium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f45d06s2",
        "description": "<b>&#x41D;&#x435;&#x43E;&#x434;&#x438;&#x43C;</b> (&#x43B;&#x430;&#x442;. Neodymium), Nd, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 60, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 144,24, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "144.24",
        "Плотность, кг/м³": "7000",
        "Температура плавления, °С": "1024",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.188",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.64",
        "1-й ионизац. потенциал, эв": "6.31"
    },
    {
        "Химический символ": "Pm",
        "label": "Прометий Promethium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f55d06s2",
        "description": "<b>&#x41F;&#x440;&#x43E;&#x43C;&#x435;&#x442;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Prometium), Pm, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 61, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; 16 &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x41F;&#x440;&#x43E;&#x43C;&#x435;&#x442;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 141-154 &#x438; 2 &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;&#x430;. &#x421;&#x430;&#x43C;&#x44B;&#x43C; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x43C; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43C;&#x430;&#x43B;&#x43E;&#x434;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43D;&#x44B;&#x439; <sup>145</sup>&#x420;m (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 18 &#x43B;&#x435;&#x442; &#x43F;&#x440;&#x438; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x43C; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x435; &#x43F;&#x443;&#x442;&#x435;&#x43C; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x437;&#x430;&#x445;&#x432;&#x430;&#x442;&#x430;). &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x435;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; &#x3B2;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>147</sup>&#x420;m (&#x422;<sub>&#xBD;</sub> = 2,7 &#x433;&#x43E;&#x434;&#x430;).\n",
        "Атомная масса": "[145]",
        "Плотность, кг/м³": "7220",
        "Температура плавления, °С": "1080",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.168",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.64",
        "1-й ионизац. потенциал, эв": "5.90"
    },
    {
        "Химический символ": "Sm",
        "label": "Самарий Samarium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f65d06s2",
        "description": "<b>&#x421;&#x430;&#x43C;&#x430;&#x440;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Samarium), Sm, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 62, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 150,4; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "150.36",
        "Плотность, кг/м³": "7540",
        "Температура плавления, °С": "1072",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.176",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.62",
        "1-й ионизац. потенциал, эв": "5.64"
    },
    {
        "Химический символ": "Eu",
        "label": "Европий Europium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f75d06s2",
        "description": "<b>&#x415;&#x432;&#x440;&#x43E;&#x43F;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Europium), Eu, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 63, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 151,96; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "151.96",
        "Плотность, кг/м³": "5260",
        "Температура плавления, °С": "826",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.163",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.85",
        "1-й ионизац. потенциал, эв": "5.67"
    },
    {
        "Химический символ": "Gd",
        "label": "Гадолиний Gadolinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f75d16s2",
        "description": "<b>&#x413;&#x430;&#x434;&#x43E;&#x43B;&#x438;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Gadolinium), Gd, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 64, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "157.25",
        "Плотность, кг/м³": "7890",
        "Температура плавления, °С": "1312",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.297",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.61",
        "1-й ионизац. потенциал, эв": "6.16"
    },
    {
        "Химический символ": "Tb",
        "label": "Тербий Terbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f95d06s2",
        "description": "<b>&#x422;&#x435;&#x440;&#x431;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Terbium), Tb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;q &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 65, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 158,9254, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "158.93",
        "Плотность, кг/м³": "8270",
        "Температура плавления, °С": "1356",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.184",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.59",
        "1-й ионизац. потенциал, эв": "5.86"
    },
    {
        "Химический символ": "Dy",
        "label": "Диспрозий Dysprosium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f105d06s2",
        "description": "<b>&#x414;&#x438;&#x441;&#x43F;&#x440;&#x43E;&#x437;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Dysprosium), Dy, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 66, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "162.50",
        "Плотность, кг/м³": "8540",
        "Температура плавления, °С": "1407",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.172",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.59",
        "1-й ионизац. потенциал, эв": "5.94"
    },
    {
        "Химический символ": "Ho",
        "label": "Гольмий Holmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f115d06s2",
        "description": "<b>&#x413;&#x43E;&#x43B;&#x44C;&#x43C;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Holmium), &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; &#x41D;&#x43E;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 67, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "164.93",
        "Плотность, кг/м³": "8800",
        "Температура плавления, °С": "1461",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.163",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.57",
        "1-й ионизац. потенциал, эв": "6.90"
    },
    {
        "Химический символ": "Er",
        "label": "Эрбий Erbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f125d06s2",
        "description": "<b>&#x42D;&#x440;&#x431;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Erbium), Er, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 68, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 167,26; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "167.26",
        "Плотность, кг/м³": "9050",
        "Температура плавления, °С": "1497",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.167",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.57",
        "1-й ионизац. потенциал, эв": "6.70"
    },
    {
        "Химический символ": "Tm",
        "label": "Тулий Thulium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f135d06s2",
        "description": "<b>&#x422;&#x443;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Thulium), Tm, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 69, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 168,9342.\n",
        "Атомная масса": "168.93",
        "Плотность, кг/м³": "9330",
        "Температура плавления, °С": "1545",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.159",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.56",
        "1-й ионизац. потенциал, эв": "6.60"
    },
    {
        "Химический символ": "Yb",
        "label": "Иттербий Ytterbium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d06s2",
        "description": "<b>&#x418;&#x442;&#x442;&#x435;&#x440;&#x431;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Ytterbium), Yb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 70, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 173,04.\n",
        "Атомная масса": "173.04",
        "Плотность, кг/м³": "6980",
        "Температура плавления, °С": "824",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.147",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": "1.70",
        "1-й ионизац. потенциал, эв": "6.22"
    },
    {
        "Химический символ": "Lu",
        "label": "Лютеций Lutetium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d16s2",
        "description": "<b>&#x41B;&#x44E;&#x442;&#x435;&#x446;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Lutetium), Lu, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 71, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 174,97, &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=la\">&#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>.\n",
        "Атомная масса": "174.97",
        "Плотность, кг/м³": "9840",
        "Температура плавления, °С": "1652",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.155",
        "Электроотрицательность": "1.2",
        "Ковалентный радиус, Å": "1.56",
        "1-й ионизац. потенциал, эв": "6.15"
    },
    {
        "Химический символ": "Hf",
        "label": "Гафний Hafnium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d26s2",
        "description": "<b>&#x413;&#x430;&#x444;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Hafnium), Hf, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 72, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 178,49; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x412; &#x441;&#x43E;&#x441;&#x442;&#x430;&#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x413;&#x430;&#x444;&#x43D;&#x438;&#x44F; &#x432;&#x445;&#x43E;&#x434;&#x44F;&#x442; 6 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 174, 176-180. &#x421;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x413;&#x430;&#x444;&#x43D;&#x438;&#x44F; &#x431;&#x44B;&#x43B;&#x43E; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x43A;&#x430;&#x437;&#x430;&#x43D;&#x43E; &#x414;.&#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x44B;&#x43C; &#x432; 1870 &#x433;&#x43E;&#x434;&#x443;. &#x412; 1921 &#x433;&#x43E;&#x434;&#x443; &#x41D;. &#x411;&#x43E;&#x440; &#x43F;&#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43B;, &#x447;&#x442;&#x43E; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x2116; 72 &#x434;&#x43E;&#x43B;&#x436;&#x435;&#x43D; &#x438;&#x43C;&#x435;&#x442;&#x44C; &#x441;&#x442;&#x440;&#x43E;&#x435;&#x43D;&#x438;&#x435; &#x430;&#x442;&#x43E;&#x43C;&#x430;, &#x43F;&#x43E;&#x434;&#x43E;&#x431;&#x43D;&#x43E;&#x435; &#x446;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x44E;, &#x438; &#x447;&#x442;&#x43E;, &#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;, &#x435;&#x433;&#x43E; &#x43D;&#x430;&#x434;&#x43E; &#x438;&#x441;&#x43A;&#x430;&#x442;&#x44C; &#x43D;&#x435; &#x441;&#x440;&#x435;&#x434;&#x438; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x432;, &#x43A;&#x430;&#x43A; &#x434;&#x443;&#x43C;&#x430;&#x43B;&#x438; &#x440;&#x430;&#x43D;&#x44C;&#x448;&#x435;, &#x430; &#x441;&#x440;&#x435;&#x434;&#x438; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x43E;&#x432; &#x446;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x44F;. &#x412;&#x435;&#x43D;&#x433;&#x435;&#x440;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x414;. &#x425;&#x435;&#x432;&#x435;&#x448;&#x438; &#x438; &#x433;&#x43E;&#x43B;&#x43B;&#x430;&#x43D;&#x434;&#x441;&#x43A;&#x438;&#x439; &#x444;&#x438;&#x437;&#x438;&#x43A; &#x414;. &#x41A;&#x43E;&#x441;&#x442;&#x435;&#x440; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43B;&#x438; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x44B; &#x446;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x438;&#x44F; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x440;&#x435;&#x43D;&#x442;&#x433;&#x435;&#x43D;&#x43E;&#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x430;&#x43B;&#x44B;&#x44E;&#x433;&#x43E; &#x430;&#x43D;&#x430;&#x43B;&#x438;&#x437;&#x430; &#x438; &#x432; 1922 &#x433;&#x43E;&#x434;&#x443; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x438;&#x43B;&#x438; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x2116; 72, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x432; &#x435;&#x433;&#x43E; &#x413;&#x430;&#x444;&#x43D;&#x438;&#x439; &#x43F;&#x43E; &#x43C;&#x435;&#x441;&#x442;&#x443; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44F; - &#x433;&#x43E;&#x440;&#x43E;&#x434;&#x443; &#x41A;&#x43E;&#x43F;&#x435;&#x43D;&#x433;&#x430;&#x433;&#x435;&#x43D;&#x443; (&#x43F;&#x43E;&#x437;&#x434;&#x43D;&#x435;&#x43B;&#x430;&#x442;. Hafnia).\n",
        "Атомная масса": "178.49",
        "Плотность, кг/м³": "13100",
        "Температура плавления, °С": "2222",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.147",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": "1.44",
        "1-й ионизац. потенциал, эв": "7.30"
    },
    {
        "Химический символ": "Ta",
        "label": "Тантал Tantalum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d36s2",
        "description": "<b>&#x422;&#x430;&#x43D;&#x442;&#x430;&#x43B;</b> (&#x43B;&#x430;&#x442;. Tantalum), &#x422;&#x430;, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 73, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 180,948; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x435;&#x440;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430; &#x441;&#x43E; &#x441;&#x43B;&#x435;&#x433;&#x43A;&#x430; &#x441;&#x432;&#x438;&#x43D;&#x446;&#x43E;&#x432;&#x44B;&#x43C; &#x43E;&#x442;&#x442;&#x435;&#x43D;&#x43A;&#x43E;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x438;&#x442;&#x441;&#x44F; &#x432; &#x432;&#x438;&#x434;&#x435; &#x434;&#x432;&#x443;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; <sup>181</sup>&#x422;&#x430; (99,99%) &#x438; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x433;&#x43E; <sup>180</sup>&#x422;&#x430; (0,012%; T<sub>&#xBD;</sub> = 10<sup>12</sup> &#x43B;&#x435;&#x442;). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>182</sup>&#x422;&#x430; (&#x422;<sub>&#xBD;</sub> = 115,1 &#x441;&#x443;&#x442;) &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442; &#x43A;&#x430;&#x43A; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x438;&#x43D;&#x434;&#x438;&#x43A;&#x430;&#x442;&#x43E;&#x440;.\n",
        "Атомная масса": "180.95",
        "Плотность, кг/м³": "16600",
        "Температура плавления, °С": "2996",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.151",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": "1.34",
        "1-й ионизац. потенциал, эв": "7.70"
    },
    {
        "Химический символ": "W",
        "label": "Вольфрам Tungsten",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d46s2",
        "description": "<b>&#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;</b> (&#x43B;&#x430;&#x442;. Wolframium), W, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43F;&#x43E;&#x440;&#x44F;&#x434;&#x43A;&#x43E;&#x432;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 74, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 183,85; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441;&#x432;&#x435;&#x442;&#x43B;&#x43E;-&#x441;&#x435;&#x440;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x43F;&#x44F;&#x442;&#x438; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 180, 182, 183, 184 &#x438; 186. &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C; &#x431;&#x44B;&#x43B; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x438; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D; &#x432; &#x432;&#x438;&#x434;&#x435; &#x432;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x43E;&#x432;&#x43E;&#x433;&#x43E; &#x430;&#x43D;&#x433;&#x438;&#x434;&#x440;&#x438;&#x434;&#x430; WO<sub>3</sub> &#x432; 1781 &#x433;&#x43E;&#x434;&#x443; &#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x41A;. &#x428;&#x435;&#x435;&#x43B;&#x435; &#x438;&#x437; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430; &#x442;&#x443;&#x43D;&#x433;&#x441;&#x442;&#x435;&#x43D;&#x430;, &#x43F;&#x43E;&#x437;&#x434;&#x43D;&#x435;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x448;&#x435;&#x435;&#x43B;&#x438;&#x442;&#x43E;&#x43C;. &#x412; 1783 &#x433;&#x43E;&#x434;&#x443; &#x438;&#x441;&#x43F;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x435; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x438; &#x431;&#x440;&#x430;&#x442;&#x44C;&#x44F; &#x434;&apos;&#x42D;&#x43B;&#x443;&#x44F;&#x440; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x43B;&#x438; WO<sub>3</sub> &#x438;&#x437; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430; &#x432;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x438;&#x442;&#x430; &#x438;, &#x432;&#x43E;&#x441;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x432; WO<sub>3</sub> &#x443;&#x433;&#x43B;&#x435;&#x440;&#x43E;&#x434;&#x43E;&#x43C;, &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B;&#x438; &#x441;&#x430;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x43D;&#x44B;&#x439; &#x438;&#x43C;&#x438; &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x43E;&#x43C;. &#x41C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B; &#x436;&#x435; &#x432;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x438;&#x442; &#x431;&#x44B;&#x43B; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x435;&#x43D; &#x435;&#x449;&#x435; &#x410;&#x433;&#x440;&#x438;&#x43A;&#x43E;&#x43B;&#x435; (16 &#x432;&#x435;&#x43A;) &#x438; &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x443; &#x43D;&#x435;&#x433;&#x43E; &quot;Spuma lupi&quot; - &#x432;&#x43E;&#x43B;&#x447;&#x44C;&#x44F; &#x43F;&#x435;&#x43D;&#x430; (&#x43D;&#x435;&#x43C;. Wolf - &#x432;&#x43E;&#x43B;&#x43A;, Rahm - &#x43F;&#x435;&#x43D;&#x430;) &#x432; &#x441;&#x432;&#x44F;&#x437;&#x438; &#x441; &#x442;&#x435;&#x43C;, &#x447;&#x442;&#x43E; &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;, &#x432;&#x441;&#x435;&#x433;&#x434;&#x430; &#x441;&#x43E;&#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x436;&#x434;&#x430;&#x44F; &#x43E;&#x43B;&#x43E;&#x432;&#x44F;&#x43D;&#x43D;&#x44B;&#x435; &#x440;&#x443;&#x434;&#x44B;, &#x43C;&#x435;&#x448;&#x430;&#x43B; &#x432;&#x44B;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x435; &#x43E;&#x43B;&#x43E;&#x432;&#x430;, &#x43F;&#x435;&#x440;&#x435;&#x432;&#x43E;&#x434;&#x44F; &#x435;&#x433;&#x43E; &#x432; &#x43F;&#x435;&#x43D;&#x443; &#x448;&#x43B;&#x430;&#x43A;&#x43E;&#x432; (&quot;&#x43F;&#x43E;&#x436;&#x438;&#x440;&#x430;&#x435;&#x442; &#x43E;&#x43B;&#x43E;&#x432;&#x43E; &#x43A;&#x430;&#x43A; &#x432;&#x43E;&#x43B;&#x43A; &#x43E;&#x432;&#x446;&#x443;&quot;). &#x412; &#x421;&#x428;&#x410; &#x438; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x441;&#x442;&#x440;&#x430;&#x43D;&#x430;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x43B;&#x441;&#x44F; &#x442;&#x430;&#x43A;&#x436;&#x435; &quot;&#x442;&#x443;&#x43D;&#x433;&#x441;&#x442;&#x435;&#x43D;&quot; (&#x43F;&#x43E;-&#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x438; - &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43A;&#x430;&#x43C;&#x435;&#x43D;&#x44C;). &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C; &#x434;&#x43E;&#x43B;&#x433;&#x43E; &#x43D;&#x435; &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x438;&#x43B; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x448;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x44F;. &#x41B;&#x438;&#x448;&#x44C; &#x432;&#x43E; &#x432;&#x442;&#x43E;&#x440;&#x43E;&#x439; &#x43F;&#x43E;&#x43B;&#x43E;&#x432;&#x438;&#x43D;&#x435; 19 &#x432;&#x435;&#x43A;&#x430; &#x43D;&#x430;&#x447;&#x430;&#x43B;&#x438; &#x438;&#x437;&#x443;&#x447;&#x430;&#x442;&#x44C; &#x432;&#x43B;&#x438;&#x44F;&#x43D;&#x438;&#x435; &#x434;&#x43E;&#x431;&#x430;&#x432;&#x43E;&#x43A; &#x412;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C; &#x43D;&#x430; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x441;&#x442;&#x430;&#x43B;&#x438;.\n",
        "Атомная масса": "183.84",
        "Плотность, кг/м³": "19300",
        "Температура плавления, °С": "3410",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.134",
        "Электроотрицательность": "1.7",
        "Ковалентный радиус, Å": "1.30",
        "1-й ионизац. потенциал, эв": "7.98"
    },
    {
        "Химический символ": "Re",
        "label": "Рений Rhenium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d56s2",
        "description": "<b>&#x420;&#x435;&#x43D;&#x438;&#x439;</b> (Rhenium), Re, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 75, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 186,207. &#x421;&#x432;&#x435;&#x442;&#x43B;&#x43E;-&#x441;&#x435;&#x440;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x43E;&#x43C; &#x420;&#x435;&#x43D;&#x438;&#x438; &#x434;&#x432;&#x430; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;: &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; <sup>185</sup>Re (37,07%) &#x438; &#x441;&#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>187</sup>Re (&#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sup>&#xBD; = 10<sup>11</sup> &#x43B;&#x435;&#x442;). &#x412; 1871 &#x433;&#x43E;&#x434;&#x443; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x43A;&#x430;&#x437;&#x430;&#x43B; &#x441;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x432;&#x435;&#x441;&#x43E;&#x43C; 190 - &#x430;&#x43D;&#x430;&#x43B;&#x43E;&#x433;&#x430; &#x43C;&#x430;&#x440;&#x433;&#x430;&#x43D;&#x446;&#x430; - &#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43B; &#x435;&#x433;&#x43E; &quot;&#x442;&#x440;&#x438;&#x43C;&#x430;&#x440;&#x433;&#x430;&#x43D;&#x446;&#x435;&#x43C;&quot;. &#x412; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x438;&#x435; &#x433;&#x43E;&#x434;&#x44B; &#x43F;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x43B;&#x43E;&#x441;&#x44C; &#x43C;&#x43D;&#x43E;&#x433;&#x43E; &#x43D;&#x435;&#x434;&#x43E;&#x441;&#x442;&#x43E;&#x432;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x441;&#x43E;&#x43E;&#x431;&#x449;&#x435;&#x43D;&#x438;&#x439; &#x43E;&#x431; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x438; &#x44D;&#x442;&#x43E;&#x433;&#x43E; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;. &#x41D;&#x43E; &#x43B;&#x438;&#x448;&#x44C; &#x432; 1925 &#x433;&#x43E;&#x434;&#x443; &#x43D;&#x435;&#x43C;&#x435;&#x446;&#x43A;&#x438;&#x435; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x438; &#x418;. &#x438; &#x412;. &#x41D;&#x43E;&#x434;&#x434;&#x430;&#x43A; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x438;&#x43B;&#x438; &#x435;&#x433;&#x43E; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x432; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x435; &#x43A;&#x43E;&#x43B;&#x443;&#x43C;&#x431;&#x438;&#x442;&#x435;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43F;&#x440;&#x43E;&#x438;&#x441;&#x445;&#x43E;&#x434;&#x438;&#x442; &#x43E;&#x442; &#x43B;&#x430;&#x442;&#x438;&#x43D;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x43D;&#x430;&#x438;&#x43C;&#x435;&#x43D;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x440;&#x435;&#x43A;&#x438; &#x420;&#x435;&#x439;&#x43D; (Rhenus) &#x432; &#x413;&#x435;&#x440;&#x43C;&#x430;&#x43D;&#x438;&#x438;.\n<p><a class=\"ogln\" name=\"m0\">&#x420;&#x430;&#x441;&#x43F;&#x440;&#x43E;&#x441;&#x442;&#x440;&#x430;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435;.</a> &#x420;&#x435;&#x43D;&#x438;&#x439; - &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x441;&#x441;&#x435;&#x44F;&#x43D;&#x43D;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;. &#x421;&#x440;&#x435;&#x434;&#x43D;&#x435;&#x435; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x435;&#x433;&#x43E; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; 7&#xB7;10<sup>-8</sup>% &#x43F;&#x43E; &#x43C;&#x430;&#x441;&#x441;&#x435;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x442;&#x440;&#x438; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430; &#x420;&#x435;&#x43D;&#x438;&#x44F; - &#x43E;&#x43A;&#x441;&#x438;&#x434;, &#x441;&#x443;&#x43B;&#x44C;&#x444;&#x438;&#x434; &#x438; &#x441;&#x443;&#x43B;&#x44C;&#x444;&#x43E;&#x440;&#x435;&#x43D;&#x430;&#x442; &#x43C;&#x435;&#x434;&#x438; CuReS<sub>4</sub> (&#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B; &#x434;&#x436;&#x435;&#x437;&#x43A;&#x430;&#x437;&#x433;&#x430;&#x43D;&#x438;&#x442;). &#x41A;&#x430;&#x43A; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x441;&#x44C; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430;&#x445; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x432;; &#x435;&#x433;&#x43E; &#x43F;&#x43E;&#x432;&#x44B;&#x448;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x446;&#x438;&#x438; &#x43E;&#x442;&#x43C;&#x435;&#x447;&#x435;&#x43D;&#x44B; &#x432; &#x43A;&#x43E;&#x43B;&#x443;&#x43C;&#x431;&#x438;&#x442;&#x430;&#x445;, &#x442;&#x430;&#x43D;&#x442;&#x430;&#x43B;&#x438;&#x442;&#x430;&#x445;, &#x446;&#x438;&#x440;&#x43A;&#x43E;&#x43D;&#x430;&#x442;&#x430;&#x445;, &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x430;&#x445; &#x440;&#x435;&#x434;&#x43A;&#x438;&#x445; &#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;, &#x441;&#x443;&#x43B;&#x44C;&#x444;&#x438;&#x434;&#x430;&#x445; &#x43C;&#x435;&#x434;&#x438; &#x438; &#x43E;&#x441;&#x43E;&#x431;&#x435;&#x43D;&#x43D;&#x43E; &#x432; &#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x438;&#x442;&#x435; MoS<sub>2</sub> (&#x43E;&#x442; 0,1 &#x434;&#x43E; 10<sup>-5</sup>%). &#x421;&#x432;&#x44F;&#x437;&#x44C; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x438;&#x442;&#x43E;&#x43C; &#x43E;&#x431;&#x443;&#x441;&#x43B;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x430; &#x438;&#x437;&#x43E;&#x43C;&#x43E;&#x440;&#x444;&#x438;&#x437;&#x43C;&#x43E;&#x43C; MoS<sub>2</sub> &#x438; ReS<sub>2</sub>. &#x412;&#x430;&#x436;&#x43D;&#x44B;&#x439; &#x438;&#x441;&#x442;&#x43E;&#x447;&#x43D;&#x438;&#x43A; &#x420;&#x435;&#x43D;&#x438;&#x44F; - &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43C;&#x435;&#x434;&#x43D;&#x44B;&#x435; &#x441;&#x443;&#x43B;&#x44C;&#x444;&#x438;&#x434;&#x43D;&#x44B;&#x435; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x442;&#x44B; (0,002- 0,005% Re).\n</p><p><a class=\"ogln\" name=\"m1\">&#x424;&#x438;&#x437;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x420;&#x435;&#x43D;&#x438;&#x44F;.</a> &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x433;&#x435;&#x43A;&#x441;&#x430;&#x433;&#x43E;&#x43D;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x443;&#x43F;&#x430;&#x43A;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x440;&#x435;&#x448;&#x435;&#x442;&#x43A;&#x435; (&#x430; = 2,760 &#xC5;, &#x441; = 4,458 &#xC5;). &#x410;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x443;&#x441; 1,373 &#xC5;, &#x438;&#x43E;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x443;&#x441; Re<sup>7+</sup> 0,56 &#xC5;. &#x41F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44C; 21,03 &#x433;/&#x441;&#x43C;<sup>3</sup>; t<sub>&#x43F;&#x43B;</sub> 3180&#xB0;&#x421;, t<sub>&#x43A;&#x438;&#x43F;</sub> 5900 &#xB0;&#x421;. &#x423;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x430;&#x44F; &#x442;&#x435;&#x43F;&#x43B;&#x43E;&#x435;&#x43C;&#x43A;&#x43E;&#x441;&#x442;&#x44C; 153 &#x434;&#x436;/(&#x43A;&#x433;&#xB7;&#x41A;), &#x438;&#x43B;&#x438; 0,03653 &#x43A;&#x430;&#x43B;/(&#x433;&#xB7;&#x433;&#x440;&#x430;&#x434;) (0-1200 &#xB0;&#x421;). &#x422;&#x435;&#x440;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x43A;&#x43E;&#x44D;&#x444;&#x444;&#x438;&#x446;&#x438;&#x435;&#x43D;&#x442; &#x43B;&#x438;&#x43D;&#x435;&#x439;&#x43D;&#x43E;&#x433;&#x43E; &#x440;&#x430;&#x441;&#x448;&#x438;&#x440;&#x435;&#x43D;&#x438;&#x44F; 6,7&#xB7;10<sup>-6</sup> (20-500 &#xB0;&#x421;). &#x423;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x43E;&#x431;&#x44A;&#x435;&#x43C;&#x43D;&#x43E;&#x435; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x435; &#x441;&#x43E;&#x43F;&#x440;&#x43E;&#x442;&#x438;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; 19,3&#xB7;10<sup>-6</sup> &#x43E;&#x43C;&#xB7;&#x441;&#x43C; (20 &#xB0;&#x421;). &#x422;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x430; &#x43F;&#x435;&#x440;&#x435;&#x445;&#x43E;&#x434;&#x430; &#x432; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x435; &#x441;&#x432;&#x435;&#x440;&#x445;&#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x434;&#x438;&#x43C;&#x43E;&#x441;&#x442;&#x438; 1,699 &#x41A;; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430; &#x432;&#x44B;&#x445;&#x43E;&#x434;&#x430; 4,80 &#x44D;&#x432;, &#x43F;&#x430;&#x440;&#x430;&#x43C;&#x430;&#x433;&#x43D;&#x438;&#x442;&#x435;&#x43D;.\n</p><p>&#x41F;&#x43E; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x43E;&#x441;&#x442;&#x438; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x443;&#x441;&#x442;&#x443;&#x43F;&#x430;&#x435;&#x442; &#x43B;&#x438;&#x448;&#x44C; &#x432;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x443;. &#x412; &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x438;&#x435; &#x43E;&#x442; &#x432;&#x43E;&#x43B;&#x44C;&#x444;&#x440;&#x430;&#x43C;&#x430;, &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x435;&#x43D; &#x432; &#x43B;&#x438;&#x442;&#x43E;&#x43C; &#x438; &#x440;&#x435;&#x43A;&#x440;&#x438;&#x441;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x438; &#x438; &#x434;&#x435;&#x444;&#x43E;&#x440;&#x43C;&#x438;&#x440;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430; &#x445;&#x43E;&#x43B;&#x43E;&#x434;&#x443;. &#x41C;&#x43E;&#x434;&#x443;&#x43B;&#x44C; &#x443;&#x43F;&#x440;&#x443;&#x433;&#x43E;&#x441;&#x442;&#x438; &#x420;&#x435;&#x43D;&#x438;&#x44F; 470 &#x413;&#x43D;/&#x43C;<sup>2</sup>, &#x438;&#x43B;&#x438; 47 000 &#x43A;&#x433;&#x441;/&#x43C;&#x43C;<sup>2</sup> (&#x432;&#x44B;&#x448;&#x435;, &#x447;&#x435;&#x43C; &#x443; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;, &#x437;&#x430; &#x438;&#x441;&#x43A;&#x43B;&#x44E;&#x447;&#x435;&#x43D;&#x438;&#x435;&#x43C; Os &#x438; Ir). &#x42D;&#x442;&#x43E; &#x43E;&#x431;&#x443;&#x441;&#x43B;&#x43E;&#x432;&#x43B;&#x438;&#x432;&#x430;&#x435;&#x442; &#x432;&#x44B;&#x441;&#x43E;&#x43A;&#x43E;&#x435; &#x441;&#x43E;&#x43F;&#x440;&#x43E;&#x442;&#x438;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x434;&#x435;&#x444;&#x43E;&#x440;&#x43C;&#x430;&#x446;&#x438;&#x438; &#x438; &#x431;&#x44B;&#x441;&#x442;&#x440;&#x44B;&#x439; &#x43D;&#x430;&#x43A;&#x43B;&#x435;&#x43F; &#x43F;&#x440;&#x438; &#x43E;&#x431;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x435; &#x434;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x435;&#x43C;. &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432;&#x44B;&#x441;&#x43E;&#x43A;&#x43E;&#x439; &#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x43F;&#x440;&#x43E;&#x447;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; &#x43F;&#x440;&#x438; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x430;&#x445; 1000-2000 &#xB0;&#x421;.\n</p><p><a class=\"ogln\" name=\"m2\">&#x425;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x420;&#x435;&#x43D;&#x438;&#x44F;.</a> &#x423; &#x430;&#x442;&#x43E;&#x43C;&#x430; Re &#x441;&#x435;&#x43C;&#x44C; &#x432;&#x43D;&#x435;&#x448;&#x43D;&#x438;&#x445; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432;; &#x43A;&#x43E;&#x43D;&#x444;&#x438;&#x433;&#x443;&#x440;&#x430;&#x446;&#x438;&#x44F; &#x432;&#x44B;&#x441;&#x448;&#x438;&#x445; &#x44D;&#x43D;&#x435;&#x440;&#x433;&#x435;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x443;&#x440;&#x43E;&#x432;&#x43D;&#x435;&#x439; 5d<sup>5</sup>6s<sup>2</sup>. &#x41D;&#x430; &#x432;&#x43E;&#x437;&#x434;&#x443;&#x445;&#x435; &#x43F;&#x440;&#x438; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x43E;&#x439; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;. &#x41E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430; &#x441; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x43E;&#x432; (ReO<sub>3</sub>, Re<sub>2</sub>O<sub>7</sub>) &#x43D;&#x430;&#x431;&#x43B;&#x44E;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430;&#x447;&#x438;&#x43D;&#x430;&#x44F; &#x441; 300 &#xB0;&#x421; &#x438; &#x438;&#x43D;&#x442;&#x435;&#x43D;&#x441;&#x438;&#x432;&#x43D;&#x43E; &#x43F;&#x440;&#x43E;&#x442;&#x435;&#x43A;&#x430;&#x435;&#x442; &#x432;&#x44B;&#x448;&#x435; 600 &#xB0;&#x421;. &#x421; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43D;&#x435; &#x440;&#x435;&#x430;&#x433;&#x438;&#x440;&#x443;&#x435;&#x442; &#x432;&#x43F;&#x43B;&#x43E;&#x442;&#x44C; &#x434;&#x43E; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x44B; &#x43F;&#x43B;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F;. &#x421; &#x430;&#x437;&#x43E;&#x442;&#x43E;&#x43C; &#x43D;&#x435; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442; &#x432;&#x43E;&#x43E;&#x431;&#x449;&#x435;. &#x420;&#x435;&#x43D;&#x438;&#x439;, &#x432; &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x438;&#x435; &#x43E;&#x442; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;, &#x43D;&#x435; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442; &#x43A;&#x430;&#x440;&#x431;&#x438;&#x434;&#x43E;&#x432;. &#x424;&#x442;&#x43E;&#x440; &#x438; &#x445;&#x43B;&#x43E;&#x440; &#x440;&#x435;&#x430;&#x433;&#x438;&#x440;&#x443;&#x44E;&#x442; &#x441; &#x420;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x441; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; ReF<sub>6</sub> &#x438; ReCl<sub>5</sub>, &#x441; &#x431;&#x440;&#x43E;&#x43C;&#x43E;&#x43C; &#x438; &#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x43D;&#x435;&#x43F;&#x43E;&#x441;&#x440;&#x435;&#x434;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43D;&#x435; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443;&#x435;&#x442;. &#x41F;&#x430;&#x440;&#x44B; &#x441;&#x435;&#x440;&#x44B; &#x43F;&#x440;&#x438; 700-800 &#xB0;&#x421; &#x434;&#x430;&#x44E;&#x442; &#x441; &#x420;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x441;&#x443;&#x43B;&#x44C;&#x444;&#x438;&#x434; ReS<sub>2</sub>.\n</p><p>&#x420;&#x435;&#x43D;&#x438;&#x439; &#x43D;&#x435; &#x43A;&#x43E;&#x440;&#x440;&#x43E;&#x434;&#x438;&#x440;&#x443;&#x435;&#x442; &#x432; &#x441;&#x43E;&#x43B;&#x44F;&#x43D;&#x43E;&#x439; &#x438; &#x43F;&#x43B;&#x430;&#x432;&#x438;&#x43A;&#x43E;&#x432;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x430;&#x445; &#x43B;&#x44E;&#x431;&#x44B;&#x445; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x446;&#x438;&#x439; &#x43D;&#x430; &#x445;&#x43E;&#x43B;&#x43E;&#x434;&#x443; &#x438; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x434;&#x43E; 100 &#xB0;&#x421;. &#x412; &#x430;&#x437;&#x43E;&#x442;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x435;, &#x433;&#x43E;&#x440;&#x44F;&#x447;&#x435;&#x439; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x435;, &#x432; &#x43F;&#x435;&#x440;&#x43E;&#x43A;&#x441;&#x438;&#x434;&#x435; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x430; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x441; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; &#x440;&#x435;&#x43D;&#x438;&#x435;&#x432;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B;. &#x412; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430;&#x445; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x435;&#x439; &#x43F;&#x440;&#x438; &#x43D;&#x430;&#x433;&#x440;&#x435;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43C;&#x435;&#x434;&#x43B;&#x435;&#x43D;&#x43D;&#x43E; &#x43A;&#x43E;&#x440;&#x440;&#x43E;&#x434;&#x438;&#x440;&#x443;&#x435;&#x442;, &#x440;&#x430;&#x441;&#x43F;&#x43B;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x438; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x44F;&#x44E;&#x442; &#x435;&#x433;&#x43E; &#x431;&#x44B;&#x441;&#x442;&#x440;&#x43E;.\n</p><p>&#x414;&#x43B;&#x44F; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x432;&#x441;&#x435; &#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x44B;&#x435; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x44F; &#x43E;&#x442; +7 &#x434;&#x43E; -1, &#x447;&#x442;&#x43E; &#x43E;&#x431;&#x443;&#x441;&#x43B;&#x43E;&#x432;&#x43B;&#x438;&#x432;&#x430;&#x435;&#x442; &#x43C;&#x43D;&#x43E;&#x433;&#x43E;&#x447;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x438; &#x440;&#x430;&#x437;&#x43D;&#x43E;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x438;&#x435; &#x435;&#x433;&#x43E; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x439;. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x441;&#x435;&#x43C;&#x438;&#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x43E;&#x433;&#x43E; &#x420;&#x435;&#x43D;&#x438;&#x44F;. &#x420;&#x435;&#x43D;&#x438;&#x435;&#x432;&#x44B;&#x439; &#x430;&#x43D;&#x433;&#x438;&#x434;&#x440;&#x438;&#x434; Re&#x41E;<sub>7</sub> - &#x441;&#x432;&#x435;&#x442;&#x43B;&#x43E;-&#x436;&#x435;&#x43B;&#x442;&#x43E;&#x435; &#x432;&#x435;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;, &#x445;&#x43E;&#x440;&#x43E;&#x448;&#x43E; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x438;&#x43C;&#x43E;&#x435; &#x432; &#x432;&#x43E;&#x434;&#x435;. &#x420;&#x435;&#x43D;&#x438;&#x435;&#x432;&#x430;&#x44F; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x430; HReO<sub>4</sub> - &#x431;&#x435;&#x441;&#x446;&#x432;&#x435;&#x442;&#x43D;&#x430;&#x44F;, &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x430;&#x44F;; &#x441;&#x440;&#x430;&#x432;&#x43D;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E; &#x441;&#x43B;&#x430;&#x431;&#x44B;&#x439; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C; (&#x432; &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x438;&#x435; &#x43E;&#x442; &#x43C;&#x430;&#x440;&#x433;&#x430;&#x43D;&#x446;&#x435;&#x432;&#x43E;&#x439; HMnO<sub>4</sub>). &#x41F;&#x440;&#x438; &#x432;&#x437;&#x430;&#x438;&#x43C;&#x43E;&#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x438; HReO<sub>4</sub> &#x441; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x430;&#x43C;&#x438;, &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x430;&#x43C;&#x438; &#x438;&#x43B;&#x438; &#x43A;&#x430;&#x440;&#x431;&#x43E;&#x43D;&#x430;&#x442;&#x430;&#x43C;&#x438; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x435;&#x435; &#x441;&#x43E;&#x43B;&#x438; - &#x43F;&#x435;&#x440;&#x440;&#x435;&#x43D;&#x430;&#x442;&#x44B;. &#x421;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x438;&#x43D;&#x44B;&#x445; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x435;&#x439; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x420;&#x435;&#x43D;&#x438;&#x44F; - &#x43E;&#x440;&#x430;&#x43D;&#x436;&#x435;&#x432;&#x43E;-&#x43A;&#x440;&#x430;&#x441;&#x43D;&#x44B;&#x439; &#x43E;&#x43A;&#x441;&#x438;&#x434; (VI) R&#x435;&#x41E;<sub>3</sub>, &#x442;&#x435;&#x43C;&#x43D;&#x43E;-&#x43A;&#x43E;&#x440;&#x438;&#x447;&#x43D;&#x435;&#x432;&#x44B;&#x439; &#x43E;&#x43A;&#x441;&#x438;&#x434; (IV) ReO<sub>2</sub>, &#x43B;&#x435;&#x433;&#x43A;&#x43E;&#x43B;&#x435;&#x442;&#x443;&#x447;&#x438;&#x435; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x44B; &#x438; &#x43E;&#x43A;&#x441;&#x438;&#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x44B; ReCl<sub>5</sub>, ReOCl<sub>4</sub>, ReO<sub>3</sub>Cl &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;.\n</p><p><a class=\"ogln\" name=\"m3\">&#x41F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x420;&#x435;&#x43D;&#x438;&#x44F;.</a> &#x41E;&#x441;&#x43D;&#x43E;&#x432;&#x43D;&#x44B;&#x43C; &#x438;&#x441;&#x442;&#x43E;&#x447;&#x43D;&#x438;&#x43A;&#x43E;&#x43C; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x441;&#x43B;&#x443;&#x436;&#x430;&#x442; &#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x438;&#x442;&#x43E;&#x432;&#x44B;&#x435; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x442;&#x44B; (&#x441; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435;&#x43C; Re 0,01-0,04%) &#x438; &#x43C;&#x435;&#x434;&#x43D;&#x44B;&#x435; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x442;&#x44B; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43C;&#x435;&#x441;&#x442;&#x43E;&#x440;&#x43E;&#x436;&#x434;&#x435;&#x43D;&#x438;&#x439; &#x43C;&#x435;&#x434;&#x438; (&#x441; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435;&#x43C; Re 0,002-0,003%). &#x41F;&#x440;&#x438; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x43E;&#x431;&#x436;&#x438;&#x433;&#x435; &#x43C;&#x43E;&#x43B;&#x438;&#x431;&#x434;&#x435;&#x43D;&#x438;&#x442;&#x43E;&#x432;&#x44B;&#x445; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x442;&#x43E;&#x432; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x443;&#x434;&#x430;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x441; &#x43F;&#x435;&#x447;&#x43D;&#x44B;&#x43C;&#x438; &#x433;&#x430;&#x437;&#x430;&#x43C;&#x438; &#x432; &#x432;&#x438;&#x434;&#x435; Re<sub>2</sub>O<sub>7</sub> (t<sub>&#x43A;&#x438;&#x43F;</sub> 360 &#xB0;&#x421;), &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x430;&#x44F; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x440;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x430;&#x445; &#x43F;&#x44B;&#x43B;&#x435;&#x443;&#x43B;&#x43E;&#x432;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C; (&#x448;&#x43B;&#x430;&#x43C;&#x430;&#x445;, &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430;&#x445;). &#x41D;&#x430; &#x440;&#x430;&#x437;&#x43B;&#x438;&#x447;&#x43D;&#x44B;&#x445; &#x441;&#x442;&#x430;&#x434;&#x438;&#x44F;&#x445; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x430; &#x447;&#x435;&#x440;&#x43D;&#x43E;&#x432;&#x43E;&#x439; &#x43C;&#x435;&#x434;&#x438; &#x438;&#x437; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x430;&#x442;&#x43E;&#x432; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x443;&#x434;&#x430;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x441; &#x433;&#x430;&#x437;&#x430;&#x43C;&#x438;. &#x415;&#x441;&#x43B;&#x438; &#x43F;&#x435;&#x447;&#x43D;&#x44B;&#x435; &#x433;&#x430;&#x437;&#x44B; &#x43D;&#x430;&#x43F;&#x440;&#x430;&#x432;&#x43B;&#x44F;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x43E; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B;, &#x420;&#x435;&#x43D;&#x438;&#x439; &#x43A;&#x43E;&#x43D;&#x446;&#x435;&#x43D;&#x442;&#x440;&#x438;&#x440;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x432;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x435; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x444;&#x438;&#x43B;&#x44C;&#x442;&#x440;&#x43E;&#x432;. &#x414;&#x43B;&#x44F; &#x438;&#x437;&#x432;&#x43B;&#x435;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x438;&#x437; &#x43F;&#x44B;&#x43B;&#x435;&#x439; &#x438; &#x448;&#x43B;&#x430;&#x43C;&#x43E;&#x432; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x44E;&#x442; &#x432;&#x44B;&#x449;&#x435;&#x43B;&#x430;&#x447;&#x438;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x441;&#x43B;&#x430;&#x431;&#x43E;&#x439; H<sub>2</sub>SO<sub>4</sub> &#x441; &#x434;&#x43E;&#x431;&#x430;&#x432;&#x43A;&#x43E;&#x439; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44F; - &#x43F;&#x438;&#x440;&#x43E;&#x43B;&#x44E;&#x437;&#x438;&#x442;&#x430;. &#x418;&#x437; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432;, &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x438;&#x437; &#x43F;&#x440;&#x43E;&#x43C;&#x44B;&#x432;&#x43D;&#x43E;&#x439; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x44B; &#x420;&#x435;&#x43D;&#x438;&#x439; &#x438;&#x437;&#x432;&#x43B;&#x435;&#x43A;&#x430;&#x44E;&#x442; &#x441;&#x43E;&#x440;&#x431;&#x446;&#x438;&#x435;&#x439; &#x438;&#x43B;&#x438; &#x44D;&#x43A;&#x441;&#x442;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x435;&#x439;. &#x41A;&#x43E;&#x43D;&#x435;&#x447;&#x43D;&#x44B;&#x43C; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x43E;&#x43C; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x435;&#x440;&#x440;&#x435;&#x43D;&#x430;&#x442; &#x430;&#x43C;&#x43C;&#x43E;&#x43D;&#x438;&#x44F; NH<sub>4</sub>ReO<sub>4</sub>. &#x412;&#x43E;&#x441;&#x441;&#x442;&#x430;&#x43D;&#x430;&#x432;&#x43B;&#x438;&#x432;&#x430;&#x44F; &#x435;&#x433;&#x43E; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C;, &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x44E;&#x442; &#x43F;&#x43E;&#x440;&#x43E;&#x448;&#x43E;&#x43A; &#x420;&#x435;&#x43D;&#x438;&#x44F;, &#x43F;&#x440;&#x435;&#x432;&#x440;&#x430;&#x449;&#x430;&#x435;&#x43C;&#x44B;&#x439; &#x437;&#x430;&#x442;&#x435;&#x43C; &#x432; &#x43A;&#x43E;&#x43C;&#x43F;&#x430;&#x43A;&#x442;&#x43D;&#x44B;&#x435; &#x437;&#x430;&#x433;&#x43E;&#x442;&#x43E;&#x432;&#x43A;&#x438; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x440;&#x43E;&#x448;&#x43A;&#x43E;&#x432;&#x43E;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x443;&#x440;&#x433;&#x438;&#x438;. &#x41F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x44E;&#x442; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x443; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x432; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x432;&#x44B;&#x445; &#x43F;&#x435;&#x447;&#x430;&#x445;.\n</p><p><a class=\"ogln\" name=\"m4\">&#x41F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x435;&#x43D;&#x438;&#x435; &#x420;&#x435;&#x43D;&#x438;&#x44F;.</a> &#x41A;&#x430;&#x43A; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x420;&#x435;&#x43D;&#x438;&#x439;, &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x441;&#x43F;&#x43B;&#x430;&#x432;&#x44B; W &#x441; Re &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442; &#x432; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x435; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43D;&#x43D;&#x44B;&#x445; &#x43F;&#x440;&#x438;&#x431;&#x43E;&#x440;&#x43E;&#x432;. &#x41A;&#x440;&#x43E;&#x43C;&#x435; &#x442;&#x43E;&#x433;&#x43E;, &#x438;&#x437; &#x420;&#x435;&#x43D;&#x438;&#x44F; &#x438; &#x435;&#x433;&#x43E; &#x441;&#x43F;&#x43B;&#x430;&#x432;&#x43E;&#x432; &#x441; W &#x438;&#x437;&#x433;&#x43E;&#x442;&#x430;&#x432;&#x43B;&#x438;&#x432;&#x430;&#x44E;&#x442; &#x442;&#x435;&#x440;&#x43C;&#x43E;&#x43F;&#x430;&#x440;&#x44B; &#x434;&#x43B;&#x44F; &#x438;&#x437;&#x43C;&#x435;&#x440;&#x435;&#x43D;&#x438;&#x44F; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440; &#x434;&#x43E; 2500 &#xB0;&#x421;, &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43A;&#x43E;&#x43D;&#x442;&#x430;&#x43A;&#x442;&#x44B; &#x438; &#x434;&#x435;&#x442;&#x430;&#x43B;&#x438; &#x442;&#x43E;&#x447;&#x43D;&#x44B;&#x445; &#x43F;&#x440;&#x438;&#x431;&#x43E;&#x440;&#x43E;&#x432;. &#x421;&#x43F;&#x43B;&#x430;&#x432;&#x44B; Re &#x441; W, &#x41C;&#x43E;, Ta &#x43E;&#x442;&#x43B;&#x438;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x432;&#x44B;&#x441;&#x43E;&#x43A;&#x43E;&#x439; &#x436;&#x430;&#x440;&#x43E;&#x43F;&#x440;&#x43E;&#x447;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E;. &#x41E;&#x43D;&#x438; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x43D;&#x44F;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x430;&#x432;&#x438;&#x430;- &#x438; &#x43A;&#x43E;&#x441;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x442;&#x435;&#x445;&#x43D;&#x438;&#x43A;&#x435;. &#x420;&#x435;&#x43D;&#x438;&#x439; &#x438; &#x435;&#x433;&#x43E; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43A;&#x430;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435; &#x44D;&#x444;&#x444;&#x435;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x43A;&#x430;&#x442;&#x430;&#x43B;&#x438;&#x437;&#x430;&#x442;&#x43E;&#x440;&#x43E;&#x432; &#x43F;&#x440;&#x438; &#x43A;&#x440;&#x435;&#x43A;&#x438;&#x43D;&#x433;&#x435; &#x43D;&#x435;&#x444;&#x442;&#x438;.\n</p></sup>",
        "Атомная масса": "186.21",
        "Плотность, кг/м³": "21000",
        "Температура плавления, °С": "3180",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.138",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.28",
        "1-й ионизац. потенциал, эв": "7.87"
    },
    {
        "Химический символ": "Os",
        "label": "Осмий Osmium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d66s2",
        "description": "<b>&#x41E;&#x441;&#x43C;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Osmium), Os, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 76, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 190,2; &#x43E;&#x434;&#x438;&#x43D; &#x438;&#x437; <a href=\"art.php?t=pt\">&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x445; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x43E;&#x432;</a>.\n",
        "Атомная масса": "190.23",
        "Плотность, кг/м³": "22500",
        "Температура плавления, °С": "3000",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.26",
        "1-й ионизац. потенциал, эв": "8.70"
    },
    {
        "Химический символ": "Ir",
        "label": "Иридий Iridium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d76s2",
        "description": "<b>&#x418;&#x440;&#x438;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Iridium), Ir, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 77, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 192,22; &#x43F;&#x440;&#x438;&#x43D;&#x430;&#x434;&#x43B;&#x435;&#x436;&#x438;&#x442; &#x43A; <a href=\"art.php?t=pt\">&#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;</a>. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x418;&#x440;&#x438;&#x434;&#x438;&#x439; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x434;&#x432;&#x443;&#x43C;&#x44F; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438;, <sup>191</sup>Ir (38,5%) &#x438; <sup>193</sup> Ir (61,5%).\n",
        "Атомная масса": "192.22",
        "Плотность, кг/м³": "22400",
        "Температура плавления, °С": "2410",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.27",
        "1-й ионизац. потенциал, эв": "9.00"
    },
    {
        "Химический символ": "Pt",
        "label": "Платина Platinum",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d96s1",
        "description": "<b>&#x41F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x430;</b> (&#x43B;&#x430;&#x442;. Platinum), Pt, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 78, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 195,09; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x442;&#x443;&#x433;&#x43E;&#x43F;&#x43B;&#x430;&#x432;&#x43A;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41E; &#x41F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x435;, &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43E; &#x440;&#x443;&#x442;&#x435;&#x43D;&#x438;&#x438;, &#x440;&#x43E;&#x434;&#x438;&#x438;, &#x43F;&#x430;&#x43B;&#x43B;&#x430;&#x434;&#x438;&#x438;, &#x43E;&#x441;&#x43C;&#x438;&#x438; &#x438; &#x438;&#x440;&#x438;&#x434;&#x438;&#x438;, &#x441;&#x43E;&#x43F;&#x443;&#x442;&#x441;&#x442;&#x432;&#x443;&#x44E;&#x449;&#x438;&#x445; &#x41F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x435; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; &#x438; &#x441;&#x445;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x441; &#x43D;&#x435;&#x44E; &#x43F;&#x43E; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430;&#x43C;, &#x441;&#x43C;. <a href=\"art.php?t=pt\">&#x41F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x432;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x44B;</a>.\n",
        "Атомная масса": "195.08",
        "Плотность, кг/м³": "21400",
        "Температура плавления, °С": "1769",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.134",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.30",
        "1-й ионизац. потенциал, эв": "9.00"
    },
    {
        "Химический символ": "Au",
        "label": "Золото Gold",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d106s1",
        "description": "<b>&#x417;&#x43E;&#x43B;&#x43E;&#x442;&#x43E;</b> (&#x43B;&#x430;&#x442;. Aurum), Au, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 79, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 196,9665; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x436;&#x435;&#x43B;&#x442;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;. &#x421;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>197</sup>&#x410;u.\n",
        "Атомная масса": "196.97",
        "Плотность, кг/м³": "19300",
        "Температура плавления, °С": "1063",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "2.4",
        "Ковалентный радиус, Å": "1.34",
        "1-й ионизац. потенциал, эв": "9.22"
    },
    {
        "Химический символ": "Hg",
        "label": "Ртуть Mercury",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d106s2",
        "description": "<b>&#x420;&#x442;&#x443;&#x442;&#x44C;</b> (&#x43B;&#x430;&#x442;. Hydrargyrum), Hg, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 80, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 200,59; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, &#x436;&#x438;&#x434;&#x43A;&#x438;&#x439; &#x43F;&#x440;&#x438; &#x43A;&#x43E;&#x43C;&#x43D;&#x430;&#x442;&#x43D;&#x43E;&#x439; &#x442;&#x435;&#x43C;&#x43F;&#x435;&#x440;&#x430;&#x442;&#x443;&#x440;&#x435;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x420;&#x442;&#x443;&#x442;&#x44C; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D;&#x430; &#x441;&#x435;&#x43C;&#x44C;&#x44E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438;: 196 (0,2%), 198 (10,0%), 199 (16,8%), 200 (23,1%), 201 (13,2%), 202 (29,8%), 204 (6,9%).\n",
        "Атомная масса": "200.59",
        "Плотность, кг/м³": "13520",
        "Температура плавления, °С": "-38.9",
        "Температура кипения, °С": "357",
        "Теплоемкость, кДж/(кг·°С)": "0.138",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.49",
        "1-й ионизац. потенциал, эв": "10.43"
    },
    {
        "Химический символ": "Tl",
        "label": "Таллий Thallium",
        "Электронная формула": "(Xe)4f145d106s26p1",
        "description": "<b>&#x422;&#x430;&#x43B;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Thallium), Tl, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 81, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 204,37; &#x43D;&#x430; &#x441;&#x432;&#x435;&#x436;&#x435;&#x43C; &#x440;&#x430;&#x437;&#x440;&#x435;&#x437;&#x435; &#x441;&#x435;&#x440;&#x44B;&#x439; &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x440;&#x435;&#x434;&#x43A;&#x438;&#x43C; &#x440;&#x430;&#x441;&#x441;&#x435;&#x44F;&#x43D;&#x43D;&#x44B;&#x43C; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x43C;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43F;&#x440;&#x435;&#x434;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x435;&#x43D; &#x434;&#x432;&#x443;&#x43C;&#x44F; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438; <sup>203</sup>Tl (29,5%) &#x438; <sup>205</sup>Tl (70,5%) &#x438; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x43C;&#x438; <sup>207</sup>Tl - <sup>210</sup>Tl - &#x447;&#x43B;&#x435;&#x43D;&#x430;&#x43C;&#x438; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432;. &#x418;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; <sup>202</sup>Tl (&#x422;<sub>&#xBD;</sub> = 12,5 &#x441;&#x443;&#x442;), <sup>204</sup>Tl (T<sub>&#xBD;</sub>= 4,26 &#x433;&#x43E;&#x434;&#x430;), <sup>206</sup>Tl (&#x422;<sub>&#xBD;</sub> = 4,19 &#x43C;&#x438;&#x43D;) &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;. &#x422;&#x430;&#x43B;&#x43B;&#x438;&#x439; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1861&#x433;&#x43E;&#x434;&#x443; &#x423;. &#x41A;&#x440;&#x443;&#x43A;&#x441;&#x43E;&#x43C; &#x432; &#x448;&#x43B;&#x430;&#x43C;&#x435; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x441;&#x442;&#x432;&#x430; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x441;&#x43A;&#x43E;&#x43F;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x437;&#x435;&#x43B;&#x435;&#x43D;&#x43E;&#x439; &#x43B;&#x438;&#x43D;&#x438;&#x438; &#x432; &#x441;&#x43F;&#x435;&#x43A;&#x442;&#x440;&#x435; (&#x43E;&#x442;&#x441;&#x44E;&#x434;&#x430; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435;: &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. thallos - &#x43C;&#x43E;&#x43B;&#x43E;&#x434;&#x430;&#x44F;, &#x437;&#x435;&#x43B;&#x435;&#x43D;&#x430;&#x44F; &#x432;&#x435;&#x442;&#x43A;&#x430;). &#x412; 1862 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x41A;. &#x41E;. &#x41B;&#x430;&#x43C;&#x438; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x43B; &#x422;&#x430;&#x43B;&#x43B;&#x438;&#x439; &#x438; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x43B; &#x435;&#x433;&#x43E; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x443;&#x44E; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x443;.\n",
        "Атомная масса": "204.38",
        "Плотность, кг/м³": "11850",
        "Температура плавления, °С": "303",
        "Температура кипения, °С": "1457",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.48",
        "1-й ионизац. потенциал, эв": "9.01"
    },
    {
        "Химический символ": "Pb",
        "label": "Свинец Lead",
        "Электронная формула": "(Xe)4f145d106s26p2",
        "description": "<b>&#x421;&#x432;&#x438;&#x43D;&#x435;&#x446;</b> (&#x43B;&#x430;&#x442;. Plumbum), Pb, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; IV &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 82, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 207,2. &#x421;&#x432;&#x438;&#x43D;&#x435;&#x446; - &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x433;&#x43E;&#x43B;&#x443;&#x431;&#x43E;&#x432;&#x430;&#x442;&#x43E;-&#x441;&#x435;&#x440;&#x43E;&#x433;&#x43E; &#x446;&#x432;&#x435;&#x442;&#x430;, &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439;, &#x43C;&#x44F;&#x433;&#x43A;&#x438;&#x439; (&#x440;&#x435;&#x436;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x43E;&#x436;&#x43E;&#x43C;, &#x446;&#x430;&#x440;&#x430;&#x43F;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x43E;&#x433;&#x442;&#x435;&#x43C;). &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x421;&#x432;&#x438;&#x43D;&#x435;&#x446; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; 5 &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 202 (&#x441;&#x43B;&#x435;&#x434;&#x44B;), 204 (1,5%), 206 (23,6%), 207 (22,6%), 208 (52,3%). &#x41F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x438;&#x435; &#x442;&#x440;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; - &#x43A;&#x43E;&#x43D;&#x435;&#x447;&#x43D;&#x44B;&#x435; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x44B; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x43F;&#x440;&#x435;&#x432;&#x440;&#x430;&#x449;&#x435;&#x43D;&#x438;&#x439; <sup>238</sup>U, <sup>235</sup>U &#x438; <sup>232</sup>Th. &#x41F;&#x440;&#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x44F;&#x445; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x43C;&#x43D;&#x43E;&#x433;&#x43E;&#x447;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x421;&#x432;&#x438;&#x43D;&#x446;&#x430;.\n",
        "Атомная масса": "207.2",
        "Плотность, кг/м³": "11400",
        "Температура плавления, °С": "327.4",
        "Температура кипения, °С": "1740",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "1.8",
        "Ковалентный радиус, Å": "1.47",
        "1-й ионизац. потенциал, эв": "7.37"
    },
    {
        "Химический символ": "Bi",
        "label": "Висмут Bismuth",
        "Электронная формула": "(Xe)4f145d106s26p3",
        "description": "<b>&#x412;&#x438;&#x441;&#x43C;&#x443;&#x442;</b> (&#x43B;&#x430;&#x442;. Bismuthum), Bi, &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; V &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 83, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 208,980; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x441;&#x435;&#x440;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B; &#x441; &#x440;&#x43E;&#x437;&#x43E;&#x432;&#x430;&#x442;&#x44B;&#x43C; &#x43E;&#x442;&#x442;&#x435;&#x43D;&#x43A;&#x43E;&#x43C;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x412;&#x438;&#x441;&#x43C;&#x443;&#x442; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>209</sup>Bi.\n",
        "Атомная масса": "208.98",
        "Плотность, кг/м³": "9800",
        "Температура плавления, °С": "271.3",
        "Температура кипения, °С": "1560",
        "Теплоемкость, кДж/(кг·°С)": "0.142",
        "Электроотрицательность": "1.9",
        "Ковалентный радиус, Å": "1.46",
        "1-й ионизац. потенциал, эв": "7.29"
    },
    {
        "Химический символ": "Po",
        "label": "Полоний Polonium",
        "Электронная формула": "(Xe)4f145d106s26p4",
        "description": "<b>&#x41F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Polonium), Po, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VI &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 84. &#x41F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x439; - &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x44B;&#x439; &#x43F;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x43C; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430;&#x43C; &#x41F;. &#x41A;&#x44E;&#x440;&#x438; &#x438; &#x41C;. &#x421;&#x43A;&#x43B;&#x43E;&#x434;&#x43E;&#x432;&#x441;&#x43A;&#x43E;&#x439;-&#x41A;&#x44E;&#x440;&#x438; &#x432; 1898 &#x433;&#x43E;&#x434;&#x443;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x41F;&#x43E;&#x43B;&#x44C;&#x448;&#x438; (&#x43B;&#x430;&#x442;. Polonia) - &#x440;&#x43E;&#x434;&#x438;&#x43D;&#x44B; &#x41C;. &#x421;&#x43A;&#x43B;&#x43E;&#x434;&#x43E;&#x432;&#x441;&#x43A;&#x43E;&#x439;-&#x41A;&#x44E;&#x440;&#x438;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; 25 &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x41F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 194 &#x434;&#x43E; 218. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x43C; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x3B1;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>209</sup>&#x420;&#x43E; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub>= 103 &#x433;&#x43E;&#x434;&#x430;). &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; 7 &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x41F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x439; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 210-212, 214-216 &#x438; 218 &#x43A;&#x430;&#x43A; &#x447;&#x43B;&#x435;&#x43D;&#x44B; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432; &#x443;&#x440;&#x430;&#x43D;&#x430;, &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x443;&#x440;&#x430;&#x43D;&#x430; &#x438; &#x442;&#x43E;&#x440;&#x438;&#x44F;. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; &#x438;&#x437; &#x43D;&#x438;&#x445; &#x3B1;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>210</sup>&#x420;&#x43E; (&#x422;<sub>&#xBD;</sub> = 138 &#x441;&#x443;&#x442;). &#x41C;&#x438;&#x43B;&#x43B;&#x438;&#x433;&#x440;&#x430;&#x43C;&#x43C;&#x43E;&#x432;&#x44B;&#x435; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430; <sup>210</sup>&#x420;&#x43E; &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x442;&#x44C; &#x43D;&#x435; &#x442;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x438;&#x437; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x43E;&#x431;&#x44A;&#x435;&#x43A;&#x442;&#x43E;&#x432;, &#x43D;&#x43E; &#x438; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x441; &#x432;&#x438;&#x441;&#x43C;&#x443;&#x442;&#x43E;&#x43C;. &#x41F;&#x440;&#x430;&#x43A;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x432;&#x441;&#x435; &#x441;&#x432;&#x435;&#x434;&#x435;&#x43D;&#x438;&#x44F; &#x43E; &#x41F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x441; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x435;&#x43C; <sup>210</sup>&#x420;&#x43E;.\n",
        "Атомная масса": "[209]",
        "Плотность, кг/м³": "9300",
        "Температура плавления, °С": "254",
        "Температура кипения, °С": "962",
        "Теплоемкость, кДж/(кг·°С)": "0.125",
        "Электроотрицательность": "2.0",
        "Ковалентный радиус, Å": "1.46",
        "1-й ионизац. потенциал, эв": "8.43"
    },
    {
        "Химический символ": "At",
        "label": "Астат Astatine",
        "Электронная формула": "(Xe)4f145d106s26p5",
        "description": "<b>&#x410;&#x441;&#x442;&#x430;&#x442;</b> (&#x43B;&#x430;&#x442;. Astatium) , &#x430;&#x441;&#x442;&#x430;&#x442;&#x438;&#x43D;, At, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 85. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x443; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x43D;&#x435;&#x442;; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x43D;&#x435; &#x43C;&#x435;&#x43D;&#x435;&#x435; 20 &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430;, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>210</sup>At &#x438;&#x43C;&#x435;&#x435;&#x442; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> 8,3 &#x447;. &#x41C;&#x43D;&#x43E;&#x433;&#x43E;&#x43A;&#x440;&#x430;&#x442;&#x43D;&#x44B;&#x435; &#x43F;&#x43E;&#x43F;&#x44B;&#x442;&#x43A;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x437;&#x43D;&#x44B;&#x445; &#x441;&#x442;&#x440;&#x430;&#x43D; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x44C; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x2116; 85 &#x432;&#x441;&#x435;&#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x44B;&#x43C;&#x438; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x438; &#x444;&#x438;&#x437;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x430;&#x43C;&#x438; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x43E;&#x431;&#x44A;&#x435;&#x43A;&#x442;&#x430;&#x445; &#x431;&#x44B;&#x43B;&#x438; &#x43D;&#x435;&#x443;&#x434;&#x430;&#x447;&#x43D;&#x44B;. &#x412; 1940 &#x433;&#x43E;&#x434;&#x443; &#x42D;. &#x421;&#x435;&#x433;&#x440;&#x435;, T. &#x41A;&#x43E;&#x440;&#x441;&#x43E;&#x43D; &#x438; &#x423;. &#x41C;&#x430;&#x43A;-&#x41A;&#x435;&#x43D;&#x437;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B;&#x438; &#x43D;&#x430; &#x446;&#x438;&#x43A;&#x43B;&#x43E;&#x442;&#x440;&#x43E;&#x43D;&#x435; &#x432; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438; (&#x421;&#x428;&#x410;) &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>211</sup>At, &#x431;&#x43E;&#x43C;&#x431;&#x430;&#x440;&#x434;&#x438;&#x440;&#x443;&#x44F; &#x432;&#x438;&#x441;&#x43C;&#x443;&#x442; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x430;&#x43C;&#x438;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &quot;&#x410;&#x441;&#x442;&#x430;&#x442;&quot; &#x434;&#x430;&#x43D;&#x43E; &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. astatos- &#x43D;&#x435;&#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x439;. &#x41B;&#x438;&#x448;&#x44C; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x44D;&#x442;&#x43E;&#x433;&#x43E; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x431;&#x44B;&#x43B;&#x43E; &#x43F;&#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43D;&#x43E;, &#x447;&#x442;&#x43E; 4 &#x435;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; (<sup>215</sup>At, <sup>216</sup>At, <sup>218</sup>At &#x438; <sup>219</sup>At) &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x43C;&#x430;&#x43B;&#x43E;&#x432;&#x435;&#x440;&#x43E;&#x44F;&#x442;&#x43D;&#x44B;&#x445; (5&#xB7;10<sup>-5</sup>-0,02%) &#x43E;&#x442;&#x432;&#x435;&#x442;&#x432;&#x43B;&#x435;&#x43D;&#x438;&#x44F;&#x445; &#x442;&#x440;&#x435;&#x445; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x433;&#x43E; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x438; &#x442;&#x43E;&#x440;&#x438;&#x44F;. &#x410;&#x441;&#x442;&#x430;&#x442; &#x445;&#x43E;&#x440;&#x43E;&#x448;&#x43E; &#x430;&#x434;&#x441;&#x43E;&#x440;&#x431;&#x438;&#x440;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x445; (Ag, Au, Pt), &#x43B;&#x435;&#x433;&#x43A;&#x43E; &#x438;&#x441;&#x43F;&#x430;&#x440;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43E;&#x431;&#x44B;&#x447;&#x43D;&#x44B;&#x445; &#x443;&#x441;&#x43B;&#x43E;&#x432;&#x438;&#x44F;&#x445; &#x438; &#x432; &#x432;&#x430;&#x43A;&#x443;&#x443;&#x43C;&#x435;. &#x411;&#x43B;&#x430;&#x433;&#x43E;&#x434;&#x430;&#x440;&#x44F; &#x44D;&#x442;&#x43E;&#x43C;&#x443; &#x443;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x442;&#x44C; &#x410;&#x441;&#x442;&#x430;&#x442; (&#x434;&#x43E; 85%) &#x438;&#x437; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442;&#x43E;&#x432; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x432;&#x438;&#x441;&#x43C;&#x443;&#x442;&#x430; &#x43F;&#x443;&#x442;&#x435;&#x43C; &#x438;&#x445; &#x432;&#x430;&#x43A;&#x443;&#x443;&#x43C;&#x43D;&#x43E;&#x439; &#x434;&#x438;&#x441;&#x442;&#x438;&#x43B;&#x43B;&#x44F;&#x446;&#x438;&#x438; &#x441; &#x43F;&#x43E;&#x433;&#x43B;&#x43E;&#x449;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x43E;&#x43C; &#x438;&#x43B;&#x438; &#x43F;&#x43B;&#x430;&#x442;&#x438;&#x43D;&#x43E;&#x439;. &#x425;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x438;&#x43D;&#x442;&#x435;&#x440;&#x435;&#x441;&#x43D;&#x44B; &#x438; &#x441;&#x432;&#x43E;&#x435;&#x43E;&#x431;&#x440;&#x430;&#x437;&#x43D;&#x44B;; &#x43E;&#x43D; &#x431;&#x43B;&#x438;&#x437;&#x43E;&#x43A; &#x43A;&#x430;&#x43A; &#x43A; &#x438;&#x43E;&#x434;&#x443;, &#x442;&#x430;&#x43A; &#x438; &#x43A; &#x43F;&#x43E;&#x43B;&#x43E;&#x43D;&#x438;&#x44E;, &#x442;&#x43E; &#x435;&#x441;&#x442;&#x44C; &#x43F;&#x440;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x438; &#x43D;&#x435;&#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430; (&#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;) &#x438; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;. &#x422;&#x430;&#x43A;&#x43E;&#x435; &#x441;&#x43E;&#x447;&#x435;&#x442;&#x430;&#x43D;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432; &#x43E;&#x431;&#x443;&#x441;&#x43B;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x43E;&#x436;&#x435;&#x43D;&#x438;&#x435;&#x43C; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x432; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x435;: &#x43E;&#x43D; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x43C; (&#x438; &#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;, &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &quot;&#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C;&quot;) &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x43C; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x43E;&#x432;. &#x41F;&#x43E;&#x434;&#x43E;&#x431;&#x43D;&#x43E; &#x433;&#x430;&#x43B;&#x43E;&#x433;&#x435;&#x43D;&#x430;&#x43C; &#x410;&#x441;&#x442;&#x430;&#x442; &#x434;&#x430;&#x435;&#x442; &#x43D;&#x435;&#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x438;&#x43C;&#x443;&#x44E; &#x441;&#x43E;&#x43B;&#x44C; AgAt; &#x43F;&#x43E;&#x434;&#x43E;&#x431;&#x43D;&#x43E; &#x438;&#x43E;&#x434;&#x443; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x434;&#x43E; 5-&#x432;&#x430;&#x43B;&#x435;&#x43D;&#x442;&#x43D;&#x43E;&#x433;&#x43E; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x44F; (&#x441;&#x43E;&#x43B;&#x44C; AgAtO<sub>3</sub> &#x430;&#x43D;&#x430;&#x43B;&#x43E;&#x433;&#x438;&#x447;&#x43D;&#x430; AgJO<sub>3</sub>). &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E;, &#x43A;&#x430;&#x43A; &#x438; &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x44B;, &#x410;&#x441;&#x442;&#x430;&#x442; &#x43E;&#x441;&#x430;&#x436;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x441;&#x435;&#x440;&#x43E;&#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x43E;&#x43C; &#x434;&#x430;&#x436;&#x435; &#x438;&#x437; &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x43E; &#x43A;&#x438;&#x441;&#x43B;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432;, &#x432;&#x44B;&#x442;&#x435;&#x441;&#x43D;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x446;&#x438;&#x43D;&#x43A;&#x43E;&#x43C; &#x438;&#x437; &#x441;&#x435;&#x440;&#x43D;&#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x44B;&#x445; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x43E;&#x432;, &#x430; &#x43F;&#x440;&#x438; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x43E;&#x43B;&#x438;&#x437;&#x435; &#x43E;&#x441;&#x430;&#x436;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x43D;&#x430; &#x43A;&#x430;&#x442;&#x43E;&#x434;&#x435;. &#x41F;&#x440;&#x438;&#x441;&#x443;&#x442;&#x441;&#x442;&#x432;&#x438;&#x435; &#x410;&#x441;&#x442;&#x430;&#x442;&#x430; &#x43E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x44F;&#x44E;&#x442; &#x43F;&#x43E; &#x445;&#x430;&#x440;&#x430;&#x43A;&#x442;&#x435;&#x440;&#x43D;&#x43E;&#x43C;&#x443; &#x3B1;-&#x438;&#x437;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44E;.\n",
        "Атомная масса": "[210]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": "302",
        "Температура кипения, °С": "337",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "2.2",
        "Ковалентный радиус, Å": "1.45",
        "1-й ионизац. потенциал, эв": " "
    },
    {
        "Химический символ": "Rn",
        "label": "Радон Radon",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Xe)4f145d106s26p6",
        "description": "<b>&#x420;&#x430;&#x434;&#x43E;&#x43D;</b> (&#x43B;&#x430;&#x442;. Radonum), Rn, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; VIII &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 86, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x438;&#x43D;&#x435;&#x440;&#x442;&#x43D;&#x44B;&#x43C; &#x433;&#x430;&#x437;&#x430;&#x43C;. &#x422;&#x440;&#x438; &#x3B1;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; &#x420;&#x430;&#x434;&#x43E;&#x43D; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43A;&#x430;&#x43A; &#x447;&#x43B;&#x435;&#x43D;&#x44B; &#x435;&#x441;&#x442;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432;. <sup>219</sup>Rn (&#x447;&#x43B;&#x435;&#x43D; &#x440;&#x44F;&#x434;&#x430; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x443;&#x440;&#x430;&#x43D;&#x430;; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 3,92 &#x441;&#x435;&#x43A;); <sup>220</sup>Rn (&#x440;&#x44F;&#x434; &#x442;&#x43E;&#x440;&#x438;&#x44F;, &#x422;<sub>&#xBD;</sub> = 54,5 &#x441;&#x435;&#x43A;) &#x438; <sup>222</sup>Rn (&#x440;&#x44F;&#x434; &#x443;&#x440;&#x430;&#x43D;&#x430; - &#x440;&#x430;&#x434;&#x438;&#x44F;, &#x422;<sub>&#xBD;</sub> = 3,823 &#x441;&#x443;&#x442;). &#x418;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>219</sup>Rn &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x43D; (&#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; An), <sup>220</sup>Rn - &#x442;&#x43E;&#x440;&#x43E;&#x43D; (Tn), a <sup>222</sup>Rn &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x438;&#x441;&#x442;&#x438;&#x43D;&#x43D;&#x44B;&#x43C; &#x420;&#x430;&#x434;&#x43E;&#x43D;&#x43E;&#x43C; &#x438; &#x447;&#x430;&#x441;&#x442;&#x43E; &#x43E;&#x431;&#x43E;&#x437;&#x43D;&#x430;&#x447;&#x430;&#x44E;&#x442; &#x43F;&#x440;&#x43E;&#x441;&#x442;&#x43E; &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B;&#x43E;&#x43C; Rn. &#x418;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E;, &#x441; &#x43F;&#x43E;&#x43C;&#x43E;&#x449;&#x44C;&#x44E; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x439; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43E; &#x441;&#x432;&#x44B;&#x448;&#x435; 20 &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x420;&#x430;&#x434;&#x43E;&#x43D;&#x430; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43C;&#x435;&#x436;&#x434;&#x443; 201 &#x438; 222. &#x414;&#x43B;&#x44F; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x430; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x434;&#x435;&#x444;&#x438;&#x446;&#x438;&#x442;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x420;&#x430;&#x434;&#x43E;&#x43D;&#x430; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 206-212 &#x432; &#x41E;&#x431;&#x44A;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x43D;&#x43E;&#x43C; &#x438;&#x43D;&#x441;&#x442;&#x438;&#x442;&#x443;&#x442;&#x435; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; (&#x433;. &#x414;&#x443;&#x431;&#x43D;&#x430;, &#x421;&#x421;&#x421;&#x420;) &#x441;&#x43E;&#x437;&#x434;&#x430;&#x43D;&#x430; &#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x430;&#x44F; &#x433;&#x430;&#x437;&#x43E;&#x445;&#x440;&#x43E;&#x43C;&#x430;&#x442;&#x43E;&#x433;&#x440;&#x430;&#x444;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x430;&#x44F; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430;, &#x43F;&#x43E;&#x437;&#x432;&#x43E;&#x43B;&#x44F;&#x44E;&#x449;&#x430;&#x44F; &#x437;&#x430; &#x43F;&#x43E;&#x43B;&#x447;&#x430;&#x441;&#x430; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x430;&#x442;&#x44C; &#x441;&#x443;&#x43C;&#x43C;&#x443; &#x44D;&#x442;&#x438;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x432; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x447;&#x438;&#x441;&#x442;&#x43E;&#x43C; &#x432;&#x438;&#x434;&#x435;.\n",
        "Атомная масса": "[222]",
        "Плотность, кг/м³": "9.91",
        "Температура плавления, °С": "-71",
        "Температура кипения, °С": "-62",
        "Теплоемкость, кДж/(кг·°С)": "0.09",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": "2.14",
        "1-й ионизац. потенциал, эв": "10.75"
    },
    {
        "Химический символ": "Fr",
        "label": "Франций Francium",
        "Электронная формула": "(Rn)7s1",
        "description": "<b>&#x424;&#x440;&#x430;&#x43D;&#x446;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Francium), Fr, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; I &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x449;&#x435;&#x43B;&#x43E;&#x447;&#x43D;&#x44B;&#x43C; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;&#x430;&#x43C;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 87. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x431;&#x43E;&#x43B;&#x435;&#x435; 20 &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x424;&#x440;&#x430;&#x43D;&#x446;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 203 &#x434;&#x43E; 229; &#x432;&#x441;&#x435; &#x43E;&#x43D;&#x438; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x43D;&#x435;&#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; &#x3B2;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>223</sup>Fr (&#x422;<sub>&#xBD;</sub> = 21,8 &#x43C;&#x438;&#x43D;) &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435;.\n",
        "Атомная масса": "[223]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": "27",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "0.7",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "4.08"
    },
    {
        "Химический символ": "Ra",
        "label": "Радий Radium",
        "Электронная формула": "(Rn)7s2",
        "description": "<b>&#x420;&#x430;&#x434;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Radium), Ra, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; II &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 88. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x420;&#x430;&#x434;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 204-234. &#x421;&#x430;&#x43C;&#x44B;&#x43C; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x43C; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x3B1;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>226</sup>Ra &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 1600 &#x43B;&#x435;&#x442;. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43A;&#x430;&#x43A; &#x447;&#x43B;&#x435;&#x43D;&#x44B; &#x435;&#x441;&#x442;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; <sup>222</sup>Ra (&#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; - &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439;-&#x438;&#x43A;&#x441;, &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; &#x410;&#x441;&#x425;), <sup>224</sup>Ra (&#x442;&#x43E;&#x440;&#x438;&#x439;-&#x438;&#x43A;&#x441;, ThX), <sup>226</sup>Ra &#x438; <sup>228</sup>Ra (&#x43C;&#x435;&#x437;&#x43E;&#x442;&#x43E;&#x440;&#x438;&#x439;-I, MsThI).\n",
        "Атомная масса": "[226]",
        "Плотность, кг/м³": "5000",
        "Температура плавления, °С": "700",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "0.9",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "5.28"
    },
    {
        "Химический символ": "Ac",
        "label": "Актиний Actinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)6d17s2",
        "description": "<b>&#x410;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Actinium, &#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. aktis, &#x440;&#x43E;&#x434;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43F;&#x430;&#x434;&#x435;&#x436; aktinos - &#x43B;&#x443;&#x447;), &#x410;&#x441;, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 89. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x41E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1899 &#x433;&#x43E;&#x434;&#x443; &#x444;&#x440;&#x430;&#x43D;&#x446;&#x443;&#x437;&#x441;&#x43A;&#x438;&#x43C; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x43E;&#x43C; &#x410;. &#x414;&#x435;&#x431;&#x44C;&#x435;&#x440;&#x43D;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x438;&#x437;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x43E;&#x442;&#x445;&#x43E;&#x434;&#x43E;&#x432; &#x43E;&#x442; &#x43F;&#x435;&#x440;&#x435;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x43E;&#x432;&#x43E;&#x439; &#x440;&#x443;&#x434;&#x44B;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x43E; 10 &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x410;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 221 &#x434;&#x43E; 230. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>227</sup>&#x410;&#x441; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 21,8 &#x433;&#x43E;&#x434;&#x430;) &#x438;&#x441;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x435;&#x442; &#x3B2;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B; (98,8%) &#x438; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B; (1,2%). &#x418;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; <sup>227</sup>&#x410;&#x441; &#x438; <sup>228</sup>&#x410;&#x441; (T<sub>&#xBD;</sub> = 6,13 &#x447;;, &#x435;&#x433;&#x43E; &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43C;&#x435;&#x437;&#x43E;&#x442;&#x43E;&#x440;&#x438;&#x439; II, MsThII) &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; &#x432; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x432; &#x440;&#x443;&#x434;&#x430;&#x445; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x438; &#x442;&#x43E;&#x440;&#x438;&#x44F; &#x43A;&#x430;&#x43A; &#x447;&#x43B;&#x435;&#x43D;&#x44B; &#x435;&#x441;&#x442;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;. &#x41F;&#x43E;&#x432;&#x435;&#x440;&#x445;&#x43D;&#x43E;&#x441;&#x442;&#x43D;&#x44B;&#x439; &#x441;&#x43B;&#x43E;&#x439; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x44B; &#x442;&#x43E;&#x43B;&#x449;&#x438;&#x43D;&#x43E;&#x439; 1,6 &#x43A;&#x43C; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x438;&#x442; 11 300 &#x442; <sup>227</sup>&#x410;&#x441;, &#x43D;&#x43E; &#x43F;&#x43E; &#x441;&#x440;&#x430;&#x432;&#x43D;&#x435;&#x43D;&#x438;&#x44E; &#x441; &#x434;&#x440;&#x443;&#x433;&#x438;&#x43C;&#x438; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;&#x43C;&#x438; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x410;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439; &#x432; &#x437;&#x435;&#x43C;&#x43D;&#x43E;&#x439; &#x43A;&#x43E;&#x440;&#x435; &#x43E;&#x447;&#x435;&#x43D;&#x44C; &#x43C;&#x430;&#x43B;&#x43E; (6&#xB7;10<sup>-10</sup>% &#x43F;&#x43E; &#x43C;&#x430;&#x441;&#x441;&#x435;).\n",
        "Атомная масса": "[227]",
        "Плотность, кг/м³": "10070",
        "Температура плавления, °С": "1050",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.1",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "5.17"
    },
    {
        "Химический символ": "Th",
        "label": "Торий Thorium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)6d27s2",
        "description": "<b>&#x422;&#x43E;&#x440;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Thorium), Th, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x447;&#x43B;&#x435;&#x43D; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x432;&#x445;&#x43E;&#x434;&#x44F;&#x449;&#x438;&#x445; &#x432; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x443; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 90, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 232,038; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x43E;-&#x431;&#x435;&#x43B;&#x44B;&#x439; &#x43F;&#x43B;&#x430;&#x441;&#x442;&#x438;&#x447;&#x43D;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x422;&#x43E;&#x440;&#x438;&#x439; &#x43F;&#x440;&#x430;&#x43A;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x435;&#x433;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>232</sup>Th - &#x440;&#x43E;&#x434;&#x43E;&#x43D;&#x430;&#x447;&#x430;&#x43B;&#x44C;&#x43D;&#x438;&#x43A;&#x430; &#x43E;&#x434;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x437; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432; - &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 1,39&#xB7;10<sup>10</sup> &#x43B;&#x435;&#x442; (&#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43D;&#x438;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>228</sup>Th, &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x44F;&#x449;&#x435;&#x433;&#x43E;&#x441;&#x44F; &#x441; &#x43D;&#x438;&#x43C; &#x432; &#x440;&#x430;&#x432;&#x43D;&#x43E;&#x432;&#x435;&#x441;&#x438;&#x438;, &#x43D;&#x438;&#x447;&#x442;&#x43E;&#x436;&#x43D;&#x43E; - 1,37&#xB7;10<sup>-8 </sup>%) &#x438; &#x447;&#x435;&#x442;&#x44B;&#x440;&#x435;&#x445; &#x43A;&#x43E;&#x440;&#x43E;&#x442;&#x43A;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;, &#x434;&#x432;&#x430; &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x44F;&#x442;&#x441;&#x44F; &#x43A; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x43C;&#x443; &#x440;&#x44F;&#x434;&#x443; &#x443;&#x440;&#x430;&#x43D;&#x430; - &#x440;&#x430;&#x434;&#x438;&#x44F;: <sup>234</sup>Th (&#x422;<sub>&#xBD;</sub> = 24,1 &#x441;&#x443;&#x442;) &#x438; <sup>230</sup>Th (&#x422;<sub>&#xBD;</sub> = 8,0&#xB7;10<sup>4</sup> &#x43B;&#x435;&#x442;), &#x43E;&#x441;&#x442;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x435; - &#x43A; &#x440;&#x44F;&#x434;&#x443; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F;: <sup>23l</sup>Th (&#x422;<sub>&#xBD;</sub> = 25,6 &#x447;) &#x438; <sup>227</sup>Th (&#x422;<sub>&#xBD;</sub>= 18,17 &#x441;&#x443;&#x442;). &#x418;&#x437; &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; <sup>229</sup>Th (&#x422;<sub>&#xBD;</sub> = 7340 &#x43B;&#x435;&#x442;).\n",
        "Атомная масса": "232.04",
        "Плотность, кг/м³": "11700",
        "Температура плавления, °С": "1750",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.142",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": "1.65",
        "1-й ионизац. потенциал, эв": "6.08"
    },
    {
        "Химический символ": "Pa",
        "label": "Проактиний Protactinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f26d17s2",
        "description": "<b>&#x41F;&#x440;&#x43E;&#x442;&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Protactinium), &#x420;&#x430;, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 91, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>. &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x41F;&#x440;&#x43E;&#x442;&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F; (&#x442;&#x43E;&#x447;&#x43D;&#x435;&#x435;, &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;) - &#x43A;&#x43E;&#x440;&#x43E;&#x442;&#x43A;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>234m</sup>&#x420;&#x430; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> =1,18 &#x43C;&#x438;&#x43D;) &#x431;&#x44B;&#x43B; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D; &#x432; 1913 &#x433;&#x43E;&#x434;&#x443; &#x41A;. &#x424;&#x430;&#x44F;&#x43D;&#x441;&#x43E;&#x43C; &#x438; &#x43D;&#x435;&#x43C;&#x435;&#x446;&#x43A;&#x438;&#x43C; &#x444;&#x438;&#x437;&#x438;&#x43A;&#x43E;&#x43C; &#x41E;. &#x413;&#x435;&#x440;&#x438;&#x43D;&#x433;&#x43E;&#x43C; &#x432; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x43C; &#x440;&#x44F;&#x434;&#x443; &#x443;&#x440;&#x430;&#x43D;&#x430; - &#x440;&#x430;&#x434;&#x438;&#x44F;. &#x412; 1918 &#x433;&#x43E;&#x434;&#x443; &#x41E;. &#x422;&#x430;&#x43D; &#x441;&#x43E;&#x432;&#x43C;&#x435;&#x441;&#x442;&#x43D;&#x43E; &#x441; &#x41B;. &#x41C;&#x430;&#x439;&#x442;&#x43D;&#x435;&#x440; &#x438; &#x43D;&#x435;&#x437;&#x430;&#x432;&#x438;&#x441;&#x438;&#x43C;&#x43E; &#x43E;&#x442; &#x43D;&#x438;&#x445; &#x424;. &#x421;&#x43E;&#x434;&#x434;&#x438; &#x438; &#x430;&#x43D;&#x433;&#x43B;&#x438;&#x439;&#x441;&#x43A;&#x438;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x43A; &#x414;&#x436;. &#x41A;&#x440;&#x430;&#x43D;&#x441;&#x442;&#x43E;&#x43D; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B;&#x438; &#x438; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>231</sup>&#x420;&#x430; (&#x422;<sub>&#xBD;</sub> = 32 400 &#x43B;&#x435;&#x442;), &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x44F;&#x449;&#x438;&#x439;&#x441;&#x44F; &#x43A; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x43C;&#x443; &#x440;&#x44F;&#x434;&#x443; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x443;&#x440;&#x430;&#x43D;&#x430;. &#x412; &#x44D;&#x442;&#x43E;&#x43C; &#x440;&#x44F;&#x434;&#x443; &#x41F;&#x440;&#x43E;&#x442;&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439;- &#x43F;&#x440;&#x435;&#x434;&#x448;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x438;&#x43A; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F; (&#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>227</sup>&#x410;&#x441; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x3B1;-&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x435; <sup>231</sup>&#x420;&#x430;), &#x447;&#x442;&#x43E; &#x438; &#x43E;&#x442;&#x440;&#x430;&#x436;&#x435;&#x43D;&#x43E; &#x432; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x438; &#x43F;&#x440;&#x43E;&#x442;&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x439; (&#x43E;&#x442; &#x433;&#x440;&#x435;&#x447;. &#x440;r&#x43E;tos - &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439;). &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41F;&#x440;&#x43E;&#x442;&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 224-237 &#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440; <sup>234m</sup>&#x420;&#x430;. &#x418;&#x437; &#x43D;&#x438;&#x445; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; <sup>231</sup>&#x420;&#x430; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x439; 231,0359. &#x412; &#x43F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x435; &#x43A;&#x430;&#x43A; &#x447;&#x43B;&#x435;&#x43D;&#x44B; &#x435;&#x441;&#x442;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x44B;&#x445; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x445; &#x440;&#x44F;&#x434;&#x43E;&#x432; &#x432;&#x441;&#x442;&#x440;&#x435;&#x447;&#x430;&#x44E;&#x442;&#x441;&#x44F; <sup>231</sup>&#x420;&#x430; &#x438; <sup>231</sup>&#x420;&#x430; (&#x441;&#x43F;&#x435;&#x446;&#x438;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43D;&#x435;&#x433;&#x43E; &#x443;&#x440;&#x430;&#x43D;-&#x437;&#x435;&#x442;, &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; UZ), &#x430; &#x442;&#x430;&#x43A;&#x436;&#x435; <sup>234m</sup>&#x420;&#x430; (&#x443;&#x440;&#x430;&#x43D;-&#x438;&#x43A;&#x441;-2, UX<sub>2</sub>).\n",
        "Атомная масса": "231.04",
        "Плотность, кг/м³": "15400",
        "Температура плавления, °С": "1560",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.121",
        "Электроотрицательность": "1.5",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "5.89"
    },
    {
        "Химический символ": "U",
        "label": "Уран Uranium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f36d17s2",
        "description": "<b>&#x423;&#x440;&#x430;&#x43D;</b> (&#x43B;&#x430;&#x442;. Uranium), U, &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; III &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x443; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 92, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 238,029; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;. &#x41F;&#x440;&#x438;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x439; &#x423;&#x440;&#x430;&#x43D; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x438;&#x442; &#x438;&#x437; &#x441;&#x43C;&#x435;&#x441;&#x438; &#x442;&#x440;&#x435;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432;: <sup>238</sup>U - 99,2739% &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 4,51&#xB7;10<sup>9</sup> &#x43B;&#x435;&#x442;, <sup>235</sup>U - 0,7024% (T<sub>&#xBD;</sub> = 7,13&#xB7;10<sup>8</sup> &#x43B;&#x435;&#x442;) &#x438; <sup>234</sup>U - 0,0057% (T<sub>&#xBD;</sub> = 2,48&#xB7;10<sup>5</sup> &#x43B;&#x435;&#x442;).\n",
        "Атомная масса": "238.03",
        "Плотность, кг/м³": "19050",
        "Температура плавления, °С": "1132",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.117",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": "1.42",
        "1-й ионизац. потенциал, эв": "6.05"
    },
    {
        "Химический символ": "Np",
        "label": "Нептуний Neptunium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f46d17s2",
        "description": "<b>&#x41D;&#x435;&#x43F;&#x442;&#x443;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Neptunium), Np, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 93, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x430;&#x44F; &#x43C;&#x430;&#x441;&#x441;&#x430; 237,0482. &#x41E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1940 &#x433;&#x43E;&#x434;&#x443; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x42D;. M. &#x41C;&#x430;&#x43A;&#x43C;&#x438;&#x43B;&#x43B;&#x430;&#x43D;&#x43E;&#x43C; &#x438; &#x424;. X. &#x42D;&#x439;&#x431;&#x43B;&#x441;&#x43E;&#x43D;&#x43E;&#x43C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x43B;&#x438;, &#x447;&#x442;&#x43E; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x443;&#x440;&#x430;&#x43D;&#x430; <sup>239</sup>U, &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x449;&#x438;&#x439;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; <sup>238</sup>U &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438;, &#x431;&#x44B;&#x441;&#x442;&#x440;&#x43E; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430;&#x435;&#x442;&#x441;&#x44F;, &#x438;&#x441;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x44F; &#x3B2;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x443;, &#x438; &#x43F;&#x440;&#x435;&#x432;&#x440;&#x430;&#x449;&#x430;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; &#x441; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x43C; &#x43D;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x43C; 93. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x43F;&#x440;&#x43E;&#x438;&#x441;&#x445;&#x43E;&#x434;&#x438;&#x442; &#x43E;&#x442; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442;&#x44B; &#x41D;&#x435;&#x43F;&#x442;&#x443;&#x43D;.\n",
        "Атомная масса": "[237]",
        "Плотность, кг/м³": "20450",
        "Температура плавления, °С": "640",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.12",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.19"
    },
    {
        "Химический символ": "Pu",
        "label": "Плутоний Plutonium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f66d07s2",
        "description": "<b>&#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Plutonium), Pu, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 94; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>. &#x41E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x432; 1940-41 &#x433;&#x43E;&#x434;&#x430;&#x445; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;&#x43E;&#x43C;, &#x42D;. &#x41C;&#x430;&#x43A;&#x43C;&#x438;&#x43B;&#x43B;&#x430;&#x43D;&#x43E;&#x43C;, &#x414;&#x436;. &#x41A;&#x435;&#x43D;&#x43D;&#x435;&#x434;&#x438; &#x438; &#x410;. &#x412;&#x430;&#x43B;&#x435;&#x43C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B;&#x438; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>238</sup>&#x420;u &#x432; &#x440;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x435; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x44F;&#x434;&#x440;&#x430;&#x43C;&#x438; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x43E;&#x433;&#x43E; &#x432;&#x43E;&#x434;&#x43E;&#x440;&#x43E;&#x434;&#x430; - &#x434;&#x435;&#x439;&#x442;&#x43E;&#x43D;&#x430;&#x43C;&#x438;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442;&#x44B; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;, &#x43A;&#x430;&#x43A; &#x438; &#x43F;&#x440;&#x435;&#x434;&#x448;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x438;&#x43A;&#x438; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x432; &#x442;&#x430;&#x431;&#x43B;&#x438;&#x446;&#x435; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430; - &#x443;&#x440;&#x430;&#x43D; &#x438; &#x43D;&#x435;&#x43F;&#x442;&#x443;&#x43D;&#x438;&#x439;, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x442;&#x430;&#x43A;&#x436;&#x435; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x43E;&#x448;&#x43B;&#x438; &#x43E;&#x442; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442; &#x423;&#x440;&#x430;&#x43D;&#x430; &#x438; &#x41D;&#x435;&#x43F;&#x442;&#x443;&#x43D;&#x430;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 232 &#x434;&#x43E; 246. &#x421;&#x43B;&#x435;&#x434;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; <sup>247</sup>&#x420;u &#x438; <sup>255</sup>&#x420;u &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x44B; &#x432; &#x43F;&#x44B;&#x43B;&#x438;, &#x441;&#x43E;&#x431;&#x440;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x43E;&#x432; &#x442;&#x435;&#x440;&#x43C;&#x43E;&#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x431;&#x43E;&#x43C;&#x431;. &#x421;&#x430;&#x43C;&#x44B;&#x43C; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x43C; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x43C; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x439; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x3B1;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; <sup>244</sup>&#x420;u (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 7,5&#xB7;10<sup>7</sup> &#x43B;&#x435;&#x442;). &#x412;&#x435;&#x43B;&#x438;&#x447;&#x438;&#x43D;&#x44B; T<sub>&#xBD;</sub> &#x432;&#x441;&#x435;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x43C;&#x43D;&#x43E;&#x433;&#x43E; &#x43C;&#x435;&#x43D;&#x44C;&#x448;&#x435; &#x432;&#x43E;&#x437;&#x440;&#x430;&#x441;&#x442;&#x430; &#x417;&#x435;&#x43C;&#x43B;&#x438;, &#x438; &#x43F;&#x43E;&#x44D;&#x442;&#x43E;&#x43C;&#x443; &#x432;&#x435;&#x441;&#x44C; &#x43F;&#x435;&#x440;&#x432;&#x438;&#x447;&#x43D;&#x44B;&#x439; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x439; (&#x441;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43E;&#x432;&#x430;&#x432;&#x448;&#x438;&#x439; &#x43D;&#x430; &#x43D;&#x430;&#x448;&#x435;&#x439; &#x43F;&#x43B;&#x430;&#x43D;&#x435;&#x442;&#x435; &#x43F;&#x440;&#x438; &#x435;&#x435; &#x444;&#x43E;&#x440;&#x43C;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x438;) &#x43F;&#x43E;&#x43B;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x43B;&#x441;&#x44F;. &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x43D;&#x438;&#x447;&#x442;&#x43E;&#x436;&#x43D;&#x44B;&#x435; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430; <sup>239</sup>&#x420;u &#x43F;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x43D;&#x43E; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x44E;&#x442;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x3B2;-&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x435; <sup>239</sup>Np, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439;, &#x432; &#x441;&#x432;&#x43E;&#x44E; &#x43E;&#x447;&#x435;&#x440;&#x435;&#x434;&#x44C;, &#x432;&#x43E;&#x437;&#x43D;&#x438;&#x43A;&#x430;&#x435;&#x442; &#x43F;&#x440;&#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x441; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438; (&#x43D;&#x430;&#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;, &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438; &#x43A;&#x43E;&#x441;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x438;&#x437;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F;). &#x41F;&#x43E;&#x44D;&#x442;&#x43E;&#x43C;&#x443; &#x441;&#x43B;&#x435;&#x434;&#x44B; &#x41F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x44B; &#x432; &#x443;&#x440;&#x430;&#x43D;&#x43E;&#x432;&#x44B;&#x445; &#x440;&#x443;&#x434;&#x430;&#x445;.\n",
        "Атомная масса": "[244]",
        "Плотность, кг/м³": "19840",
        "Температура плавления, °С": "640",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.13",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.06"
    },
    {
        "Химический символ": "Am",
        "label": "Америций Americium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f76d07s2",
        "description": "<b>&#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Americium), Am, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 95. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x421;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D; &#x432; &#x43A;&#x43E;&#x43D;&#x446;&#x435; 1944 - &#x43D;&#x430;&#x447;&#x430;&#x43B;&#x435; 1945 &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;&#x43E;&#x43C;, &#x420;. &#x414;&#x436;&#x435;&#x439;&#x43C;&#x441;&#x43E;&#x43C;, &#x41B;. &#x41C;&#x43E;&#x440;&#x433;&#x430;&#x43D;&#x43E;&#x43C; &#x438; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E; &#x432; &#x440;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x435; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; <sup>239</sup>&#x420;u &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438;. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x439; &#x434;&#x430;&#x43D;&#x43E; &#x43E;&#x442; &#x441;&#x43B;&#x43E;&#x432;&#x430; &quot;&#x410;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&quot; &#x43F;&#x43E; &#x430;&#x43D;&#x430;&#x43B;&#x43E;&#x433;&#x438;&#x438; &#x441; &#x433;&#x43E;&#x43C;&#x43E;&#x43B;&#x43E;&#x433;&#x43E;&#x43C; &#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x44F; &#x432; &#x440;&#x44F;&#x434;&#x443; &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432; - &#x435;&#x432;&#x440;&#x43E;&#x43F;&#x438;&#x435;&#x43C;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x437;&#x430;&#x43D;&#x438;&#x43C;&#x430;&#x435;&#x442; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x430; &#x442;&#x430;&#x43A;&#x43E;&#x435; &#x436;&#x435; &#x43C;&#x435;&#x441;&#x442;&#x43E; (&#x448;&#x435;&#x441;&#x442;&#x43E;&#x435;), &#x43A;&#x430;&#x43A; &#x438; &#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 237-246 &#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;&#x44B; <sup>242m</sup>Am, <sup>244m</sup>Am &#x438; &#x442;&#x430;&#x43A; &#x43D;&#x430;&#x437;&#x44B;&#x432;&#x430;&#x435;&#x43C;&#x44B;&#x445; &#x434;&#x435;&#x43B;&#x44F;&#x449;&#x438;&#x435;&#x441;&#x44F; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;&#x44B; <sup>238mf</sup>Am, <sup>240mf</sup>Am, <sup>242mf</sup>Am &#x438; <sup>244mf</sup>Am, &#x431;&#x44B;&#x441;&#x442;&#x440;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x44B; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> &#x43B;&#x435;&#x436;&#x430;&#x442; &#x432; &#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x430;&#x445; 60 &#x43C;&#x43A;&#x441;&#x435;&#x43A;-14 &#x43C;&#x441;&#x435;&#x43A;) &#x43F;&#x440;&#x43E;&#x442;&#x435;&#x43A;&#x430;&#x435;&#x442; &#x43F;&#x443;&#x442;&#x435;&#x43C; &#x441;&#x43F;&#x43E;&#x43D;&#x442;&#x430;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x44F; (&#x441;&#x43F;&#x43E;&#x43D;&#x442;&#x430;&#x43D;&#x43D;&#x43E;&#x435; &#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x442;&#x430;&#x43A;&#x438;&#x445; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440;&#x43E;&#x432;, &#x43D;&#x430;&#x445;&#x43E;&#x434;&#x44F;&#x449;&#x438;&#x445;&#x441;&#x44F; &#x432; &#x432;&#x43E;&#x437;&#x431;&#x443;&#x436;&#x434;&#x435;&#x43D;&#x43D;&#x43E;&#x43C; &#x441;&#x43E;&#x441;&#x442;&#x43E;&#x44F;&#x43D;&#x438;&#x438;, &#x43E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x43E; &#x432; 1962 &#x433;&#x43E;&#x434;&#x443; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x43E;&#x439; &#x441;&#x43E;&#x432;&#x435;&#x442;&#x441;&#x43A;&#x438;&#x445; &#x444;&#x438;&#x437;&#x438;&#x43A;&#x43E;&#x432; &#x432; &#x414;&#x443;&#x431;&#x43D;&#x435; &#x43D;&#x430; &#x43F;&#x440;&#x438;&#x43C;&#x435;&#x440;&#x435; <sup>242mf</sup>Am). &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>243</sup>&#x410;m &#x3B1;-&#x430;&#x43A;&#x442;&#x438;&#x432;&#x435;&#x43D; (&#x422;<sub>&#xBD;</sub> = 7950 &#x43B;&#x435;&#x442;). &#x41F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x435; <sup>243</sup>&#x410;m &#x432; &#x43C;&#x438;&#x43B;&#x43B;&#x438;&#x433;&#x440;&#x430;&#x43C;&#x43C;&#x43E;&#x432;&#x44B;&#x445; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430;&#x445; &#x441;&#x432;&#x44F;&#x437;&#x430;&#x43D;&#x43E; &#x441; &#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x43C;&#x438; &#x442;&#x440;&#x443;&#x434;&#x43D;&#x43E;&#x441;&#x442;&#x44F;&#x43C;&#x438; &#x438; &#x431;&#x44B;&#x43B;&#x43E; &#x43E;&#x441;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x43B;&#x435;&#x43D;&#x43E; &#x43F;&#x43E;&#x441;&#x43B;&#x435; 1960. &#x414;&#x440;&#x443;&#x433;&#x43E;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; &#x410;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x44F;, <sup>241</sup>&#x410;m (&#x3B1;-&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;, T<sub>&#xBD;</sub> = 458 &#x43B;&#x435;&#x442;) &#x43A;&#x430;&#x43A; &#x43F;&#x43E;&#x431;&#x43E;&#x447;&#x43D;&#x44B;&#x439; &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x432; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x445; &#x440;&#x435;&#x430;&#x43A;&#x442;&#x43E;&#x440;&#x430;&#x445; &#x438;&#x437; <sup>239</sup>&#x420;u &#x438; &#x43C;&#x43E;&#x436;&#x435;&#x442; &#x431;&#x44B;&#x442;&#x44C; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D; &#x438;&#x437; &#x43E;&#x442;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x433;&#x43E;&#x440;&#x44E;&#x447;&#x435;&#x433;&#x43E; &#x432; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430;&#x445;, &#x434;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43D;&#x44B;&#x445; &#x434;&#x43B;&#x44F; &#x432;&#x437;&#x432;&#x435;&#x448;&#x438;&#x432;&#x430;&#x43D;&#x438;&#x44F;. &#x414;&#x43B;&#x44F; &#x438;&#x437;&#x432;&#x43B;&#x435;&#x447;&#x435;&#x43D;&#x438;&#x44F; <sup>241</sup>&#x410;m &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E;&#x442; &#x441;&#x43E;&#x43E;&#x441;&#x430;&#x436;&#x434;&#x435;&#x43D;&#x438;&#x435; &#x441; &#x441;&#x43E;&#x43B;&#x44F;&#x43C;&#x438; &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x430;, &#x445;&#x440;&#x43E;&#x43C;&#x430;&#x442;&#x43E;&#x433;&#x440;&#x430;&#x444;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x438; &#x44D;&#x43A;&#x441;&#x442;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x43E;&#x43D;&#x43D;&#x44B;&#x435; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x44B;.\n",
        "Атомная масса": "[243]",
        "Плотность, кг/м³": "13670",
        "Температура плавления, °С": "994",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": "0.138",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "5.99"
    },
    {
        "Химический символ": "Cm",
        "label": "Кюрий Curium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f76d17s2",
        "description": "<b>&#x41A;&#x44E;&#x440;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Curium), Cm, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 96. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x412;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x432; 1944 &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;&#x43E;&#x43C;, &#x420;. &#x414;&#x436;&#x435;&#x439;&#x43C;&#x441;&#x43E;&#x43C; &#x438; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E; &#x43F;&#x43E; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438;<sup>239</sup><sub>94</sub>&#x420;u(&#x3B1;,n)<sup>242</sup> <sub>96</sub>Cm. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x41F;. &#x41A;&#x44E;&#x440;&#x438; &#x438; &#x41C;. &#x421;&#x43A;&#x43B;&#x43E;&#x434;&#x43E;&#x432;&#x441;&#x43A;&#x43E;&#x439;-&#x41A;&#x44E;&#x440;&#x438; - &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x435;&#x439; &#x43D;&#x430;&#x443;&#x43A;&#x438; &#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x441;&#x442;&#x438;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41A;&#x44E;&#x440;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 232, 236-252, &#x438;&#x437; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x445; &#x441;&#x430;&#x43C;&#x44B;&#x439; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>247</sup>Cm (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 1,64&#xB7;10<sup>7</sup> &#x43B;&#x435;&#x442;). &#x412; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x445; &#x440;&#x435;&#x430;&#x43A;&#x442;&#x43E;&#x440;&#x430;&#x445; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41A;&#x44E;&#x440;&#x438;&#x44F; (<sup>244</sup>Cm, &#x422;<sub>&#xBD;</sub> = 17,59 &#x43B;&#x435;&#x442;, &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;) &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x43D;&#x430;&#x43A;&#x43E;&#x43F;&#x438;&#x442;&#x44C; &#x432; &#x43A;&#x438;&#x43B;&#x43E;&#x433;&#x440;&#x430;&#x43C;&#x43C;&#x43E;&#x432;&#x44B;&#x445; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430;&#x445; &#x437;&#x430; &#x441;&#x447;&#x435;&#x442; &#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x438;&#x43B;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x430;. &#x41A;&#x44E;&#x440;&#x438;&#x439; - &#x431;&#x43B;&#x435;&#x441;&#x442;&#x44F;&#x449;&#x438;&#x439; &#x441;&#x435;&#x440;&#x435;&#x431;&#x440;&#x438;&#x441;&#x442;&#x44B;&#x439; &#x43C;&#x435;&#x442;&#x430;&#x43B;&#x43B;, t<sub>&#x43F;&#x43B;</sub> 1340 &#xB0;&#x421;, &#x440;&#x430;&#x441;&#x441;&#x447;&#x438;&#x442;&#x430;&#x43D;&#x43D;&#x43E;&#x435; &#x437;&#x43D;&#x430;&#x447;&#x435;&#x43D;&#x438;&#x435; &#x43F;&#x43B;&#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 113 &#x433;/&#x441;&#x43C;<sup>3</sup>. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x430;&#x44F; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x41A;&#x44E;&#x440;&#x438;&#x44F;, &#x43A;&#x430;&#x43A; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x445; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;, +3; &#x432; &#x447;&#x430;&#x441;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x438;, &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x44B; Cm<sub>2</sub>&#x41E;<sub>3</sub>, CmCl<sub>3</sub> &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435;. &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x41A;&#x44E;&#x440;&#x438;&#x44F; &#x441;&#x43E; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C;&#x44E; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; +4 (CmO<sub>2</sub>, CmF<sub>4</sub>). &#x41E;&#x442; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432; &#x41A;&#x44E;&#x440;&#x438;&#x439; &#x43C;&#x43E;&#x436;&#x43D;&#x43E; &#x43E;&#x442;&#x434;&#x435;&#x43B;&#x438;&#x442;&#x44C; &#x438;&#x43E;&#x43D;&#x43E;&#x43E;&#x431;&#x43C;&#x435;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430;&#x43C;&#x438;. &#x421;&#x438;&#x43B;&#x44C;&#x43D;&#x43E;&#x435; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x435;&#x43D;&#x438;&#x435; &#x442;&#x435;&#x43F;&#x43B;&#x430; &#x432; &#x43F;&#x440;&#x435;&#x43F;&#x430;&#x440;&#x430;&#x442;&#x430;&#x445; &#x41A;&#x44E;&#x440;&#x438;&#x44F;, &#x43E;&#x431;&#x443;&#x441;&#x43B;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x43D;&#x43E;&#x435; &#x435;&#x433;&#x43E; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x43C; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x43E;&#x43C;, &#x434;&#x430;&#x435;&#x442; &#x432;&#x43E;&#x437;&#x43C;&#x43E;&#x436;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x442;&#x44C; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; <sup>242</sup>Cm, <sup>244</sup>Cm &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x434;&#x43B;&#x44F; &#x441;&#x43E;&#x437;&#x434;&#x430;&#x43D;&#x438;&#x44F; &#x43C;&#x430;&#x43B;&#x43E;&#x433;&#x430;&#x431;&#x430;&#x440;&#x438;&#x442;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x442;&#x43E;&#x447;&#x43D;&#x438;&#x43A;&#x43E;&#x432; &#x44D;&#x43B;&#x435;&#x43A;&#x442;&#x440;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x442;&#x43E;&#x43A;&#x430;. &#x421;&#x440;&#x43E;&#x43A; &#x43D;&#x435;&#x43F;&#x440;&#x435;&#x440;&#x44B;&#x432;&#x43D;&#x43E;&#x439; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x44B; &#x442;&#x430;&#x43A;&#x438;&#x445; &#x433;&#x435;&#x43D;&#x435;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x43E;&#x432; &#x434;&#x43E;&#x441;&#x442;&#x438;&#x433;&#x430;&#x435;&#x442; &#x43D;&#x435;&#x441;&#x43A;&#x43E;&#x43B;&#x44C;&#x43A;&#x438;&#x445; &#x43C;&#x435;&#x441;&#x44F;&#x446;&#x435;&#x432;.\n",
        "Атомная масса": "[247]",
        "Плотность, кг/м³": "13510",
        "Температура плавления, °С": "1340",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.02"
    },
    {
        "Химический символ": "Bk",
        "label": "Берклий Berkelium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f96d07s2",
        "description": "<b>&#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x439;</b>, &#x431;&#x435;&#x440;&#x43A;&#x435;&#x43B;&#x438;&#x439; (Berkelium), Bk, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;, &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x441;&#x44F; &#x43A; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x430;&#x43C;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 97. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x421;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D; &#x432; &#x434;&#x435;&#x43A;&#x430;&#x431;&#x440;&#x435; 1949 &#x433;&#x43E;&#x434;&#x430; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x421;. &#x422;&#x43E;&#x43C;&#x43F;&#x441;&#x43E;&#x43D;&#x43E;&#x43C;, &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E; &#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;&#x43E;&#x43C; &#x432; &#x440;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x435; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x430;&#x43C;&#x438; &#x43D;&#x430; &#x446;&#x438;&#x43A;&#x43B;&#x43E;&#x442;&#x440;&#x43E;&#x43D;&#x435; &#x43E;&#x43A;&#x441;&#x438;&#x434;&#x430; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x44F; <sup>241</sup>Am<sub>2</sub>O<sub>3</sub>. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x433;. &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438; (&#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x44F;, &#x421;&#x428;&#x410;), &#x433;&#x434;&#x435; &#x431;&#x44B;&#x43B;&#x438; &#x43F;&#x440;&#x43E;&#x432;&#x435;&#x434;&#x435;&#x43D;&#x44B; &#x43C;&#x43D;&#x43E;&#x433;&#x43E;&#x447;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x44B; &#x43F;&#x43E; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x443; &#x438; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44E; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;, &#x432; &#x442;&#x43E;&#x43C; &#x447;&#x438;&#x441;&#x43B;&#x435; &#x438; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x44F;. &#x41F;&#x440;&#x438; &#x432;&#x44B;&#x431;&#x43E;&#x440;&#x435; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x434;&#x43B;&#x44F; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x44F; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x435; &#x443;&#x447;&#x43B;&#x438;, &#x447;&#x442;&#x43E; &#x433;&#x43E;&#x43C;&#x43E;&#x43B;&#x43E;&#x433; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x44F; &#x432; &#x440;&#x44F;&#x434;&#x443; &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432; - &#x442;&#x435;&#x440;&#x431;&#x438;&#x439;, &#x437;&#x430;&#x43D;&#x438;&#x43C;&#x430;&#x44E;&#x449;&#x438;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x43B;&#x430;&#x43D;&#x442;&#x430;&#x43D;&#x430; &#x442;&#x430;&#x43A;&#x43E;&#x435; &#x436;&#x435; &#x43C;&#x435;&#x441;&#x442;&#x43E; (&#x432;&#x43E;&#x441;&#x44C;&#x43C;&#x43E;&#x435;), &#x43A;&#x430;&#x43A; &#x438; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x438;&#x44F;, &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x448;&#x432;&#x435;&#x434;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x433;&#x43E;&#x440;&#x43E;&#x434;&#x430; &#x418;&#x442;&#x442;&#x435;&#x440;&#x431;&#x438;, &#x432; &#x43E;&#x43A;&#x440;&#x435;&#x441;&#x442;&#x43D;&#x43E;&#x441;&#x442;&#x44F;&#x445; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x433;&#x43E; &#x431;&#x44B;&#x43B;&#x438; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43D;&#x430;&#x439;&#x434;&#x435;&#x43D;&#x44B; &#x43C;&#x43D;&#x43E;&#x433;&#x438;&#x435; &#x440;&#x435;&#x434;&#x43A;&#x43E;&#x437;&#x435;&#x43C;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x435; &#x43C;&#x438;&#x43D;&#x435;&#x440;&#x430;&#x43B;&#x44B;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 243-250 &#x438; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x43C;&#x435;&#x440; <sup>248m</sup>Bk. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x44F;: <sup>247</sup>Bk (&#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x422;<sub>&#xBD;</sub> = 1380&#xB1;250 &#x43B;&#x435;&#x442;), &#x438;&#x441;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x435;&#x442; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B;, <sup>249</sup>Bk (&#x422;<sub>&#xBD;</sub> = 314 &#x434;&#x43D;&#x435;&#x439;), &#x438;&#x441;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x435;&#x442; &#x3B2;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B; (&gt;99%) &#x438; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B; (2,2-10<sup>-3</sup>%). <sup>249</sup>Bk &#x43E;&#x431;&#x440;&#x430;&#x437;&#x443;&#x435;&#x442;&#x441;&#x44F; &#x441; &#x43D;&#x435;&#x431;&#x43E;&#x43B;&#x44C;&#x448;&#x438;&#x43C; &#x432;&#x44B;&#x445;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x440;&#x438; &#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; (&#x43D;&#x435;&#x441;&#x43A;&#x43E;&#x43B;&#x44C;&#x43A;&#x43E; &#x43B;&#x435;&#x442;) &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438; &#x432; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x43E;&#x43C; &#x440;&#x435;&#x430;&#x43A;&#x442;&#x43E;&#x440;&#x435; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x438;&#x43B;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x430;. &#x418;&#x437; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x435; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x435; &#x411;. &#x41A;&#x430;&#x43D;&#x43D;&#x438;&#x43D;&#x433;&#x435;&#x43C; &#x438; &#x421;. &#x422;&#x43E;&#x43C;&#x43F;&#x441;&#x43E;&#x43D; &#x432; 1958 &#x433;&#x43E;&#x434;&#x443; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x432;&#x44B;&#x434;&#x435;&#x43B;&#x438;&#x43B;&#x438; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;&#x439; &#x432; &#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x435;, &#x434;&#x43E;&#x441;&#x442;&#x443;&#x43F;&#x43D;&#x43E;&#x43C; &#x434;&#x43B;&#x44F; &#x432;&#x437;&#x432;&#x435;&#x448;&#x438;&#x432;&#x430;&#x43D;&#x438;&#x44F; (&#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 0,4 &#x43C;&#x43A;&#x433;).\n",
        "Атомная масса": "[247]",
        "Плотность, кг/м³": "14000",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.23"
    },
    {
        "Химический символ": "Cf",
        "label": "Калифорний Californium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f106d07s2",
        "description": "<b>&#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Californium), Cf, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 98. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x412;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x432; 1950 &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x421;. &#x422;&#x43E;&#x43C;&#x43F;&#x441;&#x43E;&#x43D;&#x43E;&#x43C;, &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E;, &#x41A;. &#x421;&#x442;&#x440;&#x438;&#x442;&#x43E;&#x43C; &#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;&#x43E;&#x43C; &#x43F;&#x43E; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x439; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438; <sup>242</sup>Cm(&#x3B1;,n)<sup>245</sup>Cf. &#x41D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x43F;&#x43E; &#x43C;&#x435;&#x441;&#x442;&#x443; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442;&#x438;&#x44F; (&#x448;&#x442;&#x430;&#x442; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x44F;, &#x421;&#x428;&#x410;). &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 238-256. &#x418;&#x437; &#x43D;&#x438;&#x445; &#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x438;&#x435; &#x43E;&#x442;&#x43D;&#x43E;&#x441;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x44B; &#x438; &#x43C;&#x43E;&#x433;&#x443;&#x442; &#x431;&#x44B;&#x442;&#x44C; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x432; &#x43C;&#x430;&#x43A;&#x440;&#x43E;&#x43A;&#x43E;&#x43B;&#x438;&#x447;&#x435;&#x441;&#x442;&#x432;&#x430;&#x445; &#x43F;&#x440;&#x438; &#x434;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x43C; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x443;&#x440;&#x430;&#x43D;&#x430; &#x438;&#x43B;&#x438; &#x43F;&#x43B;&#x443;&#x442;&#x43E;&#x43D;&#x438;&#x44F; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x430;&#x43C;&#x438;: <sup>249</sup>Cf (T<sub>&#xBD;</sub> = 360 &#x43B;&#x435;&#x442;), <sup>250</sup>Cf (13,2 &#x433;&#x43E;&#x434;&#x430;), <sup>251</sup>Cf (&#x431;&#x43E;&#x43B;&#x435;&#x435; 800 &#x43B;&#x435;&#x442;) &#x438; <sup>252</sup>Cf (2,65 &#x433;&#x43E;&#x434;&#x430;). &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x442;&#x432;&#x435;&#x440;&#x434;&#x44B;&#x435; &#x441;&#x43E;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x438;&#x44F; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x44F; - <sup>249</sup>Cf<sub>2</sub>O<sub>3</sub> &#x438; <sup>249</sup>CfOCl &#x43F;&#x440;&#x438;&#x433;&#x43E;&#x442;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x44B; &#x432; 1958. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x430;&#x44F; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x44F;, &#x43A;&#x430;&#x43A; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x445; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;, +3; &#x43C;&#x435;&#x43D;&#x435;&#x435; &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x430; +2. &#x41E;&#x442; &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x439; &#x43E;&#x442;&#x434;&#x435;&#x43B;&#x44F;&#x44E;&#x442; &#x44D;&#x43A;&#x441;&#x442;&#x440;&#x430;&#x43A;&#x446;&#x438;&#x43E;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x438; &#x445;&#x440;&#x43E;&#x43C;&#x430;&#x442;&#x43E;&#x433;&#x440;&#x430;&#x444;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x430;&#x43C;&#x438;. &#x41F;&#x440;&#x435;&#x43F;&#x430;&#x440;&#x430;&#x442;&#x44B; <sup>252</sup>Cf &#x43C;&#x43E;&#x433;&#x443;&#x442; &#x431;&#x44B;&#x442;&#x44C; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x43E;&#x432;&#x430;&#x43D;&#x44B; &#x43A;&#x430;&#x43A; &#x43C;&#x43E;&#x449;&#x43D;&#x44B;&#x435; &#x43C;&#x430;&#x43B;&#x43E;&#x433;&#x430;&#x431;&#x430;&#x440;&#x438;&#x442;&#x43D;&#x44B;&#x435; &#x438;&#x441;&#x442;&#x43E;&#x447;&#x43D;&#x438;&#x43A;&#x438; &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432;.\n",
        "Атомная масса": "[251]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.30"
    },
    {
        "Химический символ": "Es",
        "label": "Эйнштейний Einsteinium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f116d07s2",
        "description": "<b>&#x42D;&#x439;&#x43D;&#x448;&#x442;&#x435;&#x439;&#x43D;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Einsteinium, &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x410;&#x43B;&#x44C;&#x431;&#x435;&#x440;&#x442;&#x430; &#x42D;&#x439;&#x43D;&#x448;&#x442;&#x435;&#x439;&#x43D;&#x430;), Es, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 99; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; (&#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; Es &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 242 &#x434;&#x43E; 257). &#x418;&#x437; &#x442;&#x440;&#x430;&#x43D;&#x441;&#x443;&#x440;&#x430;&#x43D;&#x43E;&#x432;&#x44B;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x43E;&#x432; &#x43E;&#x43D; &#x431;&#x44B;&#x43B; &#x43E;&#x442;&#x43A;&#x440;&#x44B;&#x442; &#x441;&#x435;&#x434;&#x44C;&#x43C;&#x44B;&#x43C;; &#x438;&#x434;&#x435;&#x43D;&#x442;&#x438;&#x444;&#x438;&#x446;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E; &#x438; &#x434;&#x440;. &#x432; &#x434;&#x435;&#x43A;&#x430;&#x431;&#x440;&#x435; 1952 &#x433;&#x43E;&#x434;&#x430;. &#x42D;&#x439;&#x43D;&#x448;&#x442;&#x435;&#x439;&#x43D;&#x438;&#x439; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43B;&#x441;&#x44F; &#x432; &#x43F;&#x44B;&#x43B;&#x438;, &#x441;&#x43E;&#x431;&#x440;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x442;&#x435;&#x440;&#x43C;&#x43E;&#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x430;; &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430; &#x43F;&#x440;&#x43E;&#x432;&#x43E;&#x434;&#x438;&#x43B;&#x430;&#x441;&#x44C; &#x441; &#x443;&#x447;&#x430;&#x441;&#x442;&#x438;&#x435;&#x43C; &#x441;&#x43E;&#x442;&#x440;&#x443;&#x434;&#x43D;&#x438;&#x43A;&#x43E;&#x432; &#x420;&#x430;&#x434;&#x438;&#x430;&#x446;&#x438;&#x43E;&#x43D;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x439;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x443;&#x43D;&#x438;&#x432;&#x435;&#x440;&#x441;&#x438;&#x442;&#x435;&#x442;&#x430;, &#x410;&#x440;&#x433;&#x43E;&#x43D;&#x43D;&#x441;&#x43A;&#x43E;&#x439; &#x43D;&#x430;&#x446;&#x438;&#x43E;&#x43D;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x438; &#x41B;&#x43E;&#x441;-&#x410;&#x43B;&#x430;&#x43C;&#x43E;&#x441;&#x441;&#x43A;&#x43E;&#x439; &#x43D;&#x430;&#x443;&#x447;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438; (&#x421;&#x428;&#x410;). &#x41E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>253</sup>Es &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 20,5 &#x441;&#x443;&#x442;&#x43E;&#x43A; &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43B;&#x441;&#x44F; &#x43F;&#x440;&#x438; &#x3B2;-&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x435; <sup>253</sup>U &#x438; &#x434;&#x43E;&#x447;&#x435;&#x440;&#x43D;&#x438;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; (<sup>253</sup>U &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x43B;&#x441;&#x44F; &#x432; &#x440;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x435; &#x43F;&#x440;&#x435;&#x438;&#x43C;&#x443;&#x449;&#x435;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x437;&#x430;&#x445;&#x432;&#x430;&#x442;&#x430; 15 &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x44F;&#x434;&#x440;&#x430;&#x43C;&#x438; <sup>238</sup>U).\n",
        "Атомная масса": "[252]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.42"
    },
    {
        "Химический символ": "Fm",
        "label": "Фермий Fermium",
        "color": "0xF96727",
        "shadow": "0xE96219",
        "Электронная формула": "(Rn)5f126d07s2",
        "description": "<b>&#x424;&#x435;&#x440;&#x43C;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Fermium, &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x42D;. &#x424;&#x435;&#x440;&#x43C;&#x438;), Fm, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>; &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 100; &#x441;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442; (&#x438;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x424;&#x435;&#x440;&#x43C;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; &#x43E;&#x442; 244 &#x434;&#x43E; 258). &#x412;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x424;&#x435;&#x440;&#x43C;&#x438;&#x439; &#x438;&#x434;&#x435;&#x43D;&#x442;&#x438;&#x444;&#x438;&#x446;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x43C;&#x438; &#x432; &#x44F;&#x43D;&#x432;&#x430;&#x440;&#x435; 1953 &#x433;&#x43E;&#x434;&#x430; &#x432; &#x432;&#x438;&#x434;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; <sup>255</sup>Fm &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; T<sub>&#xBD;</sub> = 20,1 &#x447;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x439; &#x441;&#x43E;&#x434;&#x435;&#x440;&#x436;&#x430;&#x43B;&#x441;&#x44F; &#x432; &#x43F;&#x44B;&#x43B;&#x438;, &#x441;&#x43E;&#x431;&#x440;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x442;&#x435;&#x440;&#x43C;&#x43E;&#x44F;&#x434;&#x435;&#x440;&#x43D;&#x43E;&#x433;&#x43E; &#x432;&#x437;&#x440;&#x44B;&#x432;&#x430; (&#x440;&#x430;&#x431;&#x43E;&#x442;&#x430; &#x43F;&#x440;&#x43E;&#x438;&#x437;&#x432;&#x43E;&#x434;&#x438;&#x43B;&#x430;&#x441;&#x44C; &#x441; &#x443;&#x447;&#x430;&#x441;&#x442;&#x438;&#x435;&#x43C; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x445; &#x420;&#x430;&#x434;&#x438;&#x430;&#x446;&#x438;&#x43E;&#x43D;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x41A;&#x430;&#x43B;&#x438;&#x444;&#x43E;&#x440;&#x43D;&#x438;&#x439;&#x441;&#x43A;&#x43E;&#x433;&#x43E; &#x443;&#x43D;&#x438;&#x432;&#x435;&#x440;&#x441;&#x438;&#x442;&#x435;&#x442;&#x430;, &#x41B;&#x43E;&#x441;-&#x410;&#x43B;&#x430;&#x43C;&#x43E;&#x441;&#x441;&#x43A;&#x43E;&#x439; &#x43D;&#x430;&#x443;&#x447;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438; &#x438; &#x410;&#x440;&#x433;&#x43E;&#x43D;&#x43D;&#x441;&#x43A;&#x43E;&#x439; &#x43D;&#x430;&#x446;&#x438;&#x43E;&#x43D;&#x430;&#x43B;&#x44C;&#x43D;&#x43E;&#x439; &#x43B;&#x430;&#x431;&#x43E;&#x440;&#x430;&#x442;&#x43E;&#x440;&#x438;&#x438;). &#x41E;&#x431;&#x43D;&#x430;&#x440;&#x443;&#x436;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; - &#x43F;&#x440;&#x43E;&#x434;&#x443;&#x43A;&#x442; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x43E;&#x433;&#x43E; &#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; <sup>255</sup>U, &#x43E;&#x431;&#x440;&#x430;&#x437;&#x43E;&#x432;&#x430;&#x432;&#x448;&#x435;&#x433;&#x43E;&#x441;&#x44F; &#x432; &#x440;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x435; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x433;&#x43E; &#x437;&#x430;&#x445;&#x432;&#x430;&#x442;&#x430; 17 &#x43D;&#x435;&#x439;&#x442;&#x440;&#x43E;&#x43D;&#x43E;&#x432; &#x44F;&#x434;&#x440;&#x430;&#x43C;&#x438; <sup>238</sup>U.\n",
        "Атомная масса": "[257]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.50"
    },
    {
        "Химический символ": "Md",
        "label": "Менделевий Mendelevium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f136d07s2",
        "description": "<b>&#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x432;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Mendelevium), Md, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 101. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x430;&#x442;&#x43E;&#x43C;&#x44B; &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x432;&#x438;&#x44F; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43B;&#x438; &#x432; 1955 &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x435; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x435; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E;, &#x411;. &#x425;&#x430;&#x440;&#x432;&#x438;, &#x413;. &#x427;&#x43E;&#x43F;&#x43F;&#x438;&#x43D;, &#x421;. &#x422;&#x43E;&#x43C;&#x43F;&#x441;&#x43E;&#x43D; &#x438; &#x413;. &#x421;&#x438;&#x431;&#x43E;&#x440;&#x433;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x430;&#x43B;&#x438; &#x44F;&#x434;&#x440;&#x430; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430; &#x44D;&#x439;&#x43D;&#x448;&#x442;&#x435;&#x439;&#x43D;&#x438;&#x44F; <sup>253</sup>Es &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x43E; &#x440;&#x430;&#x437;&#x43E;&#x433;&#x43D;&#x430;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x44F;&#x434;&#x440;&#x430;&#x43C;&#x438; &#x433;&#x435;&#x43B;&#x438;&#x44F; (&#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x430;&#x43C;&#x438;). &#x41F;&#x440;&#x438; &#x44D;&#x442;&#x43E;&#x43C; &#x43F;&#x440;&#x43E;&#x442;&#x435;&#x43A;&#x430;&#x43B;&#x430; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x430;&#x44F; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x44F; <sup>253</sup>Es (&#x3B1;, <i>n</i>) <sup>256</sup>Md. &#x423;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x41E;&#x431;&#x44A;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x43D;&#x43E;&#x433;&#x43E; &#x438;&#x43D;&#x441;&#x442;&#x438;&#x442;&#x443;&#x442;&#x430; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; &#x432; &#x414;&#x443;&#x431;&#x43D;&#x435; &#x432; 1962 &#x433;&#x43E;&#x434;&#x443; &#x438; &#x43F;&#x43E;&#x437;&#x436;&#x435; &#x434;&#x43B;&#x44F; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; &#x431;&#x44B;&#x43B;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x441;&#x43E;&#x442;&#x43D;&#x438; &#x430;&#x442;&#x43E;&#x43C;&#x43E;&#x432; Md &#x43F;&#x43E; &#x440;&#x435;&#x430;&#x43A;&#x446;&#x438;&#x438; <sup>238</sup>U (<sup>22</sup> Ne, &#x440; &#x417;n) <sup>256</sup>Md. &#x412; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x445; &#x43E;&#x43F;&#x44B;&#x442;&#x430;&#x445; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x435; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x435; &#x440;&#x430;&#x441;&#x43F;&#x43E;&#x43B;&#x430;&#x433;&#x430;&#x43B;&#x438; &#x432;&#x441;&#x435;&#x433;&#x43E; 17 &#x430;&#x442;&#x43E;&#x43C;&#x430;&#x43C;&#x438; &#x43D;&#x43E;&#x432;&#x43E;&#x433;&#x43E; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430;. &#x422;&#x435;&#x43C; &#x43D;&#x435; &#x43C;&#x435;&#x43D;&#x435;&#x435; &#x443;&#x434;&#x430;&#x43B;&#x43E;&#x441;&#x44C; &#x43E;&#x43F;&#x440;&#x435;&#x434;&#x435;&#x43B;&#x438;&#x442;&#x44C; &#x43D;&#x435;&#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x44B;&#x435; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430; &#x43D;&#x43E;&#x432;&#x43E;&#x433;&#x43E; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; &#x438; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x442;&#x44C; &#x435;&#x433;&#x43E; &#x43F;&#x43E;&#x43B;&#x43E;&#x436;&#x435;&#x43D;&#x438;&#x435; &#x432; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x439; &#x441;&#x438;&#x441;&#x442;&#x435;&#x43C;&#x435;. &#x42D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x414;. &#x418;. &#x41C;&#x435;&#x43D;&#x434;&#x435;&#x43B;&#x435;&#x435;&#x432;&#x430;. &#x418;&#x437;&#x432;&#x435;&#x441;&#x442;&#x43D;&#x44B; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; Md &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 252, 254-258. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432; &quot;-&#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>258</sup>Md, &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x43E;&#x433;&#x43E; &#x422;<sub>&#xBD;</sub> 54 &#x441;&#x443;&#x442;. &#x41A;&#x430;&#x43A; &#x438; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x435; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x44B;, Md &#x432; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x430;&#x445; &#x441;&#x43F;&#x43E;&#x441;&#x43E;&#x431;&#x435;&#x43D; &#x43F;&#x440;&#x43E;&#x44F;&#x432;&#x43B;&#x44F;&#x442;&#x44C; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; + 3. &#x41A;&#x440;&#x43E;&#x43C;&#x435; &#x442;&#x43E;&#x433;&#x43E;, Md &#x43C;&#x43E;&#x436;&#x435;&#x442; &#x438;&#x43C;&#x435;&#x442;&#x44C; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x438; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; + 2 &#x438;, &#x43A;&#x430;&#x43A; &#x432; 1972 &#x433;&#x43E;&#x434;&#x443; &#x443;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x438;&#x43B;&#x438; &#x441;&#x43E;&#x432;&#x435;&#x442;&#x441;&#x43A;&#x438;&#x435; &#x445;&#x438;&#x43C;&#x438;&#x43A;&#x438;, +1.\n",
        "Атомная масса": "[258]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.58"
    },
    {
        "Химический символ": "No",
        "label": "Нобелий Nobelium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f146d07s2",
        "description": "<b>&#x41D;&#x43E;&#x431;&#x435;&#x43B;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Nobelium), No, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 102. &#x41F;&#x435;&#x440;&#x432;&#x43E;&#x439; &#x437;&#x430;&#x44F;&#x432;&#x438;&#x43B;&#x430; &#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x430;&#x442;&#x43E;&#x43C;&#x43E;&#x432; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; 102 &#x432; 1957&#x433;&#x43E;&#x434;&#x443; &#x43C;&#x435;&#x436;&#x434;&#x443;&#x43D;&#x430;&#x440;&#x43E;&#x434;&#x43D;&#x430;&#x44F; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x430; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x445;, &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x432;&#x448;&#x438;&#x445; &#x432; &#x421;&#x442;&#x43E;&#x43A;&#x433;&#x43E;&#x43B;&#x44C;&#x43C;&#x435; (&#x428;&#x432;&#x435;&#x446;&#x438;&#x44F;), &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x430;&#x44F; &#x438; &#x43F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x436;&#x438;&#x43B;&#x430; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x442;&#x44C; &#x435;&#x433;&#x43E; &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x410;. &#x41D;&#x43E;&#x431;&#x435;&#x43B;&#x44F;, &#x43E;&#x441;&#x43D;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44F; &#x444;&#x43E;&#x43D;&#x434;&#x430; &#x43C;&#x435;&#x436;&#x434;&#x443;&#x43D;&#x430;&#x440;&#x43E;&#x434;&#x43D;&#x44B;&#x445; (&#x43D;&#x43E;&#x431;&#x435;&#x43B;&#x435;&#x432;&#x441;&#x43A;&#x438;&#x445;) &#x43F;&#x440;&#x435;&#x43C;&#x438;&#x439;. &#x41E;&#x434;&#x43D;&#x430;&#x43A;&#x43E; &#x43F;&#x43E;&#x441;&#x43B;&#x435;&#x434;&#x443;&#x44E;&#x449;&#x438;&#x435; &#x43E;&#x43F;&#x44B;&#x442;&#x44B;, &#x432;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x435;&#x43D;&#x43D;&#x44B;&#x435; &#x432; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438; (&#x421;&#x428;&#x410;) &#x438; &#x432; &#x41E;&#x431;&#x44A;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x43D;&#x43E;&#x43C; &#x438;&#x43D;&#x441;&#x442;&#x438;&#x442;&#x443;&#x442;&#x435; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; (&#x414;&#x443;&#x431;&#x43D;&#x430;, &#x421;&#x421;&#x421;&#x420;), &#x43F;&#x43E;&#x43A;&#x430;&#x437;&#x430;&#x43B;&#x438;, &#x447;&#x442;&#x43E; &#x432;&#x44B;&#x432;&#x43E;&#x434; &#x441;&#x442;&#x43E;&#x43A;&#x433;&#x43E;&#x43B;&#x44C;&#x43C;&#x441;&#x43A;&#x43E;&#x439; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x431;&#x44B;&#x43B; &#x43E;&#x448;&#x438;&#x431;&#x43E;&#x447;&#x435;&#x43D;. &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43D;&#x430;&#x434;&#x435;&#x436;&#x43D;&#x44B;&#x435; &#x441;&#x432;&#x435;&#x434;&#x435;&#x43D;&#x438;&#x44F; &#x43E;&#x431; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x430;&#x445; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; 102 &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 251-256 &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x432; 1963-67 &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x43E;&#x439; &#x441;&#x43E;&#x432;&#x435;&#x442;&#x441;&#x43A;&#x438;&#x445; &#x444;&#x438;&#x437;&#x438;&#x43A;&#x43E;&#x432; &#x432; &#x414;&#x443;&#x431;&#x43D;&#x435;, &#x43A;&#x43E;&#x442;&#x43E;&#x440;&#x443;&#x44E; &#x432;&#x43E;&#x437;&#x433;&#x43B;&#x430;&#x432;&#x43B;&#x44F;&#x43B; &#x413;. &#x41D;. &#x424;&#x43B;&#x435;&#x440;&#x43E;&#x432;. &#x414;&#x43B;&#x44F; &#x438;&#x445; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x430; &#x44F;&#x434;&#x440;&#x430; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; U, Pu &#x438; Am &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x430;&#x43B;&#x438; &#x443;&#x441;&#x43A;&#x43E;&#x440;&#x435;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x43E;&#x43D;&#x430;&#x43C;&#x438; Ne, &#x41E; &#x438; N. &#x420;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x44B; &#x434;&#x443;&#x431;&#x43D;&#x435;&#x43D;&#x441;&#x43A;&#x43E;&#x439; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x44B; &#x431;&#x44B;&#x43B;&#x438; &#x43F;&#x43E;&#x43B;&#x43D;&#x43E;&#x441;&#x442;&#x44C;&#x44E; &#x43F;&#x43E;&#x434;&#x442;&#x432;&#x435;&#x440;&#x436;&#x434;&#x435;&#x43D;&#x44B;. &#x421;&#x43E;&#x432;&#x435;&#x442;&#x441;&#x43A;&#x438;&#x435; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x435; &#x43F;&#x440;&#x435;&#x434;&#x43B;&#x43E;&#x436;&#x438;&#x43B;&#x438; &#x434;&#x430;&#x442;&#x44C; 102-&#x43C;&#x443; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x443; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &quot;&#x416;&#x43E;&#x43B;&#x438;&#x43E;&#x442;&#x438;&#x439;&quot; (&#x43B;&#x430;&#x442;. Joliotium, &#x441;&#x438;&#x43C;&#x432;&#x43E;&#x43B; Jl) &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x424;&#x440;&#x435;&#x434;&#x435;&#x440;&#x438;&#x43A;&#x430; &#x416;&#x43E;&#x43B;&#x438;&#x43E;-&#x41A;&#x44E;&#x440;&#x438;. &#x418;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x44B; &#x41D;&#x43E;&#x431;&#x435;&#x43B;&#x438;&#x44F; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 250-260 &#x438; 262; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x439; <sup>259</sup>No (&#x422;<sub>&#xBD;</sub> &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 1,5 &#x447;) &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D; &#x432; 1970 &#x432; &#x41E;&#x43A;-&#x420;&#x438;&#x434;&#x436;&#x435; (&#x421;&#x428;&#x410;). &#x41F;&#x435;&#x440;&#x432;&#x430;&#x44F; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x430;&#x44F; &#x438;&#x43D;&#x434;&#x435;&#x43D;&#x442;&#x438;&#x444;&#x438;&#x43A;&#x430;&#x446;&#x438;&#x44F; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; 102 &#x432;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x435;&#x43D;&#x430; &#x433;&#x440;&#x443;&#x43F;&#x43F;&#x43E;&#x439; &#x441;&#x43E;&#x442;&#x440;&#x443;&#x434;&#x43D;&#x438;&#x43A;&#x43E;&#x432; &#x424;&#x43B;&#x435;&#x440;&#x43E;&#x432;&#x430; &#x43F;&#x43E; &#x43C;&#x435;&#x442;&#x43E;&#x434;&#x438;&#x43A;&#x435;, &#x440;&#x430;&#x437;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x43D;&#x43D;&#x43E;&#x439; &#x434;&#x43B;&#x44F; &#x438;&#x437;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x44F; &#x43A;&#x443;&#x440;&#x447;&#x430;&#x442;&#x43E;&#x432;&#x438;&#x44F; (&#x420;&#x435;&#x437;&#x435;&#x440;&#x444;&#x43E;&#x440;&#x434;&#x438;&#x44F;, &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; 104). &#x41E;&#x43A;&#x430;&#x437;&#x430;&#x43B;&#x43E;&#x441;&#x44C; , &#x447;&#x442;&#x43E; &#x43B;&#x435;&#x442;&#x443;&#x447;&#x435;&#x441;&#x442;&#x44C; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x430; &#x43D;&#x43E;&#x431;&#x435;&#x43B;&#x438;&#x44F; &#x431;&#x43B;&#x438;&#x437;&#x43A;&#x430; &#x43A; &#x43B;&#x435;&#x442;&#x443;&#x447;&#x435;&#x441;&#x442;&#x438; &#x445;&#x43B;&#x43E;&#x440;&#x438;&#x434;&#x43E;&#x432; Fm &#x438; Cf - &#x434;&#x440;&#x443;&#x433;&#x438;&#x445; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x443;&#x441;&#x442;&#x43E;&#x439;&#x447;&#x438;&#x432;&#x430;&#x44F; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x41D;&#x43E;&#x431;&#x435;&#x43B;&#x438;&#x44F; &#x432; &#x440;&#x430;&#x441;&#x442;&#x432;&#x43E;&#x440;&#x435; +2; &#x432; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; +3 &#x43F;&#x435;&#x440;&#x435;&#x445;&#x43E;&#x434;&#x438;&#x442; &#x43F;&#x43E;&#x434; &#x434;&#x435;&#x439;&#x441;&#x442;&#x432;&#x438;&#x435;&#x43C; &#x441;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x438;&#x442;&#x435;&#x43B;&#x435;&#x439;.\n",
        "Атомная масса": "[259]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": "1.3",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": "6.65"
    },
    {
        "Химический символ": "Lr",
        "label": "Лоуренсий Lawrencium",
        "color": "0xFCA06E",
        "shadow": "0xFE8E62",
        "Электронная формула": "(Rn)5f146d17s2",
        "description": "<b>&#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x438;&#x439;</b> (&#x43B;&#x430;&#x442;. Lawrencium), Lr, &#x438;&#x441;&#x43A;&#x443;&#x441;&#x441;&#x442;&#x432;&#x435;&#x43D;&#x43D;&#x43E; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x440;&#x430;&#x434;&#x438;&#x43E;&#x430;&#x43A;&#x442;&#x438;&#x432;&#x43D;&#x44B;&#x439; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442; &#x441;&#x435;&#x43C;&#x435;&#x439;&#x441;&#x442;&#x432;&#x430; <a href=\"art.php?t=ac\">&#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x438;&#x434;&#x43E;&#x432;</a>, &#x430;&#x442;&#x43E;&#x43C;&#x43D;&#x44B;&#x439; &#x43D;&#x43E;&#x43C;&#x435;&#x440; 103. &#x421;&#x442;&#x430;&#x431;&#x438;&#x43B;&#x44C;&#x43D;&#x44B;&#x445; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x43D;&#x435; &#x438;&#x43C;&#x435;&#x435;&#x442;. &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43E;&#x43F;&#x44B;&#x442;&#x44B; &#x43F;&#x43E; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x443; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; &#x2116; 103 &#x431;&#x44B;&#x43B;&#x438; &#x432;&#x44B;&#x43F;&#x43E;&#x43B;&#x43D;&#x435;&#x43D;&#x44B; &#x432; 1961 &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x443;&#x447;&#x435;&#x43D;&#x44B;&#x43C;&#x438; &#x432;&#x43E; &#x433;&#x43B;&#x430;&#x432;&#x435; &#x441; &#x410;. &#x413;&#x438;&#x43E;&#x440;&#x441;&#x43E;. &#x420;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x44B; &#x44D;&#x442;&#x438;&#x445; &#x43E;&#x43F;&#x44B;&#x442;&#x43E;&#x432; &#x432; &#x434;&#x430;&#x43B;&#x44C;&#x43D;&#x435;&#x439;&#x448;&#x435;&#x43C; &#x43D;&#x435; &#x43F;&#x43E;&#x434;&#x442;&#x432;&#x435;&#x440;&#x434;&#x438;&#x43B;&#x438;&#x441;&#x44C;, &#x43D;&#x43E; &#x434;&#x430;&#x43D;&#x43D;&#x43E;&#x435; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x442;&#x435;&#x43B;&#x44F;&#x43C;&#x438; &#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435; &#x44D;&#x43B;&#x435;&#x43C;&#x435;&#x43D;&#x442;&#x430; 103 &#x432; &#x447;&#x435;&#x441;&#x442;&#x44C; &#x42D;. &#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x430; &#x431;&#x44B;&#x43B;&#x43E; &#x43F;&#x440;&#x438;&#x43D;&#x44F;&#x442;&#x43E;. &#x41F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x43D;&#x430;&#x434;&#x435;&#x436;&#x43D;&#x44B;&#x435; &#x441;&#x432;&#x435;&#x434;&#x435;&#x43D;&#x438;&#x44F; &#x43E;&#x431; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x435; <sup>256</sup>Lr &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x44B; &#x432; 1965 &#x441;&#x43E;&#x432;&#x435;&#x442;&#x441;&#x43A;&#x438;&#x43C;&#x438; &#x444;&#x438;&#x437;&#x438;&#x43A;&#x430;&#x43C;&#x438; &#x432; &#x41E;&#x431;&#x44A;&#x435;&#x434;&#x438;&#x43D;&#x435;&#x43D;&#x43D;&#x43E;&#x43C; &#x438;&#x43D;&#x441;&#x442;&#x438;&#x442;&#x443;&#x442;&#x435; &#x44F;&#x434;&#x435;&#x440;&#x43D;&#x44B;&#x445; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; (&#x414;&#x443;&#x431;&#x43D;&#x430;). &#x41E;&#x43D;&#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x43B;&#x438; &#x44F;&#x434;&#x440;&#x430; <sup>256</sup>Lr &#x43F;&#x440;&#x438; &#x43E;&#x431;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x438;&#x438; &#x43C;&#x438;&#x448;&#x435;&#x43D;&#x438; &#x438;&#x437; &#x430;&#x43C;&#x435;&#x440;&#x438;&#x446;&#x438;&#x44F; <sup>243</sup>&#x410;m &#x443;&#x441;&#x43A;&#x43E;&#x440;&#x435;&#x43D;&#x43D;&#x44B;&#x43C;&#x438; &#x438;&#x43E;&#x43D;&#x430;&#x43C;&#x438; <sup>18</sup>&#x41E;. &#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43B;&#x435;&#x43D;&#x43E;, &#x447;&#x442;&#x43E; &#x44F;&#x434;&#x440;&#x430; <sup>256</sup>Lr &#x438;&#x441;&#x43F;&#x443;&#x441;&#x43A;&#x430;&#x44E;&#x442; &#x3B1;-&#x447;&#x430;&#x441;&#x442;&#x438;&#x446;&#x44B; &#x438; &#x447;&#x442;&#x43E; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x441;&#x43E;&#x441;&#x442;&#x430;&#x432;&#x43B;&#x44F;&#x435;&#x442; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 35 &#x441;&#x435;&#x43A;. &#x412; 1969 &#x433;&#x43E;&#x434;&#x443; &#x432; &#x414;&#x443;&#x431;&#x43D;&#x435; &#x432;&#x43F;&#x435;&#x440;&#x432;&#x44B;&#x435; &#x431;&#x44B;&#x43B; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D; &#x438; &#x434;&#x440;&#x443;&#x433;&#x43E;&#x439; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>255</sup>Lr. &#x410;&#x43C;&#x435;&#x440;&#x438;&#x43A;&#x430;&#x43D;&#x441;&#x43A;&#x438;&#x435; &#x444;&#x438;&#x437;&#x438;&#x43A;&#x438;, &#x440;&#x430;&#x431;&#x43E;&#x442;&#x430;&#x44E;&#x449;&#x438;&#x435; &#x432; &#x411;&#x435;&#x440;&#x43A;&#x43B;&#x438;, &#x432; 1971 &#x433;&#x43E;&#x434;&#x443; &#x441;&#x43E;&#x43E;&#x431;&#x449;&#x438;&#x43B;&#x438; &#x43E; &#x441;&#x438;&#x43D;&#x442;&#x435;&#x437;&#x435; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F;&#x43E;&#x432; &#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x438;&#x44F; &#x441; &#x43C;&#x430;&#x441;&#x441;&#x43E;&#x432;&#x44B;&#x43C;&#x438; &#x447;&#x438;&#x441;&#x43B;&#x430;&#x43C;&#x438; 257-260. &#x41D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x434;&#x43E;&#x43B;&#x433;&#x43E;&#x436;&#x438;&#x432;&#x443;&#x449;&#x438;&#x43C; &#x44F;&#x432;&#x43B;&#x44F;&#x435;&#x442;&#x441;&#x44F; &#x438;&#x437;&#x43E;&#x442;&#x43E;&#x43F; <sup>260</sup>Lr &#x441; &#x43F;&#x435;&#x440;&#x438;&#x43E;&#x434;&#x43E;&#x43C; &#x43F;&#x43E;&#x43B;&#x443;&#x440;&#x430;&#x441;&#x43F;&#x430;&#x434;&#x430; &#x43E;&#x43A;&#x43E;&#x43B;&#x43E; 3 &#x43C;&#x438;&#x43D;. &#x41F;&#x43E; &#x445;&#x438;&#x43C;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x435; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432;&#x430;&#x43C; &#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x438;&#x439; &#x434;&#x43E;&#x43B;&#x436;&#x435;&#x43D; &#x431;&#x44B;&#x442;&#x44C; &#x43F;&#x43E;&#x445;&#x43E;&#x436;&#x438;&#x43C; &#x43D;&#x430; &#x434;&#x440;&#x443;&#x433;&#x438;&#x435; &#x442;&#x44F;&#x436;&#x435;&#x43B;&#x44B;&#x435; &#x430;&#x43A;&#x442;&#x438;&#x43D;&#x43E;&#x43D;&#x434;&#x44B;, &#x442;&#x430;&#x43A; &#x447;&#x442;&#x43E; &#x43D;&#x430;&#x438;&#x431;&#x43E;&#x43B;&#x435;&#x435; &#x442;&#x438;&#x43F;&#x438;&#x447;&#x43D;&#x430;&#x44F; &#x441;&#x442;&#x435;&#x43F;&#x435;&#x43D;&#x44C; &#x43E;&#x43A;&#x438;&#x441;&#x43B;&#x435;&#x43D;&#x438;&#x44F; &#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x438;&#x44F; &#x434;&#x43E;&#x43B;&#x436;&#x43D;&#x430; &#x440;&#x430;&#x432;&#x43D;&#x44F;&#x442;&#x44C;&#x441;&#x44F; +3. &#x420;&#x435;&#x437;&#x443;&#x43B;&#x44C;&#x442;&#x430;&#x442;&#x44B; &#x440;&#x44F;&#x434;&#x430; &#x438;&#x441;&#x441;&#x43B;&#x435;&#x434;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x439; &#x441;&#x432;&#x43E;&#x439;&#x441;&#x442;&#x432; &#x41B;&#x43E;&#x443;&#x440;&#x435;&#x43D;&#x441;&#x438;&#x439; &#x43F;&#x43E;&#x434;&#x442;&#x432;&#x435;&#x440;&#x436;&#x434;&#x430;&#x44E;&#x442; &#x44D;&#x442;&#x43E; &#x43F;&#x440;&#x435;&#x434;&#x43F;&#x43E;&#x43B;&#x43E;&#x436;&#x435;&#x43D;&#x438;&#x435;.\n",
        "Атомная масса": "[262]",
        "Плотность, кг/м³": " ",
        "Температура плавления, °С": " ",
        "Температура кипения, °С": " ",
        "Теплоемкость, кДж/(кг·°С)": " ",
        "Электроотрицательность": " ",
        "Ковалентный радиус, Å": " ",
        "1-й ионизац. потенциал, эв": " "
    }
]
},{}],15:[function(require,module,exports){
'use strict';

// This THREEx helper makes it easy to handle the mouse events in your 3D scene
//
// * CHANGES NEEDED
//   * handle drag/drop
//   * notify events not object3D - like DOM
//     * so single object with property
//   * DONE bubling implement bubling/capturing
//   * DONE implement event.stopPropagation()
//   * DONE implement event.type = "click" and co
//   * DONE implement event.target
//
// # Lets get started
//
// First you include it in your page
//
// ```<script src='threex.domevent.js'>< /script>```
//
// # use the object oriented api
//
// You bind an event like this
// 
// ```mesh.on('click', function(object3d){ ... })```
//
// To unbind an event, just do
//
// ```mesh.off('click', function(object3d){ ... })```
//
// As an alternative, there is another naming closer DOM events.
// Pick the one you like, they are doing the same thing
//
// ```mesh.addEventListener('click', function(object3d){ ... })```
// ```mesh.removeEventListener('click', function(object3d){ ... })```
//
// # Supported Events
//
// Always in a effort to stay close to usual pratices, the events name are the same as in DOM.
// The semantic is the same too.
// Currently, the available events are
// [click, dblclick, mouseup, mousedown](http://www.quirksmode.org/dom/events/click.html),
// [mouseover and mouse out](http://www.quirksmode.org/dom/events/mouseover.html).
//
// # use the standalone api
//
// The object-oriented api modifies THREE.Object3D class.
// It is a global class, so it may be legitimatly considered unclean by some people.
// If this bother you, simply do ```THREEx.DomEvents.noConflict()``` and use the
// standalone API. In fact, the object oriented API is just a thin wrapper
// on top of the standalone API.
//
// First, you instanciate the object
//
// ```var domEvent = new THREEx.DomEvent();```
// 
// Then you bind an event like this
//
// ```domEvent.bind(mesh, 'click', function(object3d){ object3d.scale.x *= 2; });```
//
// To unbind an event, just do
//
// ```domEvent.unbind(mesh, 'click', callback);```
//
// 
// # Code

//

/** @namespace */
var THREEx = THREEx || {};

// # Constructor
THREEx.DomEvents = function (camera, domElement) {
	this._camera = camera || null;
	this._domElement = domElement || document;
	this._raycaster = new THREE.Raycaster();
	this._selected = null;
	this._boundObjs = {};
	// Bind dom event for mouse and touch
	var _this = this;

	this._$onClick = function () {
		_this._onClick.apply(_this, arguments);
	};
	this._$onDblClick = function () {
		_this._onDblClick.apply(_this, arguments);
	};
	this._$onMouseMove = function () {
		_this._onMouseMove.apply(_this, arguments);
	};
	this._$onMouseDown = function () {
		_this._onMouseDown.apply(_this, arguments);
	};
	this._$onMouseUp = function () {
		_this._onMouseUp.apply(_this, arguments);
	};
	this._$onTouchMove = function () {
		_this._onTouchMove.apply(_this, arguments);
	};
	this._$onTouchStart = function () {
		_this._onTouchStart.apply(_this, arguments);
	};
	this._$onTouchEnd = function () {
		_this._onTouchEnd.apply(_this, arguments);
	};
	this._$onContextmenu = function () {
		_this._onContextmenu.apply(_this, arguments);
	};
	this._domElement.addEventListener('click', this._$onClick, false);
	this._domElement.addEventListener('dblclick', this._$onDblClick, false);
	this._domElement.addEventListener('mousemove', this._$onMouseMove, false);
	this._domElement.addEventListener('mousedown', this._$onMouseDown, false);
	this._domElement.addEventListener('mouseup', this._$onMouseUp, false);
	this._domElement.addEventListener('touchmove', this._$onTouchMove, false);
	this._domElement.addEventListener('touchstart', this._$onTouchStart, false);
	this._domElement.addEventListener('touchend', this._$onTouchEnd, false);
	this._domElement.addEventListener('contextmenu', this._$onContextmenu, false);
};

// # Destructor
THREEx.DomEvents.prototype.destroy = function () {
	// unBind dom event for mouse and touch
	this._domElement.removeEventListener('click', this._$onClick, false);
	this._domElement.removeEventListener('dblclick', this._$onDblClick, false);
	this._domElement.removeEventListener('mousemove', this._$onMouseMove, false);
	this._domElement.removeEventListener('mousedown', this._$onMouseDown, false);
	this._domElement.removeEventListener('mouseup', this._$onMouseUp, false);
	this._domElement.removeEventListener('touchmove', this._$onTouchMove, false);
	this._domElement.removeEventListener('touchstart', this._$onTouchStart, false);
	this._domElement.removeEventListener('touchend', this._$onTouchEnd, false);
	this._domElement.removeEventListener('contextmenu', this._$onContextmenu, false);
};

THREEx.DomEvents.eventNames = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "contextmenu", "touchstart", "touchend"];

THREEx.DomEvents.prototype._getRelativeMouseXY = function (domEvent) {
	var element = domEvent.target || domEvent.srcElement;
	if (element.nodeType === 3) {
		element = element.parentNode; // Safari fix -- see http://www.quirksmode.org/js/events_properties.html
	}

	//get the real position of an element relative to the page starting point (0, 0)
	//credits go to brainjam on answering http://stackoverflow.com/questions/5755312/getting-mouse-position-relative-to-content-area-of-an-element
	var elPosition = { x: 0, y: 0 };
	var tmpElement = element;
	//store padding
	var style = getComputedStyle(tmpElement, null);
	elPosition.y += parseInt(style.getPropertyValue("padding-top"), 10);
	elPosition.x += parseInt(style.getPropertyValue("padding-left"), 10);
	//add positions
	do {
		elPosition.x += tmpElement.offsetLeft;
		elPosition.y += tmpElement.offsetTop;
		style = getComputedStyle(tmpElement, null);

		elPosition.x += parseInt(style.getPropertyValue("border-left-width"), 10);
		elPosition.y += parseInt(style.getPropertyValue("border-top-width"), 10);
	} while (tmpElement = tmpElement.offsetParent);

	var elDimension = {
		width: element === window ? window.innerWidth : element.offsetWidth,
		height: element === window ? window.innerHeight : element.offsetHeight
	};

	return {
		x: +((domEvent.pageX - elPosition.x) / elDimension.width) * 2 - 1,
		y: -((domEvent.pageY - elPosition.y) / elDimension.height) * 2 + 1
	};
};

/********************************************************************************/
/*		domevent context						*/
/********************************************************************************/

// handle domevent context in object3d instance

THREEx.DomEvents.prototype._objectCtxInit = function (object3d) {
	object3d._3xDomEvent = {};
};
THREEx.DomEvents.prototype._objectCtxDeinit = function (object3d) {
	delete object3d._3xDomEvent;
};
THREEx.DomEvents.prototype._objectCtxIsInit = function (object3d) {
	return object3d._3xDomEvent ? true : false;
};
THREEx.DomEvents.prototype._objectCtxGet = function (object3d) {
	return object3d._3xDomEvent;
};

/********************************************************************************/
/*										*/
/********************************************************************************/

/**
 * Getter/Setter for camera
*/
THREEx.DomEvents.prototype.camera = function (value) {
	if (value) this._camera = value;
	return this._camera;
};

THREEx.DomEvents.prototype.bind = function (object3d, eventName, callback, useCapture) {
	console.assert(THREEx.DomEvents.eventNames.indexOf(eventName) !== -1, "not available events:" + eventName);

	if (!this._objectCtxIsInit(object3d)) this._objectCtxInit(object3d);
	var objectCtx = this._objectCtxGet(object3d);
	if (!objectCtx[eventName + 'Handlers']) objectCtx[eventName + 'Handlers'] = [];

	objectCtx[eventName + 'Handlers'].push({
		callback: callback,
		useCapture: useCapture
	});

	// add this object in this._boundObjs
	if (this._boundObjs[eventName] === undefined) {
		this._boundObjs[eventName] = [];
	}
	this._boundObjs[eventName].push(object3d);
};
THREEx.DomEvents.prototype.addEventListener = THREEx.DomEvents.prototype.bind;

THREEx.DomEvents.prototype.unbind = function (object3d, eventName, callback, useCapture) {
	console.assert(THREEx.DomEvents.eventNames.indexOf(eventName) !== -1, "not available events:" + eventName);

	if (!this._objectCtxIsInit(object3d)) this._objectCtxInit(object3d);

	var objectCtx = this._objectCtxGet(object3d);
	if (!objectCtx[eventName + 'Handlers']) objectCtx[eventName + 'Handlers'] = [];

	var handlers = objectCtx[eventName + 'Handlers'];
	for (var i = 0; i < handlers.length; i++) {
		var handler = handlers[i];
		if (callback != handler.callback) continue;
		if (useCapture != handler.useCapture) continue;
		handlers.splice(i, 1);
		break;
	}
	// from this object from this._boundObjs
	var index = this._boundObjs[eventName].indexOf(object3d);
	console.assert(index !== -1);
	this._boundObjs[eventName].splice(index, 1);
};
THREEx.DomEvents.prototype.removeEventListener = THREEx.DomEvents.prototype.unbind;

THREEx.DomEvents.prototype._bound = function (eventName, object3d) {
	var objectCtx = this._objectCtxGet(object3d);
	if (!objectCtx) return false;
	return objectCtx[eventName + 'Handlers'] ? true : false;
};

/********************************************************************************/
/*		onMove								*/
/********************************************************************************/

// # handle mousemove kind of events

THREEx.DomEvents.prototype._onMove = function (eventName, mouseX, mouseY, origDomEvent) {
	//console.log('eventName', eventName, 'boundObjs', this._boundObjs[eventName])
	// get objects bound to this event
	var boundObjs = this._boundObjs[eventName];
	if (boundObjs === undefined || boundObjs.length === 0) return;
	// compute the intersection
	var vector = new THREE.Vector2();

	// update the picking ray with the camera and mouse position
	vector.set(mouseX, mouseY);
	this._raycaster.setFromCamera(vector, this._camera);

	var intersects = this._raycaster.intersectObjects(boundObjs);

	var oldSelected = this._selected;

	if (intersects.length > 0) {
		var notifyOver, notifyOut, notifyMove;
		var intersect = intersects[0];
		var newSelected = intersect.object;
		this._selected = newSelected;
		// if newSelected bound mousemove, notify it
		notifyMove = this._bound('mousemove', newSelected);

		if (oldSelected != newSelected) {
			// if newSelected bound mouseenter, notify it
			notifyOver = this._bound('mouseover', newSelected);
			// if there is a oldSelect and oldSelected bound mouseleave, notify it
			notifyOut = oldSelected && this._bound('mouseout', oldSelected);
		}
	} else {
		// if there is a oldSelect and oldSelected bound mouseleave, notify it
		notifyOut = oldSelected && this._bound('mouseout', oldSelected);
		this._selected = null;
	}

	// notify mouseMove - done at the end with a copy of the list to allow callback to remove handlers
	notifyMove && this._notify('mousemove', newSelected, origDomEvent, intersect);
	// notify mouseEnter - done at the end with a copy of the list to allow callback to remove handlers
	notifyOver && this._notify('mouseover', newSelected, origDomEvent, intersect);
	// notify mouseLeave - done at the end with a copy of the list to allow callback to remove handlers
	notifyOut && this._notify('mouseout', oldSelected, origDomEvent, intersect);
};

/********************************************************************************/
/*		onEvent								*/
/********************************************************************************/

// # handle click kind of events

THREEx.DomEvents.prototype._onEvent = function (eventName, mouseX, mouseY, origDomEvent) {
	//console.log('eventName', eventName, 'boundObjs', this._boundObjs[eventName])
	// get objects bound to this event
	var boundObjs = this._boundObjs[eventName];
	if (boundObjs === undefined || boundObjs.length === 0) return;
	// compute the intersection
	var vector = new THREE.Vector2();

	// update the picking ray with the camera and mouse position
	vector.set(mouseX, mouseY);
	this._raycaster.setFromCamera(vector, this._camera);

	var intersects = this._raycaster.intersectObjects(boundObjs, true);
	// if there are no intersections, return now
	if (intersects.length === 0) return;

	// init some variables
	var intersect = intersects[0];
	var object3d = intersect.object;
	var objectCtx = this._objectCtxGet(object3d);
	var objectParent = object3d.parent;

	while (typeof objectCtx == 'undefined' && objectParent) {
		objectCtx = this._objectCtxGet(objectParent);
		objectParent = objectParent.parent;
	}
	if (!objectCtx) return;

	// notify handlers
	this._notify(eventName, object3d, origDomEvent, intersect);
};

THREEx.DomEvents.prototype._notify = function (eventName, object3d, origDomEvent, intersect) {
	var objectCtx = this._objectCtxGet(object3d);
	var handlers = objectCtx ? objectCtx[eventName + 'Handlers'] : null;

	// parameter check
	console.assert(arguments.length === 4);

	// do bubbling
	if (!objectCtx || !handlers || handlers.length === 0) {
		object3d.parent && this._notify(eventName, object3d.parent, origDomEvent, intersect);
		return;
	}

	// notify all handlers
	var handlers = objectCtx[eventName + 'Handlers'];
	for (var i = 0; i < handlers.length; i++) {
		var handler = handlers[i];
		var toPropagate = true;
		handler.callback({
			type: eventName,
			target: object3d,
			origDomEvent: origDomEvent,
			intersect: intersect,
			stopPropagation: function stopPropagation() {
				toPropagate = false;
			}
		});
		if (!toPropagate) continue;
		// do bubbling
		if (handler.useCapture === false) {
			object3d.parent && this._notify(eventName, object3d.parent, origDomEvent, intersect);
		}
	}
};

/********************************************************************************/
/*		handle mouse events						*/
/********************************************************************************/
// # handle mouse events

THREEx.DomEvents.prototype._onMouseDown = function (event) {
	return this._onMouseEvent('mousedown', event);
};
THREEx.DomEvents.prototype._onMouseUp = function (event) {
	return this._onMouseEvent('mouseup', event);
};

THREEx.DomEvents.prototype._onMouseEvent = function (eventName, domEvent) {
	var mouseCoords = this._getRelativeMouseXY(domEvent);
	this._onEvent(eventName, mouseCoords.x, mouseCoords.y, domEvent);
};

THREEx.DomEvents.prototype._onMouseMove = function (domEvent) {
	var mouseCoords = this._getRelativeMouseXY(domEvent);
	this._onMove('mousemove', mouseCoords.x, mouseCoords.y, domEvent);
	this._onMove('mouseover', mouseCoords.x, mouseCoords.y, domEvent);
	this._onMove('mouseout', mouseCoords.x, mouseCoords.y, domEvent);
};

THREEx.DomEvents.prototype._onClick = function (event) {
	// TODO handle touch ?
	this._onMouseEvent('click', event);
};
THREEx.DomEvents.prototype._onDblClick = function (event) {
	// TODO handle touch ?
	this._onMouseEvent('dblclick', event);
};

THREEx.DomEvents.prototype._onContextmenu = function (event) {
	//TODO don't have a clue about how this should work with touch..
	this._onMouseEvent('contextmenu', event);
};

/********************************************************************************/
/*		handle touch events						*/
/********************************************************************************/
// # handle touch events


THREEx.DomEvents.prototype._onTouchStart = function (event) {
	return this._onTouchEvent('touchstart', event);
};
THREEx.DomEvents.prototype._onTouchEnd = function (event) {
	return this._onTouchEvent('touchend', event);
};

THREEx.DomEvents.prototype._onTouchMove = function (domEvent) {
	if (domEvent.touches.length != 1) return undefined;

	domEvent.preventDefault();

	var mouseX = +(domEvent.touches[0].pageX / window.innerWidth) * 2 - 1;
	var mouseY = -(domEvent.touches[0].pageY / window.innerHeight) * 2 + 1;
	this._onMove('mousemove', mouseX, mouseY, domEvent);
	this._onMove('mouseover', mouseX, mouseY, domEvent);
	this._onMove('mouseout', mouseX, mouseY, domEvent);
};

THREEx.DomEvents.prototype._onTouchEvent = function (eventName, domEvent) {
	if (domEvent.touches.length != 1) return undefined;

	domEvent.preventDefault();

	var mouseX = +(domEvent.touches[0].pageX / window.innerWidth) * 2 - 1;
	var mouseY = -(domEvent.touches[0].pageY / window.innerHeight) * 2 + 1;
	this._onEvent(eventName, mouseX, mouseY, domEvent);
};

module.exports = THREEx.DomEvents;

},{}],16:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Molecule = require('./Molecule');
var OrbitControls = require('./OrbitControls');
var DomEvents = require('./domEvents');

var Model = function () {
	function Model(wrap, w, h) {
		_classCallCheck(this, Model);

		this.w = w;
		this.h = h;

		this.molecules = [];

		// init three.js
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		});
		this.renderer.setClearColor(0xffffff, 0);
		this.renderer.setSize(this.w, this.h);

		this.wrap = wrap;
		console.log(wrap);
		this.wrap.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, this.w / this.h, 0.1, 1000);
		this.orbit = new THREE.OrbitControls(this.camera, this.renderer.domElement, this.wrap);
		this.scene = new THREE.Scene();

		this.lights = [];
		this.lights[0] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[1] = new THREE.PointLight(0xffffff, 1, 0);
		this.lights[2] = new THREE.PointLight(0xffffff, 1, 0);

		this.lights[0].position.set(0, 200, 0);
		this.lights[1].position.set(100, 200, 100);
		this.lights[2].position.set(-100, -200, -100);

		this.scene.add(this.lights[0]);
		this.scene.add(this.lights[1]);
		this.scene.add(this.lights[2]);

		this.domEvents = new DomEvents(this.camera, this.wrap);
	}

	_createClass(Model, [{
		key: 'resize',
		value: function resize(w, h) {
			this.w = w;
			this.h = h;

			this.camera.aspect = this.w / this.h;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(this.w, this.h);
		}
	}, {
		key: 'addMolecule',
		value: function addMolecule(data) {
			var mol = new Molecule(this, this.molecules.length, data);
			return this.molecules.push(mol);
		}
	}, {
		key: 'removeMolecule',
		value: function removeMolecule(i) {
			if (this.molecules[i]) {
				this.molecules[i].remove();
				this.molecules.splice(i, 1);
			}
		}
	}, {
		key: 'start',
		value: function start() {
			this.loop();
		}
	}, {
		key: 'loop',
		value: function loop() {
			var _this = this;

			requestAnimationFrame(function () {
				return _this.loop();
			});

			this.camera.lookAt(this.scene.position);
			this.camera.updateMatrixWorld();

			for (var i = 0; i < this.molecules.length; i++) {
				this.molecules[i].update();
			}

			this.renderer.render(this.scene, this.camera);
		}
	}]);

	return Model;
}();

module.exports = Model;

},{"./Molecule":12,"./OrbitControls":13,"./domEvents":15}],17:[function(require,module,exports){
'use strict';

var types = require('./types.json');
var substances = require('./substances.json');

module.exports = {
  state: {
    types: types,
    substances: substances,
    history: [],
    stars: []
  },
  getters: {
    types: function types(state) {
      return state.types;
    },

    substances: function substances(state) {
      return function (type) {
        return state.substances[type];
      };
    }
  },
  mutations: {
    addStar: function addStar(state, subs) {
      state.stars.push(subs);
    },
    addHistory: function addHistory(state) {
      state.history.push(state.currentSubstance);
    }
  }
};

},{"./substances.json":18,"./types.json":19}],18:[function(require,module,exports){
module.exports={
  "acids": {
    "color": "orange",
    "label": "кислоты",
    "substances": [
      {
        "label": "Серная кислота",
        "formula": "H2SO4",
      },
      {
        "formula": "HAlO2",
        "label": "Метаалюминиевая"
      },
      {
        "formula": "HBO2",
        "label": "Метаборная"
      },
      {
        "formula": "H3BO3",
        "label": "Ортоборная"
      },
      {
        "formula": "HBr",
        "label": "Бромоводородная"
      }
      ,{"formula": "HCOOH",
        "label": "Муравьиная"}
      ,{"formula": "HCN",
        "label": "Циановодородная"}
      ,{"formula": "H2CO3",
        "label": "Угольная"}
      ,{"formula": "H2C2O4",
        "label": "Щавелевая"}
      ,{"formula": "H4C2O2",
        "label": "Уксусная"}
      ,{"formula": "HCl",
        "label": "Хлороводородная"}
      ,{"formula": "HClO",
        "label": "Хлорноватистая"}
      ,{"formula": "HClO2",
        "label": "Хлористая"}
      ,{"formula": "HClO3",
        "label": "Хлорноватая"}
      ,{"formula": "HClO4",
        "label": "Хлорная"}
      ,{"formula": "HCrO2",
        "label": "Метахромистая"}
      ,{"formula": "HCrO4",
        "label": "Хромовая"}
      ,{"formula": "HCr2O7",
        "label": "Двухромовая"}
      ,{"formula": "HI",
        "label": "Иодоводородная"}
      ,{"formula": "HMnO4",
        "label": "Марганцевая"}
      ,{"formula": "H2MnO4",
        "label": "Марганцовистая"}
      ,{"formula": "H2MoO4",
        "label": "Молибденовая"}
      ,{"formula": "HNO2",
        "label": "Азотистая"}
      ,{"formula": "HNO3",
        "label": "Азотная"}
      ,{"formula": "HPO3",
        "label": "Метафосфорная"}
      ,{"formula": "HPO4",
        "label": "Ортофосфорная"}
      ,{"formula": "H4P2O7",
          "label": "Двуфосфорная (Пирофосфорная)"}
      ,{"formula": "H3PO3",
        "label": "Фосфористая"}
      ,{"formula": "H3PO2",
        "label": "Фосфорноватистая"}
      ,{"formula": "H2S",
        "label": "Сероводородная"}
      ,{"formula": "H2SO3",
        "label": "Сернистая"}
      ,{"formula": "H2SO4",
        "label": "Серная"}
      ,{"formula": "H2S2O3",
        "label": "Тиосерная"}
      ,{"formula": "H2Se",
        "label": "Селеноводородная"}
      ,{"formula": "H2SiO3",
        "label": "Кремниевая"}
      ,{"formula": "HVO3",
        "label": "Ванадиевая"}
      ,{"formula": "H2WO4",
        "label": "Вольфрамовая"}
    ]
  },
  "oxides": {
    "color": "blue",
    "label": "Оксиды",
    "substances": [
      {
        "formula": "CO",
        "label": "Оксид углерода (II)"
      },
      {
        "formula": "CO2",
        "label": "Оксид углерода (IV)"
      },
      {
        "formula": "MgO",
        "label": "Оксид магния"
      },
      {
        "formula": "CaO",
        "label": "Оксид кальция"
      },
      {
        "formula": "FeO",
        "label": "Оксид железа(II)"
      },
      {
        "formula": "Fe2O3",
        "label": "Оксид железа(III)"
      },
      {
        "formula": "P2O5",
        "label": "Оксид фосфора(V)"
      }
    ]
  },
  "foundations": {
    "color": "indigo",
    "label": "Основания",
    "substances": [
      {"formula": "КОН", "label": "гидроксид калия"},
      {"formula": "Ca(OH)2", "label": "гидроксид кальция"},
      {"formula": "Fe(OH)2", "label": "гидроксид железа (II)"},
      {"formula": "Fe(OH)3", "label": "гидроксид железа (III)"}
    ]
  },
  "salts": {
    "color": "lime",
    "label": "Соли",
    "substances": [
    ]
  },
  "caustics": {
    "color": "red",
    "label": "Щелочи",
    "substances": [
    ]
  },
  "alcohols": {
    "color": "green",
    "label": "Спирты",
    "substances": [
    ]
  }
}

},{}],19:[function(require,module,exports){
module.exports=[
  {
    "type": "acids",
    "label": "Оксиды",
    "img": "img/oxide.jpg",
    "link": "type/oxides",
    "description": "Окси́д — бинарное соединение химического элемента с кислородом в степени окисления −2, в котором сам кислород связан только с менее электроотрицательным элементом."
  },
  {
    "type": "acids",
    "label": "Основания",
    "img": "img/foundations.jpeg",
    "link": "type/foundations",
    "description": "Основание — химическое соединение, способное образовывать ковалентную связь с протоном либо с вакантной орбиталью другого химического соединения."
  },
  {
    "type": "acids",
    "label": "Соли",
    "img": "img/salt.jpg",
    "link": "type/salts",
    "description": "Со́ли — сложные вещества, которые в водных растворах диссоциируют на катионы металлов и анионы кислотных остатков. ИЮПАК определяет соли как химические соединения, состоящие из катионов и анионов."
  },
  {
    "type": "acids",
    "label": "Кислоты",
    "img": "img/acid.jpg",
    "link": "type/acids",
    "description": "Кисло́ты — химические соединения, способные отдавать катион водорода (кислоты Брёнстеда), либо соединения, способные принимать электронную пару с образованием ковалентной связи (кислоты Льюиса)."
  },
  {
    "type": "acids",
    "label": "Щелочи",
    "img": "img/caustic.jpg",
    "link": "type/caustics",
    "description": "Щёлочи — гидроксиды щелочных, щёлочноземельных металлов и некоторых других элементов, например, таллия. К щелочам относятся хорошо растворимые в воде основания. При диссоциации щёлочи образуют анионы OH− и катион металла."
  },
  {
    "type": "acids",
    "label": "Спирты",
    "img": "img/alcohols.jpg",
    "link": "type/alcohols",
    "description": "Спирты́ — органические соединения, содержащие одну или более гидроксильных групп, непосредственно связанных с насыщенным атомом углерода. "
  }
]

},{}],20:[function(require,module,exports){
module.exports={
  "NOT_LOADED_SUBSTANCE": {
    "id": 0,
    "ru": "Извините, вещество не найдено",
    "en": "Sorry, substance not found"
  }
}

},{}],21:[function(require,module,exports){
'use strict';

var database = require('./clientDataBase');
var substance = require('./substanceData');
var errors = require('./errors.json');

module.exports = {
  modules: {
    substance: substance,
    database: database
  },
  state: {
    loading: false,
    errorLog: "",
    lang: "ru",
    standartLang: "en"
  },
  mutations: {
    loadingStart: function loadingStart(state) {
      state.loading = true;
    },
    loadingEnd: function loadingEnd(state) {
      state.loading = false;
    },
    errorLog: function errorLog(state, log) {
      state.errorLog = log;
    },
    changeLang: function changeLang(state, lang) {
      state.lang = lang;
    }
  },
  actions: {
    error: function error(_ref, obj) {
      var commit = _ref.commit,
          state = _ref.state;

      commit('errorLog', errors[obj.type][state.lang || state.standartLang]);
      console.log(obj.error);
    }
  }
};

},{"./clientDataBase":17,"./errors.json":20,"./substanceData":22}],22:[function(require,module,exports){
'use strict';

var pubchem = require('pubchem-access').domain('compound');
// const wikipedia = require("wikipedia-js");
var axios = require('axios');

var key = require('./key.json');

module.exports = {
  state: {
    structure: {},
    info: {}
  },
  mutations: {
    structure: function structure(state, _structure) {
      state.structure = _structure;
    },
    info: function info(state, _info) {
      state.info = _info;
    }
  },
  actions: {
    loadSubstance: function loadSubstance(_ref, props) {
      var commit, dispatch, rootState, enReq;
      return Promise.resolve().then(function () {
        commit = _ref.commit;
        dispatch = _ref.dispatch;
        rootState = _ref.rootState;

        commit('loadingStart');

        return Promise.resolve().then(function () {
          return dispatch('translateReq', props.req);
        }).then(function (_resp) {
          enReq = _resp;

          dispatch('getPubchemData', {
            req: enReq,
            cb: function cb(data) {
              var correctEnReq, info, structure;
              return Promise.resolve().then(function () {
                return dispatch('translateReq', data.IUPACName);
              }).then(function (_resp) {
                correctEnReq = _resp;
                return dispatch('wikiData', correctEnReq);
              }).then(function (_resp) {
                info = _resp;

                commit('info', { info: info, label: correctEnReq, formula: data.MolecularFormula });

                return dispatch('getStructureData', data.CID);
              }).then(function (_resp) {
                structure = _resp;

                commit('structure', structure);
                props.cb(structure);

                commit('loadingEnd');
              });
            }
          });
        }).catch(function (e) {
          dispatch('error', {
            type: 'NOT_LOADED_SUBSTANCE',
            error: e
          });
          commit('loadingEnd');
        });
      }).then(function () {});
    },
    wikiData: function wikiData(context, req) {
      var wiki, response;
      return Promise.resolve().then(function () {
        wiki = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + req;
        return axios.get(wiki);
      }).then(function (_resp) {
        response = _resp;

        return response.data.query.pages[Object.keys(obj)[0]];
      });
    },
    translateReq: function translateReq(_ref2, req) {
      var commit, translate, response;
      return Promise.resolve().then(function () {
        commit = _ref2.commit;
        translate = 'https://translate.yandex.net/api/v1.5/tr.json/translate?' + 'key=' + key.yat + '&text=' + encodeURIComponent(req) + '&lang=ru-en';
        return axios.get(translate);
      }).then(function (_resp) {
        response = _resp;

        return response.data.text[0].replace('the ', '');
      });
    },
    getPubchemData: function getPubchemData(context, props) {
      pubchem.setName(props.req).getProperties(["IUPACName", "MolecularFormula", "MolecularWeight"]).execute(function (data, status) {
        if (status !== 1) throw Error();else props.cb(data);
      });
    },
    getStructureData: function getStructureData(context, CID) {
      var url3d, url2d, response;
      return Promise.resolve().then(function () {
        url3d = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/' + CID + '/record/JSON/?record_type=3d&response_type=display';
        url2d = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/' + CID + '/record/JSON/?record_type=2d&response_type=display';
        response = void 0;
        return Promise.resolve().then(function () {
          return axios.get(url3d);
        }).then(function (_resp) {
          response = _resp;
          response.data.typeStructure = '3d';
        }).catch(function (e) {
          return Promise.resolve().then(function () {
            return axios.get(url2d);
          }).then(function (_resp) {
            response = _resp;
            response.data.typeStructure = '2d';
          });
        });
      }).then(function () {
        return response.data;
      });
    }
  }
};

},{"./key.json":23,"axios":29,"pubchem-access":57}],23:[function(require,module,exports){
module.exports={
  "yat": "trnsl.1.1.20171003T172921Z.f8b33207004fee57.22869296b2cd117d77da956d6f8d1e48d81c43c8"
}

},{}],24:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("html {\n  background: rgb(246, 246, 246);\n}")
;(function(){


const Navigation = require('../components/Navigation.vue');
const Errors = require('../components/Errors.vue');
const Preloader = require('../components/Preloader.vue');

module.exports = {
  name: 'app',
  components: {
    Navigation,
    Errors,
    Preloader
  },
  computed: {
    errorLog() {
      return this.$store.state.errorLog;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('navigation'),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('errors',{attrs:{"errorLog":_vm.errorLog}}),_vm._v(" "),_c('preloader',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}]})],1)}
__vue__options__.staticRenderFns = []
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3b72e0ed", __vue__options__)
  } else {
    hotAPI.rerender("data-v-3b72e0ed", __vue__options__)
  }
})()}
},{"../components/Errors.vue":2,"../components/Navigation.vue":5,"../components/Preloader.vue":6,"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],25:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("#main[data-v-2125c4c6] {\n  margin-top: 25%;\n}\nh1[data-v-2125c4c6] {\n  font-weight: 200;\n}")
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
__vue__options__.staticRenderFns = [function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"center-align container сenter",attrs:{"id":"main"}},[_c('h1',[_vm._v("Molecules!")]),_vm._v(" "),_c('p',{staticClass:"flow-text"},[_vm._v("Интерактивный тренажер по изучению веществ неорганической химии.")]),_vm._v(" "),_c('a',{staticClass:"waves-effect waves-light btn-large blue darken-2"},[_vm._v("Начните с H2SO4!")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('br'),_vm._v(" "),_c('p',{staticClass:"flow-text"},[_vm._v("Сервис разработал:"),_c('br'),_c('a',{attrs:{"href":"https://github.com/AZbang"}},[_vm._v("@azbang")])])])}]
__vue__options__._scopeId = "data-v-2125c4c6"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2125c4c6", __vue__options__)
  } else {
    hotAPI.rerender("data-v-2125c4c6", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],26:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("h1[data-v-23e8c2e7] {\n  margin-top: 0;\n  font-weight: 300;\n  font-size: 2em;\n}")
;(function(){


const CardSubstance = require('../components/CardSubstance.vue');

module.exports = {
  components: {
    CardSubstance
  },
  data() {
    return {
      type: this.$route.params.type
    };
  },
  computed: {
    data() {
      return this.$store.getters.substances(this.type);
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"substances"}},[_c('h1',[_vm._v("Тип \""+_vm._s(_vm.data.label)+"\":")]),_vm._v(" "),_vm._l((_vm.data.substances),function(item){return _c('card-substance',{attrs:{"data":item}})})],2)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-23e8c2e7"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23e8c2e7", __vue__options__)
  } else {
    hotAPI.rerender("data-v-23e8c2e7", __vue__options__)
  }
})()}
},{"../components/CardSubstance.vue":1,"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],27:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("h1[data-v-1237fda8] {\n  margin-top: 0;\n  font-weight: 300;\n  font-size: 2em;\n}\na[data-v-1237fda8] {\n  color: #000;\n}\n.card-content[data-v-1237fda8] {\n  position: relative;\n}\n.card-content a.btn-floating[data-v-1237fda8] {\n  top: -20px;\n}")
;(function(){


module.exports = {
  computed: {
    types() {
      console.log(this.$store);
      return this.$store.state.database.types;
    }
  },
  methods: {
    getLearnLink(type) {
      return "train/" + type;
    }
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"types"}},[_c('h1',[_vm._v("Типы веществ:")]),_vm._v(" "),_vm._l((_vm.types),function(item){return _c('div',{staticClass:"card"},[_c('router-link',{attrs:{"to":item.link}},[_c('div',{staticClass:"card-image waves-effect waves-block waves-light"},[_c('img',{attrs:{"src":item.img}}),_vm._v(" "),_c('span',{staticClass:"card-title"},[_vm._v(_vm._s(item.label))])]),_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('router-link',{staticClass:"btn-floating halfway-fab waves-effect waves-light red",attrs:{"to":_vm.getLearnLink(item.type)}},[_c('i',{staticClass:"material-icons"},[_vm._v("book")])]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))])],1)])],1)})],2)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-1237fda8"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1237fda8", __vue__options__)
  } else {
    hotAPI.rerender("data-v-1237fda8", __vue__options__)
  }
})()}
},{"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],28:[function(require,module,exports){
var __vueify_style_dispose__ = require("vueify/lib/insert-css").insert("h1[data-v-5f14c517] {\n  margin-top: 0;\n  font-weight: 300;\n  font-size: 2em;\n}")
;(function(){


const ModelSubstance = require('../components/ModelSubstance.vue');
const InfoSubstance = require('../components/InfoSubstance.vue');

module.exports = {
  components: {
    ModelSubstance,
    InfoSubstance
  },
  data() {
    return {
      query: this.$route.query.q
    };
  },
  mounted() {
    this.$store.dispatch('loadSubstance', {
      req: this.query,
      cb: data => this.$emit('generateStructure', data)
    });
  }
};
})()
if (module.exports.__esModule) module.exports = module.exports.default
var __vue__options__ = (typeof module.exports === "function"? module.exports.options: module.exports)
if (__vue__options__.functional) {console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions.")}
__vue__options__.render = function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container",attrs:{"id":"substance"}},[_c('model-substance'),_vm._v(" "),_c('info-substance')],1)}
__vue__options__.staticRenderFns = []
__vue__options__._scopeId = "data-v-5f14c517"
if (module.hot) {(function () {  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.accept()
  module.hot.dispose(__vueify_style_dispose__)
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5f14c517", __vue__options__)
  } else {
    hotAPI.rerender("data-v-5f14c517", __vue__options__)
  }
})()}
},{"../components/InfoSubstance.vue":3,"../components/ModelSubstance.vue":4,"vue":62,"vue-hot-reload-api":60,"vueify/lib/insert-css":63}],29:[function(require,module,exports){
module.exports = require('./lib/axios');
},{"./lib/axios":31}],30:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || require('./../helpers/btoa');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

}).call(this,require('_process'))
},{"../core/createError":37,"./../core/settle":40,"./../helpers/btoa":44,"./../helpers/buildURL":45,"./../helpers/cookies":47,"./../helpers/isURLSameOrigin":49,"./../helpers/parseHeaders":51,"./../utils":53,"_process":56}],31:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./cancel/Cancel":32,"./cancel/CancelToken":33,"./cancel/isCancel":34,"./core/Axios":35,"./defaults":42,"./helpers/bind":43,"./helpers/spread":52,"./utils":53}],32:[function(require,module,exports){
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],33:[function(require,module,exports){
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":32}],34:[function(require,module,exports){
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],35:[function(require,module,exports){
'use strict';

var defaults = require('./../defaults');
var utils = require('./../utils');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var isAbsoluteURL = require('./../helpers/isAbsoluteURL');
var combineURLs = require('./../helpers/combineURLs');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../defaults":42,"./../helpers/combineURLs":46,"./../helpers/isAbsoluteURL":48,"./../utils":53,"./InterceptorManager":36,"./dispatchRequest":38}],36:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":53}],37:[function(require,module,exports){
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":39}],38:[function(require,module,exports){
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"../cancel/isCancel":34,"../defaults":42,"./../utils":53,"./transformData":41}],39:[function(require,module,exports){
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};

},{}],40:[function(require,module,exports){
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":37}],41:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":53}],42:[function(require,module,exports){
(function (process){
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

}).call(this,require('_process'))
},{"./adapters/http":30,"./adapters/xhr":30,"./helpers/normalizeHeaderName":50,"./utils":53,"_process":56}],43:[function(require,module,exports){
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],44:[function(require,module,exports){
'use strict';

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;

},{}],45:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":53}],46:[function(require,module,exports){
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],47:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);

},{"./../utils":53}],48:[function(require,module,exports){
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],49:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);

},{"./../utils":53}],50:[function(require,module,exports){
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":53}],51:[function(require,module,exports){
'use strict';

var utils = require('./../utils');

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};

},{"./../utils":53}],52:[function(require,module,exports){
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],53:[function(require,module,exports){
'use strict';

var bind = require('./helpers/bind');
var isBuffer = require('is-buffer');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":43,"is-buffer":55}],54:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

module.exports = Emitter;

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks[event] = this._callbacks[event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  var self = this;
  this._callbacks = this._callbacks || {};

  function on() {
    self.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks[event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks[event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks[event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks[event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],55:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],56:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],57:[function(require,module,exports){
(function(root, factory) {
	if (typeof define === "function" && define.amd) {
		define(["superagent"], function(a0) {
            return factory(a0);
        });
    } else if (typeof exports === "object") {
        module.exports = factory(require("superagent"));
    } else {
        factory(request);
    }
})(this, function(request) {
	"use strict";
    /*
     * A module to communicate with PubChem.
     * Facilitates the use of PubChem API for JS environments.
     * Suitable for front-end and Node development.
     * @module pubchem-api
     */
    
    // Base of the Pubchem API
    var baseUrl = "https://pubchem.ncbi.nlm.nih.gov/rest/pug";
    
    /**
     * Defines Find constructor.
     * @param {string} prop - param associated with passed property
     * @param {string} [optionGet] - Additional option associated with CmpdOps obj.
     */
    function Find (prop, optionGet) {
        this.prop = prop;
        this.optionGet = optionGet;		 
    }
    
    /**
     * The final callback passed by user
     * @callback finalCallback
     * @param {string|Object} data - parsed response obtained from PubChem
     * @param {number} [status] - status of the response
     */
    
    /**
     * Returns object with the final "find()" function.
     * @function
     * @param {string} url - almost complete url (lacks only data format)
     * @returns {Object} obj - object containing "find()" function
     * @returns {Object} obj.find - final function calling "execSearch()"
     */
    Find.prototype.exec = function (url) {		
		function execute (callback, dataFormat, optionF) {
            execSearch(url, callback, {
				prop: this.prop,
				optionF: optionF,
				optionGet: this.optionGet,
				dF: dataFormat
            });
        }
        return {
            execute: execute.bind(this)	
        };
    };
    
    /**
     * Executes the request to PubChem.
     * @param {string} url - almost complete url (lacks only data format)
     * @param {finalCallback} callback - handles the response
     * @param {Object} obj - object that holds additional info (property, additional options, requested data format)
     * @param {string} obj.prop - param associated with passed property
     * @param {string} [obj.optionF] - option associated with "find()" function
     * @param {string} [obj.optionGet] - option associated with "get" function
     * @param {string} [obj.dF=JSON] - requested data format
     */
    function execSearch (url, callback, obj) {
        if (typeof obj.dF === "undefined") {
            obj.dF = "JSON";
        }        
        
        request
            .get(url.appendToPubchem(obj.dF))
            .end(function (err, res) {
                if (res.ok) {
                    // If response is status OK, then returns status = 1.
                    if (obj.dF !== "JSON" || obj.optionF === "raw") {
                        // Does not parse the response body if JSON is NOT requested or "raw" option is passed.
                        callback(res.body, 1);
                    } else {
                        // Parses the response body accordingly to the requested data.
                        callback(parseProperties(res.body, obj.prop, obj.optionGet), 1);
                    }                  
                } else if (res.serverError) {
                    // If server error is encountered, then returns status = 2.
                    callback("Service unavailable.", 2);
                } else if (res.clientError) {                    
                    // Handles client error. Returns status > 2, according to the encountered hindrance.
                    var errObj = new ClientError(res.body);
                    callback(errObj.getInfo(), errObj.getStatus());
                }               
        });
    }
    
    /**
     * Defines ClientError constructor.
     * @param {Object} body - response body to be parsed accordingly.
     */
    function ClientError (body) {
        this.messagesFromServer = ["Missing CID list", "No CID found", "Expected a property list"];
        this.responses = ["wrong CID number", "compound not found", "expected a property list"];
        this.message = body.Fault.Message;
    }
	
	ClientError.prototype.getInfo = function () {
		return this.responses[this.getStatus() - 3];
	};
	
	ClientError.prototype.getStatus = function () {
		return this.messagesFromServer.indexOf(this.message) + 3;
	};
    
    /**
     * Checks if the passed parameter is a valid CAS number.
     * @function
     * @param {string} toVerify - input to verify
     */
    function checkElement (toVerify) {
		var reg = new RegExp(/^(\d{1,8})-(\d{1,8})-(\d{1})$/), match = toVerify.match(reg);
		if (match === null) { return false; }
		var part1 = match[1], part2 = match[2],
			checkDigit = match[3].charAt(0),
			sum = 0,
			totalLength = part1.length + part2.length;
		for(var i = 0; i < part1.length; i += 1) {
			sum += part1.charAt(i) * totalLength;
			totalLength -= 1;
		}
		for(var j = 0; j < part2.length; j += 1) {
			sum += part2.charAt(j) * totalLength;
			totalLength -= 1;
		}
		return (sum % 10) === parseInt(checkDigit, 10);
	}
    
    /**
     * Appends a slash and a string.
     * @param {string} toAppend - fragment to appendToPubchem to the string on which this method is called
     * @returns {string} newUrl
     */
    if (!String.prototype.appendToPubchem) {
		String.prototype.appendToPubchem = function (toAppend) {
			return this + "/" + toAppend;
		};
    }
    
    /*
     * Parses the response body.
     * @function
     * @param {Object} body - response body to be parsed
     * @param {string} prop - param associated with passed property
     * @param {string} [optionGet] - option associated with "get" function
     * @returns {string|Object}
     */
    function parseProperties (body, prop, optionGet) {		
        if (prop === "Synonym") {
			var allNames = body.InformationList.Information[0][prop]; 
            if (typeof optionGet === "undefined") {
                return allNames;
			} else if (optionGet === "cas") {				
                for (var i = 0; i < allNames.length; i += 1) {
                    var el = allNames[i];
                    if (checkElement(el)) { return el; }
				}
			} else if (typeof optionGet === "number") {
                return optionGet > 0 ?
					allNames.slice(0, optionGet).map(function (element) {
						return element.toLowerCase();
					}):
					"";
            }
        } else if (prop === "propertyArray") {
            return body.PropertyTable.Properties[0];   
        } else {            
            return body.PropertyTable.Properties[0][prop];
        }
    }
    
    /**
     * Defines CmpdSpace ("Compound Space") constructor.
     * @class CmpdSpace
     * @param {string} url - base Pubchem url
     */
    function CmpdSpace (url) {
        // Properties that can be requested according to PubChem API.
        var properties = ["name", "name", "smiles", "cid", "inchi", "inchikey"];
        // Slightly changed names of those properties.
        var alias = ["Name", "Cas", "Smiles", "Cid", "Inchi", "InchiKey"];
        // Generates all setters.
		for(var i = 0; i <= properties.length; i += 1) {
			(function (j) {				
				this["set" + alias[j]] = function (toFind) {
					var newUrl = url.appendToPubchem(properties[j]).appendToPubchem(toFind);
					return new CmpdOps(newUrl);
				};
			}.call(this, i));
		}
    }
    
    /**
     * Defines CmpdOps ("Compound Operations") constructor.
     * @class CmpdOps
     * @param {string} url - base Pubchem url with the already passed data appendToPubchemed to it
     */
    var CmpdOps = function (url) {
        // Array of properties according to PubChem API.
        var properties = ["IUPACName", "MolecularFormula", "MolecularWeight",
                           "CanonicalSMILES", "IsomericSMILES", "InChI",
                           "InChIKey", "XLogP", "ExactMass",
                           "MonoisotopicMass", "TPSA", "Complexity",
                           "Charge", "HBondDonorCount", "HBondAcceptorCount",
                           "RotatableBondCount", "HeavyAtomCount", "IsotopeAtomCount",
                           "AtomStereoCount", "DefinedAtomStereoCount", "UndefinedAtomStereoCount",
                           "BondStereoCount", "DefinedBondStereoCount", "UndefinedBondStereoCount",
                           "CovalentUnitCount", "Volume3D", "XStericQuadrupole3D",
                           "YStericQuadrupole3D", "ZStericQuadrupole3D", "FeatureCount3D",
                           "FeatureAcceptorCount3D", "FeatureDonorCount3D", "FeatureAnionCount3D",
                           "FeatureCationCount3D", "FeatureRingCount3D", "FeatureHydrophobeCount3D",
                           "ConformerModelRMSD3D", "EffectiveRotorCount3D", "ConformerCount3D",
                           "Fingerprint2D"];
        
        // Generates all getters.
		for(var i = 0; i <= properties.length; i += 1) {
			(function (j) {				
				this["get" + properties[j]] = function (toFind) {
					var newUrl = url.appendToPubchem("property").appendToPubchem(properties[j]);
					return new Find(properties[j]).exec(newUrl);
				};
			}.call(this, i));
		}
		// Getter for array of properties
        this.getProperties = function (toFind) {
            if (!Array.isArray(toFind)) {
                throw new Error("Only array is accepted.");
            } else {
                var newUrl = url.appendToPubchem("property") + "/";
                toFind.forEach(function (element) {
                    if (properties.indexOf(element) >= 0) {
                        newUrl += element + ",";
                    }
                });
                return new Find("propertyArray").exec(newUrl);
            }
        };
		// Getter for Cas nr
        this.getCas = function () {
			var newUrl = url.appendToPubchem("synonyms");
            return new Find("Synonym", "cas").exec(newUrl);
        };
		/**
		 * Getter for names
		 * @param {number} number - "undefined" for all names
		 *							> 0 for specified number of names to display 
		 */
        this.getNames = function (number) {
            var newUrl = url.appendToPubchem("synonyms");
            return new Find("Synonym", number).exec(newUrl);
        };
    };
    
    /** Sets domain. */
	var pubchem = {
		domain: function (domain, method) {
			var newUrl = baseUrl.appendToPubchem(domain);        
			if (domain === "compound") {  
				return typeof method === undefined ? new CmpdSpace(newUrl): new CmpdSpace(newUrl, "post");
			} else {
				throw new Error("Unknown domain.");
			}
		}
	};
	return pubchem;
});
},{"superagent":59}],58:[function(require,module,exports){

/**
 * Reduce `arr` with `fn`.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Mixed} initial
 *
 * TODO: combatible error handling?
 */

module.exports = function(arr, fn, initial){  
  var idx = 0;
  var len = arr.length;
  var curr = arguments.length == 3
    ? initial
    : arr[idx++];

  while (idx < len) {
    curr = fn.call(null, curr, arr[idx], ++idx, arr);
  }
  
  return curr;
};
},{}],59:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('emitter');
var reduce = require('reduce');

/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  root = this;
}

/**
 * Noop.
 */

function noop(){};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * TODO: future proof, move to compoent land
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isHost(obj) {
  var str = {}.toString.call(obj);

  switch (str) {
    case '[object File]':
    case '[object Blob]':
    case '[object FormData]':
      return true;
    default:
      return false;
  }
}

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  return false;
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return obj === Object(obj);
}

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    if (null != obj[key]) {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(obj[key]));
    }
  }
  return pairs.join('&');
}

/**
 * Expose serialization method.
 */

 request.serializeObject = serialize;

 /**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'application/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

 request.serialize = {
   'application/x-www-form-urlencoded': serialize,
   'application/json': JSON.stringify
 };

 /**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  lines.pop(); // trailing CRLF

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function type(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function params(str){
  return reduce(str.split(/ *; */), function(obj, str){
    var parts = str.split(/ *= */)
      , key = parts.shift()
      , val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req, options) {
  options = options || {};
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  this.setStatusProperties(this.xhr.status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this.setHeaderProperties(this.header);
  this.body = this.req.method != 'HEAD'
    ? this.parseBody(this.text ? this.text : this.xhr.response)
    : null;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

Response.prototype.get = function(field){
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

Response.prototype.setHeaderProperties = function(header){
  // content-type
  var ct = this.header['content-type'] || '';
  this.type = type(ct);

  // params
  var obj = params(ct);
  for (var key in obj) this[key] = obj[key];
};

/**
 * Force given parser
 * 
 * Sets the body parser no matter type.
 * 
 * @param {Function}
 * @api public
 */

Response.prototype.parse = function(fn){
  this.parser = fn;
  return this;
};

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype.parseBody = function(str){
  var parse = this.parser || request.parse[this.type];
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

Response.prototype.setStatusProperties = function(status){
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }

  var type = status / 100 | 0;

  // status / class
  this.status = this.statusCode = status;
  this.statusType = type;

  // basics
  this.info = 1 == type;
  this.ok = 2 == type;
  this.clientError = 4 == type;
  this.serverError = 5 == type;
  this.error = (4 == type || 5 == type)
    ? this.toError()
    : false;

  // sugar
  this.accepted = 202 == status;
  this.noContent = 204 == status;
  this.badRequest = 400 == status;
  this.unauthorized = 401 == status;
  this.notAcceptable = 406 == status;
  this.notFound = 404 == status;
  this.forbidden = 403 == status;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  Emitter.call(this);
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {};
  this._header = {};
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      return self.callback(err);
    }

    self.emit('response', res);

    if (err) {
      return self.callback(err, res);
    }

    if (res.status >= 200 && res.status < 300) {
      return self.callback(err, res);
    }

    var new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
    new_err.original = err;
    new_err.response = res;
    new_err.status = res.status;

    self.callback(new_err, res);
  });
}

/**
 * Mixin `Emitter`.
 */

Emitter(Request.prototype);

/**
 * Allow for extension
 */

Request.prototype.use = function(fn) {
  fn(this);
  return this;
}

/**
 * Set timeout to `ms`.
 *
 * @param {Number} ms
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.timeout = function(ms){
  this._timeout = ms;
  return this;
};

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.clearTimeout = function(){
  this._timeout = 0;
  clearTimeout(this._timer);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */

Request.prototype.abort = function(){
  if (this.aborted) return;
  this.aborted = true;
  this.xhr.abort();
  this.clearTimeout();
  this.emit('abort');
  return this;
};

/**
 * Set header `field` to `val`, or multiple fields with one object.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Get case-insensitive header `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api private
 */

Request.prototype.getHeader = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} pass
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass){
  var str = btoa(user + ':' + pass);
  this.set('Authorization', 'Basic ' + str);
  return this;
};

/**
* Add query-string `val`.
*
* Examples:
*
*   request.get('/shoes')
*     .query('size=10')
*     .query({ color: 'blue' })
*
* @param {Object|String} val
* @return {Request} for chaining
* @api public
*/

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Write the field `name` and `val` for "multipart/form-data"
 * request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 * ```
 *
 * @param {String} name
 * @param {String|Blob|File} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.field = function(name, val){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(name, val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `filename`.
 *
 * ``` js
 * request.post('/upload')
 *   .attach(new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String} filename
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, filename){
  if (!this._formData) this._formData = new root.FormData();
  this._formData.append(field, file, filename);
  return this;
};

/**
 * Send `data`, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // querystring
 *       request.get('/search')
 *         .end(callback)
 *
 *       // multiple data "writes"
 *       request.get('/search')
 *         .send({ search: 'query' })
 *         .send({ range: '1..5' })
 *         .send({ order: 'desc' })
 *         .end(callback)
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"})
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
  *      request.post('/user')
  *        .send('name=tobi')
  *        .send('species=ferret')
  *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.send = function(data){
  var obj = isObject(data);
  var type = this.getHeader('Content-Type');

  // merge
  if (obj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    if (!type) this.type('form');
    type = this.getHeader('Content-Type');
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!obj || isHost(data)) return this;
  if (!type) this.type('json');
  return this;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  var fn = this._callback;
  this.clearTimeout();
  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Origin is not allowed by Access-Control-Allow-Origin');
  err.crossDomain = true;
  this.callback(err);
};

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

Request.prototype.timeoutError = function(){
  var timeout = this._timeout;
  var err = new Error('timeout of ' + timeout + 'ms exceeded');
  err.timeout = timeout;
  this.callback(err);
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

Request.prototype.withCredentials = function(){
  this._withCredentials = true;
  return this;
};

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  var self = this;
  var xhr = this.xhr = request.getXHR();
  var query = this._query.join('&');
  var timeout = this._timeout;
  var data = this._formData || this._data;

  // store callback
  this._callback = fn || noop;

  // state change
  xhr.onreadystatechange = function(){
    if (4 != xhr.readyState) return;

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (0 == status) {
      if (self.timedout) return self.timeoutError();
      if (self.aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(e){
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    xhr.onprogress = handleProgress;
  }
  try {
    if (xhr.upload && this.hasListeners('progress')) {
      xhr.upload.onprogress = handleProgress;
    }
  } catch(e) {
    // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
    // Reported here:
    // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
  }

  // timeout
  if (timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self.timedout = true;
      self.abort();
    }, timeout);
  }

  // querystring
  if (query) {
    query = request.serializeObject(query);
    this.url += ~this.url.indexOf('?')
      ? '&' + query
      : '?' + query;
  }

  // initiate request
  xhr.open(this.method, this.url, true);

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if ('GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !isHost(data)) {
    // serialize stuff
    var contentType = this.getHeader('Content-Type');
    var serialize = request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;
    xhr.setRequestHeader(field, this.header[field]);
  }

  // send stuff
  this.emit('request', this);
  xhr.send(data);
  return this;
};

/**
 * Faux promise support
 *
 * @param {Function} fulfill
 * @param {Function} reject
 * @return {Request}
 */

Request.prototype.then = function (fulfill, reject) {
  return this.end(function(err, res) {
    err ? reject(err) : fulfill(res);
  });
}

/**
 * Expose `Request`.
 */

request.Request = Request;

/**
 * Issue a request:
 *
 * Examples:
 *
 *    request('GET', '/users').end(callback)
 *    request('/users').end(callback)
 *    request('/users', callback)
 *
 * @param {String} method
 * @param {String|Function} url or callback
 * @return {Request}
 * @api public
 */

function request(method, url) {
  // callback
  if ('function' == typeof url) {
    return new Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new Request('GET', method);
  }

  return new Request(method, url);
}

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn){
  var req = request('GET', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn){
  var req = request('HEAD', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.del = function(url, fn){
  var req = request('DELETE', url);
  if (fn) req.end(fn);
  return req;
};

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn){
  var req = request('PATCH', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} data
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn){
  var req = request('POST', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} data or fn
 * @param {Function} fn
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn){
  var req = request('PUT', url);
  if ('function' == typeof data) fn = data, data = null;
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * Expose `request`.
 */

module.exports = request;

},{"emitter":54,"reduce":58}],60:[function(require,module,exports){
var Vue // late bind
var version
var map = window.__VUE_HOT_MAP__ = Object.create(null)
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) return
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
      'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Vue.extend(options),
    instances: []
  }
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot (id, options) {
  injectHook(options, initHookName, function () {
    map[id].instances.push(this)
  })
  injectHook(options, 'beforeDestroy', function () {
    var instances = map[id].instances
    instances.splice(instances.indexOf(this), 1)
  })
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook (options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing)
      ? existing.concat(hook)
      : [existing, hook]
    : [hook]
}

function tryWrap (fn) {
  return function (id, arg) {
    try { fn(id, arg) } catch (e) {
      console.error(e)
      console.warn('Something went wrong during Vue component hot-reload. Full reload required.')
    }
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  record.Ctor.options.render = options.render
  record.Ctor.options.staticRenderFns = options.staticRenderFns
  record.instances.slice().forEach(function (instance) {
    instance.$options.render = options.render
    instance.$options.staticRenderFns = options.staticRenderFns
    instance._staticTrees = [] // reset static trees
    instance.$forceUpdate()
  })
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (version[1] < 2) {
      // preserve pre 2.2 behavior for global mixin handling
      record.Ctor.extendOptions = options
    }
    var newCtor = record.Ctor.super.extend(options)
    record.Ctor.options = newCtor.options
    record.Ctor.cid = newCtor.cid
    record.Ctor.prototype = newCtor.prototype
    if (newCtor.release) {
      // temporary global mixin strategy used in < 2.0.0-alpha.6
      newCtor.release()
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn('Root or manually mounted instance modified. Full reload required.')
    }
  })
})

},{}],61:[function(require,module,exports){
(function (process){
/**
  * vue-router v2.7.0
  * (c) 2017 Evan You
  * @license MIT
  */
'use strict';

/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also regiseter instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    var val = extraQuery[key];
    parsedQuery[key] = Array.isArray(val) ? val.slice() : val;
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (index$1(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!index$1(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (index$1(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var normalizedPath = normalizePath(path, parent);
  var pathToRegexpOptions = route.pathToRegexpOptions || {};

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = index(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = {};
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
        offset = normalizeOffset(offset);
        position = getElementPosition(el, offset);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (resolvedDef.__esModule && resolvedDef.default) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      var current = this$1.current;
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  window.location.replace((base + "#" + path));
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.7.0';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

module.exports = VueRouter;

}).call(this,require('_process'))
},{"_process":56}],62:[function(require,module,exports){
(function (process,global){
/*!
 * Vue.js v2.4.4
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;
var tip = noop;
var formatComponentName = (null); // work around flow check

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  var generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (!isIE && typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  var plain = !(passive || once$$1 || capture);
  return {
    name: name,
    plain: plain,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

// #6552
function prioritizePlainEvents (a, b) {
  return a.plain ? -1 : b.plain ? 1 : 0
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  var toAdd = [];
  var hasModifier = false;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!event.plain) { hasModifier = true; }
    if (isUndef(cur)) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      event.handler = cur;
      toAdd.push(event);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  if (toAdd.length) {
    if (hasModifier) { toAdd.sort(prioritizePlainEvents); }
    for (var i = 0; i < toAdd.length; i++) {
      var event$1 = toAdd[i];
      add(event$1.name, event$1.handler, event$1.once, event$1.capture, event$1.passive);
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                process.env.NODE_ENV !== 'production'
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (process.env.NODE_ENV !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedAttribute(key) || config.isReservedAttr(key)) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (process.env.NODE_ENV !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (process.env.NODE_ENV !== 'production') {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if (process.env.NODE_ENV !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  process.env.NODE_ENV !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (process.env.NODE_ENV !== 'production' && !source) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || emptyObject,
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (process.env.NODE_ENV !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', vm.$options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.4';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    process.env.NODE_ENV !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var modelRs = parseModel(value);
  if (modelRs.idx === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (modelRs.exp) + ", " + (modelRs.idx) + ", " + assignment + ")")
  }
}

/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;

function parseModel (val) {
  str = val;
  len = str.length;
  index$1 = expressionPos = expressionEndPos = 0;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    return {
      exp: val,
      idx: null
    }
  }

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.substring(0, expressionPos),
    idx: val.substring(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (process.env.NODE_ENV !== 'production') {
    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (tag === 'input' && dynamicType) {
      warn$1(
        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
        "v-model does not support dynamic input types. Use v-if branches instead."
      );
    }
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (process.env.NODE_ENV !== 'production') {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, CHECKBOX_RADIO_TOKEN,
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, CHECKBOX_RADIO_TOKEN, genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  if (once$$1) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (process.env.NODE_ENV !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

var modules$1 = [
  klass$1,
  style$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (process.env.NODE_ENV !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (process.env.NODE_ENV !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      };
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        process.env.NODE_ENV !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options);
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else {
        processFor(element);
        processIf(element);
        processOnce(element);
        processKey(element);

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length;

        processRef(element);
        processSlot(element);
        processComponent(element);
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options);
        }
        processAttrs(element);
      }

      function checkRootConstraints (el) {
        if (process.env.NODE_ENV !== 'production') {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (process.env.NODE_ENV !== 'production') {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (process.env.NODE_ENV !== 'production') {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (process.env.NODE_ENV !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      process.env.NODE_ENV !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (process.env.NODE_ENV !== 'production') {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (process.env.NODE_ENV !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (process.env.NODE_ENV !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      addAttr(el, 'slot', slotTarget);
    }
    if (el.tag === 'template') {
      el.slotScope = getAndRemoveAttr(el, 'scope');
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if (process.env.NODE_ENV !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (process.env.NODE_ENV !== 'production') {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      process.env.NODE_ENV !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if (process.env.NODE_ENV !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var alias = keyCodes[key];
  return ("_k($event.keyCode," + (JSON.stringify(key)) + (alias ? ',' + JSON.stringify(alias) : '') + ")")
}

/*  */

function on (el, dir) {
  if (process.env.NODE_ENV !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      process.env.NODE_ENV !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (process.env.NODE_ENV !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (process.env.NODE_ENV !== 'production' && (
    el.children.length > 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  return "{key:" + key + ",fn:function(" + (String(el.attrsMap.scope)) + "){" +
    "return " + (el.tag === 'template'
      ? genChildren(el, state) || 'void 0'
      : genElement(el, state)) + "}}"
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
      );
    } else {
      errors.push(("invalid expression: " + (text.trim())));
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = options || {};

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (process.env.NODE_ENV !== 'production') {
      if (compiled.errors && compiled.errors.length) {
        warn(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production') {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (process.env.NODE_ENV !== 'production') {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (process.env.NODE_ENV !== 'production') {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(((this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

module.exports = Vue$3;

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":56}],63:[function(require,module,exports){
var inserted = exports.cache = {}

function noop () {}

exports.insert = function (css) {
  if (inserted[css]) return noop
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return function () {
    document.getElementsByTagName('head')[0].removeChild(elem)
    inserted[css] = false
  }
}

},{}],64:[function(require,module,exports){
(function (process){
/**
 * vuex v2.4.0
 * (c) 2017 Evan You
 * @license MIT
 */
'use strict';

var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: {} };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

function assertRawModule (path, rawModule) {
  ['getters', 'actions', 'mutations'].forEach(function (key) {
    if (!rawModule[key]) { return }

    forEachValue(rawModule[key], function (value, type) {
      assert(
        typeof value === 'function',
        makeAssertionMessage(path, key, type, value)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value) {
  var buf = key + " should be function but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";

  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state();
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '2.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

module.exports = index;

}).call(this,require('_process'))
},{"_process":56}]},{},[9]);
