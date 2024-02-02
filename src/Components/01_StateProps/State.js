import React, { useState } from "react";

const State = () => {
  const [Count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(Count + 1);
  };

  const handleDecrement = () => {
    setCount(Count - 1);
  };

  return (
    <div>
      <h3>State</h3>
      <p>Count: {Count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default State;
