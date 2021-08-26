import React, { useEffect, useState } from 'react';
import './Styles/waterMyPlants.css';

const AddPlant = (props) => {

    const { plants, newPlants, setPlants, setNewPlants } = props;

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

    // adding feature
    // const addPlant = (event) => {
    //     event.preventDefault();
    //     axios
    //     .post('https://dummy.restapiexample.com/api/v1/create', newPlants)
    //     .then(response => {
    //         console.log("Adding: ", response)
            
    //     })
    //     .catch(error => {
    //         console.log("Adding error: ", error)
    //     })
    // }
    const addPlant = (event) => {
        event.preventDefault();
        fetch("http://fakeapi.jsonparseronline.com/posts", {
            "method": "POST",
            "body": {
                "title": "Libero et ut sit vitae et porta arcu lorem donec sed vehicula mattis praesent sed ultricies.",
                "content": "Et libero amet nec arcu lacinia sit diam ut sit ipsum sit donec congue sit. Sit consectetur sit diam ut hendrerit libero ligula dolor donec enim non amet congue amet tortor mattis nec lorem donec vitae nam dolor consectetur ligula. Eget ut eget sed et sed diam eget. Tincidunt lorem sit libero hendrerit ultricies mauris consectetur donec mauris ut mattis lorem donec viverra nam ligula vehicula tincidunt sit. Amet vehicula nec donec ut a sed praesent non et donec nec libero consectetur ipsum ultricies mattis tortor ut ultricies diam.",
                "userId": 1,
                "categoryId": 4,
                "imageUrl": "https://i.picsum.photos/id/866/700/400.jpg"
            },
            "headers": {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(json => console.log(json))
    }   

    const addingPlantChange = (event) => {
        setNewPlants({
            ...newPlants, 
            [event.target.name]: event.target.value })
    }

    return (
        <div className="addPlantFormCont">
            <form className="addPlantForm" onSubmit={addPlant}> 
                <label>Title: 
                    <input type='text' name='title' value={newPlants.title} onChange={addingPlantChange}/>
                </label>
                <label>Content: 
                    <input type='text' name='content' value={newPlants.content} onChange={addingPlantChange}/>
                </label>
                <button type='submit'>Add New Plant</button>
            </form>
        </div>
    )

}

export default AddPlant;