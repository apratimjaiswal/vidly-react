import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="custom-form-pad">
        {label}
      </label>
      <input
        // autoFocus
        // ref={this.username}
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control custom-form-pad"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
