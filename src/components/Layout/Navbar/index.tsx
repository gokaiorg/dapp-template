import React from "react";
import * as Dapp from "@elrondnetwork/dapp";
import { Navbar as BsNavbar, NavItem, Nav } from "react-bootstrap";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { dAppName } from "config";
// import { ReactComponent as ElrondLogo } from "./../../../assets/img/elrond.svg";

const Navbar = () => {
  const { loggedIn } = Dapp.useContext();
  const dappLogout = Dapp.useLogout();
  const history = useHistory();

  const logOut = (e: React.MouseEvent) => {
    e.preventDefault();
    dappLogout({ callbackUrl: `${window.location.origin}/` });
    history.push("/");
  };

  return (
    <BsNavbar className="px-4 py-3">
      <div className="container-fluid">
        <Link
          className="d-flex align-items-center navbar-brand mr-0 w-100"
          to={loggedIn ? "/dashboard" : "/"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 138 138"
            className="dapp-logo"
            fill="currentColor"
          >
            <path
              d="M149.734221,59.0185721 C151.253214,58.3705542 152.992036,58.8091696 153.865096,60.5490343 C163.686504,79.9052897 163.959508,103.14861 153.796453,122.456903 C153.148435,123.975896 151.194997,124.622871 149.672876,123.967555 C149.455132,123.749811 149.237388,123.532067 149.019645,123.314324 C148.14867,122.443349 147.927798,120.92227 148.359115,119.619978 C157.223006,102.046337 157.171916,80.7585395 148.223569,63.1421488 C147.568253,61.6200279 148.216271,60.1010349 149.734221,59.0185721 Z M62.124925,31.7853755 C81.6093153,21.7984172 104.750413,21.9691986 123.979835,31.6637733 C125.492491,32.3096248 126.137492,34.2548324 125.485688,35.7700394 C124.833884,37.2852463 122.886126,37.9379007 121.37347,37.2920492 C103.656703,28.2433259 82.6775142,28.5008445 65.141733,37.4025966 C64.0590779,38.0535502 62.5455717,37.8402506 61.4663181,36.7609969 C61.2504673,36.5451462 61.0346166,36.3292955 60.8187659,36.1134448 C59.9570637,34.3849382 60.6097181,32.4371795 62.124925,31.7853755 Z M36.579526,125.84039 C35.4963597,126.490832 33.9808089,126.275488 32.8989995,125.193678 C32.6826376,124.977316 32.4662757,124.760955 32.2499138,124.544593 C22.5210913,105.280922 22.5394083,81.8955211 32.29842,62.6165864 C32.9492017,61.1003571 34.8984939,60.4492363 36.4137055,61.0976435 C37.9289172,61.7460508 38.5769852,63.6943254 37.9262035,65.2105546 C28.8179736,82.9732601 29.0180536,103.976645 37.882107,121.508742 C38.7468761,123.240316 37.8793933,124.973246 36.579526,125.84039 Z M115.458015,136.749061 C108.490957,135.97314 100.493005,132.902477 92.3723976,127.930559 C83.9539185,132.896427 75.6975466,135.771687 68.6404742,136.113121 C83.1376886,144.127238 100.793701,144.339218 115.458015,136.749061 Z M126.523203,128.929855 C126.936112,128.543858 127.344038,128.149495 127.746767,127.746767 C128.149495,127.344038 128.543858,126.936112 128.929855,126.523203 C132.876393,120.749957 130.962822,109.913607 124.284935,98.0407045 C120.913765,102.879093 116.888017,107.694421 112.291219,112.291219 C107.694421,116.888017 102.879093,120.913765 98.0407045,124.284935 C109.913607,130.962822 120.749957,132.876393 126.523207,128.929853 Z M136.749061,115.458015 C144.339218,100.793701 144.127238,83.1376886 136.113121,68.640481 C135.771687,75.6975466 132.896427,83.9539185 127.930559,92.3723976 C132.902477,100.493005 135.97314,108.490957 136.749061,115.458015 Z M68.8595374,49.0535221 C75.8970423,49.4802489 84.1155651,52.3985986 92.5079645,57.3722366 C100.975894,52.3350474 109.290947,49.4067412 116.398783,49.0378625 C101.626781,40.9821627 83.6273566,40.9873825 68.8595374,49.0535221 Z M49.0535221,68.8595374 C40.9873825,83.6273566 40.9821627,101.626781 49.0378625,116.398783 C49.4067412,109.290947 52.3350474,100.975894 57.3722366,92.5079645 C52.3985986,84.1155651 49.4802489,75.8970423 49.0535221,68.8595374 Z M61.0605312,86.8192798 C64.3905771,82.077086 68.3481075,77.3607517 72.8544296,72.8544296 C77.3607517,68.3481075 82.077086,64.3905771 86.8192798,61.0605312 C74.4047416,54.3449698 63.2721237,52.9345182 58.103321,58.103321 C52.9345182,63.2721237 54.3449698,74.4047416 61.0605312,86.8192798 Z M133.606444,130.304344 C133.147654,130.931201 132.63993,131.524614 132.082272,132.082272 C131.524614,132.63993 130.931201,133.147654 130.304344,133.606444 C108.47454,153.705471 74.4746565,153.166458 53.2976058,131.989408 C31.5674647,110.259267 31.5674647,75.0277468 53.2976058,53.2976058 C75.0277468,31.5674647 110.259267,31.5674647 131.989408,53.2976058 C153.166458,74.4746565 153.705471,108.47454 133.606446,130.304342 Z M86.7527933,124.197281 C82.1711956,120.913164 77.6170877,117.053877 73.2530812,112.689871 C68.5767138,108.013503 64.4799042,103.118847 61.0493387,98.2059899 C54.3241293,110.608791 52.9340406,121.78694 58.1463747,126.999274 C63.3325187,132.185418 74.4246763,130.835322 86.7527933,124.197281 Z M92.4276889,120.81863 C97.6549679,117.410381 102.973202,113.123955 108.048578,108.048578 C113.123955,102.973202 117.410381,97.6549679 120.81863,92.4276889 C117.454316,87.4253865 113.304696,82.3531882 108.44723,77.4957219 C103.265257,72.3137487 97.8389025,67.9373576 92.5137351,64.4605927 C87.352234,67.8470207 82.106365,72.0877756 77.0970703,77.0970703 C72.0877756,82.106365 67.8470207,87.352234 64.4605927,92.5137351 C67.9373576,97.8389025 72.3137487,103.265257 77.4957219,108.44723 C82.3531882,113.304696 87.4253865,117.454316 92.4276889,120.81863 Z M124.197281,86.7527933 C130.835322,74.4246763 132.185418,63.3325187 126.999274,58.1463747 C121.78694,52.9340406 110.608791,54.3241293 98.2059899,61.0493387 C103.118847,64.4799042 108.013503,68.5767138 112.689871,73.2530812 C117.053877,77.6170877 120.913164,82.1711956 124.197281,86.7527933 Z M124.184624,154.069389 C104.88683,163.809541 81.6723569,163.998786 62.3512507,154.212527 C62.1340315,153.995308 61.7001113,153.99479 61.4828922,153.777571 C60.6140156,152.908694 60.3952423,151.389715 60.8276084,150.088472 C61.4766756,148.570528 63.4285396,147.921979 64.9480375,148.574673 C82.5324267,157.491018 103.794518,157.516402 121.357667,148.642018 C122.875611,147.992951 124.61181,148.428944 125.481723,150.165661 C126.351117,151.468458 125.919269,153.20362 124.184624,154.069389 Z M40.5,51 C34.7010101,51 30,46.2989899 30,40.5 C30,34.7010101 34.7010101,30 40.5,30 C46.2989899,30 51,34.7010101 51,40.5 C51,46.2989899 46.2989899,51 40.5,51 Z M40.5,43 C41.8807119,43 43,41.8807119 43,40.5 C43,39.1192881 41.8807119,38 40.5,38 C39.1192881,38 38,39.1192881 38,40.5 C38,41.8807119 39.1192881,43 40.5,43 Z M145.5,51 C139.70101,51 135,46.2989899 135,40.5 C135,34.7010101 139.70101,30 145.5,30 C151.29899,30 156,34.7010101 156,40.5 C156,46.2989899 151.29899,51 145.5,51 Z M145.5,43 C146.880712,43 148,41.8807119 148,40.5 C148,39.1192881 146.880712,38 145.5,38 C144.119288,38 143,39.1192881 143,40.5 C143,41.8807119 144.119288,43 145.5,43 Z M40.5,153 C34.7010101,153 30,148.29899 30,142.5 C30,136.70101 34.7010101,132 40.5,132 C46.2989899,132 51,136.70101 51,142.5 C51,148.29899 46.2989899,153 40.5,153 Z M40.5,145 C41.8807119,145 43,143.880712 43,142.5 C43,141.119288 41.8807119,140 40.5,140 C39.1192881,140 38,141.119288 38,142.5 C38,143.880712 39.1192881,145 40.5,145 Z M145.5,153 C139.70101,153 135,148.29899 135,142.5 C135,136.70101 139.70101,132 145.5,132 C151.29899,132 156,136.70101 156,142.5 C156,148.29899 151.29899,153 145.5,153 Z M145.5,145 C146.880712,145 148,143.880712 148,142.5 C148,141.119288 146.880712,140 145.5,140 C144.119288,140 143,141.119288 143,142.5 C143,143.880712 144.119288,145 145.5,145 Z"
              transform="translate(-24 -24)"
            />
          </svg>
          <span className="dapp-name text-secondary">{dAppName}</span>
        </Link>

        <Nav className="ml-auto">
          {loggedIn && (
            <NavItem>
              <a href="/" onClick={logOut}>
                Close
              </a>
            </NavItem>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
