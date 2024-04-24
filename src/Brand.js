import React from "react";

function Cars({cars}) {
    return (
        <li> No {cars.id} car name is {cars.brand} </li>
    );
}

function Brand() {
    const veh=[{id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}];
    return (
        <>
        <h1>CAR COLLECTIONS</h1>
        <ul>
            {veh.map((cars)=> <Cars cars={cars} />)}
        </ul> 
        </>
    );
}

export default Brand;
