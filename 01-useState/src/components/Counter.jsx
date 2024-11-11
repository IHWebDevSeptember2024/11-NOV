import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("COUNTER SE HA ACTUALIZADO");
  

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}

export default Counter;
