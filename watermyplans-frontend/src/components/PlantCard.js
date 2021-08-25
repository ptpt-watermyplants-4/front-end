import React from 'react';
import './Styles/waterMyPlants.css';


const PlantCard = (props) => {
    const { plant } = props;
    return (
        <div className='plantCardContainer' key={plant.id}>
            <h3>Name: {plant.employee_name} </h3>
            <p>Number: {plant.employee_salary} </p>
        </div>
    )
}

export default PlantCard;