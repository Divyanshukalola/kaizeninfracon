import React, { useEffect } from "react";

import Footer from "./../footer";

import { useNavigate } from "react-router-dom";

import Topnavigation from "./../nav";

function Error404(props) {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [page1, setPage1] = React.useState(1);
  const handleChange1 = (event, value) => {
    setPage1(value);
  };
  const [page2, setPage2] = React.useState(1);
  const handleChange2 = (event, value) => {
    setPage2(value);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // console.log(props.news);
  function organiseData(array, size) {
    var perChunk = size; // items per chunk

    var inputArray = array;

    var result = inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / perChunk);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    return result;
  }

  // function dateConvert(date) {
  //   var t = new Date(1970, 0, 1); // Epoch
  //   t.setSeconds(date);
  //   return t;
  // }
  return (
    <div className="Services">
      {/* navigation  */}
      <Topnavigation news="true"></Topnavigation>

      {/* footer  */}
      <br />
      <br />
      <br />
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h1 style={{ color: "white", fontSize: "180px" }}>404</h1>
        </div>
      </div>
      <div className="row">
        <div
          className="col d-flex justify-content-center"
          style={{ color: "white" }}
        >
          <div>
            {" "}
            <h1>Relax, take is easy.</h1>
          </div>

          <br />
        </div>
      </div>
      <div className="row my-5">
        <div
          className="col d-flex justify-content-center"
          style={{ color: "white" }}
        >
          <div>
            {" "}
            <h6>
              Click <a href="/">here</a>
            </h6>
          </div>

          <br />
        </div>
      </div>
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Error404;
