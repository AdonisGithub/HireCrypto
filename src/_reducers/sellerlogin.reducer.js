import { userConstants } from '../_constants';
const initialstate = {
     sellerloginstate: false
}

export function selleraccession(state =initialstate , action) {
    switch (action.type) {
          case userConstants.SELLERREGISTER_SUCCESS:
               return {
                    ...state,
                    loginstate: true,
               };
          case userConstants.SELLERREGISTER_FAILURE:
               return {

               };
          default:
               return state
    }
}