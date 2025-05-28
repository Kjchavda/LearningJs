import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;
  const addValue = () => {
    counter++;
    setCounter(counter);
  }
  const subtractValue = () => {
    counter--;
    setCounter(counter);
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <br /> <br />
      <button onClick={subtractValue}>Decrease</button>
    </>
  )
}

export default App
