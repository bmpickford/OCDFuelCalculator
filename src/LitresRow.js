
import React from 'react';

import './LitresList.css';
import LitresInfo from './LitreInfo';

const LitresRow = ({litres, price, index}) => {

    return (
        litres.map((litre, childIndex) => {
            const num = (index * 3) + childIndex;
            console.log(num)
            return (
                <LitresInfo key={childIndex} litre={litre} price={price} index={num} />
            )
        })
    );
}

export default LitresRow;


