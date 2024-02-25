import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="font-semibold flex w-fit gap-10 mx-auto py-4 text-[#3f3e3e]">
          <Link className="navbar__link relative" href="#">
            HOME
          </Link>
          <Link className="navbar__link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar__link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar__link relative" href="#">
            OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
