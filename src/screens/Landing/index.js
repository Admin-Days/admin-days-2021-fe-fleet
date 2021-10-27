import React, { useEffect } from "react";
import Main from "./Main";
import Introduction from "./Introduction";
import Quote from "./Quote";
import LandingCarousel from "./LandingCarousel";
import { setDarkMode } from "../../utils/dark";

const Home = () => {

  useEffect(() => {
    setDarkMode()
  }, []);

  return (
    <>
      <Main />
      <Introduction />
      <Quote />
      <LandingCarousel />
    </>
  );
};

export default Home;
