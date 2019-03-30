export default class Timer {
    constructor(props) {
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.duration = props.duration;
        this.endCallback = props.endCallback;
    }

    start() {
        this.stop();
        this.timer = setTimeout(this.endCallback, this.duration);
    }

    stop() {
        window.clearTimeout(this.timer);
    }
}