import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./shop-context";
import { CartItem } from "./cart-item";
import { MenuList } from "../helpers/MenuList";
import "../styles/cart.css";

const Cart = () => {
  

  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  
  const selectedMenuItems = MenuList().filter((product) => cartItems[product._id] > 0);

  

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {selectedMenuItems.map((product) => (
          <CartItem key={product._id} data={product} />
        ))}
      </div>
      

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/Menu")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1 onClick={() => console.log(cartItems)}> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

export default Cart;
