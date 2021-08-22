import React from 'react';
import PlantCard from './PlantCard';

const PlantList = (props) => {
    const { plants, fetchPlants } = props;

    return (
    <div className="plantListContainer">
        <h2>Water your plants!</h2>
        <ul>
            {/* {plants.map(plant => <PlantCard key={plant.id} plants={plant} />)} */}
            {/* {plants.map(plant => {
                <div key={plant.id}>
                    <h3>Plant: {plant.name}</h3>
                </div>
            })} */}
        </ul>
        
    </div>
    )
}

export default PlantList;