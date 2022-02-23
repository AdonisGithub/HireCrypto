import React  from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className=" bg-[#182037] flex justify-between px-11">
      <div className="my-10">
        <div className="text-base text-white font-bold font-sans mb-5">
          Contact
        </div>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2 "
        >
          Phone
        </a>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
        >
          Email
        </a>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
        >
          Contact Form
        </a>
      </div>
      <div className="flex items-center">
        <div >
          <div className="flex justify-center ">
            <img src={logo} alt="" className="w-[192px] h-[80px]"/>
          </div>
          <div className="flex text-center text-white text-[16px]">
            Copyright © 2022 HireCrypto. All rights reserved.
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="text-base text-white font-bold font-sans mb-5">
          Socials
        </div>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2 "
        >
          Discord
        </a>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
        >
          Twitter
        </a>
        <a
          href="/"
          className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
      
export {Footer};