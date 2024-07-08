import "./Brand.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div className="bb">
      <h2 className="sidebar-title brand-title">Brand</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Fresh"
          title="Fresh"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="King"
          title="King"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Everest"
          title="Everest"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
