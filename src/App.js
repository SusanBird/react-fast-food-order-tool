import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');


  function handleNameChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className='App'> 
      <header className='App-header'>
        <div>
      Order for: {name}
        </div>
        <input>
    onChange={handleNameChange}
        </input>
      </header>
    </div>
  );
}

export default App;
