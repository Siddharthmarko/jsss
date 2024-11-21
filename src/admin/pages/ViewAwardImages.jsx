import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import RouterMain from "./RouterMain";

const ViewAwardImages = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  const [imgData, setImgData] = useState([]);

  const fetchData = async () => {
    console.log(id);
    try {
      console.log(id);
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/awardAchivBulkImagesId/${id}`
      );
      console.log(response.data.images);
      setImgData(response.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteImages = (imgId) => {
    console.log(imgId);
    try {
      const deleteRes = axios.delete(
        `https://www.joyseniorsecondary.ac.in/api/auth/deleteAwardsBulkImg/${imgId}`
      );
      console.log(deleteRes);
      alert("Item deleted");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting image:", error.message);
    }
  };
  return (
    <>
      <RouterMain />
      <Styled>
        <div className="container mb-4">
          <div className="row">
            {imgData.map((item) => (
              <div className="col-lg-3 col-md-6 g-2">
                <div key={item.img_id} className="card">
                  <img
                    src={item.bulkimages}
                    height={250}
                    class="card-img-top"
                    alt="Bulk Image"
                  />
                  <div class="card-body text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteImages(item.imgId)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Styled>
    </>
  );
};

export default ViewAwardImages;
const Styled = styled.div``;
