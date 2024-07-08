import React from "react";
import "./Cart.css";


export const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };


  return (
    <section className="cart-container">
      <div className="head">
        <h2 className="carth2">your cart items</h2>
      </div>

      {cart.map((item) => (
        <div className="cart-box" key={item.id}>
          <div className="cart-img">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="cart-info">
            <p className="cart-title">{item.title}</p>
            <button className="cartbtn" onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      
    </section>
  );
};
