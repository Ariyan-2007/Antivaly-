"use client";

import { useFavorites } from "@/lib/FavoritesContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaAppStore, FaHeart, FaHome, FaShoppingBag } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const MobNavbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  let { favorites = 0 } = useFavorites();
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShow(false);
      } else {
        // If scrolling up, show the navbar
        setShow(true);
      }
      // Remember the current page location for the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`z-10 lg:hidden fixed bottom-0 w-full bg-gray-100 left-[50%] -translate-x-[50%] max-w-[1000px] mob_navbar px-8 transition-transform duration-1000 transform ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-between text-[28px] py-2 cursor-pointer">
        <IoMenuOutline />
        <div className="relative">
          <FaShoppingBag />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            0
          </div>
        </div>

        <Link href="/">
          <FaHome />
        </Link>

        <div className="relative">
          <FaHeart />
          <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
            {favorites}
          </div>
        </div>

        <FaAppStore />
      </div>
    </div>
  );
};

export default MobNavbar;
