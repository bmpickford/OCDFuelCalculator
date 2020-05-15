
import React from 'react';
import { SpliceArr } from './common/ArrayHelpers';
import { FindLitresForFuelPrice } from './data/Fuel';

import LitresRow from './LitresRow';

import './LitresList.css';

const LitresList = ({ price }) => {
    if (!price) {
        return <></>;
    }

    const formattedPrice = parseFloat(price / 100).toFixed(3);
    const priceData = FindLitresForFuelPrice(formattedPrice);
    if (!priceData || priceData.litres.length === 0) {
        return (
            <div>No Price Found</div>
        )
    }
    const splitPrices = SpliceArr(priceData.litres, 3);

    return (
        splitPrices.map((litres, i) =>{
            return (
                <div className="row" key={litres}>
                    <LitresRow litres={litres} price={formattedPrice} index={i}/>
                </div>
            );
        })
    );
}

export default LitresList;


