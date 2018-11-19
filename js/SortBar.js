export default class SortBar extends React.Component {
	constructor(props) {
		super(props);

		this.onStateChange = this.onStateChange.bind(this);
	}

	render() {
		return (
	        <div className="sort-bar clearfix"> 
	            <div className="sort-results pull-left">
	                <span>Выводить по</span>
	                <select data-option="itemsPerPage" onChange={this.onStateChange} value={this.props.itemsPerPage}>
	                    <option value="10">10</option>
	                    <option value="50">50</option>
	                    <option value="100">100</option>
	                </select>
	            </div>

	            <div className="sort-options pull-right">
	                <span className="hidden-xs">Сортировать по&nbsp;&nbsp;</span>
	                <select id="sort-price" data-option="price" onChange={this.onStateChange} value={this.props.price}>
	                    <option value="asc">Цена: по возрастанию</option>
	                    <option value="desc">Цена: по убыванию</option>
	                </select>
	                <select id="sort-name" data-option="name" onChange={this.onStateChange} value={this.props.name}>
	                    <option value="A-z">Название: от А до Я</option>
	                    <option value="z-A">Название: от Я до А</option>
	                </select>
	                <span className="grid-list">
                    	<a className="toggle-filters-mobile"><i className="fa fa-search"></i></a>
	                </span>
	            </div>
	        </div>			
		);
	}

	onStateChange(event) {
		let value = event.target.value;
		const option = event.target.dataset.option;
		if (option === 'itemsPerPage') {
			value = parseInt(value);
		}
		this.props.updateState({
			option,
			value
		});
	}
}