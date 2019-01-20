import {Link} from "react-router-dom";
import Utils from "./Utils";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.roubleIcon = String.fromCharCode(8381);
    }

    render() {
        const products = this.props.data.items;

        return (
            <div className="cart-wrapper">
                <div className="checkout">
                    <div className="clearfix">
                        <div className="row cart-wrapper__items-container">
                            {Object.keys(products).map(productId => {
                                const product = products[productId];
                                const productDetailURL = `/products/${productId}`;
                                let previewImg = product.images[0];
                                previewImg = previewImg && {
                                    type: 'img',
                                    value: previewImg.preview || previewImg.full
                                } || product.categories[Object.keys(product.categories)[0]].computedIconData;

                                return (
                                    <div key={productId} className="cart-block cart-block-item clearfix">
                                        <div className="image">
                                            <Link to={productDetailURL}>
                                                <div className="f-icon" style={{backgroundImage: previewImg.type === 'img' ? `url(${previewImg.value})` : 'none'}}>
                                                    {previewImg.type === 'char' ? String.fromCharCode(previewImg.value) : ''}
                                                </div>                                                    
                                            </Link>

                                            <div className="title">
                                                <div>
                                                    <Link to={productDetailURL}>{product.name}</Link>
                                                </div>
                                                <small>{product.collection && product.collection.name || product.manufacturer && product.manufacturer.name}&nbsp;</small>
                                            </div>
                                        </div>
                                        <div className="cart-wrapper__row cart-wrapper__row_type_quantity-price">
                                            <div className="quantity">
                                                <input type="number" min="1" onChange={(event) => {
                                                    product.quantity = Math.abs(Utils.parseValueToInt(event.target.value, product.quantity));
                                                    this.props.setCartProduct(product);
                                                }} value={product.quantity} className="form-control form-quantity" />
                                            </div>
                                            <div className="price">
                                                <span className="final">{this.roubleIcon}&nbsp;{product.computedPrice.price_with_discount}</span>
                                                {product.computedPrice.price_with_discount !== product.computedPrice.price && <span className="discount">{this.roubleIcon}&nbsp;{product.computedPrice.price}</span>}
                                            </div>
                                        </div>
                                        <span className="icon icon-cross icon-delete" onClick={() => {
                                            this.props.removeCartProduct(productId);
                                        }}></span>
                                    </div>    
                                );
                            })}
                        </div>

                        {this.props.data.discountPercent > 0 && (
                            <div>
                                <hr />
                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>Скидка {this.props.data.discountPercent}%</strong>
                                        </div>
                                        <div>
                                            <span>{`${this.roubleIcon} ${this.props.data.discountValue}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <hr />

                        <div className="clearfix">
                            <div className="cart-block cart-block-footer clearfix">
                                <div>
                                    <strong>К оплате</strong>
                                </div>
                                <div>
                                    <div className="h4 title">{`${this.roubleIcon} ${this.props.data.totalSumDiscount}`}</div>
                                </div>
                            </div>
                        </div>

                        <div className="cart-block-buttons clearfix">
                            <div className="cart-block-buttons__container">
                                <div>
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                        		        window.dispatchEvent(new CustomEvent('closeCart'));
                                    }} className="btn btn-clean-dark">Продолжить покупки</a>
                                </div>
                                <div className="text-right">
                                    <a href="#" onClick={event => {
                                        event.preventDefault();
                                    }} className="btn btn-main"><span className="icon icon-cart"></span> Оформить заказ</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}