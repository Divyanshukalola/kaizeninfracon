import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="col-7 text-left">
          <p>Copyright ©2019 Mugli. All Rights Reserved</p>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                About{" "}
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                News{" "}
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                Over Events{" "}
              </button>
            </div>
            <div className="col">
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "transparent",
                }}
              >
                Contact us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
