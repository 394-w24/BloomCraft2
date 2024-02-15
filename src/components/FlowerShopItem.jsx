const FlowerShopItem = ({ flower }) => {
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
      <div className="flower-shop-item">
        <i className={iconClassName} style={{fontSize: "3rem"}}></i>
        <p>{flower.name}</p>
        <p>{flower.price}</p>
      </div>
    );
};
export default FlowerShopItem;