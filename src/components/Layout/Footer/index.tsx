import React from "react";
import { ReactComponent as HeartIcon } from "../../../assets/img/heart.svg";

const Footer = () => {
  return (
    <footer className="text-right mt-2 mb-3 container-fluid">
      <div>
        <a
          {...{
            target: "_blank",
          }}
          className="d-flex align-items-center"
          href="https://elrond.com/"
        >
          Made with <HeartIcon className="mx-1" /> by Elrond World.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
