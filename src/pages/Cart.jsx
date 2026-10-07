import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/Cart/CartSlice';
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
    const { products } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    if (products.length === 0) {
        return (
            <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-gray-50 px-4 pt-28 sm:pt-36">
                <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty!</h2>
                <Link to="/products">
                    <button className="bg-blue-800 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-900 transition text-sm cursor-pointer">
                        Shop Our Products
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 md:p-12 pt-28 sm:pt-36">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Shopping Cart</h1>

                <div className="flex flex-col gap-4">
                    {products.map((item) => (
                        <div key={item.product.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            
                            {/* PRODUCT DETAILS */}
                            <div className="flex items-center gap-4">
                                <img src={item.product.thumbnail} alt={item.product.title} className="w-16 h-16 sm:w-20 sm:h-20 object-contain bg-gray-50 rounded-xl p-1 " />
                                <div>
                                    <h3 className="font-bold text-gray-800 text-sm sm:text-base line-clamp-2 leading-tight">{item.product.title}</h3>
                                    <p className="text-gray-500 text-xs mt-0.5">{item.product.category || 'Electronics'}</p>
                                    <p className="text-blue-800 font-extrabold text-sm sm:text-base mt-1">${item.product.price}</p>
                                </div>
                             </div>

                            {/* QUANTITY CONTROLS & REMOVE */}
                            <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 border-t border-gray-400 sm:border-t-0 pt-3 sm:pt-0 w-full sm:w-auto">
                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => dispatch(decreaseQuantity(item.product.id))} 
                                        className="bg-white border text-black hover:text-white font-bold rounded-xl px-3 py-1 hover:bg-black cursor-pointer text-sm"
                                    >
                                        -
                                    </button>
                                    <span className="font-bold text-black px-1 text-sm sm:text-base">{item.quantity}</span>
                                    <button 
                                        onClick={() => dispatch(increaseQuantity(item.product.id))} 
                                        className="bg-white border text-black hover:text-white font-bold rounded-xl px-3 py-1 hover:bg-black cursor-pointer text-sm"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* REMOVE BUTTON */}
                                <button
                                    onClick={() => dispatch(removeFromCart(item.product.id))}
                                    className="text-red-500 p-2 hover:bg-red-50 rounded-xl cursor-pointer"
                                >
                                    <FiTrash2 className="h-5 w-5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cart;