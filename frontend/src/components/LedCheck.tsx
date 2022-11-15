import React, { MouseEventHandler, useState } from "react";
import { LedContext } from "./LedContext";

export async function LedVerify () {
    const {statusLed, setStatusLed} = React.useContext(LedContext)
    const request = await fetch('/LEDCheck')
    if (request.status >= 200 && request.status <= 299) {
        const LEDStatus = await request.json()
        setStatusLed(LEDStatus.led)
    }
    alert("LEDCheck falhou")
}

export default function () {
    const {statusLed} = React.useContext(LedContext)
    
    let HtmlLed = <div id="ledInfoOff">Led Desligado</div> 
    
    if(statusLed) HtmlLed = <div id="ledInfoOn">Led Ligado</div>
    
    return HtmlLed
}

