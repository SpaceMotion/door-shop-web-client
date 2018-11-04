/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/App.js":
/*!*******************!*\
  !*** ./js/App.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./js/Header.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters */ "./js/Filters.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      filters: {
        isReady: false
      }
    };
    _this.updateFiltersData = _this.updateFiltersData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setUpFilters = _this.setUpFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setUpFilters();

    return _this;
  }

  _createClass(App, [{
    key: "updateFiltersData",
    value: function updateFiltersData(changes) {
      this.setState(function (state, props) {
        state.filters[changes.filterType][changes.idx].checked = changes.checked;
        return state;
      });
    }
  }, {
    key: "setUpFilters",
    value: function setUpFilters() {
      var _this2 = this;

      // Manufacturers
      var manufacturersDataGet = new Promise(function (resolve, reject) {
        fetch("http://".concat(_this2.props.api, "/manufacturers"), {
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.setState(function (state) {
            state.filters.manufacturers = data.results;
            return state;
          });

          resolve();
        });
      }); //Colors

      var colorsDataGet = new Promise(function (resolve, reject) {
        fetch("http://".concat(_this2.props.api, "/products"), {
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          var colors = [];
          data.results.forEach(function (product) {
            if (product.color && !colors.find(function (color) {
              return product.color.id === color.id;
            })) {
              colors.push({
                id: product.color.id,
                value: product.color.value
              });
            }
          });

          _this2.setState(function (state) {
            state.filters.colors = colors;
            return state;
          });

          resolve();
        });
      });
      Promise.all([manufacturersDataGet, colorsDataGet]).then(function () {
        _this2.setState(function (state) {
          state.filters.isReady = true;
          return state;
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "page-loader"
      }), React.createElement("div", {
        className: "wrapper"
      }, React.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], null), React.createElement("section", {
        className: "header-content"
      }, React.createElement("div", {
        className: "owl-slider"
      }, React.createElement("div", {
        className: "item",
        style: {
          backgroundImage: "url(assets/images/gallery-1.jpg)"
        }
      }, React.createElement("div", {
        className: "box"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("h2", {
        className: "title animated h1",
        "data-animation": "fadeInDown"
      }, "Modern furniture theme"), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, "Modern & powerfull template. ", React.createElement("br", null), " Clean design & reponsive layout. Google fonts integration"), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, React.createElement("a", {
        href: "https://themeforest.net/item/mobel-furniture-website-template/20382155",
        target: "_blank",
        className: "btn btn-main"
      }, React.createElement("i", {
        className: "icon icon-cart"
      }), " Buy this template"))))), React.createElement("div", {
        className: "item",
        style: {
          backgroundImage: "url(assets/images/gallery-2.jpg)"
        }
      }, React.createElement("div", {
        className: "box"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("h2", {
        className: "title animated h1",
        "data-animation": "fadeInDown"
      }, "Mobile ready!"), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, "Unlimited Choices. Unbeatable Prices. Free Shipping."), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, "Furniture category icon fonts!"), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, React.createElement("a", {
        href: "#",
        className: "btn btn-clean"
      }, "Get insipred"))))), React.createElement("div", {
        className: "item",
        style: {
          backgroundImage: "url(assets/images/gallery-3.jpg)"
        }
      }, React.createElement("div", {
        className: "box"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("h2", {
        className: "title animated h1",
        "data-animation": "fadeInDown"
      }, "Very Animate.css Friend."), React.createElement("div", {
        className: "desc animated",
        "data-animation": "fadeInUp"
      }, "Combine with animate.css. Or just use your own!."), React.createElement("div", {
        className: "desc animated",
        "data-animation": "fadeInUp"
      }, "Bunch of typography effects."), React.createElement("div", {
        className: "animated",
        "data-animation": "fadeInUp"
      }, React.createElement("a", {
        href: "https://themeforest.net/item/mobel-furniture-website-template/20382155",
        target: "_blank",
        className: "btn btn-clean"
      }, "Buy this template"))))))), React.createElement("section", {
        className: "owl-icons-wrapper owl-icons-frontpage"
      }, React.createElement("header", {
        className: "hidden"
      }, React.createElement("h2", null, "Product categories")), React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "owl-icons"
      }, React.createElement("a", {
        href: "#"
      }, React.createElement("figure", null, React.createElement("i", {
        className: "f-icon f-icon-bathroom"
      }), React.createElement("figcaption", null, "\u0414\u0412\u0415\u0420\u0418"))), React.createElement("a", {
        href: "#"
      }, React.createElement("figure", null, React.createElement("i", {
        className: "f-icon f-icon-carpet"
      }), React.createElement("figcaption", null, "\u041B\u0410\u041C\u0418\u041D\u0410\u0422")))))), React.createElement("section", {
        className: "products"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("header", {
        className: "hidden"
      }, React.createElement("h3", {
        className: "h3 title"
      }, "Product category grid")), React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-md-3 col-xs-12"
      }, this.state.filters.isReady ? React.createElement(_Filters__WEBPACK_IMPORTED_MODULE_1__["default"], {
        filters: this.state.filters,
        updateState: this.updateFiltersData
      }) : null), React.createElement("div", {
        className: "col-md-9 col-xs-12"
      }, React.createElement("div", {
        className: "sort-bar clearfix"
      }, React.createElement("div", {
        className: "sort-results pull-left"
      }, React.createElement("select", null, React.createElement("option", {
        value: "1"
      }, "10"), React.createElement("option", {
        value: "2"
      }, "50"), React.createElement("option", {
        value: "3"
      }, "100"), React.createElement("option", {
        value: "4"
      }, "All")), React.createElement("span", null, "Showing all ", React.createElement("strong", null, "50"), " of ", React.createElement("strong", null, "3,250"), " items")), React.createElement("div", {
        className: "sort-options pull-right"
      }, React.createElement("span", {
        className: "hidden-xs"
      }, "Sort by"), React.createElement("select", {
        id: "sort-price"
      }, React.createElement("option", {
        "data-option-value": "asc"
      }, "Price: lowest"), React.createElement("option", {
        "data-option-value": "desc"
      }, "Price: highest")), React.createElement("span", {
        className: "grid-list"
      }, React.createElement("a", {
        href: "products-grid.html"
      }, React.createElement("i", {
        className: "fa fa-th-large"
      })), React.createElement("a", {
        href: "products-list.html"
      }, React.createElement("i", {
        className: "fa fa-align-justify"
      })), React.createElement("a", {
        href: "javascript:void(0);",
        className: "toggle-filters-mobile"
      }, React.createElement("i", {
        className: "fa fa-search"
      }))))), React.createElement("div", {
        id: "products",
        className: "row"
      }, React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-discount category-sofa material-leather"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("span", {
        className: "label"
      }, "-50%"), React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-1.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Green corner ", React.createElement("small", null, "Sofa"))), React.createElement("sub", null, "$ 1499,-"), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "1099"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla"))))), React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-discount category-armchair material-wood"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-2.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Laura ", React.createElement("small", null, "Armchair"))), React.createElement("sub", null, "$ 3999,-"), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "3499"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla"))))), React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-regular category-armchair material-leather"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-3.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Nude ", React.createElement("small", null, "Armchair"))), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "2999"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla"))))), React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-regular category-armchair material-wood"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("span", {
        className: "label label-warning"
      }, "New"), React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-4.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Aurora ", React.createElement("small", null, "Armchair"))), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "299"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla"))))), React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-discount category-armchair material-metal"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("span", {
        className: "label label-warning"
      }, "New"), React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-5.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Dining set ", React.createElement("small", null, "Armchair"))), React.createElement("sub", null, "$ 1999,-"), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "1499"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla"))))), React.createElement("div", {
        className: "col-md-6 col-xs-6 item price-regular category-sofa material-wood"
      }, React.createElement("article", null, React.createElement("div", {
        className: "info"
      }, React.createElement("span", {
        className: "add-favorite"
      }, React.createElement("a", {
        href: "javascript:void(0);",
        "data-title": "Add to favorites",
        "data-title-added": "Added to favorites list"
      }, React.createElement("i", {
        className: "icon icon-heart"
      }))), React.createElement("span", null, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open",
        "data-title": "Quick wiew"
      }, React.createElement("i", {
        className: "icon icon-eye"
      })))), React.createElement("div", {
        className: "btn btn-add"
      }, React.createElement("i", {
        className: "icon icon-cart"
      })), React.createElement("div", {
        className: "figure-grid"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "#productid1",
        className: "mfp-open"
      }, React.createElement("img", {
        src: "assets/images/product-6.png",
        alt: "",
        width: "360"
      }))), React.createElement("div", {
        className: "text"
      }, React.createElement("h2", {
        className: "title h4"
      }, React.createElement("a", {
        href: "product.html"
      }, "Seat chair ", React.createElement("small", null, "Sofa"))), React.createElement("sup", null, "$ ", React.createElement("span", {
        className: "price"
      }, "896"), ",-"), React.createElement("span", {
        className: "description clearfix"
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla")))))))), React.createElement("div", {
        className: "popup-main mfp-hide",
        id: "productid1"
      }, React.createElement("div", {
        className: "product"
      }, React.createElement("div", {
        className: "popup-title"
      }, React.createElement("div", {
        className: "h1 title"
      }, "Laura ", React.createElement("small", null, "product category"))), React.createElement("div", {
        className: "owl-product-gallery"
      }, React.createElement("img", {
        src: "assets/images/product-1.png",
        alt: "",
        width: "640"
      }), React.createElement("img", {
        src: "assets/images/product-2.png",
        alt: "",
        width: "640"
      }), React.createElement("img", {
        src: "assets/images/product-3.png",
        alt: "",
        width: "640"
      }), React.createElement("img", {
        src: "assets/images/product-4.png",
        alt: "",
        width: "640"
      })), React.createElement("div", {
        className: "popup-content"
      }, React.createElement("div", {
        className: "product-info-wrapper"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-6"
      }, React.createElement("div", {
        className: "info-box"
      }, React.createElement("strong", null, "Maifacturer"), React.createElement("span", null, "Brand name")), React.createElement("div", {
        className: "info-box"
      }, React.createElement("strong", null, "Materials"), React.createElement("span", null, "Wood, Leather, Acrylic")), React.createElement("div", {
        className: "info-box"
      }, React.createElement("strong", null, "Availability"), React.createElement("span", null, React.createElement("i", {
        className: "fa fa-check-square-o"
      }), " in stock"))), React.createElement("div", {
        className: "col-sm-6"
      }, React.createElement("div", {
        className: "info-box"
      }, React.createElement("strong", null, "Available Colors"), React.createElement("div", {
        className: "product-colors clearfix"
      }, React.createElement("span", {
        className: "color-btn color-btn-red"
      }), React.createElement("span", {
        className: "color-btn color-btn-blue checked"
      }), React.createElement("span", {
        className: "color-btn color-btn-green"
      }), React.createElement("span", {
        className: "color-btn color-btn-gray"
      }), React.createElement("span", {
        className: "color-btn color-btn-biege"
      }))), React.createElement("div", {
        className: "info-box"
      }, React.createElement("strong", null, "Choose size"), React.createElement("div", {
        className: "product-colors clearfix"
      }, React.createElement("span", {
        className: "color-btn color-btn-biege"
      }, "S"), React.createElement("span", {
        className: "color-btn color-btn-biege checked"
      }, "M"), React.createElement("span", {
        className: "color-btn color-btn-biege"
      }, "XL"), React.createElement("span", {
        className: "color-btn color-btn-biege"
      }, "XXL"))))))), React.createElement("div", {
        className: "popup-table"
      }, React.createElement("div", {
        className: "popup-cell"
      }, React.createElement("div", {
        className: "price"
      }, React.createElement("span", {
        className: "h3"
      }, "$ 1999,00 ", React.createElement("small", null, "$ 2999,00")))), React.createElement("div", {
        className: "popup-cell"
      }, React.createElement("div", {
        className: "popup-buttons"
      }, React.createElement("a", {
        href: "product.html"
      }, React.createElement("span", {
        className: "icon icon-eye"
      }), " ", React.createElement("span", {
        className: "hidden-xs"
      }, "View more")), React.createElement("a", {
        href: "javascript:void(0);"
      }, React.createElement("span", {
        className: "icon icon-cart"
      }), " ", React.createElement("span", {
        className: "hidden-xs"
      }, "Buy"))))))))), React.createElement("footer", null, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "footer-showroom"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-8"
      }, React.createElement("h2", null, "Visit our showroom"), React.createElement("p", null, "200 12th Ave, New York, NY 10001, USA"), React.createElement("p", null, "Mon - Sat: 10 am - 6 pm \xA0 \xA0 | \xA0 \xA0 Sun: 12pm - 2 pm")), React.createElement("div", {
        className: "col-sm-4 text-center"
      }, React.createElement("a", {
        href: "#",
        className: "btn btn-clean"
      }, React.createElement("span", {
        className: "icon icon-map-marker"
      }), " Get directions"), React.createElement("div", {
        className: "call-us h4"
      }, React.createElement("span", {
        className: "icon icon-phone-handset"
      }), " 333.278.06622")))), React.createElement("div", {
        className: "footer-links"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-4 col-md-2"
      }, React.createElement("h5", null, "Browse by"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Brand")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Product")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Category")))), React.createElement("div", {
        className: "col-sm-4 col-md-2"
      }, React.createElement("h5", null, "Recources"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Design")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Projects")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Sales")))), React.createElement("div", {
        className: "col-sm-4 col-md-2"
      }, React.createElement("h5", null, "Our company"), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "About")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "News")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "Contact")))), React.createElement("div", {
        className: "col-sm-12 col-md-6"
      }, React.createElement("h5", null, "Sign up for our newsletter"), React.createElement("p", null, React.createElement("i", null, "Add your email address to sign up for our monthly emails and to receive promotional offers.")), React.createElement("div", {
        className: "form-group form-newsletter"
      }, React.createElement("input", {
        className: "form-control",
        type: "text",
        name: "email",
        placeholder: "Email address"
      }), React.createElement("input", {
        type: "submit",
        className: "btn btn-clean btn-sm",
        value: "Subscribe"
      }))))), React.createElement("div", {
        className: "footer-social"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-sm-6"
      }, React.createElement("a", {
        href: "https://themeforest.net/item/mobel-furniture-website-template/20382155",
        target: "_blank"
      }, React.createElement("i", {
        className: "fa fa-download"
      }), " Download Mobel"), " \xA0 | ", React.createElement("a", {
        href: "#"
      }, "Sitemap"), " \xA0 | \xA0 ", React.createElement("a", {
        href: "#"
      }, "Privacy policy")), React.createElement("div", {
        className: "col-sm-6 links"
      }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("i", {
        className: "fa fa-facebook"
      }))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("i", {
        className: "fa fa-twitter"
      }))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("i", {
        className: "fa fa-google-plus"
      }))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("i", {
        className: "fa fa-youtube"
      }))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("i", {
        className: "fa fa-instagram"
      })))))))))));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, {
  api: 'door-shop.pavelgoltsev.com:8000/api/v1'
}), document.getElementById('app'));

