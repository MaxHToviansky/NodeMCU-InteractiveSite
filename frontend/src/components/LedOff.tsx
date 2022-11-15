import React, { MouseEventHandler } from "react";
import { LedContext } from "./LedContext";

export default function () {
    const {setStatusLed} = React.useContext(LedContext)

    const ledOff: MouseEventHandler<HTMLButtonElement> = async ev => {
        ev.preventDefault()
        const request = await fetch('/LEDCheck')
        if (request.status >= 200 && request.status <= 299) {
            const LEDStatus = await request.json()
            if(LEDStatus.led){
                const ledOffRequest = await fetch('/LEDOff')
                if(ledOffRequest.status >= 200 && request.status <= 299){
                    //TODO coisa bonita
                    setStatusLed(false)
                    return
                }
                alert("LEDOff falhou")
            } else {
                // TODO resposta LED já desligado
            }
        }
        alert("LEDCheck falhou")
    }

    return <>
        <button onClick={ledOff}>OFF</button>
    </>
}