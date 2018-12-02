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
        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: 0,
            max: 100000,
            from: 0,
            to: 100000,
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

                {false ? (<div className="filter-box">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Цвет
                    </div>
                    <div className="filter-content filter-content_type_color">
                    	{this.props.filters.colors.map((color, idx) => {
	                        return <FormInput key={idx} value={color.value} label={color.name} type="checkbox" any={color.any} updateState={(state) => {
                                state.filterType = "colors";
								state.idx = idx;
								this.props.updateState(state);
	                        }} checked={color.checked}/>;
                    	})}
                    </div>
                </div>) : null}
            </div>
		);
	}
}