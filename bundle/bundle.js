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
    key: "componentDidMount",
    value: function componentDidMount() {
      (function () {
        "use strict"; // Main navigation & mega menu
        // ----------------------------------------------------------------
        // Global menu variables

        var objSearch = $('.search-wrapper'),
            objLogin = $('.login-wrapper'),
            objCart = $('.cart-wrapper'),
            objMenu = $('.floating-menu'),
            objMenuLink = $('.floating-menu a'),
            $search = $('.open-search'),
            $login = $('.open-login'),
            $cart = $('.open-cart'),
            $menu = $('.open-menu'),
            $openDropdown = $('.open-dropdown'),
            $settingsItem = $('.nav-settings .nav-settings-list li'),
            $close = $('.close-menu'); // Open/close login

        $login.on('click', function () {
          toggleOpen($(this));
          objLogin.toggleClass('open');
          closeSearch();
          closeCart();
        }); // Open/close search bar

        $search.on('click', function () {
          toggleOpen($(this));
          objSearch.toggleClass('open');
          objSearch.find('input').focus();
          closeLogin();
          closeCart();
        }); // Open/close cart

        $cart.on('click', function () {
          toggleOpen($(this));
          objCart.toggleClass('open');
          closeLogin();
          closeSearch();
        }); // Mobile menu open/close

        $menu.on('click', function () {
          objMenu.addClass('expanded');
          closeSearch();
          closeLogin();
          closeCart();
        }); // Settings language & currency dropdown

        $settingsItem.on('click', function () {
          var $value = $(this).closest('.nav-settings').find('.nav-settings-value');
          $value.text($(this).text());
        }); // Floating menu hyperlink

        if ($('nav').hasClass('navbar-single-page')) {
          objMenuLink.on('click', function () {
            objMenu.removeClass('expanded');
          });
        } // Open dropdown/megamenu


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

        function closeLogin() {
          objLogin.removeClass('open');
          $login.removeClass('open');
        }

        function closeCart() {
          objCart.removeClass('open');
          $cart.removeClass('open');
        } // Sticky header
        // ----------------------------------------------------------------


        var navbarFixed = $('nav.navbar-fixed'); // When reload page - check if page has offset

        if ($(document).scrollTop() > 94) {
          navbarFixed.addClass('navbar-sticked');
        } // Add sticky menu on scroll


        $(document).on('bind ready scroll', function () {
          var docScroll = $(document).scrollTop();

          if (docScroll >= 10) {
            navbarFixed.addClass('navbar-sticked');
          } else {
            navbarFixed.removeClass('navbar-sticked');
          }
        }); // Tooltip
        // ----------------------------------------------------------------

        $('[data-toggle="tooltip"]').tooltip(); // Main popup
        // ----------------------------------------------------------------

        $('.mfp-open').magnificPopup({
          type: 'inline',
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in',
          callbacks: {
            open: function open() {
              // wait on popup initalization
              // then load owl-carousel
              $('.popup-main .owl-carousel').hide();
              setTimeout(function () {
                $('.popup-main .owl-carousel').slideDown();
              }, 500);
            }
          }
        }); // Main popup gallery
        // ----------------------------------------------------------------

        $('.open-popup-gallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

          },
          fixedContentPos: false,
          fixedBgPos: true,
          overflowY: 'auto',
          closeBtnInside: true,
          preloader: false,
          midClick: true,
          removalDelay: 300,
          mainClass: 'my-mfp-zoom-in'
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
        }); // Quote carousel
        // ----------------------------------------------------------------

        $.each($(".quote-carousel"), function (i, n) {
          $(n).owlCarousel({
            navigation: true,
            // Show next and prev buttons
            slideSpeed: 300,
            items: 3,
            paginationSpeed: 400,
            singleItem: false,
            navigationText: arrowIcons,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoPlay: 3000,
            stopOnHover: true
          });
        }); // Icon slider
        // ----------------------------------------------------------------

        /*$.each($(".owl-icons"), function (i, n) {
            $(n).owlCarousel({
                autoHeight: false,
                pagination: false,
                navigation: true,
                navigationText: arrowIcons,
                items: 6,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [979, 5],
                itemsTablet: [768, 4],
                itemsTabletSmall: false,
                itemsMobile: [479, 3],
                addClassActive: true,
                autoPlay: 5500,
                stopOnHover: true
            });
        });*/
        //Product slider

        $.each($(".owl-product-gallery"), function (i, n) {
          $(n).owlCarousel({
            //transitionStyle: "fadeUp",
            autoHeight: true,
            slideSpeed: 800,
            navigation: true,
            navigationText: arrowIcons,
            pagination: true,
            items: 1,
            singleItem: true
          });
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
        }); // Product color var
        // ----------------------------------------------------------------

        $.each($('.product-colors'), function (i, n) {
          var $btn = $('.color-btn');
          $btn.on('click', function () {
            $(this).parent().find($btn).removeClass('checked');
            $(this).addClass('checked');
          });
        }); // Tabsy images
        // ----------------------------------------------------------------

        var tabsyImg = $('.tabsy .tabsy-images > div'),
            tabsyLink = $('.tabsy .tabsy-links figure'); // apply images to parent background

        tabsyImg.each(function (i, n) {
          $(n).css('background-image', 'url(' + $(n).find('img').attr('src') + ')');
        });
        tabsyLink.bind('mouseenter mouseleave', function () {
          var self = $(this),
              tabID = self.attr('data-image');
          tabsyLink.removeClass('current');
          tabsyImg.removeClass('current');
          self.addClass('current');
          self.closest('.tabsy').find("#" + tabID).addClass('current');
        }); // Add to favorites list / product list
        // ----------------------------------------------------------------

        $('.add-favorite').on('click', function () {
          $(this).toggleClass("added");
        });
        $('.info-box-addto').on('click', function () {
          $(this).toggleClass('added');
        }); // Filters toggle functions
        // ----------------------------------------------------------------
        // Check if some filter boxes has class active
        // then show hidden filters

        $('.filters .filter-box').each(function () {
          if ($(this).hasClass('active')) {
            $(this).find('.filter-content').show();
          }
        });
        var $filtersTitle = $('.filters .title'); // Add emtpy span on title

        $filtersTitle.append('<span>' + '</span>'); // Toggle filter function

        $filtersTitle.on('click', function (e) {
          var $this = $(this),
              $parent = $this.parent();
          $parent.toggleClass('active');

          if ($parent.hasClass('active')) {
            $parent.find('.filter-content').slideDown(300);
          } else {
            $parent.find('.filter-content').slideUp(200);
          }
        }); // Update filter results - close dropdown filters
        // ----------------------------------------------------------------

        $('.filters .filter-update').on('click', function (e) {
          $(this).closest('.filter-box').removeClass('active').find('.filter-content').slideUp(200);
        }); // Only for filters topbar
        // ----------------------------------------------------------------

        $('.filters input').on('change', function () {
          if ($(this).is(':checked')) {
            var $labelText = $(this).parent().find('label').text(),
                $title = $(this).closest('.filter-box').find('.title');
            $title.find('span').text($labelText);
          }
        }); // Show hide filters (only for mobile)
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
        }); // Strecher accordion
        // ----------------------------------------------------------------

        var $strecherItem = $('.stretcher-item');
        $strecherItem.bind({
          mouseenter: function mouseenter(e) {
            $(this).addClass('active');
            $(this).siblings().addClass('inactive');
          },
          mouseleave: function mouseleave(e) {
            $(this).removeClass('active');
            $(this).siblings().removeClass('inactive');
          }
        }); // Blog image caption
        // ----------------------------------------------------------------

        var $blogImage = $('.blog-post-text img');
        $blogImage.each(function () {
          var $this = $(this);
          $this.wrap('<span class="blog-image"></span>');

          if ($this.attr("alt")) {
            var caption = this.alt;
            var link = $this.attr('data');
            $this.after('<span class="caption">' + caption + '</span>');
          }
        }); // Coupon code 
        // ----------------------------------------------------------------

        $(".form-coupon").hide();
        $("#couponCodeID").on('click', function () {
          if ($(this).is(":checked")) {
            $(".form-coupon").fadeIn();
          } else {
            $(".form-coupon").fadeOut();
          }
        }); // Checkout login / register
        // ----------------------------------------------------------------

        var loginWrapper = $('.login-wrapper'),
            loginBtn = loginWrapper.find('.btn-login'),
            regBtn = loginWrapper.find('.btn-register'),
            signUp = loginWrapper.find('.login-block-signup'),
            signIn = loginWrapper.find('.login-block-signin');
        loginBtn.on('click', function () {
          signIn.slideDown();
          signUp.slideUp();
        });
        regBtn.on('click', function () {
          signIn.slideUp();
          signUp.slideDown();
        }); // Isotope filter
        // ----------------------------------------------------------------

        $(function () {
          var price = 0;
          var $products = $("#products");
          var $checkboxes = $("#filters input");
          var $sortPrice = $("#sort-price");
          var filters = [];
          $(".item").addClass("show-me");
          filters.push(".show-me"); // Sort products
          // --------------------------------------

          $products.isotope({
            itemSelector: '.item',
            getSortData: {
              number: '.price parseInt'
            },
            sortBy: 'number'
          }); // Checkboxes & radiobuttons
          // --------------------------------------

          $sortPrice.on('change', function () {
            var order = $('option:selected', this).attr('data-option-value');
            var valAscending = order == "asc";
            $products.isotope({
              itemSelector: '.item',
              getSortData: {
                number: '.price parseInt'
              },
              sortBy: 'number',
              sortAscending: valAscending,
              filter: filters
            });
          }); // Checkboxes & radiobuttons
          // --------------------------------------

          $checkboxes.on('change', function () {
            filters = [];
            filters.push(".show-me");
            $checkboxes.filter(':checked').each(function () {
              filters.push(this.value);
            });
            filters = filters.join('');
            $products.isotope({
              filter: filters
            });
          }); // Range slider
          // --------------------------------------

          $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 4000,
            from: 150,
            to: 3800,
            prefix: "$",
            onChange: function onChange(data) {
              $(".item").each(function () {
                price = parseInt($(this).find(".price").text(), 10);

                if (data.from <= price && data.to >= price) {
                  $(this).addClass('show-me');
                } else {
                  $(this).removeClass('show-me');
                }
              });
              $products.isotope({
                itemSelector: '.item',
                filter: filters
              });
            }
          });
        }); // Single page - box filters
        // ----------------------------------------------------------------

        $(function () {
          // Filter buttons - toggle click event
          var $boxFilter = $('.box-filters figure'); // init Isotope

          var $grid = $('#box-filters-results').isotope({
            itemSelector: '.item'
          });
          $boxFilter.on('click', function () {
            var $this = $(this); // Filter buttons - toggle click event

            if ($this.hasClass('active')) {
              $this.removeClass('active');
              $grid.isotope({
                filter: ""
              });
            } else {
              $boxFilter.removeClass('active');
              $this.addClass('active'); // Filter results

              var filterValue = $this.attr('data-filter');
              $grid.isotope({
                filter: filterValue
              });
            }
          });
        }); // Team members hover effect
        // ----------------------------------------------------------------

        var $member = $('.team article');
        $member.bind({
          mouseenter: function mouseenter(e) {
            $member.addClass('inactive');
            $(this).addClass('active');
          },
          mouseleave: function mouseleave(e) {
            $member.removeClass('inactive');
            $(this).removeClass('active');
          }
        }); // Toggle contact form
        // ----------------------------------------------------------------

        $('.open-form').on('click', function () {
          var $this = $(this),
              parent = $this.parent();
          parent.toggleClass('active');

          if (parent.hasClass('active')) {
            $this.text($this.data('text-close'));
            $('.contact-form').slideDown();
          } else {
            $this.text($this.data('text-open'));
            $('.contact-form').slideUp();
          }
        }); // Single page navigation (scroll to)
        // ----------------------------------------------------------------

        if ($('nav').hasClass('navbar-single-page')) {
          var $singleHyperlink = $('.navigation-main a');
          $singleHyperlink.on('click', function () {
            $singleHyperlink.removeClass('current');
            $(this).addClass('current');
            $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top - $('.navigation-main').height()
            }, 500);
            return false;
          }); // Magnific popup scroll to content
          // ----------------------------------------------------------------

          $('.mfp-open-scrollto').on('click', function () {
            $('html,body').animate({
              scrollTop: $('.mfp-content').offset().top - 200
            }, 300);
            return false;
          });
        }

        setTimeout(function () {
          $('.page-loader').addClass('loaded');
        }, 1000);
      })();
    }
  }, {
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
}(React.Component);

