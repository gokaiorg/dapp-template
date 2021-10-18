import * as React from "react";
import { routeNames } from "../../routes";
import { Link } from "react-router-dom";

const Metaverse = () => {
  const ref = React.useRef(null);

  return (
    <div className="metverse border-top-main" ref={ref}>
      <div className="container py-5">
        <div className="col-12 col-md-10 mx-auto">
          <Link to={routeNames.dashboard} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white social-icon mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="24px"
            >
              <path d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to dashboard
          </Link>
          <h1 className="text-white font-weight-bold mb-5">Metaverse</h1>
          <p className="text-xl text-white my-5">Coming soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Metaverse;
