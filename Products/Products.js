import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { FaArrowRight } from "react-icons/fa";
import "./Product.css";

const Products = ({ result, wishlist, handleCartClick, handleWishlistClick, warning, warningMessage }) => {
  return (
    <section className="main">
      <section className="content-container">
        <div>
          <h5 className="week">Only this week</h5>
          <h1>Grocery Store With Different Treasures</h1>
          <p>We have prepared special discounts for you on grocery products...</p>
          <a href="#" className="btn">
            Shop Now <FaArrowRight />
          </a>
        </div>
      </section>

      <section className="card-container">
        {result.map((item) => (
          <Card
            key={item.id}
            item={item}
            wishlist={wishlist}
            handleCartClick={handleCartClick}
            handleWishlistClick={handleWishlistClick}
          />
        ))}
        {warning && <div className="warning-message">{warningMessage}</div>}
      </section>
    </section>
  );
};

export default Products;


