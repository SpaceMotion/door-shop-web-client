export default class Footer extends React.Component {
	render() {
		return (
	        <footer>
	            <div className="container">
	                <div className="footer-showroom">
	                    <div className="row">
	                        <div className="col-sm-8">
	                            <h2>О КОМПАНИИ</h2>
	                            <p>{this.props.companyInfo.address}</p>
	                            <p>{this.props.companyInfo.short_description}</p>
	                        </div>
	                        <div className="col-sm-4 text-center">
	                            <a href={`tel:${this.props.companyInfo.phone}`} className="call-us h4"><span className="icon icon-phone-handset"></span>{this.props.companyInfo.phone}</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </footer>
		);
	}
}