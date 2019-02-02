import React from "react";

export default class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.pageRefOffsetEnabled = 2;
    }

	onControlItemClick(event, controlName) {
		event.preventDefault();
		let activePage = this.props.activePage;
		if (controlName === 'previous') {
			if (activePage > 1) {
				activePage--;
			}
		} else if (controlName === 'next') {
			if (this.props.totalItems / this.props.itemsPerPage > activePage) {
				activePage++;	
			}
		}
        if (activePage !== this.props.activePage) {
            this.props.updateState([{
                key: 'page',
                value: activePage,
                operationType: 'update'
            }]);            
        }
	}

	render() {
		const pagesCount = Math.ceil(this.props.totalItems / this.props.itemsPerPage);
		const pages = [...new Array(pagesCount)];
		const activePage = this.props.activePage;
		const previousControlDisabled = activePage === 1;
        const nextControlDisabled = activePage === pagesCount;
        let leftEdgePageNum = activePage - this.pageRefOffsetEnabled;
        let rightEdgePageNum = activePage + this.pageRefOffsetEnabled;
        let leftEdgeExtra = 0, rightEdgeExtra = 0;
        if (leftEdgePageNum < 1) {
            leftEdgeExtra = Math.abs(1 - leftEdgePageNum);
        }
        if (rightEdgePageNum > pagesCount) {
            rightEdgeExtra = rightEdgePageNum - pagesCount;
        }
        leftEdgePageNum -= rightEdgeExtra;
        rightEdgePageNum += leftEdgeExtra;

		return (
            <div className="pagination-wrapper">
                <ul className="pagination">
                    <li className={previousControlDisabled ? 'disabled' : ''}>
                        <a href="#" aria-label="Previous" onClick={event => {
                        	this.onControlItemClick(event, 'previous');
                        }}>
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.map((page, idx) => {
                        const currentPageNum = idx + 1;
                        return currentPageNum >= leftEdgePageNum && currentPageNum <= rightEdgePageNum ? <li key={idx} className={currentPageNum === activePage ? 'active' : ''}><a href="#" onClick={event => {
                            event.preventDefault();
                            const activePage = currentPageNum;
                            if (this.props.activePage !== activePage) {
                                this.props.updateState([{
                                    key: 'page',
                                    value: activePage,
                                    operationType: 'update'
                                }]);
                            }
                        }}>{currentPageNum}</a></li> : null;
                    })}
                    <li className={nextControlDisabled ? 'disabled' : ''}>
                        <a href="#" aria-label="Next" onClick={event => {
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