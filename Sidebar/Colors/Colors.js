import "./Colors.css";
import Input from "../Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div className="bb">
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="#DC2626"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

     
      </div>
    </>
  );
};

export default Colors;
