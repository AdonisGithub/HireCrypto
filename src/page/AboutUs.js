import React from "react";
import Commucityimg from "../assets/images/community.png";
import Efficiencyimg from "../assets/images/efficiency.png";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full bg-[#385d94]" id="About">
        <div className="w-full text-center font-bold font-sans text-white text-[38px] 2xl:text-[45px] pt-24 pb-2 ">
          About Us
        </div>
        <div className="w-full text-center px-[45px] md:px-[96px]  font-sans text-white text-[20px] 2xl:text-[25px] mb-3 ">
          Aiming to create a more connected future. Breaking down barriers for
          getting hired across the world.
        </div>
        <div className="w-full text-center px-[45px] md:px-[96px]  font-sans text-white text-[20px] 2xl:text-[25px] pb-4">
          HireCrypto was founded to solve many of the existing problems in
          traditional recruiting. 
          We aim to cut out the middleman and connect employers directly with candidates through our discord community. 
          Our in-house sourcing team will find quality talent directly for your open
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
              <div className="w-full text-center px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px]  mb-3 ">
                Community is the #1 priority for HireCrypto. We have a 24/7
                active support team looking to get you hired in crypto.
                Dedicated resources and tips are located right in our discord!
              </div>
              <div className="w-full text-center px-[45px] md:px-[96px] font-sans text-white text-[20px] 2xl:text-[25px] mb-3 ">
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
                Efficiency
              </div>
              <div className="w-full text-center px-[45px] md:px-[96px] font-sans text-white text-[20px]  2xl:text-[25px] mb-3">
                HireCrypto aims to break the barrier between HR and potential
                candidates by building a community and direct line of
                communication to improve efficiency.
              </div>
              <div className="w-full text-center px-[45px] md:px-[96px] font-sans text-white text-[20px]  2xl:text-[25px] mb-3">
                We believe in decentralization, less gatekeepers, and total
                transparency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { AboutUs };
