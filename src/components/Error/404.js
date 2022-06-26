import React, { useEffect } from "react";

import Footer from "./../footer";



import Topnavigation from "./../nav";

function Error404() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props.news);

  // function dateConvert(date) {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(date);
  //   return t;
  // }
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation></Topnavigation>

      {/* footer  */}
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h1
            style={{
              color: "#ff5e10",
              fontSize: "180px",
            }}
          >
            404
          </h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col d-flex justify-content-center"
          style={{ color: "#1c3e44" }}
        >
          <div>
            {" "}
            <h1>Relax, take it easy.</h1>
          </div>

          <br />
        </div>
      </div>
      <div className="row my-5">
        <div
          className="col d-flex justify-content-center"
          style={{ color: "#1c3e44" }}
        >
          <div>
            {" "}
            <h5>
              Click{" "}
              <a href="/" style={{ color: "#ff5e10" }}>
                here
              </a>{" "}
              and navigate to safe place.
            </h5>
          </div>

          <br />
        </div>
      </div>
      <br />

      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Error404;
