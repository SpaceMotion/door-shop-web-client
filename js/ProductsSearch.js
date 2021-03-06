import React from "react";
import CONSTANTS from "./constants";
import DataService from "./DataService";
import {Link} from "react-router-dom";
import Timer from "./Timer";

export default class ProductsSearch extends React.Component {
    constructor(props) {
        super(props);
        this.onInputValueChanged = this.onInputValueChanged.bind(this);
        this.makeSearchRequest = this.makeSearchRequest.bind(this);
        this.onSearchProductsLoad = this.onSearchProductsLoad.bind(this);
        this.hasTextToSearch = this.hasTextToSearch.bind(this);
        this.onInputValueStateUpdated = this.onInputValueStateUpdated.bind(this);
        this.timer = new Timer(CONSTANTS.DELAY_QUERY_PRODUCTS_SEARCH, this.makeSearchRequest);
        this.state = {
            products: [],
            searchText: ''
        };
    }
    
    hasTextToSearch() {
        return this.state.searchText.trim().length > CONSTANTS.MIN_LETTERS_TO_SEARCH;
    }

    onSearchProductsLoad(data) {
        this.setState({
            products: data.results
        });
    }

    makeSearchRequest() {
        this.abortController = new AbortController();
        DataService.getSearchProducts(
            this.onSearchProductsLoad,
            this.state.searchText,
            this.abortController.signal
        );
    }

    onInputValueChanged(event) {
        this.setState({
            searchText: event.target.value
        }, this.onInputValueStateUpdated);
    }

    onInputValueStateUpdated() {
        if (this.abortController) {
            this.abortController.abort();
        }
        this.timer.stop();
        if (this.hasTextToSearch()) {
            this.timer.start();
        } else {
            this.setState({
                products: []
            });
        }
    }

    render() {
        const collections = this.props.collections;
        const manufacturers = this.props.manufacturers;

        return (
            <div className="search-wrapper">
                <input className="form-control" placeholder="Введите текст для поиска" onChange={this.onInputValueChanged} value={this.state.searchText} />

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
