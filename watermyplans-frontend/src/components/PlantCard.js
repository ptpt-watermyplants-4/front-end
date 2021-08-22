import React from 'react';


const PlantCard = (props) => {
    const { plant } = props;
    return (
        <div key={plant.id}>
            <h3>Name: {plant.quoteAuthor} </h3>
            <p> {plant.quoteText} </p>
        </div>
    )
}

export default PlantCard;