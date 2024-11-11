import { useState } from "react";

function Ternary() {
  const [showImage, setShowImage] = useState(false);

  console.log(showImage ? "la imagen se muestra" : "la imagen no se muestra");

  return (
    <>
      {showImage ? (
        <img
          width="100px"
          src="https://dam.ngenespanol.com/wp-content/uploads/2020/12/nutrias-tienen-piedra-favorita.jpg"
          alt="nutria con su piedra"
        />
      ) : (
        <h2>Image not visible</h2>
      )}
      <br />
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide" : "Show"} image
      </button>
    </>
  );
}

export default Ternary;
