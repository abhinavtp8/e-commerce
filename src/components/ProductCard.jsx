import React from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { addToCart } from '../features/Cart/CartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  if (!product) return null;

  return (
    <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col hover:shadow-md transition-shadow">
      {/* Delete Button
      <div className="flex justify-end">
        <button
          onClick={() => dispatch(deleteProduct(product.id))}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <MdDelete size={20} />
        </button>
      </div> */}
      {product.discountPercentage > 0 && (
      <div className="absolute top-3 right-3 bg-red-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-md z-10">
        {Math.round(product.discountPercentage)}% OFF
      </div>
    )}


      {/* Image Link */}
      <Link to={`/products/${product.id}`} className="flex justify-center my-4">
        <img src={product.thumbnail} alt={product.title} className="h-40 object-contain" />
      </Link>

      {/* Content */}
      <div className="mt-auto">
        <p className="text-xs text-blue-600 font-bold uppercase">{product.category}</p>
        <h2 className="font-bold text-gray-800 truncate">{product.title}</h2>
        <p className="text-lg font-bold text-gray-900 mt-2">${product.price}</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="w-full bg-blue-800 text-white py-2 rounded-xl text-sm font-semibold mt-4 hover:bg-blue-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;