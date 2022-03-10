import * as React from "react";
import { motion } from "framer-motion";
import MrGhostDriver from "../../assets/img/mr-ghost-driver-elrond.png";

const Story = () => {
  return (
    <div className="mr-ghosts-story bg-mr-ghost-bottom d-flex flex-column text-white w-100 py-5 h2 text-center">
      <p className="mt-5 mb-3 mx-auto col-md-6">
        666 traits will build all the Maiar Ghosts.
      </p>
      <p className="mb-3 mx-auto col-md-6">
        A total of 13 drops of 666 NFTs will be generated for a maximum total of
        8658 NFTs.
      </p>
      <p className="mb-3 mx-auto col-md-6">
        Each owner will be a member of Gokai DAO.
      </p>
      <motion.div
        className="mrghost-animated col-md-4"
        animate={{
          y: [-50, 50, -50],
          x: [-1000, 2000],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <img
          className="block w-100 mb-5"
          src={MrGhostDriver}
          alt="Mr Ghost Driver"
          title="Mr Ghost Driver"
        />
      </motion.div>
    </div>
  );
};

export default Story;
