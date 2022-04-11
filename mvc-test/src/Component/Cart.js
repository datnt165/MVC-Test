import React from "react";
import "../CSS/cart.css";
export default function Cart() {
  return (
    <div>
      <aside className="block col-1">
        <div className="row">
          <img src="img/shoppingCartRed.png" alt="" />
          <h2>Your Cart</h2>
        </div>

        <div className="cart-item-list">
          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>

          <div className="row item">
            <div className="col-1">
              <img src="img/fastfood.png" alt="" />
            </div>
            <div className="col-2">
              <div className="row name">Hamburger</div>
              <div className="row">
                <button className="remove def">-</button>
                <div className="quantity">1</div>
                <button className="add def">+</button>
              </div>
            </div>
            <div className="col-3 align-right price">25.000 VND</div>
          </div>
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
