import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotfound/PageNotFound";
import Footer from "./components/Footer/Footer";
import Booking from "./components/Booking";

function App() {
  return (
    <div>
      {/* <Profile></Profile>
      <Login></Login> */}
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/movie/:imdbId"
          element={<MovieDetail></MovieDetail>}
        ></Route>
        <Route path="/form" element={<Booking></Booking>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
