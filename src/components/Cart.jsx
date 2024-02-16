import React from 'react';

const Cart = ({ list }) => {
    return (
        <div className="cart-items">
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <span>{item.name} <i
                            onClick={() => item.quantity--}
                            className="bi bi-dash"
                            style={{ cursor: "pointer", fontSize: "1rem" }}>
                        </i>
                            ({item.quantity})<i
                                onClick={() => item.quantity++}
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
