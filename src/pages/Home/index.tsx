import * as React from "react";
import Hero from "./Hero";
import Eghosts from "./Eghosts";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid p-0">
      <Hero />
      <Eghosts />
    </div>
  );
};

export default Home;
