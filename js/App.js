import CONFIG from "./config";
import CONSTANTS from "./constants";
import Header from "./Header";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Pagination from "./Pagination";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
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
		this.updateFiltersData = this.updateFiltersData.bind(this);
		this.setUpFilters = this.setUpFilters.bind(this);
		this.updateSortingData = this.updateSortingData.bind(this);
		this.updatePaginationData = this.updatePaginationData.bind(this);

		this.setUpFilters();
	}

	componentDidMount() {
		(function () {

		    "use strict";

		    // Main navigation & mega menu
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
		        $close = $('.close-menu');

		    // Open/close search bar

		    $search.on('click', function () {
		        toggleOpen($(this));
		        objSearch.toggleClass('open');
		        objSearch.find('input').focus();
		        closeCart();
		    });

		    // Open/close cart

		    $cart.on('click', function () {
		        toggleOpen($(this));
		        objCart.toggleClass('open');
		        closeSearch();
		    });

		    // Mobile menu open/close

		    $menu.on('click', function () {
		        objMenu.addClass('expanded');
		        closeSearch();
		        closeCart();
		    });

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
		    function closeCart() {
		        objCart.removeClass('open');
		        $cart.removeClass('open');
		    }

		    // Sticky header
		    // ----------------------------------------------------------------

		    var navbarFixed = $('nav.navbar-fixed');

		    // When reload page - check if page has offset
		    if ($(document).scrollTop() > CONSTANTS.HEADER_NAV_HEIGHT) {
		        navbarFixed.addClass('navbar-sticked');
		    }
		    // Add sticky menu on scroll
		    $(document).on('bind ready scroll', function () {
		        var docScroll = $(document).scrollTop();
		        if (docScroll >= CONSTANTS.STICKY_MENU_AFTER_SCROLL_POSITION) {
		            navbarFixed.addClass('navbar-sticked');
		        } else {
		            navbarFixed.removeClass('navbar-sticked');
		        }
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
		            autoPlay: CONSTANTS.FRONTPAGE_SLIDER_ANIMATION_TIMEOUT,
		            stopOnHover: false
		        });

		        animatetCaptions(); 

		        function animatetCaptions(event) {
		            "use strict";
		            var activeItem = $(n).find('.owl-item.active'),
		            timeDelay = CONSTANTS.FRONTPAGE_SLIDER_DELAY_BEFORE_ANIMATE_CAPTIONS;
		            $.each(activeItem.find('.animated'), function (j, m) {
		                var item = $(m);
		                item.css('animation-delay', timeDelay + 'ms');
		                timeDelay = timeDelay + CONSTANTS.FRONTPAGE_SLIDER_DELAY_OFFSET_ANIMATE_CAPTIONS;
		                item.addClass(item.data('animation'));
		                setTimeout(function () {
		                    item.removeClass(item.data('animation'));
		                }, CONSTANTS.FRONTPAGE_SLIDER_DELAY_BEFORE_NEXT);
		            });
		        }

		        if ($(n).hasClass('owl-slider-fullscreen')) {
		            $('.header-content .item').height($(window).height());
		        }
		    });

		    // Scroll to top
		    // ----------------------------------------------------------------

		    var $wrapper = $('.wrapper');
		    $wrapper.append($("<div class='scroll-top'><i class='icon icon-chevron-up'></i></div>"));

		    var $scrollbtn = $('.scroll-top');

		    $(document).on('ready scroll', function () {
		        var docScrollTop = $(document).scrollTop(),
		            docScrollBottom = $(window).scrollTop() + $(window).height() == $(document).height();

		        if (docScrollTop >= CONSTANTS.SCROLL_TO_TOP_OFFSET_SHOW) {
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
		        }, CONSTANTS.SCROLL_TO_TOP_ANIMATION_TIME);
		        return false;
		    });

		    setTimeout(function () {
		        $('.page-loader').addClass('loaded');
		    }, CONSTANTS.DELAY_REMOVE_PAGE_LOADER);

		})();		
	}

	updateFiltersData(changes) {
		this.setState((state, props) => {
			const filterType = changes.filterType;
			let filters = state.filters[filterType];

			if (filterType === 'price') {
				filters = {
					from: changes.from,
					to: changes.to
				};
			} else {
				filters[changes.idx].checked = changes.checked;				
				const anyOption = filters.find((filterOption) => {
					return filterOption.any;
				});
				if (changes.checked) {
					if (changes.any) {
						filters.forEach((filterOption) => {
							if (!filterOption.any) {
								filterOption.checked = false;								
							}
						});
					} else if (anyOption) {
						anyOption.checked = false;							
					}					
				} else if (filters.every((filterOption) => {
					return !filterOption.checked;
				})) {
					anyOption.checked = true;
				}
			}
			return state;
		});
	}

	updateSortingData(changes) {
		const option = changes.option;
		this.setState((state) => {
			if (option === 'itemsPerPage') {
				state.pagination.activePage = 1;
			}
			state.sorting[option] = changes.value;
			return state;
		});
	}

	updatePaginationData(changes) {
		this.setState((state) => {
			state.pagination.activePage = changes.activePage;
			return state;
		});
	}

	setUpFilters() {
		// Manufacturers
		let manufacturersDataGet = new Promise((resolve, reject) => {
			fetch(`${CONFIG.ROOT_API_URL}/manufacturers`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.setState((state) => {
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
		});

		//Colors
		let colorsDataGet = new Promise((resolve, reject) => {
			fetch(`${CONFIG.ROOT_API_URL}/products`, {
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

				colors.unshift({
					id: 9999,
					any: true,
					checked: true,
					name: 'Любой'
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

			        {false ? null : (
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
										<SortBar updateState={this.updateSortingData} itemsPerPage={this.state.sorting.itemsPerPage} price={this.state.sorting.price} name={this.state.sorting.name}/>

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
							            <Pagination updateState={this.updatePaginationData} totalItems={170} itemsPerPage={this.state.sorting.itemsPerPage} activePage={this.state.pagination.activePage}/>

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

// Set up categories
fetch(`${CONFIG.ROOT_API_URL}/categories?no_parent=true`, {
	headers: new Headers({
		'Content-Type': 'application/json'
	})
}).then((response) => {
	return response.json();
}).then((data) => {
	ReactDOM.render(React.createElement(App, {
		categories: {
			main: data.results
		}
	}), document.getElementById('app'));
});

