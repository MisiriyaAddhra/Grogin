import "./Category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div className="bb">
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Beverages"
          title="Beverages"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Fruits"
          title="Fruits"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Snacks"
          title="Snacks"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Vegetables"
          title="Vegetables"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
