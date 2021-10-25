import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { dAppName } from "config";

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
    <BsNavbar className="p-0">
      <div className="container-fluid bg-white p-3">
        <Link
          className="d-flex align-items-center navbar-brand mr-0 w-100"
          to={loggedIn ? "/dashboard" : "/"}
        >
          <svg
            className="dapp-logo"
            fill="currentColor"
            viewBox="0 0 255 396"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" strokeLinecap="round">
              <path
                d="M241.052502,12.7714358 C158.66596,21.4332536 12.8718865,73.0257773 12.8718865,241.823057 C12.8718865,370.87957 113.034972,382.544298 151.930611,382.544298 C190.501773,382.544298 242.052502,357.391985 242.052502,298.901663 C242.052502,271.873876 226.549054,235.605894 186.862107,235.605894 C162.5632,235.605894 150.930611,254.196925 150.930611,269.876476 C150.930611,285.556028 161.459592,293.403498 175.593211,293.403498 C188.99272,293.403498 187.826525,275.063609 180.73357,275.063609"
                stroke="#000"
                strokeWidth="25"
              />
            </g>
          </svg>
          <span className="dapp-name text-secondary font-weight-bold">
            {dAppName}
          </span>
        </Link>
        <Nav className="ml-auto">
          {loggedIn && (
            <NavItem>
              <a
                href="/"
                onClick={logOut}
                className="btn btn-revert text-black"
              >
                Logout
              </a>
            </NavItem>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
