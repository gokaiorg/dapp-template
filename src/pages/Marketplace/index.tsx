import * as React from "react";

const Marketplace = () => {
  const ref = React.useRef(null);

  return (
    <div className="marketplace border-top-main" ref={ref}>
      <div className="container py-5">
        <div className="col-12 col-md-10 mx-auto">
          <a href={"../dashboard/"} title="Dashboard" className="text-white">
            Back to dashboard
          </a>
          <h1 className="text-white font-weight-bold my-5">Marketplace</h1>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
