import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import { AiOutlineUserAdd, AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import grogin from "../assets/logo-dark.png.png";
import userimage from "../assets/Featured icon.png";
import "./Nav.css";

const Nav = ({ handleInputChange, query, size, user }) => {
  const [showUserPopup, setShowUserPopup] = useState(false);
  const { cart, wishlist } = size;

  const toggleUserPopup = () => {
    setShowUserPopup(!showUserPopup);
  };

  const closeUserPopup = () => {
    setShowUserPopup(false);
  };

  return (
    <>
      <section id="main-section">
        <section className="top-section">
          <p className="top-paragraph">
            FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
          </p>
          <span className="top-timer">
            Until the end of the sale: 47 days 06 hours 52 minutes 13 sec.
          </span>
        </section>
      </section>
      <header className="home-header">
        <div className="home-header-top">
          <nav className="home-header-nav-top-left">
            <ul>
              <li><Link to="/" className="home-header-link">About Us</Link></li>
              <li><Link to="/" className="home-header-link">My Account</Link></li>
              <li><Link to="/wishlist" className="home-header-link-border">Wishlist</Link></li>
              <li><Link to="/" className="home-header-link delivery">We deliver to you every day from 07:00 am to 23:00 pm</Link></li>
            </ul>
          </nav>
          <nav className="home-header-nav-top-right">
            <ul>
              <li><Link to="/" className="home-header-link">English<RiArrowDropDownLine /></Link></li>
              <li><Link to="/" className="home-header-link">USD<RiArrowDropDownLine /></Link></li>
              <li><Link to="/" className="home-header-link">Order Tracking</Link></li>
            </ul>
          </nav>
        </div>
        <div className="home-header-middle">
          <nav className="home-header-nav-middle-left">
            <ul>
              <li><h1 className="left"><img src={grogin} alt="logo" /></h1></li>
              <li className="delivery"><Link to="/"><IoLocationOutline /></Link></li>
              <li><Link to="/" className="home-header-link delivery">Deliver to all</Link></li>
            </ul>
          </nav>
          <nav className="home-header-nav-middle">
            <input
              className="search-input"
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Search..."
            />
          </nav>
          <nav className="home-header-nav-middle-right">
            <ul>
              <li className="user" onClick={toggleUserPopup}>
                <AiOutlineUserAdd />
                <small className="none">User</small>
                {showUserPopup && (
                  <div className="user-popup">
                    <AiOutlineClose className="close-icon" onClick={closeUserPopup} />
                    <img src={userimage} alt="User" className="user-popup-image" />
                    <p className="user-popup-name">{user.name}</p>
                  </div>
                )}
              </li>
              <li>
                <Link to="/wishlist">
                  <GoHeart /><small>{wishlist}</small>
                </Link>
                <small className="none">Wishlist</small>
              </li>
              <li>
                <Link to="/cart">
                  <CiShoppingCart />
                  <small>{cart}</small>
                </Link>
                <small className="none">Your Cart</small>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home-header-bottom">
          <nav className="home-header-nav-left">
            <input type="checkbox" id="click" />
            <label htmlFor="click" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>
              <li><Link to="/home" className="home-header-link">Home<RiArrowDropDownLine /></Link></li>
              <li><Link to="/" className="home-header-link">Shop<RiArrowDropDownLine /></Link></li>
              <li><Link to="/" className="home-header-link">Fruits & Vegetables</Link></li>
              <li><Link to="/" className="home-header-link">Beverage</Link></li>
              <li><Link to="/" className="home-header-link">Blog</Link></li>
              <li><Link to="/" className="home-header-link">Contact</Link></li>
            </ul>
          </nav>
          <nav className="home-header-nav-right">
            <ul>
              <li><Link to="/" className="home-header-link">Trending Products<RiArrowDropDownLine /></Link></li>
              <li><Link to="/" className="home-header-link">Almost Finished<button className="sale">sale</button><RiArrowDropDownLine /></Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Nav;
