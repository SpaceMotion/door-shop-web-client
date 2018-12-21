export default class SortBar extends React.Component {
	constructor(props) {
		super(props);

		this.onStateChange = this.onStateChange.bind(this);
	}

    componentDidMount() {
        $('.toggle-filters-mobile').on('click', function () {
            $('.filters').addClass('active');
        });
    }

	render() {
		return (
	        <div className="sort-bar clearfix"> 
	            <div className="sort-results pull-left">
	                <span>Выводить по</span>
	                <select data-option="itemsPerPage" onChange={this.onStateChange} value={this.props.itemsPerPage}>
	                	{this.props.itemsPerPageOptions.map((option) => {
	                		return <option key={option} value={option}>{option}</option>;
	                	})}	                    
	                </select>
	            </div>

	            <div className="sort-options pull-right">
	                <span className="hidden-xs">Сортировать по&nbsp;&nbsp;</span>
	                <select id="sort-price" data-option="sortBy" onChange={this.onStateChange} value={this.props.sortBy}>
                        {[...this.props.sortByOptions.entries()].map(([id, options]) => {
                            return <option key={id} value={id}>{options.label}</option>;
                        })}
	                </select>
	                <span className="grid-list">
                    	<a className="toggle-filters-mobile"><i className="fa fa-search"></i></a>
	                </span>
	            </div>
	        </div>			
		);
	}

	onStateChange(event) {
        const target = event.target;
        this.props.updateState([{
            key: target.dataset.option === 'itemsPerPage' ? 'page_size' : 'sort_by',
            value: target.value,
            operationType: 'update'
        }]);            
	}
}
