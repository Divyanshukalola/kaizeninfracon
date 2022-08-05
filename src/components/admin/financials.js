import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "./../../firebase-config";
// import Button from "@mui/material/Button";

import readData from "./../functions/DB";

// import { v4 } from "uuid";

function AdminFinancial() {
  const [loading, setLoading] = useState(false);
  const [financial, setfinancial] = useState([]);

  // const [id] = useState(v4());
  const { register, getValues } = useForm({});
  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;
  console.log(previousYear);
  useEffect(() => {
    window.scrollTo(0, 0);
    readData("financial").then((e) => {
      setfinancial(e[0].financial);
    });
  }, []);
  // const dataCollectionRef1 = collection(db, "financial");

  //write Data
  // async function writeDataNews() {
  //   setLoading(true);

  //   await addDoc(dataCollectionRef1, {
  //     name: getValues("name"),
  //     designation: getValues("desig"),
  //     graduation: getValues("grad"),
  //     experience: getValues("exp"),
  //     teamID: id,
  //   });

  //   await setTimeout(function() {
  //     setLoading(false);
  //     window.location.reload(false);
  //   }, 1000);
  // }

  // console.log(props.news);

  async function View() {
    alert(JSON.stringify(getValues()));
    console.log(getValues("financial"));
    // await addDoc(dataCollectionRef1, {
    //   financial: getValues("financial"),
    // });
    const projDoc = doc(db, "financial", "xKwjnFrkqUEbdFWdeiL3");
    setLoading(true);
    await updateDoc(projDoc, { financial: getValues("financial") });
    await setTimeout(function() {
      setLoading(false);
      window.location.reload(false);
    }, 1000);
  }

  return (
    <>
      {" "}
      <br />
      {/* news  */}
      <div className="row text-center">
        <div className="col">
          <h3>My Financial</h3>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <br />
          <div className="row mx-5" style={{ fontWeight: "bold" }}>
            <div className="col-1 border text-center">Sr. No.</div>
            <div className="col-5 border text-center">Particulars</div>
            <div className="col">
              <div className="row">
                <div className="col border text-center">
                  Audited (Rs. In Lakh)
                </div>
              </div>
              <div className="row">
                <div className="col border text-center">
                  {currentYear - 4} - {currentYear - 3}
                </div>
                <div className="col border text-center">
                  {currentYear - 3} - {currentYear - 2}
                </div>
                <div className="col border text-center">
                  {currentYear - 2} - {currentYear - 1}
                </div>
              </div>
            </div>
          </div>

          {financial.map((obj, index) => {
            return (
              <>
                {" "}
                <div className="row mx-5">
                  <div className="col-1 border text-center">{index}</div>
                  <div className="col-5 border text-center">
                    {Object.keys(obj)}
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col border text-center">
                        <div className="form-group my-1">
                          <input
                            type="number"
                            className="form-control"
                            step=".01"
                            defaultValue={parseInt(Object.values(obj)[0][0])}
                            {...register(
                              `financial.${index}.${Object.keys(obj)}.0`
                            )}
                          />
                        </div>
                      </div>
                      <div className="col border text-center">
                        <div className="form-group my-1">
                          <input
                            type="number"
                            className="form-control"
                            step=".01"
                            defaultValue={parseInt(Object.values(obj)[0][1])}
                            {...register(
                              `financial.${index}.${Object.keys(obj)}.1`
                            )}
                          />
                        </div>
                      </div>
                      <div className="col border text-center">
                        <div className="form-group my-1">
                          <input
                            type="number"
                            className="form-control"
                            step=".01"
                            defaultValue={parseInt(Object.values(obj)[0][2])}
                            {...register(
                              `financial.${index}.${Object.keys(obj)}.2`
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <br />
          <div className="row text-center">
            <div className="col">
              {loading ? (
                <button className="jobbutton" disabled>
                  Please wait we are uploading your data ...
                </button>
              ) : (
                // <button className="jobbutton" onClick={writeDataNews}>
                //   Add Member
                // </button>
                <button className="jobbutton" onClick={View}>
                  Add Member
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
}

export default AdminFinancial;
