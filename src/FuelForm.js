
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useSpring, animated } from 'react-spring'

import './FuelForm.css';

const FuelForm = ({ onSubmit }) => {

    const [fuelPrice, setfuelPrice] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const yVal = submitted ? 5 : 40;
    const props = useSpring({
        paddingTop: `${yVal}vh`,
        opacity: 1,
        from: { opacity: 0 },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setTimeout(() => onSubmit(fuelPrice), 500);
    }

    const handleChange = (event) => {
        setfuelPrice(event.target.value);
    }

    return (
        <animated.div className="fuel-input-form d-flex align-items-center" style={props} >
            <form className="fuel-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <input className="form-control" type="number" step="0.1" placeholder="Fuel Price" aria-describedby="fuel_help" value={fuelPrice} onChange={handleChange}/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
                <small id="fuel_help" className="form-text text-muted">Enter the fuel price in cents e.g. 142.1</small>
            </form>
        </animated.div>
    );
}

export default FuelForm;


