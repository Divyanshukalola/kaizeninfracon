import * as React from "react";
import mainlogo from "./../static/img/logo2big.png";
import Topnavigation from "./nav";

function CommingSoon() {
  return (
    <div className="App">
      {" "}
      <Topnavigation></Topnavigation>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="row text-center mt-5">
        <div className="col">
          <img src={mainlogo} alt="logo" height={"150px"} />
        </div>
      </div>
      <div className="row text-center mt-5">
        <div className="col">
          <h4>Comming Soon ...</h4>
        </div>
      </div>
    </div>
  );
}

export default CommingSoon;
