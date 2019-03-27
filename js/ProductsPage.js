import React from "react";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Pagination from "./Pagination";
import Product from "./Product";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";
import {createHashHistory} from "history";
import Utils from "./Utils";
import constants from "./constants";
import ProductQuickView from "./ProductQuickView";
import DataService from "./DataService";

export default class ProductsPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
        this.history = createHashHistory();
        this.minPrice = 0;
        this.maxPrice = 200000;
        this.itemsPerPageOptions = [12, 60, 96];
        this.sortByOptions = new Map([
            ['price_with_discount', {label: 'Цена: по возрастанию'}],
            ['-price_with_discount', {label: 'Цена: по убыванию'}],
            ['name', {label: 'Название: от А до Я'}],
            ['-name', {label: 'Название: от Я до А'}],
            ['popularity', {label: 'Популярность: по возрастанию'}],
            ['-popularity', {label: 'Популярность: по убыванию'}]
        ]);
        this.sortByOptions.defaultId = 'price_with_discount';
        this.colors = new Map();
        this.controlsDisabled = false;
        this.lastSearchParams =  {
            string: '',
            parsed: null
        };
        this.lastRequestId = 0;

        this.state = {
            products: {
                items: new Map(),
                count: 0
            },
            filters: {
                price: {
                    from: this.minPrice,
                    to: this.maxPrice
                },
                manufacturers: [],
                collections: []             
            },
            sorting: {
                itemsPerPage: this.itemsPerPageOptions[0],
                value: this.sortByOptions.defaultId
            },
            pagination: {
                activePage: 1
            },
            quickViewData: null
        };

        this.onURLChanged = this.onURLChanged.bind(this);
        this.updateSearchParams = this.updateSearchParams.bind(this);
        this.disableControls = this.disableControls.bind(this);
        this.setQuickViewData = this.setQuickViewData.bind(this);
        this.blockUpdateSearchParams = this.blockUpdateSearchParams.bind(this);

		this.removeURLChangeListener = this.history.listen(this.onURLChanged);

        DataService.getColors(data => {
            this.colors = data.results;
            this.onURLChanged(this.history.location);
        });
	}

	componentDidMount() {
		this.hidePreLoader();		
	}

    componentWillUnmount() {
        this.removeURLChangeListener();
        clearInterval(this.timer);
        $.magnificPopup.close();
    }

    blockUpdateSearchParams(isBlock) {
        this.updateSearchParamsBlocked = isBlock;
    }

    setQuickViewData(productId) {
        let quickViewData = null;
        this.setState({quickViewData});
        if (productId) {
            quickViewData = this.state.products.items.get(productId);

            if (!quickViewData) {
                DataService.getProducts(data => {
                    this.setState({
                        quickViewData: data
                    }, this.showHideQuickViewPopup);
                }, {
                    id: productId
                });
                return;
            }
            this.setState({quickViewData}, this.showHideQuickViewPopup);
        }
    }

    showHideQuickViewPopup() {
        if (this.state.quickViewData) {
            const productsPage = this;
            $.magnificPopup.open({
                items: {
                    src: '.popup-main'
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
                        productsPage.props.closePopup();
                        this.updateSearchParams([{
                            key: 'product',
                            value: 'null',
                            operationType: 'update'
                        }]);
                    }
                }
            });
        } else {
            $.magnificPopup.close();
        }
    }    

	onURLChanged(location) {
        const searchParamsToSubmit = new URLSearchParams();

        // Обработка параметров запроса
        const searchParams = new URLSearchParams(location.search);
        const category = parseInt(searchParams.get('category'));
        const minPrice = Utils.parseValueToInt(searchParams.get('min_price'), this.minPrice);
        const maxPrice = Utils.parseValueToInt(searchParams.get('max_price'), this.maxPrice);
        const page = Utils.parseValueToInt(searchParams.get('page'), 1);
        const pageSize = Utils.parseValueToInt(searchParams.get('page_size'), this.itemsPerPageOptions[0]);
        const sortById = searchParams.get('sort_by');
        const sortBy = this.sortByOptions.has(sortById) ? sortById : this.sortByOptions.defaultId;
        const productId = Utils.parseValueToInt(searchParams.get('product'), null);
        const manufacturers = this.props.manufacturers;
        const manufacturersIds = ([...(new Set(searchParams.getAll('manufacturer')
        .map(manufacturer => Utils.parseValueToInt(manufacturer, 0))))]
        .filter(manufacturer => manufacturers.has(manufacturer)));
        const collections = this.props.collections;
        const collectionsIds = ([...(new Set(searchParams.getAll('collection')
        .map(collection => Utils.parseValueToInt(collection, 0))))]
        .filter(collection => collections.has(collection)));

        // Сбор параметров для отправки запроса /products
        for (let i = 0, len = manufacturersIds.length; i < len; i++) {
            searchParamsToSubmit.append('manufacturer', manufacturersIds[i]);
        }
        for (let i = 0, len = collectionsIds.length; i < len; i++) {
            searchParamsToSubmit.append('collection', collectionsIds[i]);
        }
        searchParamsToSubmit.set('ordering', sortBy);
        if (category) {
            searchParamsToSubmit.set('categories', category);
        }
        searchParamsToSubmit.set('price_with_discount_min', minPrice);
        searchParamsToSubmit.set('price_with_discount_max', maxPrice);
        searchParamsToSubmit.set('page', page);
        searchParamsToSubmit.set('page_size', pageSize);

        // Отправка запроса /products
        if (searchParamsToSubmit.toString() !== this.lastSearchParams.string) {
            this.disableControls(true);
            $('.products-loader').removeClass('loaded');
            const offsetFromTop = $('.products').offset().top - (window.innerWidth < constants.DESKTOP_MORE_THAN ? 0 : $('.header-nav').height());
            const documentScrollTop = $(document).scrollTop();
            Utils.scrollTo(documentScrollTop - offsetFromTop > 0 ? offsetFromTop : documentScrollTop, 0);
            this.lastSearchParams.parsed = searchParamsToSubmit;
            this.lastSearchParams.string = this.lastSearchParams.parsed.toString();
            clearInterval(this.timer);
            this.sendRequestForProducts(this.lastSearchParams);
            this.timer = setInterval(() => {
                this.disableControls(false);
                this.sendRequestForProducts(this.lastSearchParams);
            }, 10000);    
        }

        // Вызов модального окна "Быстрый просмотр" при необходимости
        this.setQuickViewData(productId);

        // Установка состояния
        this.setState(state => {
            const filters = state.filters;
            const priceFilter = filters.price;

            priceFilter.from = minPrice;
            priceFilter.to = maxPrice;
            state.sorting.itemsPerPage = pageSize;
            state.sorting.value = sortBy;
            state.pagination.activePage = page;
            filters.manufacturers = manufacturersIds;
            filters.collections = collectionsIds;

            return state;
        });
	}

    disableControls(disable) {
        this.controlsDisabled = disable;
        this.disablePriceSliderFilter(disable);
    }

    disablePriceSliderFilter(disable) {
        const rangePriceSliderDOM = $("#range-price-slider").data("ionRangeSlider");
        if (rangePriceSliderDOM) {
            rangePriceSliderDOM.update({disable});
        }        
    }

    sendRequestForProducts(searchParams) {
        const requestId = ++this.lastRequestId;
        DataService.getProducts(data => {
            if (data) {
                if (this.lastRequestId === requestId) {
                    this.disableControls(false);
                    clearInterval(this.timer);
                    this.lastRequestId = 0;                    
                    $('.products-loader').addClass('loaded');
                    
                    this.setState({
                        products: {
                            items: data.results,
                            count: data.count
                        }
                    });                    
                }    
            } else {
                const tempSearchParams = {
                    string: searchParams.string,
                    parsed: new URLSearchParams(searchParams.string)
                };
                tempSearchParams.parsed.set('page', '1');
                tempSearchParams.string = tempSearchParams.parsed.toString();
                this.setState(state => {
                    state.pagination.activePage = 1;
                    return state;
                });
                this.sendRequestForProducts(tempSearchParams);
            }
        }, {
            search: searchParams.string
        });
    }

    updateSearchParams(changes) {
        if (!this.controlsDisabled && !this.updateSearchParamsBlocked) {
            const search = this.history.location.search;
            const searchParams = new URLSearchParams(search);
            const searchParamsToUpdate = new URLSearchParams(search);
            const collections = this.props.collections.values();
            const collectionIds = this.state.filters.collections;
        
            changes.forEach(change => {
                const key = change.key;
                const value = change.value && change.value.toString();
                const operationType = change.operationType;
                let targetValues = [...new Set(searchParams.getAll(key))];
                const isTargetExists = targetValues.includes(value);
                if (operationType === 'add' && !isTargetExists) {
                    targetValues.push(value);
                } else if (operationType === 'remove' && isTargetExists) {
                    targetValues.splice(targetValues.indexOf(value), 1);
                } else if (operationType === 'update') {
                    targetValues = [value];
                } else if (operationType === 'delete') {
                    targetValues = [];
                }
                if (key === 'manufacturer' && targetValues.length) {
                    searchParamsToUpdate.delete('collection');
                    for (let collection of collections) {
                        if (targetValues.includes(collection.manufacturer.toString()) && collectionIds.includes(collection.id)) {
                            searchParamsToUpdate.append('collection', collection.id);
                        }
                    }
                }
                searchParamsToUpdate.delete(key);
                for (let i = 0, len = targetValues.length; i < len; i++) {
                    searchParamsToUpdate.append(key, targetValues[i]);
                }
            });
            const searchParamsToUpdateString = searchParamsToUpdate.toString();
            if (searchParamsToUpdateString !== searchParams.toString()) {
                this.history.push({
                    search: `?${searchParamsToUpdateString}`
                });
            }
        }
    }

	render() {
        const quickViewData = this.state.quickViewData;
        const products = [...this.state.products.items.values()];
        const searchParams = new URLSearchParams(this.history.location.search);
        const categoryId = searchParams.get('category');
        const category = this.props.categories.get(+categoryId);

		return (
			<div>
                {quickViewData && <ProductQuickView data={quickViewData} blockUpdateSearchParams={this.blockUpdateSearchParams} addCartProduct={this.props.addCartProduct} colors={this.colors} manufacturers={this.props.manufacturers} collections={this.props.collections}/>}
		        <section className="main-header" style={{backgroundImage: "url(%URI_PREFIX%assets/images/gallery-3.jpg)"}}>
		            <header>
		                <div className="container">
		                    <h1 className="h2 title">Магазин</h1>
		                    <ol className="breadcrumb breadcrumb-inverted">
		                        <li>
									<Link to="/"><span className="icon icon-home"></span></Link>
		                        </li>
                                {category && <li>{category.name}</li>}
		                    </ol>
		                </div>
		            </header>
		        </section>

		        <section className="products">
		            <div className="container">

		                <header className="hidden">
		                    <h3 className="h3 title">Product category grid</h3>
		                </header>

		                <div className="row">

		                    <div className="col-md-3 col-xs-12">
								<Filters filters={this.state.filters} updateState={this.updateSearchParams} manufacturers={this.props.manufacturers} collections={this.props.collections}/>
		                    </div>

		                    <div className="col-md-9 col-xs-12">
								<SortBar updateState={this.updateSearchParams} itemsPerPage={this.state.sorting.itemsPerPage} sortBy={this.state.sorting.value} itemsPerPageOptions={this.itemsPerPageOptions} sortByOptions={this.sortByOptions}/>

		                        <div id="products" className="row">
                                    <div className="products-loader loaded"/>
                                    {!products.length && <div className="no-products">Товары не найдены</div>}
                                    {products.map(product => <Product key={product.id} data={product} updateSearchParams={this.updateSearchParams} manufacturers={this.props.manufacturers} collections={this.props.collections} categories={this.props.categories} addCartProduct={this.props.addCartProduct}/>)}
		                        </div>
                                {Math.ceil(this.state.products.count / this.state.sorting.itemsPerPage) > 1 && <Pagination updateState={this.updateSearchParams} totalItems={this.state.products.count} itemsPerPage={this.state.sorting.itemsPerPage} activePage={this.state.pagination.activePage}/>}
		                    </div>
		                </div>
		            </div>
		        </section>
		    </div>
		);
	}
}