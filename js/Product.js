import ProductQuickView from "./ProductQuickView";

export default class Prouct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imgWidth: 'auto',
            imgHeight: 'auto',
            isQuickView: false
        };
    }

    componentDidMount() {
        if (this.props.data.preview_img.type === 'img') {
            const img = new Image();
            img.src = this.props.data.preview_img.value;
            const maxSize = 300;
            const dimensions = this.getCorrectImgDimensions(img.width, img.height, maxSize);
            this.setState({
                imgWidth: dimensions[0],
                imgHeight: dimensions[1]
            });
        }

        const productId = this.props.data.id;
        $(`*[data-product-id='${productId}'] .mfp-open`).magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in',
            callbacks: {
                beforeOpen: () => {
                    this.props.data.colorValues = this.props.data.colors.map((colorId) => {
                        return this.props.colors[colorId].value;
                    });
                    this.setState({
                        isQuickView: true
                    });
                },
                afterClose: () => {
                    this.setState({
                        isQuickView: false
                    });
                }
            }
        });
    }

    componentWillUnmount() {
        $.magnificPopup.close();
    }

    getCorrectImgDimensions(width, height, maxSize) {
        const elem = document.querySelector(`*[data-product-id="${this.props.data.id}"] .image a`);
        if (width > height) {
            height = maxSize / width * height;
            width = maxSize;
        } else {
            width = maxSize / height * width;            
            height = maxSize;
        }
        return [width / parseInt($(elem).css('width')) * 100 + '%', height / parseInt($(elem).css('height')) * 100 + '%'];
    }

	render() {
        const isPreviewImg = this.props.data.preview_img.type === 'img';

		return (
            <div data-product-id={this.props.data.id} className="col-sm-4 col-xs-6 item price-discount category-sofa material-leather">
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
                            <a href="#productid1" className={`mfp-open ${isPreviewImg ? '' : 'f-icon'}`}>
                                {isPreviewImg ? <img style={{width: `${this.state.imgWidth}`, height: `${this.state.imgHeight}`}} src={this.props.data.preview_img.value} alt=""/> : <span>{String.fromCharCode(this.props.data.preview_img.value)}</span>}
                            </a>
                        </div>
                        <div className="text">
                            <h2 className="title h4"><a href="product.html">{this.props.data.name}<br/><small>{this.props.data.collectionName || this.props.data.manufacturerName}</small></a></h2>
                            {this.props.data.price_with_discount !== this.props.data.price ? <sub>{`${String.fromCharCode(8381)} ${(+this.props.data.price).toFixed(2)}`}</sub> : null}
                            <sup>{String.fromCharCode(8381)} <span className="price">{(+this.props.data.price_with_discount).toFixed(2)}</span></sup>
                        </div>
                    </div>
                </article>
                {this.state.isQuickView && <ProductQuickView data={this.props.data}/>}
            </div>
		);
	}
}