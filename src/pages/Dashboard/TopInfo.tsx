import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { ReactComponent as ElrondLogo } from "../../assets/img/elrond-symbol.svg";
import Denominate from "../../components/Denominate";

const TopInfo = () => {
  const {
    address,
    account: { balance },
  } = Dapp.useContext();

  return (
    <div
      className="top-info d-inline-flex flex-column mr-md-3 bg-white col-md-6 p-3 overflow-hidden"
      data-testid="topInfo"
    >
      <h3 className="h5 font-weight-bold">My account</h3>
      <span
        className="top-info-address text-black position-relative d-block"
        data-testid="accountAddress"
      >
        {" "}
        {address}
      </span>
      <p className="d-flex flex-row align-items-center m-0">
        <p className="mr-2 font-weight-bold">Balance</p>
        <ElrondLogo className="elrond-symbol text-black" />
        <Denominate value={balance} dataTestId="balance" />
      </p>
      <p className="d-flex flex-row align-items-center m-0">
        <p className="mr-2 font-weight-bold">Voting Power</p>
        <p>1</p>
      </p>
    </div>
  );
};

export default TopInfo;
