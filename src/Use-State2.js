import {React,useState} from 'react';


function UseStateDemo2() {

    const [text,setText] = useState('');
    function handleInput(e) {
        setText(e.target.value);

    }
    return(
        <div>
            <h1>useState demo 2</h1>
            <input type="text" placeHolder="Type here" onChange={handleInput}></input>
            <h3>Your Text: {text}</h3>
        </div>
    )
}


export default UseStateDemo2;









