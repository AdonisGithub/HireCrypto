import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link} from 'react-scroll'


export default function HumburgerMenu() {

  return (
    <div className="text-right  flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className=" flex items-center"
              >
                <Hamburger
                  size={30}
                  duration={0.8}
                  color="white"
                  toggled={open}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="fixed right-0 w-full mt-[56px] sm:mt-[13px] origin-top-right shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-[1px] py-[1px] ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link activeClass="active" to="Roadmap" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                      <button
                          className={`${
                            active
                              ? "bg-[rgb(23,32,54)] bg-opacity-60 text-green-600"
                              : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          Roadmap
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link activeClass="active" to="About" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                      <button
                          className={`${
                            active
                            ? "bg-[rgb(23,32,54)] bg-opacity-60 text-green-600"
                            : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          About Us
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                        <Link activeClass="active" to="MeetTheTeam" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                        <button
                          className={`${
                            active
                            ? "bg-[rgb(23,32,54)] bg-opacity-60 text-green-600"
                            : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          Meet the Team
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link activeClass="active" to="Discord" spy={true} smooth={true} offset={-50} duration={500} delay={300}>
                      <button
                          className={`${
                            active
                            ? "bg-[rgb(23,32,54)] bg-opacity-60 text-green-600"
                            : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          Discord
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link activeClass="active" to="ContactUs" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                      <button
                          className={`${
                            active
                            ? "bg-[rgb(23,32,54)] bg-opacity-60 text-green-600"
                            : "bg-[rgb(23,32,54)] bg-opacity-60 text-white "
                          } flex items-center w-full px-2 py-2 text-sm`}
                        >
                          Contact Us
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
}
