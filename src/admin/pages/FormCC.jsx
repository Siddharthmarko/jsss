import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FormCC = () => {
  const navigate = useNavigate();
  const [rollNo, setRollNo] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("roll_no", rollNo);
    formData.append("cc_pdf", file);

    try {
      const response = await axios.post(
        "https://www.joyseniorsecondary.ac.in/api/auth/uploadCc",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading CC:", error);
    }
  };
  return (
    <>
      <Styled>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-between align-items-center m-3">
                <button className="btns1" onClick={() => window.history.back()}>
                  <IoIosArrowBack />
                </button>
                <button
                  className="btns2"
                  onClick={() => navigate("/AdminHome")}
                >
                  Admin Dashbord
                </button>
                <button
                  className="btns3"
                  onClick={() => window.location.reload()}
                >
                  <FaArrowRotateRight />
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-center">Upload Character Certificate</h1>

          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div
                className="d-flex flex-cloumn justify-content-center align-items-center"
                style={{ marginTop: "10rem" }}
              >
                <form onSubmit={handleSubmit} style={{ width: "25rem" }}>
                  <div data-mdb-input-init class="form-outline mb-4">
                    <label className="form-label" for="form1Example1">
                      Enter Roll Number
                    </label>
                    <input
                      type="text"
                      id="form1Example1"
                      className="form-control"
                      value={rollNo}
                      onChange={(e) => setRollNo(e.target.value)}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" for="form1Example2">
                      Select File
                    </label>
                    <input
                      type="file"
                      id="form1Example2"
                      className="form-control"
                      onChange={handleFileChange}
                    />
                  </div>

                  <button
                    data-mdb-ripple-init
                    type="submit"
                    className="btn btn-info btn-block"
                    style={{ color: "white" }}
                  >
                    Submit
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

export default FormCC;
const Styled = styled.div`
  .btns1 {
    background-color: #c7cc26;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 10px;
  }
  .btns2 {
    background-color: #de169a;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 10px;
  }
  .btns3 {
    background-color: #14b7a8;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 10px;
  }
`;
