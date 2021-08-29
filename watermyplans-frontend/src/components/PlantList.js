import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import './Styles/waterMyPlants.css';

const PlantList = (props) => {

    const { plants, plantImages } = props;

    console.log(plantImages);


    return (
        <div className='plantListContainer'>
            <h1>Let's try this again.</h1>
            {plantImages.map((image => {
                return(
                    <div className="plantImageContainer">
                        <img src={ image.image } />
                        <h2>{image.name}</h2>
                    </div>
                )
            }))}
            {plants.map((plant) => {
                return (
                    <PlantCard key={plant.id} plant={plant} plantImages={plantImages} />
                )
            })}
        </div>
    )
}

export default PlantList;