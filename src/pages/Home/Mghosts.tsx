import * as React from "react";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";

const Mghosts = () => {
  return (
    <div className="mghosts container-fluid bg-light py-5">
      <div className="container d-flex flex-column-reverse flex-md-row align-items-center p-0">
        <div className="text-black my-5 col-md-9">
          <h1 className="mb-3 text-4xl font-weight-bold" data-testid="title">
            Mr Ghosts
          </h1>
          <p className="mb-5 text-xl p-0">
            I hope you are not too scared of ghosts? Several thousand of Mr
            Ghosts will soon be minted on the Elrond Network.
          </p>
          <a
            href="/mr-ghosts"
            className="btn btn-revert btn-lg ml-auto d-inline-flex"
          >
            Im not afraid
          </a>
        </div>
        <div className="col-md-3 my-3">
          <img className="block w-100 p-0 m-0" src={MGhostImg} alt="Mghosts" />
        </div>
      </div>
    </div>
  );
};

export default Mghosts;
