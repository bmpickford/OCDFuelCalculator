
import React, { Component } from 'react';
import FuelForm from './FuelForm';
import LitresList from './LitresList';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {fuelPrice: 0};
        this.findPrice = this.findPrice.bind(this);
    }

    findPrice(fuelPrice) {
        this.setState({fuelPrice: fuelPrice});
    }

    render() {
        return (
            <div className="container fuel-container">
                <h3>Fuel Calculator</h3>
                <h6>A tool to find out how much fuel you need to put in, to get an even number for the fuel and total price</h6>

                <FuelForm onSubmit={this.findPrice} />
                <LitresList price={this.state.fuelPrice} />
            </div>
        );
    }
}

export default Home;


