import * as React from "react";
import { motion } from "framer-motion";
import MrGhostDriver from "../../assets/img/mr-ghost-driver-elrond.png";

const Story = () => {
  return (
    <div className="mr-ghosts-story bg-mr-ghost-bottom d-flex flex-column text-white w-100 py-5 h2 text-center">
      <p className="mt-5 mb-3 mx-auto col-md-6">
        Maiar Ghosts is a 8658 unique Mr Ghost NFT collection on the Elrond
        blockchain that was born from a wish to create an NFT around the M logo
        from the Elrond Network ​​digital wallet: Maiar.
      </p>
      <p className="mb-3 mx-auto col-md-6">
        Maiar Ghosts are made up of 9 attributes including 265 expressions, 75
        backgrounds, 99 decorations, 8 bodies, 78 tools, 61 hats, 39 clouds, 23
        jewels and 18 transports. For a total of 666 character traits.
      </p>
      <p className="mb-3 mx-auto col-md-6">
        Some of the layers will be named for popular Elrond Network projects of
        our time. It will be like a snapshot of the birth of NFT projects on
        Elrond and Maiar wallet.
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
