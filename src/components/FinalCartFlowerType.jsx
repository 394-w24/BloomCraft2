const FinalCartFlowerType = ({ flowerList }) => {
    return (
      <div className="cart-items" style={{marginBottom: '15px'}}>
        {/* <ul> */}
          {flowerList.map((item, index) => (
            <li key={index}>
              <span>{item.quantity} x {item.name}         ${item.price}.00</span>
            </li>
          ))}
        {/* </ul> */}
      </div>
    );
  };
  
  export default FinalCartFlowerType;
  