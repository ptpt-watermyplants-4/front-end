import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';
import axios from 'axios';
import './Styles/waterMyPlants.css';

const plantsList = [];
const newPlantObject = {
    name: '',
    salary: '',
    age: '',
}

export default function WaterMyPlantsPage() {

    const [plants, setPlants] = useState(plantsList)
    const [newPlants, setNewPlants] = useState(newPlantObject)

    useEffect(() => {
        axios
        .get('https://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
            setPlants(response.data.data)
        })
        .catch(error => {
            console.log("Error fetching data", error)
        })
    }, [])

    // adding feature

    const addPlant = (event) => {
        event.preventDefault();
        axios
        .post('https://dummy.restapiexample.com/api/v1/create', newPlants)
        .then(response => {
            console.log("Adding: ", response)
            
        })
        .catch(error => {
            console.log("Adding error: ", error)
        })
    }

    const addingPlantChange = (event) => {
        setNewPlants({
            ...newPlants, 
            [event.target.name]: event.target.value })
    }

    return (
        <div className="waterMyPlantsContainer">
            {/*will be adding a nav bar here */}
            <PlantList plants={plants}/>

            <div className="addPlantFormCont">
                <form className="addPlantForm" onSubmit={addPlant}> 
                    <label>Name: 
                        <input type='text' name='name' value={newPlants.name} onChange={addingPlantChange}/>
                    </label>
                    <label>Number: 
                        <input type='text' name='salary' value={newPlants.salary} onChange={addingPlantChange}/>
                    </label>
                    <button type='submit'>Add New Plant</button>
                </form>
            </div>
        </div>
    )
}