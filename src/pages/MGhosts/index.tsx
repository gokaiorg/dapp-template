import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MGhostMint from "./MGhostMint";

const MGhosts = () => {
  return (
    <div
      id="maiar-ghosts"
      className="maiar-ghosts bg-black border-top-main bg-ghosts"
    >
      <div className="container py-4">
        <div className="col-12 col-md-10 px-0 mx-md-auto">
          <h1 className="text-white font-weight-bold mt-4 text-center text-6xl">
            Maiar Ghosts
          </h1>
          <ul className="list-unstyled d-flex flex-row justify-content-center text-center text-white text-4xl p-0">
            <li className="mx-3">243 owners</li>
            <li className="mx-3">489 minted</li>
            <li className="mx-3">8658 max supply</li>
          </ul>
          <Tabs
            defaultActiveKey="nfts"
            className="mb-3 text-white text-xl border-0 justify-content-center"
          >
            <Tab eventKey="nfts" title="Mint" tabClassName="btn btn-tab mx-3">
              <MGhostMint />
            </Tab>
            <Tab
              eventKey="tokens"
              title="Rarity"
              tabClassName="btn btn-tab mx-3"
            >
              <p className="text-4xl text-white text-center">Coming soon!</p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MGhosts;
