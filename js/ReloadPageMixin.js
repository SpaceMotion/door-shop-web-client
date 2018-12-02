import CONSTANTS from "./constants";

export default (superclass) => class ReloadPageMixin extends React.Component {
	showPreLoader() {
		$('.page-loader').removeClass('loaded');
		$('html').css('overflow', 'hidden');
	}

	hidePreLoader() {
		setTimeout(() => {
			$(document).scrollTop(0);
			$('html').css('overflow', 'auto');
			$('.page-loader').addClass('loaded');
		}, CONSTANTS.DELAY_REMOVE_PAGE_LOADER);
	}
}