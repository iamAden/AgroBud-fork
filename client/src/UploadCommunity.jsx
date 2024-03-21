import React from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./components/navbar/Navbar2";
import Footer from "./components/Footer/Footer";
import back from "./assets/back.png";
import "./UploadCommunity.css";
import { useState } from "react";

const UploadCommunity = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSelectImage = (event) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener("load", () => {
      setPreviewImage(fileReader.result);
    });
    fileReader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //handle Upload Image
    const data = new FormData();
    data.append("files[]", previewImage);

    fetch(/* server url ,*/ { method: "POST", body: data })
      .then(async (response) => {
        const imageResponse = await response.json();
        setUploadedImage(imageResponse);
      })
      .catch((err) => {});
  };

  return (
    <>
      <Navbar2 />

      <div className="main-container">
        <Link to="/community">
          <button id="back-to-com">
            <img id="back-icon" src={back} />
          </button>
        </Link>
        <h1 id="upload-title">Create Post</h1>

        <div id="upload-body">
          <form id="upload-form" action="/api/upload" method="POST">
            <div id="select-image">
              {/* Select Image Button*/}
              <label for="file-upload" id="custom-file-upload-btn">
                Upload Image
              </label>
              <input
                id="file-upload"
                accept=".png, .jpg, .jpeg"
                type="file"
                onChange={handleSelectImage}
              />
              {previewImage ? (
                <img
                  id="preview-image"
                  src={previewImage}
                  alt="preview-image"
                />
              ) : null}

              {/* Upload Image */}
              {uploadedImage ? (
                <img
                  id="uploaded-image"
                  src={uploadedImage}
                  alt="uploaded-image"
                />
              ) : null}
            </div>

            <div id="title-desc-submit">
              <label for="com_title">
                <h1 className="com-label">Title</h1>
              </label>
              <input
                className="com-input"
                type="text"
                name="com_title"
                placeholder="Title"
              ></input>

              <label for="com_desc">
                <h1 className="com-label">Description</h1>
              </label>
              <textarea
                className="com-input"
                name="com_desc"
                cols="30"
                rows="10"
                placeholder="Description"
              ></textarea>
              <button
                id="submit-btn"
                className="green-btn"
                type="submit"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadCommunity;
