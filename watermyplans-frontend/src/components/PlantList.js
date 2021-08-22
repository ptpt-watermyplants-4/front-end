import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlantCard from './PlantCard';

const PlantList = () => {
    const plantsList = [];
    const [plants, setPlants] = useState(plantsList)

    useEffect(() => {
        axios
        .get('https://quote-garden.herokuapp.com/api/v3/quotes')
        .then(response => {
            setPlants(response.data.data)
        })
        .catch(error => {
            console.log("Error fetching data", error)
        })
    }, [])


    return (
        <div>
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