import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import './Styles/waterMyPlants.css';

const plantsList = [];
const newPlantObject = {
    id: '',
    name: '',
    year: '',
    color: '',
    pantone_value: ''
}

export default function WaterMyPlantsPage() {

    const [plants, setPlants] = useState(plantsList)
    const [newPlants, setNewPlants] = useState(newPlantObject)

    // fetching data for cards
    useEffect(() => {
        axiosWithAuth()
        .get("/unknown")
        .then(response => {
            console.log(response)
            setPlants(response.data.data);
        })
        .catch(error => {
            console.log("Error fetching data: ", error)
        })
    }, [])

    return (
        <div className="waterMyPlantsContainer">
            {/*will be adding a nav bar here */}
            <PlantList plants={plants} />

            <AddPlant plants={plants} newPlants={newPlants} setPlants={setPlants} setNewPlants={setNewPlants}/>


        </div>
    )
}