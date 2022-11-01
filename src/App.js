import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Components/Home/Category/Category";
import Desserts from "./Components/Home/Category/Desserts";
import Drinks from "./Components/Home/Category/Drinks";
import FastFood from "./Components/Home/Category/FastFood";
import Fruits from "./Components/Home/Category/Fruits";
import Vegetables from "./Components/Home/Category/Vegetables";
import Footer from "./Components/Home/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Category/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fastFood" element={<FastFood />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/fruitItems" element={<Fruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
