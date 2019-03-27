import React from "react";
import ReloadPageMixin from "./ReloadPageMixin";

export default class ContactsPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
	}

	componentDidMount() {
		this.hidePreLoader();
	}

	render() {
		return (
	        <section className="main-header" style={{backgroundImage: "url(%URI_PREFIX%assets/images/gallery-3.jpg)"}}>
				<div className='container'>
					<address className='contacts__item'>
						<span className='contacts__item-label'>Адрес:</span>
						<span className='contacts__item-text'>{this.props.data.address}</span>
					</address>
					<div className='contacts__item contacts__item_type_phone'>
						<span className='contacts__item-label'>Телефон:</span>
						<a href={`tel:${this.props.data.phone}`} className='contacts__item-text'>{this.props.data.phone}</a>
					</div>
				</div>
			</section>
		);
	}
}