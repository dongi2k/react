import React, {useState} from 'react';

const StateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('Name');

    const increment = () => {
        setCounter(counter+1)
    }

    let changeInput = (event) => {
        const getValue = event.target.value;
        setInputValue(getValue);
    }
    return <div>
        {counter}<button onClick={increment}>Increment</button>
        <input placeholder = 'enter your name...' onChange={changeInput}/>{inputValue}
    </div>
}

export default StateTutorial;