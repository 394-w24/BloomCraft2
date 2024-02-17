import React from 'react';

const Cart = ({ list, updateQuantity }) => {
    return (
        <div className="cart-items">
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <span>{item.name} <i
                            onClick={() => updateQuantity(index, item.quantity - 1)}
                            className="bi bi-dash"
                            style={{ cursor: "pointer", fontSize: "1rem" }}>
                        </i>
                            ({item.quantity})<i
                                onClick={() => updateQuantity(index, item.quantity + 1)}
                                className="bi bi-plus"
                                style={{ cursor: "pointer", fontSize: "1rem" }}>
                            </i>
                        </span>
                        {/* <span>{item.price}</span> */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
