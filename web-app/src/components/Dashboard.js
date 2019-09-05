import React, {useState} from 'react';
import Display from './Display';

const Dashboard = () => {
    let [ball, setBall] = useState(0);
    let [strike, setStrike] = useState(0);

    return (
        <div className='dash-board'>
            <Display ball={ball} strike={strike}/>
            <button className='btn' onClick={() => {
                setBall(0);
                setStrike(0);
                console.log(`ball: ${ball}`);
                console.log(`strike: ${strike}`);
            }}>Hit</button>
            <button className='btn' onClick={() => {setBall(++ball); console.log(`ball: ${ball}`)}}>Ball</button>
            <button className='btn' onClick={() => {setStrike(++strike); console.log(`strike: ${strike}`)}}>Strike</button>
            <button className='btn' onClick={() => {
                if (strike < 2)
                    setStrike(++strike);
                    console.log(`strike: ${strike}`);
            }}>Foul</button>
        </div>
    );
};

export default Dashboard;