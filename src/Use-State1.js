import {React, useState} from 'react';


function UseStateDemo1() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count+1);
    }

    function decreaseCount() {
        setCount(count-1);
    }

    function resetCount() {
        setCount(0);
    }




    return (
        <div>
            <h1>useState demo 1</h1>
            <h3>Count: {count}</h3>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>  
    );
}

export default UseStateDemo1;