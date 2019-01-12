import CONSTANTS from "./constants";

export default (superclass) => class ReloadPageMixin extends superclass {
    closePopUps() {
        window.dispatchEvent(new CustomEvent('closeCart'));
        window.dispatchEvent(new CustomEvent('closeSearch'));
        window.dispatchEvent(new CustomEvent('closeMenuMobile'));        
    }

	showPreLoader() {
		$('.page-loader').removeClass('loaded');
		$('html').css('overflow', 'hidden');
        this.closePopUps();
	}

	hidePreLoader() {
		setTimeout(() => {
			$(document).scrollTop(0);
			$('html').css('overflow', 'auto');
			$('.page-loader').addClass('loaded');
		}, CONSTANTS.DELAY_REMOVE_PAGE_LOADER);
	}
}