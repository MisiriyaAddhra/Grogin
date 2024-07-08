import React from "react";
import "./Price.css";
import Slider from "react-slider";
import { useState } from "react";

const MIN = 0;
const MAX = 800;

function Price({ handlePriceChange }) {
  const [values, setValues] = useState([MIN, MAX]);

  const onFilterClick = () => {
    handlePriceChange(values);
  };

  return (
    <div className="price-cat">
      <div className="box">
        <h2 className="sidebar-title price-title">Price</h2>
        <div className="values">
          <div className="min-max-box">
            <div className="label-cat">Min</div>
            <div className="value">${values[0]}</div>
          </div>
          <span>-</span>
          <div className="min-max-box">
            <div className="label-cat">Max</div>
            <div className="value">${values[1]}</div>
          </div>
        </div>

        <Slider
          className="slider"
          onChange={setValues}
          value={values}
          min={MIN}
          max={MAX}
        />
      </div>
      <div className="current-range">
        <small className="price-current">current range: ${values[1] - values[0]}</small>
        <button className="current" onClick={onFilterClick}>Filter</button>
      </div>

    </div>
  );
}

export default Price;
