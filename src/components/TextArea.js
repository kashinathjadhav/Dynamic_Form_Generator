import React from "react";

const TextArea = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <textarea value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default TextArea;
