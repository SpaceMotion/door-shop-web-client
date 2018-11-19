export default class FormInput extends React.Component {
	render() {
        let any = this.props.any;
		return (
            <span className="checkbox">                
                <label className={`${this.props.checked ? 'checked' : ''} ${this.props.type} ${this.props.value ? 'color' : ''}`} style={{backgroundColor: `#${this.props.value}` || 'none', boxShadow: this.props.value && this.props.checked ? '0 4px 0.5em black' : 'none'}}>
                	{this.props.label}
                	<input type={this.props.type} checked={!!this.props.checked} onChange={(event) => {
                		this.props.updateState({
                			checked: any || event.target.checked,
                            any
                		});
                	}}/>
                </label>
            </span>
		);
	}
}