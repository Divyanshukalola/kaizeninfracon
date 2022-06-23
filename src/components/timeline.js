import React from "react";

// import { IconName } from "react-icons/bs";

const Timeline = (props) => {
  let count = 0;

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

  return (
    <>
      <div
        style={{
          overflowX: "scroll",
          width: "100%",
        }}
      >
        {organiseData(props.items, 100).map((obj1, index1) => {
          return (
            <>
              <div className=" Timeline-container-2-block my-3">
                {obj1.map((obj, index) => {
                  count++;
                  return (
                    <>
                      <div className="MuiGrid-root Timeline-container-2">
                        {index === 0 && index1 === 0 ? (
                          <div class="MuiGrid-root">
                            <div class="MuiGrid-root TimelineEvent-container-4">
                              <svg
                                stroke="currentColor"
                                fill="white"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                class="TimelineEvent-icon-5"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="8" cy="8" r="8"></circle>
                              </svg>
                              <svg
                                width="225"
                                height="187"
                                viewBox="0 0 59.531 49.477"
                              >
                                <g transform="matrix(.99959 0 0 .99838 -100.96 -38.57)">
                                  <path
                                    d="M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z"
                                    fill="#D0D3D4"
                                    stroke-width="0.24"
                                  ></path>
                                  <circle
                                    cx="130.726"
                                    cy="73.838"
                                    r="1.522"
                                    fill="#fff"
                                    stroke-width="0.15"
                                  ></circle>
                                  <circle
                                    cx="130.78"
                                    cy="48.202"
                                    r="9.57"
                                    fill="#D0D3D4"
                                    stroke-width="0.194"
                                  ></circle>
                                  <rect
                                    width="0.794"
                                    height="14.363"
                                    x="130.383"
                                    y="56.309"
                                    ry="0"
                                    fill="#D0D3D4"
                                    stroke-width="0.108"
                                  ></rect>
                                </g>
                              </svg>
                              <div class="MuiGrid-root TimelineEvent-textContainer-14">
                                <h6 class="MuiTypography-root MuiTypography-h6">
                                  {obj[1].tag}
                                </h6>
                                <span class="MuiTypography-root MuiTypography-caption">
                                  {new Date(
                                    obj[1].date.seconds * 1000
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div class="MuiGrid-root Timeline-middle-3">
                            <div class="MuiGrid-root TimelineEvent-container-4">
                              {count === props.items.length ? (
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 16 16"
                                  class="TimelineEvent-icon-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
                                </svg>
                              ) : (
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 16 16"
                                  class="TimelineEvent-icon-5"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                </svg>
                              )}

                              <svg
                                width="225"
                                height="187"
                                viewBox="0 0 59.531 49.477"
                              >
                                <g transform="matrix(.99959 0 0 .99838 -100.96 -38.57)">
                                  <path
                                    d="M101.002 69.656h55.492l4.064 4.158-4.064 4.205h-55.492l3.85-4.205z"
                                    fill={
                                      count === props.items.length
                                        ? "#9c2919"
                                        : "#87a2c7"
                                    }
                                    stroke-width="0.24"
                                  ></path>
                                  <circle
                                    cx="130.726"
                                    cy="73.838"
                                    r="1.522"
                                    fill="#fff"
                                    stroke-width="0.15"
                                  ></circle>
                                  <circle
                                    cx="130.78"
                                    cy="48.202"
                                    r="9.57"
                                    fill={
                                      count === props.items.length
                                        ? "#9c2919"
                                        : "#87a2c7"
                                    }
                                    stroke-width="0.194"
                                  ></circle>
                                  <rect
                                    width="0.794"
                                    height="14.363"
                                    x="130.383"
                                    y="56.309"
                                    ry="0"
                                    fill={
                                      count === props.items.length
                                        ? "#9c2919"
                                        : "#87a2c7"
                                    }
                                    stroke-width="0.108"
                                  ></rect>
                                </g>
                              </svg>
                              <div class="MuiGrid-root TimelineEvent-textContainer-14">
                                <h6 class="MuiTypography-root MuiTypography-h6">
                                  {obj[1].tag}
                                </h6>
                                <span class="MuiTypography-root MuiTypography-caption">
                                  {new Date(
                                    obj[1].date.seconds * 1000
                                  ).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>{" "}
                    </>
                  );
                })}
              </div>

              <br />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
