import CONSTANTS from "./constants";

export default {
	scrollTo(position = $('body').offset().top, duration = CONSTANTS.SCROLL_TO_TOP_ANIMATION_TIME, callback = null) {
        $('html').animate({
            scrollTop: position
        }, duration, callback);		
	}
};