import React from 'react';

const FlowerTypeButton = ({ flowerType, setFlowerType, value }) => {
  const handleClick = () => {
    setFlowerType(value);
  };

  return (
      <i onClick={handleClick}
      className={flowerType === value ? "bi bi-plus-circle-fill" : "bi bi-plus-circle"}
      style={{cursor: "pointer", fontSize: value === "focal" ? "3rem" : "2rem"}}></i>
  );
};

export default FlowerTypeButton;
