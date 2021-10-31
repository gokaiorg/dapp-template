import * as React from "react";
import Evanescences from "./Layers/Evanescences";
import Ectoplasms from "./Layers/Ectoplasms";
import Eyes from "./Layers/Eyes";
import Emotions from "./Layers/Emotions";
import Elements from "./Layers/Elemens";
import Eaters from "./Layers/Eaters";
import Epics from "./Layers/Epics";
import Eglasses from "./Layers/Eglasses";
import Eweapons from "./Layers/Eweapons";
import Evehicules from "./Layers/Evehicules";

const EghostLayers = () => {
  return (
    <div
      className="eghost-layers d-inline-flex flex-column text-black text-xl w-100 mb-5"
      data-testid="EghostLayers"
    >
      <h2 className="d-flex font-weight-bold mb-3">eGhosts autopsy</h2>
      <p className="d-flex mb-3">
        eGhosts are an original generated art series combining pixel art and
        graphic design.
      </p>
      <p className="d-flex mb-3">
        Inspired by the logo of the Maiar application, this collection is a
        collection for community and fun.
      </p>
      <p className="d-flex mb-3">
        There will be 13 sets of 666 eGhosts for a total of 8658 unique digital
        art pieces generated.
      </p>
      <p className="d-flex mb-3">
        Owners of eGhosts will decide by voting if the following series will be
        minted or not.
      </p>
      <p className="d-flex mb-5">
        So there may only be 666 eGhosts minted forever. Or maybe we will reach
        the thirteenth set, but who knows what tomorrow is made of?
      </p>
      <Evanescences />
      <Ectoplasms />
      <Elements />
      <Eyes />
      <Emotions />
      <Eaters />
      <Epics />
      <Eglasses />
      <Eweapons />
      <Evehicules />
    </div>
  );
};

export default EghostLayers;
