import React from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import backgroundvideo from "../../assets/images/backvideo.mp4";
import Roadmapimg1 from "../../assets/images/Roadmap1.png";
import Roadmapimg2 from "../../assets/images/Roadmap2.png";
import Commucityimg from "../../assets/images/community.png";
import Efficiencyimg from "../../assets/images/efficiency.png";
import Personimg1 from "../../assets/images/person1.png";
import Personimg2 from "../../assets/images/person2.png";
import Joincommunityimg from "../../assets/images/Joincommunity.png";

const HomePage = () => {
  return (
    <div className="">
      <Header />
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
              <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
                Discord
              </button>
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
      {/*Roadmap start*/}
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
      {/*Roadmap end*/}
      {/*AboutUs start*/}
      <div className="w-full bg-[#385d94]" id="About">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-24 pb-2 ">
          About Us
        </div>
        <div className="w-full px-[45px] md:px-[96px]  font-sans text-white text-[20px] 2xl:text-[25px] mb-3 ">
          Aiming to create a more connected future. Breaking down barriers for
          getting hired across the world.
        </div>
        <div className="w-full px-[45px] md:px-[96px]  font-sans text-white text-[20px] 2xl:text-[25px] pb-4">
          HireCrypto was founded to solve many of the existing problems in
          traditional recruiting. We aim to cut out the middleman and connect
          employers directly with candidates through our discord community. Our
          in-house sourcing team will find quality talent directly for your open
          roles to ensure you can find the right people to move your
          organization forward and build a world-class team.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="flex justify-center">
            <div>
              <img
                src={Commucityimg}
                alt="communityimage"
                className="px-[45px] md:px-[96px]"
              />
              <div className="w-full text-center font-bold font-sans text-white text-[25px] 2xl:text-[30px] pt-3 pb-2 ">
                Community
              </div>
              <div className="w-full px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px]  mb-3 ">
                Community is the #1 priority for HireCrypto. We have a 24/7
                active support team looking to get you hired in crypto.
                Dedicated resources and tips are located right in our discord!
              </div>
              <div className="w-full px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px] mb-3 ">
                HireCrypto believes that a true community is where talent and
                members can speak to each other - not just read about job
                descriptions or receive notifications about job openings.
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <img
                src={Efficiencyimg}
                alt="efficientyimage"
                className="px-[45px] md:px-[96px]"
              />
              <div className="w-full text-center font-bold font-sans text-white text-[25px] 2xl:text-[30px] pt-3 pb-2 ">
                Efficienty
              </div>
              <div className="w-full px-[45px] md:px-[96px] font-sans text-white text-[20px]  2xl:text-[25px] mb-3">
                HireCrypto aims to break the barrier between HR and potential
                candidates by building a community and direct line of
                communication to improve efficiency.
              </div>
              <div className="w-full px-[45px] md:px-[96px] font-sans text-white text-[20px]  2xl:text-[25px] mb-3">
                We believe in decentralization, less gatekeepers, and total
                transparency.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*AboutUs end*/}
      {/*Meet the Team start*/}
      <div className="w-full bg-[#385d94]" id="MeetTheTeam">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-[85px] pb-2">
          Meet the Team
        </div>
        <div className="flex w-full">
          <div className="w-1/2 flex justify-center">
            <div>
              <img
                src={Personimg1}
                alt="personimage1"
                className="px-[45px] md:px-[96px]"
              />
              <div className="flex justify-center">
                <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[15px] md:text-[20px] text-white active:text-red-600 bg-[#172036] hover:bg-transparent rounded-md mb-5">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center">
            <div>
              <img
                src={Personimg2}
                alt="personimage2"
                className="px-[45px] md:px-[96px]"
              />
              <div className="flex justify-center">
                <button className="flex shrink-0   px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-[15px] md:text-[20px] text-white active:text-red-600 bg-[#172036] hover:bg-transparent rounded-md mb-5">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px] pb-6 ">
          Meet the founders of HireCrypto! Jesse Nortman & Ryan Brutschin are
          leaders within the career fair industry and have experience running
          the #1 virtual career fair company in technology --- HiredVirtual.
          HiredVirtual organizes and manages premium career fairs across the
          country each year connecting employers with alumni who are looking for
          new jobs and career opportunities. We are looking to take our
          experience and clients over to web3 to build the recruiting platform
          of tomorrow!
        </div>
      </div>
      {/*Meet the Team end*/}
      {/*Contact Us start*/}
      <div className="w-full bg-[#182037] pb-11" id="ContactUs">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] pt-[85px] pb-2">
          Contact Us
        </div>
        <div className="w-full text-center font-sans text-white text-[18px] ">
          <em>Fields marked with an asterisk (*) are required.</em>
        </div>
        <div className="w-full justify-center px-[45px] md:px-[96px]">
          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-4">
              <h1 className="text-white font-bold  mb-1"> First Name </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="firstname"
                placeholder="First Name*"
              />
            </div>
            <div className=" mt-4">
              <h1 className="text-white font-bold mb-1"> Last Name </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="lastname"
                placeholder="Last Name*"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className=" mt-4">
              <h1 className="text-white font-bold  mb-1"> Email </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="email"
                name="email"
                placeholder="Email*"
              />
            </div>
            <div className=" mt-4">
              <h1 className="text-white font-bold mb-1"> Phone Number </h1>
              <input
                className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
                style={{ width: "-webkit-fill-available" }}
                type="text"
                name="phonenumber"
                placeholder="Phone Number*"
              />
            </div>
          </div>
          <div className="w-full justify-center mt-4">
            <h1 className="text-white font-bold mb-1"> Message </h1>
            <textarea
              className="py-3 px-2 mb-2 text-white lg:text-black border  lg:border-black rounded-lg lg:rounded-none bg-transparent lg:bg-white hover:border-blue-700"
              style={{ width: "inherit" }}
              type="message"
              name="message"
              rows={6}
              cols={40}
              placeholder="Message"
            />
          </div>
          <button className="flex shrink-0  h-9  px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-white hover:text-red-600 active:text-white bg-[#385d94] hover:bg-transparent active:bg-green-600 rounded-md">
            Submit
          </button>
        </div>
      </div>
      {/*Contact Us end*/}
      {/*Join the HireCrypto Community start*/}
      <div className="w-full flex justify-center" id="Discord">
        <div className="relative min-w-full min-h-full">
          <img
            src={Joincommunityimg}
            alt=""
            className="absolute top-0 left-0"
          ></img>
          <div className="w-full relative text-center font-bold font-sans text-white text-[32px] mb-1">
            Join The HireCrypto Community
          </div>
          <div className="flex relative justify-center">
            <button className="flex shrink-0 px-4 py-1 font-semibold border border-transparent hover:border-gray-200 text-[19px] md:text-[25px] text-white active:text-red-600 bg-[#385d94] hover:bg-transparent rounded-md">
              Discord
            </button>
          </div>
        </div>
      </div>
      {/*Join the HireCrypto Community end*/}
      <Footer />
    </div>
  );
};
export { HomePage };
