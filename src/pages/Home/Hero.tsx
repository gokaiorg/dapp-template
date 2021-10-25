import * as React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";
import Eghosts from "./../../assets/img/beni-hero.png";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="container d-flex flex-row align-items-center">
        <div className="col-4 h-auto">
          <img
            className="block m-0 p-0 block w-100"
            src={Eghosts}
            alt="Eghosts"
          />
        </div>
        <div className="text-white my-3 py-3 col-8">
          <h1 className="mb-3 text-6xl font-weight-bold" data-testid="title">
            Hey eGold lover
          </h1>
          <p className="mb-5 text-xl">
            We are a passionate and creative team that takes the time to build
            things for you on the Elrond network.
          </p>
          <Link
            to={routeNames.unlock}
            className="btn btn-link btn-lg ml-auto d-inline-flex"
            data-testid="loginBtn"
          >
            <svg
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 button-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
            </svg>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
