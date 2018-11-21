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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./js/config.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./js/constants.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./js/Header.js");
/* harmony import */ var _Filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Filters */ "./js/Filters.js");
/* harmony import */ var _SortBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SortBar */ "./js/SortBar.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./js/Pagination.js");
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
      },
      pagination: {
        activePage: 1
      }
    };
    _this.updateFiltersData = _this.updateFiltersData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setUpFilters = _this.setUpFilters.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updateSortingData = _this.updateSortingData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.updatePaginationData = _this.updatePaginationData.bind(_assertThisInitialized(_assertThisInitialized(_this)));

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

        if ($(document).scrollTop() > _constants__WEBPACK_IMPORTED_MODULE_1__["default"].HEADER_NAV_HEIGHT) {
          navbarFixed.addClass('navbar-sticked');
        } // Add sticky menu on scroll


        $(document).on('bind ready scroll', function () {
          var docScroll = $(document).scrollTop();

          if (docScroll >= _constants__WEBPACK_IMPORTED_MODULE_1__["default"].STICKY_MENU_AFTER_SCROLL_POSITION) {
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
            autoPlay: _constants__WEBPACK_IMPORTED_MODULE_1__["default"].FRONTPAGE_SLIDER_ANIMATION_TIMEOUT,
            stopOnHover: false
          });
          animatetCaptions();

          function animatetCaptions(event) {
            "use strict";

            var activeItem = $(n).find('.owl-item.active'),
                timeDelay = _constants__WEBPACK_IMPORTED_MODULE_1__["default"].FRONTPAGE_SLIDER_DELAY_BEFORE_ANIMATE_CAPTIONS;
            $.each(activeItem.find('.animated'), function (j, m) {
              var item = $(m);
              item.css('animation-delay', timeDelay + 'ms');
              timeDelay = timeDelay + _constants__WEBPACK_IMPORTED_MODULE_1__["default"].FRONTPAGE_SLIDER_DELAY_OFFSET_ANIMATE_CAPTIONS;
              item.addClass(item.data('animation'));
              setTimeout(function () {
                item.removeClass(item.data('animation'));
              }, _constants__WEBPACK_IMPORTED_MODULE_1__["default"].FRONTPAGE_SLIDER_DELAY_BEFORE_NEXT);
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

          if (docScrollTop >= _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCROLL_TO_TOP_OFFSET_SHOW) {
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
          }, _constants__WEBPACK_IMPORTED_MODULE_1__["default"].SCROLL_TO_TOP_ANIMATION_TIME);
          return false;
        });
        setTimeout(function () {
          $('.page-loader').addClass('loaded');
        }, _constants__WEBPACK_IMPORTED_MODULE_1__["default"].DELAY_REMOVE_PAGE_LOADER);
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
      var option = changes.option;
      this.setState(function (state) {
        if (option === 'itemsPerPage') {
          state.pagination.activePage = 1;
        }

        state.sorting[option] = changes.value;
        return state;
      });
    }
  }, {
    key: "updatePaginationData",
    value: function updatePaginationData(changes) {
      this.setState(function (state) {
        state.pagination.activePage = changes.activePage;
        return state;
      });
    }
  }, {
    key: "setUpFilters",
    value: function setUpFilters() {
      var _this2 = this;

      // Manufacturers
      var manufacturersDataGet = new Promise(function (resolve, reject) {
        fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"].ROOT_API_URL, "/manufacturers"), {
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
        fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"].ROOT_API_URL, "/products"), {
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
      }, React.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
      })))), false ? undefined : React.createElement("section", {
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
      }, this.state.filters.isReady ? React.createElement(_Filters__WEBPACK_IMPORTED_MODULE_3__["default"], {
        filters: this.state.filters,
        updateState: this.updateFiltersData
      }) : null), React.createElement("div", {
        className: "col-md-9 col-xs-12"
      }, React.createElement(_SortBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
        updateState: this.updateSortingData,
        itemsPerPage: this.state.sorting.itemsPerPage,
        price: this.state.sorting.price,
        name: this.state.sorting.name
      }), React.createElement("div", {
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
      }, "Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla")))))), React.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_5__["default"], {
        updateState: this.updatePaginationData,
        totalItems: 170,
        itemsPerPage: this.state.sorting.itemsPerPage,
        activePage: this.state.pagination.activePage
      }))), React.createElement("div", {
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
}(React.Component); // Set up categories


fetch("".concat(_config__WEBPACK_IMPORTED_MODULE_0__["default"].ROOT_API_URL, "/categories?no_parent=true"), {
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
        max: 100000,
        from: 0,
        to: 100000,
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
          backgroundColor: "#".concat(this.props.value) || false,
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

/***/ "./js/Pagination.js":
/*!**************************!*\
  !*** ./js/Pagination.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagination; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "onControlItemClick",
    value: function onControlItemClick(event, controlName) {
      event.preventDefault();
      var activePage = this.props.activePage;
      var state = {
        activePage: activePage
      };

      if (controlName === 'previous') {
        if (activePage > 1) {
          state.activePage = activePage - 1;
        }
      } else if (controlName === 'next') {
        if (parseInt(this.props.totalItems / this.props.itemsPerPage) > activePage) {
          state.activePage = activePage + 1;
        }
      }

      this.props.updateState(state);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var pagesCount = parseInt(this.props.totalItems / this.props.itemsPerPage);

      var pages = _toConsumableArray(new Array(pagesCount));

      var activePage = this.props.activePage;
      var previousControlDisabled = activePage === 1;
      var nextControlDisabled = activePage === pagesCount;
      return React.createElement("div", {
        className: "pagination-wrapper"
      }, React.createElement("ul", {
        className: "pagination"
      }, React.createElement("li", {
        className: previousControlDisabled ? 'disabled' : ''
      }, React.createElement("a", {
        href: "#",
        "aria-label": "Previous",
        onClick: function onClick(event) {
          _this.onControlItemClick(event, 'previous');
        }
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xAB"))), pages.map(function (page, idx) {
        return React.createElement("li", {
          key: idx,
          className: idx + 1 === activePage ? 'active' : ''
        }, React.createElement("a", {
          href: "#",
          onClick: function onClick(event) {
            event.preventDefault();

            _this.props.updateState({
              activePage: idx + 1
            });
          }
        }, idx + 1));
      }), React.createElement("li", {
        className: nextControlDisabled ? 'disabled' : ''
      }, React.createElement("a", {
        href: "#",
        "aria-label": "Next",
        onClick: function onClick(event) {
          _this.onControlItemClick(event, 'next');
        }
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xBB")))));
    }
  }]);

  return Pagination;
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

/***/ }),

/***/ "./js/constants.js":
/*!*************************!*\
  !*** ./js/constants.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  STICKY_MENU_AFTER_SCROLL_POSITION: 10,
  FRONTPAGE_SLIDER_ANIMATION_TIMEOUT: 8000,
  FRONTPAGE_SLIDER_DELAY_BEFORE_ANIMATE_CAPTIONS: 100,
  FRONTPAGE_SLIDER_DELAY_OFFSET_ANIMATE_CAPTIONS: 180,
  FRONTPAGE_SLIDER_DELAY_BEFORE_NEXT: 2000,
  SCROLL_TO_TOP_OFFSET_SHOW: 150,
  SCROLL_TO_TOP_ANIMATION_TIME: 1000,
  DELAY_REMOVE_PAGE_LOADER: 1000,
  HEADER_NAV_HEIGHT: 94
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy9Tb3J0QmFyLmpzIiwid2VicGFjazovLy8uL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb25zdGFudHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9BcHAuanNcIik7XG4iLCJpbXBvcnQgQ09ORklHIGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi9GaWx0ZXJzXCI7XHJcbmltcG9ydCBTb3J0QmFyIGZyb20gXCIuL1NvcnRCYXJcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vUGFnaW5hdGlvblwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0ZmlsdGVyczoge1xyXG5cdFx0XHRcdGlzUmVhZHk6IGZhbHNlXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0c29ydGluZzoge1xyXG5cdFx0XHRcdGl0ZW1zUGVyUGFnZTogMTAsXHJcblx0XHRcdFx0cHJpY2U6ICdhc2MnLFxyXG5cdFx0XHRcdG5hbWU6ICdBLXonXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRhY3RpdmVQYWdlOiAxXHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR0aGlzLnVwZGF0ZUZpbHRlcnNEYXRhID0gdGhpcy51cGRhdGVGaWx0ZXJzRGF0YS5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy5zZXRVcEZpbHRlcnMgPSB0aGlzLnNldFVwRmlsdGVycy5iaW5kKHRoaXMpO1xyXG5cdFx0dGhpcy51cGRhdGVTb3J0aW5nRGF0YSA9IHRoaXMudXBkYXRlU29ydGluZ0RhdGEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMudXBkYXRlUGFnaW5hdGlvbkRhdGEgPSB0aGlzLnVwZGF0ZVBhZ2luYXRpb25EYXRhLmJpbmQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5zZXRVcEZpbHRlcnMoKTtcclxuXHR9XHJcblxyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0KGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cdFx0ICAgIC8vIE1haW4gbmF2aWdhdGlvbiAmIG1lZ2EgbWVudVxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgLy8gR2xvYmFsIG1lbnUgdmFyaWFibGVzXHJcblxyXG5cdFx0ICAgIHZhciBvYmpTZWFyY2ggPSAkKCcuc2VhcmNoLXdyYXBwZXInKSxcclxuXHRcdCAgICAgICAgb2JqQ2FydCA9ICQoJy5jYXJ0LXdyYXBwZXInKSxcclxuXHRcdCAgICAgICAgb2JqTWVudSA9ICQoJy5mbG9hdGluZy1tZW51JyksXHJcblx0XHQgICAgICAgIG9iak1lbnVMaW5rID0gJCgnLmZsb2F0aW5nLW1lbnUgYScpLFxyXG5cdFx0ICAgICAgICAkc2VhcmNoID0gJCgnLm9wZW4tc2VhcmNoJyksXHJcblx0XHQgICAgICAgICRjYXJ0ID0gJCgnLm9wZW4tY2FydCcpLFxyXG5cdFx0ICAgICAgICAkbWVudSA9ICQoJy5vcGVuLW1lbnUnKSxcclxuXHRcdCAgICAgICAgJG9wZW5Ecm9wZG93biA9ICQoJy5vcGVuLWRyb3Bkb3duJyksXHJcblx0XHQgICAgICAgICRjbG9zZSA9ICQoJy5jbG9zZS1tZW51Jyk7XHJcblxyXG5cdFx0ICAgIC8vIE9wZW4vY2xvc2Ugc2VhcmNoIGJhclxyXG5cclxuXHRcdCAgICAkc2VhcmNoLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdG9nZ2xlT3BlbigkKHRoaXMpKTtcclxuXHRcdCAgICAgICAgb2JqU2VhcmNoLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgIG9ialNlYXJjaC5maW5kKCdpbnB1dCcpLmZvY3VzKCk7XHJcblx0XHQgICAgICAgIGNsb3NlQ2FydCgpO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBPcGVuL2Nsb3NlIGNhcnRcclxuXHJcblx0XHQgICAgJGNhcnQub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB0b2dnbGVPcGVuKCQodGhpcykpO1xyXG5cdFx0ICAgICAgICBvYmpDYXJ0LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgIGNsb3NlU2VhcmNoKCk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIE1vYmlsZSBtZW51IG9wZW4vY2xvc2VcclxuXHJcblx0XHQgICAgJG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICBvYmpNZW51LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0ICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG5cdFx0ICAgICAgICBjbG9zZUNhcnQoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gT3BlbiBkcm9wZG93bi9tZWdhbWVudVxyXG5cclxuXHRcdCAgICAkb3BlbkRyb3Bkb3duLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblxyXG5cdFx0ICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0ICAgICAgICB2YXIgbGlQYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLFxyXG5cdFx0ICAgICAgICAgICAgbGlEcm9wZG93biA9IGxpUGFyZW50LmZpbmQoJy5uYXZiYXItZHJvcGRvd24nKTtcclxuXHJcblx0XHQgICAgICAgIGxpUGFyZW50LnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cclxuXHRcdCAgICAgICAgaWYgKGxpUGFyZW50Lmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcblx0XHQgICAgICAgICAgICBsaURyb3Bkb3duLnNsaWRlRG93bigpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgbGlEcm9wZG93bi5zbGlkZVVwKCk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gQ2xvc2UgbWVudSAobW9iaWxlKVxyXG5cclxuXHRcdCAgICAkY2xvc2Uub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCduYXYnKS5maW5kKCcuZXhwYW5kZWQnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHRcdCAgICAgICAgJCgnbmF2JykuZmluZCgnLm5hdmJhci1kcm9wZG93bicpLnNsaWRlVXAoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gR2xvYmFsIGZ1bmN0aW9uc1xyXG5cclxuXHRcdCAgICBmdW5jdGlvbiB0b2dnbGVPcGVuKGVsKSB7XHJcblx0XHQgICAgICAgICQoZWwpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBmdW5jdGlvbiBjbG9zZVNlYXJjaCgpIHtcclxuXHRcdCAgICAgICAgb2JqU2VhcmNoLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgICRzZWFyY2gucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCAgICB9XHJcblx0XHQgICAgZnVuY3Rpb24gY2xvc2VDYXJ0KCkge1xyXG5cdFx0ICAgICAgICBvYmpDYXJ0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgICRjYXJ0LnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICAvLyBTdGlja3kgaGVhZGVyXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgbmF2YmFyRml4ZWQgPSAkKCduYXYubmF2YmFyLWZpeGVkJyk7XHJcblxyXG5cdFx0ICAgIC8vIFdoZW4gcmVsb2FkIHBhZ2UgLSBjaGVjayBpZiBwYWdlIGhhcyBvZmZzZXRcclxuXHRcdCAgICBpZiAoJChkb2N1bWVudCkuc2Nyb2xsVG9wKCkgPiBDT05TVEFOVFMuSEVBREVSX05BVl9IRUlHSFQpIHtcclxuXHRcdCAgICAgICAgbmF2YmFyRml4ZWQuYWRkQ2xhc3MoJ25hdmJhci1zdGlja2VkJyk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIC8vIEFkZCBzdGlja3kgbWVudSBvbiBzY3JvbGxcclxuXHRcdCAgICAkKGRvY3VtZW50KS5vbignYmluZCByZWFkeSBzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgIHZhciBkb2NTY3JvbGwgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcclxuXHRcdCAgICAgICAgaWYgKGRvY1Njcm9sbCA+PSBDT05TVEFOVFMuU1RJQ0tZX01FTlVfQUZURVJfU0NST0xMX1BPU0lUSU9OKSB7XHJcblx0XHQgICAgICAgICAgICBuYXZiYXJGaXhlZC5hZGRDbGFzcygnbmF2YmFyLXN0aWNrZWQnKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgIG5hdmJhckZpeGVkLnJlbW92ZUNsYXNzKCduYXZiYXItc3RpY2tlZCcpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIEZyb250cGFnZSBzbGlkZXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIHZhciBhcnJvd0ljb25zID0gW1xyXG5cdFx0ICAgICAgICAnPHNwYW4gY2xhc3M9XCJpY29uIGljb24tY2hldnJvbi1sZWZ0XCI+PC9zcGFuPicsXHJcblx0XHQgICAgICAgICc8c3BhbiBjbGFzcz1cImljb24gaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPidcclxuXHRcdCAgICBdO1xyXG5cclxuXHRcdCAgICAkLmVhY2goJChcIi5vd2wtc2xpZGVyXCIpLCBmdW5jdGlvbiAoaSwgbikge1xyXG5cclxuXHRcdCAgICAgICAgJChuKS5vd2xDYXJvdXNlbCh7XHJcblx0XHQgICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuXHRcdCAgICAgICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcblx0XHQgICAgICAgICAgICBuYXZpZ2F0aW9uVGV4dDogYXJyb3dJY29ucyxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG5cdFx0ICAgICAgICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcclxuXHRcdCAgICAgICAgICAgIGFkZENsYXNzQWN0aXZlOiB0cnVlLFxyXG5cdFx0ICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlOiBcImZhZGVVcFwiLFxyXG5cdFx0ICAgICAgICAgICAgYWZ0ZXJNb3ZlOiBhbmltYXRldENhcHRpb25zLFxyXG5cdFx0ICAgICAgICAgICAgYXV0b1BsYXk6IENPTlNUQU5UUy5GUk9OVFBBR0VfU0xJREVSX0FOSU1BVElPTl9USU1FT1VULFxyXG5cdFx0ICAgICAgICAgICAgc3RvcE9uSG92ZXI6IGZhbHNlXHJcblx0XHQgICAgICAgIH0pO1xyXG5cclxuXHRcdCAgICAgICAgYW5pbWF0ZXRDYXB0aW9ucygpOyBcclxuXHJcblx0XHQgICAgICAgIGZ1bmN0aW9uIGFuaW1hdGV0Q2FwdGlvbnMoZXZlbnQpIHtcclxuXHRcdCAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xyXG5cdFx0ICAgICAgICAgICAgdmFyIGFjdGl2ZUl0ZW0gPSAkKG4pLmZpbmQoJy5vd2wtaXRlbS5hY3RpdmUnKSxcclxuXHRcdCAgICAgICAgICAgIHRpbWVEZWxheSA9IENPTlNUQU5UUy5GUk9OVFBBR0VfU0xJREVSX0RFTEFZX0JFRk9SRV9BTklNQVRFX0NBUFRJT05TO1xyXG5cdFx0ICAgICAgICAgICAgJC5lYWNoKGFjdGl2ZUl0ZW0uZmluZCgnLmFuaW1hdGVkJyksIGZ1bmN0aW9uIChqLCBtKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKG0pO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGl0ZW0uY3NzKCdhbmltYXRpb24tZGVsYXknLCB0aW1lRGVsYXkgKyAnbXMnKTtcclxuXHRcdCAgICAgICAgICAgICAgICB0aW1lRGVsYXkgPSB0aW1lRGVsYXkgKyBDT05TVEFOVFMuRlJPTlRQQUdFX1NMSURFUl9ERUxBWV9PRkZTRVRfQU5JTUFURV9DQVBUSU9OUztcclxuXHRcdCAgICAgICAgICAgICAgICBpdGVtLmFkZENsYXNzKGl0ZW0uZGF0YSgnYW5pbWF0aW9uJykpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZUNsYXNzKGl0ZW0uZGF0YSgnYW5pbWF0aW9uJykpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIH0sIENPTlNUQU5UUy5GUk9OVFBBR0VfU0xJREVSX0RFTEFZX0JFRk9SRV9ORVhUKTtcclxuXHRcdCAgICAgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblxyXG5cdFx0ICAgICAgICBpZiAoJChuKS5oYXNDbGFzcygnb3dsLXNsaWRlci1mdWxsc2NyZWVuJykpIHtcclxuXHRcdCAgICAgICAgICAgICQoJy5oZWFkZXItY29udGVudCAuaXRlbScpLmhlaWdodCgkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIFNjcm9sbCB0byB0b3BcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIHZhciAkd3JhcHBlciA9ICQoJy53cmFwcGVyJyk7XHJcblx0XHQgICAgJHdyYXBwZXIuYXBwZW5kKCQoXCI8ZGl2IGNsYXNzPSdzY3JvbGwtdG9wJz48aSBjbGFzcz0naWNvbiBpY29uLWNoZXZyb24tdXAnPjwvaT48L2Rpdj5cIikpO1xyXG5cclxuXHRcdCAgICB2YXIgJHNjcm9sbGJ0biA9ICQoJy5zY3JvbGwtdG9wJyk7XHJcblxyXG5cdFx0ICAgICQoZG9jdW1lbnQpLm9uKCdyZWFkeSBzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgIHZhciBkb2NTY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSxcclxuXHRcdCAgICAgICAgICAgIGRvY1Njcm9sbEJvdHRvbSA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5oZWlnaHQoKSA9PSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHJcblx0XHQgICAgICAgIGlmIChkb2NTY3JvbGxUb3AgPj0gQ09OU1RBTlRTLlNDUk9MTF9UT19UT1BfT0ZGU0VUX1NIT1cpIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4uYWRkQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4ucmVtb3ZlQ2xhc3MoJ3Zpc2libGUnKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBpZiAoZG9jU2Nyb2xsQm90dG9tKSB7XHJcblx0XHQgICAgICAgICAgICAkc2Nyb2xsYnRuLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgICRzY3JvbGxidG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgICAgIHNjcm9sbFRvcDogJCgnYm9keScpLm9mZnNldCgpLnRvcFxyXG5cdFx0ICAgICAgICB9LCBDT05TVEFOVFMuU0NST0xMX1RPX1RPUF9BTklNQVRJT05fVElNRSk7XHJcblx0XHQgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICQoJy5wYWdlLWxvYWRlcicpLmFkZENsYXNzKCdsb2FkZWQnKTtcclxuXHRcdCAgICB9LCBDT05TVEFOVFMuREVMQVlfUkVNT1ZFX1BBR0VfTE9BREVSKTtcclxuXHJcblx0XHR9KSgpO1x0XHRcclxuXHR9XHJcblxyXG5cdHVwZGF0ZUZpbHRlcnNEYXRhKGNoYW5nZXMpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlLCBwcm9wcykgPT4ge1xyXG5cdFx0XHRjb25zdCBmaWx0ZXJUeXBlID0gY2hhbmdlcy5maWx0ZXJUeXBlO1xyXG5cdFx0XHRsZXQgZmlsdGVycyA9IHN0YXRlLmZpbHRlcnNbZmlsdGVyVHlwZV07XHJcblxyXG5cdFx0XHRpZiAoZmlsdGVyVHlwZSA9PT0gJ3ByaWNlJykge1xyXG5cdFx0XHRcdGZpbHRlcnMgPSB7XHJcblx0XHRcdFx0XHRmcm9tOiBjaGFuZ2VzLmZyb20sXHJcblx0XHRcdFx0XHR0bzogY2hhbmdlcy50b1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZmlsdGVyc1tjaGFuZ2VzLmlkeF0uY2hlY2tlZCA9IGNoYW5nZXMuY2hlY2tlZDtcdFx0XHRcdFxyXG5cdFx0XHRcdGNvbnN0IGFueU9wdGlvbiA9IGZpbHRlcnMuZmluZCgoZmlsdGVyT3B0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmlsdGVyT3B0aW9uLmFueTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoY2hhbmdlcy5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRpZiAoY2hhbmdlcy5hbnkpIHtcclxuXHRcdFx0XHRcdFx0ZmlsdGVycy5mb3JFYWNoKChmaWx0ZXJPcHRpb24pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoIWZpbHRlck9wdGlvbi5hbnkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbHRlck9wdGlvbi5jaGVja2VkID0gZmFsc2U7XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGFueU9wdGlvbikge1xyXG5cdFx0XHRcdFx0XHRhbnlPcHRpb24uY2hlY2tlZCA9IGZhbHNlO1x0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZmlsdGVycy5ldmVyeSgoZmlsdGVyT3B0aW9uKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gIWZpbHRlck9wdGlvbi5jaGVja2VkO1xyXG5cdFx0XHRcdH0pKSB7XHJcblx0XHRcdFx0XHRhbnlPcHRpb24uY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU29ydGluZ0RhdGEoY2hhbmdlcykge1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gY2hhbmdlcy5vcHRpb247XHJcblx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG5cdFx0XHRpZiAob3B0aW9uID09PSAnaXRlbXNQZXJQYWdlJykge1xyXG5cdFx0XHRcdHN0YXRlLnBhZ2luYXRpb24uYWN0aXZlUGFnZSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0c3RhdGUuc29ydGluZ1tvcHRpb25dID0gY2hhbmdlcy52YWx1ZTtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVQYWdpbmF0aW9uRGF0YShjaGFuZ2VzKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG5cdFx0XHRzdGF0ZS5wYWdpbmF0aW9uLmFjdGl2ZVBhZ2UgPSBjaGFuZ2VzLmFjdGl2ZVBhZ2U7XHJcblx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0c2V0VXBGaWx0ZXJzKCkge1xyXG5cdFx0Ly8gTWFudWZhY3R1cmVyc1xyXG5cdFx0bGV0IG1hbnVmYWN0dXJlcnNEYXRhR2V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgJHtDT05GSUcuUk9PVF9BUElfVVJMfS9tYW51ZmFjdHVyZXJzYCwge1xyXG5cdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG5cdFx0XHRcdFx0c3RhdGUuZmlsdGVycy5tYW51ZmFjdHVyZXJzID0gZGF0YS5yZXN1bHRzO1xyXG5cdFx0XHRcdFx0c3RhdGUuZmlsdGVycy5tYW51ZmFjdHVyZXJzLnVuc2hpZnQoe1xyXG5cdFx0XHRcdFx0XHRpZDogOTk5OSxcclxuXHRcdFx0XHRcdFx0YW55OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRjaGVja2VkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiBcItCb0Y7QsdC+0LlcIlxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vQ29sb3JzXHJcblx0XHRsZXQgY29sb3JzRGF0YUdldCA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdFx0ZmV0Y2goYCR7Q09ORklHLlJPT1RfQVBJX1VSTH0vcHJvZHVjdHNgLCB7XHJcblx0XHRcdFx0aGVhZGVyczogbmV3IEhlYWRlcnMoe1xyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdFx0fSkudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdGxldCBjb2xvcnMgPSBbXTtcclxuXHRcdFx0XHRkYXRhLnJlc3VsdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHByb2R1Y3QuY29sb3IgJiYgIWNvbG9ycy5maW5kKChjb2xvcikgPT4ge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvZHVjdC5jb2xvci5pZCA9PT0gY29sb3IuaWQ7XHRcclxuXHRcdFx0XHRcdH0pKSB7XHJcblx0XHRcdFx0XHRcdGNvbG9ycy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRpZDogcHJvZHVjdC5jb2xvci5pZCxcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogcHJvZHVjdC5jb2xvci52YWx1ZVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Y29sb3JzLnVuc2hpZnQoe1xyXG5cdFx0XHRcdFx0aWQ6IDk5OTksXHJcblx0XHRcdFx0XHRhbnk6IHRydWUsXHJcblx0XHRcdFx0XHRjaGVja2VkOiB0cnVlLFxyXG5cdFx0XHRcdFx0bmFtZTogJ9Cb0Y7QsdC+0LknXHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmNvbG9ycyA9IGNvbG9ycztcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0XHRQcm9taXNlLmFsbChbbWFudWZhY3R1cmVyc0RhdGFHZXQsIGNvbG9yc0RhdGFHZXRdKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmlzUmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8SGVhZGVyIGNhdGVnb3JpZXM9e3RoaXMucHJvcHMuY2F0ZWdvcmllcy5tYWlufS8+XHJcblx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtc2xpZGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoYXNzZXRzL2ltYWdlcy9nYWxsZXJ5LTEuanBnKVwifX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBhbmltYXRlZCBoMVwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluRG93blwiPk1vZGVybiBmdXJuaXR1cmUgdGhlbWU8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2Rlcm4gJiBwb3dlcmZ1bGwgdGVtcGxhdGUuIDxiciAvPiBDbGVhbiBkZXNpZ24gJiByZXBvbnNpdmVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQuIEdvb2dsZSBmb250cyBpbnRlZ3JhdGlvblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluXCIgPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPiBCdXkgdGhpcyB0ZW1wbGF0ZTwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMi5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+TW9iaWxlIHJlYWR5ITwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlVubGltaXRlZCBDaG9pY2VzLiBVbmJlYXRhYmxlIFByaWNlcy4gRnJlZSBTaGlwcGluZy48L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+RnVybml0dXJlIGNhdGVnb3J5IGljb24gZm9udHMhPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPkdldCBpbnNpcHJlZDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMy5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyeSBBbmltYXRlLmNzcyBGcmllbmQuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjIGFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbWJpbmUgd2l0aCBhbmltYXRlLmNzcy4gT3IganVzdCB1c2UgeW91ciBvd24hLlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MgYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuY2ggb2YgdHlwb2dyYXBoeSBlZmZlY3RzLlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPkJ1eSB0aGlzIHRlbXBsYXRlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHQgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm93bC1pY29ucy13cmFwcGVyIG93bC1pY29ucy1mcm9udHBhZ2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0IGNhdGVnb3JpZXM8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtaWNvbnNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY2F0ZWdvcmllcy5tYWluLm1hcCgoY2F0ZWdvcnksIGlkeCkgPT4ge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgXHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBrZXk9e2lkeH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImYtaWNvblwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBjYXRlZ29yeS5pY29uID8gYHVybCgke2NhdGVnb3J5Lmljb259KWAgOiAnbm9uZSd9fT57Y2F0ZWdvcnkuaWNvbl9jb2RlICYmICFjYXRlZ29yeS5pY29uID8gU3RyaW5nLmZyb21DaGFyQ29kZShjYXRlZ29yeS5pY29uX2NvZGUpIDogJyd9PC9pPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntjYXRlZ29yeS5uYW1lfTwvZmlnY2FwdGlvbj5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICBcdFx0KTtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0fSl9XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHRcdFx0ICAgICAgICB7ZmFsc2UgPyBudWxsIDogKFxyXG5cdFx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHNcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoMyB0aXRsZVwiPlByb2R1Y3QgY2F0ZWdvcnkgZ3JpZDwvaDM+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC14cy0xMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmZpbHRlcnMuaXNSZWFkeSA/IDxGaWx0ZXJzIGZpbHRlcnM9e3RoaXMuc3RhdGUuZmlsdGVyc30gdXBkYXRlU3RhdGU9e3RoaXMudXBkYXRlRmlsdGVyc0RhdGF9Lz4gOiBudWxsfVxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOSBjb2wteHMtMTJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U29ydEJhciB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTb3J0aW5nRGF0YX0gaXRlbXNQZXJQYWdlPXt0aGlzLnN0YXRlLnNvcnRpbmcuaXRlbXNQZXJQYWdlfSBwcmljZT17dGhpcy5zdGF0ZS5zb3J0aW5nLnByaWNlfSBuYW1lPXt0aGlzLnN0YXRlLnNvcnRpbmcubmFtZX0vPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdHNcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1kaXNjb3VudCBjYXRlZ29yeS1zb2ZhIG1hdGVyaWFsLWxlYXRoZXJcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+LTUwJTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lciA8c21hbGw+U29mYTwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ViPiQgMTQ5OSwtPC9zdWI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4xMDk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1kaXNjb3VudCBjYXRlZ29yeS1hcm1jaGFpciBtYXRlcmlhbC13b29kXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTIucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+TGF1cmEgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAzOTk5LC08L3N1Yj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjM0OTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLXJlZ3VsYXIgY2F0ZWdvcnktYXJtY2hhaXIgbWF0ZXJpYWwtbGVhdGhlclwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0zLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPk51ZGUgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjI5OTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLXJlZ3VsYXIgY2F0ZWdvcnktYXJtY2hhaXIgbWF0ZXJpYWwtd29vZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtd2FybmluZ1wiPk5ldzwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC00LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkF1cm9yYSA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+Mjk5PC9zcGFuPiwtPC9zdXA+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbiBjbGVhcmZpeFwiPkd1YmVyZ3JlbiBhbWV0IGRvbG9yIGVhIGRpYW0gdGFraW1hdGEgY29uc2V0ZXR1ciBmYWNpbGlzaXMgYmxhbmRpdCBldCBhbGlxdXlhbSBsb3JlbSBlYSBkdW8gbGFib3JlIGRpYW0gc2l0IGV0IGNvbnNldGV0dXIgbnVsbGE8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXhzLTYgaXRlbSBwcmljZS1kaXNjb3VudCBjYXRlZ29yeS1hcm1jaGFpciBtYXRlcmlhbC1tZXRhbFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwgbGFiZWwtd2FybmluZ1wiPk5ldzwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC01LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiMzYwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkRpbmluZyBzZXQgPHNtYWxsPkFybWNoYWlyPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAxOTk5LC08L3N1Yj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjE0OTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLXJlZ3VsYXIgY2F0ZWdvcnktc29mYSBtYXRlcmlhbC13b29kXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTYucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+U2VhdCBjaGFpciA8c21hbGw+U29mYTwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj44OTY8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgICAgIDxQYWdpbmF0aW9uIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVBhZ2luYXRpb25EYXRhfSB0b3RhbEl0ZW1zPXsxNzB9IGl0ZW1zUGVyUGFnZT17dGhpcy5zdGF0ZS5zb3J0aW5nLml0ZW1zUGVyUGFnZX0gYWN0aXZlUGFnZT17dGhpcy5zdGF0ZS5wYWdpbmF0aW9uLmFjdGl2ZVBhZ2V9Lz5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1tYWluIG1mcC1oaWRlXCIgaWQ9XCJwcm9kdWN0aWQxXCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0XCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtdGl0bGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMSB0aXRsZVwiPkxhdXJhIDxzbWFsbD5wcm9kdWN0IGNhdGVnb3J5PC9zbWFsbD48L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtcHJvZHVjdC1nYWxsZXJ5XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0yLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjQwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMy5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjY0MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNvbnRlbnRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWluZm8td3JhcHBlclwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk1haWZhY3R1cmVyPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5CcmFuZCBuYW1lPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYXRlcmlhbHM8L3N0cm9uZz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldvb2QsIExlYXRoZXIsIEFjcnlsaWM8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJpbGl0eTwvc3Ryb25nPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2stc3F1YXJlLW9cIj48L2k+IGluIHN0b2NrPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNlwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkF2YWlsYWJsZSBDb2xvcnM8L3N0cm9uZz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb2xvcnMgY2xlYXJmaXhcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLXJlZFwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJsdWUgY2hlY2tlZFwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWdyZWVuXCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tZ3JheVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJpZWdlXCI+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8tYm94XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNob29zZSBzaXplPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29sb3JzIGNsZWFyZml4XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlM8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZSBjaGVja2VkXCI+TTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWJpZWdlXCI+WEw8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlhYTDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtdGFibGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jZWxsXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDNcIj4kIDE5OTksMDAgPHNtYWxsPiQgMjk5OSwwMDwvc21hbGw+PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWNlbGxcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5WaWV3IG1vcmU8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlbi14c1wiPkJ1eTwvc3Bhbj48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblx0XHRcdCAgICAgICAgKX1cclxuXHJcblx0XHRcdCAgICAgICAgPGZvb3Rlcj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNob3dyb29tXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlZpc2l0IG91ciBzaG93cm9vbTwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4yMDAgMTJ0aCBBdmUsIE5ldyBZb3JrLCBOWSAxMDAwMSwgVVNBPC9wPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TW9uIC0gU2F0OiAxMCBhbSAtIDYgcG0gJm5ic3A7ICZuYnNwOyB8ICZuYnNwOyAmbmJzcDsgU3VuOiAxMnBtIC0gMiBwbTwvcD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1tYXAtbWFya2VyXCI+PC9zcGFuPiBHZXQgZGlyZWN0aW9uczwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsbC11cyBoNFwiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1waG9uZS1oYW5kc2V0XCI+PC9zcGFuPiAzMzMuMjc4LjA2NjIyPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItbGlua3NcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC0yXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QnJvd3NlIGJ5PC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5CcmFuZDwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2R1Y3Q8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5DYXRlZ29yeTwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLW1kLTJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5SZWNvdXJjZXM8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkRlc2lnbjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2plY3RzPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+U2FsZXM8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC0yXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+T3VyIGNvbXBhbnk8L2g1PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkFib3V0PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TmV3czwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkNvbnRhY3Q8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlNpZ24gdXAgZm9yIG91ciBuZXdzbGV0dGVyPC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpPkFkZCB5b3VyIGVtYWlsIGFkZHJlc3MgdG8gc2lnbiB1cCBmb3Igb3VyIG1vbnRobHkgZW1haWxzIGFuZCB0byByZWNlaXZlIHByb21vdGlvbmFsIG9mZmVycy48L2k+PC9wPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tbmV3c2xldHRlclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuIGJ0bi1zbVwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgLz5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+IERvd25sb2FkIE1vYmVsPC9hPiAmbmJzcDsgfCA8YSBocmVmPVwiI1wiPlNpdGVtYXA8L2E+ICZuYnNwOyB8ICZuYnNwOyA8YSBocmVmPVwiI1wiPlByaXZhY3kgcG9saWN5PC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBsaW5rc1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXR3aXR0ZXJcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ29vZ2xlLXBsdXNcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEteW91dHViZVwiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1pbnN0YWdyYW1cIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L2Zvb3Rlcj5cclxuXHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG4vLyBTZXQgdXAgY2F0ZWdvcmllc1xyXG5mZXRjaChgJHtDT05GSUcuUk9PVF9BUElfVVJMfS9jYXRlZ29yaWVzP25vX3BhcmVudD10cnVlYCwge1xyXG5cdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHR9KVxyXG59KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbn0pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRSZWFjdERPTS5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBcHAsIHtcclxuXHRcdGNhdGVnb3JpZXM6IHtcclxuXHRcdFx0bWFpbjogZGF0YS5yZXN1bHRzXHJcblx0XHR9XHJcblx0fSksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbn0pO1xyXG5cclxuIiwiaW1wb3J0IEZvcm1JbnB1dCBmcm9tIFwiLi9Gb3JtSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbHRlcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdG9uRmlsdGVyVGl0bGVDbGljayhldmVudCkge1xyXG4gICAgICAgIHZhciAkdGhpcyA9ICQoZXZlbnQudGFyZ2V0KSxcclxuICAgICAgICAkcGFyZW50ID0gJHRoaXMucGFyZW50KCk7XHJcbiAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGlmICgkcGFyZW50Lmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNsaWRlRG93bigzMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuZmlsdGVyLWNvbnRlbnQnKS5zbGlkZVVwKDIwMCk7XHJcbiAgICAgICAgfVxyXG5cdH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBGaWx0ZXJzID0gdGhpcztcclxuICAgICAgICAkKFwiI3JhbmdlLXByaWNlLXNsaWRlclwiKS5pb25SYW5nZVNsaWRlcih7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXHJcbiAgICAgICAgICAgIG1pbjogMCxcclxuICAgICAgICAgICAgbWF4OiAxMDAwMDAsXHJcbiAgICAgICAgICAgIGZyb206IDAsXHJcbiAgICAgICAgICAgIHRvOiAxMDAwMDAsXHJcbiAgICAgICAgICAgIHByZWZpeDogU3RyaW5nLmZyb21DaGFyQ29kZSg4MzgxKSxcclxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBGaWx0ZXJzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUeXBlOiAncHJpY2UnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGRhdGEuZnJvbSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogZGF0YS50b1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmlsdGVyc1wiIGNsYXNzTmFtZT1cImZpbHRlcnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIiBvbkNsaWNrPXt0aGlzLm9uRmlsdGVyVGl0bGVDbGlja30+0KbQtdC90LA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInJhbmdlLXByaWNlLXNsaWRlclwiIG5hbWU9XCJyYW5nZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9e3RoaXMub25GaWx0ZXJUaXRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5maWx0ZXJzLm1hbnVmYWN0dXJlcnMubWFwKChtYW51ZmFjdHVyZXIsIGlkeCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybUlucHV0IGtleT17aWR4fSBsYWJlbD17bWFudWZhY3R1cmVyLm5hbWV9IHR5cGU9XCJjaGVja2JveFwiIGFueT17bWFudWZhY3R1cmVyLmFueX0gdXBkYXRlU3RhdGU9eyhzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmZpbHRlclR5cGUgPSBcIm1hbnVmYWN0dXJlcnNcIjtcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlLmlkeCA9IGlkeDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH19IGNoZWNrZWQ9e21hbnVmYWN0dXJlci5jaGVja2VkfS8+O1xyXG4gICAgICAgICAgICAgICAgICAgIFx0fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25DbGljaz17dGhpcy5vbkZpbHRlclRpdGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQptCy0LXRglxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbnRlbnQgZmlsdGVyLWNvbnRlbnRfdHlwZV9jb2xvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuZmlsdGVycy5jb2xvcnMubWFwKChjb2xvciwgaWR4KSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxGb3JtSW5wdXQga2V5PXtpZHh9IHZhbHVlPXtjb2xvci52YWx1ZX0gbGFiZWw9e2NvbG9yLm5hbWV9IHR5cGU9XCJjaGVja2JveFwiIGFueT17Y29sb3IuYW55fSB1cGRhdGVTdGF0ZT17KHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZmlsdGVyVHlwZSA9IFwiY29sb3JzXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZS5pZHggPSBpZHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9fSBjaGVja2VkPXtjb2xvci5jaGVja2VkfS8+O1xyXG4gICAgICAgICAgICAgICAgICAgIFx0fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1JbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBhbnkgPSB0aGlzLnByb3BzLmFueTtcclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5jaGVja2VkID8gJ2NoZWNrZWQnIDogJyd9ICR7dGhpcy5wcm9wcy50eXBlfSAke3RoaXMucHJvcHMudmFsdWUgPyAnY29sb3InIDogJyd9YH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGAjJHt0aGlzLnByb3BzLnZhbHVlfWAgfHwgJ25vbmUnLCBib3hTaGFkb3c6IHRoaXMucHJvcHMudmFsdWUgJiYgdGhpcy5wcm9wcy5jaGVja2VkID8gJzAgNHB4IDAuNWVtIGJsYWNrJyA6ICdub25lJ319PlxyXG4gICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgIFx0PGlucHV0IHR5cGU9e3RoaXMucHJvcHMudHlwZX0gY2hlY2tlZD17ISF0aGlzLnByb3BzLmNoZWNrZWR9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIFx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuICAgICAgICAgICAgICAgIFx0XHRcdGNoZWNrZWQ6IGFueSB8fCBldmVudC50YXJnZXQuY2hlY2tlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFueVxyXG4gICAgICAgICAgICAgICAgXHRcdH0pO1xyXG4gICAgICAgICAgICAgICAgXHR9fS8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHQgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyLWZpeGVkIGhlYWRlci1uYXZcIj5cclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gbmF2aWdhdGlvbi10b3AgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJvcGVuLXNlYXJjaFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tYWduaWZpZXJcIj48L2k+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwib3Blbi1jYXJ0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+IDxzcGFuPjM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uIG5hdmlnYXRpb24tbWFpblwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJvcGVuLW1lbnVcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tbWVudVwiPjwvaT48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsb2F0aW5nLW1lbnVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW1lbnUtd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbG9zZS1tZW51XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzXCI+PC9pPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImluZGV4Lmh0bWxcIj7QlNC+0LzQvtC5PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+0JrQsNGC0LDQu9C+0LMg0YLQvtCy0LDRgNC+0LIgPHNwYW4gY2xhc3NOYW1lPVwib3Blbi1kcm9wZG93blwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvd25cIj48L2k+PC9zcGFuPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWRyb3Bkb3duIG5hdmJhci1kcm9wZG93bi1zaW5nbGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhci1ib3hcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gtMlwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGlkeCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0XHRyZXR1cm4gPGxpIGtleT17aWR4fT48YSBocmVmPVwiI1wiPntjYXRlZ29yeS5uYW1lfTwvYT48L2xpPjtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdH0pfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QntC/0LvQsNGC0LAg0Lgg0LTQvtGB0YLQsNCy0LrQsDwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QmtC+0L3RgtCw0LrRgtGLPC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXdyYXBwZXJcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbWFpbiBidG4tc2VhcmNoXCI+R28hPC9idXR0b24+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0c1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJlc3VsdC1pdGVtc1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIGg0XCI+UHJvZHVjdHMgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuLWRhcmsgYnRuLXhzXCI+VmlldyBhbGw8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5HcmVlbiBjb3JuZXI8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+U29mYTwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5MYXVyYTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5Bcm1jaGFpcnM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+TnVkZTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5EaW5pbmcgdGFibGVzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkF1cm9yYTwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5OaWdodHN0YW5kczwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5EaW5pbmcgc2V0PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPktpdGNoZW48L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+U2VhdCBjaGFpcjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5CYXIgc2V0czwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4td3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGZvcm0+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNFwiPlNpZ24gaW48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0RW1haWwxXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiPjwvaW5wdXQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIj48L2lucHV0PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2ZvcmdvdHBhc3N3b3JkXCIgY2xhc3NOYW1lPVwib3Blbi1wb3B1cFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY3JlYXRlYWNjb3VudFwiIGNsYXNzTmFtZT1cIm9wZW4tcG9wdXBcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLW1haW5cIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWl0ZW0gY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+R3JlZW4gY29ybmVyPC9zbWFsbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tcXVhbnRpdHlcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluYWxcIj4kIDEuOTk4PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPiQgMi42NjY8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzIGljb24tZGVsZXRlXCI+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTIucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1pdGVtIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMy5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lcjwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkdyZWVuIGNvcm5lcjwvc21hbGw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLXF1YW50aXR5XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmFsXCI+JCAxLjk5ODwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4kIDIuNjY2PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm9zcyBpY29uLWRlbGV0ZVwiPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWl0ZW0gY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC00LnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+R3JlZW4gY29ybmVyPC9zbWFsbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tcXVhbnRpdHlcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluYWxcIj4kIDEuOTk4PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPiQgMi42NjY8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzIGljb24tZGVsZXRlXCI+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1mb290ZXIgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkRpc2NvdW50IDE1JTwvc3Ryb25nPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgMTU5LDAwPC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2stZm9vdGVyIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5TaGlwcGluZzwvc3Ryb25nPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgMzAsMDA8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1mb290ZXIgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlZBVDwvc3Ryb25nPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgNTksMDA8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VG90YWw8L3N0cm9uZz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0IHRpdGxlXCI+JCAxMjU5LDAwPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2stYnV0dG9ucyBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhbi1kYXJrXCI+Q29udGludWUgc2hvcHBpbmc8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtNiB0ZXh0LXJpZ2h0XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L3NwYW4+IENoZWNrb3V0PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgIDwvbmF2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdpbmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRvbkNvbnRyb2xJdGVtQ2xpY2soZXZlbnQsIGNvbnRyb2xOYW1lKSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0Y29uc3QgYWN0aXZlUGFnZSA9IHRoaXMucHJvcHMuYWN0aXZlUGFnZTtcclxuXHRcdGNvbnN0IHN0YXRlID0ge1xyXG5cdFx0XHRhY3RpdmVQYWdlXHJcblx0XHR9O1xyXG5cdFx0aWYgKGNvbnRyb2xOYW1lID09PSAncHJldmlvdXMnKSB7XHJcblx0XHRcdGlmIChhY3RpdmVQYWdlID4gMSkge1xyXG5cdFx0XHRcdHN0YXRlLmFjdGl2ZVBhZ2UgPSBhY3RpdmVQYWdlIC0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmIChjb250cm9sTmFtZSA9PT0gJ25leHQnKSB7XHJcblx0XHRcdGlmIChwYXJzZUludCh0aGlzLnByb3BzLnRvdGFsSXRlbXMgLyB0aGlzLnByb3BzLml0ZW1zUGVyUGFnZSkgPiBhY3RpdmVQYWdlKSB7XHJcblx0XHRcdFx0c3RhdGUuYWN0aXZlUGFnZSA9IGFjdGl2ZVBhZ2UgKyAxO1x0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgcGFnZXNDb3VudCA9IHBhcnNlSW50KHRoaXMucHJvcHMudG90YWxJdGVtcyAvIHRoaXMucHJvcHMuaXRlbXNQZXJQYWdlKTtcclxuXHRcdGNvbnN0IHBhZ2VzID0gWy4uLm5ldyBBcnJheShwYWdlc0NvdW50KV07XHJcblx0XHRjb25zdCBhY3RpdmVQYWdlID0gdGhpcy5wcm9wcy5hY3RpdmVQYWdlO1xyXG5cdFx0Y29uc3QgcHJldmlvdXNDb250cm9sRGlzYWJsZWQgPSBhY3RpdmVQYWdlID09PSAxO1xyXG5cdFx0Y29uc3QgbmV4dENvbnRyb2xEaXNhYmxlZCA9IGFjdGl2ZVBhZ2UgPT09IHBhZ2VzQ291bnQ7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17cHJldmlvdXNDb250cm9sRGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMub25Db250cm9sSXRlbUNsaWNrKGV2ZW50LCAncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcdHJldHVybiA8bGkga2V5PXtpZHh9IGNsYXNzTmFtZT17aWR4ICsgMSA9PT0gYWN0aXZlUGFnZSA/ICdhY3RpdmUnIDogJyd9PjxhIGhyZWY9XCIjXCIgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0YWN0aXZlUGFnZTogaWR4ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIFx0XHR9KTtcclxuICAgICAgICAgICAgICAgICAgICBcdH19PntpZHggKyAxfTwvYT48L2xpPjtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtuZXh0Q29udHJvbERpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcdHRoaXMub25Db250cm9sSXRlbUNsaWNrKGV2ZW50LCAnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvcnRCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblxyXG5cdFx0dGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdCAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LWJhciBjbGVhcmZpeFwiPiBcclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtcmVzdWx0cyBwdWxsLWxlZnRcIj5cclxuXHQgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9Cy0L7QtNC40YLRjCDQv9C+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtb3B0aW9uPVwiaXRlbXNQZXJQYWdlXCIgb25DaGFuZ2U9e3RoaXMub25TdGF0ZUNoYW5nZX0gdmFsdWU9e3RoaXMucHJvcHMuaXRlbXNQZXJQYWdlfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPjEwMDwvb3B0aW9uPlxyXG5cdCAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnMgcHVsbC1yaWdodFwiPlxyXG5cdCAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj7QodC+0YDRgtC40YDQvtCy0LDRgtGMINC/0L4mbmJzcDsmbmJzcDs8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzb3J0LXByaWNlXCIgZGF0YS1vcHRpb249XCJwcmljZVwiIG9uQ2hhbmdlPXt0aGlzLm9uU3RhdGVDaGFuZ2V9IHZhbHVlPXt0aGlzLnByb3BzLnByaWNlfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhc2NcIj7QptC10L3QsDog0L/QviDQstC+0LfRgNCw0YHRgtCw0L3QuNGOPC9vcHRpb24+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVzY1wiPtCm0LXQvdCwOiDQv9C+INGD0LHRi9Cy0LDQvdC40Y48L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzb3J0LW5hbWVcIiBkYXRhLW9wdGlvbj1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5vblN0YXRlQ2hhbmdlfSB2YWx1ZT17dGhpcy5wcm9wcy5uYW1lfT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBLXpcIj7QndCw0LfQstCw0L3QuNC1OiDQvtGCINCQINC00L4g0K88L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ6LUFcIj7QndCw0LfQstCw0L3QuNC1OiDQvtGCINCvINC00L4g0JA8L29wdGlvbj5cclxuXHQgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblx0ICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyaWQtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFx0PGEgY2xhc3NOYW1lPVwidG9nZ2xlLWZpbHRlcnMtbW9iaWxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPC9kaXY+XHRcdFx0XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0b25TdGF0ZUNoYW5nZShldmVudCkge1xyXG5cdFx0bGV0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cdFx0Y29uc3Qgb3B0aW9uID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQub3B0aW9uO1xyXG5cdFx0aWYgKG9wdGlvbiA9PT0gJ2l0ZW1zUGVyUGFnZScpIHtcclxuXHRcdFx0dmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XHJcblx0XHR9XHJcblx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuXHRcdFx0b3B0aW9uLFxyXG5cdFx0XHR2YWx1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdFJPT1RfQVBJX1VSTDogJ2h0dHA6Ly9kb29yLXNob3AucGF2ZWxnb2x0c2V2LmNvbS9hcGkvdjEnXHJcbn07IiwiZXhwb3J0IGRlZmF1bHQge1xyXG5cdFNUSUNLWV9NRU5VX0FGVEVSX1NDUk9MTF9QT1NJVElPTjogMTAsXHJcblx0RlJPTlRQQUdFX1NMSURFUl9BTklNQVRJT05fVElNRU9VVDogODAwMCxcclxuXHRGUk9OVFBBR0VfU0xJREVSX0RFTEFZX0JFRk9SRV9BTklNQVRFX0NBUFRJT05TOiAxMDAsXHJcblx0RlJPTlRQQUdFX1NMSURFUl9ERUxBWV9PRkZTRVRfQU5JTUFURV9DQVBUSU9OUzogMTgwLFxyXG5cdEZST05UUEFHRV9TTElERVJfREVMQVlfQkVGT1JFX05FWFQ6IDIwMDAsXHJcblx0U0NST0xMX1RPX1RPUF9PRkZTRVRfU0hPVzogMTUwLFxyXG5cdFNDUk9MTF9UT19UT1BfQU5JTUFUSU9OX1RJTUU6IDEwMDAsXHJcblx0REVMQVlfUkVNT1ZFX1BBR0VfTE9BREVSOiAxMDAwLFxyXG5cdEhFQURFUl9OQVZfSEVJR0hUOiA5NFxyXG59OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQURBO0FBVEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJCQTtBQXFCQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFTQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFNQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFVQTs7OztBQXB3QkE7QUFDQTtBQUNBO0FBc3dCQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM3hCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQWJBO0FBZUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUtBOzs7O0FBNUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFTQTs7OztBQWhCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUdBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBU0E7QUFBQTtBQVNBO0FBQUE7QUFZQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBOzs7O0FBM05BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUdBO0FBQUE7QUFNQTs7OztBQXREQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7OztBQS9DQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTs7OztBIiwic291cmNlUm9vdCI6IiJ9