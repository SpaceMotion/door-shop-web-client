export default class Timer {
    constructor(duration, endCallback) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.duration = duration;
        this.endCallback = endCallback;
    }

    start() {
        if (!this.isRunning()) {
            this.timer = setTimeout(this.endCallback, this.duration);
        }
    }

    stop() {
        if (this.isRunning()) {
            window.clearTimeout(this.timer);
            this.timer = undefined;
        }
    }

    isRunning() {
        return this.timer !== undefined;
    }
}
