import React from "react";
import "../CSS/foodType.css";
export default function TypeFood(props) {
  return (
    <span
      className={`food-type`}
      value={props.type}
      onClick={props.clickHandler}
      id={props.code}
    >
      <div className="thumnail">
        <img src={props.image} alt="" />
      </div>
      <div className="type-name">{props.type}</div>
    </span>
  );
}
