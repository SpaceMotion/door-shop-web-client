import CONFIG from "./config";
import CONSTANTS from "./constants";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import DeliveryPage from "./DeliveryPage";
import ContactsPage from "./ContactsPage";
import CategoriesPage from "./CategoriesPage";
import {HashRouter, Route, Switch} from "react-router-dom";
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
		        window.dispatchEvent(new CustomEvent('closeCart'));
		    	window.dispatchEvent(new CustomEvent('closeMenuMobile'));
		        toggleOpen($(this));
		        objSearch.toggleClass('open');
		        objSearch.find('input').focus();
		    });

		    // Open/close cart

		    $cart.on('click', function () {
		        window.dispatchEvent(new CustomEvent('closeSearch'));
		    	window.dispatchEvent(new CustomEvent('closeMenuMobile'));
		        toggleOpen($(this));
		        objCart.toggleClass('open');
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

		    setTimeout(function () {
		        $('.page-loader').addClass('loaded');
		    }, CONSTANTS.DELAY_REMOVE_PAGE_LOADER);

		})();		
	}

	render() {
		return (
			<div>
			    <div className="page-loader"></div>
			    <div className="wrapper">
					<Header categories={this.props.categories} companyInfo={this.props.companyInfo}/>
                    <Switch>
    					<Route path="/categories" render={() => <CategoriesPage categories={this.props.categories}/>}/>
    					<Route path="/products" render={() => <ProductsPage categories={this.props.categories}/>}/>
    					<Route path="/delivery" render={() => <DeliveryPage/>}/>
    					<Route path="/contacts" render={() => <ContactsPage/>}/>
                        <Route render={() => <MainPage categories={this.props.categories}/>}/>
                    </Switch>
					<Footer companyInfo={this.props.companyInfo}/>
			    </div>
			</div>
		);
	}
}

const setUpDataPromises = [];
const appProps = {};

// Set up categories
const categoriesPromise = new Promise((resolve) => {
	fetch(`${CONFIG.ROOT_API_URL}/categories?no_parent=true`, {
		headers: new Headers({
			'Content-Type': 'application/json'
		})
	}).then((response) => {
		return response.json();
	}).then((data) => {
		appProps.categories = data.results;
		resolve();
	});
});
setUpDataPromises.push(categoriesPromise);

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
setUpDataPromises.push(companyInfoPromise);

Promise.all(setUpDataPromises).then(() => {
	ReactDOM.render(<HashRouter><App {...appProps}/></HashRouter>, document.getElementById('app'));
});
