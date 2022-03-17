import * as React from "react";
import Buy from "../../components/Layout/Buy";
import Collab from "../../components/Layout/Collab";
import Faq from "../../components/Layout/Faq";
import Earth from "../../components/Layout/Images/Earth";
import Roadmap from "../../components/Layout/Roadmap";
import Hero from "./Hero";
import Mghosts from "./Mrghosts";

const Home = () => {
  return (
    <>
      <Earth />
      <Hero />
      <Mghosts />
      <Roadmap />
      <Buy />
      <Faq />
      <Collab />
    </>
  );
};

export default Home;
