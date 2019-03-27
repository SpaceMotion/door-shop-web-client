import React from "react";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";
import Utils from "./Utils";
import DataService from './DataService';
import CONSTANTS from "./constants";

export default class OrderPage extends ReloadPageMixin(React.Component) {
    constructor(props) {
        super(props);

        this.closeInfoPopup = this.closeInfoPopup.bind(this);
        this.onProceedButtonClick = this.onProceedButtonClick.bind(this);

        this.showPreLoader();
        this.state = {
            formData: {
                phone: {
                    value: "",
                    error: false
                }
            },
            proceedButton: {
                blocked: false
            },
            infoPopup: {
                active: false,
                message: ""
            },
            requestProcessing: false
        };
        window.addEventListener('click', this.closeInfoPopup);
    }
    
    componentWillUnmount() {
        window.removeEventListener('click', this.closeInfoPopup);        
    }
    
    closeInfoPopup() {
        this.setState(state => {
            state.infoPopup.active = false;
            return state;
        });    
    }
    
    onProceedButtonClick(event) {
        const products = this.props.cart.storage.products;
        const productIds = Object.keys(products);

        event.preventDefault();
        event.stopPropagation();
        if (productIds.length === 0 || this.state.proceedButton.blocked || this.state.requestProcessing) {
            return false;
        }
        this.setState({
            requestProcessing: true
        });
        DataService.postOrder((status, data) => {
            let message;

            if (status === 400) {
                const nonFieldErrors = data.non_field_errors;
                const bull = String.fromCharCode(8226);
                const dash = String.fromCharCode(8211);

                delete data.non_field_errors;
                message = "К сожалению, в процессе оформления заказа возникли следующие ошибки:\n";
                for (let field in data) {
                    const fieldErrors = data[field];

                    message += `\t${bull} ${field}\n`;
                    for (let i = 0, len = fieldErrors.length; i < len; i++) {
                        message += `\t\t${dash} ${fieldErrors[i]}\n`;
                    }
                }

                if (nonFieldErrors) {
                    for (let i = 0, len = nonFieldErrors.length; i < len; i++) {
                        message += `\n\t${dash} ${nonFieldErrors[i]}`;
                    }
                }
            } else if (status === 201) {
                message = "Спасибо за заказ!\n\nВ ближайшее время с вами свяжется наш менеджер для уточнения деталей заказа.";
                this.props.removeCartProduct();
            } else {
                message = "Внутренняя ошибка сервера";
            }
            this.setState(state => {
                state.infoPopup.active = true;
                state.infoPopup.message = message;
                state.proceedButton.blocked = status === 201;
                state.requestProcessing = false;
                state.formData.phone.error = status === 400 && data.phone;
                return state;
            });
        }, {
            phone: this.state.formData.phone.value,
            products: productIds.map(productId => ({
                product: productId,
                count: products[productId].quantity
            }))
        });
    }
    
