import React from 'react';
import PlantCard from './PlantCard';

const PlantList = (props) => {
    const { plants } = props;

    return (
    <div className="plantListContainer">
        <h2>Water your plants!</h2>
        <ul>
            {plants.map(plant => <PlantCard key={plant.id} plants={plant}/>)}
        </ul>
        
    </div>
    )
}

export default PlantList;