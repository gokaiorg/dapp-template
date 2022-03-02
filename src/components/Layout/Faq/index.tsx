import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <div className="faq container d-flex flex-column align-items-center my-5 py-5 p-0 col-md-7">
      <h2 className="h1 font-weight-bold my-5">FAQ</h2>
      <Accordion>
        <AccordionItem className="mb-3">
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
              time, when you buy an NFT you are buying exclusive ownership of a
              digital asset.
            </p>
            <p className="h4">
              Rarity increases the excitement around an item. NFTs offer a
              unique opportunity to participate in a very promising market
              system with endless possibilities, including the possibility of
              making considerable profits.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="mb-3">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3 className="h3 font-weight-bold mb-0">
                Why choose the Elrond network and its EGLD token?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="h4">
              Elrond is a high-speed blockchain that aims to provide
              scalability, efficiency and security and is able to perform 15,000
              transactions per second at a transaction cost of $0.001.
            </p>
            <p className="h4">
              EGLD is the native token of the Elrond blockchain and is used to
              reward validators and to pay network fees. The Elrond platform is
              designed for the new Internet economy and decentralised WEB3
              applications.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem className="mb-3">
          <AccordionItemHeading>
            <AccordionItemButton>
              <h3 className="h3 font-weight-bold mb-0">
                Who is Mr Ghosts and why should you have at least one?
              </h3>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p className="h4">666 traits will build all the Mr Ghosts.</p>
            <p className="h4">
              A total of 13 drops of 666 NFTs will be generated for a maximum
              total of 8658 NFTs.
            </p>
            <p className="h4">
              Each owner will be a member of Gokai DAO. 1 NFT = 1 Vote
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
