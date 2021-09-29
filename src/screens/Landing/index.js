import React from "react";
import styles from "./Landing.module.sass";
import Main from "./Main";
import Introduction from "./Introduction";
import Browse from "../../components/Browse";
import Places from "../../components/Places";
import Hosts from "../../components/Hosts";
import View from "./View";
import Categories from "../../components/Categories";

// data
import { browse1 } from "../../mocks/browse";
import { categories1 } from "../../mocks/categories";
import Quote from "./Quote";
import LandingCarousel from "./LandingCarousel";

const Home = () => {
  return (
    <>
      <Main />
      <Introduction />
      <Quote />
      <LandingCarousel />
      <Browse
        classSection="section"
        classTitle="h2"
        title="Browse by property type"
        info="Let’s go on an adventure"
        items={browse1}
      />
      <Places title="Explore nearby" info="10,789 beautiful places to go" />
      <Hosts />
      <View />
      <Categories
        classSection="section"
        title="Browse by category"
        info="Let’s go on an adventure"
        items={categories1}
      />
    </>
  );
};

export default Home;
