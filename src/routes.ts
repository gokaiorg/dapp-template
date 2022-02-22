import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { dAppName } from "config";
import withPageTitle from "./components/PageTitle";
import About from "./pages/About";
import Cemetery from "./pages/Cemetery";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import MrGhosts from "./pages/MrGhosts";
import Roadmap from "./pages/Roadmap";
import Transaction from "./pages/Transaction";

type RouteType = Dapp.RouteType & { title: string };

export const routeNames = {
  About: "/about",
  Cemetery: "/cemetery",
  Roadmap: "/roadmap",
  MrGhosts: "/mr-ghosts",
  home: "/",
  dashboard: "/dashboard",
  transaction: "/transaction",
  unlock: "/unlock",
  ledger: "/ledger",
  walletconnect: "/walletconnect",
};

const routes: RouteType[] = [
  {
    path: "/roadmap",
    title: "Roadmap",
    component: Roadmap,
  },
  {
    path: "/about",
    title: "About",
    component: About,
  },
  {
    path: "/cemetery",
    title: "Cemetery",
    component: Cemetery,
  },
  {
    path: "/mr-ghosts",
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
    const title = route.title ? `${route.title} - ${dAppName}` : `${dAppName}`;
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
