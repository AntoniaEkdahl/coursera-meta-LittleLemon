import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero my-20 mx-40 flex bg-gray-400">
        <div className="textContainer max-w-[60%]">
          <h1 className="mb-1 text-2xl font-bold">Little Lemon</h1>
          <h2 className="mb-5 text-lg">Chicago</h2>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Reserve table
          </button>
        </div>
        <div className="imageContainer">
          <img
            src="https://placehold.co/600x400"
            alt="hero"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
