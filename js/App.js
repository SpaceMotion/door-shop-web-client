import CONFIG from "./config";
import CONSTANTS from "./constants";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import ProductDetailPage from "./ProductDetailPage";
import DeliveryPage from "./DeliveryPage";
import ContactsPage from "./ContactsPage";
import CategoriesPage from "./CategoriesPage";
import CartActionInfoPlaque from "./CartActionInfoPlaque";
import PageNotFound from "./PageNotFound";
import {HashRouter, Route} from "react-router-dom";
import Utils from "./Utils";

class App extends React.Component {
	closeMenuMobile() {
		const expandedMenu = $('nav').find('.expanded');
		if (expandedMenu.length) {
        	$('nav').find('.navbar-dropdown').slideUp();			
		}
        expandedMenu.removeClass('expanded');
	}

    closeSearch() {
        $('.search-wrapper').removeClass('open');
        $('.open-search').removeClass('open');
    }

    closeCart() {
        $('.cart-wrapper').removeClass('open');
        $('.open-cart').removeClass('open');
    }

	constructor(props) {
		super(props);

		this.setPageNotFound = this.setPageNotFound.bind(this);
		this.addCartProduct = this.addCartProduct.bind(this);
		this.setCartProduct = this.setCartProduct.bind(this);
		this.removeCartProduct = this.removeCartProduct.bind(this);
		this.getCartData = this.getCartData.bind(this);
		this.setCartData = this.setCartData.bind(this);
		this.setCartActionInfo = this.setCartActionInfo.bind(this);

		this.cartEditFunctions = {
			addCartProduct: this.addCartProduct,
			setCartProduct: this.setCartProduct,
			removeCartProduct: this.removeCartProduct
		};
		this.setUpCategoryIcons();
		this.state = {
			cartData: this.getCartData().cartData
		};
	}

