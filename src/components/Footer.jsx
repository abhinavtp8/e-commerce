import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 md:mb-0">
        
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-blue-800 tracking-wide">DayMart</h3>
          <p className="text-sm leading-relaxed text-slate-500">
            Everything you need, all in one place. Delivering fresh groceries, daily essentials, and premium lifestyle products straight to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition-colors duration-200">Products</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Categories</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><a href="/products" className="hover:text-blue-600 transition-colors duration-200">Groceries & Veggies</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition-colors duration-200">Beauty & Personal Care</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition-colors duration-200">Household Essentials</a></li>
            <li><a href="/products" className="hover:text-blue-600 transition-colors duration-200">Premium Furniture</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Contact Support</h4>
          <ul className="flex flex-col gap-2.5 text-sm text-slate-500">
            <li>Email: <span className="text-slate-700 font-medium">support@daymart.com</span></li>
            <li>Phone: <span className="text-slate-700 font-medium">+91 1234567890</span></li>
          </ul>
        </div>

      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto border-t border-slate-100 my-6"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 ">
        <p>&copy; 2026 DayMart. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-slate-600 transition-colors duration-200">Privacy Policy</a>
          <a href="#terms" className="hover:text-slate-600 transition-colors duration-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer