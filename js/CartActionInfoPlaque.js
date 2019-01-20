import CONSTANTS from "./constants";

export default class CartActionInfoPlaque extends React.Component {
    constructor(props) {
        super(props);

        this.openClassName = 'cart-info-plaque_state_opened';
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.togglePlaque(true);
        });
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer);
    }

    togglePlaque(state) {
        const plaque = $('.cart-info-plaque');
        const methodName = state ? 'addClass' : 'removeClass';
        plaque[methodName](this.openClassName);
        if (!state) {
            setTimeout(() => {
                this.props.updateState(null);
            }, 500);
        }
    }

    render() {
        const message = this.props.message;
        const productName = message.product.name;
        
        window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.togglePlaque(false);
        }, CONSTANTS.CART_INFO_PLAQUE_HIDE_DELAY);

        return (
            <div className="cart-info-plaque">
                <div className="cart-info-plaque__message">{message.exists ? `Товар "${productName}" уже в корзине` : `Товар "${productName}" добавлен в корзину`}</div>
                <div className="cart-info-plaque__action cart-info-plaque__action_type_show-cart btn" onClick={() => {
                    $('.open-cart').addClass('open');
                    $('.cart-wrapper').addClass('open');	
                    this.togglePlaque(false);
                }}>Открыть корзину</div>
            </div>
        );
    }
}