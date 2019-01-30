import {Link} from "react-router-dom";
import Utils from "./Utils";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.roubleIcon = String.fromCharCode(8381);
    }

    render() {
        const products = this.props.data.storage.products;
        const cartLocal = this.props.data.local;
        const productsLocal = cartLocal.products;
        const manufacturers = this.props.manufacturers;
        const collections = this.props.collections;

        return (
            <div className="cart-wrapper">
                {cartLocal.processing ? <div className="cart-preloader"></div> : <div className="checkout">
                    <div className="clearfix">
                        <div className="row cart-wrapper__items-container">
                            {Object.keys(products).map(productId => {
                                const quantity = products[productId].quantity;
                                const product = productsLocal[productId];
                                const productDetailURL = `/products/${productId}`;
                                const previewImgType = /^http/.test(product.preview) ? 'img' : 'char';
                                const totalPrice = productsLocal[productId].totalPrice;

                                return (
                                    <div key={productId} className="cart-block cart-block-item clearfix">
                                        <div className="image">
                                            <Link to={productDetailURL}>
                                                <div className="f-icon" style={{backgroundImage: previewImgType === 'img' ? `url(${product.preview})` : 'none'}}>
                                                    {previewImgType === 'char' ? String.fromCharCode(product.preview) : ''}
                                                </div>                                                    
                                            </Link>

                                            <div className="title">
                                                <div>
                                                    <Link to={productDetailURL}>{product.name}</Link>
                                                </div>
                                                <small>{product.collection && collections.get(product.collection).name || product.manufacturer && manufacturers.get(product.manufacturer).name}&nbsp;</small>
                                            </div>
                                        </div>
                                        <div className="cart-wrapper__row cart-wrapper__row_type_quantity-price">
                                            <div className="quantity">
                                                <input type="number" min="1" onChange={event => {
                                                    this.props.onCartProductQuantityChanged(productId, Math.abs(Utils.parseValueToInt(event.target.value, quantity)));
                                                }} value={quantity} className="form-control form-quantity" />
                                            </div>
                                            <div className="price">
                                                <span className="final">{this.roubleIcon}&nbsp;{totalPrice.price_with_discount}</span>
                                                {totalPrice.price_with_discount !== totalPrice.price && <span className="discount">{this.roubleIcon}&nbsp;{totalPrice.price}</span>}
                                            </div>
                                        </div>
                                        <span className="icon icon-cross icon-delete" onClick={() => {
                                            this.props.removeCartProduct(productId);
                                        }}></span>
                                    </div>    
                                );
                            })}
                        </div>

                        {cartLocal.discountPercent > 0 && (
                            <div>
                                <hr />
                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer clearfix">
                                        <div>
                                            <strong>Скидка {cartLocal.discountPercent}%</strong>
                                        </div>
                                        <div>
                                            <span>{`${this.roubleIcon} ${cartLocal.discountValue}`}</span>
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
                                    <div className="h4 title">{`${this.roubleIcon} ${cartLocal.totalSumDiscount}`}</div>
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
                                    <Link to="/order" className="btn btn-main"><span className="icon icon-cart"></span> Оформить заказ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        );
    }
}