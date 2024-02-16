import FlowerShopItem from "./FlowerShopItem";
import './FlowerShop.css';
const FlowerShop = ({ flowerList, typeList, setTypeList }) => {
  return (
    <div className="flower-shop-grid">
      {flowerList.map((flower, index) => (
        <FlowerShopItem key={index} flower={flower}
          flowerTypeList={typeList} setFlowerTypeList={setTypeList} />
      ))}
    </div>
  );
};

export default FlowerShop;