export default class FormInput extends React.Component {
	render() {
		let markup;
		switch (this.props.type) {
			case "checkbox":
				markup = (
	            	<span className="checkbox">
	                    <label className={this.props.checked ? "checked" : ""}>									
	                    	<input type="checkbox" onChange={(event) => { this.props.updateState({
	                    		checked: event.target.checked
	                    	}); }} value={this.props.checked}/>
	                    	{this.props.label}
	                    </label>
	                </span>                    		
				);
				break;
			case "color":
				markup = (
	            	<span className="checkbox">
	                    <label className={`checkbox-color ${this.props.checked ? "checked" : ""}`} style={{backgroundColor: `#${this.props.value}`, boxShadow: this.props.checked ? `0 0 0 2px white, 0 0 0 4px #${this.props.value}` : 'none'}}>
	                    	<input type="checkbox" onChange={(event) => { this.props.updateState({
	                    		checked: event.target.checked
	                    	}); }} value={this.props.checked}/>
	                    </label>
	                </span>                    		
				);
				break;
		}

		return markup;
	}
}