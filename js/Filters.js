import FormInput from "./FormInput";

export default class Filters extends React.Component {
	onFilterTitleClick(event) {
        var $this = $(event.target),
        $parent = $this.parent();
        $parent.toggleClass('active');

        if ($parent.hasClass('active')) {
            $parent.find('.filter-content').slideDown(300);
        }
        else {
            $parent.find('.filter-content').slideUp(200);
        }
	}

    componentDidMount() {
        const Filters = this;
        const minPrice = 0;
        const maxPrice = 200000;

        Filters.props.updateState({
            filterType: 'price',
            from: minPrice,
            to: maxPrice
        });
        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: minPrice,
            max: maxPrice,
            from: minPrice,
            to: maxPrice,
            prefix: String.fromCharCode(8381),
            onChange: function (data) {
                Filters.props.updateState({
                    filterType: 'price',
                    from: data.from,
                    to: data.to
                });
            }
        });        
    }

	render() {
		return (
            <div id="filters" className="filters">
                <div className="filter-box">
                    <div className="title" onClick={this.onFilterTitleClick}>Цена</div>
                    <div className="filter-content">
                        <div className="price-filter">
                            <input type="text" id="range-price-slider" name="range" />
                        </div>
                    </div>
                </div>

                <div className="filter-box">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Производитель
                    </div>
                    <div className="filter-content">
                    	{this.props.filters.manufacturers.map((manufacturer, idx) => {
	                        return <FormInput key={idx} label={manufacturer.name} type="checkbox" any={manufacturer.any} updateState={(state) => {
                                state.filterType = "manufacturers";
								state.idx = idx;
								this.props.updateState(state);
	                        }} checked={manufacturer.checked}/>;
                    	})}
                    </div>
                </div>
            </div>
		);
	}
}