	componentDidMount() {
		//Обработчики глобальных событий
		window.addEventListener('closeMenuMobile', this.closeMenuMobile.bind(this));
		window.addEventListener('closeSearch', this.closeSearch.bind(this));
		window.addEventListener('closeCart', this.closeCart.bind(this));

		(function () {

		    "use strict";

		    // Main navigation & mega menu
		    // ----------------------------------------------------------------

		    // Global menu variables

		    var objSearch = $('.search-wrapper'),
		        objMenu = $('.floating-menu'),
		        $search = $('.open-search'),
		        $menu = $('.open-menu'),
		        $openDropdown = $('.open-dropdown'),
		        $close = $('.close-menu');

		    // Open/close search bar

		    $search.on('click', function () {
		        window.dispatchEvent(new CustomEvent('closeCart'));
		    	window.dispatchEvent(new CustomEvent('closeMenuMobile'));
		        toggleOpen($(this));
		        objSearch.toggleClass('open');
		        objSearch.find('input').focus();
		    });

		    // Mobile menu open/close

		    $menu.on('click', function () {
		        window.dispatchEvent(new CustomEvent('closeSearch'));
		        window.dispatchEvent(new CustomEvent('closeCart'));
		        objMenu.addClass('expanded');
		    });

		    // Open dropdown/megamenu

		    $openDropdown.on('click', function (e) {
		        e.preventDefault();

		        if (window.innerWidth < CONSTANTS.DESKTOP_MORE_THAN) {
			        const liParent = $(this).parent().parent(),
			            liDropdown = liParent.find('.navbar-dropdown');

			        liParent.toggleClass('expanded');

			        if (liParent.hasClass('expanded')) {
			            liDropdown.slideDown();
			        }
			        else {
			            liDropdown.slideUp();
			        }
		        }
		    });

		    // Close menu (mobile)

		    $close.on('click', function () {
		    	window.dispatchEvent(new CustomEvent('closeMenuMobile'));
		    });

		    // Global functions

		    function toggleOpen(el) {
		        $(el).toggleClass('open');
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
		    	Utils.scrollTo();
		        return false;
		    });
		})();		
	}

	setPageNotFound(is) {
		this.setState({
			pageNotFound: is
		});
	}

    getCartData() {
        return {
            localStorage: window.localStorage,
            cartData: JSON.parse(localStorage.getItem('cartData')) || {
				items: {},
				count: 0
			}
        };
    }

	setCartData(localStorage, cartData) {
        localStorage.setItem('cartData', JSON.stringify(cartData));
		this.setState({cartData});        
	}

    removeCartProduct(id) {
		const {localStorage, cartData} = this.getCartData();
		delete cartData.items[id];
		if (!Object.keys(cartData.items).length) {
			window.dispatchEvent(new CustomEvent('closeCart'));
		}
		this.calculateCartTotals(cartData);
		this.setCartData(localStorage, cartData);	
	}
	
	addCartProduct(data) {
		const cartData = this.getCartData().cartData;
		this.setCartActionInfo({
			exists: !!cartData.items[data.id],
			product: data
		});
		data.quantity = 1;
		this.setCartProduct(data);
	}
	
	calculateCartProductCosts(product) {
		product.computedPrice = {
			price: (parseFloat(product.price) * product.quantity).toFixed(2),
			price_with_discount: (parseFloat(product.price_with_discount) * product.quantity).toFixed(2)
		};
	}

    setCartProduct(data) {
		let {localStorage, cartData} = this.getCartData();
        cartData.items[data.id] = data;
		this.calculateCartProductCosts(data);
		this.calculateCartTotals(cartData);
		this.setCartData(localStorage, cartData);
	}
	
	calculateCartTotals(cartData) {
		const items = Object.values(cartData.items);
		const {totalSum, totalSumDiscount} = items.reduce(({totalSum, totalSumDiscount}, currentItem) => {
			return {
				totalSum: totalSum + parseFloat(currentItem.price) * currentItem.quantity,
				totalSumDiscount: totalSumDiscount + parseFloat(currentItem.price_with_discount) * currentItem.quantity
			};
		}, {
			totalSum: 0,
			totalSumDiscount: 0
		});
		cartData.totalSumDiscount = totalSumDiscount.toFixed(2);
		cartData.discountValue = (totalSum - totalSumDiscount).toFixed(2);
		cartData.discountPercent = cartData.discountValue > 0 ? Math.floor(cartData.discountValue / totalSum * 100) : 0;
		cartData.count = items.length;
	}

	setCartActionInfo(info) {
		this.setState({
			cartActionInfo: info
		});
	}

	setUpCategoryIcons() {
		const categories = this.props.categories;
		const categoryItems = Object.values(categories);
		for (let category of categoryItems) {
			category.computedIconData = {
				type: category.icon ? 'img' : 'char',
				value: category.icon || category.icon_code
			};
		}
	}
	
	prepareProductData(data, commonData) {
		const categories = commonData.categories;
		const colors = commonData.colors;
		const manufacturers = commonData.manufacturers;
		const collections = commonData.collections;
		const currentCategories = data.categories;
		const currentColors = data.colors;
		const currentManufacturer = data.manufacturer;
		const currentCollection = data.collection;

		// Setup categories
		if (categories && Array.isArray(data.categories)) {
			data.categories = {};
			for (let categoryId of currentCategories) {
				data.categories[categoryId] = categories[categoryId];
			}
		}

		// Setup colors
		if (colors && Array.isArray(data.colors)) {
			data.colors = {};
			for (let colorId of currentColors) {
				data.colors[colorId] = colors[colorId];
			}
		}

		// Setup manufacturer
		if (manufacturers && Number.isInteger(currentManufacturer)) {
			data.manufacturer = {...manufacturers[currentManufacturer]};
		}

		// Setup collection
		if (collections && Number.isInteger(currentCollection)) {
			data.collection = {...collections[currentCollection]};
		}

		return data;
	}

	setUpProductInfoCommonData(callback) {
        const commonData = {
            colors: {},
            manufacturers: {},
            collections: {}
        };

        // Colors
        const colorsDataFetch = new Promise((resolve) => {
            fetch(`${CONFIG.ROOT_API_URL}/colors`, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const colors = data.results;
                for (let color of colors) {
                    commonData.colors[color.id] = color;
                }
                resolve();
            });        
        });

        // Manufacturers
        const manufacturersDataFetch = new Promise((resolve) => {
            fetch(`${CONFIG.ROOT_API_URL}/manufacturers`, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const manufacturers = data.results;
                for (let manufacturer of manufacturers) {
                    commonData.manufacturers[manufacturer.id] = manufacturer;
                }
                resolve();
            });        
        });

        // Collections
        const collectionsDataFetch = new Promise((resolve) => {
            fetch(`${CONFIG.ROOT_API_URL}/collections`, {
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                const collections = data.results;
                for (let collection of collections) {
                    commonData.collections[collection.id] = collection;
                }
                resolve();
            });    
        });
        
        Promise.all([colorsDataFetch, manufacturersDataFetch, collectionsDataFetch]).then(() => {
			callback(commonData);
		});
    }

	render() {
		return (
			<div>
			    <div className="page-loader"></div>
			    <div className="wrapper">
					<Header categories={this.props.categories} companyInfo={this.props.companyInfo} cartData={this.state.cartData} cartEditFunctions={this.cartEditFunctions}/>
					<div style={{
						display: this.state.pageNotFound ? 'none' : 'block'
					}}>
						<Route path="/categories" render={() => <CategoriesPage categories={this.props.categories} setPageNotFound={this.setPageNotFound}/>}/>
						<Route exact path="/products" render={() => <ProductsPage prepareProductData={this.prepareProductData} categories={this.props.categories} setPageNotFound={this.setPageNotFound} cartEditFunctions={this.cartEditFunctions} setUpProductInfoCommonData={this.setUpProductInfoCommonData}/>}/>
						<Route path="/products/:id" render={() => <ProductDetailPage prepareProductData={this.prepareProductData} categories={this.props.categories} setPageNotFound={this.setPageNotFound} {...this.cartEditFunctions} setUpProductInfoCommonData={this.setUpProductInfoCommonData}/>}/>
						<Route path="/delivery" render={() => <DeliveryPage setPageNotFound={this.setPageNotFound}/>}/>
						<Route path="/contacts" render={() => <ContactsPage setPageNotFound={this.setPageNotFound}/>}/>
						<Route exact path="/" render={() => <MainPage categories={this.props.categories} setPageNotFound={this.setPageNotFound}/>}/>
					</div>
					{this.state.pageNotFound && <PageNotFound/>}
					<Footer companyInfo={this.props.companyInfo}/>
					{this.state.cartActionInfo && <CartActionInfoPlaque message={this.state.cartActionInfo} updateState={this.setCartActionInfo}></CartActionInfoPlaque>}
			    </div>
			</div>
		);
	}
}

const appProps = {
	categories: {}
};

// Set up categories
const categoriesPromise = new Promise((resolve) => {
	fetch(`${CONFIG.ROOT_API_URL}/categories?no_parent=true`, {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then((response) => {
		return response.json();
	}).then((data) => {
		const categories = data.results;
		for (let category of categories) {
			appProps.categories[category.id] = category;
		}
		resolve();
	});
});

const companyInfoPromise = new Promise((resolve) => {
	fetch(`${CONFIG.ROOT_API_URL}/company`, {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then((response) => {
		return response.json();
	}).then((data) => {
		appProps.companyInfo = data;
		resolve();
	});		
});

Promise.all([categoriesPromise, companyInfoPromise]).then(() => {
	ReactDOM.render(<HashRouter><App {...appProps}/></HashRouter>, document.getElementById('app'));
});
