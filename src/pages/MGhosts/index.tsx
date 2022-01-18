import * as React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import MGhostMint from "./MGhostMint";
import Story from "./Story";

const MGhosts = () => {
  return (
    <div
      id="maiar-ghosts"
      className="maiar-ghosts bg-black border-top-main bg-ghosts"
    >
      <div className="container py-4">
        <div className="col-12 col-md-10 px-0 mx-md-auto">
          <h1 className="text-white font-weight-bold mt-4 text-center text-6xl font-mghosts">
            Maiar Ghosts
          </h1>
          <ul className="list-unstyled d-flex flex-column flex-sm-row justify-content-center text-center text-white text-4xl p-0 font-mghosts">
            <li className="mx-3">387 owners</li>
            <li className="mx-3">0 minted</li>
            <li className="mx-3">666 max supply</li>
          </ul>
          <Tabs
            defaultActiveKey="nfts"
            className="mb-3 text-white text-xl border-0 justify-content-center flex-column flex-sm-row"
          >
            <Tab
              eventKey="nfts"
              title="Mint"
              tabClassName="btn btn-tab mx-3 mb-3 font-mghosts"
            >
              <MGhostMint />
            </Tab>
            <Tab
              eventKey="story"
              title="Story"
              tabClassName="btn btn-tab mx-3 mb-3 font-mghosts"
            >
              <Story />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default MGhosts;
