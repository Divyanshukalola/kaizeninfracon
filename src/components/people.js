import React, { useEffect, useState } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";
import readData from "./functions/DB";

function People() {
  const [team, setteam] = useState([]);
  const [team1, setteam1] = useState([]);
  // const team = [
  //   {
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FSanjay.png?alt=media&token=c016cc93-3833-413e-93a3-ce2253f404b4",
  //     name: "Mr. Sanjay Savani",
  //     pos: "Project Coordinator (General)",
  //   },
  //   {
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fgirdhar.png?alt=media&token=25e33b71-bc53-408f-9b7d-88a0ce7c0c44",
  //     name: "Mr. Girdhar Rangani",
  //     pos: "Project Coordinator (General)",
  //   },
  //   {
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fjeel.png?alt=media&token=04f14a14-d766-4b96-a2a0-aa006fd423bd",
  //     name: "Mr. Jeel Savani",
  //     pos: "Civil Engineer (Technical & Planning)",
  //   },
  //   {
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fnilesh.png?alt=media&token=3eaaae5a-5fd4-44d5-b82b-e1f90fd996f0",
  //     name: "Mr. Nilesh Vyas",
  //     pos: "Sr. Manager Finance & Accounts",
  //   },
  //   {
  //     img:
  //       "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FsanjayR.png?alt=media&token=9d59ec5f-cfb4-4eab-8e75-0b745e842f77",
  //     name: "Mr. Sanjay Radadiya",
  //     pos: "Manager ( Purchaser & Store)",
  //   },
  // ];

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
  useEffect(() => {
    window.scrollTo(0, 0);
    // var items = false;
    readData("team").then((e) => {
      setteam(e.sort((a, b) => a.rank - b.rank));

    });
    readData("keyperson").then((e) => {
      setteam1(e);
    });
  }, []);

  return (
    <div className="Projects">
      {/* navigation  */}
      <Topnavigation team="true"></Topnavigation>
      <br />
      <br />
      <br />
      <br />
      <div className="row container mx-sm-5 mx-2" style={{ width: "97%" }}>
        <div className="col">
          <p style={{ textTransform: "uppercase" }}>The team</p>

          <h1>
            Meet our team of <span style={{ color: "#ff5e10" }}>experts</span>
            <br /> that helps us achieve our goals
            <span style={{ color: "#ff5e10" }}>.</span>
          </h1>
          <h6 style={{ lineHeight: "1.8" }}>
            It requires a passionate team of individuals whose sole objective is
            to utilise their skills to the fullest in order to be the company
            our clients want us to be. Learn more about the Untitled employees
            who are paving the way.
          </h6>
          <br />
          <br />
        </div>
      </div>
      <hr />
      {organiseData(team, 3).map((obj1) => {
        return (
          <>
            <div className="row justify-content-center">
              {" "}
              {obj1.map((obj) => {
                return (
                  <div className="col-sm-3 my-4  mr-sm-5 mx-3 ">
                    <div className="d-flex justify-content-end">
                      <div className="col">
                        <img src={obj.link} alt="" className="teamImage" />
                        <h6 className="mt-3">
                          {obj.fname} {obj.lname}
                        </h6>
                        <small>{obj.description}</small>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
      <hr />
      <div className="row my-5">
        <div className="col text-center">
          <h1>
            Key Personal
            <span style={{ color: "#ff5e10" }}>.</span>
          </h1>
          {/* <h4 style={{ textTransform: "uppercase" }}>Key Personal</h4> */}
        </div>
      </div>
      <div className="row tableFont">
        <div className="col">
          <div className="row mx-sm-5 ">
            <div className="col mx-sm-3 my-3">
              <div className="row">
                <div className="col-2" style={{ fontWeight: "bold" }}>
                  Sr.
                </div>
                <div className="col-3" style={{ fontWeight: "bold" }}>
                  Name
                </div>
                <div className="col" style={{ fontWeight: "bold" }}>
                  Designation
                </div>
                <div className="col tableHide" style={{ fontWeight: "bold" }}>
                  Graduation
                </div>
                <div className="col tableHide" style={{ fontWeight: "bold" }}>
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {team1 ? (
        <>
          {organiseData(team1, 1).map((obj, index) => {
            return (
              <div className="row tableFont">
                {obj.map((obj1) => {
                  return (
                    <div className="col">
                      <div className="row mx-sm-5 my-1 border ">
                        <div className="col mx-sm-3 my-3">
                          <div className="row">
                            <div className="col-2">{index + 1}</div>
                            <div className="col-3">
                              <h6>{obj1.name}</h6>
                            </div>
                            <div className="col">
                              <h6>{obj1.designation}</h6>
                            </div>
                            <div className="col tableHide">
                              <h6>{obj1.graduation}</h6>
                            </div>
                            <div className="col tableHide">
                              <h6>{obj1.experience}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      ) : null}
      <hr />
      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default People;
