import React, { useState } from 'react';

function Display() {
    const [count, setCount] = useState({ball: 0, strike: 0});

    function AddBall() {
        if (count.ball === 3) {
            Reset();
        }
        else {
            setCount({ball: count.ball+1, strike: count.strike});
        };
    };

    function AddStrike() {
        if (count.strike === 2) {
            Reset();
        }
        else {
            setCount({strike: count.strike+1, ball: count.ball})
        };
    };

    function Foul() {
        if (count.strike === 2) {
            return
        }
        else {
            setCount({strike: count.strike+1, ball: count.ball})
        };
    };

    function Reset() {
        setCount({ball: 0, strike: 0})
    };

    return (
        <div className="display-container" data-testid="display">
            <h1>Ball</h1>
                <p>{count.ball}</p>

            <h1>Strike</h1>
                <p>{count.strike}</p>
        </div>
    )
}

export default Display;