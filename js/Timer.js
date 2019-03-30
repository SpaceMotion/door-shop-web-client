export default class Timer {
    constructor(duration, endCallback) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.duration = duration;
        this.endCallback = endCallback;
    }

    start() {
        this.timer = setTimeout(this.endCallback, this.duration);
    }

    stop() {
        window.clearTimeout(this.timer);
    }
}