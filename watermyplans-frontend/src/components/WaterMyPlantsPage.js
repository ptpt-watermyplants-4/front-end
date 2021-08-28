import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import './Styles/waterMyPlants.css';

// the images do not render. I need to find the correct path for them.
// The name field is to test props passage and to see if array is being properly executed.
// Testing image below under AddPlant component. Images is not rendering.

const plantImagesArr = [
    {imagePath: "/Images/bluesage.jpg", name: "Blue Sage"}, 
    {imagePath: "/Images/gardenlily.jpg", name: "Garden Lily"},
    {imagePath: "/Images/lavender.jpg", name: "Lavender"},
    {imagePath: "/Images/petunia.jpg", name: "Petunia"},
    {imagePath: "/Images/sunflower.jpg", name: "Sunflower"},
    {imagePath: "/Images/daylily.jpg", name: "Day Lily"},
    {imagePath: "/Images/lilac.jpg", name: "Lilac"},
    {imagePath: "/Images/frenchmarigold.jpg", name: "French Marigold"},
    {imagePath: "/Images/peony.jpg", name: "Peony"},
    {imagePath: "/Images/siberianiris.jpg", name: "Siberian Iris"}
]

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
    const [plantImages, setPlantImages] = useState(plantImagesArr)

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
            <PlantList plants={plants} plantImages={plantImages}/>

            <AddPlant plants={plants} newPlants={newPlants} setPlants={setPlants} setNewPlants={setNewPlants}/>
            <h2> Does this image render?? <img src="Images\bluesage.jpg" /></h2>


        </div>
    )
}