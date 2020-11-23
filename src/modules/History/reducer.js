import { HistoryActionTypes } from './action';

const initialState = {
    loading: null,
    historyData: [],
};

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case HistoryActionTypes.GET_HISTORY:
            return {
                ...state,
                loading: true,
            };
        case HistoryActionTypes.GET_HISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                historyData: action.payload,
            };
        default:
            return state;
    }
};

export default historyReducer;
