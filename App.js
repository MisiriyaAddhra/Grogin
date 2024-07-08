import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar";
import { Cart } from "./Pages/cart/Cart";
import { Wishlist } from "./Pages/wishlist/Wishlist";
import Home from "./Pages/home/Home";
import Footer from "./footer/Footer";
import ProductDetail from "./Pages/Detail/ProductDetail";
import LoginForm from "./Pages/Login/LoginForm";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [warning, setWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [priceRange, setPriceRange] = useState([0, 12000]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = {
    name: "John Doe",
    image: "path/to/user/image.jpg"
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleCartClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setWarningMessage("Item is already added to the cart");
      setTimeout(() => {
        setWarning(false);
        setWarningMessage("");
      }, 2000);
      return;
    }
    setCart([...cart, item]);
    console.log("Adding to cart:", item);
  };

  const handleWishlistClick = (item) => {
    const isPresent = wishlist.some((product) => product.id === item.id);
    if (isPresent) {
      setWishlist(wishlist.filter((product) => product.id !== item.id));
      setWarning(true);
      setWarningMessage("Item removed from wishlist");
    } else {
      setWishlist([...wishlist, item]);
      setWarning(true);
      setWarningMessage("Item added to wishlist");
    }
    setTimeout(() => {
      setWarning(false);
      setWarningMessage("");
    }, 2000);
    console.log(isPresent ? "Removing from wishlist:" : "Adding to wishlist:", item);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const filteredData = (products, selected, query, priceRange) => {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, brand, newPrice, status }) =>
          category === selected ||
          color === selected ||
          brand === selected ||
          newPrice === selected ||
          status === selected
      );
    }

    filteredProducts = filteredProducts.filter(
      (product) => product.newPrice >= priceRange[0] && product.newPrice <= priceRange[1]
    );

    return filteredProducts;
  };

  const result = filteredData(products, selectedCategory, query, priceRange);

  return (
    <Router>
      <div className="app">
        {isLoggedIn ? (
          <>
            <Navigation
              query={query}
              handleInputChange={handleInputChange}
              size={{ cart: cart.length, wishlist: wishlist.length }}
              user={user}
            />
            {warning && (
              <div className="warning">{warningMessage}</div>
            )}
            <div className="main-container">
              <ConditionalSidebar handleChange={handleChange} handlePriceChange={handlePriceChange} />
              <main className="main">
                <Routes>
                  <Route
                    path="/home"
                    element={<Home />}
                  />
                  <Route
                    path="/cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                  />
                  <Route
                    path="/wishlist"
                    element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />}
                  />
                  <Route
                    path="/product/:id"
                    element={<ProductDetail handleCartClick={handleCartClick} handleWishlistClick={handleWishlistClick} />}
                  />
                  <Route
                    path="/"
                    element={
                      <Products
                        result={result}
                        wishlist={wishlist}
                        handleCartClick={handleCartClick}
                        handleWishlistClick={handleWishlistClick}
                        warning={warning}
                        warningMessage={warningMessage}
                      />
                    }
                  />
                </Routes>
              </main>
            </div>
            <Footer />
          </>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </div>
    </Router>
  );
}

function ConditionalSidebar({ handleChange, handlePriceChange }) {
  const location = useLocation();
  const hideSidebar = ["/cart", "/wishlist", "/home", "/login"].includes(location.pathname) || location.pathname.startsWith("/product/");

  return !hideSidebar ? <Sidebar handleChange={handleChange} handlePriceChange={handlePriceChange} /> : null;
}

export default App;
