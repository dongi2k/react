import {useLayoutEffect, useEffect, useRef} from "react";

function LayoutEffectTutorial(){
    //LayoutEffect and Effect both similar, LayoutEffect loads before the site loads, useEffect loads AFTER the site is loaded
    const inputRef = useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
    }, []
    );

    useEffect(() => {
        inputRef.current.value = "HELLO"
    }, [])

    return <div className="App">
        <input ref={inputRef} value="PEDRO" style={{ width:400, height: 100}} />
    </div>;
}

export default LayoutEffectTutorial;