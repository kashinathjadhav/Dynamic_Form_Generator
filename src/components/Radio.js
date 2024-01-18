import React from "react";

const Radio = ({ label, options, selectedValue, onChange }) => (
  <div>
    <label>{label}</label>
    {options.map((option) => (
      <div key={option.value}>
        <input
          type="radio"
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => onChange(option.value)}
        />
        {option.label}
      </div>
    ))}
  </div>
);

export default Radio;
