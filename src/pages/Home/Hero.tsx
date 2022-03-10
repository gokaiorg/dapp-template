import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";

const Hero = () => {
  return (
    <div className="hero bg-mr-ghost-top container-fluid">
      <div className="container d-flex flex-column justify-center align-items-center px-0 py-5 my-5 h-100 position-relative">
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            opacity: [0, 0.2],
          }}
          className="col-md-5 m-auto position-absolute inset-0 text-center"
        >
          <svg
            className="dapp-logo h-100"
            viewBox="0 0 255 396"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M52.0,0.0 C106.661,0.0 161.338,0.0 215.999,0.0 C215.666,18.331 215.333,36.668 215.0,54.999 C179.336,54.666 143.663,54.333 107.999,54.0 C107.999,71.998 107.999,90.1 107.999,107.999 C90.1,107.999 71.998,107.999 53.999,107.999 C53.999,160.994 53.999,214.5 53.999,267.0 C107.327,267.0 160.672,267.0 214.0,267.0 C214.0,249.668 214.0,232.331 214.0,215.0 C178.3,215.0 141.996,215.0 106.0,215.0 C106.0,196.668 106.0,178.331 106.0,159.999 C159.994,159.999 214.5,159.999 268.0,159.999 C268.0,214.327 268.0,268.672 268.0,323.0 C250.335,323.0 232.664,323.0 215.0,323.0 C215.333,340.331 215.666,357.668 215.999,375.0 C179.337,375.0 142.662,375.0 106.0,375.0 C106.0,357.335 106.0,339.664 106.0,321.999 C70.670,322.333 35.329,322.666 0.0,323.0 C0.0,232.675 0.0,142.324 0.0,51.999 C17.664,51.999 35.335,51.999 52.999,51.999 C52.666,34.668 52.333,17.331 52.0,0.0 Z"
            />
          </svg>
        </motion.div>
        <div className="hero-title d-block text-white my-4 col-xl-10 text-center align-items-center justify-center m-auto position-absolute inset-0">
          <h1 className="mb-3 text-6xl font-weight-bold" data-testid="title">
            Community-driven collectible NFT DAO on Elrond Network
          </h1>
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
