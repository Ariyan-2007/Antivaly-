"use client";

import React from "react";
import { FaHeart, FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useFavorites } from "@/lib/FavoritesContext";

const HeaderMain = () => {
  let { favorites } = useFavorites();

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container sm:flex justify-between items-center">
        <div className="font-extrabold text-4xl text-center pb-4 sm:pb-0 text-blackish">
          <span className="text-[#FF8F9C]">A</span>V
        </div>

        <div className="w-full sm:w-[300px] md:w-[70%] relative">
          <input
            className="border-gray-200 border p-2 px-4 rounded-lg w-full"
            type="text"
            placeholder="Search for product"
          />

          <FaSearch className="absolute right-0 top-0 mr-3 mt-3 text-[#eea9b1de]" />
        </div>

        <div className="hidden lg:flex gap-6 cursor-pointer text-[#b39599de] text-[25px]">
          <FaUser />
          <div className="relative">
            <FaHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              {favorites}
            </div>
          </div>
          <div className="relative">
            <FaShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[16px] h-[16px] text-[10px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;
