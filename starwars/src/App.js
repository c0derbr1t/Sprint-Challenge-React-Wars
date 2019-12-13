import React, { useState, useEffect } from 'react';
import Info from './components/Info';
import PeopleGrid from './components/People/PeopleGrid';
import axios from 'axios';
import './App.css';
import { MainH1 } from './components/Styles';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swapiData, setSwapiData] = useState([]);
  
  useEffect(() => {
    const proxy = 'https://raw.githubusercontent.com/akabab/starwars-api/0.2.1/api/all.json';
    const url = 'https://swapi.co/api/people';
    axios
    .get(proxy)
    .then(response => {
      console.log(response.data);
      setSwapiData(response.data);
    })
    .catch(error => {
      console.log('There was an error at the main axios call: ' + error);
    });

  }, []);

  return (
    <div className="App">
      <MainH1 className="Header">React Wars</MainH1>
      <Info />
      <div>
        <PeopleGrid swapiData={swapiData} />
      </div>
      
    </div>
  );
}

export default App;


/*
https://swapi.co/api/people/
*/