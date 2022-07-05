import React from "react";

export default function Radio({ id, label, value, handleChange, radioValue, name, ...props }) {
  return (
    <div>
      <label style={{ cursor: "pointer",  }}>
        <input
          type="radio"
          name={name}
          id={id}
          value={value}
          checked={value === radioValue || value === radioValue[id]}
          onChange={({ target }) => handleChange(target.value, id)}
          {...props}
        />
        {label}
      </label>
    </div>
  );
}