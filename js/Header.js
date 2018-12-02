import {Link} from "react-router-dom";

export default class Header extends React.Component {
	render() {
		return (
	        <nav className="navbar-fixed header-nav">
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
	                            <li>
	                            	<Link to="/">Домой</Link>
	                            </li>
	                            <li>
	                                <a href="javascript:void(0);">Каталог товаров <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></a>
	                                <div className="navbar-dropdown navbar-dropdown-single">
	                                    <div className="navbar-box">
	                                        <div className="box-2">
	                                            <div className="box clearfix">
	                                                <ul>
	                                                	{this.props.categories.map((category, idx) => {
	                                                		return (
																<li key={idx}>
																	<Link to={`/products?category=${category.id}`}>{category.name}</Link>
																</li>
	                                                		);
	                                                	})}
	                                                </ul>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </li>
	                            <li>
	                            	<Link to="/delivery">Оплата и доставка</Link>
	                            </li>
	                            <li>
	                            	<Link to="/contacts">Контакты</Link>
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
		);
	}
}