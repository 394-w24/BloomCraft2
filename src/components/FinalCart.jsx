import React, { useState } from "react";
import FinalCartFlowerType from "./FinalCartFlowerType";
import NoteComponent from "./Note";

const FinalCart = ({ occasion, focalFlowers, fillerFlowers, foliageFlowers, containerOptions, totalPrice, notes, setGenerateNoteView}) => {
  const [showNoteComponent, setShowNoteComponent] = useState(notes.length > 0 ? true : false);

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ marginTop: '10px' }}>
        {focalFlowers.length !== 0 && <h3>Focal Flowers</h3>}
        <FinalCartFlowerType flowerList={focalFlowers} />
        {fillerFlowers.length !== 0 && <h3>Filler Flowers</h3>}
        <FinalCartFlowerType flowerList={fillerFlowers} />
        {foliageFlowers.length !== 0 && <h3>Foliage Flowers</h3>}
        <FinalCartFlowerType flowerList={foliageFlowers} />
        {containerOptions.length !== 0 && <h3>Containers</h3>}
        <FinalCartFlowerType flowerList={containerOptions} />
      </div>
      <div>
        <b style={{ fontSize: "1.5rem" }}>{`Total Price: $${totalPrice}.00`}</b>
      </div>
      <div>
        <button style={{ marginTop: "15px", marginBottom: "15px" }} onClick={() => setShowNoteComponent(true)}>Add a Note</button>
        {showNoteComponent && <NoteComponent notes={notes} setGenerateNoteView={setGenerateNoteView} />}
      </div>
    </div>
  );
};

export default FinalCart;
