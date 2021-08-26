import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import './Styles/waterMyPlants.css';

const PlantList = (props) => {

    const { plants } = props;


    return (
        <div className='plantListContainer'>
            <h1>Let's try this again.</h1>
            {plants.map((plant) => {
                return (
                    <PlantCard key={plant.id} plant={plant} />
                )
            })}
        </div>
    )
}

export default PlantList;