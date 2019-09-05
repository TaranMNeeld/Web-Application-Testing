import React from 'react';

const Display = props => {
    return (
        <div>
            {console.log(props)}
            <h1>Balls: {props.ball}</h1>
            <h1>Strikes: {props.strike}</h1>
        </div>
    );
};

export default Display;