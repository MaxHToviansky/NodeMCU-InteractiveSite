import React from 'react'
import './App.css'
import LedOff from './components/LedOff'
import LedOn from './components/LedOn'

function App() {

  return <>
    <div className="App">
      <h1>Led ON OFF</h1>
      <LedOn/>
      <LedOff/>
    </div>
  </>
}

export default App