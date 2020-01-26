
import React from 'react';
import './LitresList.css';

const LitresRow = ({litres, price}) => {
    return (
        litres.map((litre) => {
            return (
                <div className="col-md-4" key={litre}>
                    <div className="fuel-card card shadow p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <b>{litre.toFixed(2)}L</b> <br />
                            {litre}L x ${price} = ${(litre * price).toFixed(2)}
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default LitresRow;


