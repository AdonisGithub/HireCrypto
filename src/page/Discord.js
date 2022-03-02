import React from "react";
import Joincommunityimg from "../assets/images/Joincommunity.png";

const Discord = () => {
  return (
    <div>
      <div className="w-full relative flex bg-[#182037]  pt-[105px] pb-[10px] justify-center" id="Discord">
        <div className="w-full">
          <div>
            <div className="flex justify-center md:hidden w-full  top-[65px] sm:top-[45px] md:top-[50px] lg:top-[86px] text-center font-bold font-sans text-white text-[30px]  mb-1">
              Join The 
            </div>
            <div className="flex justify-center md:hidden w-full  top-[85px] sm:top-[81px] md:top-[85px] lg:top-[128px] text-center font-bold font-sans text-white text-[30px]  mb-2">
              HireCrypto Community
            </div>
            <div className="flex md:hidden  justify-center">
              <a
                href={"https://discord.gg/hirecrypto"}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center"
              >
                {/* <button className="flex justify-center top-[110px] sm:top-[145px] md:top-[143px] lg:top-[200px] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[30px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md"> */}
                <button className="flex  justify-center w-[120px] md:w-[190px]  py-1 top-[110px] sm:top-[145px] md:top-[143px] lg:top-[200px] font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">  
                  Discord
                </button>
              </a>
            </div>
          </div>  
          <div className=" min-w-full">
            <img
              src={Joincommunityimg}
              alt=""
              className="min-w-full h-full px-[30px] md:px-[96px]"
            ></img>
            <div className="hidden md:flex justify-center w-full absolute md:top-[25px] lg:top-[115px] xl:top-[160px] 2xl:top-[185px] text-center font-bold font-sans text-white md:text-[38px]  lg:text-[30px] 2xl:text-[38px] mb-1">
              Join The 
            </div>
            <div className="hidden md:flex justify-center w-full absolute md:top-[65px] lg:top-[158px] xl:top-[205px] 2xl:top-[235px] text-center font-bold font-sans text-white md:text-[38px] lg:text-[30px] 2xl:text-[38px] mb-1">
              HireCrypto Community
            </div>
            <div className="hidden md:flex flex   justify-center">
              <a
                href={"https://discord.gg/hirecrypto"}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center"
              >
                <button className="flex justify-center absolute  md:top-[128px] lg:top-[215px] xl:top-[265px] 2xl:top-[305px] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 md:text-[30px] lg:text-[26px] 2xl:text-[30px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
                  Discord
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export {Discord};