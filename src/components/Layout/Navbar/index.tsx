import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { dAppName } from "config";
import TopInfo from "../../../components/Layout/Navbar/TopInfo";
import { routeNames } from "../../../routes";

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
    <BsNavbar bg="white" expand="lg" collapseOnSelect>
      <Link
        className="d-flex align-items-center navbar-brand mr-0"
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
        <span className="dapp-name text-black font-weight-bold">
          {dAppName}
        </span>
        <span className="ml-3">Devnet</span>
      </Link>
      <BsNavbar.Toggle aria-controls="main-nav" className="border-0" />
      <BsNavbar.Collapse id="main-nav" className="row">
        <Nav className="ml-auto p-3 p-lg-0">
          <NavItem className="d-flex flex-row align-items-center">
            <NavLink
              to={routeNames.Roadmap}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3"
              data-testid="roadmap"
              exact
              activeClassName="active"
            >
              Roadmap
            </NavLink>
          </NavItem>
          <NavItem className="d-flex flex-row align-items-center">
            <NavLink
              to={routeNames.About}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3"
              data-testid="about"
              activeClassName="active"
            >
              About
            </NavLink>
          </NavItem>
          <NavItem className="d-flex flex-row align-items-center">
            <NavLink
              to={routeNames.Contact}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3"
              data-testid="contact"
              activeClassName="active"
            >
              Contact
            </NavLink>
          </NavItem>
          {!loggedIn && (
            <NavLink
              to={routeNames.unlock}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3"
              data-testid="loginBtn"
              activeClassName="active"
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
            </NavLink>
          )}
          {loggedIn && (
            <NavItem className="d-flex flex-row align-items-center ml-3">
              {/*<TopInfo />*/}
              <a
                href="/"
                onClick={logOut}
                className="btn btn-revert text-black"
                title="Logout"
              >
                <svg
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                  fill="currentColor"
                  className="mx-auto"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </NavItem>
          )}
        </Nav>
      </BsNavbar.Collapse>
    </BsNavbar>
  );
};

export default Navbar;
