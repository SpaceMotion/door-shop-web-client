import React from "react";
import CONSTANTS from "./constants";
import DataService from "./DataService";
import {Link} from "react-router-dom";

export default class ProductsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.onInputValueChanged = this.onInputValueChanged.bind(this);
        this.setUpTimer = this.setUpTimer.bind(this);
        this.lastRequestId = 0;
        this.state = {
            products: [],
            searchText: ''
        };
    }

    onInputValueChanged(event) {
        const value = event.target.value;
        this.setState({
            searchText: value
        });
        if (value.trim().length) {
            this.setUpTimer();                
        } else {
            window.clearTimeout(this.timer);
            this.setState({
                products: []
            });
        }
    }

    setUpTimer() {
        const searchText = this.state.searchText.trim();
        this.lastRequestId++;
        const requestId = this.lastRequestId;
        window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            DataService.getSearchProducts(data => {
                if (this.lastRequestId === requestId) {
                    this.setState({
                        products: data.results
                    });
                }
            }, {
                search: searchText
            });                    
        }, CONSTANTS.DELAY_QUERY_PRODUCTS_SEARCH);    
    }

    render() {
        const collections = this.props.collections;
        const manufacturers = this.props.manufacturers;

        return (
            <div className="search-wrapper">
                <input className="form-control" placeholder="Что Вы ищете?" onChange={this.onInputValueChanged} value={this.state.searchText} />

                <div className="search-results">
                    <div className="search-result-items">
                        <div className="title h4">Товары</div>
                        <ul>
                            {this.state.products.map(product => (
                                <li key={product.id}>
                                    <Link to={`/products/${product.id}/`}>
                                        <span className="name">{product.name}</span>&nbsp;
                                        <span className="category">{product.collection && collections.get(product.collection).name || product.manufacturer && manufacturers.get(product.manufacturer).name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}