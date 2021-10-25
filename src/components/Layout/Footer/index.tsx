import React from "react";
import Social from "./social";

const Footer = () => {
  return (
    <footer className="text-right mt-2 mb-3 container-fluid">
      <div className="d-flex flex-column flex-md-row w-100 align-items-center">
        <Social />
        <p className="ml-md-auto d-flex align-items-center text-black mb-0">
          Made with
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="text-black social-icon mx-2"
            fill="currentColor"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
          by Gokai Labs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
