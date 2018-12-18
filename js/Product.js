export default class Prouct extends React.Component {
	render() {
		return (
            <div className="col-md-6 col-xs-6 item price-discount category-sofa material-leather">
                <article>
                    <div className="info">
                        <span>
                            <a href="#productid1" className="mfp-open" data-title="Быстрый просмотр"><i className="icon icon-eye"></i></a>
                        </span>
                    </div>
                    <div className="btn btn-add">
                        <i className="icon icon-cart"></i>
                    </div>
                    <div className="figure-grid">
                        {this.props.data.is_new ? <span className="label label-warning">Новый</span> : null}                        
                        <div className="image">
                            <a href="#" className="mfp-open f-icon">
                                {this.props.data.preview_img.type === 'img' ? <img src={this.props.data.preview_img.value} alt=""/> : <span>{String.fromCharCode(this.props.data.preview_img.value)}</span>}
                            </a>
                        </div>
                        <div className="text">
                            <h2 className="title h4"><a href="product.html">{this.props.data.name}<br/><small>{this.props.data.collectionName || this.props.data.manufacturerName}</small></a></h2>
                            {this.props.data.price_with_discount !== this.props.data.price ? <sub>{`${String.fromCharCode(8381)} ${(+this.props.data.price).toFixed(2)}`}</sub> : null}
                            <sup>{String.fromCharCode(8381)} <span className="price">{(+this.props.data.price_with_discount).toFixed(2)}</span></sup>
                        </div>
                    </div>
                </article>
            </div>
		);
	}
}