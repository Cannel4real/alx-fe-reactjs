import React from 'react'
import react, {useState} from 'react';

const Counter = () => {
const [count, setCount] = useState(0);

    function increaseCounter() {
        setCount(count + 1);
    }
    function decreaseCounter() {
        setCount(count - 1);
    }
    function reset() {
        setCount(0);
    }
    
    
  return (
    <div>
      <p style={{ color: 'black', padding: '5px', fontSize: '50px' }}>{count}</p>
      <button style={{ color: 'white', fontSize: '30px', backgroundColor: '#0066b2', margin: '2px' }} onClick={increaseCounter}>increase</button> 
      <button style={{ color: 'white', fontSize: '30px', backgroundColor: '#0066b2', margin: '2px' }} onClick={decreaseCounter}>Decrease</button> 
      <button style={{ color: 'white', fontSize: '30px', backgroundColor: '#0066b2', margin: '2px' }} onClick={reset}>reset</button> 

    </div>
  )
}

export default Counter
