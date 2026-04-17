import React from "react";

const InputField = ({
  name,
  type = "text",
  placeholder,
  value,
  required = false,
  onChange,
}) => {
  return (
    <div className="input-group">
      <label>
        {placeholder} {required && <span className="required">*</span>}
      </label>

      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="input-field"
        max={type === "date" ? new Date().toISOString().split("T")[0] : undefined}
      />
    </div>
  );
};

export default InputField;