import React from "react";

function Charts({ financial }) {
  console.log(financial);
  const currentYear = new Date().getFullYear();
  function mapValues(output_start, output_end, input_start, input_end, input) {
    var new_value =
      ((input - input_start) / (input_end - input_start)) *
        (output_end - output_start) +
      output_start;
    return new_value;
  }

  function getMaxValue(arr) {
    var value = 0;
    for (var i = 0; i < arr.length; i++) {
      if (i + 1 < arr.length) {
        if (arr[i] < arr[i + 1]) {
          value = arr[i + 1];
        } else {
          value = arr[i];
        }
      }
    }

    return parseFloat(value);
  }

  function range(steps, max) {
    var divider = (Math.round(Math.ceil(max / 1000)) * 1000) / steps;
    var changingsum = 0 - divider;
    const filledArray = [...Array(steps + 1)].map(() => {
      return (changingsum += divider);
    });
    return filledArray.reverse();
  }

  return (
    <>
      {financial.length !== 0 ? (
        <>
          {" "}
          <div className="row align-items-end mx-5 mt-5">
            <div className="col">
              <div className="row">
                <div className="col text-center">
                  Annual Turnover <hr />
                </div>
              </div>
              <div className="row" style={{ height: "60.5vh" }}>
                <div className="col-1 page-break container text-right">
                  {range(10, getMaxValue(financial[5]["Annual Turnover"])).map(
                    (obj) => {
                      return (
                        <>
                          <div className="row">
                            <div className="col " style={{ fontSize: "10px" }}>
                              {obj}
                            </div>
                          </div>
                        </>
                      );
                    }
                  )}
                </div>
                <div className="col">
                  <div
                    className="row align-items-end grid border text-center"
                    style={{ height: "60vh" }}
                  >
                    {financial[5]["Annual Turnover"].map((obj) => {
                      return (
                        <>
                          {console.log(
                            getMaxValue(financial[5]["Annual Turnover"])
                          )}

                          <div
                            className="col mx-5"
                            style={{
                              backgroundColor: "#A6ACAF",
                              height: `${mapValues(
                                0,
                                60,
                                0,
                                Math.round(
                                  Math.ceil(
                                    getMaxValue(
                                      financial[5]["Annual Turnover"]
                                    ) / 1000
                                  )
                                ) * 1000,
                                parseFloat(obj)
                              )}vh`,
                            }}
                          >
                            <h6
                              className="my-3"
                              style={{ fontSize: "12px", color: "white" }}
                            >
                              {obj} Lakh Rs.
                            </h6>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mx-5 my-2">
            <div className="col-1"></div>
            <div className="col">
              <div className="row ">
                <div className="col text-center" style={{ fontSize: "12px" }}>
                  FY {currentYear - 3} - {currentYear - 2}
                </div>
                <div className="col text-center" style={{ fontSize: "12px" }}>
                  FY {currentYear - 2} - {currentYear - 1}
                </div>
                <div className="col text-center" style={{ fontSize: "12px" }}>
                  FY {currentYear - 1} - {currentYear}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Charts;
