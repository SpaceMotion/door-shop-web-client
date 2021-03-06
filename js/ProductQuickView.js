import React from "react";
import { withRouter } from "react-router";
import CONSTANTS from "./constants";

export default withRouter(class ProductQuickView extends React.Component {
    componentDidMount() {
        $(`*[data-product-id="${this.props.data.id}"] .owl-product-gallery`).owlCarousel({
            autoHeight: true,
            slideSpeed: 800,
            navigation: true,
            navigationText: [
                '<span class="icon icon-chevron-left"></span>',
                '<span class="icon icon-chevron-right"></span>'
            ],
            pagination: true,
            items: 1,
            singleItem: true
        });
    }

    render() {
        const data = this.props.data;
        const id = data.id;
        const manufacturer = this.props.manufacturers.get(data.manufacturer);
        const manufacturerName = manufacturer && manufacturer.name;
        const collection = this.props.collections.get(data.collection);
        const collectionName = collection && collection.name;
        const colors = this.props.colors;
        const productColors = [...new Set(data.images.map(image => image.color).filter(id => id).concat(data.colors))];

        return (
            <div data-product-id={id}>
                <div className="popup-main mfp-hide">
                    <div className="product">

                        <div className="popup-title">
                            <div className="h1 title">{data.name}<small>{collectionName || manufacturerName}</small></div>
                        </div>

                        <div className="owl-product-gallery">
                            {data.images.map(image => <div key={image.id} className="product__quick-view-img" style={{
                                    backgroundImage: `url(${image.full})`
                            }}/>)}
                        </div>

                        <div className="popup-content">
                            <div className="product-info-wrapper">
                                <div className="row">

                                    <div className="col-sm-6">
                                        {manufacturerName && <div className="info-box">
                                            <strong>??????????????????????????&nbsp;</strong>
                                            <span>{manufacturerName}</span>
                                        </div>}
                                        {collectionName && <div className="info-box">
                                            <strong>??????????????????</strong>
                                            <span>{collectionName}</span>
                                        </div>}
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="info-box">
                                            <strong>?????????????????? ??????????</strong>
                                            <div className="product-colors clearfix">
                                                {productColors.map(colorId => {
                                                    const position = data.images.findIndex(image => image.color === colorId);
                                                    const isImage = position > -1;
                                                    return <span key={colorId} className="color-btn" style={{
                                                        backgroundColor: `#${colors.get(colorId).value}`,
                                                        cursor: isImage ? 'pointer' : 'default'
                                                    }} onClick={() => {
                                                        if (isImage) {
                                                            $(".popup-main .owl-product-gallery").data('owlCarousel').goTo(position);
                                                        }
                                                    }}></span>;
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="popup-table">
                            <div className="popup-cell">
                                <div className="price">
                                    <span className="h3">{`${CONSTANTS.ROUBLE_ICON} ${(+data.price_with_discount).toFixed(2)}`}<small>{data.price_with_discount !== data.price ? `${CONSTANTS.ROUBLE_ICON} ${(+data.price).toFixed(2)}` : null}</small></span>
                                </div>
                            </div>
                            <div className="popup-cell">
                                <div className="popup-buttons">
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                                        this.props.blockUpdateSearchParams(true);
                                        this.props.history.push({
                                            pathname: `/products/${id}`,
                                            state: {data}
                                        });
                                    }}><span className="icon icon-eye"></span> <span className="hidden-xs">???????????? ????????????</span></a>
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                                        this.props.addCartProduct(data);
                                    }}><span className="icon icon-cart"></span> <span className="hidden-xs">????????????</span></a>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
});
