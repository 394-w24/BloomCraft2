const FlowerShopItem = ({ flower, flowerTypeList, setFlowerTypeList, calculatePrice}) => {
  // Determine the icon based on the flower's category
  let iconClassName;
  switch (flower.category) {
    case "Filler":
      iconClassName = "bi bi-flower1";
      break;
    case "Foliage":
      iconClassName = "bi bi-flower2";
      break;
    case "Focal":
      iconClassName = "bi bi-flower3";
      break;
    default:
      iconClassName = "bi bi-flower3"; // Default to flower1
      break;
  }

  return (
    <div className="flower-shop-item" onClick={() => {
      if (flowerTypeList.some((flowerType) => flowerType.name === flower.name)) {
        flowerTypeList.forEach((flowerType) => {
          if (flowerType.name === flower.name) {
            flowerType.quantity += 1;
          }
        });
        // setFlowerTypeList([...flowerTypeList]);
      } else {
        flower.quantity = 1;
        setFlowerTypeList([...flowerTypeList, flower]);
      }
      console.log(flowerTypeList);
      calculatePrice();
    }}>
      <i className={iconClassName} style={{ fontSize: "3rem" }}></i>
      <p>{flower.name}</p>
      <p>${flower.price}.00</p>
    </div>
  );
};
export default FlowerShopItem;