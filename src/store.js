import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/Counter/CounterSlice";
import productReducer from "./features/Products/ProductSlice";
import cartReducer from "./features/Cart/CartSlice";
import taskReducer from "./features/Task/TaskSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
    task: taskReducer,
  },
});

export default store;