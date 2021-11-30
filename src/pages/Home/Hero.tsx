import * as React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";
import Mghosts from "./../../assets/img/beni-hero.png";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="container d-flex flex-row align-items-end p-0">
        <div className="d-none d-md-block col-4 h-auto">
          <img
            className="block m-0 p-0 block w-100"
            src={Mghosts}
            alt="Mghosts"
          />
        </div>
        <div className="text-white my-4 col-md-8">
          <h1 className="mb-3 text-6xl font-weight-bold" data-testid="title">
            Hey eGold lover
          </h1>
          <p className="mb-5 text-xl text-shadow">
            We are a passionate and creative team that takes the time to build
            things for you on the Elrond Network.
          </p>
          <Link
            to={routeNames.About}
            className="btn btn-link btn-lg ml-auto d-inline-flex mb-3"
            data-testid="about"
          >
            Discover
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
