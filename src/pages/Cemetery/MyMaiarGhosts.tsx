import * as React from "react";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import { routeNames } from "../../routes";

const MyMaiarGhosts = () => {
  return (
    <>
      <h2 className="h2 mb-5">You do not own any Mr Ghost.</h2>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <Link
          to={routeNames.MaiarGhosts}
          className="btn btn-link btn-lg mx-auto d-inline-flex"
          data-testid="Buy NFT"
          title="Buy Mr Ghost NFT and become a member of Gokai Labs NFT DAO on Elrond Network - Maiar Ghosts"
        >
          Buy NFT
        </Link>
      </motion.div>
    </>
  );
};

export default MyMaiarGhosts;
