import React, { useState } from "react";
import "../CSS/cart.css";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  return props.responsive ? (
    props.trigger ? (
      <div className="cart-popup">
        {console.log(props.trigger)}{" "}
        <div className="popup-inner">
          <div className="row row-1">
            <h2 className="detail-title col-2">Your Cart</h2>
            <button
              className="close-btn "
              onClick={() => {
                props.setTrigger(false);
              }}
            ></button>
          </div>
          <div className="cart-item-list">
            {cartItems.length === 0 && (
              <img src="img/empty-cart.png" alt="" className="empty-cart" />
            )}
            {cartItems.map((item, index) => (
              <div className="row item" style={{ width: "100%" }} key={index}>
                <div className="col-2">
                  <img src={item.image} className="cart-img" alt="" />
                </div>
                <div className="col-2">
                  <div className="row name">{item.name}</div>
                  <div className="row">
                    <button
                      className="remove def"
                      onClick={() => onRemove(item)}
                    >
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
                style={{
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  textAlign: "right",
                }}
              >
                {itemsPrice}
                {itemsPrice === 0 ? "" : ".000"} VND
              </div>
            </div>
            <div className="row">
              <button className="payment-button ">
                <Link to="/login">Payment</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  ) : (
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
          {cartItems.map((item, index) => (
            <div className="row item" key={index}>
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
              style={{
                fontWeight: "700",
                fontSize: "1.25rem",
                textAlign: "right",
              }}
            >
              {itemsPrice}
              {itemsPrice === 0 ? "" : ".000"} VND
            </div>
          </div>
          <div className="row">
            <button className="payment-button ">
              <Link
                to="/payment"
                state={{ price: itemsPrice }}
                style={{ textDecoration: "none", color: "white" }}
              >
                Payment
              </Link>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
