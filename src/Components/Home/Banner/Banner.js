import React from "react";

const Banner = () => {
  return (
    <div className="absolute w-[80%] ml-auto mr-auto left-0 right-0 text-center top-[40%]">
      <h2 className="text-white lg:text-6xl text-4xl font-bold uppercase myFont">
        Family Owned. Locally Made. Community Focused.
      </h2>
      <div className="flex  justify-center flex-wrap">
        <button className="text-white p-3 px-5 text-xl mr-3 bg-orange-500 mt-5 rounded hover:bg-orange-500/75">
          Book a Table
        </button>
        <button className="text-white p-3 px-5 text-xl bg-orange-500 mt-5 rounded hover:bg-orange-500/75">
          Order from Home
        </button>
      </div>
    </div>
  );
};

export default Banner;
