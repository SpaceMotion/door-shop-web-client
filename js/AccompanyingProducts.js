import React from 'react';
import DataService from "./DataService";
import CONSTANTS from "./constants";

export default class AccompanyingProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: new Map()
        };
        this.onQuantityChanged = this.onQuantityChanged.bind(this);
        this.applyAccompanyingProduct = this.applyAccompanyingProduct.bind(this);
        this.jumpToCart = this.jumpToCart.bind(this);
        this.continueShopping = this.continueShopping.bind(this);
    }

    componentDidMount() {
        const products = this.props.products;
        this.openPopup();
        this.getProductsData(products);
    }

    onQuantityChanged(event) {
        const value = +event.target.value;
        const productId = +event.target.dataset.productId;
        this.setState(state => {
            state.products.get(productId).quantity = value;
            state.productsWithQuantity = [...state.products.values()].filter(product => product.quantity > 0);
            return state;
        });    
    }

    applyAccompanyingProduct(event) {
        event.preventDefault();
        if (this.state.productsWithQuantity.length) {
            const cartStorageProducts = this.props.cart.storage.products;
            this.state.productsWithQuantity.forEach(product => {
                const currentProduct = cartStorageProducts[product.id];
                if (currentProduct) {
                    this.props.onCartProductQuantityChanged(product.id, currentProduct.quantity + product.quantity);
                } else {
                    this.props.addCartProduct(product.originalData, product.quantity, false);
                }
            });
            this.continueShopping();    
        }
    }
    
    continueShopping(event) {
        if (event) {
            event.preventDefault();
        }
        this.closePopup();
    }

    jumpToCart(event) {
        event.preventDefault();
        this.continueShopping();
        this.props.openCartHandler();
    }

    getProductsData(productIds) {
        DataService.getComplex(products => {
            this.setProductsData(products);
        }, productIds.map(productId => ({
            name: 'getProducts',
            options: {
                id: productId
            }
        })));
    }

    setProductsData(products) {
        const categories = this.props.categories;
        const collections = this.props.collections;
        const manufacturers = this.props.manufacturers;
        this.setState({
            products: new Map(products.map(product => ([
                product.id, {
                ...product,
                originalData: {
                    ...product
                },
                categories: product.categories.map(category => categories.get(category)),
                collection: product.collection && collections.get(product.collection),
                manufacturer: product.manufacturer && manufacturers.get(product.manufacturer),
                preview: {
                    type: product.images.length || product.categories[0].icon ? 'img' : 'char',
                    value: product.images[0] && (product.images[0].preview || product.images[0].full) || categories.get(product.categories[0]).icon || categories.get(product.categories[0]).icon_code
                },
                quantity: 0
            }])))
        });
    }

    openPopup() {
        const accompanyingProduct = this;
        $.magnificPopup.open({
            items: {
                src: '.accompanying-products'
            },
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
                afterClose: () => {
                    accompanyingProduct.props.closePopup();
                }
            }
        });
    }

    closePopup() {
        $.magnificPopup.close();
    }

    render() {
        if (!this.props.products.length) {
            return null;
        }
        const products = [...this.state.products.values()];
        return (
            <div>
                <div className="accompanying-products mfp-hide">
                    <div className='accompanying-products__header h1'>Сопутствующие товары</div>
                    <div className='accompanying-products__items'>
                        {products.map(product => {
                            const totalPrice = {
                                price: (parseFloat(product.price) * product.quantity).toFixed(2),
                                price_with_discount: (parseFloat(product.price_with_discount) * product.quantity).toFixed(2)
                            };

                            return (
                                <div key={product.id} className="accompanying-products__item">
                                    <div className="accompanying-products__item-image f-icon" style={{backgroundImage: product.preview.type === 'img' ? `url(${product.preview.value})` : 'none'}}>
                                        {product.preview.type === 'char' ? String.fromCharCode(product.preview.value) : ''}
                                    </div>                                                    
                                    <div className="accompanying-products__item-title">{product.name}</div>
                                    <div className="accompanying-products__item-manufacturer">{product.collection && product.collection.name || product.manufacturer && product.manufacturer.name}&nbsp;</div>
                                    <div className="accompanying-products__item-quantity-price-wrapper">
                                        <input className="accompanying-products__item-quantity form-control" type="number" min="0" onChange={this.onQuantityChanged} data-product-id={product.id} value={product.quantity} />
                                        <div className="accompanying-products__item-price-wrapper">
                                            <span className="accompanying-products__item-price accompanying-products__item-price_type_with-discount">{CONSTANTS.ROUBLE_ICON}&nbsp;{totalPrice.price_with_discount}</span>
                                            {totalPrice.price_with_discount !== totalPrice.price && <span className="accompanying-products__item-price accompanying-products__item-price_type_without-discount">{CONSTANTS.ROUBLE_ICON}&nbsp;{totalPrice.price}</span>}
                                        </div>
                                    </div>
                                </div>    
                            );
                        })}
                    </div>
                    <div className='accompanying-products__actions'>
                        <a href='#' className={`accompanying-products__action accompanying-products__action_type_apply ${this.state.productsWithQuantity.length ? '' : 'accompanying-products__action_state_disabled'}`} onClick={this.applyAccompanyingProduct}>Купить</a>
                        <a href='#' className='accompanying-products__action accompanying-products__action_type_to-cart' onClick={this.jumpToCart}>Перейти в корзину</a>
                        <a href='#' className='accompanying-products__action accompanying-products__action_type_continue-shopping' onClick={this.continueShopping}>Продолжить покупки</a>
                    </div>
                </div>
            </div>
        );
    }
}