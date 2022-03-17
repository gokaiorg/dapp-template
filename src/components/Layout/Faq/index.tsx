import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Faq = () => {
  return (
    <div className="faq container-fluid d-flex flex-column align-items-center my-5 py-5 col-lg-10 col-xl-8">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <h2 className="h1 font-weight-bold my-5">FAQ</h2>
      </AnimationOnScroll>
      <Accordion>
        <AnimationOnScroll
          className="mb-3"
          delay={200}
          animateIn="animate__fadeInBottom"
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h3 className="h3 font-weight-bold mb-0">
                  What are NFTs and why should you buy them?
                </h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="h4">
                NFTs are exciting. NFT stands for Non-Fungible Token, which are
                unique digital assets. Since an NFT can only have one owner at a
                time, when you buy an NFT you are buying exclusive ownership of
                a digital asset.
              </p>
              <p className="h4">
                Rarity increases the excitement around an item. NFTs offer a
                unique opportunity to participate in a very promising market
                system with endless possibilities, including the possibility of
                making considerable profits.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="mb-3"
          delay={400}
          animateIn="animate__fadeInBottom"
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h3 className="h3 font-weight-bold mb-0">
                  Why choose the Elrond network and its EGLD token?
                </h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="h4">
                <a
                  {...{
                    target: "_blank",
                  }}
                  className="d-inline font-weight-bold"
                  href="https://elrond.com/"
                >
                  Elrond
                </a>{" "}
                is a high-speed blockchain that aims to provide scalability,
                efficiency and security and is able to perform 15,000
                transactions per second at a transaction cost of $0.001.
              </p>
              <p className="h4">
                EGLD is the native token of the Elrond blockchain and is used to
                reward validators and to pay network fees. The Elrond platform
                is designed for the new Internet economy and decentralised WEB3
                applications.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </AnimationOnScroll>
        <AnimationOnScroll
          className="mb-3"
          delay={600}
          animateIn="animate__fadeInBottom"
        >
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <h3 className="h3 font-weight-bold mb-0">
                  Who is Mr Ghosts and why should I have at least one?
                </h3>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="h4">
                Mr Ghost is a collectible, unique, original and beautiful{" "}
                <a
                  {...{
                    target: "_blank",
                  }}
                  className="d-inline font-weight-bold"
                  href="https://elrond.com/blog/elrond-nft-space/"
                >
                  NFT on Elrond
                </a>{" "}
                , Mr Ghost is the governance token of Gokai Labs DAO and its
                number is limited to 8658 maximum! Mr Ghost makes you a
                shareholder of Gokai Labs and a major player in the strategic
                decisions of the organisation!
              </p>
              <p className="h4">
                From now on you can vote in the Discord server to validate the
                next NFT drops, their prices and other questions the community
                is wondering about.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </AnimationOnScroll>
      </Accordion>
    </div>
  );
};

export default Faq;
