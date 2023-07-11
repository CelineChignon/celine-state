import { useState } from "react";
const Welcome = () => {

    const [displayMessage, setDisplayMessage] = useState(false);
    const handleClick = () => {
        setDisplayMessage(!displayMessage)
    }
    return (
        <>
            <button onClick={handleClick}>Welcome</button>

            {displayMessage && (<p>Je suis un message de bienvenue</p>)}
        </>
    )
}

export default Welcome;