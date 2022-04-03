import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import ReactGA from "react-ga";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "components/Layout/ScrollToTop";
import Layout from "./components/Layout";
import PageNotFoud from "./components/PageNotFoud";
import * as config from "./config";
import { ContextProvider } from "./context";
import routes, { routeNames } from "./routes";

ReactGA.initialize("UA-134167011-1");
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  return (
    <Dapp.Context config={config}>
      <ContextProvider>
        <Layout>
          <ScrollToTop />
          <Switch>
            <Route
              path={routeNames.unlock}
              component={() => (
                <Dapp.Pages.Unlock
                  callbackRoute={routeNames.home}
                  title={config.dAppName}
                  lead="Connect to a wallet"
                  ledgerRoute={routeNames.ledger}
                  walletConnectRoute={routeNames.walletconnect}
                />
              )}
              exact={true}
            />
            <Route
              path={routeNames.ledger}
              component={() => (
                <Dapp.Pages.Ledger callbackRoute={routeNames.home} />
              )}
              exact={true}
            />
            <Route
              path={routeNames.walletconnect}
              component={() => (
                <Dapp.Pages.WalletConnect
                  callbackRoute={routeNames.home}
                  logoutRoute={routeNames.home}
                  title="Maiar Login"
                  lead="Scan the QR code using Maiar"
                />
              )}
              exact={true}
            />
            {routes.map((route, i) => (
              <Route
                path={route.path}
                key={route.path + i}
                component={route.component}
                exact={true}
              />
            ))}
            <Route component={PageNotFoud} />
          </Switch>
        </Layout>
      </ContextProvider>
    </Dapp.Context>
  );
}
