import FlowerShopItem from "./FlowerShopItem";
import './FlowerShop.css';
const FlowerShop = ({ flowerList }) => {
    return (
      <div className="flower-shop-grid">
        {flowerList.map((flower, index) => (
          <FlowerShopItem key={index} flower={flower} />
        ))}
      </div>
    );
  };
  
  export default FlowerShop;