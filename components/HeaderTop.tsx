import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-y border-gray-200 hidden sm:block  mt-5">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1.5">
            <div className="header_top_icon_wrapper">
              <FaFacebookSquare />
            </div>
            <div className="header_top_icon_wrapper">
              <FaFacebookMessenger />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>

          <div className="text-gray-500 text-[12px] ">
            <b>50% FLAT SALE</b> ORDER BEFORE 29TH FEBRUARY
          </div>

          <div className="flex gap-4 ">
            <select
              className="text-gray-500  bg-white text-[12px] w-[70px] cursor-pointer"
              name="currency"
              id="currency"
            >
              <option value="BDT">BDT</option>
              <option value="USD">USD</option>
              <option value="INR">INR</option>
            </select>

            <select
              className="text-gray-500 bg-white text-[12px] w-[80px] cursor-pointer"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="Bangla">Bangla</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
