/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Search = ({ className, search = "/img/icons-search.png" }) => {
  return <img className={`search ${className}`} alt="Search" src={search} />;
};

Search.propTypes = {
  search: PropTypes.string,
};
