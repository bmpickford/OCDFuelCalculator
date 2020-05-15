
import React, { useState } from 'react';
import FuelForm from './FuelForm';
import LitresList from './LitresList';

const Home = () => {
    const [fuelPrice, setfuelPrice] = useState(0);

    return (
        <div className="container fuel-container">
            <FuelForm onSubmit={setfuelPrice} />
            <LitresList price={fuelPrice} />
        </div>
    );
}

export default Home;


