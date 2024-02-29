import React from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const productData = [
  {
    img: "/item-1.jpg",
    title: "Footwear",
    desc: "Tennis Shoes - Brown",
    rating: 5,
    price: "2500",
  },
  {
    img: "/item-2.jpg",
    title: "Accessories",
    desc: "Pretty Necklace - Emerald",
    rating: 5,
    price: "10500",
  },
  {
    img: "/item-3.jpg",
    title: "Clothing",
    desc: "Men's T-Shirt - Red",
    rating: 4,
    price: "1250",
  },
  {
    img: "/item-4.jpg",
    title: "Clothing",
    desc: "Hoodie - Cream",
    rating: 4,
    price: "3000",
  },
  {
    img: "/item-5.jpg",
    title: "Accessories",
    desc: "Men's Watch - Brown",
    rating: 3,
    price: "750",
  },
  {
    img: "/item-6.jpg",
    title: "Clothing",
    desc: "Party Dress - Red",
    rating: 5,
    price: "7500",
  },
  {
    img: "/item-1.jpg",
    title: "Footwear",
    desc: "Tennis Shoes - Brown",
    rating: 5,
    price: "2500",
  },
  {
    img: "/item-2.jpg",
    title: "Accessories",
    desc: "Pretty Necklace - Emerald",
    rating: 5,
    price: "10500",
  },
  {
    img: "/item-3.jpg",
    title: "Clothing",
    desc: "Men's T-Shirt - Red",
    rating: 4,
    price: "1250",
  },
  {
    img: "/item-4.jpg",
    title: "Clothing",
    desc: "Hoodie - Cream",
    rating: 4,
    price: "3000",
  },
  {
    img: "/item-5.jpg",
    title: "Accessories",
    desc: "Men's Watch - Brown",
    rating: 3,
    price: "750",
  },
  {
    img: "/item-6.jpg",
    title: "Clothing",
    desc: "Party Dress - Red",
    rating: 5,
    price: "7500",
  },
  {
    img: "/item-1.jpg",
    title: "Footwear",
    desc: "Tennis Shoes - Brown",
    rating: 5,
    price: "2500",
  },
  {
    img: "/item-2.jpg",
    title: "Accessories",
    desc: "Pretty Necklace - Emerald",
    rating: 5,
    price: "10500",
  },
  {
    img: "/item-3.jpg",
    title: "Clothing",
    desc: "Men's T-Shirt - Red",
    rating: 4,
    price: "1250",
  },
  {
    img: "/item-4.jpg",
    title: "Clothing",
    desc: "Hoodie - Cream",
    rating: 4,
    price: "3000",
  },
  {
    img: "/item-5.jpg",
    title: "Accessories",
    desc: "Men's Watch - Brown",
    rating: 3,
    price: "750",
  },
  {
    img: "/item-6.jpg",
    title: "Clothing",
    desc: "Party Dress - Red",
    rating: 5,
    price: "7500",
  },
  {
    img: "/item-1.jpg",
    title: "Footwear",
    desc: "Tennis Shoes - Brown",
    rating: 5,
    price: "2500",
  },
  {
    img: "/item-2.jpg",
    title: "Accessories",
    desc: "Pretty Necklace - Emerald",
    rating: 5,
    price: "10500",
  },
  {
    img: "/item-3.jpg",
    title: "Clothing",
    desc: "Men's T-Shirt - Red",
    rating: 4,
    price: "1250",
  },
  {
    img: "/item-4.jpg",
    title: "Clothing",
    desc: "Hoodie - Cream",
    rating: 4,
    price: "3000",
  },
  {
    img: "/item-5.jpg",
    title: "Accessories",
    desc: "Men's Watch - Brown",
    rating: 3,
    price: "750",
  },
  {
    img: "/item-6.jpg",
    title: "Clothing",
    desc: "Party Dress - Red",
    rating: 5,
    price: "7500",
  },
  {
    img: "/item-1.jpg",
    title: "Footwear",
    desc: "Tennis Shoes - Brown",
    rating: 5,
    price: "2500",
  },
  {
    img: "/item-2.jpg",
    title: "Accessories",
    desc: "Pretty Necklace - Emerald",
    rating: 5,
    price: "10500",
  },
  {
    img: "/item-3.jpg",
    title: "Clothing",
    desc: "Men's T-Shirt - Red",
    rating: 4,
    price: "1250",
  },
  {
    img: "/item-4.jpg",
    title: "Clothing",
    desc: "Hoodie - Cream",
    rating: 4,
    price: "3000",
  },
  {
    img: "/item-5.jpg",
    title: "Accessories",
    desc: "Men's Watch - Brown",
    rating: 3,
    price: "750",
  },
  {
    img: "/item-6.jpg",
    title: "Clothing",
    desc: "Party Dress - Red",
    rating: 5,
    price: "7500",
  },
];

const NewProducts = ({ page = 1 }) => {
  const totalProduct: number = productData.length;
  const pageNumber: number = page || 1;
  const totalProductPerPage: number = 5;
  const totalPages: number = Math.ceil(totalProduct / totalProductPerPage);
  const product = productData.slice(
    (pageNumber - 1) * totalProductPerPage,
    totalProductPerPage * pageNumber
  );
  return (
    <div>
      <div className="container pt-16 pb-8">
        <h2 className="font-semibold text-2xl pb-4">NEW PRODUCTS</h2>

        <div className="grid place-items-center sm:place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-10 xl:gap-x-20 xl:gap-y-10 ">
          {product.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
        <Pagination totalPage={totalPages} currentPage={pageNumber} />
      </div>
    </div>
  );
};

export default NewProducts;
