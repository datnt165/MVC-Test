import "./App.css";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import TypeBar from "./Component/TypeBar";
import TypeFood from "./Component/TypeFood";
import FoodBar from "./Component/FoodBar";
import Cart from "./Component/Cart";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";



function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <div className="left-column">
                <Navbar />
                <TypeBar />
              </div>
              <div className="right-column">
                <Cart />
              </div>
            </div>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
