import React from "react";
import Products from "../components/Products";
import Cart from "../components/Cart";

const HomeScreen = () => {
  return (
    <div>
      <div className="content">
        <div className="main">
          <Products />
        </div>
        <div className="sidebar">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
