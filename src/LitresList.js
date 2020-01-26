
import React, { Component } from 'react';
import { SpliceArr } from './common/ArrayHelpers';
import { FindLitresForFuelPrice } from './data/Fuel';

import LitresRow from './LitresRow';

import './LitresList.css';

class LitresList extends Component {
    getLitresForPrice = (price) => {
        if (!price) {
            return;
        }

        price = parseFloat(price).toFixed(2)

        const priceData = FindLitresForFuelPrice(price);
        if (!priceData) {
            return (
                <div>No Price Found</div>
            )
        }

        const splitPrices = SpliceArr(priceData.litres, 3);
        return (
           splitPrices.map((litres) =>{
               return (
                    <div className="row" key={litres}>
                        <LitresRow litres={litres} price={price} />
                    </div>
               );
           }));
    }

    render() {
        return (
            <div>{this.getLitresForPrice(this.props.price)}</div>
        );
    }
}

export default LitresList;


