// Counter component that increments, decrements, and resets a counter
// The counter is not allowed to go below 0

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase +</button>
      <button onClick={() => (count > 0 ? setCount(count - 1) : null)}>Decrease -</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
