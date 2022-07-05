import React from "react";

export default function Checkbox({ id, label, handleChange, value, values }) {
  return (
    <div>
      <label htmlFor={id} style={{ cursor: "pointer" }}>
        <input
          type="checkbox"
          name={id}
          id={id}
          value={value}
          checked={values.includes(value)}
          onChange={({ target }) => handleChange(target)}
        />
        {label}
      </label>
    </div>
  );
}