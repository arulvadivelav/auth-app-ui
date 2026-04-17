import React from "react";

const SelectField = ({
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  label,
  required = false,
}) => {
  return (
    <div className="input-group">
      <label>
        {label || placeholder} {required && <span className="required">*</span>}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="input-field"
      >
        <option value="">{placeholder}</option>

        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;