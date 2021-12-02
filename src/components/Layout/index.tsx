import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import routes, { routeNames } from "routes";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { loggedIn } = Dapp.useContext();
  const refreshAccount = Dapp.useRefreshAccount();

  React.useEffect(() => {
    if (loggedIn) {
      refreshAccount();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <main className="pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4">
        <Dapp.Authenticate routes={routes} unlockRoute={routeNames.unlock}>
          {children}
        </Dapp.Authenticate>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
