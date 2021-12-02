import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { dAppName } from "config";
import routes, { routeNames } from "../../../routes";
import { Menu } from "@headlessui/react";
import { classNames } from "@headlessui/react/dist/utils/class-names";
import * as config from "../../../config";
import PageNotFoud from "../../PageNotFoud";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push("/");
  };

  return (
    <nav className="bg-gray-800 fixed flex items-center w-full z-10">
      <Link
        className="flex items-center mr-auto p-6"
        to={loggedIn ? "/dashboard" : "/"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white mr-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
        <span className="text-white text-2xl">{dAppName}</span>
      </Link>
      <ul className="items-center hidden md:flex">
        {loggedIn && (
          <li className="mx-3">
            <a href="/" onClick={logOut}>
              Close
            </a>
          </li>
        )}
      </ul>
      <div className="relative inline-block text-left p-6">
        <Menu>
          <Menu.Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Menu.Button>
          <Menu.Items>
            <div className="absolute h-screen top-full right-0 w-56 origin-top-right bg-gray-700 focus:outline-none">
              <Switch>
                <Route
                  path={routeNames.unlock}
                  component={() => (
                    <Dapp.Pages.Unlock
                      callbackRoute={routeNames.dashboard}
                      title={config.dAppName}
                      lead="Please select your login method:"
                      ledgerRoute={routeNames.ledger}
                      walletConnectRoute={routeNames.walletconnect}
                    />
                  )}
                  exact={true}
                />
                <Route
                  path={routeNames.ledger}
                  component={() => (
                    <Dapp.Pages.Ledger callbackRoute={routeNames.dashboard} />
                  )}
                  exact={true}
                />
                <Route
                  path={routeNames.walletconnect}
                  component={() => (
                    <Dapp.Pages.WalletConnect
                      callbackRoute={routeNames.dashboard}
                      logoutRoute={routeNames.home}
                      title="Maiar Login"
                      lead="Scan the QR code using Maiar"
                    />
                  )}
                  exact={true}
                />

                {routes.map((route, i) => (
                  <Route
                    path={route.path}
                    key={route.path + i}
                    component={route.component}
                    exact={true}
                  />
                ))}
                <Route component={PageNotFoud} />
              </Switch>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
