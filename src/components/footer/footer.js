import React  from "react";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#182037] px-[45px] md:px-[96px]">
      <div className="  flex justify-between ">
        <div className="my-5 md:my-10">
          <div className="text-base text-white font-bold font-sans mb-5">
            Contact
          </div>
          <a
            href="tel:15164561573"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2 "
          >
            Phone
          </a>
          <a
            href="mailto:hirecryptoteam@gmail.com"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
          >
            Email
          </a>
          <a
            href="/contactus"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-1 md:mb-2"
          >
            Contact Form
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <div >
            <div className="flex justify-center ">
              <img src={logo} alt="" />
            </div>
            <div className="flex text-center text-white text-[16px]">
              Copyright © 2022 HireCrypto. All rights reserved.
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-10">
          <div className="text-base text-white font-bold font-sans mb-5">
            Socials
          </div>
          <a
            href="https://discord.gg/hirecrypto"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
            target="_blank" rel="noreferrer"
          >
            Discord            
          </a>
          <a
            href="https://twitter.com/Hire_Crypto"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-2"
            target="_blank" rel="noreferrer"
          >
            Twitter
          </a>
          <a
            href=" https://www.instagram.com/hirecrypto"
            className="flex shrink-0 items-center  text-gray-400 hover:text-green-600 mb-1 md:mb-2"
            target="_blank" rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="flex justify-center md:hidden pb-5">
        <div className="flex text-center text-white text-[13px]">
          Copyright © 2022 HireCrypto. All rights reserved.
        </div>  
      </div>
    </div>
  );
}
      
export {Footer};