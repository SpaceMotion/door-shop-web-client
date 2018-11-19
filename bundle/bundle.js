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
/* harmony import */ var _SortBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SortBar */ "./js/SortBar.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./js/config.js");
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
      },
      sorting: {
        itemsPerPage: 10,
        price: 'asc',
        name: 'A-z'
      }
    };
    _this.updateFiltersData = _this.updateFiltersData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setUpFilters = _this.setUpFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateSortingData = _this.updateSortingData.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    _this.setUpFilters();

    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (function () {
        "use strict"; // Main navigation & mega menu
        // ----------------------------------------------------------------
        // Global menu variables

        var objSearch = $('.search-wrapper'),
            objCart = $('.cart-wrapper'),
            objMenu = $('.floating-menu'),
            objMenuLink = $('.floating-menu a'),
            $search = $('.open-search'),
            $cart = $('.open-cart'),
            $menu = $('.open-menu'),
            $openDropdown = $('.open-dropdown'),
            $close = $('.close-menu'); // Open/close search bar

        $search.on('click', function () {
          toggleOpen($(this));
          objSearch.toggleClass('open');
          objSearch.find('input').focus();
          closeCart();
        }); // Open/close cart

        $cart.on('click', function () {
          toggleOpen($(this));
          objCart.toggleClass('open');
          closeSearch();
        }); // Mobile menu open/close

        $menu.on('click', function () {
          objMenu.addClass('expanded');
          closeSearch();
          closeCart();
        }); // Open dropdown/megamenu

        $openDropdown.on('click', function (e) {
          e.preventDefault();
          var liParent = $(this).parent().parent(),
              liDropdown = liParent.find('.navbar-dropdown');
          liParent.toggleClass('expanded');

          if (liParent.hasClass('expanded')) {
            liDropdown.slideDown();
          } else {
            liDropdown.slideUp();
          }
        }); // Close menu (mobile)

        $close.on('click', function () {
          $('nav').find('.expanded').removeClass('expanded');
          $('nav').find('.navbar-dropdown').slideUp();
        }); // Global functions

        function toggleOpen(el) {
          $(el).toggleClass('open');
        }

        function closeSearch() {
          objSearch.removeClass('open');
          $search.removeClass('open');
        }

        function closeCart() {
          objCart.removeClass('open');
          $cart.removeClass('open');
        } // Sticky header
        // ----------------------------------------------------------------


        var navbarFixed = $('nav.navbar-fixed'); // When reload page - check if page has offset

        if ($(document).scrollTop() > $('.header-nav').height()) {
          navbarFixed.addClass('navbar-sticked');
        } // Add sticky menu on scroll


        $(document).on('bind ready scroll', function () {
          var docScroll = $(document).scrollTop();

          if (docScroll >= 10) {
            navbarFixed.addClass('navbar-sticked');
          } else {
            navbarFixed.removeClass('navbar-sticked');
          }
        }); // Frontpage slider
        // ----------------------------------------------------------------

        var arrowIcons = ['<span class="icon icon-chevron-left"></span>', '<span class="icon icon-chevron-right"></span>'];
        $.each($(".owl-slider"), function (i, n) {
          $(n).owlCarousel({
            autoHeight: false,
            navigation: true,
            navigationText: arrowIcons,
            items: 1,
            singleItem: true,
            addClassActive: true,
            transitionStyle: "fadeUp",
            afterMove: animatetCaptions,
            autoPlay: 8000,
            stopOnHover: false
          });
          animatetCaptions();

          function animatetCaptions(event) {
            "use strict";

            var activeItem = $(n).find('.owl-item.active'),
                timeDelay = 100;
            $.each(activeItem.find('.animated'), function (j, m) {
              var item = $(m);
              item.css('animation-delay', timeDelay + 'ms');
              timeDelay = timeDelay + 180;
              item.addClass(item.data('animation'));
              setTimeout(function () {
                item.removeClass(item.data('animation'));
              }, 2000);
            });
          }

          if ($(n).hasClass('owl-slider-fullscreen')) {
            $('.header-content .item').height($(window).height());
          }
        }); // Scroll to top
        // ----------------------------------------------------------------

        var $wrapper = $('.wrapper');
        $wrapper.append($("<div class='scroll-top'><i class='icon icon-chevron-up'></i></div>"));
        var $scrollbtn = $('.scroll-top');
        $(document).on('ready scroll', function () {
          var docScrollTop = $(document).scrollTop(),
              docScrollBottom = $(window).scrollTop() + $(window).height() == $(document).height();

          if (docScrollTop >= 150) {
            $scrollbtn.addClass('visible');
          } else {
            $scrollbtn.removeClass('visible');
          }

          if (docScrollBottom) {
            $scrollbtn.addClass('active');
          } else {
            $scrollbtn.removeClass('active');
          }
        });
        $scrollbtn.on('click', function () {
          $('html,body').animate({
            scrollTop: $('body').offset().top
          }, 1000);
          return false;
        }); // Filters toggle functions
        // ----------------------------------------------------------------
        // Show hide filters (only for mobile)
        // ----------------------------------------------------------------

        $('.toggle-filters-mobile').on('click', function () {
          $('.filters').addClass('active');
        });
        $('.toggle-filters-close').on('click', function () {
          $('.filters').removeClass('active');
          $('html,body').animate({
            scrollTop: $('body').offset().top
          }, 800);
          return false;
        });
        setTimeout(function () {
          $('.page-loader').addClass('loaded');
        }, 1000);
      })();
    }
  }, {
    key: "updateFiltersData",
    value: function updateFiltersData(changes) {
      this.setState(function (state, props) {
        var filterType = changes.filterType;
        var filters = state.filters[filterType];

        if (filterType === 'price') {
          filters = {
            from: changes.from,
            to: changes.to
          };
        } else {
          filters[changes.idx].checked = changes.checked;
          var anyOption = filters.find(function (filterOption) {
            return filterOption.any;
          });

          if (changes.checked) {
            if (changes.any) {
              filters.forEach(function (filterOption) {
                if (!filterOption.any) {
                  filterOption.checked = false;
                }
              });
            } else if (anyOption) {
              anyOption.checked = false;
            }
          } else if (filters.every(function (filterOption) {
            return !filterOption.checked;
          })) {
            anyOption.checked = true;
          }
        }

        return state;
      });
    }
  }, {
    key: "updateSortingData",
    value: function updateSortingData(changes) {
      this.setState(function (state) {
        state.sorting[changes.option] = changes.value;
        return state;
      });
    }
  }, {
    key: "setUpFilters",
    value: function setUpFilters() {
      var _this2 = this;

      // Manufacturers
      var manufacturersDataGet = new Promise(function (resolve, reject) {
        fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].ROOT_API_URL, "/manufacturers"), {
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.setState(function (state) {
            state.filters.manufacturers = data.results;
            state.filters.manufacturers.unshift({
              id: 9999,
              any: true,
              checked: true,
              name: "Любой"
            });
            return state;
          });

          resolve();
        });
      }); //Colors

      var colorsDataGet = new Promise(function (resolve, reject) {
        fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].ROOT_API_URL, "/products"), {
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
          colors.unshift({
            id: 9999,
            any: true,
            checked: true,
            name: 'Любой'
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
      }, React.createElement(_Header__WEBPACK_IMPORTED_MODULE_0__["default"], {
        categories: this.props.categories.main
      }), React.createElement("section", {
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
      }, this.props.categories.main.map(function (category, idx) {
        return React.createElement("a", {
          href: "#",
          key: idx
        }, React.createElement("figure", null, React.createElement("i", {
          className: "f-icon",
          style: {
            backgroundImage: category.icon ? "url(".concat(category.icon, ")") : 'none'
          }
        }, category.icon_code && !category.icon ? String.fromCharCode(category.icon_code) : ''), React.createElement("figcaption", null, category.name)));
      })))), true ? null : undefined, React.createElement("footer", null, React.createElement("div", {
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
}(React.Component); // Set up categories


fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_3__["default"].ROOT_API_URL, "/categories?no_parent=true"), {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(function (response) {
  return response.json();
}).then(function (data) {
  ReactDOM.render(React.createElement(App, {
    categories: {
      main: data.results
    }
  }), document.getElementById('app'));
});

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
    key: "componentDidMount",
    value: function componentDidMount() {
      var Filters = this;
      $("#range-price-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 4000,
        from: 0,
        to: 4000,
        prefix: String.fromCharCode(8381),
        onChange: function onChange(data) {
          Filters.props.updateState({
            filterType: 'price',
            from: data.from,
            to: data.to
          });
        }
      });
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
      }, "\u0426\u0435\u043D\u0430"), React.createElement("div", {
        className: "filter-content"
      }, React.createElement("div", {
        className: "price-filter"
      }, React.createElement("input", {
        type: "text",
        id: "range-price-slider",
        name: "range"
      })))), React.createElement("div", {
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
          any: manufacturer.any,
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
          label: color.name,
          type: "checkbox",
          any: color.any,
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

      var any = this.props.any;
      return React.createElement("span", {
        className: "checkbox"
      }, React.createElement("label", {
        className: "".concat(this.props.checked ? 'checked' : '', " ").concat(this.props.type, " ").concat(this.props.value ? 'color' : ''),
        style: {
          backgroundColor: "#".concat(this.props.value) || 'none',
          boxShadow: this.props.value && this.props.checked ? '0 4px 0.5em black' : 'none'
        }
      }, this.props.label, React.createElement("input", {
        type: this.props.type,
        checked: !!this.props.checked,
        onChange: function onChange(event) {
          _this.props.updateState({
            checked: any || event.target.checked,
            any: any
          });
        }
      })));
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
        className: "navbar-fixed header-nav"
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
      }, React.createElement("ul", null, this.props.categories.map(function (category, idx) {
        return React.createElement("li", {
          key: idx
        }, React.createElement("a", {
          href: "#"
        }, category.name));
      }))))))), React.createElement("li", null, React.createElement("a", {
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



/***/ }),

/***/ "./js/SortBar.js":
/*!***********************!*\
  !*** ./js/SortBar.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortBar; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SortBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SortBar, _React$Component);

  function SortBar(props) {
    var _this;

    _classCallCheck(this, SortBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SortBar).call(this, props));
    _this.onStateChange = _this.onStateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SortBar, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "sort-bar clearfix"
      }, React.createElement("div", {
        className: "sort-results pull-left"
      }, React.createElement("span", null, "\u0412\u044B\u0432\u043E\u0434\u0438\u0442\u044C \u043F\u043E"), React.createElement("select", {
        "data-option": "itemsPerPage",
        onChange: this.onStateChange,
        value: this.props.itemsPerPage
      }, React.createElement("option", {
        value: "10"
      }, "10"), React.createElement("option", {
        value: "50"
      }, "50"), React.createElement("option", {
        value: "100"
      }, "100"))), React.createElement("div", {
        className: "sort-options pull-right"
      }, React.createElement("span", {
        className: "hidden-xs"
      }, "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E\xA0\xA0"), React.createElement("select", {
        id: "sort-price",
        "data-option": "price",
        onChange: this.onStateChange,
        value: this.props.price
      }, React.createElement("option", {
        value: "asc"
      }, "\u0426\u0435\u043D\u0430: \u043F\u043E \u0432\u043E\u0437\u0440\u0430\u0441\u0442\u0430\u043D\u0438\u044E"), React.createElement("option", {
        value: "desc"
      }, "\u0426\u0435\u043D\u0430: \u043F\u043E \u0443\u0431\u044B\u0432\u0430\u043D\u0438\u044E")), React.createElement("select", {
        id: "sort-name",
        "data-option": "name",
        onChange: this.onStateChange,
        value: this.props.name
      }, React.createElement("option", {
        value: "A-z"
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: \u043E\u0442 \u0410 \u0434\u043E \u042F"), React.createElement("option", {
        value: "z-A"
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: \u043E\u0442 \u042F \u0434\u043E \u0410")), React.createElement("span", {
        className: "grid-list"
      }, React.createElement("a", {
        className: "toggle-filters-mobile"
      }, React.createElement("i", {
        className: "fa fa-search"
      })))));
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(event) {
      var value = event.target.value;
      var option = event.target.dataset.option;

      if (option === 'itemsPerPage') {
        value = parseInt(value);
      }

      this.props.updateState({
        option: option,
        value: value
      });
    }
  }]);

  return SortBar;
}(React.Component);



/***/ }),

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ROOT_API_URL: 'http://door-shop.pavelgoltsev.com/api/v1'
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvU29ydEJhci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9BcHAuanNcIik7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi9GaWx0ZXJzXCI7XHJcbmltcG9ydCBTb3J0QmFyIGZyb20gXCIuL1NvcnRCYXJcIjtcclxuaW1wb3J0IENPTkZJRyBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdGZpbHRlcnM6IHtcclxuXHRcdFx0XHRpc1JlYWR5OiBmYWxzZVx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHNvcnRpbmc6IHtcclxuXHRcdFx0XHRpdGVtc1BlclBhZ2U6IDEwLFxyXG5cdFx0XHRcdHByaWNlOiAnYXNjJyxcclxuXHRcdFx0XHRuYW1lOiAnQS16J1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJzRGF0YSA9IHRoaXMudXBkYXRlRmlsdGVyc0RhdGEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2V0VXBGaWx0ZXJzID0gdGhpcy5zZXRVcEZpbHRlcnMuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudXBkYXRlU29ydGluZ0RhdGEgPSB0aGlzLnVwZGF0ZVNvcnRpbmdEYXRhLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5zZXRVcEZpbHRlcnMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdFx0ICAgIC8vIE1haW4gbmF2aWdhdGlvbiAmIG1lZ2EgbWVudVxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgLy8gR2xvYmFsIG1lbnUgdmFyaWFibGVzXHJcblxyXG5cdFx0ICAgIHZhciBvYmpTZWFyY2ggPSAkKCcuc2VhcmNoLXdyYXBwZXInKSxcclxuXHRcdCAgICAgICAgb2JqQ2FydCA9ICQoJy5jYXJ0LXdyYXBwZXInKSxcclxuXHRcdCAgICAgICAgb2JqTWVudSA9ICQoJy5mbG9hdGluZy1tZW51JyksXHJcblx0XHQgICAgICAgIG9iak1lbnVMaW5rID0gJCgnLmZsb2F0aW5nLW1lbnUgYScpLFxyXG5cdFx0ICAgICAgICAkc2VhcmNoID0gJCgnLm9wZW4tc2VhcmNoJyksXHJcblx0XHQgICAgICAgICRjYXJ0ID0gJCgnLm9wZW4tY2FydCcpLFxyXG5cdFx0ICAgICAgICAkbWVudSA9ICQoJy5vcGVuLW1lbnUnKSxcclxuXHRcdCAgICAgICAgJG9wZW5Ecm9wZG93biA9ICQoJy5vcGVuLWRyb3Bkb3duJyksXHJcblx0XHQgICAgICAgICRjbG9zZSA9ICQoJy5jbG9zZS1tZW51Jyk7XHJcblxyXG5cdFx0ICAgIC8vIE9wZW4vY2xvc2Ugc2VhcmNoIGJhclxyXG5cclxuXHRcdCAgICAkc2VhcmNoLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdG9nZ2xlT3BlbigkKHRoaXMpKTtcclxuXHRcdCAgICAgICAgb2JqU2VhcmNoLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgIG9ialNlYXJjaC5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XHJcblx0XHQgICAgICAgIGNsb3NlQ2FydCgpO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBPcGVuL2Nsb3NlIGNhcnRcclxuXHJcblx0XHQgICAgJGNhcnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB0b2dnbGVPcGVuKCQodGhpcykpO1xyXG5cdFx0ICAgICAgICBvYmpDYXJ0LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgIGNsb3NlU2VhcmNoKCk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIE1vYmlsZSBtZW51IG9wZW4vY2xvc2VcclxuXHJcblx0XHQgICAgJG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICBvYmpNZW51LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0ICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG5cdFx0ICAgICAgICBjbG9zZUNhcnQoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gT3BlbiBkcm9wZG93bi9tZWdhbWVudVxyXG5cclxuXHRcdCAgICAkb3BlbkRyb3Bkb3duLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0ICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ICAgICAgICB2YXIgbGlQYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLFxyXG5cdFx0ICAgICAgICAgICAgbGlEcm9wZG93biA9IGxpUGFyZW50LmZpbmQoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuXHJcblx0XHQgICAgICAgIGxpUGFyZW50LnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cclxuXHRcdCAgICAgICAgaWYgKGxpUGFyZW50Lmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHQgICAgICAgICAgICBsaURyb3Bkb3duLnNsaWRlRG93bigpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgbGlEcm9wZG93bi5zbGlkZVVwKCk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gQ2xvc2UgbWVudSAobW9iaWxlKVxyXG5cclxuXHRcdCAgICAkY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCduYXYnKS5maW5kKCcuZXhwYW5kZWQnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdCAgICAgICAgJCgnbmF2JykuZmluZCgnLm5hdmJhci1kcm9wZG93bicpLnNsaWRlVXAoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gR2xvYmFsIGZ1bmN0aW9uc1xyXG5cclxuXHRcdCAgICBmdW5jdGlvbiB0b2dnbGVPcGVuKGVsKSB7XHJcblx0XHQgICAgICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaCgpIHtcclxuXHRcdCAgICAgICAgb2JqU2VhcmNoLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgICRzZWFyY2gucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgZnVuY3Rpb24gY2xvc2VDYXJ0KCkge1xyXG5cdFx0ICAgICAgICBvYmpDYXJ0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgICRjYXJ0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICAvLyBTdGlja3kgaGVhZGVyXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgbmF2YmFyRml4ZWQgPSAkKCduYXYubmF2YmFyLWZpeGVkJyk7XHJcblxyXG5cdFx0ICAgIC8vIFdoZW4gcmVsb2FkIHBhZ2UgLSBjaGVjayBpZiBwYWdlIGhhcyBvZmZzZXRcclxuXHRcdCAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiAkKCcuaGVhZGVyLW5hdicpLmhlaWdodCgpKSB7XHJcblx0XHQgICAgICAgIG5hdmJhckZpeGVkLmFkZENsYXNzKCduYXZiYXItc3RpY2tlZCcpO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICAvLyBBZGQgc3RpY2t5IG1lbnUgb24gc2Nyb2xsXHJcblx0XHQgICAgJChkb2N1bWVudCkub24oJ2JpbmQgcmVhZHkgc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB2YXIgZG9jU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcblx0XHQgICAgICAgIGlmIChkb2NTY3JvbGwgPj0gMTApIHtcclxuXHRcdCAgICAgICAgICAgIG5hdmJhckZpeGVkLmFkZENsYXNzKCduYXZiYXItc3RpY2tlZCcpO1xyXG5cdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgbmF2YmFyRml4ZWQucmVtb3ZlQ2xhc3MoJ25hdmJhci1zdGlja2VkJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gRnJvbnRwYWdlIHNsaWRlclxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgdmFyIGFycm93SWNvbnMgPSBbXHJcblx0XHQgICAgICAgICc8c3BhbiBjbGFzcz1cImljb24gaWNvbi1jaGV2cm9uLWxlZnRcIj48L3NwYW4+JyxcclxuXHRcdCAgICAgICAgJzxzcGFuIGNsYXNzPVwiaWNvbiBpY29uLWNoZXZyb24tcmlnaHRcIj48L3NwYW4+J1xyXG5cdFx0ICAgIF07XHJcblxyXG5cdFx0ICAgICQuZWFjaCgkKFwiLm93bC1zbGlkZXJcIiksIGZ1bmN0aW9uIChpLCBuKSB7XHJcblxyXG5cdFx0ICAgICAgICAkKG4pLm93bENhcm91c2VsKHtcclxuXHRcdCAgICAgICAgICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxyXG5cdFx0ICAgICAgICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcclxuXHRcdCAgICAgICAgICAgIG5hdmlnYXRpb25UZXh0OiBhcnJvd0ljb25zLFxyXG5cdFx0ICAgICAgICAgICAgaXRlbXM6IDEsXHJcblx0XHQgICAgICAgICAgICBzaW5nbGVJdGVtOiB0cnVlLFxyXG5cdFx0ICAgICAgICAgICAgYWRkQ2xhc3NBY3RpdmU6IHRydWUsXHJcblx0XHQgICAgICAgICAgICB0cmFuc2l0aW9uU3R5bGU6IFwiZmFkZVVwXCIsXHJcblx0XHQgICAgICAgICAgICBhZnRlck1vdmU6IGFuaW1hdGV0Q2FwdGlvbnMsXHJcblx0XHQgICAgICAgICAgICBhdXRvUGxheTogODAwMCxcclxuXHRcdCAgICAgICAgICAgIHN0b3BPbkhvdmVyOiBmYWxzZVxyXG5cdFx0ICAgICAgICB9KTtcclxuXHJcblx0XHQgICAgICAgIGFuaW1hdGV0Q2FwdGlvbnMoKTsgXHJcblxyXG5cdFx0ICAgICAgICBmdW5jdGlvbiBhbmltYXRldENhcHRpb25zKGV2ZW50KSB7XHJcblx0XHQgICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuXHRcdCAgICAgICAgICAgIHZhciBhY3RpdmVJdGVtID0gJChuKS5maW5kKCcub3dsLWl0ZW0uYWN0aXZlJyksXHJcblx0XHQgICAgICAgICAgICB0aW1lRGVsYXkgPSAxMDA7XHJcblx0XHQgICAgICAgICAgICAkLmVhY2goYWN0aXZlSXRlbS5maW5kKCcuYW5pbWF0ZWQnKSwgZnVuY3Rpb24gKGosIG0pIHtcclxuXHRcdCAgICAgICAgICAgICAgICB2YXIgaXRlbSA9ICQobSk7XHJcblx0XHQgICAgICAgICAgICAgICAgaXRlbS5jc3MoJ2FuaW1hdGlvbi1kZWxheScsIHRpbWVEZWxheSArICdtcycpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHRpbWVEZWxheSA9IHRpbWVEZWxheSArIDE4MDtcclxuXHRcdCAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKGl0ZW0uZGF0YSgnYW5pbWF0aW9uJykpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKGl0ZW0uZGF0YSgnYW5pbWF0aW9uJykpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cdFx0ICAgICAgICAgICAgfSk7XHJcblx0XHQgICAgICAgIH1cclxuXHJcblx0XHQgICAgICAgIGlmICgkKG4pLmhhc0NsYXNzKCdvd2wtc2xpZGVyLWZ1bGxzY3JlZW4nKSkge1xyXG5cdFx0ICAgICAgICAgICAgJCgnLmhlYWRlci1jb250ZW50IC5pdGVtJykuaGVpZ2h0KCQod2luZG93KS5oZWlnaHQoKSk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gU2Nyb2xsIHRvIHRvcFxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgdmFyICR3cmFwcGVyID0gJCgnLndyYXBwZXInKTtcclxuXHRcdCAgICAkd3JhcHBlci5hcHBlbmQoJChcIjxkaXYgY2xhc3M9J3Njcm9sbC10b3AnPjxpIGNsYXNzPSdpY29uIGljb24tY2hldnJvbi11cCc+PC9pPjwvZGl2PlwiKSk7XHJcblxyXG5cdFx0ICAgIHZhciAkc2Nyb2xsYnRuID0gJCgnLnNjcm9sbC10b3AnKTtcclxuXHJcblx0XHQgICAgJChkb2N1bWVudCkub24oJ3JlYWR5IHNjcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdmFyIGRvY1Njcm9sbFRvcCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLFxyXG5cdFx0ICAgICAgICAgICAgZG9jU2Nyb2xsQm90dG9tID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpICsgJCh3aW5kb3cpLmhlaWdodCgpID09ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xyXG5cclxuXHRcdCAgICAgICAgaWYgKGRvY1Njcm9sbFRvcCA+PSAxNTApIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4uYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4ucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBpZiAoZG9jU2Nyb2xsQm90dG9tKSB7XHJcblx0XHQgICAgICAgICAgICAkc2Nyb2xsYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgICRzY3JvbGxidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxyXG5cdFx0ICAgICAgICB9LCAxMDAwKTtcclxuXHRcdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBGaWx0ZXJzIHRvZ2dsZSBmdW5jdGlvbnNcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIC8vIFNob3cgaGlkZSBmaWx0ZXJzIChvbmx5IGZvciBtb2JpbGUpXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkKCcudG9nZ2xlLWZpbHRlcnMtbW9iaWxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCcuZmlsdGVycycpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICB9KTtcclxuXHRcdCAgICAkKCcudG9nZ2xlLWZpbHRlcnMtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICQoJy5maWx0ZXJzJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxyXG5cdFx0ICAgICAgICB9LCA4MDApO1xyXG5cdFx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCcucGFnZS1sb2FkZXInKS5hZGRDbGFzcygnbG9hZGVkJyk7XHJcblx0XHQgICAgfSwgMTAwMCk7XHJcblxyXG5cdFx0fSkoKTtcdFx0XHJcblx0fVxyXG5cclxuXHR1cGRhdGVGaWx0ZXJzRGF0YShjaGFuZ2VzKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSwgcHJvcHMpID0+IHtcclxuXHRcdFx0Y29uc3QgZmlsdGVyVHlwZSA9IGNoYW5nZXMuZmlsdGVyVHlwZTtcclxuXHRcdFx0bGV0IGZpbHRlcnMgPSBzdGF0ZS5maWx0ZXJzW2ZpbHRlclR5cGVdO1xyXG5cclxuXHRcdFx0aWYgKGZpbHRlclR5cGUgPT09ICdwcmljZScpIHtcclxuXHRcdFx0XHRmaWx0ZXJzID0ge1xyXG5cdFx0XHRcdFx0ZnJvbTogY2hhbmdlcy5mcm9tLFxyXG5cdFx0XHRcdFx0dG86IGNoYW5nZXMudG9cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZpbHRlcnNbY2hhbmdlcy5pZHhdLmNoZWNrZWQgPSBjaGFuZ2VzLmNoZWNrZWQ7XHRcdFx0XHRcclxuXHRcdFx0XHRjb25zdCBhbnlPcHRpb24gPSBmaWx0ZXJzLmZpbmQoKGZpbHRlck9wdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZpbHRlck9wdGlvbi5hbnk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKGNoYW5nZXMuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5nZXMuYW55KSB7XHJcblx0XHRcdFx0XHRcdGZpbHRlcnMuZm9yRWFjaCgoZmlsdGVyT3B0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFmaWx0ZXJPcHRpb24uYW55KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmaWx0ZXJPcHRpb24uY2hlY2tlZCA9IGZhbHNlO1x0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChhbnlPcHRpb24pIHtcclxuXHRcdFx0XHRcdFx0YW55T3B0aW9uLmNoZWNrZWQgPSBmYWxzZTtcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGZpbHRlcnMuZXZlcnkoKGZpbHRlck9wdGlvbikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuICFmaWx0ZXJPcHRpb24uY2hlY2tlZDtcclxuXHRcdFx0XHR9KSkge1xyXG5cdFx0XHRcdFx0YW55T3B0aW9uLmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHVwZGF0ZVNvcnRpbmdEYXRhKGNoYW5nZXMpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdHN0YXRlLnNvcnRpbmdbY2hhbmdlcy5vcHRpb25dID0gY2hhbmdlcy52YWx1ZTtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRVcEZpbHRlcnMoKSB7XHJcblx0XHQvLyBNYW51ZmFjdHVyZXJzXHJcblx0XHRsZXQgbWFudWZhY3R1cmVyc0RhdGFHZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGZldGNoKGAke0NPTkZJRy5ST09UX0FQSV9VUkx9L21hbnVmYWN0dXJlcnNgLCB7XHJcblx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0XHRzdGF0ZS5maWx0ZXJzLm1hbnVmYWN0dXJlcnMgPSBkYXRhLnJlc3VsdHM7XHJcblx0XHRcdFx0XHRzdGF0ZS5maWx0ZXJzLm1hbnVmYWN0dXJlcnMudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRcdGlkOiA5OTk5LFxyXG5cdFx0XHRcdFx0XHRhbnk6IHRydWUsXHJcblx0XHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRcdG5hbWU6IFwi0JvRjtCx0L7QuVwiXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9Db2xvcnNcclxuXHRcdGxldCBjb2xvcnNEYXRhR2V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgJHtDT05GSUcuUk9PVF9BUElfVVJMfS9wcm9kdWN0c2AsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0bGV0IGNvbG9ycyA9IFtdO1xyXG5cdFx0XHRcdGRhdGEucmVzdWx0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAocHJvZHVjdC5jb2xvciAmJiAhY29sb3JzLmZpbmQoKGNvbG9yKSA9PiB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBwcm9kdWN0LmNvbG9yLmlkID09PSBjb2xvci5pZDtcdFxyXG5cdFx0XHRcdFx0fSkpIHtcclxuXHRcdFx0XHRcdFx0Y29sb3JzLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBwcm9kdWN0LmNvbG9yLmlkLFxyXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBwcm9kdWN0LmNvbG9yLnZhbHVlXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRjb2xvcnMudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRpZDogOTk5OSxcclxuXHRcdFx0XHRcdGFueTogdHJ1ZSxcclxuXHRcdFx0XHRcdGNoZWNrZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRuYW1lOiAn0JvRjtCx0L7QuSdcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRcdHN0YXRlLmZpbHRlcnMuY29sb3JzID0gY29sb3JzO1xyXG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJlc29sdmUoKTtcclxuXHRcdFx0fSk7XHRcdFx0XHRcclxuXHRcdH0pO1xyXG5cclxuXHRcdFByb21pc2UuYWxsKFttYW51ZmFjdHVyZXJzRGF0YUdldCwgY29sb3JzRGF0YUdldF0pLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG5cdFx0XHRcdHN0YXRlLmZpbHRlcnMuaXNSZWFkeSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sb2FkZXJcIj48L2Rpdj5cclxuXHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFx0XHRcdDxIZWFkZXIgY2F0ZWdvcmllcz17dGhpcy5wcm9wcy5jYXRlZ29yaWVzLm1haW59Lz5cclxuXHRcdFx0ICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZWFkZXItY29udGVudFwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1zbGlkZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMS5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+TW9kZXJuIGZ1cm5pdHVyZSB0aGVtZTwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZGVybiAmIHBvd2VyZnVsbCB0ZW1wbGF0ZS4gPGJyIC8+IENsZWFuIGRlc2lnbiAmIHJlcG9uc2l2ZVxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dC4gR29vZ2xlIGZvbnRzIGludGVncmF0aW9uXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbW9iZWwtZnVybml0dXJlLXdlYnNpdGUtdGVtcGxhdGUvMjAzODIxNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW5cIiA+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+IEJ1eSB0aGlzIHRlbXBsYXRlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGFzc2V0cy9pbWFnZXMvZ2FsbGVyeS0yLmpwZylcIn19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgYW5pbWF0ZWQgaDFcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkRvd25cIj5Nb2JpbGUgcmVhZHkhPC9oMj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+VW5saW1pdGVkIENob2ljZXMuIFVuYmVhdGFibGUgUHJpY2VzLiBGcmVlIFNoaXBwaW5nLjwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5GdXJuaXR1cmUgY2F0ZWdvcnkgaWNvbiBmb250cyE8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuXCI+R2V0IGluc2lwcmVkPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGFzc2V0cy9pbWFnZXMvZ2FsbGVyeS0zLmpwZylcIn19PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgYW5pbWF0ZWQgaDFcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkRvd25cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWZXJ5IEFuaW1hdGUuY3NzIEZyaWVuZC5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MgYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tYmluZSB3aXRoIGFuaW1hdGUuY3NzLiBPciBqdXN0IHVzZSB5b3VyIG93biEuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzYyBhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCdW5jaCBvZiB0eXBvZ3JhcGh5IGVmZmVjdHMuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhlbWVmb3Jlc3QubmV0L2l0ZW0vbW9iZWwtZnVybml0dXJlLXdlYnNpdGUtdGVtcGxhdGUvMjAzODIxNTVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuXCI+QnV5IHRoaXMgdGVtcGxhdGU8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwib3dsLWljb25zLXdyYXBwZXIgb3dsLWljb25zLWZyb250cGFnZVwiPlxyXG5cdFx0XHQgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3QgY2F0ZWdvcmllczwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm93bC1pY29uc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jYXRlZ29yaWVzLm1haW4ubWFwKChjYXRlZ29yeSwgaWR4KSA9PiB7XHJcblx0XHRcdCAgICAgICAgICAgICAgICBcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGtleT17aWR4fT5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZi1pY29uXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGNhdGVnb3J5Lmljb24gPyBgdXJsKCR7Y2F0ZWdvcnkuaWNvbn0pYCA6ICdub25lJ319PntjYXRlZ29yeS5pY29uX2NvZGUgJiYgIWNhdGVnb3J5Lmljb24gPyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNhdGVnb3J5Lmljb25fY29kZSkgOiAnJ308L2k+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ2NhcHRpb24+e2NhdGVnb3J5Lm5hbWV9PC9maWdjYXB0aW9uPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0XHQpO1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgXHR9KX1cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHQgICAgICAgIHt0cnVlID8gbnVsbCA6IChcclxuXHRcdFx0XHQgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RzXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaDMgdGl0bGVcIj5Qcm9kdWN0IGNhdGVnb3J5IGdyaWQ8L2gzPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wteHMtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5maWx0ZXJzLmlzUmVhZHkgPyA8RmlsdGVycyBmaWx0ZXJzPXt0aGlzLnN0YXRlLmZpbHRlcnN9IHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZUZpbHRlcnNEYXRhfS8+IDogbnVsbH1cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTkgY29sLXhzLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFNvcnRCYXIgdXBkYXRlU3RhdGU9e3RoaXMudXBkYXRlU29ydGluZ0RhdGF9IGl0ZW1zUGVyUGFnZT17dGhpcy5zdGF0ZS5zb3J0aW5nLml0ZW1zUGVyUGFnZX0gcHJpY2U9e3RoaXMuc3RhdGUuc29ydGluZy5wcmljZX0gbmFtZT17dGhpcy5zdGF0ZS5zb3J0aW5nLm5hbWV9Lz5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInByb2R1Y3RzXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtZGlzY291bnQgY2F0ZWdvcnktc29mYSBtYXRlcmlhbC1sZWF0aGVyXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPi01MCU8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXIgPHNtYWxsPlNvZmE8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Yj4kIDE0OTksLTwvc3ViPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+MTA5OTwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtZGlzY291bnQgY2F0ZWdvcnktYXJtY2hhaXIgbWF0ZXJpYWwtd29vZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0yLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkxhdXJhIDxzbWFsbD5Bcm1jaGFpcjwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViPiQgMzk5OSwtPC9zdWI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4zNDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLWxlYXRoZXJcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMy5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5OdWRlIDxzbWFsbD5Bcm1jaGFpcjwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4yOTk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLXdvb2RcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXdhcm5pbmdcIj5OZXc8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNC5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5BdXJvcmEgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjI5OTwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtZGlzY291bnQgY2F0ZWdvcnktYXJtY2hhaXIgbWF0ZXJpYWwtbWV0YWxcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsIGxhYmVsLXdhcm5pbmdcIj5OZXc8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNS5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5EaW5pbmcgc2V0IDxzbWFsbD5Bcm1jaGFpcjwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViPiQgMTk5OSwtPC9zdWI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4xNDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1yZWd1bGFyIGNhdGVnb3J5LXNvZmEgbWF0ZXJpYWwtd29vZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC02LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPlNlYXQgY2hhaXIgPHNtYWxsPlNvZmE8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+ODk2PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1tYWluIG1mcC1oaWRlXCIgaWQ9XCJwcm9kdWN0aWQxXCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtdGl0bGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMSB0aXRsZVwiPkxhdXJhIDxzbWFsbD5wcm9kdWN0IGNhdGVnb3J5PC9zbWFsbD48L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtcHJvZHVjdC1nYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0yLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjQwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMy5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjY0MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZm8td3JhcHBlclwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1haWZhY3R1cmVyPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CcmFuZCBuYW1lPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYXRlcmlhbHM8L3N0cm9uZz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldvb2QsIExlYXRoZXIsIEFjcnlsaWM8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJpbGl0eTwvc3Ryb25nPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2stc3F1YXJlLW9cIj48L2k+IGluIHN0b2NrPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJsZSBDb2xvcnM8L3N0cm9uZz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb2xvcnMgY2xlYXJmaXhcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLXJlZFwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJsdWUgY2hlY2tlZFwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWdyZWVuXCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tZ3JheVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJpZWdlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNob29zZSBzaXplPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29sb3JzIGNsZWFyZml4XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlM8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZSBjaGVja2VkXCI+TTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJpZWdlXCI+WEw8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlhYTDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtdGFibGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jZWxsXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDNcIj4kIDE5OTksMDAgPHNtYWxsPiQgMjk5OSwwMDwvc21hbGw+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNlbGxcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5WaWV3IG1vcmU8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi14c1wiPkJ1eTwvc3Bhbj48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdCAgICAgICAgKX1cclxuXHJcblx0XHRcdCAgICAgICAgPGZvb3Rlcj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNob3dyb29tXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlZpc2l0IG91ciBzaG93cm9vbTwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDAgMTJ0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDAwMSwgVVNBPC9wPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9uIC0gU2F0OiAxMCBhbSAtIDYgcG0gJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDsgU3VuOiAxMnBtIC0gMiBwbTwvcD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tYXAtbWFya2VyXCI+PC9zcGFuPiBHZXQgZGlyZWN0aW9uczwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsbC11cyBoNFwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1waG9uZS1oYW5kc2V0XCI+PC9zcGFuPiAzMzMuMjc4LjA2NjIyPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC0yXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QnJvd3NlIGJ5PC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5CcmFuZDwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3Q8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DYXRlZ29yeTwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLW1kLTJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5SZWNvdXJjZXM8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkRlc2lnbjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2plY3RzPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2FsZXM8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC0yXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3VyIGNvbXBhbnk8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TmV3czwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyPC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpPkFkZCB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gc2lnbiB1cCBmb3Igb3VyIG1vbnRobHkgZW1haWxzIGFuZCB0byByZWNlaXZlIHByb21vdGlvbmFsIG9mZmVycy48L2k+PC9wPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tbmV3c2xldHRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuIGJ0bi1zbVwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+IERvd25sb2FkIE1vYmVsPC9hPiAmbmJzcDsgfCA8YSBocmVmPVwiI1wiPlNpdGVtYXA8L2E+ICZuYnNwOyB8ICZuYnNwOyA8YSBocmVmPVwiI1wiPlByaXZhY3kgcG9saWN5PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBsaW5rc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Zvb3Rlcj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBTZXQgdXAgY2F0ZWdvcmllc1xyXG5mZXRjaChgJHtDT05GSUcuUk9PVF9BUElfVVJMfS9jYXRlZ29yaWVzP25vX3BhcmVudD10cnVlYCwge1xyXG5cdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9KVxyXG59KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn0pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcclxuXHRcdGNhdGVnb3JpZXM6IHtcclxuXHRcdFx0bWFpbjogZGF0YS5yZXN1bHRzXHJcblx0XHR9XHJcblx0fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IEZvcm1JbnB1dCBmcm9tIFwiLi9Gb3JtSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdG9uRmlsdGVyVGl0bGVDbGljayhldmVudCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoZXZlbnQudGFyZ2V0KSxcclxuICAgICAgICAkcGFyZW50ID0gJHRoaXMucGFyZW50KCk7XHJcbiAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICgkcGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuZmlsdGVyLWNvbnRlbnQnKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBGaWx0ZXJzID0gdGhpcztcclxuICAgICAgICAkKFwiI3JhbmdlLXByaWNlLXNsaWRlclwiKS5pb25SYW5nZVNsaWRlcih7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiA0MDAwLFxyXG4gICAgICAgICAgICBmcm9tOiAwLFxyXG4gICAgICAgICAgICB0bzogNDAwMCxcclxuICAgICAgICAgICAgcHJlZml4OiBTdHJpbmcuZnJvbUNoYXJDb2RlKDgzODEpLFxyXG4gICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIEZpbHRlcnMucHJvcHMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlclR5cGU6ICdwcmljZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS5mcm9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnRvXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pOyAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWx0ZXJzXCIgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9e3RoaXMub25GaWx0ZXJUaXRsZUNsaWNrfT7QptC10L3QsDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicmFuZ2UtcHJpY2Utc2xpZGVyXCIgbmFtZT1cInJhbmdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25DbGljaz17dGhpcy5vbkZpbHRlclRpdGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QuNC30LLQvtC00LjRgtC10LvRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmZpbHRlcnMubWFudWZhY3R1cmVycy5tYXAoKG1hbnVmYWN0dXJlciwgaWR4KSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtSW5wdXQga2V5PXtpZHh9IGxhYmVsPXttYW51ZmFjdHVyZXIubmFtZX0gdHlwZT1cImNoZWNrYm94XCIgYW55PXttYW51ZmFjdHVyZXIuYW55fSB1cGRhdGVTdGF0ZT17KHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmlsdGVyVHlwZSA9IFwibWFudWZhY3R1cmVyc1wiO1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhdGUuaWR4ID0gaWR4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5wcm9wcy51cGRhdGVTdGF0ZShzdGF0ZSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgfX0gY2hlY2tlZD17bWFudWZhY3R1cmVyLmNoZWNrZWR9Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgXHR9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbkNsaWNrPXt0aGlzLm9uRmlsdGVyVGl0bGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCm0LLQtdGCXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGVudCBmaWx0ZXItY29udGVudF90eXBlX2NvbG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5maWx0ZXJzLmNvbG9ycy5tYXAoKGNvbG9yLCBpZHgpID0+IHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEZvcm1JbnB1dCBrZXk9e2lkeH0gdmFsdWU9e2NvbG9yLnZhbHVlfSBsYWJlbD17Y29sb3IubmFtZX0gdHlwZT1cImNoZWNrYm94XCIgYW55PXtjb2xvci5hbnl9IHVwZGF0ZVN0YXRlPXsoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5maWx0ZXJUeXBlID0gXCJjb2xvcnNcIjtcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlLmlkeCA9IGlkeDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH19IGNoZWNrZWQ9e2NvbG9yLmNoZWNrZWR9Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgXHR9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGFueSA9IHRoaXMucHJvcHMuYW55O1xyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHt0aGlzLnByb3BzLmNoZWNrZWQgPyAnY2hlY2tlZCcgOiAnJ30gJHt0aGlzLnByb3BzLnR5cGV9ICR7dGhpcy5wcm9wcy52YWx1ZSA/ICdjb2xvcicgOiAnJ31gfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogYCMke3RoaXMucHJvcHMudmFsdWV9YCB8fCAnbm9uZScsIGJveFNoYWRvdzogdGhpcy5wcm9wcy52YWx1ZSAmJiB0aGlzLnByb3BzLmNoZWNrZWQgPyAnMCA0cHggMC41ZW0gYmxhY2snIDogJ25vbmUnfX0+XHJcbiAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgXHQ8aW5wdXQgdHlwZT17dGhpcy5wcm9wcy50eXBlfSBjaGVja2VkPXshIXRoaXMucHJvcHMuY2hlY2tlZH0gb25DaGFuZ2U9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgXHRcdFx0Y2hlY2tlZDogYW55IHx8IGV2ZW50LnRhcmdldC5jaGVja2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW55XHJcbiAgICAgICAgICAgICAgICBcdFx0fSk7XHJcbiAgICAgICAgICAgICAgICBcdH19Lz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdCk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXItZml4ZWQgaGVhZGVyLW5hdlwiPlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBuYXZpZ2F0aW9uLXRvcCBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cIm9wZW4tc2VhcmNoXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1hZ25pZmllclwiPjwvaT48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJvcGVuLWNhcnRcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT4gPHNwYW4+Mzwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gbmF2aWdhdGlvbi1tYWluXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm9wZW4tbWVudVwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51XCI+PC9pPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctbWVudVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbWVudS13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLW1lbnVcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3NcIj48L2k+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXguaHRtbFwiPtCU0L7QvNC+0Lk8L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QmtCw0YLQsNC70L7QsyDRgtC+0LLQsNGA0L7QsiA8c3BhbiBjbGFzc05hbWU9XCJvcGVuLWRyb3Bkb3duXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT48L3NwYW4+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd24gbmF2YmFyLWRyb3Bkb3duLXNpbmdsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJveFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0yXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaWR4KSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHJldHVybiA8bGkga2V5PXtpZHh9PjxhIGhyZWY9XCIjXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPjwvbGk+O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fSl9XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCe0L/Qu9Cw0YLQsCDQuCDQtNC+0YHRgtCw0LLQutCwPC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJ0bi1zZWFyY2hcIj5HbyE8L2J1dHRvbj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWl0ZW1zXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj5Qcm9kdWN0cyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tY2xlYW4tZGFyayBidG4teHNcIj5WaWV3IGFsbDwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkdyZWVuIGNvcm5lcjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5Tb2ZhPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkxhdXJhPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkFybWNoYWlyczwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5OdWRlPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkRpbmluZyB0YWJsZXM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+QXVyb3JhPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPk5pZ2h0c3RhbmRzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkRpbmluZyBzZXQ8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+S2l0Y2hlbjwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5TZWF0IGNoYWlyPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkJhciBzZXRzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0XCI+U2lnbiBpbjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+PC9pbnB1dD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvaW5wdXQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZm9yZ290cGFzc3dvcmRcIiBjbGFzc05hbWU9XCJvcGVuLXBvcHVwXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjcmVhdGVhY2NvdW50XCIgY2xhc3NOYW1lPVwib3Blbi1wb3B1cFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tbWFpblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1pdGVtIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lcjwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkdyZWVuIGNvcm5lcjwvc21hbGw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLXF1YW50aXR5XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmFsXCI+JCAxLjk5ODwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4kIDIuNjY2PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm9zcyBpY29uLWRlbGV0ZVwiPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWl0ZW0gY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0zLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+R3JlZW4gY29ybmVyPC9zbWFsbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tcXVhbnRpdHlcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluYWxcIj4kIDEuOTk4PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPiQgMi42NjY8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzIGljb24tZGVsZXRlXCI+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGlzY291bnQgMTUlPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCAxNTksMDA8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1mb290ZXIgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNoaXBwaW5nPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCAzMCwwMDwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VkFUPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCA1OSwwMDwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2stZm9vdGVyIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbDwvc3Ryb25nPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgdGl0bGVcIj4kIDEyNTksMDA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jay1idXR0b25zIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuLWRhcmtcIj5Db250aW51ZSBzaG9wcGluZzwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW5cIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvc3Bhbj4gQ2hlY2tvdXQ8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPC9uYXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJhciBjbGVhcmZpeFwiPiBcclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtcmVzdWx0cyBwdWxsLWxlZnRcIj5cclxuXHQgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9Cy0L7QtNC40YLRjCDQv9C+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtb3B0aW9uPVwiaXRlbXNQZXJQYWdlXCIgb25DaGFuZ2U9e3RoaXMub25TdGF0ZUNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaXRlbXNQZXJQYWdlfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG5cdCAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnMgcHVsbC1yaWdodFwiPlxyXG5cdCAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj7QodC+0YDRgtC40YDQvtCy0LDRgtGMINC/0L4mbmJzcDsmbmJzcDs8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzb3J0LXByaWNlXCIgZGF0YS1vcHRpb249XCJwcmljZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU3RhdGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLnByaWNlfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj7QptC10L3QsDog0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOPC9vcHRpb24+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPtCm0LXQvdCwOiDQv9C+INGD0LHRi9Cy0LDQvdC40Y48L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzb3J0LW5hbWVcIiBkYXRhLW9wdGlvbj1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5vblN0YXRlQ2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5uYW1lfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBLXpcIj7QndCw0LfQstCw0L3QuNC1OiDQvtGCINCQINC00L4g0K88L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ6LUFcIj7QndCw0LfQstCw0L3QuNC1OiDQvtGCINCvINC00L4g0JA8L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyaWQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0PGEgY2xhc3NOYW1lPVwidG9nZ2xlLWZpbHRlcnMtbW9iaWxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPC9kaXY+XHRcdFx0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25TdGF0ZUNoYW5nZShldmVudCkge1xyXG5cdFx0bGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQub3B0aW9uO1xyXG5cdFx0aWYgKG9wdGlvbiA9PT0gJ2l0ZW1zUGVyUGFnZScpIHtcclxuXHRcdFx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0b3B0aW9uLFxyXG5cdFx0XHR2YWx1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdFJPT1RfQVBJX1VSTDogJ2h0dHA6Ly9kb29yLXNob3AucGF2ZWxnb2x0c2V2LmNvbS9hcGkvdjEnXHJcbn07Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQWlCQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLG9DQW1SQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7QUFyd0JBO0FBQ0E7QUFDQTtBQXV3QkE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzF4QkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFiQTtBQWVBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFKQTtBQUtBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFLQTs7OztBQTVFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBU0E7Ozs7QUFoQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFHQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFTQTtBQUFBO0FBWUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXQTs7OztBQTNOQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQS9DQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBO0FBREE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==