import { withRouter } from "react-router";

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
        const manufacturerName = data.manufacturer && data.manufacturer.name;
        const collectionName = data.collection && data.collection.name;
        const roubleIcon = String.fromCharCode(8381);

        return (
            <div data-product-id={this.props.data.id}>
                <div className="popup-main mfp-hide">
                    <div className="product">

                        <div className="popup-title">
                            <div className="h1 title">{this.props.data.name}<small>{collectionName || manufacturerName}</small></div>
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
                                        {manufacturerName && <div className="info-box">
                                            <strong>Производитель&nbsp;</strong>
                                            <span>{manufacturerName}</span>
                                        </div>}
                                        {collectionName && <div className="info-box">
                                            <strong>Коллекция</strong>
                                            <span>{collectionName}</span>
                                        </div>}
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="info-box">
                                            <strong>Доступные цвета</strong>
                                            <div className="product-colors clearfix">
                                                {Object.values(this.props.data.colors).map((color) => {
                                                    return <span key={color.value} className="color-btn" style={{
                                                        backgroundColor: `#${color.value}`
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
                                    <span className="h3">{`${roubleIcon} ${(+this.props.data.price_with_discount).toFixed(2)}`}<small>{this.props.data.price_with_discount !== this.props.data.price ? `${roubleIcon} ${(+this.props.data.price).toFixed(2)}` : null}</small></span>
                                </div>
                            </div>
                            <div className="popup-cell">
                                <div className="popup-buttons">
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                                        this.props.blockUpdateSearchParams(true);
                                        $.magnificPopup.close();
                                        this.props.history.push({
                                            pathname: `/products/${this.props.data.id}`,
                                            state: {
                                                data: this.props.data
                                            }
                                        });
                                    }}><span className="icon icon-eye"></span> <span className="hidden-xs">Узнать больше</span></a>
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                                        this.props.addCartProduct(this.props.data);
                                    }}><span className="icon icon-cart"></span> <span className="hidden-xs">Купить</span></a>
                                </div>
                            </div>
                        </div>

                    </div> 
                </div>
            </div>
        );
    }
});