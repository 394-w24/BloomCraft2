const FlowerShopItem = ({ flower, flowerTypeList, setFlowerTypeList, calculatePrice, updateTotalQuantity }) => {

  return (
    <div className="flower-shop-item" onClick={() => {
      if (flowerTypeList.some((flowerType) => flowerType.name === flower.name)) {
        flowerTypeList.forEach((flowerType) => {
          if (flowerType.name === flower.name) {
            flowerType.quantity += 1;
          }
        });
      } else {
        flower.quantity = 1;
        setFlowerTypeList([...flowerTypeList, flower]);
      }
      // this breaks when calculatePrice is missing
      calculatePrice();
      updateTotalQuantity();
    }}>
      <img src={`/photos/small_flowers/${flower.photoName}`} alt={flower.name} style={{ width: "100px", height: "100px", marginBottom: "10px" }} />
      <p>{flower.name}</p>
      <p>${flower.price}.00</p>
    </div>
  );
};
export default FlowerShopItem;