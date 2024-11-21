import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import RouterMain from "./RouterMain";

const UploadAwardImages = () => {
  const { id } = useParams();
  console.log(id);
  const [activityId, setActivityId] = useState("");
  const [bulkImages, setBulkImages] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setBulkImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    const formData = new FormData();
    formData.append("activityId", activityId);
    // formData.append('title', title);

    for (let i = 0; i < bulkImages.length; i++) {
      formData.append("bulkimg", bulkImages[i]);
    }

    try {
      console.log(id);
      const res = await axios.post(
        `https://www.joyseniorsecondary.ac.in/api/auth/awardAchivBulkuploadImagesId/${id}`,
        formData
      );
      console.log(`Data and images uploaded successfully ${res.data}`);
      alert("Data and images uploaded successfully");
      // You can add additional logic here, such as redirecting to another page.
    } catch (error) {
      console.error("Error uploading data and images:", error);
    }
  };
  const handleView = () => {
    console.log(id);
    navigate(`/view-award-images/${id}`);
  };

  return (
    <>
      <RouterMain />
      <Styled>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center mt-4 p-3">
                <h3 className="p-4">Upload Bulk Images</h3>
                <button className="btn btn-success m-3" onClick={handleView}>
                  View Images
                </button>
                <form onSubmit={handleSubmit} style={{ width: "22rem" }}>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <label className="form-label" for="form5Example1">
                      Upload Images ID
                    </label>
                    <input
                      type="text"
                      value={id}
                      readOnly
                      onChange={(e) => setActivityId(e.target.value)}
                      id="form5Example1"
                      className="form-control"
                    />
                  </div>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <label className="form-label" for="form5Example2">
                      Bulk Images
                      <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        id="form5Example2"
                        class="form-control"
                      />
                    </label>
                  </div>
                  <button
                    type="submit"
                    data-mdb-ripple-init
                    className="btn btn-primary btn-block mb-4"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default UploadAwardImages;
const Styled = styled.div``;
