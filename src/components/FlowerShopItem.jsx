const FlowerShopItem = ({ flower, flowerTypeList, setFlowerTypeList, calculatePrice}) => {
  // Determine the icon based on the flower's category
  let iconClassName;
  switch (flower.type.toLowerCase()) {
    case "filler":
      iconClassName = "bi bi-flower1";
      break;
    case "foliage":
      iconClassName = "bi bi-flower2";
      break;
    case "focal":
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
      // console.log(flowerTypeList);
      // for some reason, this breaks when calculatePrice is missing
      calculatePrice();
    }}>
      {/* <i className={iconClassName} style={{ fontSize: "3rem" }}></i> */}
      <img src={`/photos/small_flowers/${flower.photoName}`} alt={flower.name} style={{ width: "100px", height: "100px" }} />
      <p>{flower.name}</p>
      <p>${flower.price}.00</p>
    </div>
  );
};
export default FlowerShopItem;