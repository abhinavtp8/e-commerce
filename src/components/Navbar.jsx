import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cartIcon from '../assets/shopping-cart.png';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.products);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className='w-full bg-white shadow-sm sticky top-0 z-50 px-4 sm:px-8 py-4 flex justify-between items-center'>
      <div className='text-xl font-bold text-blue-800'>
        <Link to="/">DayMart</Link>
      </div>

      <nav className="hidden sm:flex items-center gap-6 font-medium text-gray-600">
        <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
        <Link to="/products" className="hover:text-purple-600 transition-colors">Shop</Link>
        <Link to="/orders" className="hover:text-purple-600 transition-colors">My Orders</Link>
      </nav>

      <div className='flex items-center gap-5'>
        <Link to="/cart" className="relative p-2">
          <img src={cartIcon} alt="Cart" className="w-6 h-6 object-contain" />

          {totalQuantity > 0 && (
            <div className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 text-[10px] rounded-full flex items-center justify-center font-bold">
              {totalQuantity}
            </div>
          )}
        </Link>

        {/* LOGIN BUTTON */}
        <Link to="/login" className='hidden md:block'>
          <button className='bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-semibold cursor-pointer hover:bg-blue-900 transition'>
            Log In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;