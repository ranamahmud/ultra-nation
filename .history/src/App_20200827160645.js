import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { useEffect } from 'react';
import Country from '../src/component/Country/Country'
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error))
  }, [])

  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    console.log('added', country);}

  return (
    <div className="App">
      <header className="App-header">
<h4>Country added</h4>
        <ul>
          {
            countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
