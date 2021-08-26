import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import axios from 'axios';
import './Styles/waterMyPlants.css';

const plantsList = [];
const newPlantObject = {
    content: '',
    hits: '',
    id: '',
    imageURL: '',
    likes: '',
    title: '',
    userId: ''
}

export default function WaterMyPlantsPage() {

    const [plants, setPlants] = useState(plantsList)
    const [newPlants, setNewPlants] = useState(newPlantObject)

    // fetching data for cards
    useEffect(() => {
        fetch("http://fakeapi.jsonparseronline.com/posts")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setPlants(data)
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