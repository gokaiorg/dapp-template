import * as React from "react";
import { motion } from "framer-motion";
import MGhostImg from "../../assets/img/mr-ghost-to-the-moon.png";

const Roadmap = () => {
  return (
    <div className="roadmap p-0">
      <div className="container d-flex flex-column align-items-center mb-5 p-0">
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
          <img className="block w-100 mb-5" src={MGhostImg} alt="Mghosts" />
        </motion.div>
        <h2 className="h1 font-weight-bold my-5">Roadmap</h2>
        <div className="d-flex flex-column flex-md-row w-75 my-5">
          <div className="col-4">
            <h3 className="font-weight-bold">Q1 2022</h3>
            <p className="h3">Collection design</p>
            <p className="h3">Giveaway & Drop 1</p>
          </div>
          <div className="col-4">
            <h3 className="font-weight-bold">Q2 2022</h3>
            <p className="h3">Marketing campaign</p>
            <p className="h3">Next drops</p>
          </div>
          <div className="col-4">
            <h3 className="font-weight-bold">Q3 2022</h3>
            <p className="h3">DAO governance</p>
            <p className="h3">Community rewards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
