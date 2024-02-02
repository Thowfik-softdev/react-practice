import React, { useEffect, useState } from "react";

const II_useEffectHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count: " + count;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      II_useEffectHooks
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default II_useEffectHooks;
