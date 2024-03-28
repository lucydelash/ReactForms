import React, { useState } from 'react';
import './App.css';

function App() {
  const [newOption, setNewOption] = useState('');
  const [newTopping, setNewTopping] = useState('');
  const [pizzaOptions, setPizzaOptions] = useState(["Margherita", "Pepperoni", "Vegetarian", "BBQ Chicken", "Supreme"]);
  const [pizzaToppings, setPizzaToppings] = useState(["Cheese & Basil", "Do I Really Need To Say...", "ALL THE VEGGIES!", "Chicken & BBQ Sauce", "EVERYTHING!!!"]);

  const handleOptionChange = (e) => {
    setNewOption(e.target.value);
  }

  const handleToppingChange = (e) => {
    setNewTopping(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newOption.trim() !== '' && newTopping.trim() !== '') {
      setPizzaOptions([...pizzaOptions, newOption]);
      setPizzaToppings([...pizzaToppings, newTopping]);
      setNewOption('');
      setNewTopping('');
    }
  }

  return (
    <>
      <img src="https://github.com/lucydelash/PizzahPizzah/blob/main/5b8849a8-4436-433b-bdfe-d09b26cd0a89.png?raw=true"></img>

      {/* Combined Form: Add new pizza option and topping */}
      <form onSubmit={handleSubmit}>
        <label>
          Name Your Pizzah:
          <input type="text" value={newOption} onChange={handleOptionChange} />
        </label>
        <label>
          Add Your Toppings:
          <input type="text" value={newTopping} onChange={handleToppingChange} />
        </label>
        <button className="button5" type="submit">Pizzah!</button>
      </form>

      {/* Rendering pizza options and toppings */}
      <div>
        <ul>
          {pizzaOptions.map((option, index) => (
            <li key={index}>{option} - {pizzaToppings[index]}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App;