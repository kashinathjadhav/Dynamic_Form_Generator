import React from "react";

const Checkbox = ({ label, checked, onChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  </div>
);

export default Checkbox;
