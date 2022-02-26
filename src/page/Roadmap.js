
import React, { useEffect, useState, useRef } from "react";
import Roadmapimg_laptop from "../assets/images/Roadmap_laptop.png";
const Roadmap = ({ scroll }) => {

  const [phase1Style, setPhase1Style] = useState({});
  const [phase2Style, setPhase2Style] = useState({});
  const [phase3Style, setPhase3Style] = useState({});
  const [phase4Style, setPhase4Style] = useState({});
  
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const phase4Ref = useRef(null);


  useEffect(() => {
    if (phase1Ref.current) {
      let domHeight = phase1Ref.current.getBoundingClientRect().y;
      if( domHeight < 420 && domHeight > 310 ) {
          setPhase1Style({
          opacity: 0.2
        });
      } else if ( domHeight < 310 && domHeight > 200 ) {
          setPhase1Style({
          opacity: 0.7,
        });
      } else if ( domHeight < 150) {
          setPhase1Style({
          opacity: 1,
        });
      } else if ( domHeight >450 ) {
          setPhase1Style({
          opacity: 0,
        });
      }
    }

    if (phase2Ref.current) {
      let domHeight = phase2Ref.current.getBoundingClientRect().y;
      if( domHeight < 420 && domHeight > 310 ) {
          setPhase2Style({
          opacity: 0.2
        });
      } else if ( domHeight < 310 && domHeight > 200 ) {
          setPhase2Style({
          opacity: 0.7,
        });
      } else if ( domHeight < 150) {
          setPhase2Style({
          opacity: 1,
        });
      } else if ( domHeight >450 ) {
          setPhase2Style({
          opacity: 0,
        });
      }
    }

    if (phase3Ref.current) {
      let domHeight = phase3Ref.current.getBoundingClientRect().y;
      if( domHeight < 420 && domHeight > 310 ) {
          setPhase3Style({
          opacity: 0.2
        });
      } else if ( domHeight < 310 && domHeight > 200 ) {
          setPhase3Style({
          opacity: 0.7,
        });
      } else if ( domHeight < 150) {
          setPhase3Style({
          opacity: 1,
        });
      } else if ( domHeight >450 ) {
          setPhase3Style({
          opacity: 0,
        });
      }
    }
    if (phase4Ref.current) {
      let domHeight = phase4Ref.current.getBoundingClientRect().y;
      if( domHeight < 420 && domHeight > 310 ) {
          setPhase4Style({
          opacity: 0.2
        });
      } else if ( domHeight < 310 && domHeight > 200 ) {
          setPhase4Style({
          opacity: 0.9,
        });
      } else if ( domHeight < 150) {
          setPhase4Style({
          opacity: 1,
        });
      } else if ( domHeight >450 ) {
          setPhase4Style({
          opacity: 0,
        });
      }
    }
  }, [scroll]);

  return (
    <div>
      <div className="w-full relative bg-[#182037]" id="Roadmap">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-[85px] pb-2" >
          Roadmap
        </div>
        <div className="hidden md:flex w-full min-h-full justify-center absolute top-[150px] ">
          <img src={Roadmapimg_laptop} alt=""/>
        </div>
        <div className="w-full flex justify-center md:justify-start" ref={phase1Ref} style={phase1Style}>
            <div className="md:w-1/2 flex mb-5 mt-8 ">
              <div className="font-bold font-sans text-white  text-[28px]  md:ml-[15%] xl:ml-[20%] pr-3">
                PHASE 1
              </div>
              <div className="w-[210px] sm:w-[310px] border-l-2 border-white pl-3  mb-3 mr-3">
                <div className="font-sans text-white text-[16px]">
                  -Discord Launch 
                </div>
                <div className="font-sans text-white text-[16px]">
                  -Website Launch 
                </div>
                <div className="font-sans text-white text-[16px]">
                  -First employer hiring event
                </div>
              </div>
            </div>
        </div>
        <div className="w-full flex justify-center md:justify-end " ref={phase2Ref} style={phase2Style}>
            <div className="md:w-1/2 flex mb-5 mt-[85px] ">
              <div className="font-bold font-sans text-white text-[28px] md:ml-[15%] xl:ml-[20%] pr-3">
                PHASE 2
              </div>
              <div className="w-[210px] sm:w-[310px] border-l-2 border-white pl-3  mb-3 mr-3">
                <div className="font-sans text-white text-[16px]">
                  -Multiple crypto Hiring Events every week
                </div>
                <div className="font-sans text-white text-[16px]">
                  -Reach 100+ weekly interviews in discord
                </div>
                <div className="font-sans text-white text-[16px]">
                 -Develop limited NFT collection 
                </div>
              </div>
            </div>
        </div>
        <div className="w-full flex justify-center md:justify-start " ref={phase3Ref} style={phase3Style}>
            <div className=" md:w-1/2 flex mb-5 mt-[85px] ">
              <div className="font-bold font-sans text-white text-[28px]  md:ml-[15%] xl:ml-[20%] pr-3">
                PHASE 3
              </div>
              <div className="w-[210px] sm:w-[310px] border-l-2 border-white pl-3  mb-3 mr-3">
                <div className="font-sans text-white text-[16px]">
                -Launch limited NFT collection -IRL Events
                </div>
                <div className="font-sans text-white text-[16px]">
                  -Launch HireCrypto job board on the blockchain
                </div>
                <div className="font-sans text-white text-[16px]">
                Connect your wallet to HireCrypto.com to be eligible for a FREE NFT airdrop 
                </div>
              </div>
            </div>
        </div>
        <div className="w-full flex justify-center md:justify-end " ref={phase4Ref} style={phase4Style}>
            <div className="md:w-1/2 flex mb-5 mt-8 ">
              <div className="font-bold font-sans text-white text-[28px] md:ml-[15%] xl:ml-[20%] pr-3">
                PHASE 4
              </div>
              <div className="w-[210px] sm:w-[310px] border-l-2 border-white pl-3  mb-3 mr-3">
                <div className="font-sans text-white text-[16px]">
                -Become the #1 community for hiring talent in crypto
                </div>
                <div className="font-sans text-white text-[16px]">
                -Reach 100k discord members
                </div>
                <div className="font-sans text-white text-[16px]">
                -Launch Crypto Token 
                </div>
                <div className="font-sans text-white text-[16px]">
                -NFT Staking
                </div>
                <div className="font-sans text-white text-[16px]">
                -Airdrop FREE NFT with evolving metadata 
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export { Roadmap };
