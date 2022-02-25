import React from "react";
import Roadmapimg1 from "../assets/images/Roadmap1.png";
import Roadmapimg2 from "../assets/images/Roadmap2.png";
const Roadmap = () => {
  return (
    <div>
      <div className="w-full bg-[#182037]" id="Roadmap">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-[85px] pb-2">
          Roadmap
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full ">
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q1 2022
            </div>
            <div className="font-sans text-white text-[16px]">
              -Discord Launch ✅
            </div>
            <div className="font-sans text-white text-[16px]">
              -Website Launch ❌
            </div>
            <div className="font-sans text-white text-[16px]">
              -500 Discord Members ❌
            </div>
            <div className="font-sans text-white text-[16px]">
              -First employer hiring event ❌
            </div>
          </div>
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q2 2022
            </div>
            <div className="font-sans text-white text-[16px]">
              -1k Discord Members
            </div>
            <div className="font-sans text-white text-[16px]">
              -Host 1 employer hiring event per week
            </div>
            <div className="font-sans text-white text-[16px]">
              -Connect your wallet to HireCrypto.com to be eligible for a FREE
              NFT airdrop
            </div>
          </div>
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q3 2022
            </div>
            <div className="font-sans text-white text-[16px]">
              -5k Discord Members
            </div>
            <div className="font-sans text-white text-[16px]">
              -Multiple crypto job opportunities every week
            </div>
            <div className="font-sans text-white text-[16px]">
              -Reach 100+ weekly interviews in discord
            </div>
            <div className="font-sans text-white text-[16px]">
              -Develop feature to be able to update and change NFT metadata
            </div>
          </div>
          <div className="  border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q4 2022
            </div>
            <div className="font-sans text-white text-[16px]">
              -10k discord members
            </div>
            <div className="font-sans text-white text-[16px]">
              -Daily crypto job opportunities
            </div>
            <div className="font-sans text-white text-[16px]">
              -Airdrop NFT to everyone who connected their wallet
            </div>
            <div className="font-sans text-white text-[16px]">
              -Launch job board section on website with nft utility
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img src={Roadmapimg1} alt="roadmapimage1" className="w-full" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 w-full ">
          <div className="border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q1 2023
            </div>
            <div className="font-sans text-white text-[16px]">
              -Grow to 50k discord members
            </div>
            <div className="font-sans text-white text-[16px]">
              -Provide hiring opportunity utility for NFT holders
            </div>
            <div className="font-sans text-white text-[16px]">
              -Develop Crypto Token
            </div>
          </div>
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q2 2023
            </div>
            <div className="font-sans text-white text-[16px]">
              -Develop widget code to integrate NFT with future partner websites
              to expand NFT utility
            </div>
            <div className="font-sans text-white text-[16px]">
              -Become the #1 community for hiring talent in crypto
            </div>
          </div>
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q3 2023
            </div>
            <div className="font-sans text-white text-[16px]">
              -Reach 100k discord members
            </div>
            <div className="font-sans text-white text-[16px]">
              -Reach 1000+ daily interviews in our discord server
            </div>
            <div className="font-sans text-white text-[16px]">
              -Launch Crypto Token
            </div>
          </div>
          <div className=" border-l-2 border-white pl-3 ml-[35px] mb-3">
            <div className="font-bold font-sans text-white text-[28px] mt-3 mb-2">
              Q4 2023
            </div>
            <div className="font-sans fobnt-bold text-white text-[16px]">
              SECRET ROADMAP
            </div>
            <div className="font-sans text-white text-[16px]">
              This is when things get interesting.
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img src={Roadmapimg2} alt="roadmapimage2" className="w-full" />
        </div>
      </div>
    </div>
  );
};
export { Roadmap };
