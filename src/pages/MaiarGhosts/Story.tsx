import * as React from "react";
import { motion } from "framer-motion";
import MrGhostDriver from "../../assets/img/mr-ghost-driving-elrond-nft-dao-maiar-ghosts.webp";

const Story = () => {
  return (
    <div className="mr-ghosts-story bg-mr-ghost-bottom d-flex flex-column text-white w-100 py-5 h2 text-center">
      <p className="mt-5 mb-3 mx-auto col-md-6 mb-5">
        Maiar Ghosts is a 8658 unique Mr Ghost NFT collection on the Elrond
        blockchain that was born from a wish to create an NFT around the M logo
        from the Elrond Network ​​digital wallet: Maiar.
      </p>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <a
          href="https://medium.com/@GokaiLabs/gokai-labs-mr-ghost-elrond-nft-around-the-maiar-logo-44bf2099a1ee"
          data-testid="Medium Story - Mr Ghost NFT - Maiar Ghosts collection - Gokai Labs"
          title="Medium Story - Mr Ghost NFT - Maiar Ghosts collection - Gokai Labs"
          target="_blank"
          rel="noreferrer"
          className="btn btn-link btn-lg mx-auto d-inline-flex mt-5"
        >
          Read More
        </a>
      </motion.div>
      <motion.div
        className="mr-ghost-animated col-md-4"
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
          alt="Mr Ghost Driving - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Driving - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
    </div>
  );
};

export default Story;
