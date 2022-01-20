import React, {useRef} from "react"
import Button from "../components/Button";
import button from "../components/Button";

function ImperativeHandle(){
    const buttonRef = useRef(null);

    return(
        <div>
            <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={buttonRef} />
        </div>
    )
}

export default ImperativeHandle;