import { reportConstants } from '../_constants';
const initialstate = {
     walletaddress: ""
}

export function savewalletaddress(state =initialstate , action) {
    switch (action.type) {
          case reportConstants.WALLETADDRESSGET_SUCCESS:
               return {
                    ...state,
                    walletaddress: action.payload
               };
          default:
               return state
    }
}