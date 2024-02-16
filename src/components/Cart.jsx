import React from 'react';

const Cart = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item.name} ({item.quantity})</span>
            {/* <span>{item.price}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
