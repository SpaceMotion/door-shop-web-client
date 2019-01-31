import React from "react";
import FormInput from "./FormInput";

export default class Filters extends React.Component {
    componentDidMount() {
        $('.toggle-filters-close').on('click', function () {
            $('.filters').removeClass('active');
            $('html,body').animate({
                scrollTop: $('body').offset().top
            }, 800);
            return false;
        });
        $("#range-price-slider").ionRangeSlider({
            type: "double",
            min: this.props.filters.price.from,
            max: this.props.filters.price.to,
            prefix: String.fromCharCode(8381),
            onFinish: data => {
                this.props.updateState([{
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
        const manufacturers = this.props.filters.manufacturers;
        const collections = this.props.filters.collections;
        const noSelectedManufacturers = manufacturers.length === 0;

        if (priceSliderDOM) {
            const price = this.props.filters.price;
            priceSliderDOM.update({
                from: price.from,
                to: price.to,
            });            
        }

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
                        <FormInput label="Любой" type="checkbox" any={true} updateState={state => {
                            state.key = 'manufacturer';
                            this.props.updateState([state]);
                        }} checked={noSelectedManufacturers}/>
                    	{[...this.props.manufacturers.values()].map(manufacturer => <FormInput key={manufacturer.id} label={manufacturer.name} type="checkbox" updateState={state => {
                            state.key = 'manufacturer';
                            state.value = manufacturer.id;
                            this.props.updateState([state]);
                        }} checked={manufacturers.includes(manufacturer.id)}/>)}
                    </div>
                </div>

                <div className="filter-box active">
                    <div className="title" onClick={this.onFilterTitleClick}>
                        Коллекция
                    </div>
                    <div className="filter-content">
                        <FormInput label="Любая" type="checkbox" any={true} updateState={state => {
                            state.key = 'collection';
                            this.props.updateState([state]);
                        }} checked={collections.length === 0}/>
                        {[...this.props.collections.values()].map(collection => (noSelectedManufacturers || manufacturers.includes(collection.manufacturer)) && <FormInput key={collection.id} label={collection.name} type="checkbox" updateState={state => {
                            state.key = 'collection';
                            state.value = collection.id;
                            this.props.updateState([state]);
                        }} checked={collections.includes(collection.id)}/>)}
                    </div>
                </div>

                <div className="toggle-filters-close btn btn-main visible-xs visible-sm">
                    Закрыть панель
                </div>
            </div>
		);
	}
}