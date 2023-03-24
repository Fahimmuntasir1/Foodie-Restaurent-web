import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Blogs from "./Components/Blogs/Blogs";
import Desserts from "./Components/Home/Category/Desserts";
import Drinks from "./Components/Home/Category/Drinks";
import FastFood from "./Components/Home/Category/FastFood";
import Fruits from "./Components/Home/Category/Fruits";
import Vegetables from "./Components/Home/Category/Vegetables";
import FoodItems from "./Components/Home/FoodItems/FoodItems";
import Footer from "./Components/Home/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar/Navbar";
import Menu from "./Components/Menu/Menu";
import NotFound from "./Components/NotFound/NotFound";
import Services from "./Components/Services/Services";
import LogIn from "./Components/SignUpLogIn/LogIn";
import SignUp from "./Components/SignUpLogIn/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/" element={<FastFood />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/drinks" element={<Drinks />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/foods/:id" element={<FoodItems />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
