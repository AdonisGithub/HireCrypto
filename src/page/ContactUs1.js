import React, {useState} from "react";
import validator from 'validator';
import axios from "axios";
//import {useSelector } from "react-redux";

import { ErrorAlert, SuccessAlert } from "../components/common/ToastAlert";
//const API_URL = "http://localhost:8080";
const API_URL = "https://hirecrypto.com";


const ContactUs1 = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  //const walletaddress = useSelector((state) => state.savewalletaddress.walletaddress); //store data
  //console.log("ContactUs:", walletaddress);

  const submit = (e) => {
    e.preventDefault();

    if(validator.isEmail(email)&&firstName && lastName && phoneNumber && message){
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        //walletaddress: walletaddress
        
      };
      axios.post(API_URL + "/api/contact",data )
      .then(res => { 
        console.log(res.data);
        SuccessAlert(res.data);
      })
      .catch(err =>{ 
        console.log(err.response.data); 
        ErrorAlert(err.response.data);
      });
    }
    else 
      ErrorAlert("Something is wrong!");
  };

  return (
    <div className="flex justify-center items-center bg-[#182037] w-full h-screen">
      <div className="w-full  pb-11" >
        <div className="w-full text-center font-bold font-sans text-white text-[38px]  pb-2">
          Contact Us
        </div>
        <div className="w-full text-center font-sans text-white text-[18px] ">
          <em>Fields marked with an asterisk (*) are required.</em>
        </div>
        <div className="w-full justify-center px-[45px] md:px-[96px]">
          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-4">
              <h1 className="text-white font-bold  mb-1"> First Name* </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>
            <div className=" mt-4">
              <h1 className="text-white font-bold mb-1"> Last Name* </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-4">
              <h1 className="text-white font-bold  mb-1"> Email* </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className=" mt-4">
              <h1 className="text-white font-bold mb-1"> Phone Number* </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full justify-center mt-4">
            <h1 className="text-white font-bold mb-1"> Message </h1>
            <textarea
              className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
              style={{ width: "inherit" }}
              type="message"
              name="message"
              rows={6}
              cols={40}
              placeholder="Message"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <button className="flex shrink-0  h-9  px-6 py-1  font-semibold border border-transparent hover:border-gray-200 text-white active:text-red-600 bg-[#385d94] hover:bg-transparent hover:text-green-600 rounded-md"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export { ContactUs1 };
