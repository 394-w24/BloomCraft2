import React from 'react';
import './FlowerTypeButton.css';

const FlowerTypeButton = ({ flowerType, setFlowerType, value }) => {
  const handleClick = () => {
    setFlowerType(value);
  };

  return (
    <div className={`flower-type-button ${flowerType === value ? 'highlighted-button' : ''}`} onClick={handleClick}>
      <img className="flower-type-icon"
        src={value === "Focal" ? "/icons/focal.png"
          : value === "Filler" ? "/icons/filler.png"
            : "/icons/foliage.png"}
        alt={value}
      />
    </div>
  );
};

export default FlowerTypeButton;
