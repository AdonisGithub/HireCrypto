import React from "react";
import { Link} from 'react-scroll'
import HumburgerMenu from "./humburgermenu";
import logo from "../../assets/images/logo.png"
import Minter from "./Minter";

const Header = () => {

  return (
    <nav id="nav">
      <div className=" flex  fixed top-0  z-30 w-full p-6 bg-[rgb(23,32,54)] bg-opacity-60 h-[79px] lg:h-[100px] 2xl:h-[140px] transition-[top] duration-300">
          <div className="flex flex-row justify-between lg:justify-center w-full">
            <div className="flex items-center mr-auto">
              <a href='/' className="shrink-0 mr-12">
                <img src={logo} alt="logo"/>
              </a>
            </div>
            <div className="hidden lg:flex">
              <Link activeClass="active" to="Roadmap" spy={true} smooth={true} offset={0} duration={500} delay={300}
                className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white active:text-red-600 hover:text-green-600 mx-1 cursor-pointer"
              >
                Roadmap
              </Link>
              <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={500} delay={300}
                className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white active:text-red-600 hover:text-green-600 mx-1 cursor-pointer"
              >
                About Us
              </Link>
              <Link activeClass="active" to="MeetTheTeam" spy={true} smooth={true} offset={0} duration={500} delay={300}
                className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white active:text-red-600 hover:text-green-600 mx-1 cursor-pointer"
              >
                Meet the Team
              </Link>
              <Link activeClass="active" to="Discord" spy={true} smooth={true} offset={-50} duration={500} delay={300}
                className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white active:text-red-600 hover:text-green-600 mx-1 cursor-pointer"
              >
                Discord
              </Link>
              <Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration={500} delay={300}
                className="flex shrink-0 items-center pr-4 py-2 font-semibold text-white active:text-red-600 hover:text-green-600 mx-1 cursor-pointer"
              >
                ContactUs
              </Link>
            </div>
            <div className="hidden sm:flex items-center mx-1">
              <Minter/>
            </div>
            <div className="flex lg:hidden items-center">
              <HumburgerMenu />
            </div>
          </div>
      </div>
      <div className="flex justify-center sm:hidden fixed top-[79px] py-[2px] z-30 w-full bg-[rgb(23,32,54)] bg-opacity-60 border border-white">
        <Minter/>
      </div>
    </nav>
  );
};

export { Header };
