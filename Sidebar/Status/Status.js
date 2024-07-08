import "./Status.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div className="bb">
      <h2 className="sidebar-title price-title">Status</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="In Stock"
          title="In Stock"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sold Out"
          title="Sold Out"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
