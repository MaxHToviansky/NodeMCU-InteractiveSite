import React from 'react'
import './App.css'
import LedOff from './components/LedOff'
import LedOn from './components/LedOn'
import { LedVerify } from './components/LedCheck'
import LedCheck from './components/LedCheck'
import LedContextdiv from './components/LedContext'



function App() {
  
  LedVerify()
  return <>
    <div className="App">
      <LedContextdiv>
      <h1>LED ON/OFF</h1>
      <div className='ButtonDiv'>
        <LedOn/>
        <LedOff/>
      </div>
      <div id='checkBox'>
        <LedCheck/>
      </div>
      </LedContextdiv>
    </div>
  </>
}

export default App