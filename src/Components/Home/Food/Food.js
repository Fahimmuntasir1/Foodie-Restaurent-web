/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Food = ({ food }) => {
  const { title, url, ratings, rated, price } = food;
  return (
    <div className="wrapper flex justify-center place-items-center antialiased text-gray-900">
      <div>
        <img
          src={url}
          alt="random image"
          className="object-cover object-center rounded-lg shadow-md h-72"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
            </div>

            <a className="mt-1 text-xl font-semibold uppercase" href="/">
              <h4>{title.slice(0, 35)}...</h4>
            </a>

            <div className="mt-1 text-orange-500">${price}</div>
            <div className="mt-1">
              <span className="text-teal-600 text-md font-semibold">
                {ratings} ratings{" "}
              </span>
              <span className="text-sm text-gray-600">({rated} rated)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
