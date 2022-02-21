import * as React from "react";
import NavbarGhosts from "components/Layout/NavbarGhosts";

const Cemetery = () => {
  return (
    <div
      id="maiar-ghosts"
      className="maiar-ghosts bg-black border-top-main bg-ghosts font-cemetery"
    >
      <NavbarGhosts />
      <h1 className="font-weight-bold text-center text-white pt-5 mt-5">
        Coming Soon
      </h1>
    </div>
  );
};

export default Cemetery;
