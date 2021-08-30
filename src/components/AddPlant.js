import React from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import './Styles/waterMyPlants.css';

const AddPlant = (props) => {

    const { plants, newPlants, setPlants, setNewPlants } = props;

    const plantsList = [];
    const newPlantObject = {
        id: '',
        nickName: '',
        species: '',
        h2oFrequency: '',
        image: '',
        dateLastWatered: ''
    }

    // adding 
    const addPlant = (event) => {
        event.preventDefault();
        axiosWithAuth()
        .post("/auth/myplants")
        .then(response => {

            console.log(response);
        })
        .catch(error => {
            console.log("Error adding plant: ", error)
        })
    }   

    const addingPlantChange = (event) => {
        setNewPlants({
            ...newPlants, 
            [event.target.name]: event.target.value })
    }

    return (
        <div className="addPlantFormCont">
            <form className="addPlantForm" onSubmit={addPlant}> 
                <label>Nickname: 
                    <input type='text' name='nickName' value={newPlants.nickName} onChange={addingPlantChange}/>
                </label>
                <label>Species: 
                    <input type='text' name='species' value={newPlants.species} onChange={addingPlantChange}/>
                </label>
                <button type='submit'>Add New Plant</button>
            </form>
        </div>
    )

}

export default AddPlant;