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
          <div className="w-full absolute top-0 sm:top-10 text-center font-bold font-sans text-white text-[32px] mb-1">
            Join The HireCrypto Community
          </div>
          <div className="flex   justify-center">
            <a
              href={"https://discord.gg/hirecrypto"}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <button className="flex justify-center absolute top-[110px] sm:top-[100px] shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
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