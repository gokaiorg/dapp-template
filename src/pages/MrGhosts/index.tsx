import * as React from "react";
import Maiar from "../Home/Maiar";
import MGhostMint from "./Mint";
import Story from "./Story";

const MrGhosts = () => {
  return (
    <div
      id="mr-ghosts"
      className="maiar-ghosts border-top-main bg-ghosts font-mrghosts"
    >
      <div className="container py-4 bg-black">
        <MGhostMint />
      </div>
      <Story />
      <Maiar />
    </div>
  );
};

export default MrGhosts;
