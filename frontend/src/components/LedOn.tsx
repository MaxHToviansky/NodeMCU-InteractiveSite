import React, { MouseEventHandler } from "react";
import { LedContext } from "./LedContext";

export default function () {
    const {setStatusLed} = React.useContext(LedContext)
    const ledOn: MouseEventHandler<HTMLButtonElement> = async ev => {
        ev.preventDefault()
        
        const request = await fetch('/LEDCheck')
        if (request.status >= 200 && request.status <= 299) {
            const LEDStatus = await request.json()
            if(LEDStatus.led){
                const ledOnRequest = await fetch('/LEDOn')
                if(ledOnRequest.status >= 200 && ledOnRequest.status <= 299){
                    //TODO coisa bonita
                    setStatusLed(true)
                    return
                }
                alert("LEDOn falhou")
            } else {
                // TODO resposta LED já ligado
            }
        }
        alert("LEDCheck falhou")
    }
    
    return <>
        <button onClick={ledOn}>ON</button>
    </>
}