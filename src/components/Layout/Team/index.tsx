import * as React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Albert from "../../../assets/img/bebert-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";
import Vladimir from "../../../assets/img/build-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";
import Jeremy from "../../../assets/img/jeremy-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";
import Jess from "../../../assets/img/jessica-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";
import Louis from "../../../assets/img/louislanne-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";
import Nati from "../../../assets/img/nati-gokai-labs-elrond-nft-dao-maiar-ghosts.webp";

const Team = () => {
  return (
    <div className="collab container d-flex flex-column align-items-center text-center mt-4 p-0">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <h2 className="h1 font-weight-bold mt-5">Team</h2>
      </AnimationOnScroll>
      <div className="d-flex flex-wrap align-items-top justify-content-center my-5 mx-md-5">
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="https://www.linkedin.com/in/jeremy-douchamps/"
            data-testid="jeremy"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              className="w-100 mx-auto h-auto"
              width="120px"
              height="120px"
              src={Jeremy}
              alt="Jeremy - Founder - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Jeremy - Founder - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Jeremy</h3>
          <h4>Founder</h4>
          <h5>gokai.elrond</h5>
        </AnimationOnScroll>
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="https://github.com/VladimirAndrianov96"
            data-testid="vladimir"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Vladimir}
              alt="Vladimir - Developer - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Vladimir - Developer - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Vladimir</h3>
          <h4>Developer</h4>
          <h5>build.elrond</h5>
        </AnimationOnScroll>
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="hhttps://www.linkedin.com/in/albertlanne/"
            data-testid="albertnetwork"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              className="w-100 mx-auto h-auto"
              width="120px"
              height="120px"
              src={Albert}
              alt="Albert - SEO Expert - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Albert - SEO Expert - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Albert</h3>
          <h4>SEO expert</h4>
          <h5>bebert.elrond</h5>
        </AnimationOnScroll>
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="https://www.linkedin.com/in/nati-douchamps-1151a8144/"
            data-testid="nati"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Nati}
              alt="Nati - Marketer - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Nati - Marketer - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Nati</h3>
          <h4>Marketer</h4>
          <h5>nati.elrond</h5>
        </AnimationOnScroll>
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="https://www.instagram.com/louislanne/"
            data-testid="louis"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Louis}
              alt="Louis - Artist - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Louis - Artist - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Louis</h3>
          <h4>Artist</h4>
          <h5>louislanne.elrond</h5>
        </AnimationOnScroll>
        <AnimationOnScroll className="team-row" animateIn="animate__bounceIn">
          <a
            href="https://www.linkedin.com/in/jessica-d-21b267114/"
            data-testid="jessica"
            target="_blank"
            rel="noreferrer"
            className="d-flex flex-column mx-auto"
          >
            <img
              width="120px"
              height="120px"
              className="w-100 mx-auto h-auto"
              src={Jess}
              alt="Jessica - Redactor - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
              title="Jessica - Redactor - Gokai Labs NFT DAO Elrond - Maiar Ghosts"
            />
          </a>
          <h3 className="font-weight-bold">Jessica</h3>
          <h4>Redactor</h4>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Team;
