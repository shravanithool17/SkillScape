import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-72 hover:shadow-2xl hover:scale-105 transition-transform duration-300 relative">
      {/* Badge */}
      {product.badge && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="h-44 w-full object-cover rounded-lg mb-3"
      />

      {/* Title & Desc */}
      <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-3">{product.description}</p>

      {/* Price + Button */}
      <div className="flex justify-between items-center">
        <span className="text-green-600 font-bold text-lg">₹{product.price}</span>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:from-blue-600 hover:to-indigo-600">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

// import React from "react";

// function ProductCard({ name, description, price, image }) {
//   return (
//     <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:shadow-lg transition">
//       <img
//         src={image}
//         alt={name}
//         className="w-40 h-40 object-cover rounded-lg mb-3"
//       />
//       <h2 className="text-lg font-semibold">{name}</h2>
//       <p className="text-gray-600 text-sm text-center">{description}</p>
//       <p className="text-xl font-bold mt-2">₹{price}</p>
//       <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//         Buy Now
//       </button>
//     </div>
//   );
// }

// export default ProductCard;
