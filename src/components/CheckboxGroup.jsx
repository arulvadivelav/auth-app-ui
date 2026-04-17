import React from "react";
const CheckboxGroup = ({ options = [], values = [], onChange }) => {
  const handleChange = (value) => {
    if (values.includes(value)) {
      onChange(values.filter((v) => v !== value));
    } else {
      onChange([...values, value]);
    }
  };
  return (
    <div className="checkbox-group">
      {" "}
      {options.map((opt, index) => (
        <label key={index} className="checkbox-item">
          {" "}
          <input
            type="checkbox"
            checked={values.includes(opt.value)}
            onChange={() => handleChange(opt.value)}
          />{" "}
          {opt.label}{" "}
        </label>
      ))}{" "}
    </div>
  );
};
export default CheckboxGroup;
