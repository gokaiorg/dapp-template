import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { ReactComponent as ElrondLogo } from "../../assets/img/elrond-symbol.svg";
import Denominate from "../../components/Denominate";

const GokaiWallet = () => {
  const {
    // address,
    account: { balance },
  } = Dapp.useContext();

  return (
    <div
      className="wallet d-inline-flex flex-column bg-white p-3 ml-md-auto mb-3 mb-md-0 overflow-hidden"
      data-testid="Wallet"
    >
      <h2 className="h5 font-weight-bold">Gokai Treasury</h2>
      {/* <span
        className="top-info-address text-black position-relative d-block"
        data-testid="accountAddress"
      >
        {" "}
        {address}
      </span> */}
      <p className="d-flex flex-row align-items-center m-0">
        <p className="mr-2 font-weight-bold">Staked EGLD</p>
        <ElrondLogo className="elrond-symbol text-black" />
        <Denominate value={balance} dataTestId="balance" />
      </p>
    </div>
  );
};

export default GokaiWallet;
