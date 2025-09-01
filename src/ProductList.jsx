import React from "react";
import ProductCard from "./ProductCard";

import earbuds from "./assets/earbuds.png";
import smartwatch from "./assets/smartwatch.png";
import stand from "./assets/stand.png";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description: "High-quality sound with noise cancellation",
    price: 1499,
    badge: "New",
    image: earbuds,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    price: 2499,
    badge: "Sale",
    image: smartwatch,
  },
  {
    id: 3,
    name: "Laptop Stand",
    description: "Ergonomic design for comfort",
    price: 999,
    image: stand,
  },
];

const ProductList = () => {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default ProductList;

// import React from "react";
// import ProductCard from "./ProductCard";

// const products = [
//   {
//     name: "Wireless Earbuds",
//     description: "High-quality sound with noise cancellation",
//     price: 1499,
//     image: "https://via.placeholder.com/150?text=Earbuds",
//   },
//   {
//     name: "Smart Watch",
//     description: "Track your fitness and stay connected",
//     price: 2499,
//     image: "https://via.placeholder.com/150?text=Smart+Watch",
//   },
//   {
//     name: "Laptop Stand",
//     description: "Ergonomic design for comfort",
//     price: 999,
//     image: "https://via.placeholder.com/150?text=Laptop+Stand",
//   },
// ];

// function ProductList() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
//       {products.map((product, index) => (
//         <ProductCard key={index} {...product} />
//       ))}
//     </div>
//   );
// }

// export default ProductList;
