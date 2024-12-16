import { useState } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/menu/Menu";
import News from "./components/news/News";
import Footer from "./components/Footer";
import "./App.css";
import NavOptionsMobile from "./components/NavOptionsMobile";

export default function App() {
  const [navMobile, setNavMobile] = useState(false);
  const openNavMobile = function () {
    setNavMobile(true);
  };
  const closeNavMobile = function () {
    setNavMobile(false);
  };
  return (
    <>
      {navMobile && <NavOptionsMobile closeNavMobile={closeNavMobile} />}
      <Header openNavMobile={openNavMobile} />
      <Home />
      <About />
      <Menu />
      <News />
      <Footer />
    </>
  );
}
