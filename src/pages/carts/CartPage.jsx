import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Billing from "./Billing";

const CartPage = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-5">Shopping Cart</h2>

      <div className="grid grid-cols-5 sm:grid-cols-1 gap-4">
        <div className="col-span-3 sm:col-span-1">
          {carts.length ? (
            carts.map((item, index) => <CartItem item={item} key={index} />)
          ) : (
            <div>No Products in your cart</div>
          )}
        </div>

        <div className="col-span-2 sm:col-span-1">
          <Billing />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
