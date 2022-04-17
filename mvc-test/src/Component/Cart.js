import React from "react";
import "../CSS/cart.css";
export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;

  return (
    <div>
      <aside className="block col-1">
        <div className="row">
          <img src="img/shoppingCartRed.png" alt="" />
          <h2>Your Cart</h2>
        </div>

        <div className="cart-item-list">
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div className="row item">
              <div className="col-1">
                <img src="img/fastFood/hamburger.png" alt="" />
              </div>
              <div className="col-2">
                <div className="row name">Hamburger</div>
                <div className="row">
                  <button className="remove def" onClick={() => onRemove(item)}>
                    -
                  </button>
                  <div className="quantity"> </div>
                  <button className="add def" onClick={() => onAdd(item)}>
                    +
                  </button>
                </div>
              </div>
              <div className="col-3 align-right price">25.000 VND</div>
            </div>
          ))}
        </div>

        <div className="payment">
          <div className="row">
            <div className="col-1 total">Total:</div>
            <div
              className="col-1 price"
              style={{ fontWeight: "700", fontSize: "1.25rem" }}
            >
              500.000 VND
            </div>
          </div>
          <div className="row">
            <button className="payment-button ">Payment</button>
          </div>
        </div>
      </aside>
    </div>
  );
}
