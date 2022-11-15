import React, { useState } from "react"

interface Led{
    statusLed: boolean,
    setStatusLed: React.Dispatch<React.SetStateAction<boolean>>
}

export const LedContext = React.createContext({} as Led)

export default function LedContextProvider(props: React.PropsWithChildren) {
    const [statusLed, setStatusLed] = useState(false)

    return <>
        <LedContext.Provider value = {{statusLed,setStatusLed}}>
            {props.children}
        </LedContext.Provider>
    </>
}