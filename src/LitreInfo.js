
import React from 'react';
import { useSpring, animated } from 'react-spring'

import './LitresList.css';

const LitresInfo = ({litre, price, index}) => {
    // console.log(index)
    const [props, set] = useSpring(() => ({ opacity: 0 }));

    React.useEffect(() => {
        setTimeout(() => set({ opacity: 1 }), 150 * index);
    }, [index, set]);

    return (
        <div className="col-md-4 col-xs-12" key={litre}>
            <animated.div className="fuel-card card shadow p-3 mb-5 bg-white rounded" style={props}>
                <div className="card-body">
                    <b>{litre.toFixed(2)}L</b> <br />
                    {litre}L x ${price} = ${(litre * price).toFixed(2)}
                </div>
            </animated.div>
        </div>
    );
}

export default LitresInfo;


