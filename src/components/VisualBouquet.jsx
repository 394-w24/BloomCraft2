import "./VisualBouquet.css";
const VisualBouquet = ({ focalList, fillerList, foliageList, bouquetSize }) => {
  // helper for renderFLowerList - renders N flowers based on flower.quantity
  const renderQuantityFlowers = (flower) => {
    const flowerIcons = [];
    for (let i = 0; i < flower.quantity; i++) {
      flowerIcons.push(
        <img
          style={{top: `${Math.floor(i / 3) * 40}px`}}
          src={`/photos/small_flowers/${flower.photoName}`}
          alt={flower.name}
          className="vb-flower-image"
          key={flower.name + i}
        />
      );
    }
    return flowerIcons;
  };

  // uses renderQuantityFlowers to render all flowers in a list
  const renderFlowerList = (flowerList) => {
    return flowerList.map((flower) => {
      return renderQuantityFlowers(flower);
    });
  };

  return (
    <div className="visual-bouquet">
      <div className={`focal-flowers ${bouquetSize}`}>{renderFlowerList(focalList)}</div>
      <div className={`filler-flowers ${bouquetSize}`}>{renderFlowerList(fillerList)}</div>
      <div className={`foliage-flowers ${bouquetSize}`}>{renderFlowerList(foliageList)}</div>
    </div>
  );
};
export default VisualBouquet;
