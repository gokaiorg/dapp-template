import * as React from "react";
import ElrondWorld from "../../../assets/img/collab-elrond-world.png";
import Indie from "../../../assets/img/collab-indie-nft-artwork.png";
import Plata from "../../../assets/img/collab-plata-network.png";

const Collab = () => {
  return (
    <div className="roadmap container d-flex flex-column align-items-center mt-4 p-0">
      <h2 className="h1 font-weight-bold my-5">Collabs</h2>
      <div className="d-flex flex-column flex-md-row col-md-9 mx-auto my-5">
        <div className="col-md-4 mb-5">
          <a
            href="https://mobile.twitter.com/ElrondWorld"
            data-testid="elrondworld"
            target="_blank"
            rel="noreferrer"
            className="flex mx-auto"
          >
            <img
              className="flex w-50 mx-auto"
              src={ElrondWorld}
              alt="Elrond World"
            />
          </a>
        </div>
        <div className="col-md-4 mb-5">
          <a
            href="https://plata.network/"
            data-testid="platanetwork"
            target="_blank"
            rel="noreferrer"
            className="flex mx-auto"
          >
            <img
              className="flex w-50 mx-auto"
              src={Plata}
              alt="Plata Network"
            />
          </a>
        </div>
        <div className="col-md-4 mb-5">
          <a
            href="https://www.indienftartwork.com/"
            data-testid="indienftartwork"
            target="_blank"
            rel="noreferrer"
            className="flex mx-auto"
          >
            <img
              className="flex w-50 mx-auto"
              src={Indie}
              alt="Plata Network"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collab;
