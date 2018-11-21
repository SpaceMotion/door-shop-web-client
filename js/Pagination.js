export default class Pagination extends React.Component {
	onControlItemClick(event, controlName) {
		event.preventDefault();
		const activePage = this.props.activePage;
		const state = {
			activePage
		};
		if (controlName === 'previous') {
			if (activePage > 1) {
				state.activePage = activePage - 1;
			}
		} else if (controlName === 'next') {
			if (parseInt(this.props.totalItems / this.props.itemsPerPage) > activePage) {
				state.activePage = activePage + 1;	
			}
		}
		this.props.updateState(state);
	}

	render() {
		const pagesCount = parseInt(this.props.totalItems / this.props.itemsPerPage);
		const pages = [...new Array(pagesCount)];
		const activePage = this.props.activePage;
		const previousControlDisabled = activePage === 1;
		const nextControlDisabled = activePage === pagesCount;

		return (
            <div className="pagination-wrapper">
                <ul className="pagination">
                    <li className={previousControlDisabled ? 'disabled' : ''}>
                        <a href="#" aria-label="Previous" onClick={(event) => {
                        	this.onControlItemClick(event, 'previous');
                        }}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.map((page, idx) => {
                    	return <li key={idx} className={idx + 1 === activePage ? 'active' : ''}><a href="#" onClick={(event) => {
                    		event.preventDefault();
                    		this.props.updateState({
								activePage: idx + 1
                    		});
                    	}}>{idx + 1}</a></li>;
                    })}
                    <li className={nextControlDisabled ? 'disabled' : ''}>
                        <a href="#" aria-label="Next" onClick={(event) => {
                        	this.onControlItemClick(event, 'next');
                        }}>
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
		);
	}
}