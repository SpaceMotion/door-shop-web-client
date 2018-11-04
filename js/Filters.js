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

	render() {
		return (
            <div id="filters" className="filters">
                <div className="filter-box">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Производитель
                    </div>
                    <div className="filter-content">
                    	{this.props.filters.manufacturers.map((manufacturer, idx) => {
	                        return <FormInput key={idx} label={manufacturer.name} type="checkbox" updateState={(state) => {
                                state.filterType = "manufacturers";
								state.idx = idx;
								this.props.updateState(state);
	                        }} checked={manufacturer.checked}/>;
                    	})}
                    </div>
                </div>

                <div className="filter-box">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Цвет
                    </div>
                    <div className="filter-content filter-content_type_color">
                    	{this.props.filters.colors.map((color, idx) => {
	                        return <FormInput key={idx} value={color.value} type="color" updateState={(state) => {
                                state.filterType = "colors";
								state.idx = idx;
								this.props.updateState(state);
	                        }} checked={color.checked}/>;
                    	})}
                    </div>
                </div>
            </div>
		);
	}
}