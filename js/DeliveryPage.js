import React from "react";
import ReloadPageMixin from "./ReloadPageMixin";

export default class DeliveryPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
	}

	componentDidMount() {
		this.hidePreLoader();
	}

	render() {
		return (
	        <section className="main-header" style={{backgroundImage: "url(%URI_PREFIX%assets/images/gallery-3.jpg)"}}></section>
		);
	}
}