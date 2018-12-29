export default class ProductQuickView extends React.Component {
    componentDidMount() {
        $(`*[data-product-id='${this.props.data.id}'] .owl-product-gallery`).owlCarousel({
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
        return (
            <div className="popup-main mfp-hide" id="productid1">
                <div className="product">

                    <div className="popup-title">
                        <div className="h1 title">{this.props.data.name}<small>{this.props.data.collectionName || this.props.data.manufacturerName}</small></div>
                    </div>

                    <div className="owl-product-gallery">
                        {this.props.data.images.map((image) => {
                            return <div key={image.id} className="product__quick-view-img" style={{
                                backgroundImage: `url(${image.full})`
                            }}/>;
                        })}
                    </div>

                    <div className="popup-content">
                        <div className="product-info-wrapper">
                            <div className="row">

                                <div className="col-sm-6">
                                    {this.props.data.manufacturerName && <div className="info-box">
                                        <strong>Производитель&nbsp;</strong>
                                        <span>{this.props.data.manufacturerName}</span>
                                    </div>}
                                    {this.props.data.collectionName && <div className="info-box">
                                        <strong>Коллекция</strong>
                                        <span>{this.props.data.collectionName}</span>
                                    </div>}
                                </div>

                                <div className="col-sm-6">
                                    <div className="info-box">
                                        <strong>Доступные цвета</strong>
                                        <div className="product-colors clearfix">
                                            {this.props.data.colorValues.map((value) => {
                                                return <span key={value} className="color-btn" style={{
                                                    backgroundColor: `#${value}`
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
                                <span className="h3">{`${String.fromCharCode(8381)} ${(+this.props.data.price_with_discount).toFixed(2)}`}<small>{this.props.data.price_with_discount !== this.props.data.price ? `${String.fromCharCode(8381)} ${(+this.props.data.price).toFixed(2)}` : null}</small></span>
                            </div>
                        </div>
                        <div className="popup-cell">
                            <div className="popup-buttons">
                                <a href="javascript:void(0);"><span className="icon icon-eye"></span> <span className="hidden-xs">Узнать больше</span></a>
                                <a href="javascript:void(0);"><span className="icon icon-cart"></span> <span className="hidden-xs">Купить</span></a>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>
        );
    }
}