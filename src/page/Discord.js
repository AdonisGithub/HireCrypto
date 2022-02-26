import React from "react";
import Joincommunityimg from "../assets/images/Joincommunity.png";

const Discord = () => {
  return (
    <div>
      <div className="w-full flex justify-center" id="Discord">
        <div className="relative min-w-full min-h-full">
          <img
            src={Joincommunityimg}
            alt=""
            className="min-w-full min-h-full"
          ></img>
          <div className="w-full absolute top-0 sm:top-10 text-center font-bold font-sans text-white text-[16px] sm:text-[32px] 2xl:text-[3vw] mb-1">
            Join The 
          </div>
          <div className="w-full absolute top-[19px] sm:top-[31px] md:top-[76px] 2xl:top-[10vh] text-center font-bold font-sans text-white text-[16px] sm:text-[32px] 2xl:text-[3vw] mb-1">
            HireCrypto Community
          </div>
          <div className="flex   justify-center">
            <a
              href={"https://discord.gg/hirecrypto"}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <button className="flex justify-center absolute top-[43px] sm:top-[110px] md:top-[135px] 2xl:top-[20vh] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[12px] sm:text-[19px] md:text-[25px] 2xl:text-[2vw] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
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