import { useMemo, useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState(0);

  function handleClick() {
    setCount(count+1)
  }

  function expensiveTask(num) {
    for(let i=0; i<=10000; i++) {}
    return num*2
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])
 
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <br /> 
      count: {count}
      <br />
      <input 
      type="number" 
      placeholder='enter number to double' 
      onChange={(e) => setInput(e.target.value)} />
      <br />
      double : {doubleValue}
    </div>
  )
}

export default App
