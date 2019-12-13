import React, { useState, useEffect } from 'react';
import Info from './components/Info';
import PeopleGrid from './components/People/PeopleGrid';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [swapiData, setSwapiData] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://swapi.co/api/people/')
    .then(response => {
      console.log(response.data.results);
      setSwapiData(response.data.results);
    })
    .catch(error => {
      console.log('There was an error at the main axios call: ' + error);
    });

  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Info />
      <PeopleGrid swapiData={swapiData} />
    </div>
  );
}

export default App;


/*
https://swapi.co/api/people/
*/