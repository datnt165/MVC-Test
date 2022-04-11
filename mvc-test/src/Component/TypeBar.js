import React, { Component, useState, useEffect } from "react";
import "../CSS/typeBar.css";
import TypeFood from "./TypeFood";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  useEffect(() => {
    fetch("data_food_type.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSuggestions(data);
      });
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
  };

  return (
    <div className="bar">
      <Slider {...settings}>
        {suggestions.map((current) => (
          <TypeFood
            image={current.image}
            type={current.type}
            key={current.id}
          />
        ))}
      </Slider>
      {/* <div className="arrow-left"></div>
        <TypeFood image="img/fastfood.png" type="Fastfood" />
        <TypeFood image="img/fastfood.png" type="Fastfood" />
        <TypeFood image="img/fastfood.png" type="Fastfood" />
        <TypeFood image="img/fastfood.png" type="Fastfood" />
        <TypeFood image="img/fastfood.png" type="Fastfood" />
        <div className="arrow-right"></div> */}
    </div>
  );
}
