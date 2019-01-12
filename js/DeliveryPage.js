import ReloadPageMixin from "./ReloadPageMixin";

export default class DeliveryPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
		this.props.setPageNotFound(false);
	}

	componentDidMount() {
		this.hidePreLoader();
	}

	render() {
		return (
	        <section className="main-header" style={{backgroundImage: "url(assets/images/gallery-3.jpg)"}}></section>
		);
	}
}