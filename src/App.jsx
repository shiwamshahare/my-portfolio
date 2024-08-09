import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
