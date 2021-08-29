import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';
import AddPlant from './AddPlant';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import './Styles/waterMyPlants.css';
import bluesage from '../Images/bluesage.jpg';
import gardenLily from '../Images/gardenlily.jpg'
import lavender from '../Images/lavender.jpg';
import petunia from '../Images/petunia.jpg';
import sunflower from '../Images/sunflowers.jpg';
import dayLily from '../Images/daylily.jpg';
import lilac from '../Images/lilac.jpg';
import frenchMarigold from "../Images/frenchmarigold.jpg";
import peony from "../Images/peony.jpg";
import siberianIris from "../Images/siberianiris.jpg";


// the images do not render. I need to find the correct path for them.
// The name field is to test props passage and to see if array is being properly executed.
// Testing image below under AddPlant component. Images is not rendering.

const plantImagesArr = [
    {image: `${bluesage}`, name: "Blue Sage"},
    {image: `${gardenLily}`, name: "Garden Lily"},
    {image: `${lavender}`, name: "Lavender"},
    {image: `${petunia}`, name: "Petunia"},
    {image: `${sunflower}`, name: "Sunflower"},
    {image: `${dayLily}`, name: "Day Lily"},
    {image: `${lilac}`, name: "Lilac"},
    {image: `${frenchMarigold}`, name: "French Marigold"},
    {image: `${peony}`, name: "Peony"},
    {image: `${siberianIris}`, name: "Siberian Iris"}
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
        .get("/plants")
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log("Error fetching data: ", error)
        })
    }, [])

    return (
        <div className="waterMyPlantsContainer">
            <PlantList plants={plants} plantImages={plantImages}/>

            <AddPlant plants={plants} newPlants={newPlants} setPlants={setPlants} setNewPlants={setNewPlants}/>
            <h2> Does this image render?? <img src={bluesage} /></h2>


        </div>
    )
}