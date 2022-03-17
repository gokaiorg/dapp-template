import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MrGhostWin from "../../assets/img/mr-ghost-winning-elrond-nft-dao-maiar-ghosts.webp";
import { routeNames } from "../../routes";

const Mrghosts = () => {
  return (
    <div className="mrghosts container-fluid py-5 text-white">
      <div className="container d-flex flex-column align-items-center text-center p-0">
        <div className="text-black my-5 col-md-9">
          <h2 className="mb-3 font-weight-bold h1" data-testid="title">
            Maiar Ghosts - Drop 1 coming soon
          </h2>
          <p className="h2 p-0 mb-5">
            Buy NFTS and become a member of Gokai Labs DAO.
          </p>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link
              to={routeNames.MrGhosts}
              className="btn btn-link btn-lg mx-auto d-inline-flex"
              data-testid="Buy NFT"
              title="Buy Mr Ghost NFT and become a member of Gokai Labs DAO on Elrond Network - Maiar Ghosts"
            >
              Buy NFT
            </Link>
          </motion.div>
        </div>
        <div className="flex w-100 my-3">
          <motion.div
            className="mrghost-animated w-100"
            animate={{
              x: [-1000, 1000, -1000],
            }}
            transition={{
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <img
              width="512px"
              height="512px"
              className="block"
              src={MrGhostWin}
              alt="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
              title="Mr Ghost Winning - Elrond NFT DAO - Maiar Ghosts"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mrghosts;
