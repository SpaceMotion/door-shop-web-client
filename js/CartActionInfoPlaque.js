import CONSTANTS from "./constants";

export default class CartActionInfoPlaque extends React.Component {
    constructor(props) {
        super(props);

        this.dropPlaque = this.dropPlaque.bind(this);

        this.openClassName = 'cart-info-plaque_state_opened';
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.togglePlaque(true);
        });
    }

    componentWillUnmount() {
        this.setTimer(false);
    }

    togglePlaque(state) {
        const plaque = $('.cart-info-plaque');
        const methodName = state ? 'addClass' : 'removeClass';
        plaque[methodName](this.openClassName);
    }
    
    setTimer(state) {
        if (state) {
            this.timer = setTimeout(this.dropPlaque, CONSTANTS.CART_INFO_PLAQUE_HIDE_DELAY);    
        } else {
            window.clearTimeout(this.timer);
        }
    }

    dropPlaque() {
        this.togglePlaque(false);
        setTimeout(() => {
            this.props.clearCartActionInfo();
        }, CONSTANTS.CART_ACTION_INFO_PLAQUE_ANIMATION_TIME);
    }

    render() {
        const action = this.props.action;
        const productName = action.product.name;
        
        if (action.product.id !== this.lastActionProductId) {
            this.setTimer(false);
            this.togglePlaque(true);
            this.setTimer(true);
        }
        this.lastActionProductId = action.product.id;

        return (
            <div className="cart-info-plaque" onMouseEnter={() => {
                this.setTimer(false);
            }} onMouseLeave={() => {
                this.setTimer(true);
            }}>
                <div className="cart-info-plaque__message">{action.product.exists ? `Товар "${productName}" уже в корзине` : `Товар "${productName}" добавлен в корзину`}</div>
                <div className="cart-info-plaque__action cart-info-plaque__action_type_show-cart btn" onClick={() => {
                    this.props.openCartHandler();
                    this.dropPlaque();
                }}>Открыть корзину</div>
            </div>
        );
    }
}