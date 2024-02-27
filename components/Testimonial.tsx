import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container pt-16 pb-16 grid-cols-2">
        <h2 className="font-semibold text-2xl pb-4">TESTIMONIALS</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
          <div className="border border-blackish rounded-2xl grid place-items-center p-6 lg:p-0">
            <div className="text-center flex flex-col items-center gap-1 p-4">
              <Image
                className="rounded-full inline-block"
                src="/user.jpg"
                width={80}
                height={80}
                alt="dp"
              />
              <h2 className="text-gray-500 font-black text-[20px]">
                Ariyan Jahangir
              </h2>
              <p className="font-semibold">Web Dev Intern</p>
            </div>
          </div>
          <div className="border border-blackish bg-[url(/Testimonial.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                50% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Spring Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ BDT 750 <b>Shop Now</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
