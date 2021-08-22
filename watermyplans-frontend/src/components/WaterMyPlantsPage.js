import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../helpers/axiosWithAuth';

import Navbar from '../navbar';
import PlantList from '../PlantList';

const WaterMyPlantsPage = () => {
    const [plants, setPlants] = ([]);
    // const [edit, setEdit] = useState(false);

    //useEffect for fetching plant will be here!!

    // const toggleEdit = (value) => {
    //     setEdit(value);
    // }

    // const saveEdit = () => {
    //     axiosWithAuth()
    //     .put('', editPlant)
    //     .then(response => {
    //        console.log(response)
    //      })
    //     .catch(error => {
    //        console.log(error)
    //      })

    // const deletePlant = () => {
    //     axiosWithAuth()
    //     .delete()
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    // const addPlant = () => {
    //     axiosWithAuth()
    //     .post()
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }


    return (
        <div className="landingContainer">
            <Navbar />
            <PlantList plants={plants}/>
        </div>
    )
}

export default WaterMyPlantsPage;