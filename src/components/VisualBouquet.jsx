import "./VisualBouquet.css";
const VisualBouquet = ({ focalList, fillerList, foliageList }) => {
  // helper for renderFLowerList - renders N flowers based on flower.quantity
  const renderQuantityFlowers = (flower) => {
    const flowerIcons = [];
    for (let i = 0; i < flower.quantity; i++) {
      flowerIcons.push(
        <img
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
      <div className="focal-flowers">{renderFlowerList(focalList)}</div>
      <div className="filler-flowers">{renderFlowerList(fillerList)}</div>
      <div className="foliage-flowers">{renderFlowerList(foliageList)}</div>
    </div>
  );
};
export default VisualBouquet;
