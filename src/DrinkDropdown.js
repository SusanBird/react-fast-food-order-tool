import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="1">Hot Chocolate</option>
      <option value="2">Boba Tea</option>
      <option value="3">Fresh Pineapple Juice</option>
    </select>

  );
}
