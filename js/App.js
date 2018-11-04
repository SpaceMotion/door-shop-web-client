import Header from "./Header";
import Filters from "./Filters";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filters: {
				isReady: false				
			}
		};
		this.updateFiltersData = this.updateFiltersData.bind(this);
		this.setUpFilters = this.setUpFilters.bind(this);

		this.setUpFilters();
	}

	updateFiltersData(changes) {
		this.setState((state, props) => {
			state.filters[changes.filterType][changes.idx].checked = changes.checked;
			return state;
		});
	}

	setUpFilters() {
		// Manufacturers
		let manufacturersDataGet = new Promise((resolve, reject) => {
			fetch(`http://${this.props.api}/manufacturers`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				this.setState((state) => {
					state.filters.manufacturers = data.results;
					return state;
				});
				resolve();
			});
		});

		//Colors
		let colorsDataGet = new Promise((resolve, reject) => {
			fetch(`http://${this.props.api}/products`, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				let colors = [];
				data.results.forEach((product) => {
					if (product.color && !colors.find((color) => {
						return product.color.id === color.id;	
					})) {
						colors.push({
							id: product.color.id,
							value: product.color.value
						});
					}
				});

				this.setState((state) => {
					state.filters.colors = colors;
					return state;
				});
				resolve();
			});				
		});

		Promise.all([manufacturersDataGet, colorsDataGet]).then(() => {
			this.setState((state) => {
				state.filters.isReady = true;
				return state;
			});
		});
	}

	render() {
		return (
			<div>
			    <div className="page-loader"></div>

			    <div className="wrapper">
					<Header/>
			        <section className="header-content">
			            <div className="owl-slider">
			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-1.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">Modern furniture theme</h2>
			                            <div className="animated" data-animation="fadeInUp">
			                                Modern & powerfull template. <br /> Clean design & reponsive
			                                layout. Google fonts integration
			                            </div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-main" ><i className="icon icon-cart"></i> Buy this template</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-2.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">Mobile ready!</h2>
			                            <div className="animated" data-animation="fadeInUp">Unlimited Choices. Unbeatable Prices. Free Shipping.</div>
			                            <div className="animated" data-animation="fadeInUp">Furniture category icon fonts!</div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="#" className="btn btn-clean">Get insipred</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="item" style={{backgroundImage: "url(assets/images/gallery-3.jpg)"}}>
			                    <div className="box">
			                        <div className="container">
			                            <h2 className="title animated h1" data-animation="fadeInDown">
			                                Very Animate.css Friend.
			                            </h2>
			                            <div className="desc animated" data-animation="fadeInUp">
			                                Combine with animate.css. Or just use your own!.
			                            </div>
			                            <div className="desc animated" data-animation="fadeInUp">
			                                Bunch of typography effects.
			                            </div>
			                            <div className="animated" data-animation="fadeInUp">
			                                <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank" className="btn btn-clean">Buy this template</a>
			                            </div>
			                        </div>
			                    </div>
			                </div>

			            </div>
			        </section>

			        <section className="owl-icons-wrapper owl-icons-frontpage">
			            <header className="hidden">
			                <h2>Product categories</h2>
			            </header>

			            <div className="container">

			                <div className="owl-icons">
			                    <a href="#">
			                        <figure>
			                            <i className="f-icon f-icon-bathroom"></i>
			                            <figcaption>ДВЕРИ</figcaption>
			                        </figure>
			                    </a>

			                    <a href="#">
			                        <figure>
			                            <i className="f-icon f-icon-carpet"></i>
			                            <figcaption>ЛАМИНАТ</figcaption>
			                        </figure>
			                    </a>
			                </div>
			            </div>
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

			                        <div className="sort-bar clearfix">
			                            <div className="sort-results pull-left">
			                                <select>
			                                    <option value="1">10</option>
			                                    <option value="2">50</option>
			                                    <option value="3">100</option>
			                                    <option value="4">All</option>
			                                </select>
			                                <span>Showing all <strong>50</strong> of <strong>3,250</strong> items</span>
			                            </div>
			                            <div className="sort-options pull-right">
			                                <span className="hidden-xs">Sort by</span>
			                                <select id="sort-price">
			                                    <option data-option-value="asc">Price: lowest</option>
			                                    <option data-option-value="desc">Price: highest</option>
			                                </select>
			                                <span className="grid-list">
			                                    <a href="products-grid.html"><i className="fa fa-th-large"></i></a>
			                                    <a href="products-list.html"><i className="fa fa-align-justify"></i></a>
			                                    <a href="javascript:void(0);" className="toggle-filters-mobile"><i className="fa fa-search"></i></a>
			                                </span>
			                            </div>
			                        </div>

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

			        <footer>
			            <div className="container">
			                <div className="footer-showroom">
			                    <div className="row">
			                        <div className="col-sm-8">
			                            <h2>Visit our showroom</h2>
			                            <p>200 12th Ave, New York, NY 10001, USA</p>
			                            <p>Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm - 2 pm</p>
			                        </div>
			                        <div className="col-sm-4 text-center">
			                            <a href="#" className="btn btn-clean"><span className="icon icon-map-marker"></span> Get directions</a>
			                            <div className="call-us h4"><span className="icon icon-phone-handset"></span> 333.278.06622</div>
			                        </div>
			                    </div>
			                </div>

			                <div className="footer-links">
			                    <div className="row">
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Browse by</h5>
			                            <ul>
			                                <li><a href="#">Brand</a></li>
			                                <li><a href="#">Product</a></li>
			                                <li><a href="#">Category</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Recources</h5>
			                            <ul>
			                                <li><a href="#">Design</a></li>
			                                <li><a href="#">Projects</a></li>
			                                <li><a href="#">Sales</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-4 col-md-2">
			                            <h5>Our company</h5>
			                            <ul>
			                                <li><a href="#">About</a></li>
			                                <li><a href="#">News</a></li>
			                                <li><a href="#">Contact</a></li>
			                            </ul>
			                        </div>
			                        <div className="col-sm-12 col-md-6">
			                            <h5>Sign up for our newsletter</h5>
			                            <p><i>Add your email address to sign up for our monthly emails and to receive promotional offers.</i></p>
			                            <div className="form-group form-newsletter">
			                                <input className="form-control" type="text" name="email" placeholder="Email address" />
			                                <input type="submit" className="btn btn-clean btn-sm" value="Subscribe" />
			                            </div>
			                        </div>
			                    </div>
			                </div>

			                <div className="footer-social">
			                    <div className="row">
			                        <div className="col-sm-6">
			                            <a href="https://themeforest.net/item/mobel-furniture-website-template/20382155" target="_blank"><i className="fa fa-download"></i> Download Mobel</a> &nbsp; | <a href="#">Sitemap</a> &nbsp; | &nbsp; <a href="#">Privacy policy</a>
			                        </div>
			                        <div className="col-sm-6 links">
			                            <ul>
			                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
			                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
			                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
			                                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
			                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </footer>
			    </div>
			</div>
		);
	}
}

ReactDOM.render(React.createElement(App, {
	api: 'door-shop.pavelgoltsev.com:8000/api/v1'
}), document.getElementById('app'));