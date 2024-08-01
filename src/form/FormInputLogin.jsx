import React from 'react';

const FormInput = ({ id, label, type, placeholder, value, onChange, required }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label text-danger">
        <b>{label}</b>
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default FormInput;
