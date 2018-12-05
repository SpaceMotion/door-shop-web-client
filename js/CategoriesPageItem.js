import {Link} from "react-router-dom";

export default class CategoriesPageItem extends React.Component {
	render() {
		return (
            <div className="col-md-4 col-xs-6">
                <article>
                    <div className="figure-block">
                        <div className="image">
                            <Link className="f-icon" to={`/products?category=${this.props.id}`} style={{backgroundImage: this.props.icon ? `url(${this.props.icon})` : 'none'}}>
                                {this.props.icon_code && !this.props.icon ? String.fromCharCode(this.props.icon_code) : ''}
                            </Link>
                        </div>
                        <div className="text">
                            <h2 className="title h4">
                            	<Link to={`/products?category=${this.props.id}`}>{this.props.name}</Link>
                            </h2>
                        </div>
                    </div>
                </article>
            </div>
		);
	}
}