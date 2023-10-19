import React, { useContext } from "react";
import { ShopContext } from "./shop-context";

export const CartItem = (props) => {
  const item_data = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div style={{ backgroundImage: `url(${item_data.image_url})` }} className="prod_img"> </div>
      <div className="description">
        <p>
          <b>{item_data.name}</b>
        </p>
        <p> Price: ${item_data.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(item_data._id)}> - </button>
          <input
            value={cartItems[item_data._id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), item_data._id)}
          />
          <button onClick={() => addToCart(item_data._id)}> + </button>
        </div>
      </div>
    </div>
  );
};
