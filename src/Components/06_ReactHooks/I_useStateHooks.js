import React, {useState} from 'react'

const I_useStateHooks = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1) ;
    };
    const decrement = () => {
        setCount(count - 1);
    };
   return (
    <div>I_useStateHooks
        <p>Count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default I_useStateHooks