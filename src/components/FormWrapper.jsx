import React from "react";
const FormWrapper = ({ title, children }) => {
  return (
    <div>
      {" "}
      <h3 style={{ color: "#b03060", marginBottom: "10px" }}> {title} </h3>{" "}
      {children}{" "}
    </div>
  );
};
export default FormWrapper;
