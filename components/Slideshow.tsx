"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Slideshow = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Shopping One",
      mainTitle: "SHOP ONLINE!!",
      price: "BDT 3000",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Shopping Two",
      mainTitle: "SHOP ONLINE NOW!!",
      price: "BDT 5000",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Shopping Three",
      mainTitle: "SHOP ONLINE NOW OR NEVER!!",
      price: "BDT 7500",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0 rounded-xl">
        <Slider {...settings}>
          {slideData.map((item, index) => (
            <Slide
              key={index}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
