import React, { Component } from 'react'
import Pagination from '@material-ui/lab/Pagination';

class PaginationPage extends Component {

    render() {
        return (
            <div className="pagination-div">
                <Pagination
                    count={this.props.count}
                    page={this.props.page}
                    color="secondary"
                    onChange={this.changePage}
                />
            </div>
        )
    }

    changePage = (event, value) => {
        this.props.changeData(value);
    }
}

export default PaginationPage