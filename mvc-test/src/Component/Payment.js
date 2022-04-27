import React from "react";
import "../CSS/payment.css";
import { Link, useLocation } from "react-router-dom";

export default function Payment() {
  const location = useLocation();

  const price = location.state.price;
  return (
    <div>
      <div id="header" class="container-fluid row">
        <div id="left" class="col">
          <div id="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-left-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
            </svg>
          </div>
          <a id="textbox" href="index.html">
            <Link to="/">Home</Link>
          </a>
        </div>
        <div id="mid" class="col" align="center">
          PAYMENT
        </div>
        <div id="right" align="right" class="col row">
          <div class="col-10">Home/Payment</div>
        </div>
      </div>
      <div id="main">
        <div id="object">
          <div id="business">
            <div id="business-left">
              <div id="business-2500">Business name</div>
              <div id="item-inc">1 item (expand)</div>
            </div>
            <div id="business-right">
              <div id="business-2500">{price}.000 VND</div>
              <div id="item-inc">inc. VAT</div>
            </div>
          </div>
          <div id="credit">
            <div id="credit-above">
              <div id="credit-above-noti">
                Checkout is running in test mode. Click here for test data.
              </div>
            </div>
            <div id="credit-below">
              <div>
                <input
                  type="radio"
                  name="Credit"
                  id=""
                  value="Credit Card"
                  style={{ margin: "0 20px" }}
                />
                <label for="Credit">Credit Card</label>
                {/* <span id="debt">- credit or debt</span> */}
              </div>

              <div>
                <a href="#">
                  <img
                    alt="Credit Card Logos"
                    title="Credit Card Logos"
                    src="http://www.credit-card-logos.com/images/visa_credit-card-logos/visa_mastercard_logo_6.gif"
                    width="102"
                    height="32"
                    border="0"
                  />
                </a>
              </div>
            </div>
            <div id="triangle"></div>
          </div>
          <div id="credit-icon">
            <input
              id="card-icon"
              type="text"
              placeholder="Card number"
              size="37"
            />
          </div>

          <div id="identification">
            <input type="text" placeholder="MM/YY" size="18" />
            <input type="text" placeholder="CVV" size="18" />
          </div>
          <button id="button-payment" type="button">
            <a href="index.html">Pay {price}.000 VND</a>
          </button>
          <div id="cancle">
            <button id="button-cancle" type="button">
              {" "}
              <span id="text-cancle">Cancle payment </span>
            </button>
          </div>
          <div id="footer">
            <div id="footer-left">
              <a href="#">
                <img
                  alt="Credit Card Logos"
                  title="Credit Card Logos"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                  width="25"
                  height="15"
                  border="0"
                />
              </a>
              <span id="dintero">Dintero </span>{" "}
              <span id="checkout">Checkout</span>
            </div>
            <div id="footer-right">
              <span id="terms">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
