import {React,useState} from 'react';


function UseStateDemo2() {

    {/* Using useState:
      * passing initial value to useSate.
      * the return value of useState is destructured. 
      */}
    const [text,setText] = useState(''); 

    // Function to handle change in input field.
    function handleInput(e) { // invoked when there is a change in input field.
        setText(e.target.value); // the changed (updated or new) value is set to the current value of state.

    }
    return(
        <div>
            <h1>useState demo 2</h1>

            {/*Using event handler in input field. */}
            <input type="text" placeHolder="Type here" onChange={handleInput}></input>
            <h3>Your Text: {text}</h3> {/*Displaying the current value of state */}
        </div>
    )
}


export default UseStateDemo2;









