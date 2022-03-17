import * as React from "react";
import { motion } from "framer-motion";
import MrGhostEarth from "../../../assets/img/mr-ghost-earth-elrond-nft-dao-maiar-ghosts.webp";

const Earth = () => {
  return (
    <>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
        }}
        className="mr-ghost-earth position-absolute"
      >
        <img
          width="180px"
          height="180px"
          className="block"
          src={MrGhostEarth}
          alt="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Earth - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
    </>
  );
};

export default Earth;
