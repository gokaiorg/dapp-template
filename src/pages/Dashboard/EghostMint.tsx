import * as React from "react";
import EghostsLogo from "../../assets/img/eGhosts.png";

const EghostMint = () => {
  return (
    <div
      className="eghost-min d-inline-flex flex-column flex-lg-row text-black text-xl w-100 mb-5"
      data-testid="EghostMint"
    >
      <img
        className="block w-100 p-0 m-0 col-lg-6 mr-lg-5 mb-5"
        src={EghostsLogo}
        alt="Eghosts"
      />
      <div className="eghost-mint-info col-lg-6 p-0 pl-lg-3">
        <div className="d-flex flex-row align-items-center">
          <h2 className="font-weight-bold mr-2">eGhosts</h2>
          <p className="m-0">Serie 1 - #001</p>
        </div>
        <ul className="d-flex flex-column p-0">
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eVanescence</p>
            <p>Azure</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eCtoplasm</p>
            <p>Elf</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eLement</p>
            <p>Lightning</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eMotion</p>
            <p>Shy</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eYe</p>
            <p>Dark</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eAter</p>
            <p>Stoic</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">ePic</p>
            <p>Bat Wing</p>
          </li>
          <li className="d-flex flex-row">
            <p className="font-weight-bold mr-1">eGlasses</p>
            <p>Tourist</p>
          </li>
          <ul className="text-secondary small list-unstyled p-0">
            <li>
              <span className="font-weight-bold">Attack</span> 9
            </li>
            <li>
              <span className="font-weight-bold">Defense</span> 11
            </li>
            <li>
              <span className="font-weight-bold">Speed</span> 7
            </li>
          </ul>
        </ul>
        <a href="#" className="btn btn-third text-black">
          Mint soon
        </a>
      </div>
    </div>
  );
};

export default EghostMint;
