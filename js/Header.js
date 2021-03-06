import React from "react";
import Cart from "./Cart";
import ProductsSearch from "./ProductsSearch";
import {Link} from "react-router-dom";

export default class Header extends React.Component {
	render() {
		const cart = this.props.cart;
		const productsCount = Object.keys(cart.storage.products).length;
		const phone = this.props.companyInfo.phone;

		return (
	        <nav className="navbar-fixed header-nav">
	            <div className="container">
	                <div className="navigation navigation-top clearfix">
	                    <ul>
	                        <li><a href="#" onClick={event => {
								event.preventDefault();
							}} className="open-search"><i className="icon icon-magnifier"></i></a></li>
	                        <li><a href="#" onClick={event => {
								event.preventDefault();
								this.props.toggleCartHandler();
							}} className="open-cart"><i className="icon icon-cart"></i>
							{productsCount > 0 && <span>{productsCount}</span>}</a></li>
	                    </ul>
	                </div>
	                <div className="navigation navigation-main">
	                	<div className="logo-phone">
							<Link to="/"><img src="%URI_PREFIX%assets/images/logo.png" alt="Логотип компании" style={{marginRight: '10px', width: '130px'}}/></Link>
							<a href={`tel:${phone}`} style={{color: 'white'}}>{phone}</a>
	                	</div>
	                    <a href="#" onClick={event => {
							event.preventDefault();
						}} className="open-menu"><i className="icon icon-menu"></i></a>
	                    <div className="floating-menu">
	                        <div className="close-menu-wrapper">
	                            <span className="close-menu"><i className="icon icon-cross"></i></span>
	                        </div>

	                        <ul>
	                            <li>
	                            	<Link to="/">Главная</Link>
	                            </li>
	                            <li>
	                                <Link to="/categories">Каталог товаров <span className="open-dropdown"><i className="fa fa-angle-down"></i></span></Link>
	                                <div className="navbar-dropdown navbar-dropdown-single">
	                                    <div className="navbar-box">
	                                        <div className="box-2">
	                                            <div className="box clearfix">
	                                                <ul>
	                                                	{[...this.props.categories.values()].map(category => (
															<li key={category.id}>
																<Link to={`/products?category=${category.id}`} onClick={() => {
															    	window.dispatchEvent(new CustomEvent('closeMenuMobile'));																	
																}}>{category.name}</Link>
															</li>
	                                                	))}
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
					<ProductsSearch manufacturers={this.props.manufacturers} collections={this.props.collections}/>					
					<Cart data={cart} manufacturers={this.props.manufacturers} collections={this.props.collections} onCartProductQuantityChanged={this.props.onCartProductQuantityChanged} removeCartProduct={this.props.removeCartProduct}/>
	            </div>
	        </nav>
		);
	}
}
