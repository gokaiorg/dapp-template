import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";

const Hero = () => {
  return (
    <div className="hero container-fluid">
      <div className="container d-flex flex-column justify-center align-items-center px-0 py-5 my-5 h-100 position-relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            opacity: [0, 0.2],
          }}
          className="col-md-4 m-auto position-absolute inset-0 h-75"
        >
          <svg
            className="dapp-logo"
            fill="currentColor"
            viewBox="0 0 255 396"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" strokeLinecap="round">
              <path
                d="M241.052502,12.7714358 C158.66596,21.4332536 12.8718865,73.0257773 12.8718865,241.823057 C12.8718865,370.87957 113.034972,382.544298 151.930611,382.544298 C190.501773,382.544298 242.052502,357.391985 242.052502,298.901663 C242.052502,271.873876 226.549054,235.605894 186.862107,235.605894 C162.5632,235.605894 150.930611,254.196925 150.930611,269.876476 C150.930611,285.556028 161.459592,293.403498 175.593211,293.403498 C188.99272,293.403498 187.826525,275.063609 180.73357,275.063609"
                stroke="#fff"
                strokeWidth="25"
              />
            </g>
          </svg>
        </motion.div>
        <div className="hero-title d-block text-white my-4 col-md-10 text-center align-items-center justify-center m-auto position-absolute inset-0">
          <h1 className="mb-3 text-6xl font-weight-bold" data-testid="title">
            Community-driven collectible NFT DAO on Elrond Network
          </h1>
          <h2 className="text-2xl text-shadow mb-5">
            Buy NFTS and earn rewards directly in your Maiar application!
          </h2>
          <div className="position-absolute bottom-0 w-100">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Link
                to={routeNames.MrGhosts}
                className="btn btn-link btn-lg mx-auto d-inline-flex"
                data-testid="mrghosts"
              >
                Discover
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
