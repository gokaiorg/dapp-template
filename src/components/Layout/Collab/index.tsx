import * as React from "react";
import ElrondWorld from "../../../assets/img/collab-elrond-world-elrond.webp";
import Indie from "../../../assets/img/collab-indie-nft-artwork-elrond.webp";
import Plata from "../../../assets/img/collab-plata-network-elrond.webp";
import Snapshot from "../../../assets/img/collab-snapshot-elrond.webp";
import Wine from "../../../assets/img/collab-world-wide-wine-elrond.webp";

const Collab = () => {
  return (
    <div className="collab container d-flex flex-column align-items-center mt-4 p-0">
      <h2 className="h1 font-weight-bold my-5">Collabs</h2>
      <div className="d-flex flex-wrap align-items-center justify-content-center my-5 mx-md-5">
        <div className="collab-row mb-5">
          <a
            href="https://mobile.twitter.com/ElrondWorld"
            data-testid="elrondworld"
            target="_blank"
            rel="noreferrer"
            className="d-flex mx-auto"
          >
            <img
              className="w-100 mx-auto h-auto"
              width="120px"
              height="120px"
              src={ElrondWorld}
              alt="Elrond World"
              title="Elrond World"
            />
          </a>
        </div>
        <div className="collab-row mb-5">
          <a
            href="https://www.wwwine.io/"
            data-testid="worldwidewine"
            target="_blank"
            rel="noreferrer"
            className="d-flex mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Wine}
              alt="World Wide Wine"
              title="World Wide Wine"
            />
          </a>
        </div>
        <div className="collab-row mb-5">
          <a
            href="https://plata.network/"
            data-testid="platanetwork"
            target="_blank"
            rel="noreferrer"
            className="d-flex mx-auto"
          >
            <img
              className="w-100 mx-auto h-auto"
              width="120px"
              height="120px"
              src={Plata}
              alt="Plata Network"
              title="Plata Network"
            />
          </a>
        </div>
        <div className="collab-row mb-5">
          <a
            href="https://www.snapshot.org/"
            data-testid="snapshot"
            target="_blank"
            rel="noreferrer"
            className="d-flex mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Snapshot}
              alt="Snapshot"
              title="Snapshot"
            />
          </a>
        </div>
        <div className="collab-row mb-5">
          <a
            href="https://www.indienftartwork.com/"
            data-testid="indienftartwork"
            target="_blank"
            rel="noreferrer"
            className="d-flex mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Indie}
              alt="Indie NFT Artwork"
              title="Indie NFT Artwork"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collab;
