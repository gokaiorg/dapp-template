import * as React from "react";

const MrGhost = () => {
  return (
    <div className="bg-mr-ghost-cemetery-bottom text-white pb-5 position-relative">
      <div className="container d-flex flex-column flex-md-row my-5 pt-5">
        <div className="col-md-6 col-xl-5">
          <img
            className="block w-100 h-auto mb-5 mb-md-0"
            src="https://gateway.pinata.cloud/ipfs/Qmd23ivXj12EDRGoNHLLFGBuE3AuQm4KUTMdeVFRqHLP1n/1.png"
            alt="Mr Ghost #01 - Elrond NFT DAO - Maiar Ghosts"
            title="Mr Ghost #01 - Elrond NFT DAO - Maiar Ghosts"
            width="256px"
            height="256px"
          />
        </div>
        <div className="col-md-6 col-xl-7 pb-5">
          <h1 className="h1 font-weight-bold mb-5">Mr Ghost #01</h1>
          <p className="h2 pb-5">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            tempus. In hac habitasse platea dictumst. Donec vitae orci sed dolor
            rutrum auctor. Praesent egestas neque eu enim. Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit.
            <br />
            <br />
            <a href="#" className="font-weight-bold text-white mt-3">
              Modify Story
            </a>
          </p>
        </div>
      </div>
      <div className="mr-ghost-nav d-flex justify-content-center align-items-center pb-5">
        <a
          href="#"
          className="font-weight-bold mr-ghost-arrow previous d-flex flex-column align-items-center text-white mx-3"
        >
          <span className="img"></span>
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="font-weight-bold mr-ghost-arrow next d-flex flex-column align-items-center text-white mx-3"
        >
          <span className="img"></span>
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default MrGhost;
