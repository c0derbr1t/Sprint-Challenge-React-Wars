import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Card, CardH3, Hr, CardP, CardSpan } from '../Styles';

const PersonCard = props => {
    // const [worldData, setWorldData] = useState([]);
    // const [speciesData, setSpeciesData] = useState([]);

    // useEffect(() => {
    //     axios
    //     .get(`${props.world}`)
    //     .then(response => {
    //         console.log(response.data.name);
    //         // setWorldData(response.data.name);
    //     })
    //     .catch(error => {
    //         console.log('There was an error at the world axios call: ' + error);
    //     })
    // }, []);

    // useEffect(() => {
    //     axios
    //     .get(`${props.species}`)
    //     .then(response => {
    //         console.log(response.data.name);
    //         // setSpeciesData(response.data.name);
    //     })
    //     .catch(error => {
    //         console.log('There was an error at the species axios call: ' + error);
    //     })
    // }, []);

    return (
        <Card className='person-card'>
            <CardH3>{props.name}</CardH3>
            <Hr></Hr>
            {/* <CardP>Species: {speciesData} |  World: {worldData}</CardP> */}
            <CardP><CardSpan>Species:</CardSpan><br></br> *Display Species*</CardP>
            <CardP><CardSpan>World:</CardSpan><br></br> *Display World*</CardP>
        </Card>
    )
}

export default PersonCard;