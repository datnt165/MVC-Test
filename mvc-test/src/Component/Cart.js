import React, { useState } from "react";
import "../CSS/cart.css";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return (
    <div>
      <aside className="block col-1">
        <div className="row">
          <img src="img/shoppingCartRed.png" alt="" />
          <h2>Your Cart</h2>
        </div>

        <div className="cart-item-list">
          {cartItems.length === 0 && (
            <img src="img/empty-cart.png" alt="" className="empty-cart" />
          )}
          {cartItems.map((item) => (
            <div className="row item">
              <div className="col-1">
                <img src={item.image} alt="" />
              </div>
              <div className="col-3">
                <div className="row name">{item.name}</div>
                <div className="row">
                  <button className="remove def" onClick={() => onRemove(item)}>
                    -
                  </button>
                  <div className="quantity">{item.qty}</div>
                  <button className="add def" onClick={() => onAdd(item)}>
                    +
                  </button>
                </div>
              </div>
              <div className="col-3 align-right price">
                {item.qty * item.price}.000 VND
              </div>
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
              {itemsPrice}.000 VND
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
