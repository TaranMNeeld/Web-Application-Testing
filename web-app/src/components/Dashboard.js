import React, { useState } from 'react';
import Display from './Display';
import './Dashboard.css';

const Dashboard = () => {
    let [ball, setBall] = useState(0);
    let [strike, setStrike] = useState(0);

    return (
        <div className='dash-board'>
            <div className='button-div'>
                <button className='btn' onClick={() => {
                    setBall(0);
                    setStrike(0);
                }}>Hit</button>
                <button className='btn' id='ball' onClick={() => {
                    if (ball < 4)
                        setBall(++ball);
                    else
                        setBall(0);
                }}>Ball</button>
                <button className='btn' onClick={() => {
                    if (strike < 2) {
                        setStrike(++strike);
                    }
                    else {
                        setStrike(0);
                        setBall(0);
                    }
                }}>Strike</button>
                <button className='btn' onClick={() => {
                    if (strike < 2)
                        setStrike(++strike);
                }}>Foul</button>
            </div>
            <Display ball={ball} strike={strike} />
            <img src='./baseball.png' alt='a baseball'/>
        </div>
    );
};

export default Dashboard;