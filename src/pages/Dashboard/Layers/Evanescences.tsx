import * as React from "react";

const Evanescences = () => {
  return (
    <div
      className="d-inline-flex flex-column text-black text-xl w-100 mb-5"
      data-testid="Evanescences"
    >
      <h3 className="d-flex font-weight-bold mb-2">eVanescences</h3>
      <p className="d-flex mb-3">
        Evanescence is the atmosphere in which the eGhost is evolving.
      </p>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Common</h4>
      <div className="d-flex flex-row row">
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmVd9b3M7h7mQMu5RBBK9R8jnos7N9EuVcw9WLtphndrvo"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Azure</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmQG2sxLhDmwovh24U2QXUE3VF3WKwXmx7rLYB6NGKAbpX"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Razzle</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmVHuEBw2MKMkWD3j1EMpmioBhrFetfAiXLxKgcCNVBsPp"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">YellowSea</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmYR2mFddPq3g1DwAUmaiULtKC4jDbTze9KSJsgLEEuprE"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Apple</h5>
        </div>
      </div>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Rare</h4>
      <p className="d-flex mb-3 small">Coming Soon</p>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Mystic</h4>
      <p className="d-flex mb-3 small">Coming Soon</p>
    </div>
  );
};

export default Evanescences;
