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
              Where dapp Elrond communities meet
            </h1>
            <p className="mb-5 text-xl">
              Login using your Elrond wallet to access an amazing world.
            </p>
            <Link
              to={routeNames.unlock}
              className="btn btn-link btn-lg ml-auto bg-white"
              data-testid="loginBtn"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
