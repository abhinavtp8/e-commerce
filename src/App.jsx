import React, { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// Actions
import { addProducts } from "./features/Products/ProductSlice";

import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Counter = lazy(() => import("./components/Counter"));
const Products = lazy(() => import("./components/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Shop = lazy(() => import("./pages/Shop"));
const ScrollLazyDemo = lazy(() => import("./components/ScrollLazyDemo"));

const Task = lazy(() => import("./components/Task"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=194");
        dispatch(addProducts(response.data.products));
      } catch (error) {
        console.error("Error fetching products:", error);
        dispatch(addProducts([]));
      }
    };

    const timer = setTimeout(() => {
      fetchProducts();
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <Suspense 
      fallback={
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/counter" element={<Counter />} />
        
        <Route path="/task" element={<Task />} />

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="shop" element={<Shop />} />
          <Route path="scrolllazydemo" element={<ScrollLazyDemo />} />
        </Route>
      </Routes>
      {/* console.log(error.message); */}
      
    </Suspense>
  );
};

export default App;