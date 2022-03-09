import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MrGhostsMint from "../../assets/img/mr-ghosts-mint-elrond.gif";
import { routeNames } from "../../routes";

const Mint = () => {
  const { loggedIn } = Dapp.useContext();

  return (
    <div
      className="mr-ghosts-mint bg-mr-ghost-top mint text-white text-xl w-100 pt-5 pb-0 pb-md-5"
      data-testid="Mint"
    >
      <div className="d-flex flex-column flex-md-row col-md-9 mx-auto">
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
          <img
            className="block w-100"
            src={MrGhostsMint}
            alt="Mr Ghosts Mint"
            title="Mr Ghosts Mint"
          />
        </motion.div>
        <div className="mint-info d-flex flex-column text-center text-md-left justify-content-center col-md-6 position-relative">
          <h1 className="font-weight-bold mb-3">
            Collection of 8658 unique Mr Ghosts NFT on the Elrond blockchain
          </h1>
          <p className="mb-1">Drop 1 - 0.0666 EGLD</p>
          <p className="mb-5">213/666 Left</p>
          {!loggedIn && (
            <motion.div
              className="position-absolute bottom-0 mint-login-button mb-5"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                to={routeNames.unlock}
                className="btn btn-lg mr-auto d-inline-flex"
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
              <p className="font-weight-bold mr-5">Number of NFTs to mint?</p>
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
    </div>
  );
};

export default Mint;
