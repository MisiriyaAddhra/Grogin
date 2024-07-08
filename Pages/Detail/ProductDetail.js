import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../db/data"; // Adjust the import path as needed
import { MdOutlinePayment } from "react-icons/md";
import { MdOutlineGppGood } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlineIosShare } from "react-icons/md";
import { TbShoppingBag } from "react-icons/tb";
import { GoHeartFill } from "react-icons/go";
import { CiShoppingCart } from "react-icons/ci";
import "./ProductDetail.css";


const ProductDetail = ({ handleCartClick, handleWishlistClick }) => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [activeSection, setActiveSection] = useState("description");

  useEffect(() => {
    // Start the timer
    const timer = setInterval(() => {
      setTotalSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  // Calculate hours, minutes, seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail">
        <div className="product-detail-left">
          <span className="discount-detail">{product.discount}</span>
          <img src={product.img} alt={product.title} />
        </div>
        <div className="product-detail-right">
          <div className="top-detail">
            <h1>{product.title}</h1>
            <div className="flex">
              <p>{product.star}{product.star}{product.star}{product.star}{product.star}</p>
              <p>{product.rating}</p>
            </div>
          </div>
          <div className="middle-detail">
            <p className="lorem">
              loremipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, libero eu dignissim ipsum dolor sit amet, consectetur
              adipiscing elit. Sed
            </p>
            <div className="price">
              ${product.newPrice}
              <del>{product.prevPrice}</del>
            </div>
            <button className="details-order">Order on Whatsapp</button>
            <div className="timer">
              <p className="special">Special Offer :</p>
              <div className="time-box">
                <span className="timer-time">{String(hours).padStart(2, "0")}</span>
              </div>
              <div className="time-box">
                <span className="timer-time">{String(minutes).padStart(2, "0")}</span>
              </div>
              <div className="time-box">
                <span className="timer-time">{String(seconds).padStart(2, "0")}</span>
              </div>
              <p className="end">remains until the end of the offer</p>
            </div>
            <div className="buttons">
              <button onClick={() => handleCartClick(product)} className="add-to-cart-btn single">
                <CiShoppingCart className="cartclick" />
                Add to cart
              </button>
              <button className="buy-now single">
                <TbShoppingBag className="cartclick" />Buy Now</button>
            </div>

            <div className="payment">
              <div className="pay">
                <MdOutlinePayment className="icons" />
                <p className="lorem"><b>payment:</b> Payment upon receipt of goods, Payment by card in the department, Google Pay,
                  Online card, -5% discount in case of payment</p>
              </div>

              <div className="warrenty">
                <MdOutlineGppGood className="icons" />
                <p className="lorem"><b>Warranty:</b> The Consumer Protection Act does not provide for the return of this product of proper
                  quality.</p>
              </div>
            </div>
            <div className="link-to">
              <button className="link-btns" onClick={() => handleWishlistClick(product)} >
                <GoHeartFill className="link-to-icons" />
                <span className="addtowish">
                  Add to wishlist
                </span>
              </button>
              <button className="link-btns">
                <MdOutlineIosShare className="link-to-icons" />
                <span className="share">
                  Share this Product
                </span>
              </button>
              <button className="link-btns">
                <IoIosGitCompare className="link-to-icons" />
                <span className="compare">
                  Compare
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom-details-top">
          <button className={`description ${activeSection === "description" ? "active" : ""}`} onClick={() => setActiveSection("description")}>
            <h6>Description</h6>
          </button>
          <button className={`review ${activeSection === "review" ? "active" : ""}`} onClick={() => setActiveSection("review")}>
            <h6>Reviews</h6>
          </button>
        </div>
        <div className="bottom-details-bottom">
          {activeSection === "description" && (
            <p className="lorem">{product.description}</p>
          )}
          {activeSection === "review" && (
            <p className="lorem">{product.reviews}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
