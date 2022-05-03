import './App.css';
import { useState } from 'react';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';

function App() {
  const [orderName, setOrderName] = useState('');
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);


  return (
    <div className='App'> 
      <div>
        <h3>Order ready for {orderName}</h3>
      </div>
      <div>
        <FoodDropdown setFoodId={setFoodId} />
        <NameInput setOrderName={setOrderName} />
      </div>
    </div>
  );
}

export default App;
