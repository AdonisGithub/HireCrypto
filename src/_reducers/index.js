import { combineReducers } from 'redux';
import { registration } from './registration.reducer';
import {accession} from './login.reducer';
import {sellerregistration} from './sellerregistration.reducer';
import {selleraccession} from './sellerlogin.reducer';

const rootReducer = combineReducers({
    registration,
    accession,
    sellerregistration,
    selleraccession

});

export default rootReducer;