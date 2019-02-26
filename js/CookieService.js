export default {
    get(key) {
        const pattern = new RegExp(`(${key}=.+?;)|(${key}=.+)`);
        const cookie = document.cookie;
        const matches = cookie.match(pattern);
        return matches && matches[0].replace(new RegExp(`(${key}=)|(;$)`), '');
    }
};