import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row my-5">
        <div className="col-7 my-5 text-left">
          <p>Copyright ©2019 Mugli. All Rights Reserved</p>
        </div>
        <div className="col my-5">
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
