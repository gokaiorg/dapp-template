import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageState from "components/PageState";
import { contractAddress } from "config";
import { useContext, useDispatch } from "context";
import GokaiWallet from "./GokaiWallet";
import Governance from "./Governance";
import { getTransactions } from "./helpers/asyncRequests";
import TopInfo from "./TopInfo";

const Dashboard = () => {
  const ref = React.useRef(null);
  const { apiAddress, address } = Dapp.useContext();
  const { transactionsFetched } = useContext();
  const dispatch = useDispatch();

  const fetchData = () => {
    getTransactions({
      apiAddress,
      address,
      timeout: 3000,
      contractAddress,
    }).then(({ data, success }) => {
      dispatch({
        type: "setTransactions",
        transactions: data,
        transactionsFetched: success,
      });
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fetchData, []);

  if (transactionsFetched === undefined) {
    return <PageState svgComponent={<></>} spin />;
  }

  if (transactionsFetched === false) {
    return (
      <PageState
        svgComponent={
          <FontAwesomeIcon icon={faBan} className="text-secondary fa-3x" />
        }
        title="Unavailable"
        className="dapp-icon icon-medium"
      />
    );
  }

  return (
    <div className="container my-5 dashboard" ref={ref}>
      <div className="d-flex flex-column container-fluid p-0">
        <h1 className="h1 font-weight-bold mb-3">Dashboard</h1>
        <div className="d-flex flex-column-reverse flex-md-row">
          <TopInfo />
          <GokaiWallet />
        </div>
        <Governance />
      </div>
    </div>
  );
};

export default Dashboard;
