import React from 'react';
import './Styles/waterMyPlants.css';


const PlantCard = (props) => {
    const { plant } = props;
    return (
        <div className='plantCardContainer' key={plant.id}>
            <h3>Title: {plant.title} </h3>
            <p>Content: {plant.content} </p>
        </div>
    )
}

export default PlantCard;