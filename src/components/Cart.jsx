import React from "react";

const Cart = ({ list, updateQuantity }) => {
  return (
    <div className="cart-items">
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span>
              <img
                onClick={() => updateQuantity(index, 0)}
                src="/icons/trash.png"
                style={{ cursor: "pointer", width: "1rem", height: "auto" }}
              ></img>{" "}
              {item.name}{" "}
              <i
                onClick={() => updateQuantity(index, item.quantity - 1)}
                className="bi bi-dash-circle"
                style={{ cursor: "pointer", fontSize: "1rem" }}
                role="i"
              ></i>{" "}
              ({item.quantity}){" "}
              <i
                onClick={() => updateQuantity(index, item.quantity + 1)}
                className="bi bi-plus-circle"
                style={{ cursor: "pointer", fontSize: "1rem" }}
              ></i>
            </span>
            {/* <span>{item.price}</span> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
