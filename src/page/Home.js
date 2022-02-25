import React from "react";
import backgroundvideo from "../assets/images/backvideo.mp4";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex w-full relative">
        <div className="min-h-screen h-full w-full flex items-center z-20">
          <div className="w-full py-2 text-white ml-[35px] md:ml-[50px]">
            <div className="w-[250px] sm:w-[300px] md:w-[445px] lg:w-[570px] text-[21px] sm:text-[25px] md:text-[38px] leading-tight font-bold font-sans tracking-wide mb-7">
              A Web3.0 company re-imaging the traditional recruitment process.
            </div>
            <div className="w-[300px] sm:w-[380px] md:w-[580px] text-[19px] sm:text-[25px] md:text-[38px] leading-tight font-bold font-sans tracking-wide mb-7">
              Join our discord community to engage with crypto's top talent.
            </div>
            <div className="w-full flex">
              <a
                href={"https://discord.gg/hirecrypto"}
                target="_blank"
                rel="noreferrer"
              >
                <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
                  Discord
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden flex justify-center">
          <video
            autoPlay
            loop
            muted
            className="max-w-screen absolute z-10 w-auto min-w-full min-h-full max-w-none overflow-hidden"
          >
            <source src={backgroundvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};
export { Home };
