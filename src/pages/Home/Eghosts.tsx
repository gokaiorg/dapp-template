import * as React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";
import EghostsLogo from "./../../assets/img/eGhosts.png";

const Eghosts = () => {
  return (
    <div className="eghosts container-fluid bg-light">
      <div className="container d-flex flex-column">
        <div className="text-black mt-5 pt-5 col-12">
          <h1 className="mb-3 text-6xl font-weight-bold" data-testid="title">
            eGhosts
          </h1>
          <p className="mb-5 text-xl col-8 p-0">
            I hope you are not too scared of ghosts? Several thousand of them
            will soon be generated on the Maiar NFTs marketplace.
          </p>
          <Link
            to={routeNames.dashboard}
            className="btn btn-revert btn-lg ml-auto d-inline-flex"
          >
            Im not afraid
          </Link>
        </div>
        <div className="col-12 mt-5 pb-5">
          <img
            className="block w-100 p-0 m-0 col-lg-3 mr-5 mb-5"
            src={EghostsLogo}
            alt="Eghosts"
          />
          <img
            className="block w-100 p-0 m-0 col-lg-3 mr-5 mb-5"
            src={EghostsLogo}
            alt="Eghosts"
          />
          <img
            className="block w-100 p-0 m-0 col-lg-3 mr-5 mb-5"
            src={EghostsLogo}
            alt="Eghosts"
          />
        </div>
      </div>
    </div>
  );
};

export default Eghosts;
