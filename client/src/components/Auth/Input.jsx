import React from "react";

function Input({ name, type, handleChange }) {
  return (
    <div>
      <input
        className="form-control my-3"
        onChange={handleChange}
        placeholder={name}
        name={name}
        type={type}
        required
      />
    </div>
  );
}

export default Input;
