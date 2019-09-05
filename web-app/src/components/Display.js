import React from 'react';
import './Dashboard.css';

const Display = props => {
    return (
        <div className='display'>
            <h1>Balls: {props.ball}</h1>
            <h1>Strikes: {props.strike}</h1>
        </div>
    );
};

export default Display;