    render() {
        const products = this.props.cart.storage.products;
        const productIds = Object.keys(products);
        const isCartEmpty = productIds.length === 0;
        const cartLocal = this.props.cart.local;
        const productsLocal = cartLocal.products;
        const manufacturers = this.props.manufacturers;
        const collections = this.props.collections;
        const cartInitialized = this.props.cartInitialized;
        const infoPopup = this.state.infoPopup;
        const requestProcessing = this.state.requestProcessing;

        if (cartInitialized) {
            this.hidePreLoader();
        }

        return cartInitialized ? (
            <div>
                <div className={`checkout__info-popup ${infoPopup.active ? 'checkout__info-popup_state_showed' : ''}`} onClick={event => {
                    event.stopPropagation();
                }}>
                    <div className="checkout__info-popup-close-control-wrapper">
                        <div className="checkout__info-popup-close-control fa fa-window-close" onClick={this.closeInfoPopup}></div>
                    </div>
                    <div className="checkout__info-popup-message">{this.state.infoPopup.message}</div>
                </div>

                <section className="main-header" style={{backgroundImage: 'url(%URI_PREFIX%assets/images/gallery-2.jpg)'}}>
                    <header>
                        <div className="container text-center">
                            <h2 className="h2 title">Оформление заказа</h2>
                        </div>
                    </header>
                </section>
        
                <section className="checkout">
                    <div className="container">
                        {isCartEmpty ? (
                            <div className="checkout__message-no-products">
                                <h2>В корзине нет товаров</h2>
                            </div>
                        ) : (
                            <div className="cart-wrapper">
            
                                <div className="cart-block cart-block-header clearfix">
                                    <div>
                                        <span>Товар</span>
                                    </div>
                                    <div>
                                        <span>&nbsp;</span>
                                    </div>
                                    <div>
                                        <span>Количество</span>
                                    </div>
                                    <div className="text-right">
                                        <span>Цена</span>
                                    </div>
                                </div>
            
                                <div className="clearfix">
                                    {productIds.map(productId => {
                                        const quantity = products[productId].quantity;
                                        const product = productsLocal[productId];
                                        const productDetailUrl = `/products/${productId}`;
                                        const previewImgType = /^http/.test(product.preview) ? 'img' : 'char';
                                        const totalPrice = product.totalPrice;

                                        return (
                                            <div key={productId} className="cart-block cart-block-item clearfix">
                                                <div className="image">
                                                    <Link to={productDetailUrl}>
                                                        <div className="f-icon checkout__product-image" style={{backgroundImage: previewImgType === 'img' ? `url(${product.preview})` : 'none'}}>
                                                            {previewImgType === 'char' ? String.fromCharCode(product.preview) : ''}
                                                        </div>                                                
                                                    </Link>
                                                </div>
                                                <div className="title">
                                                    <div className="h4"><Link to={productDetailUrl}>{product.name}</Link></div>
                                                    <div>{product.collection && collections.get(product.collection).name || product.manufacturer && manufacturers.get(product.manufacturer).name}</div>
                                                </div>
                                                <div className="quantity">
                                                    <input type="number" min="1" value={quantity} onChange={event => {
                                                        this.props.onCartProductQuantityChanged(productId, Math.abs(Utils.parseValueToInt(event.target.value, quantity)));
                                                    }} className="form-control form-quantity" />
                                                </div>
                                                <div className="price">
                                                    <span className="final h3">{`${CONSTANTS.ROUBLE_ICON} ${totalPrice.price_with_discount}`}</span>
                                                    {totalPrice.price_with_discount !== totalPrice.price && <span className="discount">{`${CONSTANTS.ROUBLE_ICON} ${totalPrice.price}`}</span>}
                                                </div>
                                                <span className="icon icon-cross icon-delete" onClick={() => {
                                                    this.props.removeCartProduct(productId);
                                                }}></span>
                                            </div>                
                                        );
                                    })}
                                </div>
            
                                {cartLocal.discountPercent > 0 && (
                                    <div className="clearfix">
                                        <div className="cart-block cart-block-footer clearfix">
                                            <div>
                                                <strong>Скидка {cartLocal.discountPercent}%</strong>
                                            </div>
                                            <div>
                                                <span>{`${CONSTANTS.ROUBLE_ICON} ${cartLocal.discountValue}`}</span>
                                            </div>
                                        </div>                
                                    </div>
                                )}
            
                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer cart-block-footer-price clearfix">
                                        <div>
                                            <strong>К оплате</strong>
                                        </div>
                                        <div>
                                            <div className="h2 title checkout__total-price">{`${CONSTANTS.ROUBLE_ICON} ${cartLocal.totalSumDiscount}`}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="clearfix">
                                    <div className="cart-block cart-block-footer cart-block-footer-phone clearfix">
                                        <div className="checkout__phone-label">
                                            <strong>Контактный телефон: </strong>
                                        </div>
                                        <div className="checkout__phone-field-container">
                                            <div>
                                                <input type="tel" maxLength="20" className="form-control" value={this.state.formData.phone.value} onChange={event => {
                                                    const value = event.target.value;
                                                    this.setState(state => {
                                                        state.formData.phone.value = value;
                                                        return state;
                                                    });
                                                }} onFocus={() => {
                                                    this.setState(state => {
                                                        state.formData.phone.error = false;
                                                        return state;
                                                    });
                                                }}/>
                                            </div>
                                            <div className={`checkout__error-notification-icon  ${this.state.formData.phone.error ? 'fa fa-exclamation-circle' : ''}`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
        
                        <div className="clearfix">
                            <div className="row checkout__actions">
                                <div className="col-xs-6">
                                    <Link to="/products" className="btn btn-clean-dark"><span className="icon icon-chevron-left"></span> Продолжить покупки</Link>
                                </div>
                                <div className="col-xs-6 text-right">
                                    <a href="#" onClick={this.onProceedButtonClick} className={`btn btn-main checkout__action checkout__action_type_proceed ${requestProcessing ? 'checkout__make-order_state_processing' : ''} ${isCartEmpty ? 'checkout__make-order_state_inactive' : ''}`}>
                                        <span><span className="icon icon-cart"></span> {requestProcessing ? "Обрабатывается..." : "Завершить оформление"}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
        
                    </div>
        
                </section>    
            </div>
        ) : null;
    }
}