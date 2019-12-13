import React from 'react';
import PersonCard from './PersonCard';

export default function PeopleGrid(props) {

    return (
        <div className='people-container'>
            <div className='card'>
                {props.swapiData.map(item => {
                    return <PersonCard key={item.created} name={item.name} species={item.species} world={item.homeworld} />
                })}
            </div>
        </div>
    )
}

