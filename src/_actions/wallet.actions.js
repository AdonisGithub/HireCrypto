import { reportConstants } from '../_constants';

export function StoreWalletAddress(address) {
    return function (dispatch) {
      console.log('action-walletaddress:',address)
      dispatch({
        type: reportConstants.WALLETADDRESSGET_SUCCESS,
        payload: address,
      });
    };
  }