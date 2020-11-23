import { combineReducers } from 'redux';
import historyReducer from '../modules/History/reducer';
import addressReducer from '../modules/Address/reducer';

const appReducer = combineReducers({
    history: historyReducer,
    address: addressReducer,
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
