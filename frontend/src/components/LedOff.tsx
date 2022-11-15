import React, { MouseEventHandler } from "react";

export default function () {
    
    const ledOff: MouseEventHandler<HTMLButtonElement> = async ev => {
        ev.preventDefault()
        const request = await fetch('/LEDCheck')
        if (request.status >= 200 && request.status <= 299) {
            const LEDStatus = await request.json()
            if(LEDStatus.led){
                const ledOffRequest = await fetch('/LEDOff')
                if(ledOffRequest.status >= 200 && request.status <= 299){
                    //TODO coisa bonita
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