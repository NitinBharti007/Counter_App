import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  const addValue = () => {
    if(counter < 20){
      counter += 1
      setCounter(counter)
    }
  }
  const removeValue = () => {
    if(counter > 0){
      counter -= 1
      setCounter(counter)
    }
  }

  return (
    <>
    <h1>Hello Vite</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Increase Value</button>
    <br />
    <button onClick={removeValue}>Decrease Value</button>
    <h2>Footer: {counter}</h2>
    </>
  )
}

export default App
