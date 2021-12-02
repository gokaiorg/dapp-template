import * as React from "react";

const PageState = ({
  title,
  description,
  svgComponent,
  className,
  spin = false,
}: {
  title?: string;
  description?: string | React.ReactNode;
  svgComponent: React.ReactNode;
  className?: string;
  spin?: boolean;
}) => {
  return (
    <div className="flex items-center page-state">
      <div className="w-full">
        {spin ? (
          <div className="col-12 text-center" data-testid="loader">
            <div className="lds-ellipsis mx-auto mt-5 mb-5">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="card shadow-sm rounded p-5 border-0">
              <div className="w-full d-flex flex-column justify-content-center">
                <div className={`icon ${className ? className : ""}`}>
                  {svgComponent}
                </div>
                {title && <p className="h3 mt-3">{title}</p>}
                {description && <div className="mt-3">{description}</div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageState;
