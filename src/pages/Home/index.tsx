import * as React from "react";
import Team from "components/Layout/Team";
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
      <Team />
      <Collab />
    </>
  );
};

export default Home;
