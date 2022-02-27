import React from "react";
import Joincommunityimg from "../assets/images/Joincommunity.png";

const Discord = () => {
  return (
    <div>
      <div className="w-full relative flex bg-[#182037] pt-[65px] lg:pt-[85px] justify-center" id="Discord">
        <div className=" min-w-full min-h-full ">
          <img
            src={Joincommunityimg}
            alt=""
            className="min-w-full min-h-full px-[45px] md:px-[96px]"
          ></img>
          <div className="w-full absolute top-[25px] sm:top-[25px] md:top-[45px] text-center font-bold font-sans text-white text-[16px] sm:text-[32px] 2xl:text-[3vw] mb-1">
            Join The 
          </div>
          <div className="w-full absolute top-[45px] sm:top-[55px] md:top-[96px] 2xl:top-[10vh] text-center font-bold font-sans text-white text-[16px] sm:text-[32px] 2xl:text-[3vw] mb-1">
            HireCrypto Community
          </div>
          <div className="flex   justify-center">
            <a
              href={"https://discord.gg/hirecrypto"}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <button className="flex justify-center absolute top-[83px] sm:top-[110px] md:top-[155px] 2xl:top-[20vh] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[12px] sm:text-[19px] md:text-[25px] 2xl:text-[2vw] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
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