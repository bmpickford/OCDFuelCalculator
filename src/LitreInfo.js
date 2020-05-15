
import React from 'react';
import { useSprings, animated } from 'react-spring'

import './LitresList.css';

const LitresInfo = ({litre, price, index}) => {
    const delay = 5000;
    // console.log(index)
    const [props, set] = useSprings({
        opacity: 1,
        from: { opacity: 0 },
        config: { delay: 5000 }
    });

    React.useEffect(() => {
        set({ opacity: 1, from: { opacity: 0 }, delay });
    }, []);

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


