import * as React from "react";
// import { dAppName } from "config";
import { Link } from "react-router-dom";
import { routeNames } from "../../routes";

const Home = () => {
  return (
    <div className="d-flex flex-fill align-items-center container">
      <div className="row w-100">
        <div className="col-12 col-md-8">
          <div className="text-white">
            <h1 className="mb-5 text-6xl" data-testid="title">
              Where dApp Elrond communities meet
            </h1>
            <p className="mb-5 text-xl">
              Login using your Elrond wallet to access an amazing world.
            </p>
            <Link
              to={routeNames.unlock}
              className="btn btn-link btn-lg ml-auto d-inline-flex"
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
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
