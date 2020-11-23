export const AddressActionTypes = {
    GET_ADDRESS: 'GET_ADDRESS',
    GET_ADDRESS_SUCCESS: 'GET_ADDRESS_SUCCESS',
    GET_ADDRESS_FAILURE: 'GET_ADDRESS_FAILURE',
};

export const getAddress = () => {
    return {
        type: AddressActionTypes.GET_ADDRESS,
    };
};

export const getAddressSuccess = (data) => {
    return {
        type: AddressActionTypes.GET_ADDRESS_SUCCESS,
        payload: data,
    };
};

