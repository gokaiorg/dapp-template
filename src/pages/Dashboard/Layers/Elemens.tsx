import * as React from "react";

const Elements = () => {
  return (
    <div
      className="d-inline-flex flex-column text-black text-xl w-100 mb-5"
      data-testid="Elements"
    >
      <h3 className="d-flex font-weight-bold mb-2">eLements</h3>
      <p className="d-flex mb-3">The element that dominates this ghost.</p>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Common</h4>
      <div className="d-flex flex-row row">
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmWbeV3R2YmCSmFPmvpkBFJRE6jgzBsaRdJMoYmwAtgNMU"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Earth</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmXAKFLTE6o3DT58PsP3ha81McDLJs5UWtQGEdkk7iwB3q"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Water</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmXweyuUUmHBXNwC7rHEoSF1RSqEQcGnbf4vndGJcNpVPW"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Lightning</h5>
        </div>
        <div className="d-flex flex-column col-sm-6 col-xl-3 pb-3">
          <img
            className="block w-100 p-0 m-0 mb-3"
            src="https://ipfs.io/ipfs/QmVdsm6uaDCruVKqyqZx8s1SUsgJWuv796YgXqfRcBQdDA"
            alt="Eghosts"
          />
          <h5 className="font-weight-bold">Fire</h5>
        </div>
      </div>
      <h4 className="d-flex mb-2 text-secondary font-weight-bold">Rare</h4>
      <p className="d-flex mb-3 small">Coming Soon</p>
    </div>
  );
};

export default Elements;
