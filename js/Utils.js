import CONSTANTS from "./constants";

export default class Utils {
    /**
     * Convert given value to integer.
     *
     * If for some reason conversion is failed, default value is used.
     * @param value Value to be converted.
     * @param defaultValue Default value to be used in case conversion is failed.
     * @returns {number}
     */
    static parseValueToInt(value, defaultValue) {
        const parsed = parseInt(value);
        return Number.isNaN(parsed) ? defaultValue : parsed;
    }

    static scrollTo(position = $('body').offset().top,
                    duration = CONSTANTS.SCROLL_TO_TOP_ANIMATION_TIME,
                    callback = null) {
        $('html').animate({
            scrollTop: position
        }, duration, callback);
    }
}
