import React, { useRef, useState  }from "react";

function RefTutorial(){

    const inputRef = useRef(null); // user Input
    const [name, setName] = useState("Your Name Here") //name to change after Input

    const onClick = () => {
        setName(inputRef.current.value)
        inputRef.current.value = "";
        inputRef.current.focus();
    }



    return(
        <div>
            <h1>{name}</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={onClick}>Change Name</button>
        </div>
    );
}

export default RefTutorial;