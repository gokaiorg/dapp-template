import * as React from "react";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Buy = () => {
  return (
    <div className="buy container-fluid flex mt-5">
      <AnimationOnScroll
        initiallyVisible={true}
        animateIn="animate__rubberBand"
      >
        <div className="box-blue d-flex flex-column align-items-center my-5 text-center p-5 pt-0 col-lg-10 col-xl-8 mx-auto">
          <div className="d-block p-3 mb-2 bg-white rounded-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 50 50"
              version="1.1"
            >
              <defs>
                <linearGradient
                  x1="25.0645079%"
                  y1="50%"
                  x2="50%"
                  y2="62.4803998%"
                  id="linearGradient-1"
                >
                  <stop stopColor="#1A45C2" offset="0%" />
                  <stop stopColor="#001F9C" offset="100%" />
                </linearGradient>
                <linearGradient
                  x1="50%"
                  y1="62.4834284%"
                  x2="74.9247439%"
                  y2="50%"
                  id="linearGradient-2"
                >
                  <stop stopColor="#001F9C" offset="0%" />
                  <stop stopColor="#1A45C2" offset="100%" />
                </linearGradient>
              </defs>
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon
                  fill="url(#linearGradient-1)"
                  transform="translate(12.490196, 25.000000) scale(1, -1) rotate(-90.000000) translate(-12.490196, -25.000000) "
                  points="37.4901961 12.5098039 24.9484286 25.0798153 12.5228895 37.4901961 -12.5098039 12.5098039"
                />
                <polygon
                  fill="url(#linearGradient-2)"
                  transform="translate(43.714929, 37.500000) scale(-1, -1) rotate(-90.000000) translate(-43.714929, -37.500000) "
                  points="56.2149286 31.2541443 43.7149286 43.7458557 31.2149286 31.2541443"
                />
                <polygon
                  fill="#1A45C2"
                  transform="translate(31.229002, 25.000000) scale(-1, -1) rotate(-90.000000) translate(-31.229002, -25.000000) "
                  points="56.229002 31.2486099 43.729002 43.7317822 6.22900203 6.2682178 31.229002 6.2682178"
                />
              </g>
            </svg>
          </div>
          <div className="text-white col-md-8 p-0">
            <h1 className="mb-2 text-2xl font-weight-bold" data-testid="title">
              How to invest?
            </h1>
            <p className="text-xl p-0 mb-5 font-weight-bold">
              To buy NFTs we recommend you to get Maiar Wallet on your phone and
              connect your wallet to login. You can also create an{" "}
              <a
                {...{
                  target: "_blank",
                }}
                className="d-inline font-weight-bold text-white"
                href="https://wallet.elrond.com/"
                data-testid="Elrond Web Wallet - Gokai Labs NFT DAO - Maiar Ghosts"
                title="Elrond Web Wallet - Gokai Labs NFT DAO - Maiar Ghosts"
              >
                Elrond Web Wallet
              </a>{" "}
            </p>
          </div>
          <div className="position-absolute box-blue-button">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <a
                href="https://get.maiar.com/referral/7nvae7kpo1"
                className="btn btn-link btn-lg btn-dark-blue font-weight-bold mx-auto d-inline-flex"
                data-testid="Get Maiar App - Gokai Labs NFT DAO - Maiar Ghosts"
                title="Get Maiar App - Gokai Labs NFT DAO - Maiar Ghosts"
              >
                Get Maiar
              </a>
            </motion.div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Buy;
