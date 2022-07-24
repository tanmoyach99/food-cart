import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "antd/dist/antd.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productReducer from "./features/productSlice";
import cartReducer, { getTotals } from "./features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

store.dispatch(getTotals())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
