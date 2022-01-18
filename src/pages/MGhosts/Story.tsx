import * as React from "react";
import { Link } from "react-router-dom";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";
import { routeNames } from "../../routes";

const Story = () => {
  return (
    <div
      className="d-flex flex-column text-white w-100 p-0 m-0 mx-auto my-5 text-xl text-center"
      data-testid="Story"
    >
      <h2 className="mb-3">
        The Maiar Ghosts collection was born out of the desire to create an NFT
        around the M in the logo of the Elrond Network application, Maiar!
      </h2>
      <p className="mb-3">
        Each Mr Ghost is a unique NFT on the Elrond blockchain.
      </p>
      <p>
        666 layers will build our Mr Ghosts. A total of 13 drops of 666 NFTs
        will be generated for a maximum total of 8658 NFTs.
      </p>
      <p>
        A part of the first drop is reserved for the 387 lucky ones who
        participated in the giveaway.
      </p>
      <p> We will keep 66 for the team and marketing.</p>
      <p>So there are only 213 Mr Ghosts available for this drop 1!</p>
      <p>
        We are sure that together we can make Mr Ghost a very popular character
        in the Elrond community.
      </p>
    </div>
  );
};

export default Story;
