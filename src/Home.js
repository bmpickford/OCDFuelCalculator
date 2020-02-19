
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
                <FuelForm onSubmit={this.findPrice} />
                <LitresList price={this.state.fuelPrice} />
            </div>
        );
    }
}

export default Home;


