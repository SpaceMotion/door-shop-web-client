class App extends React.Component {
	render() {
		return (
			<div>
			    <div className="page-loader"></div>

			    <div className="wrapper">
			        <nav className="navbar-fixed">
			            <div className="container">
			                <div className="navigation navigation-top clearfix">
			                    <ul>
			                        <li><a href="javascript:void(0);" className="open-search"><i className="icon icon-magnifier"></i></a></li>
			                        <li><a href="javascript:void(0);" className="open-cart"><i className="icon icon-cart"></i> <span>3</span></a></li>
			                    </ul>
			                </div>
			                <div className="navigation navigation-main">
			                    <a href="#" className="open-menu"><i className="icon icon-menu"></i></a>
			                    <div className="floating-menu">
			                        <div className="close-menu-wrapper">
			                            <span className="close-menu"><i className="icon icon-cross"></i></span>
			                        </div>

			                        <ul>
			                            <li><a href="index.html">Домой</a></li>
			                            <li>
			                                <a href="#">Каталог товаров <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
			                                <div className="navbar-dropdown navbar-dropdown-single">
			                                    <div className="navbar-box">
			                                        <div className="box-2">
			                                            <div className="box clearfix">
			                                                <ul>
			                                                    <li><a href="#">Двери</a></li>
			                                                    <li><a href="#">Ламинат</a></li>
			                                                </ul>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </li>
			                            <li>
			                                <a href="#">Оплата и доставка</a>
			                            </li>
			                            <li>
			                                <a href="#">Контакты</a>
			                            </li>
			                        </ul>
			                    </div>
			                </div>
			                <div className="search-wrapper">
			                    <input className="form-control" placeholder="Search..." />
			                    <button className="btn btn-main btn-search">Go!</button>

			                    <div className="search-results">
			                        <div className="search-result-items">
			                            <div className="title h4">Products <a href="#" className="btn btn-clean-dark btn-xs">View all</a></div>
			                            <ul>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Green corner</span> <span className="category">Sofa</span></a></li>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Laura</span> <span className="category">Armchairs</span></a></li>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Nude</span> <span className="category">Dining tables</span></a></li>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Aurora</span> <span className="category">Nightstands</span></a></li>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Dining set</span> <span className="category">Kitchen</span></a></li>
			                                <li><a href="#"><span className="id">42563</span> <span className="name">Seat chair</span> <span className="category">Bar sets</span></a></li>
			                            </ul>
			                        </div>
			                    </div>
			                </div>

			                <div className="login-wrapper">
			                    <form>
			                        <div className="h4">Sign in</div>
			                        <div className="form-group">
			                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"></input>
			                        </div>
			                        <div className="form-group">
			                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
			                        </div>
			                        <div className="form-group">
			                            <a href="#forgotpassword" className="open-popup">Forgot password?</a>
			                            <a href="#createaccount" className="open-popup">Don't have an account?</a>
			                        </div>
			                        <button type="submit" className="btn btn-block btn-main">Submit</button>
			                    </form>
			                </div>

			                <div className="cart-wrapper">
			                    <div className="checkout">
			                        <div className="clearfix">
			                            <div className="row">
			                                <div className="cart-block cart-block-item clearfix">
			                                    <div className="image">
			                                        <a href="product.html"><img src="assets/images/product-1.png" alt="" /></a>
			                                    </div>
			                                    <div className="title">
			                                        <div><a href="product.html">Green corner</a></div>
			                                        <small>Green corner</small>
			                                    </div>
			                                    <div className="quantity">
			                                        <input type="number" className="form-control form-quantity" />
			                                    </div>
			                                    <div className="price">
			                                        <span className="final">$ 1.998</span>
			                                        <span className="discount">$ 2.666</span>
			                                    </div>
			                                    <span className="icon icon-cross icon-delete"></span>
			                                </div>

			                                <div className="cart-block cart-block-item clearfix">
			                                    <div className="image">
			                                        <a href="product.html"><img src="assets/images/product-2.png" alt="" /></a>
			                                    </div>
			                                    <div className="title">
			                                        <div><a href="product.html">Green corner</a></div>
			                                        <small>Green corner</small>
			                                    </div>
			                                    <div className="quantity">
			                                        <input type="number" className="form-control form-quantity" />
			                                    </div>
			                                    <div className="price">
			                                        <span className="final">$ 1.998</span>
			                                        <span className="discount">$ 2.666</span>
			                                    </div>
			                                    <span className="icon icon-cross icon-delete"></span>
			                                </div>

			                                <div className="cart-block cart-block-item clearfix">
			                                    <div className="image">
			                                        <a href="product.html"><img src="assets/images/product-3.png" alt="" /></a>
			                                    </div>
			                                    <div className="title">
			                                        <div><a href="product.html">Green corner</a></div>
			                                        <small>Green corner</small>
			                                    </div>
			                                    <div className="quantity">
			                                        <input type="number" className="form-control form-quantity" />
			                                    </div>
			                                    <div className="price">
			                                        <span className="final">$ 1.998</span>
			                                        <span className="discount">$ 2.666</span>
			                                    </div>
			                                    <span className="icon icon-cross icon-delete"></span>
			                                </div>

			                                <div className="cart-block cart-block-item clearfix">
			                                    <div className="image">
			                                        <a href="product.html"><img src="assets/images/product-4.png" alt="" /></a>
			                                    </div>
			                                    <div className="title">
			                                        <div><a href="product.html">Green corner</a></div>
			                                        <small>Green corner</small>
			                                    </div>
			                                    <div className="quantity">
			                                        <input type="number" className="form-control form-quantity" />
			                                    </div>
			                                    <div className="price">
			                                        <span className="final">$ 1.998</span>
			                                        <span className="discount">$ 2.666</span>
			                                    </div>
			                                    <span className="icon icon-cross icon-delete"></span>
			                                </div>
			                            </div>

			                            <hr />

			                            <div className="clearfix">
			                                <div className="cart-block cart-block-footer clearfix">
			                                    <div>
			                                        <strong>Discount 15%</strong>
			                                    </div>
			                                    <div>
			                                        <span>$ 159,00</span>
			                                    </div>
			                                </div>

			                                <div className="cart-block cart-block-footer clearfix">
			                                    <div>
			                                        <strong>Shipping</strong>
			                                    </div>
			                                    <div>
			                                        <span>$ 30,00</span>
			                                    </div>
			                                </div>

			                                <div className="cart-block cart-block-footer clearfix">
			                                    <div>
			                                        <strong>VAT</strong>
			                                    </div>
			                                    <div>
			                                        <span>$ 59,00</span>
			                                    </div>
			                                </div>
			                            </div>

			                            <hr />

			                            <div className="clearfix">
			                                <div className="cart-block cart-block-footer clearfix">
			                                    <div>
			                                        <strong>Total</strong>
			                                    </div>
			                                    <div>
			                                        <div className="h4 title">$ 1259,00</div>
			                                    </div>
			                                </div>
			                            </div>

			                            <div className="cart-block-buttons clearfix">
			                                <div className="row">
			                                    <div className="col-xs-6">
			                                        <a href="#" className="btn btn-clean-dark">Continue shopping</a>
			                                    </div>
			                                    <div className="col-xs-6 text-right">
			                                        <a href="#" className="btn btn-main"><span className="icon icon-cart"></span> Checkout</a>
			                                    </div>
			                                </div>
			                            </div>

			                        </div>
			                    </div>
			                </div>
			            </div>
			        </nav>

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

ReactDOM.render(<App/>, document.getElementById('app'));