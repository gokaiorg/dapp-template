import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { routeNames } from "../../../routes";
import TopInfo from "../Navbar/TopInfo";

const NavbarGhosts = () => {
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
        className="d-flex align-items-center NavbarGhosts-brand mr-0"
        to={loggedIn ? "/maiar-ghosts" : "/maiar-ghosts"}
      >
        <span className="h3 text-white font-weight-bold">Mr Ghosts</span>
      </Link>
      <BsNavbar.Toggle aria-controls="main-nav" className="border-0" />
      <BsNavbar.Collapse id="main-nav" className="row">
        <Nav className="ml-auto p-3 p-lg-0">
          <NavItem className="d-flex flex-row align-items-center">
            <NavLink
              to={routeNames.Cemetery}
              className="btn btn-link btn-NavbarGhosts btn-lg ml-auto d-inline-flex ml-3 font-weight-bold"
              data-testid="cemetery"
              activeClassName="active"
            >
              My Cemetery
            </NavLink>
          </NavItem>
          {!loggedIn && (
            <NavLink
              to={routeNames.unlock}
              className="btn btn-link btn-NavbarGhosts btn-lg ml-auto d-inline-flex ml-3 font-weight-bold"
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
                className="btn btn-NavbarGhosts text-white"
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

export default NavbarGhosts;
