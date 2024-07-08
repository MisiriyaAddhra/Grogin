import React from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import Status from "./Status/Status";
import Brand from "./Brand/Brand";
import "./Sidebar.css";

const Sidebar = ({ handleChange,handlePriceChange}) => {
  return (
    <section className="sidebar">
      <Price handlePriceChange={handlePriceChange} />
      <Category handleChange={handleChange} />
      <Colors handleChange={handleChange} />
      <Status handleChange={handleChange} />
      <Brand handleChange={handleChange} />
    </section>
  );
};

export default Sidebar;
