import * as React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center">
      <div className="w-full">
        <div className="w-full">
          <div className="w-full">
            <div className="w-full d-flex flex-column justify-content-center">
              <div className="dapp-icon icon-medium">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="mx-auto text-muted fa-3x mb-2"
                />
              </div>
              <span className="h4 empty-heading mt-3">Page not found</span>
              <span className="empty-details">{pathname}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
