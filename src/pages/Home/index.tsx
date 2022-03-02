import * as React from "react";
import Buy from "../../components/Layout/Buy";
import Faq from "../../components/Layout/Faq";
import Roadmap from "../../components/Layout/Roadmap";
import Hero from "./Hero";
import Mghosts from "./Mrghosts";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid p-0">
      <Hero />
      <Mghosts />
      <Roadmap />
      <Buy />
      <Faq />
    </div>
  );
};

export default Home;
