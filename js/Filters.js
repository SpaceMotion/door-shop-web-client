import FormInput from "./FormInput";

export default class Filters extends React.Component {
    componentDidMount() {
        const Filters = this;
        
        $('.toggle-filters-close').on('click', function () {
            $('.filters').removeClass('active');
            $('html,body').animate({
                scrollTop: $('body').offset().top
            }, 800);
            return false;
        });
        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: this.props.minPrice,
            max: this.props.maxPrice,
            prefix: String.fromCharCode(8381),
            onFinish: function (data) {
                Filters.props.updateState([{
                    key: 'min_price',
                    value: data.from,
                    operationType: 'update'
                }, {
                    key: 'max_price',
                    value: data.to,
                    operationType: 'update'
                }]);
            }
        });
        this.priceSliderDOM = $("#range-price-slider").data("ionRangeSlider");        
    }

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
        const priceSliderDOM = this.priceSliderDOM;
        if (priceSliderDOM) {
            priceSliderDOM.update({
                from: this.props.filters.price.from || this.props.minPrice,
                to: this.props.filters.price.to || this.props.maxPrice,
            });            
        }

        const manufacturers = this.props.filters.manufacturers;
        const manufacturersCheckedIds = manufacturers.map((manufacturer) => {
            return manufacturer.checked ? manufacturer.id : null;
        });
        const isManufacturersAnyChecked = manufacturers.find((manufacturer) => {
            return manufacturer.any && manufacturer.checked;
        });

		return (
            <div id="filters" className="filters">
                <div className="filter-box active">
                    <div className="title" onClick={this.onFilterTitleClick}>Цена</div>
                    <div className="filter-content">
                        <div className="price-filter">
                            <input type="text" id="range-price-slider" name="range" />
                        </div>
                    </div>
                </div>

                <div className="filter-box active">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Производитель
                    </div>
                    <div className="filter-content">
                    	{this.props.filters.manufacturers.map((manufacturer, idx) => {
	                        return <FormInput key={idx} label={manufacturer.name} any={manufacturer.any} type="checkbox" updateState={(state) => {
                                state.key = 'manufacturer';
                                state.value = manufacturer.id;
								this.props.updateState([state]);
	                        }} checked={manufacturer.checked}/>;
                    	})}
                    </div>
                </div>

                <div className="filter-box active">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Коллекция
                    </div>
                    <div className="filter-content">
                        {this.props.filters.collections.map((collection, idx) => {
                            return collection.any || isManufacturersAnyChecked || manufacturersCheckedIds.includes(collection.manufacturer) ? <FormInput key={idx} label={collection.name} type="checkbox" any={collection.any} updateState={(state) => {
                                state.key = 'collection';
                                state.value = collection.id;
                                this.props.updateState([state]);
                            }} checked={collection.checked}/> : null;
                        })}
                    </div>
                </div>

                <div className="toggle-filters-close btn btn-main visible-xs visible-sm">
                    Закрыть панель
                </div>
            </div>
		);
	}
}