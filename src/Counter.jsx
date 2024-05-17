import React from 'react';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    console.log("initial value is" + count);

  return (
    <div>
      <button 
      style={{ backgroundColor: "#646cffaa" }}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
       style={{ backgroundColor: "#646cffaa" }}
        onClick={() => {
          if (count < 10) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  )
}

export default Counter
