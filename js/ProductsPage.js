import CONFIG from "./config";
import Filters from "./Filters";
import SortBar from "./SortBar";
import Pagination from "./Pagination";
import {Link, withRouter} from "react-router-dom";
import ReloadPageMixin from "./ReloadPageMixin";

export default withRouter(class ProductsPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
		this.state = {
			products: [],
			filters: {
				isReady: false				
			},
			sorting: {
				itemsPerPage: 10,
				price: 'asc',
				name: 'A-z'
			},
			pagination: {
				activePage: 1
			}
		};
		this.updateFiltersData = this.updateFiltersData.bind(this);
		this.setUpFilters = this.setUpFilters.bind(this);
		this.updateSortingData = this.updateSortingData.bind(this);
		this.updatePaginationData = this.updatePaginationData.bind(this);
		this.getBreadCrumbs = this.getBreadCrumbs.bind(this);

		this.setUpFilters();
        this.setUpProducts();
	}

	componentDidMount() {
		this.hidePreLoader();		
	}

    setUpProducts() {
        fetch(`${CONFIG.ROOT_API_URL}/products`, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                products: data.results
            });
        });        
    }

	setUpFilters() {
		// Manufacturers
		let manufacturersDataGet = new Promise((resolve) => {
			fetch(`${CONFIG.ROOT_API_URL}/manufacturers`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.setState((state) => {
					state.filters.manufacturers = data.results;
					state.filters.manufacturers.unshift({
						any: true,
						checked: true,
						name: "Любой"
					});
					return state;
				});
				resolve();
			});
		});

		Promise.all([manufacturersDataGet]).then(() => {
			this.setState((state) => {
				state.filters.isReady = true;
				return state;
			});
		});
	}

	updateFiltersData(changes) {
		this.setState((state) => {
			const filterType = changes.filterType;

			if (filterType === 'price') {
				state.filters[filterType] = {
					from: changes.from,
					to: changes.to
				};
			} else {
				let filters = state.filters[filterType];
				filters[changes.idx].checked = changes.checked;				
				const anyOption = filters.find((filterOption) => {
					return filterOption.any;
				});
				if (changes.checked) {
					if (changes.any) {
						filters.forEach((filterOption) => {
							if (!filterOption.any) {
								filterOption.checked = false;								
							}
						});
					} else if (anyOption) {
						anyOption.checked = false;							
					}					
				} else if (filters.every((filterOption) => {
					return !filterOption.checked;
				})) {
					anyOption.checked = true;
				}
			}
			return state;
		});
	}

	updateSortingData(changes) {
		const option = changes.option;
		this.setState((state) => {
			if (option === 'itemsPerPage') {
				state.pagination.activePage = 1;
			}
			state.sorting[option] = changes.value;
			return state;
		});
	}

	updatePaginationData(changes) {
		this.setState((state) => {
			state.pagination.activePage = changes.activePage;
			return state;
		});
	}

	getBreadCrumbs() {
		const categories = this.props.categories;
		const searchParams = new URLSearchParams(this.props.location.search);
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
								{this.state.filters.isReady ? <Filters filters={this.state.filters} updateState={this.updateFiltersData}/> : null}
		                    </div>

		                    <div className="col-md-9 col-xs-12">
								<SortBar updateState={this.updateSortingData} itemsPerPage={this.state.sorting.itemsPerPage} price={this.state.sorting.price} name={this.state.sorting.name}/>

		                        <div id="products" className="row">

		                            <div className="col-md-6 col-xs-6 item price-discount category-sofa material-leather">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <span className="label">-50%</span>
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-1.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Green corner <small>Sofa</small></a></h2>
		                                            <sub>$ 1499,-</sub>
		                                            <sup>$ <span className="price">1099</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>

		                            <div className="col-md-6 col-xs-6 item price-discount category-armchair material-wood">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-2.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Laura <small>Armchair</small></a></h2>
		                                            <sub>$ 3999,-</sub>
		                                            <sup>$ <span className="price">3499</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>

		                            <div className="col-md-6 col-xs-6 item price-regular category-armchair material-leather">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-3.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Nude <small>Armchair</small></a></h2>
		                                            <sup>$ <span className="price">2999</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>

		                            <div className="col-md-6 col-xs-6 item price-regular category-armchair material-wood">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <span className="label label-warning">New</span>
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-4.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Aurora <small>Armchair</small></a></h2>
		                                            <sup>$ <span className="price">299</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>

		                            <div className="col-md-6 col-xs-6 item price-discount category-armchair material-metal">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <span className="label label-warning">New</span>
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-5.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Dining set <small>Armchair</small></a></h2>
		                                            <sub>$ 1999,-</sub>
		                                            <sup>$ <span className="price">1499</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>

		                            <div className="col-md-6 col-xs-6 item price-regular category-sofa material-wood">
		                                <article>
		                                    <div className="info">
		                                        <span className="add-favorite">
		                                            <a href="javascript:void(0);" data-title="Add to favorites" data-title-added="Added to favorites list"><i className="icon icon-heart"></i></a>
		                                        </span>
		                                        <span>
		                                            <a href="#productid1" className="mfp-open" data-title="Quick wiew"><i className="icon icon-eye"></i></a>
		                                        </span>
		                                    </div>
		                                    <div className="btn btn-add">
		                                        <i className="icon icon-cart"></i>
		                                    </div>
		                                    <div className="figure-grid">
		                                        <div className="image">
		                                            <a href="#productid1" className="mfp-open">
		                                                <img src="assets/images/product-6.png" alt="" width="360" />
		                                            </a>
		                                        </div>
		                                        <div className="text">
		                                            <h2 className="title h4"><a href="product.html">Seat chair <small>Sofa</small></a></h2>
		                                            <sup>$ <span className="price">896</span>,-</sup>
		                                            <span className="description clearfix">Gubergren amet dolor ea diam takimata consetetur facilisis blandit et aliquyam lorem ea duo labore diam sit et consetetur nulla</span>
		                                        </div>
		                                    </div>
		                                </article>
		                            </div>



		                        </div>
					            <Pagination updateState={this.updatePaginationData} totalItems={50} itemsPerPage={this.state.sorting.itemsPerPage} activePage={this.state.pagination.activePage}/>

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
});