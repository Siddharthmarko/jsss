import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios"; // Import Axios

const TC = () => {
  const [rollNumber, setRollNumber] = useState("");
  const [error, setError] = useState(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getTc/${rollNumber}`
      );
      const data = response.data;
      window.open(data.tc_pdf, "_blank");
    } catch (error) {
      console.error("Error downloading TC:", error);
      setError("Error downloading TC");
    }
  };

  const handleView = async () => {
    try {
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getTc/${rollNumber}`
      );
      const data = response.data;
      window.open(data.tc_pdf, "_blank");
    } catch (error) {
      console.error("Error viewing TC:", error);
      setError("Error viewing TC");
    }
  };

  return (
    <>
      <Container>
        <>
          <div className="container-fluid ">
            <div className="row mx-2">
              <div className="col-lg-4 col-md-3 col-sm-1 "></div>
              <div className="col-lg-5 col-md-7 col-sm-10 certificate">
                <div className="card rounded-3 text-black d-flex align-items-center bg-light">
                  <div>
                    <h3 className="Certificate mt-5">
                      Download Transfer Certificate
                    </h3>
                  </div>
                  <div className="col-lg-7 col-md-5 col-sm-4 mt-4">
                    <input
                      type="text"
                      className="form-control height ps-3"
                      placeholder="Enter Roll Number"
                      value={rollNumber}
                      onChange={(e) => setRollNumber(e.target.value)}
                    />
                  </div>
                  <div className="d-flex text-center ms-3">
                    <button
                      type="button"
                      className="mt-4 btn mb-5 me-1 button btn-primary btn-outline-light px-4 py-2"
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      className="mt-4 btn mb-5 me-3 button btn-success btn-outline-light px-5 py-2"
                      onClick={handleView}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-1"></div>
            </div>
          </div>
        </>
      </Container>
    </>
  );
};

export default TC;

const Container = styled.div`
  background-color: #4d7db7;
  height: 100vh;
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  .height {
    height: 37px;
  }
  .certificate {
    /* margin-left: 460px; */
    margin-top: 200px;
    /* @media only screen and (min-width: 746px) and (max-width: 1023px) {
      margin-left: 175px;
      margin-top: 107px;
    }
    @media only screen and (min-width: 280px) and (max-width: 745px) {
      margin-left: 18px;
      margin-top: 170px;
      width: 90%;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1200px) {
      margin-left: 300px;
    }
    @media only screen and (min-width: 1280px) and (max-width: 1390px) {
      margin-left: 400px;
      margin-top: 110px;
    } */
  }
  .card {
    width: 100%;
  }
`;
