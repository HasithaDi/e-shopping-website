import React from 'react'
import ProductCard from './ProductCard';

const productData = [
  {
    img: "/product 7.png",
    title: "Jacket",
    desc: "Men Yarn Fleece Full-Zip Jacket",
    rating: 4,
    price: "45.00"
  },
  {
    img: "/product 6.png",
    title: "Skirt",
    desc: "Gray Floral Wrap Midi Skirt",
    rating: 5,
    price: "55.00"
  },
  {
    img: "/product 1.png",
    title: "Party Wear",
    desc: "Woman's Party Wear Shoes",
    rating: 3,
    price: "25.00"
  },
  {
    img: "/product 2.png",
    title: "Shirt",
    desc: "Pure Garment Dyed Cotton Shirt",
    rating: 4,
    price: "45.00"
  },
  {
    img: "/product 3.png",
    title: "Sport",
    desc: "Trekking & Running Shoes - Black",
    rating: 3,
    price: "58.00"
  },
  {
    img: "/product 4.png",
    title: "Watches",
    desc: "Smart Watches Vital Plus",
    rating: 4,
    price: "100.00"
  },
  {
    img: "/product 5.png",
    title: "Watches",
    desc: "Pocket Watch Leather Pouch",
    rating: 4,
    price: "120.00"
  },
];
const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productData.map((item, index)=> (
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
      </div>
    </div>
  )
}

export default NewProducts
