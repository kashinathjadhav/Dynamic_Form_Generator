// TextField.js
import React from "react";

const TextField = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextField;
