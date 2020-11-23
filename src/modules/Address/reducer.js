import { AddressActionTypes } from './action';

const initialState = {
    loading: null,
    addressData: [],
};

export const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddressActionTypes.GET_ADDRESS:
            return {
                ...state,
                loading: true,
            };
        case AddressActionTypes.GET_ADDRESS_SUCCESS:
            return {
                ...state,
                loading: false,
                addressData: action.payload,
            };
        default:
            return state;
    }
};

export default addressReducer;
