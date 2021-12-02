import * as React from "react";
import { Link } from "react-router-dom";
import { dAppName } from "config";
import { routeNames } from "routes";

const Home = () => {
  return (
    <div className="flex items-center">
      <div className="w-full">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full">
              <h2 className="mb-3" data-testid="title">
                {dAppName}
              </h2>

              <p className="mb-3">
                This is an Elrond dapp sample.
                <br /> Login using your Elrond wallet.
              </p>

              <Link
                to={routeNames.unlock}
                className="px-6 py-4 border-2 border-black border-solid rounded-lg mt-3"
                data-testid="loginBtn"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
