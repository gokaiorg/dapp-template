import * as React from "react";
import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import Hero from "./Hero";
import Maiar from "./Maiar";
import Mghosts from "./Mghosts";

const Home = () => {
  return (
    <div className="d-flex flex-column container-fluid p-0">
      <Navbar />
      <Hero />
      <Mghosts />
      <Maiar />
      <Footer />
    </div>
  );
};

export default Home;