/***/ }),

/***/ "./js/Filters.js":
/*!***********************!*\
  !*** ./js/Filters.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _FormInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormInput */ "./js/FormInput.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Filters =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, _getPrototypeOf(Filters).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: "onFilterTitleClick",
    value: function onFilterTitleClick(event) {
      var $this = $(event.target),
          $parent = $this.parent();
      $parent.toggleClass('active');

      if ($parent.hasClass('active')) {
        $parent.find('.filter-content').slideDown(300);
      } else {
        $parent.find('.filter-content').slideUp(200);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement("div", {
        id: "filters",
        className: "filters"
      }, React.createElement("div", {
        className: "filter-box"
      }, React.createElement("div", {
        className: "title",
        onClick: this.onFilterTitleClick
      }, "\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), React.createElement("div", {
        className: "filter-content"
      }, this.props.filters.manufacturers.map(function (manufacturer, idx) {
        return React.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
          key: idx,
          label: manufacturer.name,
          type: "checkbox",
          updateState: function updateState(state) {
            state.filterType = "manufacturers";
            state.idx = idx;

            _this.props.updateState(state);
          },
          checked: manufacturer.checked
        });
      }))), React.createElement("div", {
        className: "filter-box"
      }, React.createElement("div", {
        className: "title",
        onClick: this.onFilterTitleClick
      }, "\u0426\u0432\u0435\u0442"), React.createElement("div", {
        className: "filter-content filter-content_type_color"
      }, this.props.filters.colors.map(function (color, idx) {
        return React.createElement(_FormInput__WEBPACK_IMPORTED_MODULE_0__["default"], {
          key: idx,
          value: color.value,
          type: "color",
          updateState: function updateState(state) {
            state.filterType = "colors";
            state.idx = idx;

            _this.props.updateState(state);
          },
          checked: color.checked
        });
      }))));
    }
  }]);

  return Filters;
}(React.Component);



