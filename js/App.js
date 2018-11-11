import Header from "./Header";
import Filters from "./Filters";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				isReady: false				
			}
		};
		this.updateFiltersData = this.updateFiltersData.bind(this);
		this.setUpFilters = this.setUpFilters.bind(this);

		this.setUpFilters();
	}

	componentDidMount() {
		(function () {

		    "use strict";

		    // Main navigation & mega menu
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
		        $close = $('.close-menu');

		    // Open/close login

		    $login.on('click', function () {
		        toggleOpen($(this));
		        objLogin.toggleClass('open');
		        closeSearch();
		        closeCart();
		    });

		    // Open/close search bar

		    $search.on('click', function () {
		        toggleOpen($(this));
		        objSearch.toggleClass('open');
		        objSearch.find('input').focus();
		        closeLogin();
		        closeCart();
		    });

		    // Open/close cart

		    $cart.on('click', function () {
		        toggleOpen($(this));
		        objCart.toggleClass('open');
		        closeLogin();
		        closeSearch();
		    });

		    // Mobile menu open/close

		    $menu.on('click', function () {
		        objMenu.addClass('expanded');
		        closeSearch();
		        closeLogin();
		        closeCart();
		    });

		    // Settings language & currency dropdown

		    $settingsItem.on('click', function () {
		        var $value = $(this).closest('.nav-settings').find('.nav-settings-value');
		        $value.text($(this).text());
		    });

		    // Floating menu hyperlink
		    if ($('nav').hasClass('navbar-single-page')) {
		        objMenuLink.on('click', function () {
		            objMenu.removeClass('expanded');
		        });
		    }

		    // Open dropdown/megamenu

		    $openDropdown.on('click', function (e) {

		        e.preventDefault();

		        var liParent = $(this).parent().parent(),
		            liDropdown = liParent.find('.navbar-dropdown');

		        liParent.toggleClass('expanded');

		        if (liParent.hasClass('expanded')) {
		            liDropdown.slideDown();
		        }
		        else {
		            liDropdown.slideUp();
		        }
		    });

		    // Close menu (mobile)

		    $close.on('click', function () {
		        $('nav').find('.expanded').removeClass('expanded');
		        $('nav').find('.navbar-dropdown').slideUp();
		    });

		    // Global functions

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
		    }

		    // Sticky header
		    // ----------------------------------------------------------------

		    var navbarFixed = $('nav.navbar-fixed');

		    // When reload page - check if page has offset
		    if ($(document).scrollTop() > 94) {
		        navbarFixed.addClass('navbar-sticked');
		    }
		    // Add sticky menu on scroll
		    $(document).on('bind ready scroll', function () {
		        var docScroll = $(document).scrollTop();
		        if (docScroll >= 10) {
		            navbarFixed.addClass('navbar-sticked');
		        } else {
		            navbarFixed.removeClass('navbar-sticked');
		        }
		    });

		    // Tooltip
		    // ----------------------------------------------------------------

		    $('[data-toggle="tooltip"]').tooltip()

		    // Main popup
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
		            open: function () {
		                // wait on popup initalization
		                // then load owl-carousel
		                $('.popup-main .owl-carousel').hide();
		                setTimeout(function () {
		                    $('.popup-main .owl-carousel').slideDown();
		                }, 500);
		            }
		        }
		    });

		    // Main popup gallery
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
		    });


		    // Frontpage slider
		    // ----------------------------------------------------------------

		    var arrowIcons = [
		        '<span class="icon icon-chevron-left"></span>',
		        '<span class="icon icon-chevron-right"></span>'
		    ];

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
		    });

		    // Quote carousel
		    // ----------------------------------------------------------------

		    $.each($(".quote-carousel"), function (i, n) {
		        $(n).owlCarousel({
		            navigation: true, // Show next and prev buttons
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
		    });

		    // Icon slider
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
		    });


		    // Scroll to top
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
		        }
		        else {
		            $scrollbtn.removeClass('active');
		        }
		    });

		    $scrollbtn.on('click', function () {
		        $('html,body').animate({
		            scrollTop: $('body').offset().top
		        }, 1000);
		        return false;
		    });

		    // Product color var
		    // ----------------------------------------------------------------

		    $.each($('.product-colors'), function (i, n) {
		        var $btn = $('.color-btn');
		        $btn.on('click', function () {
		            $(this).parent().find($btn).removeClass('checked');
		            $(this).addClass('checked');
		        });
		    });

		    // Tabsy images
		    // ----------------------------------------------------------------

		    var tabsyImg = $('.tabsy .tabsy-images > div'),
		        tabsyLink = $('.tabsy .tabsy-links figure');

		    // apply images to parent background
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
		    });


		    // Add to favorites list / product list
		    // ----------------------------------------------------------------

		    $('.add-favorite').on('click', function () {
		        $(this).toggleClass("added");
		    });

		    $('.info-box-addto').on('click', function () {
		        $(this).toggleClass('added');
		    });

		    // Filters toggle functions
		    // ----------------------------------------------------------------

		    // Check if some filter boxes has class active
		    // then show hidden filters
		    $('.filters .filter-box').each(function () {
		        if ($(this).hasClass('active')) {
		            $(this).find('.filter-content').show();
		        }
		    });

		    var $filtersTitle = $('.filters .title');

		    // Add emtpy span on title
		    $filtersTitle.append('<span>' + '</span>');

		    // Toggle filter function
		    $filtersTitle.on('click', function (e) {
		        var $this = $(this),
		            $parent = $this.parent();
		        $parent.toggleClass('active');

		        if ($parent.hasClass('active')) {
		            $parent.find('.filter-content').slideDown(300);
		        }
		        else {
		            $parent.find('.filter-content').slideUp(200);
		        }
		    });

		    // Update filter results - close dropdown filters
		    // ----------------------------------------------------------------

		    $('.filters .filter-update').on('click', function (e) {
		        $(this).closest('.filter-box')
		            .removeClass('active')
		            .find('.filter-content').slideUp(200);
		    });

		    // Only for filters topbar
		    // ----------------------------------------------------------------

		    $('.filters input').on('change', function () {
		        if ($(this).is(':checked')) {
		            var $labelText = $(this).parent().find('label').text(),
		                $title = $(this).closest('.filter-box').find('.title');
		            
		            $title.find('span').text($labelText);
		        }
		    });

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


		    // Strecher accordion
		    // ----------------------------------------------------------------

		    var $strecherItem = $('.stretcher-item');
		    $strecherItem.bind({
		        mouseenter: function (e) {
		            $(this).addClass('active');
		            $(this).siblings().addClass('inactive');
		        },
		        mouseleave: function (e) {
		            $(this).removeClass('active');
		            $(this).siblings().removeClass('inactive');
		        }
		    });

		    // Blog image caption
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
		    });

		    // Coupon code 
		    // ----------------------------------------------------------------

		    $(".form-coupon").hide();
		    $("#couponCodeID").on('click', function () {
		        if ($(this).is(":checked")) {
		            $(".form-coupon").fadeIn();
		        } else {
		            $(".form-coupon").fadeOut();
		        }
		    });

		    // Checkout login / register
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
		    });

		    // Isotope filter
		    // ----------------------------------------------------------------

		    $(function () {
		        var price = 0;
		        var $products = $("#products");
		        var $checkboxes = $("#filters input");
		        var $sortPrice = $("#sort-price");
		        var filters = [];

		        $(".item").addClass("show-me");
		        filters.push(".show-me");

		        // Sort products
		        // --------------------------------------

		        $products.isotope({
		            itemSelector: '.item',
		            getSortData: {
		                number: '.price parseInt'
		            },
		            sortBy: 'number'
		        });

		        // Checkboxes & radiobuttons
		        // --------------------------------------

		        $sortPrice.on('change', function () {
		            var order = $('option:selected', this).attr('data-option-value');
		            var valAscending = (order == "asc");

		            $products.isotope({
		                itemSelector: '.item',
		                getSortData: {
		                    number: '.price parseInt'
		                },
		                sortBy: 'number',
		                sortAscending: valAscending,
		                filter: filters
		            });

		        });

		        // Checkboxes & radiobuttons
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

		        });

		        // Range slider
		        // --------------------------------------

		        $("#range-price-slider").ionRangeSlider({
		            type: "double",
		            min: 0,
		            max: 4000,
		            from: 150,
		            to: 3800,
		            prefix: "$",
		            onChange: function (data) {

		                $(".item").each(function () {

		                    price = parseInt($(this).find(".price").text(), 10);

		                    if (data.from <= price && data.to >= price) {
		                        $(this).addClass('show-me');
		                    }
		                    else {
		                        $(this).removeClass('show-me');
		                    }
		                });

		                $products.isotope({
		                    itemSelector: '.item',
		                    filter: filters
		                });
		            }
		        });

		    });

		    // Single page - box filters
		    // ----------------------------------------------------------------
		    $(function () {

		        // Filter buttons - toggle click event

		        var $boxFilter = $('.box-filters figure');

		        // init Isotope
		        var $grid = $('#box-filters-results').isotope({
		            itemSelector: '.item'
		        });

		        $boxFilter.on('click', function () {
		            var $this = $(this);
		            // Filter buttons - toggle click event
		            if ($this.hasClass('active')) {
		                $this.removeClass('active');

		                $grid.isotope({ filter: "" });
		            }
		            else {
		                $boxFilter.removeClass('active');
		                $this.addClass('active');

		                // Filter results
		                var filterValue = $this.attr('data-filter');
		                $grid.isotope({ filter: filterValue });
		            }



		        });


		    });



		    // Team members hover effect
		    // ----------------------------------------------------------------

		    var $member = $('.team article');
		    $member.bind({
		        mouseenter: function (e) {
		            $member.addClass('inactive');
		            $(this).addClass('active');
		        },
		        mouseleave: function (e) {
		            $member.removeClass('inactive');
		            $(this).removeClass('active');
		        }
		    });

		    // Toggle contact form
		    // ----------------------------------------------------------------

		    $('.open-form').on('click', function () {
		        var $this = $(this),
		            parent = $this.parent();
		        parent.toggleClass('active');
		        if (parent.hasClass('active')) {
		            $this.text($this.data('text-close'));
		            $('.contact-form').slideDown();
		        }
		        else {
		            $this.text($this.data('text-open'));
		            $('.contact-form').slideUp();
		        }

		    });

		    // Single page navigation (scroll to)
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
		        });

		        // Magnific popup scroll to content
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

	updateFiltersData(changes) {
		this.setState((state, props) => {
			state.filters[changes.filterType][changes.idx].checked = changes.checked;
			return state;
		});
	}

	setUpFilters() {
		// Manufacturers
		let manufacturersDataGet = new Promise((resolve, reject) => {
			fetch(`http://${this.props.api}/manufacturers`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.setState((state) => {
					state.filters.manufacturers = data.results;
					return state;
				});
				resolve();
			});
		});

		//Colors
		let colorsDataGet = new Promise((resolve, reject) => {
			fetch(`http://${this.props.api}/products`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				let colors = [];
				data.results.forEach((product) => {
					if (product.color && !colors.find((color) => {
						return product.color.id === color.id;	
					})) {
						colors.push({
							id: product.color.id,
							value: product.color.value
						});
					}
				});

				this.setState((state) => {
					state.filters.colors = colors;
					return state;
				});
				resolve();
			});				
		});

		Promise.all([manufacturersDataGet, colorsDataGet]).then(() => {
			this.setState((state) => {
				state.filters.isReady = true;
				return state;
			});
		});
	}

	render() {
		return (
			<div>
			    <div className="page-loader"></div>

			    <div className="wrapper">
					<Header categories={this.props.categories.main}/>
			        <section className="header-content">
			            <div className="owl-slider">
			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-1.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">Modern furniture theme</h2>
			                            <div className="animated" data-animation="fadeInUp">
			                                Modern & powerfull template. <br /> Clean design & reponsive
			                                layout. Google fonts integration
			                            </div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-main" ><i className="icon icon-cart"></i> Buy this template</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-2.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">Mobile ready!</h2>
			                            <div className="animated" data-animation="fadeInUp">Unlimited Choices. Unbeatable Prices. Free Shipping.</div>
			                            <div className="animated" data-animation="fadeInUp">Furniture category icon fonts!</div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="#" className="btn btn-clean">Get insipred</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-3.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">
			                                Very Animate.css Friend.
			                            </h2>
			                            <div className="desc animated" data-animation="fadeInUp">
			                                Combine with animate.css. Or just use your own!.
			                            </div>
			                            <div className="desc animated" data-animation="fadeInUp">
			                                Bunch of typography effects.
			                            </div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-clean">Buy this template</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			            </div>
			        </section>

			        <section className="owl-icons-wrapper owl-icons-frontpage">
			            <header className="hidden">
			                <h2>Product categories</h2>
			            </header>

			            <div className="container">

			                <div className="owl-icons">
			                	{this.props.categories.main.map((category, idx) => {
			                		return (
										<a href="#" key={idx}>
					                        <figure>
					                            <i className="f-icon" style={{backgroundImage: category.icon ? `url(${category.icon})` : 'none'}}>{category.icon_code && !category.icon ? String.fromCharCode(category.icon_code) : ''}</i>
					                            <figcaption>{category.name}</figcaption>
					                        </figure>
					                    </a>
			                		);
			                	})}
			                </div>
			            </div>
			        </section>

			        {true ? null : (
				        <section className="products">
				            <div className="container">

				                <header className="hidden">
				                    <h3 className="h3 title">Product category grid</h3>
				                </header>

				                <div className="row">

				                    <div className="col-md-3 col-xs-12">
										{this.state.filters.isReady ? <Filters filters={this.state.filters} updateState={this.updateFiltersData}/> : null}
				                    </div>

				                    <div className="col-md-9 col-xs-12">

				                        <div className="sort-bar clearfix">
				                            <div className="sort-results pull-left">
				                                <select>
				                                    <option value="1">10</option>
				                                    <option value="2">50</option>
				                                    <option value="3">100</option>
				                                    <option value="4">All</option>
				                                </select>
				                                <span>Showing all <strong>50</strong> of <strong>3,250</strong> items</span>
				                            </div>
				                            <div className="sort-options pull-right">
				                                <span className="hidden-xs">Sort by</span>
				                                <select id="sort-price">
				                                    <option data-option-value="asc">Price: lowest</option>
				                                    <option data-option-value="desc">Price: highest</option>
				                                </select>
				                                <span className="grid-list">
				                                    <a href="products-grid.html"><i className="fa fa-th-large"></i></a>
				                                    <a href="products-list.html"><i className="fa fa-align-justify"></i></a>
				                                    <a href="javascript:void(0);" className="toggle-filters-mobile"><i className="fa fa-search"></i></a>
				                                </span>
				                            </div>
				                        </div>

				                        <div id="products" className="row">

				                            <div className="col-md-6 col-xs-6 item price-discount category-sofa material-leather">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <span className="label">-50%</span>
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-1.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Green corner <small>Sofa</small></a></h2>
				                                            <sub>$ 1499,-</sub>
				                                            <sup>$ <span className="price">1099</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>

				                            <div className="col-md-6 col-xs-6 item price-discount category-armchair material-wood">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-2.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Laura <small>Armchair</small></a></h2>
				                                            <sub>$ 3999,-</sub>
				                                            <sup>$ <span className="price">3499</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>

				                            <div className="col-md-6 col-xs-6 item price-regular category-armchair material-leather">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-3.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Nude <small>Armchair</small></a></h2>
				                                            <sup>$ <span className="price">2999</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>

				                            <div className="col-md-6 col-xs-6 item price-regular category-armchair material-wood">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <span className="label label-warning">New</span>
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-4.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Aurora <small>Armchair</small></a></h2>
				                                            <sup>$ <span className="price">299</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>

				                            <div className="col-md-6 col-xs-6 item price-discount category-armchair material-metal">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <span className="label label-warning">New</span>
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-5.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Dining set <small>Armchair</small></a></h2>
				                                            <sub>$ 1999,-</sub>
				                                            <sup>$ <span className="price">1499</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>

				                            <div className="col-md-6 col-xs-6 item price-regular category-sofa material-wood">
				                                <article>
				                                    <div className="info">
				                                        <span className="add-favorite">
				                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
				                                        </span>
				                                        <span>
				                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
				                                        </span>
				                                    </div>
				                                    <div className="btn btn-add">
				                                        <i className="icon icon-cart"></i>
				                                    </div>
				                                    <div className="figure-grid">
				                                        <div className="image">
				                                            <a href="#productid1" className="mfp-open">
				                                                <img src="assets/images/product-6.png" alt="" width="360" />
				                                            </a>
				                                        </div>
				                                        <div className="text">
				                                            <h2 className="title h4"><a href="product.html">Seat chair <small>Sofa</small></a></h2>
				                                            <sup>$ <span className="price">896</span>,-</sup>
				                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
				                                        </div>
				                                    </div>
				                                </article>
				                            </div>



				                        </div>

				                    </div>

				                </div>

				                <div className="popup-main mfp-hide" id="productid1">

				                    <div className="product">

				                        <div className="popup-title">
				                            <div className="h1 title">Laura <small>product category</small></div>
				                        </div>

				                        <div className="owl-product-gallery">
				                            <img src="assets/images/product-1.png" alt="" width="640" />
				                            <img src="assets/images/product-2.png" alt="" width="640" />
				                            <img src="assets/images/product-3.png" alt="" width="640" />
				                            <img src="assets/images/product-4.png" alt="" width="640" />
				                        </div>

				                        <div className="popup-content">
				                            <div className="product-info-wrapper">
				                                <div className="row">

				                                    <div className="col-sm-6">
				                                        <div className="info-box">
				                                            <strong>Maifacturer</strong>
				                                            <span>Brand name</span>
				                                        </div>
				                                        <div className="info-box">
				                                            <strong>Materials</strong>
				                                            <span>Wood, Leather, Acrylic</span>
				                                        </div>
				                                        <div className="info-box">
				                                            <strong>Availability</strong>
				                                            <span><i className="fa fa-check-square-o"></i> in stock</span>
				                                        </div>
				                                    </div>

				                                    <div className="col-sm-6">
				                                        <div className="info-box">
				                                            <strong>Available Colors</strong>
				                                            <div className="product-colors clearfix">
				                                                <span className="color-btn color-btn-red"></span>
				                                                <span className="color-btn color-btn-blue checked"></span>
				                                                <span className="color-btn color-btn-green"></span>
				                                                <span className="color-btn color-btn-gray"></span>
				                                                <span className="color-btn color-btn-biege"></span>
				                                            </div>
				                                        </div>
				                                        <div className="info-box">
				                                            <strong>Choose size</strong>
				                                            <div className="product-colors clearfix">
				                                                <span className="color-btn color-btn-biege">S</span>
				                                                <span className="color-btn color-btn-biege checked">M</span>
				                                                <span className="color-btn color-btn-biege">XL</span>
				                                                <span className="color-btn color-btn-biege">XXL</span>
				                                            </div>
				                                        </div>
				                                    </div>

				                                </div>
				                            </div>
				                        </div>

				                        <div className="popup-table">
				                            <div className="popup-cell">
				                                <div className="price">
				                                    <span className="h3">$ 1999,00 <small>$ 2999,00</small></span>
				                                </div>
				                            </div>
				                            <div className="popup-cell">
				                                <div className="popup-buttons">
				                                    <a href="product.html"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
				                                    <a href="javascript:void(0);"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
				                                </div>
				                            </div>
				                        </div>

				                    </div> 
				                </div>
				            </div>
				        </section>

			        )}

			        <footer>
			            <div className="container">
			                <div className="footer-showroom">
			                    <div className="row">
			                        <div className="col-sm-8">
			                            <h2>Visit our showroom</h2>
			                            <p>200 12th Ave, New York, NY 10001, USA</p>
			                            <p>Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm - 2 pm</p>
			                        </div>
			                        <div className="col-sm-4 text-center">
			                            <a href="#" className="btn btn-clean"><span className="icon icon-map-marker"></span> Get directions</a>
			                            <div className="call-us h4"><span className="icon icon-phone-handset"></span> 333.278.06622</div>
			                        </div>
			                    </div>
			                </div>

			                <div className="footer-links">
			                    <div className="row">
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Browse by</h5>
			                            <ul>
			                                <li><a href="#">Brand</a></li>
			                                <li><a href="#">Product</a></li>
			                                <li><a href="#">Category</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Recources</h5>
			                            <ul>
			                                <li><a href="#">Design</a></li>
			                                <li><a href="#">Projects</a></li>
			                                <li><a href="#">Sales</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Our company</h5>
			                            <ul>
			                                <li><a href="#">About</a></li>
			                                <li><a href="#">News</a></li>
			                                <li><a href="#">Contact</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-12 col-md-6">
			                            <h5>Sign up for our newsletter</h5>
			                            <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
			                            <div className="form-group form-newsletter">
			                                <input className="form-control" type="text" name="email" placeholder="Email address" />
			                                <input type="submit" className="btn btn-clean btn-sm" value="Subscribe" />
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="footer-social">
			                    <div className="row">
			                        <div className="col-sm-6">
			                            <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank"><i className="fa fa-download"></i> Download Mobel</a> &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
			                        </div>
			                        <div className="col-sm-6 links">
			                            <ul>
			                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
			                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </footer>
			    </div>
			</div>
		);
	}
}

let api = 'door-shop.pavelgoltsev.com/api/v1';

// Set up categories
fetch(`http://${api}/categories?no_parent=true`, {
	headers: new Headers({
		'Content-Type': 'application/json'
	})
}).then((response) => {
	return response.json();
}).then((data) => {
	ReactDOM.render(React.createElement(App, {
		api,
		categories: {
			main: data.results
		}
	}), document.getElementById('app'));
});

