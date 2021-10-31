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
        <div className="d-flex flex-row col-12 mt-5 pb-5">
          <img
            className="d-flex p-0 m-0 col-sm-6 col-lg-3 mr-3 mb-5"
            src="https://ipfs.io/ipfs/QmSCc1WR7qV5FpCnhuiitPssWRNk5CyRbk5QCF4VQVLoNk"
            alt="Eghosts"
          />
          <img
            className="d-flex p-0 m-0 col-sm-6 col-lg-3 mr-3 mb-5"
            src="https://ipfs.io/ipfs/QmVj2f8APey7fE5AV6c7PukfUB95Bq5AufAmUJK3WAVJqY"
            alt="Eghosts"
          />
          <img
            className="d-flex p-0 m-0 col-sm-6 col-lg-3 mr-3 mb-5"
            src="https://ipfs.io/ipfs/QmeaH7B61HQUGweGD1tACidx4VxVc16qh46j3ZGVJQtMKh"
            alt="Eghosts"
          />
          <img
            className="d-flex p-0 m-0 col-sm-6 col-lg-3 mb-5"
            src="https://ipfs.io/ipfs/QmQhVfNhGz3BHNTZqmUuQ6ErFdkHWeoA4ZFocp9NU2LaXM"
            alt="Eghosts"
          />
        </div>
      </div>
    </div>
  );
};

export default Eghosts;
