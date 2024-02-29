"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useFavorites } from "@/lib/FavoritesContext";

interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
}

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  rating,
  price,
}) => {
  let { favorites, setFavorites } = useFavorites();
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setFavorites(favorites + 1);
    } else setFavorites(favorites - 1);
  };

  const generateRating = (rating: number) => {
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} />
    ));
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <FaRegStar key={index} />
    ));

    return (
      <div className="flex gap-1 text-[20px] text-[#ff9529]">
        {filledStars}
        {emptyStars}
      </div>
    );
  };
  return (
    <div className="px-4 py-4 border border-gray-800 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img}
          width={200}
          height={300}
          alt={title}
        />
      </div>

      <div className="space-y-2 py-2">
        <h2 className="text-accent font-medium uppercase">{title}</h2>
        <p
          className="text-gray-500 h-[50px] max-w-[150px] line-clamp-2"
          title={desc}
        >
          {desc}
        </p>
        <div>{generateRating(rating)}</div>
        <div className="font-bold flex gap-4 line-clamp-1" title={price}>
          BDT {price}
          <del className="text-gray-500 font-normal">{Number(price) * 2}</del>
        </div>

        <div
          className={`heart-icon ${isLiked ? "liked" : ""} w-fit`}
          onClick={toggleLike}
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