/***/ }),

/***/ "./js/FormInput.js":
/*!*************************!*\
  !*** ./js/FormInput.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormInput; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FormInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FormInput, _React$Component);

  function FormInput() {
    _classCallCheck(this, FormInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormInput).apply(this, arguments));
  }

  _createClass(FormInput, [{
    key: "render",
    value: function render() {
      var _this = this;

      var markup;

      switch (this.props.type) {
        case "checkbox":
          markup = React.createElement("span", {
            className: "checkbox"
          }, React.createElement("label", {
            className: this.props.checked ? "checked" : ""
          }, React.createElement("input", {
            type: "checkbox",
            onChange: function onChange(event) {
              _this.props.updateState({
                checked: event.target.checked
              });
            },
            value: this.props.checked
          }), this.props.label));
          break;

        case "color":
          markup = React.createElement("span", {
            className: "checkbox"
          }, React.createElement("label", {
            className: "checkbox-color ".concat(this.props.checked ? "checked" : ""),
            style: {
              backgroundColor: "#".concat(this.props.value),
              boxShadow: this.props.checked ? "0 0 0 2px white, 0 0 0 4px #".concat(this.props.value) : 'none'
            }
          }, React.createElement("input", {
            type: "checkbox",
            onChange: function onChange(event) {
              _this.props.updateState({
                checked: event.target.checked
              });
            },
            value: this.props.checked
          })));
          break;
      }

      return markup;
    }
  }]);

  return FormInput;
}(React.Component);



/***/ }),

