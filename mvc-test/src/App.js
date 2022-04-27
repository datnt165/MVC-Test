import "./App.css";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import TypeBar from "./Component/TypeBar";
import TypeFood from "./Component/TypeFood";
import FoodBar from "./Component/FoodBar";
import Cart from "./Component/Cart";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Payment from "./Component/Payment";

function App() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 992px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 600px)",
  });

  const [suggestions, setSuggestions] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [foodType, setFoodType] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const storageCartItem = JSON.parse(localStorage.getItem("cartItems"));

  const [cartItems, setCartItems] = useState(storageCartItem ?? []);

  const onAdd = (product, qty = 1) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + qty } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: qty }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const getData = (type) => {
    fetch("data_food_type.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // let filter = myJson.filter((food) => food.type === type);
        // type === "all" ? setSuggestions(myJson) : setSuggestions(filter);
        setSuggestions(myJson);
      });

    fetch("data_food.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(type);
        let filter = myJson.filter((food) => food.type === type);
        // console.log(filter);
        type === "all" ? setFoodList(myJson) : setFoodList(filter);
      });
  };

  function clickHandler(e) {
    let cls = e.target.classList;
    let id = e.target.id;
    let type = e.target.childNodes[1].firstChild.data;
    console.log(type);
    if (Object.values(cls).indexOf("red") > -1) {
      document.querySelectorAll("#" + id).forEach((element) => {
        element.classList.remove("red");
      });
      setFoodType("All");
      getData("all");
    } else {
      document.querySelectorAll(".food-type").forEach((element) => {
        element.classList.remove("red");
      });
      document.querySelectorAll("#" + id).forEach((element) => {
        element.classList.add("red");
      });
      setFoodType(type);
      getData(type);
    }
  }

  useEffect(() => {
    getData("all");
    setFoodType("All");
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <div className="left-column">
                <Navbar
                  responsive={
                    isDesktop ? "desktop" : isMobile ? "mobile" : "tablet"
                  }
                  setTrigger={setTrigger}
                />
                <TypeBar
                  suggestions={suggestions}
                  foodList={foodList}
                  foodType={foodType}
                  clickHandler={clickHandler}
                  onAdd={onAdd}
                />
              </div>
              <div className="right-column">
                <Cart
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  responsive={isMobile}
                  trigger={trigger}
                  x
                  setTrigger={setTrigger}
                />
              </div>
            </div>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
