import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials my-20 mx-40  bg-gray-400 ">
        <h2 className="text-2xl font-bol text-center mb-8">Testimonials</h2>
        <div className="ratingContainer flex justify-evenly">
          <div className="ratingCard">
            <h5 className="mb-3">Rating</h5>
            <div className="userContainer flex gap-2">
              <img src="https://placehold.co/50x50" alt="User" />
              <p className="mt-3">Name</p>
            </div>
            <p className="mt-4">Review</p>
          </div>
          <div className="ratingCard">
            <h5 className="mb-3">Rating</h5>
            <div className="userContainer flex gap-2">
              <img src="https://placehold.co/50x50" alt="User" />
              <p className="mt-3">Name</p>
            </div>
            <p className="mt-4">Review</p>
          </div>

          <div className="ratingCard">
            <h5 className="mb-3">Rating</h5>
            <div className="userContainer flex gap-2">
              <img src="https://placehold.co/50x50" alt="User" />
              <p className="mt-3">Name</p>
            </div>
            <p className="mt-4">Review</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
