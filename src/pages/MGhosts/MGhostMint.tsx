import * as React from "react";
import { Link } from "react-router-dom";
import MGhostImg from "../../assets/img/MGhost-to-mint.png";
import { routeNames } from "../../routes";

const MGhostMint = () => {
  return (
    <div
      className="d-flex flex-column text-white text-xl w-100 p-0 m-0 col-lg-5 mx-auto mb-5 font-mghosts"
      data-testid="MGhostMint"
    >
      <img
        className="block w-100 p-0 m-0 mb-5 rounded-circle"
        src={MGhostImg}
        alt="Mghosts"
      />
      <p className="text-center text-4xl">Number of MGhost to mint?</p>
      <div className="text-center d-flex flex-row justify-content-center align-items-center">
        <input
          type="text"
          className="p-2 border-0 text-4xl mr-3 mghost-input text-center"
          placeholder="13"
        />
        <Link
          to={routeNames.unlock}
          className="btn btn-third btn-lg d-inline-flex"
          data-testid="loginBtn"
        >
          <svg
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 button-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
          </svg>
          Mint Soon
        </Link>
      </div>
    </div>
  );
};

export default MGhostMint;
