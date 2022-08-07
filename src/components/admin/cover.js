import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { doc, addDoc, collection, deleteDoc } from "firebase/firestore";
import { db } from "./../../firebase-config";

import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "@firebase/storage";
import { storage } from "./../../firebase-config";

import { v4 } from "uuid";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import readData from "./../functions/DB";

function AdminCover() {
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [id] = useState(v4());
  const [cover, setcoverImage] = useState([]);
  const { register, getValues } = useForm({});
  useEffect(() => {
    window.scrollTo(0, 0);
    readData("coverImage").then((e) => {
      setcoverImage(e);
    });
  }, []);
  const dataCollectionRef1 = collection(db, "coverImage");

  //write Data
  async function writeDataNews() {
    setLoading(true);

    if (file == null) {
      addDoc(dataCollectionRef1, {
        cap: getValues("body"),
        img: null,

        imageListID: id,
      });
    }
    const imageRef = ref(storage, `images/cover/${id}`);
    await uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        addDoc(dataCollectionRef1, {
          cap: getValues("body"),
          img: url,

          imageListID: id,
        });
      });
    });

    await setTimeout(function() {
      setLoading(false);

      window.location.reload(false);
    }, 1000);
  }

  function deleteFile(id) {
    const projects = cover;
    projects.map((obj) => {
      if (id === obj.id) {
        const desertRef = ref(storage, `images/cover/${obj.imageListID}`);
        // Delete the image
        deleteObject(desertRef);

        deleteDoc(doc(dataCollectionRef1, obj.id))
          .then(() => {
            console.log("Files Deleted");

            alert("File Deleted Successfully!!");
            window.location.reload(false);
          })
          .catch((error) => {
            alert("File Not Deleted!!");
          });
      }
      return null;
    });
  }

  //   function deleteFile(type, id) {}

  return (
    <>
      {" "}
      <br />
      {/* news  */}
      <div className="row text-center">
        <div className="col">
          <h3>Gallery</h3>
        </div>
      </div>
      <hr />
      <div className="row ">
        <div className="col">
          <div className="row mx-5">
            <div className="col">
              <div className="form-group">
                <label>Image Title</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Image Title"
                  {...register("body")}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>

            <div className="col">
              {" "}
              <div className="form-group">
                <label for="exampleFormControlFile1">Image file</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                  {...(loading ? "disabled" : null)}
                />
              </div>
            </div>
          </div>
          <br />

          <br />
          <div className="row text-center">
            <div className="col">
              {loading ? (
                <button className="jobbutton" disabled>
                  Please wait we are uploading your data ...
                </button>
              ) : (
                <button className="jobbutton" onClick={writeDataNews}>
                  Add Image
                </button>
              )}
            </div>
          </div>

          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <ImageList sx={{ width: 1000 }}>
            {cover.map((item) => (
              <ImageListItem key={item.img} className="mx-2">
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.cap}
                  loading="lazy"
                />
                <div className="row">
                  <div className="col">
                    {" "}
                    <ImageListItemBar
                      title={item.title}
                      subtitle={<span>Caption: {item.cap}</span>}
                      position="below"
                    />
                  </div>
                  <div className="col align-self-center text-right">
                    <button
                      style={{
                        border: "transparent",
                        color: "red",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        deleteFile(item.id);
                      }}
                    >
                      Delete
                    </button>{" "}
                  </div>
                </div>
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
}

export default AdminCover;
