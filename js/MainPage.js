import CONSTANTS from "./constants";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";

export default class MainPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
		this.props.setPageNotFound(false);
	}

	componentDidMount() {
	    // Frontpage slider
	    // ----------------------------------------------------------------

	    var arrowIcons = [
	        '<span class="icon icon-chevron-left"></span>',
	        '<span class="icon icon-chevron-right"></span>'
	    ];

	    $.each($(".owl-slider"), function (sliderIndex, sliderItem) {

	        $(sliderItem).owlCarousel({
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
	            var activeItem = $(sliderItem).find('.owl-item.active'),
	            timeDelay = CONSTANTS.FRONTPAGE_SLIDER_DELAY_BEFORE_ANIMATE_CAPTIONS;
	            $.each(activeItem.find('.animated'), function (sliderItemAnimatedCaptionIndex, sliderItemAnimatedCaptionItem) {
	                var item = $(sliderItemAnimatedCaptionItem);
	                item.css('animation-delay', timeDelay + 'ms');
	                timeDelay = timeDelay + CONSTANTS.FRONTPAGE_SLIDER_DELAY_OFFSET_ANIMATE_CAPTIONS;
	                item.addClass(item.data('animation'));
	                setTimeout(function () {
	                    item.removeClass(item.data('animation'));
	                }, CONSTANTS.FRONTPAGE_SLIDER_DELAY_BEFORE_NEXT);
	            });
	        }

	        if ($(sliderItem).hasClass('owl-slider-fullscreen')) {
	            $('.header-content .item').height($(window).height());
	        }
	    });

	    const categoriesCount = this.props.categories.length;
    	let itemsDesktop = 4;
    	let itemsDesktopSmall = 4;
    	let itemsTablet = 3;
    	let itemsMobile = 2;
    	const minimalCount = 2;
	    if (categoriesCount < itemsDesktop) { // В случае если количество категории меньше чем количество одновременно показываемых категории в слайдере, минимально будем показывать 2 категории
	    	itemsDesktop = categoriesCount;
	    	itemsDesktopSmall = Math.min(Math.max(categoriesCount - 1, minimalCount), itemsDesktop);
	    	itemsTablet = Math.min(Math.max(categoriesCount - 2, minimalCount), itemsDesktop);
	    	itemsMobile = Math.min(Math.max(categoriesCount - 3, minimalCount), itemsDesktop);
	    }

	    $.each($(".owl-icons"), function (i, n) {
	        $(n).owlCarousel({
	            autoHeight: false,
	            pagination: false,
	            navigation: true,
	            navigationText: arrowIcons,
	            items: itemsDesktop,
	            itemsDesktop: [1199, itemsDesktop],
	            itemsDesktopSmall: [979, itemsDesktopSmall],
	            itemsTablet: [768, itemsTablet],
	            itemsTabletSmall: false,
	            itemsMobile: [479, itemsMobile],
	            addClassActive: true,
	            autoPlay: 5500,
	            stopOnHover: true
	        });
	    });

		this.hidePreLoader();
	}

	render() {
		return (
			<div>
		        <section className="header-content">
		            <div className="owl-slider">
                        <img className="item" src="assets/images/7cc22dd2de2adf9fb842bfb4b9f0350e_slide01.jpg"/>
                        <img className="item" src="assets/images/b09ecf5fb28e67be38ea8bdaca24f2f6_slide02.jpg"/>
                        <img className="item" src="assets/images/27d192841d72cba553a10cf48ca4915a_slide03.jpg"/>
		            </div>
		        </section>

		        <section className="owl-icons-wrapper owl-icons-frontpage">
		            <header className="hidden">
		                <h2>Категории продуктов</h2>
		            </header>

		            <div className="container">

		                <div className="owl-icons">
		                	{this.props.categories.map((category, idx) => {
		                		return (
									<Link to={`/products?category=${category.id}`} key={idx}>
				                        <figure>
				                            <i className="f-icon" style={{backgroundImage: category.icon ? `url(${category.icon})` : 'none'}}>{category.icon_code && !category.icon ? String.fromCharCode(category.icon_code) : ''}</i>
				                            <figcaption>{category.name}</figcaption>
				                        </figure>
				                    </Link>
		                		);
		                	})}
		                </div>
		            </div>
		        </section>
		    </div>
		);
	}
}
