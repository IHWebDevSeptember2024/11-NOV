import { useState } from "react";
import "./ChangeTheme.css";

function ChangeTheme() {
  const [color, setColor] = useState("black");

  function toggleTheme() {
    if (color === "black") {
      setColor("brown");
    } else {
      setColor("black");
    }
  }

  return (
    <div>
      <p className={color}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
        doloribus repellendus id veniam. Ratione, earum magnam, ex accusantium
        magni assumenda iusto, suscipit consequatur inventore natus nemo dolore.
        Eius, omnis culpa!
      </p>
      <button onClick={() => toggleTheme()}>Change theme color</button>
    </div>
  );
}

export default ChangeTheme;
