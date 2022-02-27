import React from "react";
import backgroundvideo from "../assets/images/backvideo.mp4";
const Wellcome = () => {

  return (
    <div>
      <div className="min-h-screen flex w-full relative">
        <div className="min-h-screen h-full w-full flex justify-center items-center pt-[79px] z-20">
            <div className=" text-white ">
                <div className="flex w-full justify-center">
                    <div className="w-[350px] sm:w-[596px] md:w-[663px] lg:w-[893px] 2xl:w-[70vw] text-center text-[19px] sm:text-[34px] md:text-[38px] lg:text-[51px] 2xl:text-[4vw] leading-tight font-bold font-sans tracking-wide mb-7">
                        HireCrypto is a Web 3.0 company re-imagining the traditional recruitment process
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <div className="w-[263px] sm:w-[447px] md:w-[500px] lg:w-[570px] 2xl:w-[40vw] text-center text-[14px] sm:text-[19px] md:text-[22px] lg:text-[29px] 2xl:text-[2vw] leading-tight font-bold font-sans tracking-wide mb-7">
                    Join our discord community to engage with crypto's top talent.
                    </div>
                </div>
                <div className="flex w-full justify-center">
                    <a
                        href={"https://discord.gg/hirecrypto"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="flex  justify-center w-[190px]  py-1  font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
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
export { Wellcome };
