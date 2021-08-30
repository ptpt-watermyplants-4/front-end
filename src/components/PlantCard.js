import React from 'react';
import './Styles/waterMyPlants.css';


const PlantCard = (props) => {
    const { plant, plantImage } = props;
    return (
        <div className='plantCardContainer' key={plant.id}>
            <h3>Name: {plant.nickName} </h3>
            <img src={plant.image} />
            <p>Species: {plant.species} </p>
            <p>Water Frequency: {plant.h2oFrequency} </p>
        </div>
    )
}

export default PlantCard;