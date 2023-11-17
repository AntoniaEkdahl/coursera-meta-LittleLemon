import React from "react";
import "./Highlights.css";

const Highlights = () => {
  return (
    <>
      <div className="highlights">
        <h1>Specials</h1>
        <button>
          <a href="/">Order online</a>
        </button>
        <div className="dishContainer">
          <div className="dishCard">
            <img src="" alt="Of the dish" />
            <h2>Name of the dish</h2>
            <p>Dish description</p>
            <p>Price</p>
            <button>Order dish</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
