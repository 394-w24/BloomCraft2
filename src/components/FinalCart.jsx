import FinalCartFlowerType from "./FinalCartFlowerType";

const FinalCart = ({ focalFlowers, fillerFlowers, foliageFlowers }) => {
  return (
    <div style={{marginTop: '10px'}}>
      {focalFlowers.length !== 0 && <h3>Focal Flowers</h3>}
      <FinalCartFlowerType flowerList={focalFlowers} />
      {fillerFlowers.length !== 0 && <h3>Filler Flowers</h3>}
      <FinalCartFlowerType flowerList={fillerFlowers} />
      {foliageFlowers.length !== 0 && <h3>Foliage Flowers</h3>}
      <FinalCartFlowerType flowerList={foliageFlowers} />
    </div>
  );
};

export default FinalCart;
