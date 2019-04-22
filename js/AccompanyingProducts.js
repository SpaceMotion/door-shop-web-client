import React from 'react';
import DataService from "./DataService";
import AccompanyingProduct from "./AccompanyingProduct";

export default class AccompanyingProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: new Map(),
            productsWithQuantity: []
        };
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.applyAccompanyingProduct = this.applyAccompanyingProduct.bind(this);
        this.jumpToCart = this.jumpToCart.bind(this);
        this.continueShopping = this.continueShopping.bind(this);
        this.getProductsWithQuantity = this.getProductsWithQuantity.bind(this);
    }

    componentDidMount() {
        this.openPopup();
        this.getProductsData(this.props.products);
    }

    onQuantityChange(id, value) {
        this.setState(state => {
            state.products.get(id).quantity = +value;
            state.productsWithQuantity = this.getProductsWithQuantity();
            return state;
        });    
    }

    getProductsWithQuantity() {
        return [...this.state.products.values()].filter(product => product.quantity > 0);
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
        this.setState(state => {
            state.products = new Map(products.map(product => ([
                product.id, {
                ...product,
                originalData: {
                    ...product
                },
                categories: product.categories.map(category => categories.get(category)),
                collection: product.collection && collections.get(product.collection),
                manufacturer: product.manufacturer && manufacturers.get(product.manufacturer),
                preview: {
                    type: product.images.length || categories.get(product.categories[0]).icon ? 'img' : 'char',
                    value: product.images[0] && (product.images[0].preview || product.images[0].full) || categories.get(product.categories[0]).icon || categories.get(product.categories[0]).icon_code
                },
                quantity: 1
            }])));
            state.productsWithQuantity = this.getProductsWithQuantity();
            return state;
        });
    }

    openPopup() {
        const accompanyingProducts = this;
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
                    accompanyingProducts.props.closePopup();
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
                        {products.map(product => <AccompanyingProduct key={product.id} {...product} onQuantityChange={this.onQuantityChange}/>)}
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