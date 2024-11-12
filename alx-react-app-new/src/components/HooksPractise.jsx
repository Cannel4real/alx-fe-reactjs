import React from 'react'
import react, {useState} from 'react';

const HooksPractise = () => {
const [details, setDetails] = useState({counter: 0, name: ''});

    function increaseCounter() {
        setDetails({counter: details.counter + 1});
    }
    console.log(details);
    
    
  return (
    <div>
        <input type="text" onChange={e => setName(e.target.value)}/>
      <h1>{details.name} has clicked {details.counter} times</h1>
      <h2>{details.counter}</h2>
      <button onClick={increaseCounter}>increase</button> 

    </div>
  )
}

export default HooksPractise
