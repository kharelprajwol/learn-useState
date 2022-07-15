
// Importing useState
import {useState} from 'react';


function UseStateDemo1() {

    // Using useState
    const [count, setCount] = useState(0);
    // In above line: 
    // -- The initial value of state is set to 0;
    // -- Since useState return array, that array is destructed.
    //    -- the first value, which is the current state is assigned to a variable named count.
    //    -- the second value, which is the function that updates the value of count is named as, setCount


    function increaseCount() { // invoked when user press Increase button
        setCount(count+1); // current state's value is increased by one.
    }

    function decreaseCount() { // invoked when user press Decrease button
        setCount(count-1); // current state's value is decreased by one.
    }

    function resetCount() { // invoked when user press Reset button
        setCount(0); // current state's value is set to zero.
    }

    return (
        <div>
            <h1>useState demo 1</h1>
            <h3>Count: {count}</h3> {/*displaying current value of state */}

            {/* Using event handler in button tag:
              * always pass function in event handler.
              */}
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>  
    );
}

export default UseStateDemo1; {/*Exporting this component */}