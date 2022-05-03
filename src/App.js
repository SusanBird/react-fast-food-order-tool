import './App.css';
import { useState } from 'react';
import NameInput from './NameInput';

function App() {
  const [orderName, setOrderName] = useState('');


  function handleOrderNameChange(e) {
    console.log(e.target.value);
    setOrderName(e.target.value);
  }

  return (
    <div className='App'> 
      <div>
        <h3>Order ready for {orderName}</h3>
      </div>
      <div>
        <NameInput setOrderName={setOrderName} />
      </div>
    </div>
  );
}

export default App;
