import React from "react";
import Joincommunityimg from "../assets/images/Joincommunity.png";

const Discord = () => {
  return (
    <div>
      <div className="w-full relative flex bg-[#182037] pt-[79px] lg:pt-[100px] justify-center" id="Discord">
        <div className=" min-w-full min-h-full ">
          <img
            src={Joincommunityimg}
            alt=""
            className="min-w-full min-h-full px-[45px] md:px-[96px]"
          ></img>
          <div className="w-full absolute top-[65px] sm:top-[45px] md:top-[50px] lg:top-[100px] text-center font-bold font-sans text-white text-[16px] sm:text-[32px] lg:text-[38px]  mb-1">
            Join The 
          </div>
          <div className="w-full absolute top-[85px] sm:top-[81px] md:top-[85px] lg:top-[140px] text-center font-bold font-sans text-white text-[16px] sm:text-[32px] lg:text-[38px]  mb-1">
            HireCrypto Community
          </div>
          <div className="flex   justify-center">
            <a
              href={"https://discord.gg/hirecrypto"}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <button className="flex justify-center absolute top-[110px] sm:top-[145px] md:top-[143px] lg:top-[200px] xl:top-[210px] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[9px] sm:text-[19px] md:text-[21px] lg:text-[30px] xl:text-[35px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
                Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export {Discord};