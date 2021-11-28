import * as React from "react";
import Hero from "./Hero";
import Maiar from "./Maiar";
import Mghosts from "./Mghosts";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid p-0">
      <Hero />
      <Mghosts />
      <Maiar />
    </div>
  );
};

export default Home;
