import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";
import { routeNames } from "../../routes";

const Mghosts = () => {
  return (
    <div className="mghosts container-fluid bg-light py-5 text-white">
      <div className="container d-flex flex-column align-items-center text-center p-0">
        <div className="text-black my-5 col-md-9">
          <h2 className="mb-3 font-weight-bold h1" data-testid="title">
            Mr Ghosts Drop 1 coming soon
          </h2>
          <p className="h2 p-0">
            Buy an NFT and become a member of Gokai Labs.
          </p>
          <p className="mb-5 h2 p-0">Earn rewards and vote! 1 NFT = 1 vote</p>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
            <Link
              to={routeNames.MrGhosts}
              className="btn btn-link btn-lg mx-auto d-inline-flex"
              data-testid="about"
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
            <img className="block w-25" src={MGhostImg} alt="Mghosts" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Mghosts;
