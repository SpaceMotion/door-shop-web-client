import CONSTANTS from "./constants";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import ProductDetailPage from "./ProductDetailPage";
import DeliveryPage from "./DeliveryPage";
import ContactsPage from "./ContactsPage";
import CategoriesPage from "./CategoriesPage";
import CartActionInfoPlaque from "./CartActionInfoPlaque";
import OrderPage from "./OrderPage";
import {HashRouter, Route, Switch} from "react-router-dom";
import Utils from "./Utils";
import DataService from "./DataService";
import CartServiceMixin from "./CartServiceMixin";
import PageNotFound from "./PageNotFound";
import AccompanyingProducts from "./AccompanyingProducts";

class App extends CartServiceMixin(React.Component) {
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
		this.closeAccompanyingProduct = this.closeAccompanyingProduct.bind(this);
		this.state = this.state || {};
		this.state.accompanyingProduct = {
			is: false,
			productIds: []
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

    closeAccompanyingProduct() {
        this.setState(state => {
			state.accompanyingProduct.is = false;
			return state;
        });
    }

	render() {
		const cart = this.state.cart;
		const cartAction = cart.local.action;

		return (
			<div>
			    <div className="page-loader"></div>
			    <div className="wrapper">
					<Header categories={this.props.categories} companyInfo={this.props.companyInfo} cart={cart} manufacturers={this.props.manufacturers} collections={this.props.collections} onCartProductQuantityChanged={this.onCartProductQuantityChanged} removeCartProduct={this.removeCartProduct} updateCartProductsIfExpired={this.updateCartProductsIfExpired} toggleCartHandler={this.toggleCartHandler}/>
					<Switch>
						<Route path="/categories" render={() => <CategoriesPage categories={this.props.categories}/>}/>
						<Route exact path="/products" render={() => <ProductsPage categories={this.props.categories} addCartProduct={this.addCartProduct} manufacturers={this.props.manufacturers} collections={this.props.collections} closePopup={this.closeAccompanyingProduct}/>}/>
						<Route path="/products/:id" render={() => <ProductDetailPage categories={this.props.categories} addCartProduct={this.addCartProduct} cart={cart} onCartProductQuantityChanged={this.onCartProductQuantityChanged} addCartProduct={this.addCartProduct} openCartHandler={this.openCartHandler}/>}/>
						<Route path="/delivery" render={() => <DeliveryPage/>}/>
						<Route path="/contacts" render={() => <ContactsPage/>}/>
						<Route exact path="/" render={() => <MainPage categories={this.props.categories}/>}/>
						<Route path="/order" render={() => <OrderPage cart={cart} removeCartProduct={this.removeCartProduct} onCartProductQuantityChanged={this.onCartProductQuantityChanged} manufacturers={this.props.manufacturers} collections={this.props.collections} cartInitialized={this.cartInitialized}/>}/>
						<PageNotFound/>
					</Switch>
					<Footer companyInfo={this.props.companyInfo}/>
					{cartAction && <CartActionInfoPlaque action={cartAction} openCartHandler={this.openCartHandler} clearCartActionInfo={this.clearCartActionInfo}></CartActionInfoPlaque>}
					{this.state.accompanyingProduct.is && <AccompanyingProducts products={this.state.accompanyingProduct.productIds} cart={this.state.cart} categories={this.props.categories} manufacturers={this.props.manufacturers} collections={this.props.collections} colors={this.props.colors} onCartProductQuantityChanged={this.onCartProductQuantityChanged} addCartProduct={this.addCartProduct} openCartHandler={this.openCartHandler} closePopup={this.closeAccompanyingProduct}/>}
			    </div>
			</div>
		);
	}
}

DataService.getComplex(data => {
	// Setup category icons
	const categories = data[0].results;
	for (let category of categories.values()) {
		category.computedIconData = {
			type: category.icon ? 'img' : 'char',
			value: category.icon || category.icon_code
		};
	}

	ReactDOM.render(<HashRouter><App categories={categories} companyInfo={data[1]} manufacturers={data[2].results} collections={data[3].results}/></HashRouter>, document.getElementById('app'));
}, ['getCategories', 'getCompanyInfo', 'getManufacturers', 'getCollections']);