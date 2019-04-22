import React from 'react';
import CONSTANTS from "./constants";

export default class AccompanyingProduct extends React.Component {
    constructor(props) {
        super(props);
        this.onQuantityChange = this.onQuantityChange.bind(this);
    }
    
    onQuantityChange(event) {
        this.props.onQuantityChange(this.props.id, event.target.value);
    }
    
    render() {
        const totalPrice = {
            price: (parseFloat(this.props.price) * this.props.quantity).toFixed(2),
            price_with_discount: (parseFloat(this.props.price_with_discount) * this.props.quantity).toFixed(2)
        };

        return (
            <div key={this.props.id} className="accompanying-products__item">
                <div className="accompanying-products__item-image f-icon" style={{backgroundImage: this.props.preview.type === 'img' ? `url(${this.props.preview.value})` : 'none'}}>
                    {this.props.preview.type === 'char' ? String.fromCharCode(this.props.preview.value) : ''}
                </div>                                                    
                <div className="accompanying-products__item-title">{this.props.name}</div>
                <div className="accompanying-products__item-manufacturer">{this.props.collection && this.props.collection.name || this.props.manufacturer && this.props.manufacturer.name}&nbsp;</div>
                <div className="accompanying-products__item-quantity-price-wrapper">
                    <input className="accompanying-products__item-quantity form-control" type="number" min="0" onChange={this.onQuantityChange} value={this.props.quantity} />
                    <div className="accompanying-products__item-price-wrapper">
                        <span className="accompanying-products__item-price accompanying-products__item-price_type_with-discount">{CONSTANTS.ROUBLE_ICON}&nbsp;{totalPrice.price_with_discount}</span>
                        {totalPrice.price_with_discount !== totalPrice.price && <span className="accompanying-products__item-price accompanying-products__item-price_type_without-discount">{CONSTANTS.ROUBLE_ICON}&nbsp;{totalPrice.price}</span>}
                    </div>
                </div>
            </div>    
        );
    }
}