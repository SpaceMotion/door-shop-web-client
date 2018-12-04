import CategoriesPageItem from "./CategoriesPageItem";
import ReloadPageMixin from "./ReloadPageMixin";

export default class CategoriesPage extends ReloadPageMixin(React.Component) {
	constructor(props) {
		super(props);

		this.showPreLoader();
	}

	componentDidMount() {
		this.hidePreLoader();
	}

	render() {
		return (
			<div>
				<section className="main-header" style={{backgroundImage: "url(assets/images/gallery-3.jpg)"}}></section>
		        <section className="products products_type_category">
		            <div className="container">
		                <header>
		                    <div className="row">
		                        <div className="col-md-offset-2 col-md-8 text-center">
		                            <h2 className="title">Категории продуктов</h2>
		                            <div className="text">
		                                <p>Выберите категорию</p>
		                            </div>
		                        </div>
		                    </div>
		                </header>

		                <div className="row">
		                	{this.props.categories.map((category) => {
		                		return <CategoriesPageItem key={category.id} {...category}/>;
		                	})}
		                </div>	       
		            </div>
		        </section>
		    </div>
		);
	}
}