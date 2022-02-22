import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
// import { ReactComponent as ElrondLogo } from "./../../../assets/img/elrond-symbol.svg";
// import Denominate from "./../../../components/Denominate";

const TopInfo = () => {
  const {
    address,
    // account: { balance },
  } = Dapp.useContext();

  return (
    <div
      className="top-info d-inline-flex flex-row align-items-center mr-3"
      data-testid="topInfo"
    >
      <span
        className="top-info-address text-white text-truncate position-relative d-block"
        data-testid="accountAddress"
      >
        {" "}
        {address}
      </span>
      {/* <p className="d-flex flex-row align-items-center m-0">
        <ElrondLogo className="elrond-symbol text-black" />
        <Denominate value={balance} dataTestId="balance" />
      </p> */}
    </div>
  );
};

export default TopInfo;
