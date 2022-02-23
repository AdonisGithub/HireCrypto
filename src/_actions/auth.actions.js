import { userConstants } from '../_constants';
import axios from "axios";
import { Toast } from "../components/common/ToastAlert";
const API_URL = "http://localhost:8080";


 export function register(registeruserdata, navigate) {
     return dispatch => {
         //console.log('sended data:', registeruserdata);
         axios.post(API_URL + "/api/auth/signup", registeruserdata)
            .then(res => { 
                    console.log('received data:', res.data);
                    Toast("",res.data, "success");
                    dispatch({
                        type: userConstants.REGISTER_SUCCESS, 
                        payload: "success"
                    });
                    if(navigate) {
                        navigate('/login')
                    }
                }
            )
            .catch(error => {
                console.log("received error data:", error.response.data)
                Toast("",error.response.data,"danger");
                dispatch({
                    type: userConstants.REGISTER_FAILURE, 
                    payload: "error"
                });
            });
     };
 
 }

export function login(logindata, navigate) {
    return dispatch => {
        //console.log('sended data:', logindata);
        axios.post(API_URL + "/api/auth/signin", logindata)
           .then(res => { 
                   console.log('received data:', res.data);
                   Toast("","login success!", "success");
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('user', JSON.stringify(res.data));
                   dispatch({
                       type: userConstants.LOGIN_SUCCESS, 
                       payload: res.data
                   });
                   if(navigate) {
                    navigate('/virtualmal')
                }
               }
           )
           .catch(error => {
               //console.log("received error data:", error.response.data)
               Toast("",error.response.data,"danger");
               dispatch({
                   type: userConstants.LOGIN_FAILURE, 
                   payload: "error"
               });
           });
    };

};

export function sellerregister(sellerregisterdata) {
    return dispatch => {
        //console.log('sended data:', registeruserdata);
        axios.post(API_URL + "/api/auth/sellersignup", sellerregisterdata)
           .then(res => { 
                   //console.log('received data:', res.data);
                   Toast("",res.data, "success");
                   dispatch({
                       type: userConstants.SELLERREGISTER_SUCCESS, 
                       payload: res.data
                   });
                   //history.push('/sellersignupcongratulations');
               }
           )
           .catch(error => {
               console.log("received error data:", error.response.data)
               dispatch({
                   type: userConstants.SELLERREGISTER_FAILURE, 
                   payload: "error"
               });
           });
    };

}

export function sellerlogin(sellerlogindata) {
   return dispatch => {
       //console.log('sended data:', sellerlogindata);
       axios.post(API_URL + "/api/auth/sellersignin", sellerlogindata)
          .then(res => { 
                  console.log('received data:', res.data);
                  Toast("","login success!", "success");
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                   //localStorage.setItem('user', JSON.stringify(res.data));
                  dispatch({
                      type: userConstants.SELLERLOGIN_SUCCESS, 
                      payload: res.data
                  });
                  //history.push('/sellerhomepage');
              }
          )
          .catch(error => {
              //console.log("received error data:", error.response.data)
              Toast("",error.response.data,"danger");
              dispatch({
                  type: userConstants.SELLERLOGIN_FAILURE, 
                  payload: "error"
              });
          });
   };

};