/***/ "./js/Header.js":
/*!**********************!*\
  !*** ./js/Header.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("nav", {
        className: "navbar-fixed"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "navigation navigation-top clearfix"
      }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "javascript:void(0);",
        className: "open-search"
      }, React.createElement("i", {
        className: "icon icon-magnifier"
      }))), React.createElement("li", null, React.createElement("a", {
        href: "javascript:void(0);",
        className: "open-cart"
      }, React.createElement("i", {
        className: "icon icon-cart"
      }), " ", React.createElement("span", null, "3"))))), React.createElement("div", {
        className: "navigation navigation-main"
      }, React.createElement("a", {
        href: "#",
        className: "open-menu"
      }, React.createElement("i", {
        className: "icon icon-menu"
      })), React.createElement("div", {
        className: "floating-menu"
      }, React.createElement("div", {
        className: "close-menu-wrapper"
      }, React.createElement("span", {
        className: "close-menu"
      }, React.createElement("i", {
        className: "icon icon-cross"
      }))), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "index.html"
      }, "\u0414\u043E\u043C\u043E\u0439")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 ", React.createElement("span", {
        className: "open-dropdown"
      }, React.createElement("i", {
        className: "fa fa-angle-down"
      }))), React.createElement("div", {
        className: "navbar-dropdown navbar-dropdown-single"
      }, React.createElement("div", {
        className: "navbar-box"
      }, React.createElement("div", {
        className: "box-2"
      }, React.createElement("div", {
        className: "box clearfix"
      }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "\u0414\u0432\u0435\u0440\u0438")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "\u041B\u0430\u043C\u0438\u043D\u0430\u0442")))))))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430")), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))))), React.createElement("div", {
        className: "search-wrapper"
      }, React.createElement("input", {
        className: "form-control",
        placeholder: "Search..."
      }), React.createElement("button", {
        className: "btn btn-main btn-search"
      }, "Go!"), React.createElement("div", {
        className: "search-results"
      }, React.createElement("div", {
        className: "search-result-items"
      }, React.createElement("div", {
        className: "title h4"
      }, "Products ", React.createElement("a", {
        href: "#",
        className: "btn btn-clean-dark btn-xs"
      }, "View all")), React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Green corner"), " ", React.createElement("span", {
        className: "category"
      }, "Sofa"))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Laura"), " ", React.createElement("span", {
        className: "category"
      }, "Armchairs"))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Nude"), " ", React.createElement("span", {
        className: "category"
      }, "Dining tables"))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Aurora"), " ", React.createElement("span", {
        className: "category"
      }, "Nightstands"))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Dining set"), " ", React.createElement("span", {
        className: "category"
      }, "Kitchen"))), React.createElement("li", null, React.createElement("a", {
        href: "#"
      }, React.createElement("span", {
        className: "id"
      }, "42563"), " ", React.createElement("span", {
        className: "name"
      }, "Seat chair"), " ", React.createElement("span", {
        className: "category"
      }, "Bar sets"))))))), React.createElement("div", {
        className: "login-wrapper"
      }, React.createElement("form", null, React.createElement("div", {
        className: "h4"
      }, "Sign in"), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "email",
        className: "form-control",
        id: "exampleInputEmail1",
        placeholder: "Email"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("input", {
        type: "password",
        className: "form-control",
        id: "exampleInputPassword1",
        placeholder: "Password"
      })), React.createElement("div", {
        className: "form-group"
      }, React.createElement("a", {
        href: "#forgotpassword",
        className: "open-popup"
      }, "Forgot password?"), React.createElement("a", {
        href: "#createaccount",
        className: "open-popup"
      }, "Don't have an account?")), React.createElement("button", {
        type: "submit",
        className: "btn btn-block btn-main"
      }, "Submit"))), React.createElement("div", {
        className: "cart-wrapper"
      }, React.createElement("div", {
        className: "checkout"
      }, React.createElement("div", {
        className: "clearfix"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "cart-block cart-block-item clearfix"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "product.html"
      }, React.createElement("img", {
        src: "assets/images/product-1.png",
        alt: ""
      }))), React.createElement("div", {
        className: "title"
      }, React.createElement("div", null, React.createElement("a", {
        href: "product.html"
      }, "Green corner")), React.createElement("small", null, "Green corner")), React.createElement("div", {
        className: "quantity"
      }, React.createElement("input", {
        type: "number",
        className: "form-control form-quantity"
      })), React.createElement("div", {
        className: "price"
      }, React.createElement("span", {
        className: "final"
      }, "$ 1.998"), React.createElement("span", {
        className: "discount"
      }, "$ 2.666")), React.createElement("span", {
        className: "icon icon-cross icon-delete"
      })), React.createElement("div", {
        className: "cart-block cart-block-item clearfix"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "product.html"
      }, React.createElement("img", {
        src: "assets/images/product-2.png",
        alt: ""
      }))), React.createElement("div", {
        className: "title"
      }, React.createElement("div", null, React.createElement("a", {
        href: "product.html"
      }, "Green corner")), React.createElement("small", null, "Green corner")), React.createElement("div", {
        className: "quantity"
      }, React.createElement("input", {
        type: "number",
        className: "form-control form-quantity"
      })), React.createElement("div", {
        className: "price"
      }, React.createElement("span", {
        className: "final"
      }, "$ 1.998"), React.createElement("span", {
        className: "discount"
      }, "$ 2.666")), React.createElement("span", {
        className: "icon icon-cross icon-delete"
      })), React.createElement("div", {
        className: "cart-block cart-block-item clearfix"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "product.html"
      }, React.createElement("img", {
        src: "assets/images/product-3.png",
        alt: ""
      }))), React.createElement("div", {
        className: "title"
      }, React.createElement("div", null, React.createElement("a", {
        href: "product.html"
      }, "Green corner")), React.createElement("small", null, "Green corner")), React.createElement("div", {
        className: "quantity"
      }, React.createElement("input", {
        type: "number",
        className: "form-control form-quantity"
      })), React.createElement("div", {
        className: "price"
      }, React.createElement("span", {
        className: "final"
      }, "$ 1.998"), React.createElement("span", {
        className: "discount"
      }, "$ 2.666")), React.createElement("span", {
        className: "icon icon-cross icon-delete"
      })), React.createElement("div", {
        className: "cart-block cart-block-item clearfix"
      }, React.createElement("div", {
        className: "image"
      }, React.createElement("a", {
        href: "product.html"
      }, React.createElement("img", {
        src: "assets/images/product-4.png",
        alt: ""
      }))), React.createElement("div", {
        className: "title"
      }, React.createElement("div", null, React.createElement("a", {
        href: "product.html"
      }, "Green corner")), React.createElement("small", null, "Green corner")), React.createElement("div", {
        className: "quantity"
      }, React.createElement("input", {
        type: "number",
        className: "form-control form-quantity"
      })), React.createElement("div", {
        className: "price"
      }, React.createElement("span", {
        className: "final"
      }, "$ 1.998"), React.createElement("span", {
        className: "discount"
      }, "$ 2.666")), React.createElement("span", {
        className: "icon icon-cross icon-delete"
      }))), React.createElement("hr", null), React.createElement("div", {
        className: "clearfix"
      }, React.createElement("div", {
        className: "cart-block cart-block-footer clearfix"
      }, React.createElement("div", null, React.createElement("strong", null, "Discount 15%")), React.createElement("div", null, React.createElement("span", null, "$ 159,00"))), React.createElement("div", {
        className: "cart-block cart-block-footer clearfix"
      }, React.createElement("div", null, React.createElement("strong", null, "Shipping")), React.createElement("div", null, React.createElement("span", null, "$ 30,00"))), React.createElement("div", {
        className: "cart-block cart-block-footer clearfix"
      }, React.createElement("div", null, React.createElement("strong", null, "VAT")), React.createElement("div", null, React.createElement("span", null, "$ 59,00")))), React.createElement("hr", null), React.createElement("div", {
        className: "clearfix"
      }, React.createElement("div", {
        className: "cart-block cart-block-footer clearfix"
      }, React.createElement("div", null, React.createElement("strong", null, "Total")), React.createElement("div", null, React.createElement("div", {
        className: "h4 title"
      }, "$ 1259,00")))), React.createElement("div", {
        className: "cart-block-buttons clearfix"
      }, React.createElement("div", {
        className: "row"
      }, React.createElement("div", {
        className: "col-xs-6"
      }, React.createElement("a", {
        href: "#",
        className: "btn btn-clean-dark"
      }, "Continue shopping")), React.createElement("div", {
        className: "col-xs-6 text-right"
      }, React.createElement("a", {
        href: "#",
        className: "btn btn-main"
      }, React.createElement("span", {
        className: "icon icon-cart"
      }), " Checkout")))))))));
    }
  }]);

  return Header;
}(React.Component);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9BcHAuanNcIik7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi9GaWx0ZXJzXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdFx0aXNSZWFkeTogZmFsc2VcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJzRGF0YSA9IHRoaXMudXBkYXRlRmlsdGVyc0RhdGEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2V0VXBGaWx0ZXJzID0gdGhpcy5zZXRVcEZpbHRlcnMuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnNldFVwRmlsdGVycygpO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlRmlsdGVyc0RhdGEoY2hhbmdlcykge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XHJcblx0XHRcdHN0YXRlLmZpbHRlcnNbY2hhbmdlcy5maWx0ZXJUeXBlXVtjaGFuZ2VzLmlkeF0uY2hlY2tlZCA9IGNoYW5nZXMuY2hlY2tlZDtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRVcEZpbHRlcnMoKSB7XHJcblx0XHQvLyBNYW51ZmFjdHVyZXJzXHJcblx0XHRsZXQgbWFudWZhY3R1cmVyc0RhdGFHZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGZldGNoKGBodHRwOi8vJHt0aGlzLnByb3BzLmFwaX0vbWFudWZhY3R1cmVyc2AsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRcdHN0YXRlLmZpbHRlcnMubWFudWZhY3R1cmVycyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9Db2xvcnNcclxuXHRcdGxldCBjb2xvcnNEYXRhR2V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgaHR0cDovLyR7dGhpcy5wcm9wcy5hcGl9L3Byb2R1Y3RzYCwge1xyXG5cdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRsZXQgY29sb3JzID0gW107XHJcblx0XHRcdFx0ZGF0YS5yZXN1bHRzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuXHRcdFx0XHRcdGlmIChwcm9kdWN0LmNvbG9yICYmICFjb2xvcnMuZmluZCgoY29sb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb2R1Y3QuY29sb3IuaWQgPT09IGNvbG9yLmlkO1x0XHJcblx0XHRcdFx0XHR9KSkge1xyXG5cdFx0XHRcdFx0XHRjb2xvcnMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHByb2R1Y3QuY29sb3IuaWQsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHByb2R1Y3QuY29sb3IudmFsdWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmNvbG9ycyA9IGNvbG9ycztcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0XHRQcm9taXNlLmFsbChbbWFudWZhY3R1cmVyc0RhdGFHZXQsIGNvbG9yc0RhdGFHZXRdKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmlzUmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8SGVhZGVyLz5cclxuXHRcdFx0ICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1zbGlkZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMS5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+TW9kZXJuIGZ1cm5pdHVyZSB0aGVtZTwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGVybiAmIHBvd2VyZnVsbCB0ZW1wbGF0ZS4gPGJyIC8+IENsZWFuIGRlc2lnbiAmIHJlcG9uc2l2ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dC4gR29vZ2xlIGZvbnRzIGludGVncmF0aW9uXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbW9iZWwtZnVybml0dXJlLXdlYnNpdGUtdGVtcGxhdGUvMjAzODIxNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW5cIiA+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+IEJ1eSB0aGlzIHRlbXBsYXRlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGFzc2V0cy9pbWFnZXMvZ2FsbGVyeS0yLmpwZylcIn19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgYW5pbWF0ZWQgaDFcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkRvd25cIj5Nb2JpbGUgcmVhZHkhPC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+VW5saW1pdGVkIENob2ljZXMuIFVuYmVhdGFibGUgUHJpY2VzLiBGcmVlIFNoaXBwaW5nLjwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5GdXJuaXR1cmUgY2F0ZWdvcnkgaWNvbiBmb250cyE8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuXCI+R2V0IGluc2lwcmVkPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGFzc2V0cy9pbWFnZXMvZ2FsbGVyeS0zLmpwZylcIn19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgYW5pbWF0ZWQgaDFcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkRvd25cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ5IEFuaW1hdGUuY3NzIEZyaWVuZC5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MgYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tYmluZSB3aXRoIGFuaW1hdGUuY3NzLiBPciBqdXN0IHVzZSB5b3VyIG93biEuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzYyBhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdW5jaCBvZiB0eXBvZ3JhcGh5IGVmZmVjdHMuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbW9iZWwtZnVybml0dXJlLXdlYnNpdGUtdGVtcGxhdGUvMjAzODIxNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuXCI+QnV5IHRoaXMgdGVtcGxhdGU8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3dsLWljb25zLXdyYXBwZXIgb3dsLWljb25zLWZyb250cGFnZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3QgY2F0ZWdvcmllczwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1pY29uc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmLWljb24gZi1pY29uLWJhdGhyb29tXCI+PC9pPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+0JTQktCV0KDQmDwvZmlnY2FwdGlvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZi1pY29uIGYtaWNvbi1jYXJwZXRcIj48L2k+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlnY2FwdGlvbj7Qm9CQ0JzQmNCd0JDQojwvZmlnY2FwdGlvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMyB0aXRsZVwiPlByb2R1Y3QgY2F0ZWdvcnkgZ3JpZDwvaDM+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC14cy0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5maWx0ZXJzLmlzUmVhZHkgPyA8RmlsdGVycyBmaWx0ZXJzPXt0aGlzLnN0YXRlLmZpbHRlcnN9IHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZUZpbHRlcnNEYXRhfS8+IDogbnVsbH1cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOSBjb2wteHMtMTJcIj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1iYXIgY2xlYXJmaXhcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1yZXN1bHRzIHB1bGwtbGVmdFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTA8L29wdGlvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj41MDwvb3B0aW9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjEwMDwvb3B0aW9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPkFsbDwvb3B0aW9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNob3dpbmcgYWxsIDxzdHJvbmc+NTA8L3N0cm9uZz4gb2YgPHN0cm9uZz4zLDI1MDwvc3Ryb25nPiBpdGVtczwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnMgcHVsbC1yaWdodFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi14c1wiPlNvcnQgYnk8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInNvcnQtcHJpY2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLW9wdGlvbi12YWx1ZT1cImFzY1wiPlByaWNlOiBsb3dlc3Q8L29wdGlvbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLW9wdGlvbi12YWx1ZT1cImRlc2NcIj5QcmljZTogaGlnaGVzdDwvb3B0aW9uPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyaWQtbGlzdFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdHMtZ3JpZC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdGgtbGFyZ2VcIj48L2k+PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdHMtbGlzdC5odG1sXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwidG9nZ2xlLWZpbHRlcnMtbW9iaWxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdHNcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtZGlzY291bnQgY2F0ZWdvcnktc29mYSBtYXRlcmlhbC1sZWF0aGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+LTUwJTwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXIgPHNtYWxsPlNvZmE8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAxNDk5LC08L3N1Yj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4xMDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1kaXNjb3VudCBjYXRlZ29yeS1hcm1jaGFpciBtYXRlcmlhbC13b29kXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0yLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5MYXVyYSA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAzOTk5LC08L3N1Yj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4zNDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLWxlYXRoZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTMucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPk51ZGUgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4yOTk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLXdvb2RcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtd2FybmluZ1wiPk5ldzwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC00LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5BdXJvcmEgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4yOTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLWRpc2NvdW50IGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLW1ldGFsXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXdhcm5pbmdcIj5OZXc8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+RGluaW5nIHNldCA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAxOTk5LC08L3N1Yj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4xNDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LXNvZmEgbWF0ZXJpYWwtd29vZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+U2VhdCBjaGFpciA8c21hbGw+U29mYTwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+ODk2PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1tYWluIG1mcC1oaWRlXCIgaWQ9XCJwcm9kdWN0aWQxXCI+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC10aXRsZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMSB0aXRsZVwiPkxhdXJhIDxzbWFsbD5wcm9kdWN0IGNhdGVnb3J5PC9zbWFsbD48L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1wcm9kdWN0LWdhbGxlcnlcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjY0MFwiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0zLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjQwXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZm8td3JhcHBlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWlmYWN0dXJlcjwvc3Ryb25nPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkJyYW5kIG5hbWU8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3hcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1hdGVyaWFsczwvc3Ryb25nPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldvb2QsIExlYXRoZXIsIEFjcnlsaWM8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3hcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJpbGl0eTwvc3Ryb25nPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vXCI+PC9pPiBpbiBzdG9jazwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3hcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJsZSBDb2xvcnM8L3N0cm9uZz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29sb3JzIGNsZWFyZml4XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tcmVkXCI+PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJsdWUgY2hlY2tlZFwiPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1ncmVlblwiPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1ncmF5XCI+PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJpZWdlXCI+PC9zcGFuPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaG9vc2Ugc2l6ZTwvc3Ryb25nPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb2xvcnMgY2xlYXJmaXhcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlM8L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tYmllZ2UgY2hlY2tlZFwiPk08L3NwYW4+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tYmllZ2VcIj5YTDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlhYTDwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLXRhYmxlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNlbGxcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgzXCI+JCAxOTk5LDAwIDxzbWFsbD4kIDI5OTksMDA8L3NtYWxsPjwvc3Bhbj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jZWxsXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1idXR0b25zXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5WaWV3IG1vcmU8L3NwYW4+PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5CdXk8L3NwYW4+PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHRcdFx0ICAgICAgICA8Zm9vdGVyPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc2hvd3Jvb21cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+VmlzaXQgb3VyIHNob3dyb29tPC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjIwMCAxMnRoIEF2ZSwgTmV3IFlvcmssIE5ZIDEwMDAxLCBVU0E8L3A+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb24gLSBTYXQ6IDEwIGFtIC0gNiBwbSAmbmJzcDsgJm5ic3A7IHwgJm5ic3A7ICZuYnNwOyBTdW46IDEycG0gLSAyIHBtPC9wPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1hcC1tYXJrZXJcIj48L3NwYW4+IEdldCBkaXJlY3Rpb25zPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxsLXVzIGg0XCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLXBob25lLWhhbmRzZXRcIj48L3NwYW4+IDMzMy4yNzguMDY2MjI8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1saW5rc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLW1kLTJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Ccm93c2UgYnk8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkJyYW5kPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZHVjdDwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNhdGVnb3J5PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbWQtMlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlJlY291cmNlczwvaDU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+RGVzaWduPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvamVjdHM8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5TYWxlczwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLW1kLTJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5PdXIgY29tcGFueTwvaDU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QWJvdXQ8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5OZXdzPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q29udGFjdDwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC02XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+U2lnbiB1cCBmb3Igb3VyIG5ld3NsZXR0ZXI8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGk+QWRkIHlvdXIgZW1haWwgYWRkcmVzcyB0byBzaWduIHVwIGZvciBvdXIgbW9udGhseSBlbWFpbHMgYW5kIHRvIHJlY2VpdmUgcHJvbW90aW9uYWwgb2ZmZXJzLjwvaT48L3A+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1uZXdzbGV0dGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tY2xlYW4gYnRuLXNtXCIgdmFsdWU9XCJTdWJzY3JpYmVcIiAvPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbW9iZWwtZnVybml0dXJlLXdlYnNpdGUtdGVtcGxhdGUvMjAzODIxNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT4gRG93bmxvYWQgTW9iZWw8L2E+ICZuYnNwOyB8IDxhIGhyZWY9XCIjXCI+U2l0ZW1hcDwvYT4gJm5ic3A7IHwgJm5ic3A7IDxhIGhyZWY9XCIjXCI+UHJpdmFjeSBwb2xpY3k8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGxpbmtzXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1nb29nbGUtcGx1c1wiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS15b3V0dWJlXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWluc3RhZ3JhbVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvZm9vdGVyPlxyXG5cdFx0XHQgICAgPC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcblJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge1xyXG5cdGFwaTogJ2Rvb3Itc2hvcC5wYXZlbGdvbHRzZXYuY29tOjgwMDAvYXBpL3YxJ1xyXG59KSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTsiLCJpbXBvcnQgRm9ybUlucHV0IGZyb20gXCIuL0Zvcm1JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsdGVycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0b25GaWx0ZXJUaXRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJChldmVudC50YXJnZXQpLFxyXG4gICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKTtcclxuICAgICAgICAkcGFyZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgaWYgKCRwYXJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmZpbHRlci1jb250ZW50Jykuc2xpZGVEb3duKDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNsaWRlVXAoMjAwKTtcclxuICAgICAgICB9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmlsdGVyc1wiIGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbkNsaWNrPXt0aGlzLm9uRmlsdGVyVGl0bGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCf0YDQvtC40LfQstC+0LTQuNGC0LXQu9GMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuZmlsdGVycy5tYW51ZmFjdHVyZXJzLm1hcCgobWFudWZhY3R1cmVyLCBpZHgpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1JbnB1dCBrZXk9e2lkeH0gbGFiZWw9e21hbnVmYWN0dXJlci5uYW1lfSB0eXBlPVwiY2hlY2tib3hcIiB1cGRhdGVTdGF0ZT17KHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmlsdGVyVHlwZSA9IFwibWFudWZhY3R1cmVyc1wiO1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUuaWR4ID0gaWR4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2hlY2tlZD17bWFudWZhY3R1cmVyLmNoZWNrZWR9Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgXHR9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbkNsaWNrPXt0aGlzLm9uRmlsdGVyVGl0bGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LLQtdGCXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGVudCBmaWx0ZXItY29udGVudF90eXBlX2NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5maWx0ZXJzLmNvbG9ycy5tYXAoKGNvbG9yLCBpZHgpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1JbnB1dCBrZXk9e2lkeH0gdmFsdWU9e2NvbG9yLnZhbHVlfSB0eXBlPVwiY29sb3JcIiB1cGRhdGVTdGF0ZT17KHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmlsdGVyVHlwZSA9IFwiY29sb3JzXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZS5pZHggPSBpZHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9fSBjaGVja2VkPXtjb2xvci5jaGVja2VkfS8+O1xyXG4gICAgICAgICAgICAgICAgICAgIFx0fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IG1hcmt1cDtcclxuXHRcdHN3aXRjaCAodGhpcy5wcm9wcy50eXBlKSB7XHJcblx0XHRcdGNhc2UgXCJjaGVja2JveFwiOlxyXG5cdFx0XHRcdG1hcmt1cCA9IChcclxuXHQgICAgICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9Plx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuXHQgICAgICAgICAgICAgICAgICAgIFx0XHRjaGVja2VkOiBldmVudC50YXJnZXQuY2hlY2tlZFxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHR9KTsgfX0gdmFsdWU9e3RoaXMucHJvcHMuY2hlY2tlZH0vPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5sYWJlbH1cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblx0ICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiY29sb3JcIjpcclxuXHRcdFx0XHRtYXJrdXAgPSAoXHJcblx0ICAgICAgICAgICAgXHQ8c3BhbiBjbGFzc05hbWU9XCJjaGVja2JveFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YGNoZWNrYm94LWNvbG9yICR7dGhpcy5wcm9wcy5jaGVja2VkID8gXCJjaGVja2VkXCIgOiBcIlwifWB9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBgIyR7dGhpcy5wcm9wcy52YWx1ZX1gLCBib3hTaGFkb3c6IHRoaXMucHJvcHMuY2hlY2tlZCA/IGAwIDAgMCAycHggd2hpdGUsIDAgMCAwIDRweCAjJHt0aGlzLnByb3BzLnZhbHVlfWAgOiAnbm9uZSd9fT5cclxuXHQgICAgICAgICAgICAgICAgICAgIFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHsgdGhpcy5wcm9wcy51cGRhdGVTdGF0ZSh7XHJcblx0ICAgICAgICAgICAgICAgICAgICBcdFx0Y2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWRcclxuXHQgICAgICAgICAgICAgICAgICAgIFx0fSk7IH19IHZhbHVlPXt0aGlzLnByb3BzLmNoZWNrZWR9Lz5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblx0ICAgICAgICAgICAgICAgIDwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIFx0XHRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBtYXJrdXA7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItZml4ZWRcIj5cclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gbmF2aWdhdGlvbi10b3AgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJvcGVuLXNlYXJjaFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tYWduaWZpZXJcIj48L2k+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwib3Blbi1jYXJ0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+IDxzcGFuPjM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIG5hdmlnYXRpb24tbWFpblwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJvcGVuLW1lbnVcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudVwiPjwvaT48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLW1lbnVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1lbnUtd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZS1tZW51XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzXCI+PC9pPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj7QlNC+0LzQvtC5PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQsNGC0LDQu9C+0LMg0YLQvtCy0LDRgNC+0LIgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1kcm9wZG93blwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9zcGFuPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duIG5hdmJhci1kcm9wZG93bi1zaW5nbGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1ib3hcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMlwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPtCU0LLQtdGA0Lg8L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+0JvQsNC80LjQvdCw0YI8L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0J7Qv9C70LDRgtCwINC4INC00L7RgdGC0LDQstC60LA8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQvtC90YLQsNC60YLRizwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW4gYnRuLXNlYXJjaFwiPkdvITwvYnV0dG9uPlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdHNcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHQtaXRlbXNcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPlByb2R1Y3RzIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhbi1kYXJrIGJ0bi14c1wiPlZpZXcgYWxsPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+R3JlZW4gY29ybmVyPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPlNvZmE8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+TGF1cmE8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QXJtY2hhaXJzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPk51ZGU8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+RGluaW5nIHRhYmxlczwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5BdXJvcmE8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+TmlnaHRzdGFuZHM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+RGluaW5nIHNldDwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5LaXRjaGVuPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPlNlYXQgY2hhaXI8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+QmFyIHNldHM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLXdyYXBwZXJcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxmb3JtPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDRcIj5TaWduIGluPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIj48L2lucHV0PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRQYXNzd29yZDFcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCI+PC9pbnB1dD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNmb3Jnb3RwYXNzd29yZFwiIGNsYXNzTmFtZT1cIm9wZW4tcG9wdXBcIj5Gb3Jnb3QgcGFzc3dvcmQ/PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NyZWF0ZWFjY291bnRcIiBjbGFzc05hbWU9XCJvcGVuLXBvcHVwXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1tYWluXCI+U3VibWl0PC9idXR0b24+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXdyYXBwZXJcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1pdGVtIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMS5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lcjwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkdyZWVuIGNvcm5lcjwvc21hbGw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLXF1YW50aXR5XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmFsXCI+JCAxLjk5ODwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4kIDIuNjY2PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm9zcyBpY29uLWRlbGV0ZVwiPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWl0ZW0gY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0yLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+R3JlZW4gY29ybmVyPC9zbWFsbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tcXVhbnRpdHlcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluYWxcIj4kIDEuOTk4PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPiQgMi42NjY8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzIGljb24tZGVsZXRlXCI+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTMucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1pdGVtIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNC5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lcjwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkdyZWVuIGNvcm5lcjwvc21hbGw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLXF1YW50aXR5XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmFsXCI+JCAxLjk5ODwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4kIDIuNjY2PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm9zcyBpY29uLWRlbGV0ZVwiPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2stZm9vdGVyIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5EaXNjb3VudCAxNSU8L3N0cm9uZz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDE1OSwwMDwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+U2hpcHBpbmc8L3N0cm9uZz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDMwLDAwPC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2stZm9vdGVyIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5WQVQ8L3N0cm9uZz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDU5LDAwPC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1mb290ZXIgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlRvdGFsPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCB0aXRsZVwiPiQgMTI1OSwwMDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrLWJ1dHRvbnMgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNlwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tY2xlYW4tZGFya1wiPkNvbnRpbnVlIHNob3BwaW5nPC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgdGV4dC1yaWdodFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9zcGFuPiBDaGVja291dDwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICA8L25hdj5cclxuXHRcdCk7XHJcblx0fVxyXG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQUE7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFjQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFVQTs7OztBQXhoQkE7QUFDQTtBQTBoQkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5aEJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFLQTs7OztBQWhEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBTUE7QUF2QkE7QUFDQTtBQXlCQTtBQUNBOzs7O0FBOUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFTQTtBQUFBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7OztBQTFOQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9