import Link from "next/link";
import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Pagination = ({ totalPage = 1, currentPage = 1 }) => {
  return (
    <div className="flex mx-auto items-center justify-center my-5">
      <Link href={currentPage === 1 ? "" : `/?page=${currentPage - 1}`}>
        <button
          className="bg-gray-200 border border-gray-300 rounded-sm px-[5px] py-[4.7px]  hover:bg-accent"
          disabled={currentPage === 1 ? true : false}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
      </Link>

      {[...Array(totalPage)].map((_ele, ind) => (
        <Link key={ind} href={`/?page=${ind + 1}`}>
          <button
            className={` border  rounded-sm px-[8px] py-[2px] text-[14px]  hover:bg-accent ${
              currentPage === ind + 1
                ? "bg-accent border-accent"
                : "bg-gray-200 border-gray-300"
            }`}
            disabled={currentPage === ind + 1 ? true : false}
            key={ind}
          >
            {ind + 1}
          </button>
        </Link>
      ))}

      <Link href={currentPage === totalPage ? "" : `/?page=${currentPage + 1}`}>
        <button
          className="bg-gray-200 border border-gray-300 rounded-sm px-[5px] py-[4.7px]  hover:bg-accent"
          disabled={currentPage === totalPage ? true : false}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
