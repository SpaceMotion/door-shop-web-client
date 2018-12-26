import CONFIG from "./config";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Pagination from "./Pagination";
import Product from "./Product";
import {Link} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";
import {createHashHistory} from "history";
import Utils from "./Utils";
import constants from "./constants";

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

        this.controlsDisabled = false;
        this.lastSearchParams =  {
            string: '',
            parsed: null
        };
        this.lastRequestId = 0;

        this.state = {
            products: {
                items: [],
                count: 0
            },
            filters: {
                isReady: false,
                price: {},
                manufacturers: [],
                collections: []             
            },
            sorting: {
                itemsPerPage: this.itemsPerPageOptions[0],
                value: this.sortByOptions.defaultId
            },
            pagination: {
                activePage: 1
            }
        };

		this.setUpFilters = this.setUpFilters.bind(this);
		this.getBreadCrumbs = this.getBreadCrumbs.bind(this);
        this.onURLChanged = this.onURLChanged.bind(this);
        this.updateSearchParams = this.updateSearchParams.bind(this);
        this.disableControls = this.disableControls.bind(this);

		this.removeURLChangeListener = this.history.listen(this.onURLChanged);

		this.setUpFilters();
	}

	componentDidMount() {
		this.hidePreLoader();		
	}

    componentWillUnmount() {
        this.removeURLChangeListener();
        clearInterval(this.timer);
    }

	onURLChanged(location) {
        this.disableControls(true);
        $('.products-loader').removeClass('loaded');
        const searchParamsToSubmit = new URLSearchParams();
        this.setState((state) => {
            // Обработка параметров запроса
            const searchParams = new URLSearchParams(this.history.location.search);

            const category = parseInt(searchParams.get('category'));
            const minPrice = Utils.parseValueToInt(searchParams.get('min_price'), this.minPrice);
            const maxPrice = Utils.parseValueToInt(searchParams.get('max_price'), this.maxPrice);
            const page = Utils.parseValueToInt(searchParams.get('page'), 1);
            const pageSize = Utils.parseValueToInt(searchParams.get('page_size'), this.itemsPerPageOptions[0]);
            const sortById = searchParams.get('sort_by');
            const sortBy = this.sortByOptions.has(sortById) ? sortById : this.sortByOptions.defaultId;

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
            let isManufacturersAny = true;
            for (let i = 0, len = manufacturers.length; i < len; i++) {
                if (manufacturersAnyOption === manufacturers[i])
                    continue;
                const manufacturerId = manufacturers[i].id.toString();
                const checked = manufacturersIds.includes(manufacturerId);
                manufacturers[i].checked = checked;
                if (checked) {
                    isManufacturersAny = false;
                    searchParamsToSubmit.append('manufacturer', manufacturerId);
                }                    
            }
            manufacturersAnyOption.checked = isManufacturersAny;
            const collections = filters.collections;
            const collectionsAnyOption = this.collectionsAnyOption;
            let isCollectionsAny = true;
            for (let i = 0, len = collections.length; i < len; i++) {
                if (collectionsAnyOption === collections[i])
                    continue;
                const collectionId = collections[i].id.toString();
                const checked = collectionsIds.includes(collectionId);
                collections[i].checked = checked;
                if (checked) {
                    isCollectionsAny = false;
                    searchParamsToSubmit.append('collection', collectionId);
                }
            }
            collectionsAnyOption.checked = isCollectionsAny;

            // Сбор параметров для отправки запроса /products на сервер
            searchParamsToSubmit.set('ordering', sortBy);
            if (category) {
                searchParamsToSubmit.set('categories', category);
            }
            searchParamsToSubmit.set('price_with_discount_min', minPrice);
            searchParamsToSubmit.set('price_with_discount_max', maxPrice);
            searchParamsToSubmit.set('page', page);
            searchParamsToSubmit.set('page_size', pageSize);

            // Отправка запроса /products
            this.lastSearchParams.parsed = searchParamsToSubmit;
            this.lastSearchParams.string = this.lastSearchParams.parsed.toString();
            clearInterval(this.timer);
            this.sendRequestForProducts(this.lastSearchParams);
            this.timer = setInterval(() => {
                this.disableControls(false);
                this.sendRequestForProducts(this.lastSearchParams);
            }, 10000);

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
        this.lastRequestId++;
        const requestId = this.lastRequestId;
        fetch(`${CONFIG.ROOT_API_URL}/products/?${searchParams.string}`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            if (response.status === 404) {
                searchParams.parsed.set('page', '1');
                searchParams.string = searchParams.parsed.toString();
                this.updateSearchParams([{
                    key: 'page',
                    value: '1',
                    operationType: 'update'
                }], true);
                return Promise.reject();
            }
            return response.json();
        }).then((data) => {
            if (this.lastRequestId === requestId) {
                this.setState(state => {
                    state.products.items = data.results || [];
                    state.products.count = data.count || 0;
                    const products = state.products.items;
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
                    this.disableControls(false);
                    clearInterval(this.timer);
                    this.lastRequestId = 0;                    
                    $('.products-loader').addClass('loaded');

                    return state;
                });
            }
        }, () => null);        
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
                    name: "Все"
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
                    name: "Все"
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

    updateSearchParams(changes, anyway = false) {
        if (!this.controlsDisabled || anyway) {
            const offsetFromTop = $('.products').offset().top - (window.innerWidth < constants.DESKTOP_MORE_THAN ? 0 : $('.header-nav').height());
            const documentScrollTop = $(document).scrollTop();
            Utils.scrollTo(documentScrollTop - offsetFromTop > 0 ? offsetFromTop : documentScrollTop, 0);
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
    }

	getBreadCrumbs() {
		const categories = this.props.categories;
		const searchParams = new URLSearchParams(this.history.location.search);
		const currentCategoryId = parseInt(searchParams.get('category'));
		const result = [];
        const currentCategory = categories.find((category) => {
                return category.id === currentCategoryId;
        });
		if (currentCategory) {
			result.push(currentCategory);
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
                                    {this.state.products.items.length ? null : <div className="no-products">Товары не найдены</div>}
                                    {this.state.products.items.map((product) => {
                                        return <Product key={product.id} data={product}/>;
                                    })}
		                        </div>
                                {Math.ceil(this.state.products.count / this.state.sorting.itemsPerPage) > 1 ? <Pagination updateState={this.updateSearchParams} totalItems={this.state.products.count} itemsPerPage={this.state.sorting.itemsPerPage} activePage={this.state.pagination.activePage}/> : null}

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
