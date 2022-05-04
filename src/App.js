import './App.css';
import { useState } from 'react';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import InstructionsForm from './InstructionsForm';
import Images from './Images';

function App() {
  const [orderName, setOrderName] = useState('');
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [instructions, setInstructions] = useState(['Extra Instructions Will Appear Below']);


  return (
    <main className='main'> 
      <div className='App'> 
        <div>
          <h1>Order ready for {orderName}</h1>
          <Images
            foodId={foodId}
            drinkId={drinkId}
            sideId={sideId} />
          <ul className='instructions-list'>
            {
              instructions.map((instruction, i) => <li key={`${instruction}-${i}`}>
                {instruction}
              </li>)
            }
          </ul>
        </div>
        <div className='order-form'>
          <FoodDropdown setFoodId={setFoodId} />
          <DrinkDropdown setDrinkId={setDrinkId} />
          <SideDropdown setSideId={setSideId} />
          <NameInput setOrderName={setOrderName} />
          <InstructionsForm instructions={instructions} setInstructions={setInstructions} />
        </div>
      </div>
    </main>
  );
}

export default App;
