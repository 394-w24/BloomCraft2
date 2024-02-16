import FlowerShopItem from "./FlowerShopItem";
import './FlowerShop.css';
const FlowerShop = ({ flowerList, typeList, setTypeList, calculatePrice }) => {
  return (
    <div className="flower-shop-grid">
      {flowerList.map((flower, index) => (
        <FlowerShopItem key={index} flower={flower}
          flowerTypeList={typeList} setFlowerTypeList={setTypeList} calculatePrice={calculatePrice}/>
      ))}
    </div>
  );
};

export default FlowerShop;