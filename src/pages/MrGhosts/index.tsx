import * as React from "react";
import MGhostMint from "./Mint";
import Story from "./Story";

const MrGhosts = () => {
  return (
    <div
      id="mr-ghosts"
      className="maiar-ghosts border-top-main bg-ghosts font-mrghosts"
    >
      <div className="container py-4">
        <MGhostMint />
      </div>
      <Story />
    </div>
  );
};

export default MrGhosts;
