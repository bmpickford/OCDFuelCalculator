
import React, { Component } from 'react';

class FuelForm extends Component {
    constructor(props) {
        super(props);
        this.state = {fuelPrice: 0};
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
            <div className="fuel-input-form d-flex align-items-center h-50">
                <form className="fuel-form" onSubmit={this.handleSubmit}>
                    <div className="form-group row justify-content-md-center">
                        <div className="col">
                            <input type="number" placeholder="Enter a fuel price" value={this.state.fuelPrice} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-md-center">
                        <div className="col">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FuelForm;


