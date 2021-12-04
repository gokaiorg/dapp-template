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
        The MGhost will haunt the Elrond Network forever.
      </h2>
      <p className="mb-3">
        13 sets of 666 will be generated but there will only be 666 Maiar Ghosts
        ready for mint at launch. The first floor price will be 0.0666 $EGLD.
      </p>
      <p className="mb-3">
        Every month MGhosts holders will be invited to vote on whether a new set
        of 666 MGhosts should be launched and also what floor price should be
        given.
      </p>
      <p className="mb-3">
        With MGhosts you will enter the decentralized autonomous ghost world.
      </p>
    </div>
  );
};

export default Story;
