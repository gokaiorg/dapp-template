import * as React from "react";
import { motion } from "framer-motion";
import MrGhostProtect from "../../../assets/img/mr-ghost-protect-elrond.webp";
import MrGhostMoon from "../../../assets/img/mr-ghost-to-the-moon-elrond.webp";
import MrGhostWallet from "../../../assets/img/mr-ghost-wallet-elrond.webp";
import MrGhostWorking from "../../../assets/img/mr-ghost-working-elrond.webp";

const Roadmap = () => {
  return (
    <div className="roadmap container d-flex flex-column align-items-center mb-5 p-0">
      <motion.div
        className="mrghost-animated col-md-4"
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
        }}
      >
        <img
          width="250px"
          height="250px"
          className="block w-100 mb-5"
          src={MrGhostMoon}
          alt="Mr Ghost to the Moon - Elrond"
          title="Mr Ghost to the Moon - Elrond"
        />
      </motion.div>
      <div className="d-flex flex-column my-5 col-md-9 mx-auto">
        <div className="mb-5 d-flex flex-column flex-md-row align-items-center">
          <img
            className="block col-md-4 mb-5 mb-md-0 h-auto"
            src={MrGhostWallet}
            width="250px"
            height="250px"
            alt="Mr Ghost Wallet"
            title="Mr Ghost Wallet"
          />
          <div className="col-md-8">
            <h3 className="font-weight-bold">60% Community treasury</h3>
            <p className="h3">
              The Community Treasury will create a value base and will be
              governed by the NFT Mr Ghosts holders.
            </p>
          </div>
        </div>
        <div className="mb-5 d-flex flex-column flex-md-row-reverse align-items-center">
          <img
            className="block col-md-4 mb-5 mb-md-0 h-auto"
            src={MrGhostWorking}
            width="250px"
            height="250px"
            alt="Mr Ghost Working - Elrond"
            title="Mr Ghost Working - Elrond"
          />
          <div className="col-md-8">
            <h3 className="font-weight-bold">
              20% Team development and marketing
            </h3>
            <p className="h3">
              Improve the user experience, create new features, communicate and
              promote the project.
            </p>
          </div>
        </div>
        <div className="mb-5 d-flex flex-column flex-md-row align-items-center">
          <img
            className="block col-md-4 mb-5 mb-md-0 h-auto"
            src={MrGhostProtect}
            width="250px"
            height="250px"
            alt="My Ghost Protect - Elrond"
            title="My Ghost Protect - Elrond"
          />
          <div className="col-md-8">
            <h3 className="font-weight-bold">20% Environmental and Charity</h3>
            <p className="h3">
              Acquire palm oil production to recreate biodiversity and create
              Eco Guest House in southern Thailand.
            </p>
          </div>
        </div>
      </div>
      <h2 className="h1 font-weight-bold my-5">Roadmap</h2>
      <div className="d-flex flex-column flex-md-row col-md-9 mx-auto my-5">
        <div className="col-md-4 mb-5">
          <h3 className="font-weight-bold">Q1 2022</h3>
          <p className="h3">Collection design</p>
          <p className="h3">Giveaway & Drop 1</p>
        </div>
        <div className="col-md-4 mb-5">
          <h3 className="font-weight-bold">Q2 2022</h3>
          <p className="h3">Marketing campaign</p>
          <p className="h3">Next drops</p>
        </div>
        <div className="col-md-4 mb-5">
          <h3 className="font-weight-bold">Q3 2022</h3>
          <p className="h3">DAO governance</p>
          <p className="h3">Community rewards</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
