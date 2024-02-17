import React from 'react';
import './FlowerTypeButton.css';

const FlowerTypeButton = ({ flowerType, setFlowerType, value }) => {
  const handleClick = () => {
    setFlowerType(value);
  };

  return (
    <div className={`flower-type-button ${flowerType === value ? 'highlighted-button' : ''}`} onClick={handleClick}>
      <img className="flower-type-icon"
        src={value === "Focal" ? "/public/icons/focal.png"
          : value === "Filler" ? "/public/icons/filler.png"
            : "/public/icons/foliage.png"}
        alt={value}
      />
    </div>
  );
};

export default FlowerTypeButton;
