import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="flex justify-center flex-col items-center h-screen"
      style={{
        backgroundImage: `url("https://www.foodrepublic.com/wp-content/uploads/2016/11/5011045045_fd08553234_o.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-center text-7xl font-bold text-white">
        404 Page Not Found !!!
      </h2>
      <Link
        to="/"
        className="text-xl mt-5 text-blue-600 font-bold hover:underline"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
