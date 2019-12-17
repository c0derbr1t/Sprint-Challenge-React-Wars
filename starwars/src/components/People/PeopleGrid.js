import React from 'react';
import PersonCard from './PersonCard';
import { PeopleContainer, CardContainer } from '../Styles';

export default function PeopleGrid(props) {

    return (
        <PeopleContainer className='people-container'>
            <CardContainer className='card'>
                {props.swapiData.map(item => {
                    return <PersonCard key={item.created} name={item.name} species={item.species} world={item.homeworld} />
                })}
            </CardContainer>
        </PeopleContainer>
    )
}

