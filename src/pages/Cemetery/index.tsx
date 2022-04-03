import * as React from "react";
import "animate.css/animate.min.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import All from "./All";
import MyMaiarGhosts from "./MyMaiarGhosts";

const Cemetery = () => {
  return (
    <div className="mr-ghosts-grid bg-mr-ghost-cemetery-bottom text-white d-flex flex-column">
      <h2 className="h1 font-weight-bold my-5 text-center">Cemetery</h2>
      <div className="container position-relative pb-5">
        <Tabs>
          <TabList>
            <Tab>All</Tab>
            <Tab>My Maiar Ghosts</Tab>
          </TabList>
          <TabPanel>
            <All />
          </TabPanel>
          <TabPanel className="text-center">
            <MyMaiarGhosts />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Cemetery;
