import { useState } from "react";

function And() {
  const [showh1, setShowh1] = useState(false);

  return (
    <>
      {showh1 && (
        <div>
          <p>ESTO NO SE VA A MOSTRAR SI EL STATE ES FALSE</p>
        </div>
      )}
      <button onClick={() => setShowh1(!showh1)}>toggle</button>
    </>
  );
}

export default And;