var api = 'door-shop.pavelgoltsev.com/api/v1'; // Set up categories

fetch("http://".concat(api, "/categories?no_parent=true"), {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(function (response) {
  return response.json();
}).then(function (data) {
  ReactDOM.render(React.createElement(App, {
    api: api,
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



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9GaWx0ZXJzLmpzIiwid2VicGFjazovLy8uL2pzL0Zvcm1JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9IZWFkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9BcHAuanNcIik7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5pbXBvcnQgRmlsdGVycyBmcm9tIFwiLi9GaWx0ZXJzXCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdFx0aXNSZWFkeTogZmFsc2VcdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0dGhpcy51cGRhdGVGaWx0ZXJzRGF0YSA9IHRoaXMudXBkYXRlRmlsdGVyc0RhdGEuYmluZCh0aGlzKTtcclxuXHRcdHRoaXMuc2V0VXBGaWx0ZXJzID0gdGhpcy5zZXRVcEZpbHRlcnMuYmluZCh0aGlzKTtcclxuXHJcblx0XHR0aGlzLnNldFVwRmlsdGVycygpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XHJcblx0XHQoZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdCAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcblx0XHQgICAgLy8gTWFpbiBuYXZpZ2F0aW9uICYgbWVnYSBtZW51XHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAvLyBHbG9iYWwgbWVudSB2YXJpYWJsZXNcclxuXHJcblx0XHQgICAgdmFyIG9ialNlYXJjaCA9ICQoJy5zZWFyY2gtd3JhcHBlcicpLFxyXG5cdFx0ICAgICAgICBvYmpMb2dpbiA9ICQoJy5sb2dpbi13cmFwcGVyJyksXHJcblx0XHQgICAgICAgIG9iakNhcnQgPSAkKCcuY2FydC13cmFwcGVyJyksXHJcblx0XHQgICAgICAgIG9iak1lbnUgPSAkKCcuZmxvYXRpbmctbWVudScpLFxyXG5cdFx0ICAgICAgICBvYmpNZW51TGluayA9ICQoJy5mbG9hdGluZy1tZW51IGEnKSxcclxuXHRcdCAgICAgICAgJHNlYXJjaCA9ICQoJy5vcGVuLXNlYXJjaCcpLFxyXG5cdFx0ICAgICAgICAkbG9naW4gPSAkKCcub3Blbi1sb2dpbicpLFxyXG5cdFx0ICAgICAgICAkY2FydCA9ICQoJy5vcGVuLWNhcnQnKSxcclxuXHRcdCAgICAgICAgJG1lbnUgPSAkKCcub3Blbi1tZW51JyksXHJcblx0XHQgICAgICAgICRvcGVuRHJvcGRvd24gPSAkKCcub3Blbi1kcm9wZG93bicpLFxyXG5cdFx0ICAgICAgICAkc2V0dGluZ3NJdGVtID0gJCgnLm5hdi1zZXR0aW5ncyAubmF2LXNldHRpbmdzLWxpc3QgbGknKSxcclxuXHRcdCAgICAgICAgJGNsb3NlID0gJCgnLmNsb3NlLW1lbnUnKTtcclxuXHJcblx0XHQgICAgLy8gT3Blbi9jbG9zZSBsb2dpblxyXG5cclxuXHRcdCAgICAkbG9naW4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB0b2dnbGVPcGVuKCQodGhpcykpO1xyXG5cdFx0ICAgICAgICBvYmpMb2dpbi50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0ICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG5cdFx0ICAgICAgICBjbG9zZUNhcnQoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gT3Blbi9jbG9zZSBzZWFyY2ggYmFyXHJcblxyXG5cdFx0ICAgICRzZWFyY2gub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB0b2dnbGVPcGVuKCQodGhpcykpO1xyXG5cdFx0ICAgICAgICBvYmpTZWFyY2gudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCAgICAgICAgb2JqU2VhcmNoLmZpbmQoJ2lucHV0JykuZm9jdXMoKTtcclxuXHRcdCAgICAgICAgY2xvc2VMb2dpbigpO1xyXG5cdFx0ICAgICAgICBjbG9zZUNhcnQoKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gT3Blbi9jbG9zZSBjYXJ0XHJcblxyXG5cdFx0ICAgICRjYXJ0Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdG9nZ2xlT3BlbigkKHRoaXMpKTtcclxuXHRcdCAgICAgICAgb2JqQ2FydC50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0ICAgICAgICBjbG9zZUxvZ2luKCk7XHJcblx0XHQgICAgICAgIGNsb3NlU2VhcmNoKCk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIE1vYmlsZSBtZW51IG9wZW4vY2xvc2VcclxuXHJcblx0XHQgICAgJG1lbnUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICBvYmpNZW51LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0ICAgICAgICBjbG9zZVNlYXJjaCgpO1xyXG5cdFx0ICAgICAgICBjbG9zZUxvZ2luKCk7XHJcblx0XHQgICAgICAgIGNsb3NlQ2FydCgpO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBTZXR0aW5ncyBsYW5ndWFnZSAmIGN1cnJlbmN5IGRyb3Bkb3duXHJcblxyXG5cdFx0ICAgICRzZXR0aW5nc0l0ZW0ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB2YXIgJHZhbHVlID0gJCh0aGlzKS5jbG9zZXN0KCcubmF2LXNldHRpbmdzJykuZmluZCgnLm5hdi1zZXR0aW5ncy12YWx1ZScpO1xyXG5cdFx0ICAgICAgICAkdmFsdWUudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIEZsb2F0aW5nIG1lbnUgaHlwZXJsaW5rXHJcblx0XHQgICAgaWYgKCQoJ25hdicpLmhhc0NsYXNzKCduYXZiYXItc2luZ2xlLXBhZ2UnKSkge1xyXG5cdFx0ICAgICAgICBvYmpNZW51TGluay5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICBvYmpNZW51LnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG5cdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIC8vIE9wZW4gZHJvcGRvd24vbWVnYW1lbnVcclxuXHJcblx0XHQgICAgJG9wZW5Ecm9wZG93bi5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cclxuXHRcdCAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdCAgICAgICAgdmFyIGxpUGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKSxcclxuXHRcdCAgICAgICAgICAgIGxpRHJvcGRvd24gPSBsaVBhcmVudC5maW5kKCcubmF2YmFyLWRyb3Bkb3duJyk7XHJcblxyXG5cdFx0ICAgICAgICBsaVBhcmVudC50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcclxuXHJcblx0XHQgICAgICAgIGlmIChsaVBhcmVudC5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG5cdFx0ICAgICAgICAgICAgbGlEcm9wZG93bi5zbGlkZURvd24oKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgIGxpRHJvcGRvd24uc2xpZGVVcCgpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIENsb3NlIG1lbnUgKG1vYmlsZSlcclxuXHJcblx0XHQgICAgJGNsb3NlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgJCgnbmF2JykuZmluZCgnLmV4cGFuZGVkJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0XHQgICAgICAgICQoJ25hdicpLmZpbmQoJy5uYXZiYXItZHJvcGRvd24nKS5zbGlkZVVwKCk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIEdsb2JhbCBmdW5jdGlvbnNcclxuXHJcblx0XHQgICAgZnVuY3Rpb24gdG9nZ2xlT3BlbihlbCkge1xyXG5cdFx0ICAgICAgICAkKGVsKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0XHQgICAgZnVuY3Rpb24gY2xvc2VTZWFyY2goKSB7XHJcblx0XHQgICAgICAgIG9ialNlYXJjaC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0ICAgICAgICAkc2VhcmNoLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGZ1bmN0aW9uIGNsb3NlTG9naW4oKSB7XHJcblx0XHQgICAgICAgIG9iakxvZ2luLnJlbW92ZUNsYXNzKCdvcGVuJyk7XHJcblx0XHQgICAgICAgICRsb2dpbi5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcblx0XHQgICAgICAgIG9iakNhcnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCAgICAgICAgJGNhcnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuXHRcdCAgICB9XHJcblxyXG5cdFx0ICAgIC8vIFN0aWNreSBoZWFkZXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIHZhciBuYXZiYXJGaXhlZCA9ICQoJ25hdi5uYXZiYXItZml4ZWQnKTtcclxuXHJcblx0XHQgICAgLy8gV2hlbiByZWxvYWQgcGFnZSAtIGNoZWNrIGlmIHBhZ2UgaGFzIG9mZnNldFxyXG5cdFx0ICAgIGlmICgkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSA+IDk0KSB7XHJcblx0XHQgICAgICAgIG5hdmJhckZpeGVkLmFkZENsYXNzKCduYXZiYXItc3RpY2tlZCcpO1xyXG5cdFx0ICAgIH1cclxuXHRcdCAgICAvLyBBZGQgc3RpY2t5IG1lbnUgb24gc2Nyb2xsXHJcblx0XHQgICAgJChkb2N1bWVudCkub24oJ2JpbmQgcmVhZHkgc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB2YXIgZG9jU2Nyb2xsID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XHJcblx0XHQgICAgICAgIGlmIChkb2NTY3JvbGwgPj0gMTApIHtcclxuXHRcdCAgICAgICAgICAgIG5hdmJhckZpeGVkLmFkZENsYXNzKCduYXZiYXItc3RpY2tlZCcpO1xyXG5cdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgbmF2YmFyRml4ZWQucmVtb3ZlQ2xhc3MoJ25hdmJhci1zdGlja2VkJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gVG9vbHRpcFxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKVxyXG5cclxuXHRcdCAgICAvLyBNYWluIHBvcHVwXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkKCcubWZwLW9wZW4nKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdCAgICAgICAgdHlwZTogJ2lubGluZScsXHJcblx0XHQgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXHJcblx0XHQgICAgICAgIGZpeGVkQmdQb3M6IHRydWUsXHJcblx0XHQgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG5cdFx0ICAgICAgICBjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcclxuXHRcdCAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcclxuXHRcdCAgICAgICAgbWlkQ2xpY2s6IHRydWUsXHJcblx0XHQgICAgICAgIHJlbW92YWxEZWxheTogMzAwLFxyXG5cdFx0ICAgICAgICBtYWluQ2xhc3M6ICdteS1tZnAtem9vbS1pbicsXHJcblx0XHQgICAgICAgIGNhbGxiYWNrczoge1xyXG5cdFx0ICAgICAgICAgICAgb3BlbjogZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgIC8vIHdhaXQgb24gcG9wdXAgaW5pdGFsaXphdGlvblxyXG5cdFx0ICAgICAgICAgICAgICAgIC8vIHRoZW4gbG9hZCBvd2wtY2Fyb3VzZWxcclxuXHRcdCAgICAgICAgICAgICAgICAkKCcucG9wdXAtbWFpbiAub3dsLWNhcm91c2VsJykuaGlkZSgpO1xyXG5cdFx0ICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAkKCcucG9wdXAtbWFpbiAub3dsLWNhcm91c2VsJykuc2xpZGVEb3duKCk7XHJcblx0XHQgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBNYWluIHBvcHVwIGdhbGxlcnlcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICQoJy5vcGVuLXBvcHVwLWdhbGxlcnknKS5tYWduaWZpY1BvcHVwKHtcclxuXHRcdCAgICAgICAgZGVsZWdhdGU6ICdhJyxcclxuXHRcdCAgICAgICAgdHlwZTogJ2ltYWdlJyxcclxuXHRcdCAgICAgICAgdExvYWRpbmc6ICdMb2FkaW5nIGltYWdlICMlY3VyciUuLi4nLFxyXG5cdFx0ICAgICAgICBnYWxsZXJ5OiB7XHJcblx0XHQgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG5cdFx0ICAgICAgICAgICAgbmF2aWdhdGVCeUltZ0NsaWNrOiB0cnVlLFxyXG5cdFx0ICAgICAgICAgICAgcHJlbG9hZDogWzAsIDFdIC8vIFdpbGwgcHJlbG9hZCAwIC0gYmVmb3JlIGN1cnJlbnQsIGFuZCAxIGFmdGVyIHRoZSBjdXJyZW50IGltYWdlXHJcblx0XHQgICAgICAgIH0sXHJcblx0XHQgICAgICAgIGZpeGVkQ29udGVudFBvczogZmFsc2UsXHJcblx0XHQgICAgICAgIGZpeGVkQmdQb3M6IHRydWUsXHJcblx0XHQgICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxyXG5cdFx0ICAgICAgICBjbG9zZUJ0bkluc2lkZTogdHJ1ZSxcclxuXHRcdCAgICAgICAgcHJlbG9hZGVyOiBmYWxzZSxcclxuXHRcdCAgICAgICAgbWlkQ2xpY2s6IHRydWUsXHJcblx0XHQgICAgICAgIHJlbW92YWxEZWxheTogMzAwLFxyXG5cdFx0ICAgICAgICBtYWluQ2xhc3M6ICdteS1tZnAtem9vbS1pbidcclxuXHRcdCAgICB9KTtcclxuXHJcblxyXG5cdFx0ICAgIC8vIEZyb250cGFnZSBzbGlkZXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIHZhciBhcnJvd0ljb25zID0gW1xyXG5cdFx0ICAgICAgICAnPHNwYW4gY2xhc3M9XCJpY29uIGljb24tY2hldnJvbi1sZWZ0XCI+PC9zcGFuPicsXHJcblx0XHQgICAgICAgICc8c3BhbiBjbGFzcz1cImljb24gaWNvbi1jaGV2cm9uLXJpZ2h0XCI+PC9zcGFuPidcclxuXHRcdCAgICBdO1xyXG5cclxuXHRcdCAgICAkLmVhY2goJChcIi5vd2wtc2xpZGVyXCIpLCBmdW5jdGlvbiAoaSwgbikge1xyXG5cclxuXHRcdCAgICAgICAgJChuKS5vd2xDYXJvdXNlbCh7XHJcblx0XHQgICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuXHRcdCAgICAgICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcblx0XHQgICAgICAgICAgICBuYXZpZ2F0aW9uVGV4dDogYXJyb3dJY29ucyxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG5cdFx0ICAgICAgICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcclxuXHRcdCAgICAgICAgICAgIGFkZENsYXNzQWN0aXZlOiB0cnVlLFxyXG5cdFx0ICAgICAgICAgICAgdHJhbnNpdGlvblN0eWxlOiBcImZhZGVVcFwiLFxyXG5cdFx0ICAgICAgICAgICAgYWZ0ZXJNb3ZlOiBhbmltYXRldENhcHRpb25zLFxyXG5cdFx0ICAgICAgICAgICAgYXV0b1BsYXk6IDgwMDAsXHJcblx0XHQgICAgICAgICAgICBzdG9wT25Ib3ZlcjogZmFsc2VcclxuXHRcdCAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICBhbmltYXRldENhcHRpb25zKCk7IFxyXG5cclxuXHRcdCAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZXRDYXB0aW9ucyhldmVudCkge1xyXG5cdFx0ICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblx0XHQgICAgICAgICAgICB2YXIgYWN0aXZlSXRlbSA9ICQobikuZmluZCgnLm93bC1pdGVtLmFjdGl2ZScpLFxyXG5cdFx0ICAgICAgICAgICAgdGltZURlbGF5ID0gMTAwO1xyXG5cdFx0ICAgICAgICAgICAgJC5lYWNoKGFjdGl2ZUl0ZW0uZmluZCgnLmFuaW1hdGVkJyksIGZ1bmN0aW9uIChqLCBtKSB7XHJcblx0XHQgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKG0pO1xyXG5cdFx0ICAgICAgICAgICAgICAgIGl0ZW0uY3NzKCdhbmltYXRpb24tZGVsYXknLCB0aW1lRGVsYXkgKyAnbXMnKTtcclxuXHRcdCAgICAgICAgICAgICAgICB0aW1lRGVsYXkgPSB0aW1lRGVsYXkgKyAxODA7XHJcblx0XHQgICAgICAgICAgICAgICAgaXRlbS5hZGRDbGFzcyhpdGVtLmRhdGEoJ2FuaW1hdGlvbicpKTtcclxuXHRcdCAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmVDbGFzcyhpdGVtLmRhdGEoJ2FuaW1hdGlvbicpKTtcclxuXHRcdCAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuXHRcdCAgICAgICAgICAgIH0pO1xyXG5cdFx0ICAgICAgICB9XHJcblxyXG5cdFx0ICAgICAgICBpZiAoJChuKS5oYXNDbGFzcygnb3dsLXNsaWRlci1mdWxsc2NyZWVuJykpIHtcclxuXHRcdCAgICAgICAgICAgICQoJy5oZWFkZXItY29udGVudCAuaXRlbScpLmhlaWdodCgkKHdpbmRvdykuaGVpZ2h0KCkpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIFF1b3RlIGNhcm91c2VsXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkLmVhY2goJChcIi5xdW90ZS1jYXJvdXNlbFwiKSwgZnVuY3Rpb24gKGksIG4pIHtcclxuXHRcdCAgICAgICAgJChuKS5vd2xDYXJvdXNlbCh7XHJcblx0XHQgICAgICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLCAvLyBTaG93IG5leHQgYW5kIHByZXYgYnV0dG9uc1xyXG5cdFx0ICAgICAgICAgICAgc2xpZGVTcGVlZDogMzAwLFxyXG5cdFx0ICAgICAgICAgICAgaXRlbXM6IDMsXHJcblx0XHQgICAgICAgICAgICBwYWdpbmF0aW9uU3BlZWQ6IDQwMCxcclxuXHRcdCAgICAgICAgICAgIHNpbmdsZUl0ZW06IGZhbHNlLFxyXG5cdFx0ICAgICAgICAgICAgbmF2aWdhdGlvblRleHQ6IGFycm93SWNvbnMsXHJcblx0XHQgICAgICAgICAgICBpdGVtc0Rlc2t0b3A6IFsxMTk5LCAzXSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbOTc5LCAzXSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zVGFibGV0OiBbNzY4LCAxXSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zVGFibGV0U21hbGw6IGZhbHNlLFxyXG5cdFx0ICAgICAgICAgICAgaXRlbXNNb2JpbGU6IFs0NzksIDFdLFxyXG5cdFx0ICAgICAgICAgICAgYXV0b1BsYXk6IDMwMDAsXHJcblx0XHQgICAgICAgICAgICBzdG9wT25Ib3ZlcjogdHJ1ZVxyXG5cdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gSWNvbiBzbGlkZXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHRcdCAgICAvKiQuZWFjaCgkKFwiLm93bC1pY29uc1wiKSwgZnVuY3Rpb24gKGksIG4pIHtcclxuXHRcdCAgICAgICAgJChuKS5vd2xDYXJvdXNlbCh7XHJcblx0XHQgICAgICAgICAgICBhdXRvSGVpZ2h0OiBmYWxzZSxcclxuXHRcdCAgICAgICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxyXG5cdFx0ICAgICAgICAgICAgbmF2aWdhdGlvbjogdHJ1ZSxcclxuXHRcdCAgICAgICAgICAgIG5hdmlnYXRpb25UZXh0OiBhcnJvd0ljb25zLFxyXG5cdFx0ICAgICAgICAgICAgaXRlbXM6IDYsXHJcblx0XHQgICAgICAgICAgICBpdGVtc0Rlc2t0b3A6IFsxMTk5LCA1XSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbOTc5LCA1XSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zVGFibGV0OiBbNzY4LCA0XSxcclxuXHRcdCAgICAgICAgICAgIGl0ZW1zVGFibGV0U21hbGw6IGZhbHNlLFxyXG5cdFx0ICAgICAgICAgICAgaXRlbXNNb2JpbGU6IFs0NzksIDNdLFxyXG5cdFx0ICAgICAgICAgICAgYWRkQ2xhc3NBY3RpdmU6IHRydWUsXHJcblx0XHQgICAgICAgICAgICBhdXRvUGxheTogNTUwMCxcclxuXHRcdCAgICAgICAgICAgIHN0b3BPbkhvdmVyOiB0cnVlXHJcblx0XHQgICAgICAgIH0pO1xyXG5cdFx0ICAgIH0pOyovXHJcblxyXG5cdFx0ICAgIC8vUHJvZHVjdCBzbGlkZXJcclxuXHRcdCAgICAkLmVhY2goJChcIi5vd2wtcHJvZHVjdC1nYWxsZXJ5XCIpLCBmdW5jdGlvbiAoaSwgbikge1xyXG5cdFx0ICAgICAgICAkKG4pLm93bENhcm91c2VsKHtcclxuXHRcdCAgICAgICAgICAgIC8vdHJhbnNpdGlvblN0eWxlOiBcImZhZGVVcFwiLFxyXG5cdFx0ICAgICAgICAgICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuXHRcdCAgICAgICAgICAgIHNsaWRlU3BlZWQ6IDgwMCxcclxuXHRcdCAgICAgICAgICAgIG5hdmlnYXRpb246IHRydWUsXHJcblx0XHQgICAgICAgICAgICBuYXZpZ2F0aW9uVGV4dDogYXJyb3dJY29ucyxcclxuXHRcdCAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcblx0XHQgICAgICAgICAgICBpdGVtczogMSxcclxuXHRcdCAgICAgICAgICAgIHNpbmdsZUl0ZW06IHRydWVcclxuXHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cclxuXHRcdCAgICAvLyBTY3JvbGwgdG8gdG9wXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgJHdyYXBwZXIgPSAkKCcud3JhcHBlcicpO1xyXG5cdFx0ICAgICR3cmFwcGVyLmFwcGVuZCgkKFwiPGRpdiBjbGFzcz0nc2Nyb2xsLXRvcCc+PGkgY2xhc3M9J2ljb24gaWNvbi1jaGV2cm9uLXVwJz48L2k+PC9kaXY+XCIpKTtcclxuXHJcblx0XHQgICAgdmFyICRzY3JvbGxidG4gPSAkKCcuc2Nyb2xsLXRvcCcpO1xyXG5cclxuXHRcdCAgICAkKGRvY3VtZW50KS5vbigncmVhZHkgc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICB2YXIgZG9jU2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCksXHJcblx0XHQgICAgICAgICAgICBkb2NTY3JvbGxCb3R0b20gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPT0gJChkb2N1bWVudCkuaGVpZ2h0KCk7XHJcblxyXG5cdFx0ICAgICAgICBpZiAoZG9jU2Nyb2xsVG9wID49IDE1MCkge1xyXG5cdFx0ICAgICAgICAgICAgJHNjcm9sbGJ0bi5hZGRDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0ICAgICAgICB9IGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgJHNjcm9sbGJ0bi5yZW1vdmVDbGFzcygndmlzaWJsZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIGlmIChkb2NTY3JvbGxCb3R0b20pIHtcclxuXHRcdCAgICAgICAgICAgICRzY3JvbGxidG4uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgICAgIGVsc2Uge1xyXG5cdFx0ICAgICAgICAgICAgJHNjcm9sbGJ0bi5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgJHNjcm9sbGJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICQoJ2h0bWwsYm9keScpLmFuaW1hdGUoe1xyXG5cdFx0ICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKCdib2R5Jykub2Zmc2V0KCkudG9wXHJcblx0XHQgICAgICAgIH0sIDEwMDApO1xyXG5cdFx0ICAgICAgICByZXR1cm4gZmFsc2U7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIFByb2R1Y3QgY29sb3IgdmFyXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkLmVhY2goJCgnLnByb2R1Y3QtY29sb3JzJyksIGZ1bmN0aW9uIChpLCBuKSB7XHJcblx0XHQgICAgICAgIHZhciAkYnRuID0gJCgnLmNvbG9yLWJ0bicpO1xyXG5cdFx0ICAgICAgICAkYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgkYnRuKS5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG5cdFx0ICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG5cdFx0ICAgICAgICB9KTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gVGFic3kgaW1hZ2VzXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgdGFic3lJbWcgPSAkKCcudGFic3kgLnRhYnN5LWltYWdlcyA+IGRpdicpLFxyXG5cdFx0ICAgICAgICB0YWJzeUxpbmsgPSAkKCcudGFic3kgLnRhYnN5LWxpbmtzIGZpZ3VyZScpO1xyXG5cclxuXHRcdCAgICAvLyBhcHBseSBpbWFnZXMgdG8gcGFyZW50IGJhY2tncm91bmRcclxuXHRcdCAgICB0YWJzeUltZy5lYWNoKGZ1bmN0aW9uIChpLCBuKSB7XHJcblx0XHQgICAgICAgICQobikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgJ3VybCgnICsgJChuKS5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSArICcpJyk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIHRhYnN5TGluay5iaW5kKCdtb3VzZWVudGVyIG1vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgIHZhciBzZWxmID0gJCh0aGlzKSxcclxuXHRcdCAgICAgICAgICAgIHRhYklEID0gc2VsZi5hdHRyKCdkYXRhLWltYWdlJyk7XHJcblx0XHQgICAgICAgIHRhYnN5TGluay5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0ICAgICAgICB0YWJzeUltZy5yZW1vdmVDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0ICAgICAgICBzZWxmLmFkZENsYXNzKCdjdXJyZW50Jyk7XHJcblx0XHQgICAgICAgIHNlbGYuY2xvc2VzdCgnLnRhYnN5JykuZmluZChcIiNcIiArIHRhYklEKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHJcblx0XHQgICAgLy8gQWRkIHRvIGZhdm9yaXRlcyBsaXN0IC8gcHJvZHVjdCBsaXN0XHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkKCcuYWRkLWZhdm9yaXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWRkZWRcIik7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgICQoJy5pbmZvLWJveC1hZGR0bycpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWRkZWQnKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gRmlsdGVycyB0b2dnbGUgZnVuY3Rpb25zXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAvLyBDaGVjayBpZiBzb21lIGZpbHRlciBib3hlcyBoYXMgY2xhc3MgYWN0aXZlXHJcblx0XHQgICAgLy8gdGhlbiBzaG93IGhpZGRlbiBmaWx0ZXJzXHJcblx0XHQgICAgJCgnLmZpbHRlcnMgLmZpbHRlci1ib3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHQgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNob3coKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICB2YXIgJGZpbHRlcnNUaXRsZSA9ICQoJy5maWx0ZXJzIC50aXRsZScpO1xyXG5cclxuXHRcdCAgICAvLyBBZGQgZW10cHkgc3BhbiBvbiB0aXRsZVxyXG5cdFx0ICAgICRmaWx0ZXJzVGl0bGUuYXBwZW5kKCc8c3Bhbj4nICsgJzwvc3Bhbj4nKTtcclxuXHJcblx0XHQgICAgLy8gVG9nZ2xlIGZpbHRlciBmdW5jdGlvblxyXG5cdFx0ICAgICRmaWx0ZXJzVGl0bGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdCAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdCAgICAgICAgICAgICRwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKTtcclxuXHRcdCAgICAgICAgJHBhcmVudC50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0ICAgICAgICBpZiAoJHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdCAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmZpbHRlci1jb250ZW50Jykuc2xpZGVEb3duKDMwMCk7XHJcblx0XHQgICAgICAgIH1cclxuXHRcdCAgICAgICAgZWxzZSB7XHJcblx0XHQgICAgICAgICAgICAkcGFyZW50LmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNsaWRlVXAoMjAwKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBVcGRhdGUgZmlsdGVyIHJlc3VsdHMgLSBjbG9zZSBkcm9wZG93biBmaWx0ZXJzXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkKCcuZmlsdGVycyAuZmlsdGVyLXVwZGF0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHQgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZpbHRlci1ib3gnKVxyXG5cdFx0ICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0ICAgICAgICAgICAgLmZpbmQoJy5maWx0ZXItY29udGVudCcpLnNsaWRlVXAoMjAwKTtcclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gT25seSBmb3IgZmlsdGVycyB0b3BiYXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICQoJy5maWx0ZXJzIGlucHV0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdCAgICAgICAgICAgIHZhciAkbGFiZWxUZXh0ID0gJCh0aGlzKS5wYXJlbnQoKS5maW5kKCdsYWJlbCcpLnRleHQoKSxcclxuXHRcdCAgICAgICAgICAgICAgICAkdGl0bGUgPSAkKHRoaXMpLmNsb3Nlc3QoJy5maWx0ZXItYm94JykuZmluZCgnLnRpdGxlJyk7XHJcblx0XHQgICAgICAgICAgICBcclxuXHRcdCAgICAgICAgICAgICR0aXRsZS5maW5kKCdzcGFuJykudGV4dCgkbGFiZWxUZXh0KTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBTaG93IGhpZGUgZmlsdGVycyAob25seSBmb3IgbW9iaWxlKVxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgJCgnLnRvZ2dsZS1maWx0ZXJzLW1vYmlsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgJCgnLmZpbHRlcnMnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQgICAgfSk7XHJcblx0XHQgICAgJCgnLnRvZ2dsZS1maWx0ZXJzLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICAkKCcuZmlsdGVycycpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgJCgnaHRtbCxib2R5JykuYW5pbWF0ZSh7XHJcblx0XHQgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJ2JvZHknKS5vZmZzZXQoKS50b3BcclxuXHRcdCAgICAgICAgfSwgODAwKTtcclxuXHRcdCAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHJcblx0XHQgICAgLy8gU3RyZWNoZXIgYWNjb3JkaW9uXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgJHN0cmVjaGVySXRlbSA9ICQoJy5zdHJldGNoZXItaXRlbScpO1xyXG5cdFx0ICAgICRzdHJlY2hlckl0ZW0uYmluZCh7XHJcblx0XHQgICAgICAgIG1vdXNlZW50ZXI6IGZ1bmN0aW9uIChlKSB7XHJcblx0XHQgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5hZGRDbGFzcygnaW5hY3RpdmUnKTtcclxuXHRcdCAgICAgICAgfSxcclxuXHRcdCAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gKGUpIHtcclxuXHRcdCAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdpbmFjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIEJsb2cgaW1hZ2UgY2FwdGlvblxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgdmFyICRibG9nSW1hZ2UgPSAkKCcuYmxvZy1wb3N0LXRleHQgaW1nJyk7XHJcblx0XHQgICAgJGJsb2dJbWFnZS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdCAgICAgICAgJHRoaXMud3JhcCgnPHNwYW4gY2xhc3M9XCJibG9nLWltYWdlXCI+PC9zcGFuPicpO1xyXG5cdFx0ICAgICAgICBpZiAoJHRoaXMuYXR0cihcImFsdFwiKSkge1xyXG5cdFx0ICAgICAgICAgICAgdmFyIGNhcHRpb24gPSB0aGlzLmFsdDtcclxuXHRcdCAgICAgICAgICAgIHZhciBsaW5rID0gJHRoaXMuYXR0cignZGF0YScpO1xyXG5cdFx0ICAgICAgICAgICAgJHRoaXMuYWZ0ZXIoJzxzcGFuIGNsYXNzPVwiY2FwdGlvblwiPicgKyBjYXB0aW9uICsgJzwvc3Bhbj4nKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICAvLyBDb3Vwb24gY29kZSBcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICQoXCIuZm9ybS1jb3Vwb25cIikuaGlkZSgpO1xyXG5cdFx0ICAgICQoXCIjY291cG9uQ29kZUlEXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgaWYgKCQodGhpcykuaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG5cdFx0ICAgICAgICAgICAgJChcIi5mb3JtLWNvdXBvblwiKS5mYWRlSW4oKTtcclxuXHRcdCAgICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICQoXCIuZm9ybS1jb3Vwb25cIikuZmFkZU91dCgpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIENoZWNrb3V0IGxvZ2luIC8gcmVnaXN0ZXJcclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgIHZhciBsb2dpbldyYXBwZXIgPSAkKCcubG9naW4td3JhcHBlcicpLFxyXG5cdFx0ICAgICAgICBsb2dpbkJ0biA9IGxvZ2luV3JhcHBlci5maW5kKCcuYnRuLWxvZ2luJyksXHJcblx0XHQgICAgICAgIHJlZ0J0biA9IGxvZ2luV3JhcHBlci5maW5kKCcuYnRuLXJlZ2lzdGVyJyksXHJcblx0XHQgICAgICAgIHNpZ25VcCA9IGxvZ2luV3JhcHBlci5maW5kKCcubG9naW4tYmxvY2stc2lnbnVwJyksXHJcblx0XHQgICAgICAgIHNpZ25JbiA9IGxvZ2luV3JhcHBlci5maW5kKCcubG9naW4tYmxvY2stc2lnbmluJyk7XHJcblxyXG5cdFx0ICAgIGxvZ2luQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgc2lnbkluLnNsaWRlRG93bigpO1xyXG5cdFx0ICAgICAgICBzaWduVXAuc2xpZGVVcCgpO1xyXG5cdFx0ICAgIH0pO1xyXG5cclxuXHRcdCAgICByZWdCdG4ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0ICAgICAgICBzaWduSW4uc2xpZGVVcCgpO1xyXG5cdFx0ICAgICAgICBzaWduVXAuc2xpZGVEb3duKCk7XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIElzb3RvcGUgZmlsdGVyXHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgdmFyIHByaWNlID0gMDtcclxuXHRcdCAgICAgICAgdmFyICRwcm9kdWN0cyA9ICQoXCIjcHJvZHVjdHNcIik7XHJcblx0XHQgICAgICAgIHZhciAkY2hlY2tib3hlcyA9ICQoXCIjZmlsdGVycyBpbnB1dFwiKTtcclxuXHRcdCAgICAgICAgdmFyICRzb3J0UHJpY2UgPSAkKFwiI3NvcnQtcHJpY2VcIik7XHJcblx0XHQgICAgICAgIHZhciBmaWx0ZXJzID0gW107XHJcblxyXG5cdFx0ICAgICAgICAkKFwiLml0ZW1cIikuYWRkQ2xhc3MoXCJzaG93LW1lXCIpO1xyXG5cdFx0ICAgICAgICBmaWx0ZXJzLnB1c2goXCIuc2hvdy1tZVwiKTtcclxuXHJcblx0XHQgICAgICAgIC8vIFNvcnQgcHJvZHVjdHNcclxuXHRcdCAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgICAgICRwcm9kdWN0cy5pc290b3BlKHtcclxuXHRcdCAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5pdGVtJyxcclxuXHRcdCAgICAgICAgICAgIGdldFNvcnREYXRhOiB7XHJcblx0XHQgICAgICAgICAgICAgICAgbnVtYmVyOiAnLnByaWNlIHBhcnNlSW50J1xyXG5cdFx0ICAgICAgICAgICAgfSxcclxuXHRcdCAgICAgICAgICAgIHNvcnRCeTogJ251bWJlcidcclxuXHRcdCAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICAvLyBDaGVja2JveGVzICYgcmFkaW9idXR0b25zXHJcblx0XHQgICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICAgICAkc29ydFByaWNlLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICB2YXIgb3JkZXIgPSAkKCdvcHRpb246c2VsZWN0ZWQnLCB0aGlzKS5hdHRyKCdkYXRhLW9wdGlvbi12YWx1ZScpO1xyXG5cdFx0ICAgICAgICAgICAgdmFyIHZhbEFzY2VuZGluZyA9IChvcmRlciA9PSBcImFzY1wiKTtcclxuXHJcblx0XHQgICAgICAgICAgICAkcHJvZHVjdHMuaXNvdG9wZSh7XHJcblx0XHQgICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLml0ZW0nLFxyXG5cdFx0ICAgICAgICAgICAgICAgIGdldFNvcnREYXRhOiB7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIG51bWJlcjogJy5wcmljZSBwYXJzZUludCdcclxuXHRcdCAgICAgICAgICAgICAgICB9LFxyXG5cdFx0ICAgICAgICAgICAgICAgIHNvcnRCeTogJ251bWJlcicsXHJcblx0XHQgICAgICAgICAgICAgICAgc29ydEFzY2VuZGluZzogdmFsQXNjZW5kaW5nLFxyXG5cdFx0ICAgICAgICAgICAgICAgIGZpbHRlcjogZmlsdGVyc1xyXG5cdFx0ICAgICAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICB9KTtcclxuXHJcblx0XHQgICAgICAgIC8vIENoZWNrYm94ZXMgJiByYWRpb2J1dHRvbnNcclxuXHRcdCAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgICAgICRjaGVja2JveGVzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICBmaWx0ZXJzID0gW107XHJcblx0XHQgICAgICAgICAgICBmaWx0ZXJzLnB1c2goXCIuc2hvdy1tZVwiKTtcclxuXHRcdCAgICAgICAgICAgICRjaGVja2JveGVzLmZpbHRlcignOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgICAgICAgICBmaWx0ZXJzLnB1c2godGhpcy52YWx1ZSk7XHJcblx0XHQgICAgICAgICAgICB9KTtcclxuXHJcblx0XHQgICAgICAgICAgICBmaWx0ZXJzID0gZmlsdGVycy5qb2luKCcnKTtcclxuXHRcdCAgICAgICAgICAgICRwcm9kdWN0cy5pc290b3BlKHtcclxuXHRcdCAgICAgICAgICAgICAgICBmaWx0ZXI6IGZpbHRlcnNcclxuXHRcdCAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdCAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICAvLyBSYW5nZSBzbGlkZXJcclxuXHRcdCAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHQgICAgICAgICQoXCIjcmFuZ2UtcHJpY2Utc2xpZGVyXCIpLmlvblJhbmdlU2xpZGVyKHtcclxuXHRcdCAgICAgICAgICAgIHR5cGU6IFwiZG91YmxlXCIsXHJcblx0XHQgICAgICAgICAgICBtaW46IDAsXHJcblx0XHQgICAgICAgICAgICBtYXg6IDQwMDAsXHJcblx0XHQgICAgICAgICAgICBmcm9tOiAxNTAsXHJcblx0XHQgICAgICAgICAgICB0bzogMzgwMCxcclxuXHRcdCAgICAgICAgICAgIHByZWZpeDogXCIkXCIsXHJcblx0XHQgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcblx0XHQgICAgICAgICAgICAgICAgJChcIi5pdGVtXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSBwYXJzZUludCgkKHRoaXMpLmZpbmQoXCIucHJpY2VcIikudGV4dCgpLCAxMCk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5mcm9tIDw9IHByaWNlICYmIGRhdGEudG8gPj0gcHJpY2UpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3Nob3ctbWUnKTtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3Nob3ctbWUnKTtcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdFx0ICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdCAgICAgICAgICAgICAgICAkcHJvZHVjdHMuaXNvdG9wZSh7XHJcblx0XHQgICAgICAgICAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJy5pdGVtJyxcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXJzXHJcblx0XHQgICAgICAgICAgICAgICAgfSk7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgIH0pO1xyXG5cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gU2luZ2xlIHBhZ2UgLSBib3ggZmlsdGVyc1xyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdCAgICAkKGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQgICAgICAgIC8vIEZpbHRlciBidXR0b25zIC0gdG9nZ2xlIGNsaWNrIGV2ZW50XHJcblxyXG5cdFx0ICAgICAgICB2YXIgJGJveEZpbHRlciA9ICQoJy5ib3gtZmlsdGVycyBmaWd1cmUnKTtcclxuXHJcblx0XHQgICAgICAgIC8vIGluaXQgSXNvdG9wZVxyXG5cdFx0ICAgICAgICB2YXIgJGdyaWQgPSAkKCcjYm94LWZpbHRlcnMtcmVzdWx0cycpLmlzb3RvcGUoe1xyXG5cdFx0ICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLml0ZW0nXHJcblx0XHQgICAgICAgIH0pO1xyXG5cclxuXHRcdCAgICAgICAgJGJveEZpbHRlci5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0ICAgICAgICAgICAgLy8gRmlsdGVyIGJ1dHRvbnMgLSB0b2dnbGUgY2xpY2sgZXZlbnRcclxuXHRcdCAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdCAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgICRncmlkLmlzb3RvcGUoeyBmaWx0ZXI6IFwiXCIgfSk7XHJcblx0XHQgICAgICAgICAgICB9XHJcblx0XHQgICAgICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICAgICAkYm94RmlsdGVyLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgICAgIC8vIEZpbHRlciByZXN1bHRzXHJcblx0XHQgICAgICAgICAgICAgICAgdmFyIGZpbHRlclZhbHVlID0gJHRoaXMuYXR0cignZGF0YS1maWx0ZXInKTtcclxuXHRcdCAgICAgICAgICAgICAgICAkZ3JpZC5pc290b3BlKHsgZmlsdGVyOiBmaWx0ZXJWYWx1ZSB9KTtcclxuXHRcdCAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHRcdCAgICAgICAgfSk7XHJcblxyXG5cclxuXHRcdCAgICB9KTtcclxuXHJcblxyXG5cclxuXHRcdCAgICAvLyBUZWFtIG1lbWJlcnMgaG92ZXIgZWZmZWN0XHJcblx0XHQgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdCAgICB2YXIgJG1lbWJlciA9ICQoJy50ZWFtIGFydGljbGUnKTtcclxuXHRcdCAgICAkbWVtYmVyLmJpbmQoe1xyXG5cdFx0ICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ICAgICAgICAgICAgJG1lbWJlci5hZGRDbGFzcygnaW5hY3RpdmUnKTtcclxuXHRcdCAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9LFxyXG5cdFx0ICAgICAgICBtb3VzZWxlYXZlOiBmdW5jdGlvbiAoZSkge1xyXG5cdFx0ICAgICAgICAgICAgJG1lbWJlci5yZW1vdmVDbGFzcygnaW5hY3RpdmUnKTtcclxuXHRcdCAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0ICAgICAgICB9XHJcblx0XHQgICAgfSk7XHJcblxyXG5cdFx0ICAgIC8vIFRvZ2dsZSBjb250YWN0IGZvcm1cclxuXHRcdCAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICQoJy5vcGVuLWZvcm0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHQgICAgICAgICAgICBwYXJlbnQgPSAkdGhpcy5wYXJlbnQoKTtcclxuXHRcdCAgICAgICAgcGFyZW50LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCAgICAgICAgaWYgKHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdCAgICAgICAgICAgICR0aGlzLnRleHQoJHRoaXMuZGF0YSgndGV4dC1jbG9zZScpKTtcclxuXHRcdCAgICAgICAgICAgICQoJy5jb250YWN0LWZvcm0nKS5zbGlkZURvd24oKTtcclxuXHRcdCAgICAgICAgfVxyXG5cdFx0ICAgICAgICBlbHNlIHtcclxuXHRcdCAgICAgICAgICAgICR0aGlzLnRleHQoJHRoaXMuZGF0YSgndGV4dC1vcGVuJykpO1xyXG5cdFx0ICAgICAgICAgICAgJCgnLmNvbnRhY3QtZm9ybScpLnNsaWRlVXAoKTtcclxuXHRcdCAgICAgICAgfVxyXG5cclxuXHRcdCAgICB9KTtcclxuXHJcblx0XHQgICAgLy8gU2luZ2xlIHBhZ2UgbmF2aWdhdGlvbiAoc2Nyb2xsIHRvKVxyXG5cdFx0ICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cdFx0ICAgIGlmICgkKCduYXYnKS5oYXNDbGFzcygnbmF2YmFyLXNpbmdsZS1wYWdlJykpIHtcclxuXHJcblx0XHQgICAgICAgIHZhciAkc2luZ2xlSHlwZXJsaW5rID0gJCgnLm5hdmlnYXRpb24tbWFpbiBhJyk7XHJcblxyXG5cdFx0ICAgICAgICAkc2luZ2xlSHlwZXJsaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHQgICAgICAgICAgICAkc2luZ2xlSHlwZXJsaW5rLnJlbW92ZUNsYXNzKCdjdXJyZW50Jyk7XHJcblxyXG5cdFx0ICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnY3VycmVudCcpO1xyXG5cclxuXHRcdCAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcCAtICQoJy5uYXZpZ2F0aW9uLW1haW4nKS5oZWlnaHQoKVxyXG5cdFx0ICAgICAgICAgICAgfSwgNTAwKTtcclxuXHRcdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICAgICAgfSk7XHJcblxyXG5cdFx0ICAgICAgICAvLyBNYWduaWZpYyBwb3B1cCBzY3JvbGwgdG8gY29udGVudFxyXG5cdFx0ICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0ICAgICAgICAkKCcubWZwLW9wZW4tc2Nyb2xsdG8nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblx0XHQgICAgICAgICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtcclxuXHRcdCAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoJy5tZnAtY29udGVudCcpLm9mZnNldCgpLnRvcCAtIDIwMFxyXG5cdFx0ICAgICAgICAgICAgfSwgMzAwKTtcclxuXHRcdCAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHRcdCAgICAgICAgfSk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuXHRcdCAgICAgICAgJCgnLnBhZ2UtbG9hZGVyJykuYWRkQ2xhc3MoJ2xvYWRlZCcpO1xyXG5cdFx0ICAgIH0sIDEwMDApO1xyXG5cclxuXHRcdH0pKCk7XHRcdFxyXG5cdH1cclxuXHJcblx0dXBkYXRlRmlsdGVyc0RhdGEoY2hhbmdlcykge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUsIHByb3BzKSA9PiB7XHJcblx0XHRcdHN0YXRlLmZpbHRlcnNbY2hhbmdlcy5maWx0ZXJUeXBlXVtjaGFuZ2VzLmlkeF0uY2hlY2tlZCA9IGNoYW5nZXMuY2hlY2tlZDtcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRzZXRVcEZpbHRlcnMoKSB7XHJcblx0XHQvLyBNYW51ZmFjdHVyZXJzXHJcblx0XHRsZXQgbWFudWZhY3R1cmVyc0RhdGFHZXQgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGZldGNoKGBodHRwOi8vJHt0aGlzLnByb3BzLmFwaX0vbWFudWZhY3R1cmVyc2AsIHtcclxuXHRcdFx0XHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG5cdFx0XHR9KS50aGVuKChkYXRhKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRcdHN0YXRlLmZpbHRlcnMubWFudWZhY3R1cmVycyA9IGRhdGEucmVzdWx0cztcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly9Db2xvcnNcclxuXHRcdGxldCBjb2xvcnNEYXRhR2V0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRmZXRjaChgaHR0cDovLyR7dGhpcy5wcm9wcy5hcGl9L3Byb2R1Y3RzYCwge1xyXG5cdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcclxuXHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRcdHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcblx0XHRcdH0pLnRoZW4oKGRhdGEpID0+IHtcclxuXHRcdFx0XHRsZXQgY29sb3JzID0gW107XHJcblx0XHRcdFx0ZGF0YS5yZXN1bHRzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuXHRcdFx0XHRcdGlmIChwcm9kdWN0LmNvbG9yICYmICFjb2xvcnMuZmluZCgoY29sb3IpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHByb2R1Y3QuY29sb3IuaWQgPT09IGNvbG9yLmlkO1x0XHJcblx0XHRcdFx0XHR9KSkge1xyXG5cdFx0XHRcdFx0XHRjb2xvcnMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHByb2R1Y3QuY29sb3IuaWQsXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU6IHByb2R1Y3QuY29sb3IudmFsdWVcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcblx0XHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmNvbG9ycyA9IGNvbG9ycztcclxuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdH0pO1x0XHRcdFx0XHJcblx0XHR9KTtcclxuXHJcblx0XHRQcm9taXNlLmFsbChbbWFudWZhY3R1cmVyc0RhdGFHZXQsIGNvbG9yc0RhdGFHZXRdKS50aGVuKCgpID0+IHtcclxuXHRcdFx0dGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuXHRcdFx0XHRzdGF0ZS5maWx0ZXJzLmlzUmVhZHkgPSB0cnVlO1xyXG5cdFx0XHRcdHJldHVybiBzdGF0ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdCAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbG9hZGVyXCI+PC9kaXY+XHJcblxyXG5cdFx0XHQgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8SGVhZGVyIGNhdGVnb3JpZXM9e3RoaXMucHJvcHMuY2F0ZWdvcmllcy5tYWlufS8+XHJcblx0XHRcdCAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVhZGVyLWNvbnRlbnRcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtc2xpZGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoYXNzZXRzL2ltYWdlcy9nYWxsZXJ5LTEuanBnKVwifX0+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBhbmltYXRlZCBoMVwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluRG93blwiPk1vZGVybiBmdXJuaXR1cmUgdGhlbWU8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlZFwiIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb2Rlcm4gJiBwb3dlcmZ1bGwgdGVtcGxhdGUuIDxiciAvPiBDbGVhbiBkZXNpZ24gJiByZXBvbnNpdmVcclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQuIEdvb2dsZSBmb250cyBpbnRlZ3JhdGlvblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluXCIgPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPiBCdXkgdGhpcyB0ZW1wbGF0ZTwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMi5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+TW9iaWxlIHJlYWR5ITwvaDI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlVubGltaXRlZCBDaG9pY2VzLiBVbmJlYXRhYmxlIFByaWNlcy4gRnJlZSBTaGlwcGluZy48L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+RnVybml0dXJlIGNhdGVnb3J5IGljb24gZm9udHMhPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPkdldCBpbnNpcHJlZDwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChhc3NldHMvaW1hZ2VzL2dhbGxlcnktMy5qcGcpXCJ9fT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlIGFuaW1hdGVkIGgxXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5Eb3duXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmVyeSBBbmltYXRlLmNzcyBGcmllbmQuXHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjIGFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbWJpbmUgd2l0aCBhbmltYXRlLmNzcy4gT3IganVzdCB1c2UgeW91ciBvd24hLlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2MgYW5pbWF0ZWRcIiBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnVuY2ggb2YgdHlwb2dyYXBoeSBlZmZlY3RzLlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuaW1hdGVkXCIgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL21vYmVsLWZ1cm5pdHVyZS13ZWJzaXRlLXRlbXBsYXRlLzIwMzgyMTU1XCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhblwiPkJ1eSB0aGlzIHRlbXBsYXRlPC9hPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHQgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm93bC1pY29ucy13cmFwcGVyIG93bC1pY29ucy1mcm9udHBhZ2VcIj5cclxuXHRcdFx0ICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxoMj5Qcm9kdWN0IGNhdGVnb3JpZXM8L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICA8L2hlYWRlcj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG5cdFx0XHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvd2wtaWNvbnNcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0e3RoaXMucHJvcHMuY2F0ZWdvcmllcy5tYWluLm1hcCgoY2F0ZWdvcnksIGlkeCkgPT4ge1xyXG5cdFx0XHQgICAgICAgICAgICAgICAgXHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBrZXk9e2lkeH0+XHJcblx0XHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImYtaWNvblwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBjYXRlZ29yeS5pY29uID8gYHVybCgke2NhdGVnb3J5Lmljb259KWAgOiAnbm9uZSd9fT57Y2F0ZWdvcnkuaWNvbl9jb2RlICYmICFjYXRlZ29yeS5pY29uID8gU3RyaW5nLmZyb21DaGFyQ29kZShjYXRlZ29yeS5pY29uX2NvZGUpIDogJyd9PC9pPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWdjYXB0aW9uPntjYXRlZ29yeS5uYW1lfTwvZmlnY2FwdGlvbj5cclxuXHRcdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG5cdFx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICBcdFx0KTtcclxuXHRcdFx0ICAgICAgICAgICAgICAgIFx0fSl9XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuXHRcdFx0ICAgICAgICB7dHJ1ZSA/IG51bGwgOiAoXHJcblx0XHRcdFx0ICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhpZGRlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImgzIHRpdGxlXCI+UHJvZHVjdCBjYXRlZ29yeSBncmlkPC9oMz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXhzLTEyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZmlsdGVycy5pc1JlYWR5ID8gPEZpbHRlcnMgZmlsdGVycz17dGhpcy5zdGF0ZS5maWx0ZXJzfSB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVGaWx0ZXJzRGF0YX0vPiA6IG51bGx9XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC05IGNvbC14cy0xMlwiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvcnQtYmFyIGNsZWFyZml4XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29ydC1yZXN1bHRzIHB1bGwtbGVmdFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjEwPC9vcHRpb24+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj41MDwvb3B0aW9uPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+MTAwPC9vcHRpb24+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj5BbGw8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2hvd2luZyBhbGwgPHN0cm9uZz41MDwvc3Ryb25nPiBvZiA8c3Ryb25nPjMsMjUwPC9zdHJvbmc+IGl0ZW1zPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3J0LW9wdGlvbnMgcHVsbC1yaWdodFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+U29ydCBieTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJzb3J0LXByaWNlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkYXRhLW9wdGlvbi12YWx1ZT1cImFzY1wiPlByaWNlOiBsb3dlc3Q8L29wdGlvbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGRhdGEtb3B0aW9uLXZhbHVlPVwiZGVzY1wiPlByaWNlOiBoaWdoZXN0PC9vcHRpb24+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdyaWQtbGlzdFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0cy1ncmlkLmh0bWxcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10aC1sYXJnZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3RzLWxpc3QuaHRtbFwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWFsaWduLWp1c3RpZnlcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3NOYW1lPVwidG9nZ2xlLWZpbHRlcnMtbW9iaWxlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kdWN0c1wiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLWRpc2NvdW50IGNhdGVnb3J5LXNvZmEgbWF0ZXJpYWwtbGVhdGhlclwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFkZC1mYXZvcml0ZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBkYXRhLXRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiIGRhdGEtdGl0bGUtYWRkZWQ9XCJBZGRlZCB0byBmYXZvcml0ZXMgbGlzdFwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1oZWFydFwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiIGRhdGEtdGl0bGU9XCJRdWljayB3aWV3XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvaT48L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0biBidG4tYWRkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9pPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlndXJlLWdyaWRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIj4tNTAlPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyIDxzbWFsbD5Tb2ZhPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdWI+JCAxNDk5LC08L3N1Yj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjEwOTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLWRpc2NvdW50IGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLXdvb2RcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5MYXVyYSA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Yj4kIDM5OTksLTwvc3ViPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+MzQ5OTwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtcmVndWxhciBjYXRlZ29yeS1hcm1jaGFpciBtYXRlcmlhbC1sZWF0aGVyXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTMucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+TnVkZSA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+Mjk5OTwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtcmVndWxhciBjYXRlZ29yeS1hcm1jaGFpciBtYXRlcmlhbC13b29kXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC13YXJuaW5nXCI+TmV3PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+QXVyb3JhIDxzbWFsbD5Bcm1jaGFpcjwvc21hbGw+PC9hPjwvaDI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwPiQgPHNwYW4gY2xhc3NOYW1lPVwicHJpY2VcIj4yOTk8L3NwYW4+LC08L3N1cD5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNsZWFyZml4XCI+R3ViZXJncmVuIGFtZXQgZG9sb3IgZWEgZGlhbSB0YWtpbWF0YSBjb25zZXRldHVyIGZhY2lsaXNpcyBibGFuZGl0IGV0IGFsaXF1eWFtIGxvcmVtIGVhIGR1byBsYWJvcmUgZGlhbSBzaXQgZXQgY29uc2V0ZXR1ciBudWxsYTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wteHMtNiBpdGVtIHByaWNlLWRpc2NvdW50IGNhdGVnb3J5LWFybWNoYWlyIG1hdGVyaWFsLW1ldGFsXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWRkLWZhdm9yaXRlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGRhdGEtdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCIgZGF0YS10aXRsZS1hZGRlZD1cIkFkZGVkIHRvIGZhdm9yaXRlcyBsaXN0XCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlYXJ0XCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCIgZGF0YS10aXRsZT1cIlF1aWNrIHdpZXdcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tZXllXCI+PC9pPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuIGJ0bi1hZGRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNhcnRcIj48L2k+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWd1cmUtZ3JpZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbCBsYWJlbC13YXJuaW5nXCI+TmV3PC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3Byb2R1Y3RpZDFcIiBjbGFzc05hbWU9XCJtZnAtb3BlblwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTUucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCIzNjBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+RGluaW5nIHNldCA8c21hbGw+QXJtY2hhaXI8L3NtYWxsPjwvYT48L2gyPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1Yj4kIDE5OTksLTwvc3ViPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN1cD4kIDxzcGFuIGNsYXNzTmFtZT1cInByaWNlXCI+MTQ5OTwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC14cy02IGl0ZW0gcHJpY2UtcmVndWxhciBjYXRlZ29yeS1zb2ZhIG1hdGVyaWFsLXdvb2RcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mb1wiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQtZmF2b3JpdGVcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgZGF0YS10aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIiBkYXRhLXRpdGxlLWFkZGVkPVwiQWRkZWQgdG8gZmF2b3JpdGVzIGxpc3RcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24taGVhcnRcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9kdWN0aWQxXCIgY2xhc3NOYW1lPVwibWZwLW9wZW5cIiBkYXRhLXRpdGxlPVwiUXVpY2sgd2lld1wiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1leWVcIj48L2k+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4gYnRuLWFkZFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZ3VyZS1ncmlkXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvZHVjdGlkMVwiIGNsYXNzTmFtZT1cIm1mcC1vcGVuXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtNi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjM2MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZSBoNFwiPjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5TZWF0IGNoYWlyIDxzbWFsbD5Tb2ZhPC9zbWFsbD48L2E+PC9oMj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdXA+JCA8c3BhbiBjbGFzc05hbWU9XCJwcmljZVwiPjg5Njwvc3Bhbj4sLTwvc3VwPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24gY2xlYXJmaXhcIj5HdWJlcmdyZW4gYW1ldCBkb2xvciBlYSBkaWFtIHRha2ltYXRhIGNvbnNldGV0dXIgZmFjaWxpc2lzIGJsYW5kaXQgZXQgYWxpcXV5YW0gbG9yZW0gZWEgZHVvIGxhYm9yZSBkaWFtIHNpdCBldCBjb25zZXRldHVyIG51bGxhPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtbWFpbiBtZnAtaGlkZVwiIGlkPVwicHJvZHVjdGlkMVwiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdFwiPlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLXRpdGxlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDEgdGl0bGVcIj5MYXVyYSA8c21hbGw+cHJvZHVjdCBjYXRlZ29yeTwvc21hbGw+PC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3dsLXByb2R1Y3QtZ2FsbGVyeVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0xLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjQwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjY0MFwiIC8+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTMucG5nXCIgYWx0PVwiXCIgd2lkdGg9XCI2NDBcIiAvPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC00LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjQwXCIgLz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbmZvLXdyYXBwZXJcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5NYWlmYWN0dXJlcjwvc3Ryb25nPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QnJhbmQgbmFtZTwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mby1ib3hcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TWF0ZXJpYWxzPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Xb29kLCBMZWF0aGVyLCBBY3J5bGljPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BdmFpbGFiaWxpdHk8L3N0cm9uZz5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZS1vXCI+PC9pPiBpbiBzdG9jazwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTZcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5BdmFpbGFibGUgQ29sb3JzPC9zdHJvbmc+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29sb3JzIGNsZWFyZml4XCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1yZWRcIj48L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1ibHVlIGNoZWNrZWRcIj48L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1ncmVlblwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2xvci1idG4gY29sb3ItYnRuLWdyYXlcIj48L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvLWJveFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5DaG9vc2Ugc2l6ZTwvc3Ryb25nPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbG9ycyBjbGVhcmZpeFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tYmllZ2VcIj5TPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tYmllZ2UgY2hlY2tlZFwiPk08L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sb3ItYnRuIGNvbG9yLWJ0bi1iaWVnZVwiPlhMPC9zcGFuPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbG9yLWJ0biBjb2xvci1idG4tYmllZ2VcIj5YWEw8L3NwYW4+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLXRhYmxlXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9wdXAtY2VsbFwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImgzXCI+JCAxOTk5LDAwIDxzbWFsbD4kIDI5OTksMDA8L3NtYWxsPjwvc3Bhbj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jZWxsXCI+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwLWJ1dHRvbnNcIj5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWV5ZVwiPjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLXhzXCI+VmlldyBtb3JlPC9zcGFuPjwvYT5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiPjxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jYXJ0XCI+PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4teHNcIj5CdXk8L3NwYW4+PC9hPlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuXHRcdFx0XHQgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0ICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG5cdFx0XHQgICAgICAgICl9XHJcblxyXG5cdFx0XHQgICAgICAgIDxmb290ZXI+XHJcblx0XHRcdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zaG93cm9vbVwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLThcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5WaXNpdCBvdXIgc2hvd3Jvb208L2gyPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+MjAwIDEydGggQXZlLCBOZXcgWW9yaywgTlkgMTAwMDEsIFVTQTwvcD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1vbiAtIFNhdDogMTAgYW0gLSA2IHBtICZuYnNwOyAmbmJzcDsgfCAmbmJzcDsgJm5ic3A7IFN1bjogMTJwbSAtIDIgcG08L3A+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IHRleHQtY2VudGVyXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tY2xlYW5cIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tbWFwLW1hcmtlclwiPjwvc3Bhbj4gR2V0IGRpcmVjdGlvbnM8L2E+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGwtdXMgaDRcIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tcGhvbmUtaGFuZHNldFwiPjwvc3Bhbj4gMzMzLjI3OC4wNjYyMjwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHRcdFx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbWQtMlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkJyb3dzZSBieTwvaDU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+QnJhbmQ8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9kdWN0PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+Q2F0ZWdvcnk8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC1tZC0yXCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+UmVjb3VyY2VzPC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5EZXNpZ248L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9qZWN0czwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlNhbGVzPC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wtbWQtMlwiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pk91ciBjb21wYW55PC9oNT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5BYm91dDwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPk5ld3M8L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Db250YWN0PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5TaWduIHVwIGZvciBvdXIgbmV3c2xldHRlcjwvaDU+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aT5BZGQgeW91ciBlbWFpbCBhZGRyZXNzIHRvIHNpZ24gdXAgZm9yIG91ciBtb250aGx5IGVtYWlscyBhbmQgdG8gcmVjZWl2ZSBwcm9tb3Rpb25hbCBvZmZlcnMuPC9pPjwvcD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLW5ld3NsZXR0ZXJcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIiAvPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1jbGVhbiBidG4tc21cIiB2YWx1ZT1cIlN1YnNjcmliZVwiIC8+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0XHRcdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zb2NpYWxcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02XCI+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tb2JlbC1mdXJuaXR1cmUtd2Vic2l0ZS10ZW1wbGF0ZS8yMDM4MjE1NVwiIHRhcmdldD1cIl9ibGFua1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCI+PC9pPiBEb3dubG9hZCBNb2JlbDwvYT4gJm5ic3A7IHwgPGEgaHJlZj1cIiNcIj5TaXRlbWFwPC9hPiAmbmJzcDsgfCAmbmJzcDsgPGEgaHJlZj1cIiNcIj5Qcml2YWN5IHBvbGljeTwvYT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgbGlua3NcIj5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiPjwvaT48L2E+PC9saT5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48aSBjbGFzc05hbWU9XCJmYSBmYS10d2l0dGVyXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxpIGNsYXNzTmFtZT1cImZhIGZhLXlvdXR1YmVcIj48L2k+PC9hPjwvbGk+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT48L2xpPlxyXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0ICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdCAgICAgICAgPC9mb290ZXI+XHJcblx0XHRcdCAgICA8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxubGV0IGFwaSA9ICdkb29yLXNob3AucGF2ZWxnb2x0c2V2LmNvbS9hcGkvdjEnO1xyXG5cclxuLy8gU2V0IHVwIGNhdGVnb3JpZXNcclxuZmV0Y2goYGh0dHA6Ly8ke2FwaX0vY2F0ZWdvcmllcz9ub19wYXJlbnQ9dHJ1ZWAsIHtcclxuXHRoZWFkZXJzOiBuZXcgSGVhZGVycyh7XHJcblx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcblx0fSlcclxufSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG59KS50aGVuKChkYXRhKSA9PiB7XHJcblx0UmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7XHJcblx0XHRhcGksXHJcblx0XHRjYXRlZ29yaWVzOiB7XHJcblx0XHRcdG1haW46IGRhdGEucmVzdWx0c1xyXG5cdFx0fVxyXG5cdH0pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG59KTtcclxuXHJcbiIsImltcG9ydCBGb3JtSW5wdXQgZnJvbSBcIi4vRm9ybUlucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWx0ZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRvbkZpbHRlclRpdGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKGV2ZW50LnRhcmdldCksXHJcbiAgICAgICAgJHBhcmVudCA9ICR0aGlzLnBhcmVudCgpO1xyXG4gICAgICAgICRwYXJlbnQudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBpZiAoJHBhcmVudC5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgJHBhcmVudC5maW5kKCcuZmlsdGVyLWNvbnRlbnQnKS5zbGlkZURvd24oMzAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICRwYXJlbnQuZmluZCgnLmZpbHRlci1jb250ZW50Jykuc2xpZGVVcCgyMDApO1xyXG4gICAgICAgIH1cclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaWx0ZXJzXCIgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9e3RoaXMub25GaWx0ZXJUaXRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J/RgNC+0LjQt9Cy0L7QtNC40YLQtdC70YxcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHR7dGhpcy5wcm9wcy5maWx0ZXJzLm1hbnVmYWN0dXJlcnMubWFwKChtYW51ZmFjdHVyZXIsIGlkeCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybUlucHV0IGtleT17aWR4fSBsYWJlbD17bWFudWZhY3R1cmVyLm5hbWV9IHR5cGU9XCJjaGVja2JveFwiIHVwZGF0ZVN0YXRlPXsoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5maWx0ZXJUeXBlID0gXCJtYW51ZmFjdHVyZXJzXCI7XHJcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZS5pZHggPSBpZHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHN0YXRlKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB9fSBjaGVja2VkPXttYW51ZmFjdHVyZXIuY2hlY2tlZH0vPjtcclxuICAgICAgICAgICAgICAgICAgICBcdH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiIG9uQ2xpY2s9e3RoaXMub25GaWx0ZXJUaXRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KbQstC10YJcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1jb250ZW50IGZpbHRlci1jb250ZW50X3R5cGVfY29sb3JcIj5cclxuICAgICAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmZpbHRlcnMuY29sb3JzLm1hcCgoY29sb3IsIGlkeCkgPT4ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8Rm9ybUlucHV0IGtleT17aWR4fSB2YWx1ZT17Y29sb3IudmFsdWV9IHR5cGU9XCJjb2xvclwiIHVwZGF0ZVN0YXRlPXsoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5maWx0ZXJUeXBlID0gXCJjb2xvcnNcIjtcclxuXHRcdFx0XHRcdFx0XHRcdHN0YXRlLmlkeCA9IGlkeDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucHJvcHMudXBkYXRlU3RhdGUoc3RhdGUpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIH19IGNoZWNrZWQ9e2NvbG9yLmNoZWNrZWR9Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgXHR9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUlucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZW5kZXIoKSB7XHJcblx0XHRsZXQgbWFya3VwO1xyXG5cdFx0c3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcImNoZWNrYm94XCI6XHJcblx0XHRcdFx0bWFya3VwID0gKFxyXG5cdCAgICAgICAgICAgIFx0PHNwYW4gY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2hlY2tlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn0+XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0ICAgICAgICAgICAgICAgICAgICBcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMucHJvcHMudXBkYXRlU3RhdGUoe1xyXG5cdCAgICAgICAgICAgICAgICAgICAgXHRcdGNoZWNrZWQ6IGV2ZW50LnRhcmdldC5jaGVja2VkXHJcblx0ICAgICAgICAgICAgICAgICAgICBcdH0pOyB9fSB2YWx1ZT17dGhpcy5wcm9wcy5jaGVja2VkfS8+XHJcblx0ICAgICAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmxhYmVsfVxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHQgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJjb2xvclwiOlxyXG5cdFx0XHRcdG1hcmt1cCA9IChcclxuXHQgICAgICAgICAgICBcdDxzcGFuIGNsYXNzTmFtZT1cImNoZWNrYm94XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgY2hlY2tib3gtY29sb3IgJHt0aGlzLnByb3BzLmNoZWNrZWQgPyBcImNoZWNrZWRcIiA6IFwiXCJ9YH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGAjJHt0aGlzLnByb3BzLnZhbHVlfWAsIGJveFNoYWRvdzogdGhpcy5wcm9wcy5jaGVja2VkID8gYDAgMCAwIDJweCB3aGl0ZSwgMCAwIDAgNHB4ICMke3RoaXMucHJvcHMudmFsdWV9YCA6ICdub25lJ319PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnByb3BzLnVwZGF0ZVN0YXRlKHtcclxuXHQgICAgICAgICAgICAgICAgICAgIFx0XHRjaGVja2VkOiBldmVudC50YXJnZXQuY2hlY2tlZFxyXG5cdCAgICAgICAgICAgICAgICAgICAgXHR9KTsgfX0gdmFsdWU9e3RoaXMucHJvcHMuY2hlY2tlZH0vPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHQgICAgICAgICAgICAgICAgPC9zcGFuPiAgICAgICAgICAgICAgICAgICAgXHRcdFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG1hcmt1cDtcclxuXHR9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0ICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhci1maXhlZFwiPlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2aWdhdGlvbiBuYXZpZ2F0aW9uLXRvcCBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzTmFtZT1cIm9wZW4tc2VhcmNoXCI+PGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW1hZ25pZmllclwiPjwvaT48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzc05hbWU9XCJvcGVuLWNhcnRcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvaT4gPHNwYW4+Mzwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRpb24gbmF2aWdhdGlvbi1tYWluXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIm9wZW4tbWVudVwiPjxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1tZW51XCI+PC9pPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxvYXRpbmctbWVudVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtbWVudS13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsb3NlLW1lbnVcIj48aSBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3NcIj48L2k+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiaW5kZXguaHRtbFwiPtCU0L7QvNC+0Lk8L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj7QmtCw0YLQsNC70L7QsyDRgtC+0LLQsNGA0L7QsiA8c3BhbiBjbGFzc05hbWU9XCJvcGVuLWRyb3Bkb3duXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT48L3NwYW4+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItZHJvcGRvd24gbmF2YmFyLWRyb3Bkb3duLXNpbmdsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWJveFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveC0yXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveCBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdHt0aGlzLnByb3BzLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaWR4KSA9PiB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHRcdHJldHVybiA8bGkga2V5PXtpZHh9PjxhIGhyZWY9XCIjXCI+e2NhdGVnb3J5Lm5hbWV9PC9hPjwvbGk+O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0fSl9XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCe0L/Qu9Cw0YLQsCDQuCDQtNC+0YHRgtCw0LLQutCwPC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHQgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtd3JhcHBlclwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1tYWluIGJ0bi1zZWFyY2hcIj5HbyE8L2J1dHRvbj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1yZXN1bHRzXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtcmVzdWx0LWl0ZW1zXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgaDRcIj5Qcm9kdWN0cyA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tY2xlYW4tZGFyayBidG4teHNcIj5WaWV3IGFsbDwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkdyZWVuIGNvcm5lcjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5Tb2ZhPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkxhdXJhPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkFybWNoYWlyczwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5OdWRlPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkRpbmluZyB0YWJsZXM8L3NwYW4+PC9hPjwvbGk+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj48c3BhbiBjbGFzc05hbWU9XCJpZFwiPjQyNTYzPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+QXVyb3JhPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPk5pZ2h0c3RhbmRzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3NOYW1lPVwiaWRcIj40MjU2Mzwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwibmFtZVwiPkRpbmluZyBzZXQ8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cImNhdGVnb3J5XCI+S2l0Y2hlbjwvc3Bhbj48L2E+PC9saT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxzcGFuIGNsYXNzTmFtZT1cImlkXCI+NDI1NjM8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj5TZWF0IGNoYWlyPC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJjYXRlZ29yeVwiPkJhciBzZXRzPC9zcGFuPjwvYT48L2xpPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0XCI+U2lnbiBpbjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJleGFtcGxlSW5wdXRFbWFpbDFcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCI+PC9pbnB1dD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiPjwvaW5wdXQ+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjZm9yZ290cGFzc3dvcmRcIiBjbGFzc05hbWU9XCJvcGVuLXBvcHVwXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjcmVhdGVhY2NvdW50XCIgY2xhc3NOYW1lPVwib3Blbi1wb3B1cFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tbWFpblwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cdCAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC13cmFwcGVyXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTEucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1pdGVtIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicHJvZHVjdC5odG1sXCI+PGltZyBzcmM9XCJhc3NldHMvaW1hZ2VzL3Byb2R1Y3QtMi5wbmdcIiBhbHQ9XCJcIiAvPjwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPkdyZWVuIGNvcm5lcjwvYT48L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkdyZWVuIGNvcm5lcjwvc21hbGw+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLXF1YW50aXR5XCIgLz5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbmFsXCI+JCAxLjk5ODwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzY291bnRcIj4kIDIuNjY2PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1jcm9zcyBpY29uLWRlbGV0ZVwiPjwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWl0ZW0gY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj48aW1nIHNyYz1cImFzc2V0cy9pbWFnZXMvcHJvZHVjdC0zLnBuZ1wiIGFsdD1cIlwiIC8+PC9hPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48YSBocmVmPVwicHJvZHVjdC5odG1sXCI+R3JlZW4gY29ybmVyPC9hPjwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+R3JlZW4gY29ybmVyPC9zbWFsbD5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tcXVhbnRpdHlcIiAvPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmluYWxcIj4kIDEuOTk4PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNjb3VudFwiPiQgMi42NjY8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWNyb3NzIGljb24tZGVsZXRlXCI+PC9zcGFuPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2staXRlbSBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInByb2R1Y3QuaHRtbFwiPjxpbWcgc3JjPVwiYXNzZXRzL2ltYWdlcy9wcm9kdWN0LTQucG5nXCIgYWx0PVwiXCIgLz48L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxhIGhyZWY9XCJwcm9kdWN0Lmh0bWxcIj5HcmVlbiBjb3JuZXI8L2E+PC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5HcmVlbiBjb3JuZXI8L3NtYWxsPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1xdWFudGl0eVwiIC8+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmaW5hbFwiPiQgMS45OTg8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc2NvdW50XCI+JCAyLjY2Njwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY3Jvc3MgaWNvbi1kZWxldGVcIj48L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+RGlzY291bnQgMTUlPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCAxNTksMDA8L3NwYW4+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtYmxvY2sgY2FydC1ibG9jay1mb290ZXIgY2xlYXJmaXhcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlNoaXBwaW5nPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCAzMCwwMDwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jayBjYXJ0LWJsb2NrLWZvb3RlciBjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+VkFUPC9zdHJvbmc+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCA1OSwwMDwvc3Bhbj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWJsb2NrIGNhcnQtYmxvY2stZm9vdGVyIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Ub3RhbDwvc3Ryb25nPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgdGl0bGVcIj4kIDEyNTksMDA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1ibG9jay1idXR0b25zIGNsZWFyZml4XCI+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTZcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLWNsZWFuLWRhcmtcIj5Db250aW51ZSBzaG9wcGluZzwvYT5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IHRleHQtcmlnaHRcIj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLW1haW5cIj48c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tY2FydFwiPjwvc3Bhbj4gQ2hlY2tvdXQ8L2E+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0ICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgPC9uYXY+XHJcblx0XHQpO1xyXG5cdH1cclxufSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFWQTtBQXVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBO0FBcUJBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUF6QkE7QUE0QkE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFHQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLG9DQTBTQTtBQWFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBVUE7Ozs7QUFsdENBO0FBQ0E7QUFvdENBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4dUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFLQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7QUFLQTs7OztBQWhEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUZBO0FBTUE7QUF2QkE7QUFDQTtBQXlCQTtBQUNBOzs7O0FBOUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUFBO0FBR0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFTQTtBQUFBO0FBU0E7QUFBQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBS0E7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7Ozs7QUEzTkE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==