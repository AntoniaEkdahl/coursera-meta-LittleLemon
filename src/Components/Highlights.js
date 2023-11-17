import React from "react";
import "./Highlights.css";
import { Link } from "react-router-dom";

const Highlights = () => {
  return (
    <div className="highlights p-8 my-20 mx-40 ">
      <div className="titleContainer flex justify-between mb-10">
        <h1 className="text-3xl font-bold mb-4">Specials</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="/order-online">Order online</Link>
        </button>
      </div>
      <div className="dishContainer mt-6 flex overflow-x-auto space-x-4 justify-evenly">
        <div className="dishCard flex-shrink-0 w-64 bg-white p-4 rounded shadow-md">
          <img
            className="w-full h-32 object-cover mb-4"
            src="https://placehold.co/600x400"
            alt="Of the dish"
          />
          <h2 className="text-xl font-bold mb-2">Name of the dish</h2>
          <p className="text-gray-600 mb-4">Dish description</p>
          <p className="text-green-600 font-bold mb-2">Price</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Order dish
          </button>
        </div>

        <div className="dishCard flex-shrink-0 w-64 bg-white p-4 rounded shadow-md">
          <img
            className="w-full h-32 object-cover mb-4"
            src="https://placehold.co/600x400"
            alt="Of the dish"
          />
          <h2 className="text-xl font-bold mb-2">Name of the dish</h2>
          <p className="text-gray-600 mb-4">Dish description</p>
          <p className="text-green-600 font-bold mb-2">Price</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Order dish
          </button>
        </div>

        <div className="dishCard flex-shrink-0 w-64 bg-white p-4 rounded shadow-md">
          <img
            className="w-full h-32 object-cover mb-4"
            src="https://placehold.co/600x400"
            alt="Of the dish"
          />
          <h2 className="text-xl font-bold mb-2">Name of the dish</h2>
          <p className="text-gray-600 mb-4">Dish description</p>
          <p className="text-green-600 font-bold mb-2">Price</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Order dish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
