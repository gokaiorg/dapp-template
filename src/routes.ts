import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { dAppName } from "config";
import withPageTitle from "./components/PageTitle";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MrGhosts from "./pages/MrGhosts";
import Transaction from "./pages/Transaction";

type RouteType = Dapp.RouteType & { title: string };

export const routeNames = {
  MrGhosts: "/maiar-ghosts",
  home: "/",
  dashboard: "/dashboard",
  transaction: "/transaction",
  unlock: "/unlock",
  ledger: "/ledger",
  walletconnect: "/walletconnect",
};

const routes: RouteType[] = [
  {
    path: "/maiar-ghosts",
    title: "MrGhosts",
    component: MrGhosts,
  },
  {
    path: "/",
    title: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    component: Dashboard,
    authenticatedRoute: true,
  },
  {
    path: "/transaction",
    title: "Transaction",
    component: Transaction,
  },
];

const wrappedRoutes = () =>
  routes.map((route) => {
    const title = route.title
      ? `${dAppName} | Community-driven collectible NFT DAO on Elrond Network`
      : `${dAppName}`;
    return {
      path: route.path,
      authenticatedRoute: Boolean(route.authenticatedRoute),
      component: withPageTitle(
        title,
        route.component,
      ) as any as React.ComponentClass<any, any>,
    };
  });

export default wrappedRoutes();
