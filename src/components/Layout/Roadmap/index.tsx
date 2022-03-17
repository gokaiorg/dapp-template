import * as React from "react";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import MrGhostProtect from "../../../assets/img/mr-ghost-farming-elrond-nft-dao-maiar-ghosts.webp";
import MrGhostMoon from "../../../assets/img/mr-ghost-mooning-elrond-nft-dao-maiar-ghosts.webp";
import MrGhostWallet from "../../../assets/img/mr-ghost-staking-elrond-nft-dao-maiar-ghosts.webp";
import MrGhostWorking from "../../../assets/img/mr-ghost-working-elrond-nft-dao-maiar-ghosts.webp";

const Roadmap = () => {
  return (
    <div className="roadmap container-fluid d-flex flex-column align-items-center mb-5 p-0">
      <motion.div
        className="mr-ghost-animated col-md-4"
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
          alt="Mr Ghost Mooning - Elrond NFT DAO - Maiar Ghosts"
          title="Mr Ghost Mooning - Elrond NFT DAO - Maiar Ghosts"
        />
      </motion.div>
      <div className="d-flex flex-column my-5 col-xl-6 mx-auto">
        <div className="mb-5 d-flex flex-column flex-md-row align-items-center">
          <AnimationOnScroll
            className="block col-md-4 mb-5 mb-md-0 px-lg-0 w-100 h-auto"
            animateIn="animate__bounceInLeft"
          >
            <img
              className="w-100 h-auto"
              src={MrGhostWallet}
              width="250px"
              height="250px"
              alt="Mr Ghost Staking - Elrond NFT DAO - Maiar Ghosts"
              title="Mr Ghost Staking - Elrond NFT DAO - Maiar Ghosts"
            />
          </AnimationOnScroll>
          <AnimationOnScroll
            className="col-md-8"
            animateIn="animate__bounceInRight"
          >
            <h3 className="font-weight-bold">60% Gokai Stake</h3>
            <p className="h3 flex-nowrap">
              We have a simple target, we are going to stake the EGLDs to run a
              node and become validators of the Elrond network in Asia. Each
              node must bid 2500 EGLD to become a validator and is rewarded for
              its service.
            </p>
          </AnimationOnScroll>
        </div>
        <div className="mb-5 d-flex flex-column flex-md-row-reverse align-items-center">
          <AnimationOnScroll
            className="block col-md-4 mb-5 mb-md-0 px-lg-0 w-100 h-auto"
            animateIn="animate__bounceInRight"
          >
            <img
              className="w-100 h-auto"
              src={MrGhostWorking}
              width="250px"
              height="250px"
              alt="Mr Ghost Working - Elrond NFT DAO - Maiar Ghosts"
              title="Mr Ghost Working - Elrond NFT DAO - Maiar Ghosts"
            />
          </AnimationOnScroll>

          <AnimationOnScroll
            className="col-md-8"
            animateIn="animate__bounceInLeft"
          >
            <h3 className="font-weight-bold">20% Gokai Team</h3>
            <p className="h3 flex-nowrap">
              This is the maximum amount of income the team will be able to
              receive, beyond a decent salary to live comfortably and be able to
              fully exercise their job, all of which will be injected into the
              EGLD stake or environmental project.
            </p>
          </AnimationOnScroll>
        </div>
        <div className="mb-5 d-flex flex-column flex-md-row align-items-center">
          <AnimationOnScroll
            className="block col-md-4 mb-5 mb-md-0 px-lg-0 w-100 h-auto"
            animateIn="animate__bounceInLeft"
          >
            <img
              className="w-100 h-auto"
              src={MrGhostProtect}
              width="250px"
              height="250px"
              alt="Mr Ghost Farming - Elrond NFT DAO - Maiar Ghosts"
              title="Mr Ghost Farming - Elrond NFT DAO - Maiar Ghosts"
            />
          </AnimationOnScroll>

          <AnimationOnScroll
            className="col-md-8"
            animateIn="animate__bounceInRight"
          >
            <h3 className="font-weight-bold">20% Gokai Farm</h3>
            <p className="h3 flex-nowrap">
              The environmental project will consist of the acquisition of
              intensive agricultural fields to recreate biodiversity with
              sustainable eco-forests. Part of the plots will be exploited in
              the first instance while new trees of all varieties grow.
            </p>
          </AnimationOnScroll>
        </div>
      </div>
      <AnimationOnScroll animateIn="animate__bounceIn">
        <h2 className="h1 font-weight-bold my-5">Roadmap</h2>
      </AnimationOnScroll>
      <div className="d-flex flex-column flex-md-row col-xl-6 mx-auto my-5">
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          className="col-md-4 mb-5"
        >
          <h3 className="font-weight-bold">Q2 2022</h3>
          <p className="h3 flex-nowrap">Collection design</p>
          <p className="h3 flex-nowrap">Giveaway & Drop 1</p>
          <p className="h3 flex-nowrap">Marketing campaign</p>;
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          delay={200}
          className="col-md-4 mb-5"
        >
          <h3 className="font-weight-bold">Q3 2022</h3>
          <p className="h3 flex-nowrap">Community votes</p>
          <p className="h3 flex-nowrap">Next drops</p>
          <p className="h3 flex-nowrap">Partnerships</p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__bounceInLeft"
          delay={400}
          className="col-md-4 mb-5"
        >
          <h3 className="font-weight-bold">Q4 2022</h3>
          <p className="h3 flex-nowrap">DAO governance</p>
          <p className="h3 flex-nowrap">Runing a node</p>
          <p className="h3 flex-nowrap">Land acquisition</p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Roadmap;
