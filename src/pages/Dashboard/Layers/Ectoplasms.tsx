import * as React from "react";

const Ectoplasms = () => {
  return (
    <div
      className="d-inline-flex flex-column text-black text-xl w-100 mb-5"
      data-testid="Ectoplasms"
    >
      <h3 className="d-flex font-weight-bold mb-2">eCtoplasms</h3>
      <p className="d-flex mb-3">Ectoplasm is the residue of the deceased.</p>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Common</h4>
      <div className="d-flex flex-row row">
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmXxyKknQiXtZMrZeFVzxnoqjjQpN9vxeiyaysjb7ZmYvF"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Maiar</h5>
          <p className="text-secondary small">Spookiness 5</p>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmZSv2jaksfq75GWHv3C2h6MJhAsrHDEEEYTapD54sXHxh"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Elf</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmYz75tfk6Aomd4TG7LTmjZTFXFx1peLL9cPM9vCa8ANvP"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Human</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmYwesmFLHMe18LxhojTNRrpscCrWXtuCepBwpiRHySopF"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Alien</h5>
        </div>
      </div>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Rare</h4>
      <p className="d-flex mb-3 small">Coming Soon</p>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Mystic</h4>
      <p className="d-flex mb-3 small">Coming Soon</p>
    </div>
  );
};

export default Ectoplasms;
