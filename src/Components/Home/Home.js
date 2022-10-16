import React from "react";
import Category from "./Category/Category";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Category/>
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
