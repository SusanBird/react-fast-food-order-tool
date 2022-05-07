import React from 'react';

export default function FoodDropdown({ setFoodId }) {

  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      <option value="1">Panang Curry</option>
      <option value="2">Asian Chicken Salad</option>
      <option value="3">Tacos</option>
    </select>
  );
}
