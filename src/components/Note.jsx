import React, { useState } from "react";

const NoteComponent = ({ notes, setGenerateNoteView }) => {
  const [note, setNote] = useState(notes);

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleGenerateNote = () => {
    setGenerateNoteView(true);
    setNote("");
  };

  return (
    <div>
      <h1 style={{ fontSize: "20px", marginBottom: "15px" }}>Enter text below or use our Note Generator to create a heartfelt note based on the flowers you selected.</h1>
      <div>
        <button style={{ marginBottom: "20px", background: "rgb(213, 240, 164)", border: "none", borderRadius: "20px", padding: "5px 30px" }}
          onClick={handleGenerateNote}>Generate Note</button>
      </div>
      <textarea
        placeholder="Write your note here..."
        value={note}
        onChange={handleNoteChange}
        rows={6}
        cols={40}
        style={{ marginBottom: "10px" }}
      />
    </div>
  );
};

export default NoteComponent;