import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";
import { routeNames } from "../../routes";

const Mint = () => {
  const { loggedIn } = Dapp.useContext();

  return (
    <div
      className="d-flex flex-column flex-md-row text-white text-xl w-100"
      data-testid="Mint"
    >
      <motion.div
        className="mrghost-animated col-md-6"
        animate={{
          y: [-15, 15, -15],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <img className="block w-100" src={MGhostImg} alt="Mghosts" />
      </motion.div>
      <div className="d-flex flex-column justify-content-center col-md-6 position-relative">
        <h1 className="font-weight-bold mb-3">
          Collection of 8658 unique Mr Ghosts NFT on the Elrond blockchain
        </h1>
        <p className="mb-5">Drop 1 - 0.0666 EGLD</p>
        <p className="mb-5">213/666 Left</p>
        {!loggedIn && (
          <motion.div
            className="position-absolute bottom-0 mb-5"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link
              to={routeNames.unlock}
              className="btn btn-mr-ghosts btn-lg mr-auto d-inline-flex"
              data-testid="loginBtn"
            >
              <svg
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 button-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
              </svg>
              Login to Mint
            </Link>
          </motion.div>
        )}
        {loggedIn && (
          <div className="d-flex flex-row align-items-center">
            <p className="font-weight-bold mr-5">1 Mr Ghost = 0.0666 EGLD</p>
            <input
              type="text"
              className="p-2 border-0 text-4xl mr-3 mghost-input text-center"
              placeholder="13"
            />
            <a className="btn btn-mr-ghosts text-black" title="Logout">
              Mint
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mint;
