export const HistoryActionTypes = {
    GET_HISTORY: 'GET_HISTORY',
    GET_HISTORY_SUCCESS: 'GET_HISTORY_SUCCESS',
    GET_HISTORY_FAILURE: 'GET_HISTORY_FAILURE',
};

export const getHistory = () => {
    return {
        type: HistoryActionTypes.GET_HISTORY,
    };
};

export const getHistorySuccess = (data) => {
    return {
        type: HistoryActionTypes.GET_HISTORY_SUCCESS,
        payload: data,
    };
};

