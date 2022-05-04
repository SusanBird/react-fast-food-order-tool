import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="1">Fresh Fruit</option>
      <option value="2">Sweet Potato Fries</option>
      <option value="3">Guacamole</option>
    </select>
  );
}
