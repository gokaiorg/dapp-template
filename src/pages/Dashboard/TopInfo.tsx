import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { contractAddress } from "config";
import Denominate from "./../../components/Denominate";

const TopInfo = () => {
  const {
    address,
    account: { balance },
  } = Dapp.useContext();

  return (
    <div
      className="d-inline-flex flex-column text-white border-block text-xl w-100"
      data-testid="topInfo"
    >
      <h2 className="font-weight-bold">Profile</h2>
      <div className="mb-1">
        <span className="opacity-6 mr-1">Your address:</span>
        <span data-testid="accountAddress"> {address}</span>
      </div>
      <div className="mb-4">
        <span className="opacity-6 mr-1">Contract address:</span>
        <span data-testid="contractAddress"> {contractAddress}</span>
      </div>
      <div>
        <h3 className="py-2">
          <Denominate value={balance} dataTestId="balance" />
        </h3>
      </div>
    </div>
  );
};

export default TopInfo;
