import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";

const Mghosts = () => {
  return (
    <div className="mghosts container-fluid bg-light py-5">
      <div className="container d-flex flex-column-reverse flex-md-row align-items-center p-0">
        <div className="text-black my-5 col-md-9">
          <h1 className="mb-3 text-4xl font-weight-bold" data-testid="title">
            Maiar Ghosts
          </h1>
          <p className="mb-5 text-xl p-0">
            I hope you are not too scared of ghosts? Several thousand of MGhosts
            will soon be generated for the Maiar NFTs marketplace.
          </p>
          <Link
            to="/maiar-ghosts#maiar-ghosts"
            className="btn btn-revert btn-lg ml-auto d-inline-flex"
          >
            Im not afraid
          </Link>
        </div>
        <div className="col-md-3 my-3">
          <img className="block w-100 p-0 m-0" src={MGhostImg} alt="Mghosts" />
        </div>
      </div>
    </div>
  );
};

export default Mghosts;
