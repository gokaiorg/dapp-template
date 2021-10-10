import * as React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageState from "components/PageState";
import { contractAddress } from "config";
import { useContext, useDispatch } from "context";
import Academy from "./Academy";
import { getTransactions } from "./helpers/asyncRequests";
import Marketplace from "./Marketplace";
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
    <div className="dashboard border-top-main" ref={ref}>
      <div className="container py-4">
        <div className="col-12 col-md-10 px-0 mx-md-auto">
          <h1 className="text-white font-weight-bold my-5">Dashboard</h1>
          <TopInfo />
          <div className="row align-items-stretch">
            <div className="col-12 col-lg-6 mb-4">
              <Marketplace />
            </div>
            <div className="col-12 col-lg-6 mb-4">
              <Academy />
            </div>
          </div>
          <iframe
            src="https://discord.com/widget?id=837354638818803722&theme=dark"
            width="350"
            height="500"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
