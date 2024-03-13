const FinalCartFlowerType = ({ flowerList }) => {
  return (
    <div className="cart-items" style={{ marginBottom: "15px" }}>
      {flowerList.map((item, index) => (
        <li key={index}>
          <span>
            {item.quantity} x {item.name} ${item.price}.00
          </span>
        </li>
      ))}
    </div>
  );
};

export default FinalCartFlowerType;
