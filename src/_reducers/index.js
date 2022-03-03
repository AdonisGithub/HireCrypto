import { combineReducers } from 'redux';
import { savewalletaddress } from './wallet.reducer';

const rootReducer = combineReducers({
    savewalletaddress,
});

export default rootReducer;