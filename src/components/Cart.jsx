import React from 'react';

const Cart = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
