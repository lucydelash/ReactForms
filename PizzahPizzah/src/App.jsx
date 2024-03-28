import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [newOption, setNewOption] = useState('')
  const [pizzaOptions, setPizzaOptions] = useState(["Margherita", "Pepperoni", "Vegetarian", "BBQ", "Supreme"]);

  const handleChange = (e) => {
    setNewOption(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOption.trim() !== '') {
      setPizzaOptions([...pizzaOptions, newOption]);
      setNewOption('');
    }
  }

  const handleClick = () => {
    // Code to handle button click goes here
  }

  return (
    <>
      <h1>Pizzah Pizzah</h1>

      {/* Rendering pizza options */}
      <ul>
        {pizzaOptions.map((pizza, index) => (
          <li key={index}>{pizza}</li>
        ))}
      </ul>

      {/* Form to add new pizza option */}
      <form onSubmit={handleSubmit}>
        <label>
          Create Your Own Pizzah:
          <input type="text" value={newOption} onChange={handleChange} />
        </label>
        <button className="button5" onClick={handleClick}>Pizzah?</button>
      </form>
    </>
  )
}

export default App