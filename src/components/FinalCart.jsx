import React, { useState } from "react";
import FinalCartFlowerType from "./FinalCartFlowerType";

const FinalCart = ({ occasion, focalFlowers, fillerFlowers, foliageFlowers, containerOptions, selectedNote, setSelectedNote, customNote, setCustomNote }) => {


  const handleSelectNote = (event) => {
    setSelectedNote(event.target.value);
    setCustomNote(event.target.value)
  };

  const handleNoteChange = (event) => {
    setCustomNote(event.target.value);
    setSelectedNote('');
  };

  

  const editableNotes = [
    "Happy Birthday! Wishing you a day filled with love, laughter, and joy.",
    "Let's add some color to your day! Enjoy these vibrant flowers and let's have some fun.",
    "Life is too short to not enjoy beautiful flowers. Here's a bouquet to brighten your mood!",
    "Sending you flowers to remind you to take a moment to laugh and enjoy the little things in life.",
    "I'm truly sorry for my mistake. Please accept these flowers as a symbol of my remorse.",
    "I regret my actions and hope these flowers can express the apology I struggle to put into words.",
    "I apologize from the bottom of my heart. I hope these flowers can begin to mend what I've broken.",
    "Thank you for being such an amazing friend. These flowers are a token of my gratitude.",
    "Your kindness and support mean the world to me. These flowers are for you.",
    "In appreciation of all that you do, here's a bouquet to brighten your day.",
    "To the love of my life, these flowers are a symbol of my endless love for you.",
    "Every petal of these flowers carries a piece of my heart. I love you!",
    "Just like these flowers, our love continues to bloom and grow. Forever yours.",
]

  return (

    <div style={{ marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="selectNote">Select an editable note: </label>
        <select id="selectNote" onChange={handleSelectNote} value={selectedNote}>
          <option value=""></option>
          {editableNotes.map((note, index) => (
            <option key={index} value={note}>
              {note}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="customNote">Or add your own note: </label>
        <input
          type="text"
          id="customNote"
          name="customNote"
          value={customNote}
          onChange={handleNoteChange}
          style={{ width: '39rem', fontSize: '0.8rem'}}
        />
      </div>
      {/* Optionally display the selected note */}
      
      <div style={{marginTop: '10px'}}>
      {focalFlowers.length !== 0 && <h3>Focal Flowers</h3>}
      <FinalCartFlowerType flowerList={focalFlowers} />
      {fillerFlowers.length !== 0 && <h3>Filler Flowers</h3>}
      <FinalCartFlowerType flowerList={fillerFlowers} />
      {foliageFlowers.length !== 0 && <h3>Foliage Flowers</h3>}
      <FinalCartFlowerType flowerList={foliageFlowers} />
    </div>

    {customNote && (
        <div>
          <h3>Your Note:</h3>
          <p>{customNote}</p>
        </div>
      )}
    </div>
  );
};

export default FinalCart;
