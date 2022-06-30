import React, { useEffect } from "react";

import Footer from "./footer";

import Topnavigation from "./nav";


function People() {
  const team = [
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FSanjay.png?alt=media&token=c016cc93-3833-413e-93a3-ce2253f404b4",
      name: "Mr. Sanjay Savani",
      pos: "Project Coordinator (General)",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fgirdhar.png?alt=media&token=25e33b71-bc53-408f-9b7d-88a0ce7c0c44",
      name: "Mr. Girdhar Rangani",
      pos: "Project Coordinator (General)",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fjeel.png?alt=media&token=04f14a14-d766-4b96-a2a0-aa006fd423bd",
      name: "Mr. Jeel Savani",
      pos: "Civil Engineer (Technical & Planning)",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2Fnilesh.png?alt=media&token=3eaaae5a-5fd4-44d5-b82b-e1f90fd996f0",
      name: "Mr. Nilesh Vyas",
      pos: "Sr. Manager Finance & Accounts",
    },
    {
      img:
        "https://firebasestorage.googleapis.com/v0/b/kaizeninfracon-15b66.appspot.com/o/images%2Fpeople%2FsanjayR.png?alt=media&token=9d59ec5f-cfb4-4eab-8e75-0b745e842f77",
      name: "Mr. Sanjay Radadiya",
      pos: "Manager ( Purchaser & Store)",
    },
  ];

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
            <div className="row d-flex justify-content-center containter mr-sm-5 mx-5">
              {" "}
              {obj1.map((obj) => {
                return (
                  <div className="col-sm-4 my-4 justify-content-center">
                    <img src={obj.img} alt="" className="teamImage" />
                    <h6 className="mt-3">{obj.name}</h6>
                    <small>{obj.pos}</small>
                  </div>
                );
              })}
            </div>
          </>
        );
      })}

      {/* footer  */}
      <br />
      <div className="mx-5 my-5">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default People;
