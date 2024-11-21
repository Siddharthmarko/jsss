import React from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const UploadCertificate = () => {
    const navigate = useNavigate()
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
                <button className="btns2" onClick={()=>navigate("/AdminHome")}>Admin Dashbord</button>
                <button
                  className="btns3"
                  onClick={() => window.location.reload()}
                >
                  <FaArrowRotateRight />
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <div className="card-Body">
                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <h3 className="p-3">Student Transfer Certificate</h3>
                    <button onClick={()=>navigate("/TC")} className="btn btn-info text-light">Upload TC</button>
                  </div>
                  <div className="d-flex flex-column justify-content-between align-items-center">
                    <h3 className="p-3">Student Character Certificate</h3>
                    <button onClick={()=>navigate("/CC")} className="btn btn-info text-light">Upload CC</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default UploadCertificate;
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
  .card-Body{
    margin-top: 10rem;
    background-color: #fff;
    border-color: transparent;
    border-radius: 2rem;
    padding: 2rem;
    box-shadow: 0px 1px 10px -1px rgba(0,0,0,0.1);
  }
`;
