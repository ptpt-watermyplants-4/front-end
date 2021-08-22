import React from 'react';
import Navbar from './navbar';
import PlantList from './PlantList';

export default function WaterMyPlantsPage() {

    return (
        <div className="waterMyPlantsContainer">
            {/*will be adding a nav bar here */}
            <div className="plantListContainer">
                <PlantList />
            </div>
        </div>
    )
}