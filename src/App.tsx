import React, {useState} from 'react';
//import logo from './logo.svg';
import { getSuggestion } from './brain/suggest'
import './App.css';


function App() {

  const [compliment, setCompliment] = useState('')
  const [name, setName] = useState('');
  const updateName = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const updateCompliment = () => {
    const compli = getSuggestion()
    setCompliment(compli.replace('{name}', name))
  }
  return (
    <div className="App">
      <header className="App-header">
        <input className="name" type="text" placeholder="Enter Name" onInput={updateName}></input>
        <button onClick={updateCompliment}>Compliment me!</button>
      </header>
      <section>
        <p className="result">{compliment}</p>
      </section>
    </div>
  );
}

export default App;
