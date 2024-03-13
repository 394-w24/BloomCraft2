import React from 'react';
import './FlowerTypeButton.css';

const FlowerTypeButton = ({ flowerType, setFlowerType, value }) => {
  const handleClick = () => {
    setFlowerType(value);
  };

  return (
    <div className={`flower-type-button ${flowerType === value ? 'highlighted-button' : ''}`} onClick={handleClick}
    data-testid={`${value}-button`}>
      <img className="flower-type-icon"
        src={value === "Focal" ? "/icons/focal.png"
          : value === "Filler" ? "/icons/filler.png"
            : value === "Foliage" ? "/icons/foliage.png"
              : "/icons/container.svg"} 
        alt={value}
      />
    </div>
  );
};

export default FlowerTypeButton;
