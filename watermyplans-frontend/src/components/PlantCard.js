import React from 'react';
import './Styles/waterMyPlants.css';


const PlantCard = (props) => {
    const { plant } = props;
    return (
        <div className='plantCardContainer' key={plant.id}>
            <h3>Name: {plant.name} </h3>
            <p>Year: {plant.year} </p>
            <p>Color: {plant.color} </p>
        </div>
    )
}

export default PlantCard;