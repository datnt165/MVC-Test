import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../fontawesome.js";

export const Showcase = () => (
  <div>
    <FontAwesomeIcon icon={["far", "bookmark"]} />
    <FontAwesomeIcon icon={["fas", "cart-shopping"]} inverse />
    <FontAwesomeIcon icon="far fa-shopping-cart" />
    With Coffee Checked, these companies always know their coffee is hot and
    ready!
  </div>
);
