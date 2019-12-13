import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PersonCard = props => {
    const [worldData, setWorldData] = useState([]);
    const [speciesData, setSpeciesData] = useState([]);

    useEffect(() => {
        axios
        .get(`${props.world}`)
        .then(response => {
            setWorldData(response.data.name);
        })
        .catch(error => {
            console.log('There was an error at the world axios call: ' + error);
        })
    }, []);

    useEffect(() => {
        axios
        .get(`${props.species}`)
        .then(response => {
            setSpeciesData(response.data.name);
        })
        .catch(error => {
            console.log('There was an error at the species axios call: ' + error);
        })
    }, []);

    return (
        <div className='person-card'>
            <h3>{props.name}</h3>
            <p>Species: {speciesData} |  World: {worldData}</p>
        </div>
    )
}

export default PersonCard;