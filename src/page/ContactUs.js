import React from "react";

const ContactUs = () => {
  return (
    <div>
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
          <button className="flex shrink-0  h-9  px-6 py-1  font-semibold border border-transparent hover:border-gray-200 text-white active:text-red-600 bg-[#385d94] hover:bg-transparent hover:text-green-600 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export { ContactUs };
