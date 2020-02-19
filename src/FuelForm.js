
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './FuelForm.css';

class FuelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {fuelPrice: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.fuelPrice);
    }

    handleChange(event) {
        this.setState({fuelPrice: event.target.value});
    }

    render() {
        return (
            <div className="fuel-input-form d-flex align-items-center">
                <form className="fuel-form" onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input className="form-control" type="number" step="0.1" placeholder="Fuel Price" aria-describedby="fuel_help" value={this.state.fuelPrice} onChange={this.handleChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </div>
                    </div>
                    <small id="fuel_help" className="form-text text-muted">Enter the fuel price in cents e.g. 142.1</small>
                </form>
            </div>
        );
    }
}

export default FuelForm;


