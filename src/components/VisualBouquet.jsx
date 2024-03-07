import "./VisualBouquet.css";
const VisualBouquet = ({ focalList, fillerList, foliageList, bouquetSize, containerList }) => {
  // helper for renderFLowerList - renders N flowers based on flower.quantity
  const renderQuantityFlowers = (flower) => {
    const flowerIcons = [];
    for (let i = 0; i < flower.quantity; i++) {
      flowerIcons.push(
        <img
          src={flower.type === "Foliage" ?
            `/photos/small_flowers/${flower.photoName}` :
            `/photos/small_flowers/bouquet_flowers/${flower.photoName}`}
          style={
            bouquetSize === "small" ? { top: `${Math.floor(i / 3) * 50}px` } :
              bouquetSize === "medium" ? { top: `${Math.floor(i / 3) * 40}px` } :
                { top: `${Math.floor(i / 3) * 25}px` }}
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
    return flowerList.map((flower,) => {
      return renderQuantityFlowers(flower);
    });
  };

  const renderContainer = (containerList) => {
    return containerList.map((container) => {
      return (
        <img
          src={`/photos/small_flowers/bouquet_flowers/${container.photoName}`}
          alt={container.name}
          className="vb-container-image"
          key={container.name}
        />
      )
    }
    );
  }

  return (
    <div className="visual-bouquet">
      <div className={`filler-flowers ${bouquetSize}`}>{renderFlowerList(fillerList)}</div>
      <div className={`focal-flowers ${bouquetSize}`}>{renderFlowerList(focalList)}</div>
      <div className={`foliage-flowers ${bouquetSize}`}>{renderFlowerList(foliageList)}</div>
      <div className={`flower-container ${bouquetSize}`}>{renderContainer(containerList)}</div>
    </div>
  );
};
export default VisualBouquet;
