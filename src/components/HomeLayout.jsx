import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import BottomNav from "./BottomNav";
import Footer from "./Footer"; 
const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="grow pb-20 md:pb-0">
        <Outlet />
      </main>

      <Footer />

      <BottomNav />
    </div>
  );
};

export default HomeLayout;