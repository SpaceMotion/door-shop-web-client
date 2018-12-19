import CONFIG from "./config";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Pagination from "./Pagination";
import Product from "./Product";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";
import {createHashHistory} from "history";

export default class ProductsPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
        this.history = createHashHistory();
        this.minPrice = 0;
        this.maxPrice = 200000;
        this.itemsPerPageOptions = [10, 50, 100];
        this.sortByOptions = [{
            id: 'price_with_discount',
            label: 'Цена: по возрастанию'
        }, {
            id: '-price_with_discount',
            label: 'Цена: по убыванию'
        }, {
            id: 'name',
            label: 'Название: от А до Я'
        }, {
            id: '-name',
            label: 'Название: от Я до А'
        }, {
            id: 'popularity',
            label: 'Популярность: по возрастанию'
        }, {
            id: '-popularity',
            label: 'Популярность: по убыванию'
        }];
        this.controlsDisabled = false;
        this.lastSearchParams =  '';
        this.lastRequestId = 0;

        this.state = {
            products: [],
            filters: {
                isReady: false,
                price: {},
                manufacturers: [],
                collections: []             
            },
            sorting: {
                itemsPerPage: this.itemsPerPageOptions[0],
                value: this.sortByOptions[0].id
            },
            pagination: {
                activePage: 1
            }
        };

		this.setUpFilters = this.setUpFilters.bind(this);
		this.getBreadCrumbs = this.getBreadCrumbs.bind(this);
        this.onURLChanged = this.onURLChanged.bind(this);
        this.updateSearchParams = this.updateSearchParams.bind(this);

		this.removeURLChangeListener = this.history.listen(this.onURLChanged);

		this.setUpFilters();
	}

	componentDidMount() {
		this.hidePreLoader();		
	}

    componentWillUnmount() {
        this.removeURLChangeListener();
    }

	onURLChanged(location) {
        const searchParamsToSubmit = new URLSearchParams();
        this.setState((state) => {
            // Обработка параметров запроса
            const searchParams = new URLSearchParams(this.history.location.search);

            let minPrice = searchParams.get('min_price');
            const minPriceParsed = parseInt(minPrice);
            if (minPrice === null || minPriceParsed != minPrice) {
                minPrice = this.minPrice;
            } else {
                minPrice = minPriceParsed;
            }

            let maxPrice = searchParams.get('max_price');
            const maxPriceParsed = parseInt(maxPrice);
            if (maxPrice === null || maxPriceParsed != maxPrice) {
                maxPrice = this.maxPrice;
            } else {
                maxPrice = maxPriceParsed;
            }

            let page = searchParams.get('page');
            const pageParsed = parseInt(page);
            if (page === null || pageParsed != page) {
                page = 1;
            } else {
                page = pageParsed;
            }

            let pageSize = searchParams.get('page_size');
            const pageSizeParsed = parseInt(pageSize);
            if (pageSize === null || pageSizeParsed != pageSize || !this.itemsPerPageOptions.includes(pageSizeParsed)) {
                pageSize = this.itemsPerPageOptions[0];
            } else {
                pageSize = pageSizeParsed;
            }

            let sortBy = searchParams.get('sort_by');
            if (!this.sortByOptions.find((sortByOption) => {
                return sortByOption.id === sortBy;
            })) {
                sortBy = this.sortByOptions[0].id;
            }

            const manufacturersIds = searchParams.getAll('manufacturer');
            const collectionsIds = searchParams.getAll('collection');

            // Установка состояния
            const filters = state.filters;
            const priceFilter = filters.price;
            priceFilter.from = minPrice;
            priceFilter.to = maxPrice;
            state.sorting.itemsPerPage = pageSize;
            state.sorting.value = sortBy;
            state.pagination.activePage = page;
            const manufacturers = filters.manufacturers;
            const manufacturersAnyOption = this.manufacturersAnyOption;
            let manufacturersAnyFlag = true;
            for (let i = 0, len = manufacturers.length; i < len; i++) {
                if (manufacturersAnyOption !== manufacturers[i]) {
                    const manufacturerId = manufacturers[i].id.toString();
                    const checked = manufacturersIds.includes(manufacturerId);
                    manufacturers[i].checked = checked;
                    if (checked) {
                        manufacturersAnyFlag = false;
                        searchParamsToSubmit.append('manufacturer', manufacturerId);
                    }                    
                }                
            }
            manufacturersAnyOption.checked = manufacturersAnyFlag;
            const collections = filters.collections;
            const collectionsAnyOption = this.collectionsAnyOption;
            let collectionsAnyFlag = true;
            for (let i = 0, len = collections.length; i < len; i++) {
                if (collectionsAnyOption !== collections[i]) {
                    const collectionId = collections[i].id.toString();
                    const checked = collectionsIds.includes(collectionId);
                    collections[i].checked = checked;
                    if (checked) {
                        collectionsAnyFlag = false;
                        searchParamsToSubmit.append('collection', collectionId);
                    }
                }
            }
            collectionsAnyOption.checked = collectionsAnyFlag;

            // Сбор параметров для отправки запроса /products на сервер
            searchParamsToSubmit.set('ordering', sortBy);
            searchParamsToSubmit.set('categories', searchParams.get('category'));
            searchParamsToSubmit.set('price_with_discount_min', minPrice);
            searchParamsToSubmit.set('price_with_discount_max', maxPrice);
            searchParamsToSubmit.set('page', page);
            searchParamsToSubmit.set('page_size', pageSize);

            // Отправка запроса /products
            const searchParamsToUpdateStr = searchParamsToSubmit.toString();
            if (this.lastSearchParams !== searchParamsToUpdateStr) {
                this.controlsDisabled = true;
                $('.products-loader').removeClass('loaded');
                this.disablePriceSliderFilter(true);
                this.lastSearchParams = searchParamsToUpdateStr;
                clearInterval(this.timer);
                this.timer = null;
            }
            if (!this.timer) {
                this.sendRequestForProducts(this.lastSearchParams);
                this.timer = setInterval(() => {
                    this.controlsDisabled = false;
                    this.disablePriceSliderFilter(false);
                    this.sendRequestForProducts(this.lastSearchParams);
                }, 10000);
            }

            return state;
        });
	}

    disablePriceSliderFilter(disable) {
        const rangePriceSliderDOM = $("#range-price-slider").data("ionRangeSlider");
        if (rangePriceSliderDOM) {
            rangePriceSliderDOM.update({disable});
        }        
    }

    sendRequestForProducts(searchParamsToUpdateStr) {
        this.lastRequestId++;
        const requestId = this.lastRequestId;
        fetch(`${CONFIG.ROOT_API_URL}/products/?${searchParamsToUpdateStr}`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (this.lastRequestId === requestId) {
                setTimeout(() => {
                    this.setState(state => {
                        state.products = data.results || [];
                        const products = state.products;
                        const categoriesIcons = {};
                        const categories = this.props.categories;
                        const manufacturers = state.filters.manufacturers;
                        const collections = state.filters.collections;
                        const manufacturersNames = {};
                        const collectionsNames = {};
                        for (let i = 0, len = categories.length; i < len; i++) {
                            const icon = categories[i].icon;
                            categoriesIcons[categories[i].id] = {
                                type: icon ? 'img' : 'char',
                                value: icon || categories[i].icon_code
                            };
                        }
                        for (let i = 0, len = manufacturers.length; i < len; i++) {
                            manufacturersNames[manufacturers[i].id] = manufacturers[i].name;
                        }
                        for (let i = 0, len = collections.length; i < len; i++) {
                            collectionsNames[collections[i].id] = collections[i].name;
                        }
                        for (let i = 0, len = products.length; i < len; i++) {
                            products[i].manufacturerName = manufacturersNames[products[i].manufacturer];
                            products[i].collectionName = collectionsNames[products[i].collection];
                            if (products[i].images.length) {
                                const productImage = products[i].images[0];
                                products[i].preview_img = {
                                    type: 'img',
                                    value: productImage.preview || productImage.full
                                };
                            } else {
                                products[i].preview_img = categoriesIcons[products[i].categories[0]];                            
                            }
                        }
                        this.controlsDisabled = false;
                        this.disablePriceSliderFilter(false);
                        clearInterval(this.timer);
                        this.timer = null;
                        this.lastRequestId = 0;                    
                        $('.products-loader').addClass('loaded');

                        return state;
                    });
                }, 500);
            }
        });        
    }

	setUpFilters() {
        let manufacturers, collections;

		// Manufacturers
		let manufacturersDataGet = new Promise((resolve) => {
			fetch(`${CONFIG.ROOT_API_URL}/manufacturers`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
                manufacturers = data.results;
                manufacturers.unshift({
                    any: true,
                    checked: true,
                    name: "Любой"
                });
				resolve();
			});
		});

		// Collections
		let collectionsDataGet = new Promise((resolve) => {
			fetch(`${CONFIG.ROOT_API_URL}/collections`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
                collections = data.results;
                collections.unshift({
                    any: true,
                    checked: true,
                    name: "Любая"
                });
				resolve();
			});
		});

		Promise.all([manufacturersDataGet, collectionsDataGet]).then(() => {
            this.manufacturersAnyOption = manufacturers.find((manufacturer) => {
                return manufacturer.any;
            });
            this.collectionsAnyOption = collections.find((collection) => {
                return collection.any;
            });
			this.setState((state) => {
                state.filters.manufacturers = manufacturers;
                state.filters.collections = collections;
				state.filters.isReady = true;
				return state;
			});
            this.onURLChanged(this.history.location);
		});
	}

    updateSearchParams(changes) {
        const searchParams = new URLSearchParams(this.history.location.search);
        const searchParamsToUpdate = new URLSearchParams(this.history.location.search);
        changes.forEach((change) => {
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
            } else if (operationType === 'any') {
                targetValues = [];
            }
            if (key === 'manufacturer' && targetValues.length) {
                searchParamsToUpdate.delete('collection');
                const collections = this.state.filters.collections;
                for (let i = 0, len = collections.length; i < len; i++) {
                    const manufacturerId = collections[i].manufacturer && collections[i].manufacturer.toString();
                    if (targetValues.includes(manufacturerId) && collections[i].checked) {
                        searchParamsToUpdate.append('collection', collections[i].id);
                    }
                }
            }
            searchParamsToUpdate.delete(key);
            for (var i = 0, len = targetValues.length; i < len; i++) {
                searchParamsToUpdate.append(key, targetValues[i]);
            }
        });
        const searchParamsToUpdateStr = searchParamsToUpdate.toString();
        if (searchParamsToUpdateStr !== searchParams.toString()) {
            this.history.push({
                search: `?${searchParamsToUpdateStr}`
            });            
        }
    }

	getBreadCrumbs() {
		const categories = this.props.categories;
		const searchParams = new URLSearchParams(this.history.location.search);
		const currentCategoryId = parseInt(searchParams.get('category'));
		const result = [];
		if (currentCategoryId) {
			result.push(categories.find((category) => {
				return category.id === currentCategoryId;
			}));
			let lastFound;
			do {
				lastFound = categories.find((category) => {
					return result[result.length - 1].parent === category.id;
				});
				if (lastFound) {
					result.push(lastFound);				
				}
			} while (lastFound);			
		}
		return result.reverse();
	}

	render() {
		return (
			<div>
		        <section className="main-header" style={{backgroundImage: "url(assets/images/gallery-3.jpg)"}}>
		            <header>
		                <div className="container">
		                    <h1 className="h2 title">Магазин</h1>
		                    <ol className="breadcrumb breadcrumb-inverted">
		                        <li>
									<Link to="/"><span className="icon icon-home"></span></Link>
		                        </li>
	                        	{this.getBreadCrumbs().map((category) => {
	                        		return (
										<li key={category.id}>
											<Link to={`/products?category=${category.id}`}>{category.name}</Link>
										</li>
	                        		);
	                        	})}
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
								{this.state.filters.isReady ? <Filters filters={this.state.filters} minPrice={this.minPrice} maxPrice={this.maxPrice} updateState={this.updateSearchParams}/> : null}
		                    </div>

		                    <div className="col-md-9 col-xs-12">
								<SortBar updateState={this.updateSearchParams} itemsPerPage={this.state.sorting.itemsPerPage} sortBy={this.state.sorting.value} itemsPerPageOptions={this.itemsPerPageOptions} sortByOptions={this.sortByOptions}/>

		                        <div id="products" className="row">
                                    <div className="products-loader loaded"/>
                                    {this.state.products.map((product) => {
                                        return <Product key={product.id} data={product}/>;
                                    })}
		                        </div>
                                {Math.ceil(this.state.products.length / this.state.sorting.itemsPerPage) > 1 ? <Pagination updateState={this.updateSearchParams} totalItems={this.state.products.length} itemsPerPage={this.state.sorting.itemsPerPage} activePage={this.state.pagination.activePage}/> : null}

		                    </div>

		                </div>

		                <div className="popup-main mfp-hide" id="productid1">

		                    <div className="product">

		                        <div className="popup-title">
		                            <div className="h1 title">Laura <small>product category</small></div>
		                        </div>

		                        <div className="owl-product-gallery">
		                            <img src="assets/images/product-1.png" alt="" width="640" />
		                            <img src="assets/images/product-2.png" alt="" width="640" />
		                            <img src="assets/images/product-3.png" alt="" width="640" />
		                            <img src="assets/images/product-4.png" alt="" width="640" />
		                        </div>

		                        <div className="popup-content">
		                            <div className="product-info-wrapper">
		                                <div className="row">

		                                    <div className="col-sm-6">
		                                        <div className="info-box">
		                                            <strong>Maifacturer</strong>
		                                            <span>Brand name</span>
		                                        </div>
		                                        <div className="info-box">
		                                            <strong>Materials</strong>
		                                            <span>Wood, Leather, Acrylic</span>
		                                        </div>
		                                        <div className="info-box">
		                                            <strong>Availability</strong>
		                                            <span><i className="fa fa-check-square-o"></i> in stock</span>
		                                        </div>
		                                    </div>

		                                    <div className="col-sm-6">
		                                        <div className="info-box">
		                                            <strong>Available Colors</strong>
		                                            <div className="product-colors clearfix">
		                                                <span className="color-btn color-btn-red"></span>
		                                                <span className="color-btn color-btn-blue checked"></span>
		                                                <span className="color-btn color-btn-green"></span>
		                                                <span className="color-btn color-btn-gray"></span>
		                                                <span className="color-btn color-btn-biege"></span>
		                                            </div>
		                                        </div>
		                                        <div className="info-box">
		                                            <strong>Choose size</strong>
		                                            <div className="product-colors clearfix">
		                                                <span className="color-btn color-btn-biege">S</span>
		                                                <span className="color-btn color-btn-biege checked">M</span>
		                                                <span className="color-btn color-btn-biege">XL</span>
		                                                <span className="color-btn color-btn-biege">XXL</span>
		                                            </div>
		                                        </div>
		                                    </div>

		                                </div>
		                            </div>
		                        </div>

		                        <div className="popup-table">
		                            <div className="popup-cell">
		                                <div className="price">
		                                    <span className="h3">$ 1999,00 <small>$ 2999,00</small></span>
		                                </div>
		                            </div>
		                            <div className="popup-cell">
		                                <div className="popup-buttons">
		                                    <a href="product.html"><span className="icon icon-eye"></span> <span className="hidden-xs">View more</span></a>
		                                    <a href="javascript:void(0);"><span className="icon icon-cart"></span> <span className="hidden-xs">Buy</span></a>
		                                </div>
		                            </div>
		                        </div>

		                    </div> 
		                </div>
		            </div>
		        </section>
		    </div>
		);
	}
}