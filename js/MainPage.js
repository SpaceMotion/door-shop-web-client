import CONSTANTS from "./constants";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";

export default class MainPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
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
