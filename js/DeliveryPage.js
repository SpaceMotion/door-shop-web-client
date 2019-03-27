import React from "react";
import ReloadPageMixin from "./ReloadPageMixin";
import DataService from "./DataService";

export default class DeliveryPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
		this.state = {};
	}

	componentDidMount() {
		this.getText();
	}

	getText() {
		DataService.getDeliveryInfo(data => {
			this.setState({
				text: data.text
			}, () => {
				this.hidePreLoader();
			});
		});
	}

	render() {
		return (
	        <section className="main-header" style={{backgroundImage: "url(%URI_PREFIX%assets/images/gallery-3.jpg)"}}>
				<div className='container delivery-info'>{this.state.text}</div>
			</section>
		);
	}
}