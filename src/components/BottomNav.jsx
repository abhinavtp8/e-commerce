import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiShoppingBag, FiUser } from "react-icons/fi";

const navItems = [
  { label: "Home", path: "/", icon: FiHome },
  { label: "Cart", path: "/cart", icon: FiShoppingBag }, 
  { label: "Account", path: "/account", icon: FiUser },
];

const BottomNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 px-4 py-2">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ label, path, icon: Icon }) => {
          const active = pathname === path;

          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center justify-center gap-1 w-16"
            >
              <Icon
                className={`w-6 h-6 transition-colors ${
                  active ? "text-black stroke-[2.5]" : "text-gray-500 stroke-[1.8]"
                }`}
              />
              <span
                className={`text-[11px] font-medium transition-colors ${
                  active ? "text-black-600 font-semibold" : "text-gray-600"
                }`}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;