import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAddress } from '../action';
import CircularProgress from '@material-ui/core/CircularProgress';
import AddressPage from '../component/AddressPage';

class AddressContainer extends Component {

    componentDidMount() {
        this.props.getAddress();
    }

    render() {
        return (
            this.props.loading ?
                <div id="circular-progress-div">
                    <CircularProgress />
                </div>
                :
                <AddressPage
                    {...this.props}
                />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.address.loading,
        addressData: state.address.addressData,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getAddress: () => dispatch(getAddress()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddressContainer)
