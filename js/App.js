import CONFIG from "./config";
import CONSTANTS from "./constants";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ProductsPage from "./ProductsPage";
import DeliveryPage from "./DeliveryPage";
import ContactsPage from "./ContactsPage";
import {HashRouter, Route} from "react-router-dom";

class App extends React.Component {
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

	render() {
		return (
			<div>
			    <div className="page-loader"></div>
			    <div className="wrapper">
					<Header categories={this.props.categories}/>
					<Route exact path="/" render={() => <MainPage categories={this.props.categories}/>}/>
					<Route path="/products" render={() => <ProductsPage categories={this.props.categories}/>}/>
					<Route path="/delivery" render={() => <DeliveryPage/>}/>
					<Route path="/contacts" render={() => <ContactsPage/>}/>
					<Footer/>
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
	ReactDOM.render(<HashRouter><App categories={data.results}/></HashRouter>, document.getElementById('app'));
});