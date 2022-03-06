import * as React from "react";
import Buy from "../../components/Layout/Buy";
import Faq from "../../components/Layout/Faq";
import Roadmap from "../../components/Layout/Roadmap";
import Hero from "./Hero";
import Mghosts from "./Mrghosts";

const Home = () => {
  return (
    <>
      <Hero />
      <Mghosts />
      <Roadmap />
      <Buy />
      <Faq />
    </>
  );
};

export default Home;
