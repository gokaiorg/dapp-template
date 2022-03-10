import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { routeNames } from "../../../routes";
import TopInfo from "../Navbar/TopInfo";

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
    <BsNavbar bg="black" expand="lg" collapseOnSelect>
      <Link
        className="d-flex align-items-center navbar-brand mr-0 text-white font-weight-bold"
        to={loggedIn ? "/" : "/"}
      >
        <svg
          className="dapp-logo"
          viewBox="0 0 255 396"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            fill="rgb(255, 255, 255)"
            d="M52.0,0.0 C106.661,0.0 161.338,0.0 215.999,0.0 C215.666,18.331 215.333,36.668 215.0,54.999 C179.336,54.666 143.663,54.333 107.999,54.0 C107.999,71.998 107.999,90.1 107.999,107.999 C90.1,107.999 71.998,107.999 53.999,107.999 C53.999,160.994 53.999,214.5 53.999,267.0 C107.327,267.0 160.672,267.0 214.0,267.0 C214.0,249.668 214.0,232.331 214.0,215.0 C178.3,215.0 141.996,215.0 106.0,215.0 C106.0,196.668 106.0,178.331 106.0,159.999 C159.994,159.999 214.5,159.999 268.0,159.999 C268.0,214.327 268.0,268.672 268.0,323.0 C250.335,323.0 232.664,323.0 215.0,323.0 C215.333,340.331 215.666,357.668 215.999,375.0 C179.337,375.0 142.662,375.0 106.0,375.0 C106.0,357.335 106.0,339.664 106.0,321.999 C70.670,322.333 35.329,322.666 0.0,323.0 C0.0,232.675 0.0,142.324 0.0,51.999 C17.664,51.999 35.335,51.999 52.999,51.999 C52.666,34.668 52.333,17.331 52.0,0.0 Z"
          />
        </svg>
        <span className="dapp-name text-4xl font-weight-normal">okai Labs</span>
        <span className="ml-3 text-secondary font-weight-light">Devnet</span>
      </Link>
      <BsNavbar.Toggle aria-controls="main-nav" className="border-0 bg-white" />
      <BsNavbar.Collapse id="main-nav" className="row bg-black">
        <Nav className="ml-auto p-3 p-lg-0">
          <NavItem className="d-flex flex-row align-items-center">
            <NavLink
              to={routeNames.MrGhosts}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3 font-weight-bold"
              data-testid="about"
              activeClassName="active"
            >
              Maiar Ghosts
            </NavLink>
          </NavItem>
          {!loggedIn && (
            <NavLink
              to={routeNames.unlock}
              className="btn btn-link btn-navbar btn-lg ml-auto d-inline-flex ml-3 font-weight-bold"
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
            <NavItem className="d-flex flex-row align-items-center ml-3 font-weight-bold">
              <TopInfo />
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
