import * as React from "react";
import FooterGhosts from "components/Layout/FooterGhosts";
import NavbarGhosts from "components/Layout/NavbarGhosts";
import MGhostMint from "./MGhostMint";
import Story from "./Story";

const MGhosts = () => {
  return (
    <div
      id="maiar-ghosts"
      className="maiar-ghosts border-top-main bg-ghosts font-mghosts"
    >
      <NavbarGhosts />
      <div className="container py-4">
        <MGhostMint />
      </div>
      <Story />
      <FooterGhosts />
    </div>
  );
};

export default MGhosts;
