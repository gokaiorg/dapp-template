import * as React from "react";

const Governance = () => {
  return (
    <div
      className="governance d-inline-flex flex-column my-5 w-100"
      data-testid="Governance"
    >
      <h2 className="h2 font-weight-bold mb-3">DAO Governance</h2>
      <div className="d-inline-flex flex-column flex-md-row bg-white p-3 mb-3 overflow-hidden">
        <div className="d-flex flex-column col-md-10">
          <h3 className="h3 font-weight-bold mb-3">
            Should we launch the next drop of 666 Maiar Ghosts?
          </h3>
          <div className="d-flex flex-row h5 align-items-center">
            <input type="radio" value="Yes" name="answer" className="mr-2" />{" "}
            Yes
            <input
              type="radio"
              value="No"
              name="answer"
              className="ml-3 mr-2"
            />{" "}
            No
          </div>
        </div>
        <div className="d-flex flex-column col-md-2 h5">
          <p className="">Result</p>
          <p className="h2 font-weight-bold">Yes - 100%</p>
        </div>
      </div>
      <div className="d-inline-flex flex-column flex-md-row bg-white p-3 mb-3 overflow-hidden">
        <div className="d-flex flex-column col-md-10">
          <h3 className="h3 font-weight-bold mb-3">
            What should be the next mintint price?
          </h3>
          <div className="d-flex flex-row h5 align-items-center">
            <input type="radio" value="0.1" name="price" className="mr-2" /> 0.1
            <input
              type="radio"
              value="0.2"
              name="price"
              className="ml-3 mr-2"
            />{" "}
            0.2
            <input
              type="radio"
              value="0.3"
              name="price"
              className="ml-3 mr-2"
            />{" "}
            0.3
            <input
              type="radio"
              value="0.4"
              name="price"
              className="ml-3 mr-2"
            />{" "}
            0.4
          </div>
        </div>
        <div className="d-flex flex-column col-md-2 h5">
          <p className="">Result</p>
          <p className="h2 font-weight-bold">0.1 - 43%</p>
        </div>
      </div>
      <div className="d-inline-flex flex-column flex-md-row bg-white p-3 mb-3 overflow-hidden">
        <div className="d-flex flex-column col-md-10">
          <h3 className="h3 font-weight-bold mb-3">
            What should be the maximum NFT per wallet?
          </h3>
          <div className="d-flex flex-row h5 align-items-center">
            <input type="radio" value="2" name="number" className="mr-2" /> 2
            <input
              type="radio"
              value="4"
              name="number"
              className="ml-3 mr-2"
            />{" "}
            4
            <input
              type="radio"
              value="6"
              name="number"
              className="ml-3 mr-2"
            />{" "}
            6
            <input
              type="radio"
              value="8"
              name="number"
              className="ml-3 mr-2"
            />{" "}
            8
            <input
              type="radio"
              value="10"
              name="number"
              className="ml-3 mr-2"
            />{" "}
            10
          </div>
        </div>
        <div className="d-flex flex-column col-md-2 h5">
          <p className="">Result</p>
          <p className="h2 font-weight-bold">10 - 56%</p>
        </div>
      </div>
    </div>
  );
};

export default Governance;
