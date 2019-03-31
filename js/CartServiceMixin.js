import CONSTANTS from "./constants";
import DataService from "./DataService";

export default superclass => class extends superclass {
    constructor(props) {
        super(props);

        this.getCartData = this.getCartData.bind(this);
        this.setCartData = this.setCartData.bind(this);
        this.addCartProduct = this.addCartProduct.bind(this);
        this.removeCartProduct = this.removeCartProduct.bind(this);
        this.updateCartProductsIfExpired = this.updateCartProductsIfExpired.bind(this);
        this.onCartProductQuantityChanged = this.onCartProductQuantityChanged.bind(this);
        this.recalculateCartInfo = this.recalculateCartInfo.bind(this);
        this.openCartHandler = this.openCartHandler.bind(this);
        this.closeCartHandler = this.closeCartHandler.bind(this);
        this.clearCartActionInfo = this.clearCartActionInfo.bind(this);
        this.toggleCartHandler = this.toggleCartHandler.bind(this);
        this.updateCartProducts = this.updateCartProducts.bind(this);
        
        this.state = {};
        this.initCartData();
    }

    initCartData() {
        const cart = {
            local: {
                products: {},
                action: null,
                processing: true,
                cachedProductIds: []
            },
            storage: JSON.parse(window.localStorage.getItem('cart')) || {
                products: {},
                timeStamp: null
            }
        };
        window.localStorage.setItem('cart', JSON.stringify(cart.storage));
        this.state.cart = cart;    
        this.updateCartProducts();
    }

    getCartData() {
        const cart = this.state.cart;
        cart.storage = JSON.parse(window.localStorage.getItem('cart'));
        return cart;
    }

    setCartData(cart, productIds) {
        window.localStorage.setItem('cart', JSON.stringify(cart.storage));
        this.recalculateCartInfo(cart, productIds);
    }

	addCartProduct(data, quantity = 1, isAction = true) {
        const cart = this.getCartData();
        const products = cart.storage.products;
        const productId = data.id;
        const exists = !!products[productId];

        if (isAction) {
            cart.local.action = {
                product: {
                    id: productId,
                    name: data.name,
                    exists
                },
                type: 'add'
            };    
        }
        if (data.accompanying_products.length && !exists) {
            this.setState({
                accompanyingProduct: {
                    is: true,
                    productIds: data.accompanying_products
                }
            });    
        } else {
            $.magnificPopup.close();
        }
        if (!exists) {
            products[productId] = {
                quantity
            };
            cart.local.products[productId] = {
                ...data,
                totalPrice: {}
            };
            if (cart.local.processing) {
                cart.local.cachedProductIds.push(productId);
            }
        }
        this.setCartData(cart, [productId]);
    }
    
    removeCartProduct(id = 'all') {
        const cart = this.getCartData();
        if (id === 'all') {
            cart.storage.products = {};
            cart.local.products = {};
        } else {
            delete cart.storage.products[id];
            delete cart.local.products[id];    
        }
        if (!Object.keys(cart.storage.products).length) {
            this.closeCartHandler();
        }
		this.setCartData(cart);
    }

    updateCartProductsIfExpired() {
        const cart = this.getCartData();
        if (!cart.local.processing) {
            const currentTime = (new Date()).valueOf();
            const timeStamp = cart.storage.timeStamp;

            if (!timeStamp || currentTime - timeStamp > CONSTANTS.CART_DATA_EXPIRE_TIME) {
                this.setState(state => {
                    state.cart.local.processing = true;
                    return state;
                }, this.updateCartProducts);
            }
        }
    }

    updateCartProducts() {
        DataService.getComplex(data => {    
            const cart = this.getCartData();
            const products = cart.storage.products;
            const productIds = Object.keys(products);
            const productsLocal = cart.local.products;
            const cachedProductIds = cart.local.cachedProductIds;
            const aliveIds = [];
            cart.storage.timeStamp = (new Date()).valueOf();
            cart.local.processing = false;            

            data.forEach(product => {
                const id = product && product.id;

                if (product) {
                    aliveIds.push(id);
                    productsLocal[id] = {
                        ...productsLocal[id],
                        ...product
                    };
                }
            });

            for (let i = 0, len = productIds.length; i < len; i++) {
                productIds[i] = parseInt(productIds[i]);
                if (cachedProductIds.indexOf(productIds[i]) < 0 && aliveIds.indexOf(productIds[i]) < 0) {
                    delete products[productIds[i]];
                    delete productsLocal[productIds[i]];
                }
            }
            cart.local.cachedProductIds = [];
            this.cartInitialized = true;
            this.setCartData(cart, Object.keys(products));
        }, Object.keys(this.state.cart.storage.products).map(id => ({
            name: 'getProducts',
            options: {id}
        })));    
    }

    onCartProductQuantityChanged(id, value) {
        const cart = this.getCartData();
        cart.storage.products[id].quantity = value;
        this.setCartData(cart, [id]);
    }

    recalculateCartInfo(cart, productIds = []) {
        const categories = this.props.categories;
        for (let i = 0, len = productIds.length; i < len; i++) {
            const productQuantity = cart.storage.products[productIds[i]].quantity;
            const localProduct = cart.local.products[productIds[i]];
            const category = categories.get(localProduct.categories[0]);
            const previewImg = localProduct.images[0];

            localProduct.totalPrice = localProduct.totalPrice || {};
            localProduct.totalPrice.price_with_discount = (parseFloat(localProduct.price_with_discount) * productQuantity).toFixed(2);
            localProduct.totalPrice.price = (parseFloat(localProduct.price) * productQuantity).toFixed(2);
            localProduct.preview = previewImg && previewImg.full || category.icon || category.icon_code;
        }

        productIds = Object.keys(cart.storage.products);
        let totalSum = 0;
        let totalSumDiscount = 0;
        for (let i = 0, len = productIds.length; i < len; i++) {
            const localProduct = cart.local.products[productIds[i]];
            totalSum += parseFloat(localProduct.totalPrice.price);
            totalSumDiscount += parseFloat(localProduct.totalPrice.price_with_discount);
        }
		cart.local.totalSumDiscount = totalSumDiscount.toFixed(2);
		cart.local.discountValue = (totalSum - totalSumDiscount).toFixed(2);
        cart.local.discountPercent = cart.local.discountValue > 0 ? Math.floor(cart.local.discountValue / totalSum * 100) : 0;
        this.setState({cart});
    }

    openCartHandler() {
        const cartWrapper = $('.cart-wrapper');
        const cartOpenRef = $('.open-cart');

        if (!cartWrapper.hasClass('open')) {
            const cart = this.getCartData();

            if (Object.keys(cart.storage.products).length) {
                window.dispatchEvent(new CustomEvent('closeSearch'));
                window.dispatchEvent(new CustomEvent('closeMenuMobile'));
                cartWrapper.addClass('open');	
                cartOpenRef.addClass('open');
                this.updateCartProductsIfExpired();										    
            }
        }    
    }

    closeCartHandler() {
        const cartWrapper = $('.cart-wrapper');
        const cartOpenRef = $('.open-cart');

        if (cartWrapper.hasClass('open')) {
            cartWrapper.removeClass('open');
            cartOpenRef.removeClass('open');
        }    
    }

    toggleCartHandler() {
        const cartWrapper = $('.cart-wrapper');
        const methodName = cartWrapper.hasClass('open') ? 'closeCartHandler' : 'openCartHandler';
        this[methodName]();
    }

    clearCartActionInfo() {
        this.setState(state => {
            state.cart.local.action = null;
            return state;
        });
    }
}