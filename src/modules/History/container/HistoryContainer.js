import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory } from '../action';
import CircularProgress from '@material-ui/core/CircularProgress';
import HistoryPage from '../component/HistoryPage';

class HistoryContainer extends Component {

    componentDidMount() {
        this.props.getHistory();
    }

    render() {
        return (
            this.props.loading ?
                <div id="circular-progress-div">
                    <CircularProgress />
                </div>
                :
                <HistoryPage
                    {...this.props}
                />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.history.loading,
        historyData: state.history.historyData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getHistory: () => dispatch(getHistory()),
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)
