export default class FormInput extends React.Component {
	render() {
        const any = this.props.any;

		return (
            <span className="checkbox">                
                <label className={`${this.props.checked ? 'checked' : ''} ${this.props.type}`}>
                	{this.props.label}
                	<input type={this.props.type} checked={this.props.checked} onChange={event => {
                        if (!any || !this.props.checked) {
                            this.props.updateState({
                                operationType: any ? 'delete' : (event.target.checked ? 'add' : 'remove')
                            });                            
                        }
                	}}/>
                </label>
            </span>
		);
	}
}