import React from "react";
import {Link} from "react-router-dom";
import CONSTANTS from "./constants";

export default class Prouct extends React.Component {
    constructor(props) {
        super(props);

        this.onQuickViewRefClick = this.onQuickViewRefClick.bind(this);

        this.state = {
            imgWidth: 'auto',
            imgHeight: 'auto'
        };
        const data = this.props.data;
        const productImg = data.images[0];
        const categories = this.props.categories;
        this.previewImg = (productImg && {
            type: 'img',
            value: productImg.preview || productImg.full
        }) || categories.get(data.categories[0]).computedIconData;
    }

    componentDidMount() {
        const previewImg = this.previewImg;
        if (previewImg.type === 'img') {
            const img = new Image();
            img.src = previewImg.value;
            const maxSize = 300;
            const dimensions = this.getCorrectImgDimensions(img.width, img.height, maxSize);
            this.setState({
                imgWidth: dimensions[0],
                imgHeight: dimensions[1]
            });
        }
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

    onQuickViewRefClick() {
        this.props.updateSearchParams([{
            key: 'product',
            value: this.props.data.id,
            operationType: 'update'
        }]);        
    }

	render() {
        const isPreviewTypeOfImg = this.previewImg.type === 'img';
        const data = this.props.data;
        const id = data.id;

		return (
            <div data-product-id={id} className="col-sm-4 col-xs-6 item price-discount category-sofa material-leather">
                <article>
                    <div className="info">
                        <span>
                            <a href="javascript:void(0);" onClick={this.onQuickViewRefClick} className="mfp-open" data-title="Быстрый просмотр"><i className="icon icon-eye"></i></a>
                        </span>
                    </div>
                    <div className="btn btn-add" onClick={() => {
                        this.props.addCartProduct(data);
                    }}>
                        <i className="icon icon-cart"></i>
                    </div>
                    <div className="figure-grid">
                        {data.is_new && <span className="label label-warning">Новый</span>}                        
                        <div className="image">
                            <a href="javascript:void(0);" onClick={this.onQuickViewRefClick} className={`mfp-open ${isPreviewTypeOfImg ? '' : 'f-icon'}`}>
                                {isPreviewTypeOfImg ? <img style={{width: `${this.state.imgWidth}`, height: `${this.state.imgHeight}`}} src={this.previewImg.value} alt=""/> : <span>{String.fromCharCode(this.previewImg.value)}</span>}
                            </a>
                        </div>
                        <div className="text">
                            <h2 className="title h4"><Link to={`/products/${id}`}>{data.name}<br/><small>{data.collection && this.props.collections.get(data.collection).name || data.manufacturer && this.props.manufacturers.get(data.manufacturer).name}</small></Link></h2>
                            {data.price_with_discount !== data.price ? <sub>{`${CONSTANTS.ROUBLE_ICON} ${(+data.price).toFixed(2)}`}</sub> : null}
                            <sup>{CONSTANTS.ROUBLE_ICON} <span className="price">{(+data.price_with_discount).toFixed(2)}</span></sup>
                        </div>
                    </div>
                </article>
            </div>
		);
	}
}