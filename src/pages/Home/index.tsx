import * as React from "react";
import Hero from "./Hero";
import Maiar from "./Maiar";
import Mghosts from "./Mghosts";
import Roadmap from "./Roadmap";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid p-0">
      <Hero />
      <Mghosts />
      <Roadmap />
      <Maiar />
    </div>
  );
};

export default Home;
