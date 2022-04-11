import React, { Component, useState, useEffect } from "react";
import "../CSS/typeBar.css";
import TypeFood from "./TypeFood";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./Product";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "none" }}
      onClick={onClick}
    />
  );
}

export default function TypeBar() {
  const [suggestions, setSuggestions] = useState([]);
  const [foodList, setFoodList] = useState([]);

  function clickHandler(e) {
    let type = e.target.id;
    console.log(type);
    getData(type);
  }

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
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(type);
        let filter = myJson.filter((food) => food.type === type);
        console.log(filter);
        type === "all" ? setFoodList(myJson) : setFoodList(filter);
      });
  };

  useEffect(() => {
    getData("all");
  }, []);

  let settings = {
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="bar">
        <Slider {...settings}>
          {suggestions.map((current) => (
            <TypeFood
              image={current.image}
              type={current.type}
              key={current.id}
              clickHandler={clickHandler}
            />
          ))}
        </Slider>
      </div>
      <div>
        <div className="title-food">
          <span>Sua lai</span>
          <div className="line"></div>
        </div>
        <div className="food-list">
          {foodList.map((current) => (
            <Product
              title={current.name}
              image={current.image}
              price={current.price}
              stt={current.id}
              key={current.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
