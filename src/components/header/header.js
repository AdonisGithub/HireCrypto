import React from "react";
import HumburgerMenu from "./humburgermenu";
import logo from "../../assets/images/logo.png"
const Header = () => {
  return (
    <nav
        id="nav"
        className=" flex  fixed top-0  z-30 w-full p-6 bg-[rgb(23,32,54)] bg-opacity-60 h-[79px] lg:h-[100px] 2xl:h-[140px]"
    >
        <div className="flex flex-row justify-between lg:justify-center w-full">
          <div className="flex items-center mr-auto">
            <a href='/' className="shrink-0 mr-12">
              <img src={logo} alt="logo" className="w-[184px] h-[77px]"/>
            </a>
          </div>
          <div className="hidden lg:flex">
            <a
              href="#Roadmap"
              className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white hover:text-red-600 active:text-green-600 mx-1 "
            >
              Roadmap
            </a>
            <a
              href="#About"
              className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white hover:text-red-600 active:text-green-600mx-1 "
            >
              About Us
            </a>
            <a
              href="#MeetTheTeam"
              className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white hover:text-red-600 active:text-green-600 mx-1 "
            >
              Meet the Team
            </a>
            <a
              href="#ContactUs"
              className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white hover:text-red-600 active:text-green-600 mx-1"
            >
              ContactUs
            </a>
            <a
              href="#Discord"
              className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white hover:text-red-600 active:text-green-600 mx-1"
            >
              Discord
            </a>
          </div>
          <div className="hidden lg:flex items-center mx-1">
            <button className="flex shrink-0  h-9  px-4 py-1  font-semibold border border-transparent hover:border-gray-200 text-white hover:text-red-600 active:text-white bg-[#385d94] hover:bg-transparent active:bg-green-600 rounded-md"
            >
              Connect
            </button>
          </div>
          <div className="flex lg:hidden">
            <HumburgerMenu />
          </div>
        </div>
    </nav>
  );
};

export { Header };
