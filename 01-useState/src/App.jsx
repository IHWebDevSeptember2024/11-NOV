import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import ChangeTheme from "./components/ChangeTheme";

function App() {
  console.log("APP SE HA ACTUALIZADO");

  return (
    <>
      <h1>State</h1>
      <ChangeTheme />
      <Counter /> {/* cada componente tiene su propio estado */}
      <Counter />
    </>
  );
}

/* function App() {
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
  }); // declaramos el estado
  console.log("EL APP SE HA EJECUTADO: ", count);

  return (
    <>
      <h1>{count.count1}</h1>
      <button
        onClick={() => {
          setCount({
            ...count,
            count1: count.count1 +1
          });
        }}
      >
        Count up
      </button>
    </>
  );
} */

export default App;
