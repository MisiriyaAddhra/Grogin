import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GoHeartFill } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";

const Card = ({ item, wishlist, handleCartClick, handleWishlistClick }) => {
  const { discount, img, title, star, rating, prevPrice, newPrice, status } = item;
  const statusClass = status === "Sold Out" ? "status-sold-out" : "status-in-stock";

  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    const isPresent = wishlist.some((product) => product.id === item.id);
    setInWishlist(isPresent);
  }, [wishlist, item.id]);

  const addToWishlist = () => {
    handleWishlistClick(item);
    setInWishlist(!inWishlist);
  };

  return (
    <section className="card">
      <div className="card-top">
        <span className="discount">{discount}</span>
        <button onClick={addToWishlist} className={`wishlist-btn ${inWishlist ? 'wishlist-btn-active' : ''}`}>
          <GoHeartFill className="nav-icons" />
        </button>
      </div>
      <Link to={`/product/${item.id}`}>
        <img src={img} alt={title} className="card-img" />
      </Link>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-reviews">{rating}</span>
        </section>
        <section className="card-price">
          <div className="price">
            ${newPrice}
            <del>{prevPrice}</del>
          </div>
        </section>
      </div>
      <div className="card-bottom">
        <button onClick={() => handleCartClick(item)} className="add-to-cart-btn">
          <CiShoppingCart className="cartclick" />
        </button>
        <span className={`status ${statusClass}`}>{status}</span>
      </div>
    </section>
  );
};

export default Card;
