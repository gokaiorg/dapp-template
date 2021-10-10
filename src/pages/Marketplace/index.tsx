import * as React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";
import logo from "./../../assets/img/1.png";
import { ReactComponent as ElrondLogo } from "./../../assets/img/elrond-symbol.svg";

const Marketplace = () => {
  const ref = React.useRef(null);

  return (
    <div className="marketplace border-top-main" ref={ref}>
      <div className="container py-5">
        <div className="col-12 col-md-10 mx-auto">
          <Link to={routeNames.dashboard} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white social-icon mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
            >
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to dashboard
          </Link>
          <h1 className="text-white font-weight-bold mb-5">Marketplace</h1>
          <div className="marketplace-list row">
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="d-flex flex-column border-block text-white">
                <img className="block w-100 mb-3" src={logo} alt="Logo" />
                <h2 className="text-xl font-weight-bold">eGhost #259</h2>
                <p className="text-xl d-inline-flex align-items-center ml-auto mb-0">
                  <ElrondLogo className="elrond-symbol text-white" />
                  0.01
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
