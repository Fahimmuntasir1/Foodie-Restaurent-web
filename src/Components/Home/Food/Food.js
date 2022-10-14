/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Food = ({ food }) => {
  const { title, url } = food;
  return (
    <div class="wrapper flex place-items-center antialiased text-gray-900">
      <div>
        <img
          src={url}
          alt="random image"
          class="object-cover object-center rounded-lg shadow-md"
        />

        <div class="relative px-4 -mt-16  ">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <div class="flex items-baseline">
              <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
              </span>
            </div>

            <a class="mt-1 text-xl font-semibold uppercase" href="/">
              <h4>{title.slice(0, 35)}...</h4>
            </a>

            <div class="mt-1 text-orange-500">$180</div>
            <div class="mt-1">
              <span class="text-teal-600 text-md font-semibold">
                4/5 ratings{" "}
              </span>
              <span class="text-sm text-gray-600">(234 rated)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
