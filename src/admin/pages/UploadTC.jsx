import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

const UploadTC = () => {
  const [showModal, setShowModal] = useState(false);
  const [getId, setGetId] = useState("");
  const handleClose = () => setShowModal(false);
  const handleShow = (id) => {
    setShowModal(true);
    setGetId(id);
  };
  const navigate = useNavigate();

  const [tcData, setTcData] = useState([]);
  const [updatetcData, setUpdatetcData] = useState({
    rollno: "",
    tc: null,
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getuploadtc`
      );
      console.log(response.data);
      setTcData(response.data.result);
    } catch (error) {
      console.error("Error fetching TC data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatetcData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;

    // Ensure that files is always an array
    const updatedFiles = Array.from(files);

    setUpdatetcData((prev) => ({
      ...prev,
      [name]: updatedFiles.length > 0 ? updatedFiles[0] : null,
    }));
  };

  const handleSubmit = async (e) => {
    console.log(getId);
    e.preventDefault();
    try {
      const form = new FormData();
      console.log(form);
      form.append("roll_no", updatetcData.rollno);
      form.append("tc_pdf", updatetcData.tc);

      const res = await axios.put(
        `https://www.joyseniorsecondary.ac.in/api/auth/updateTc/${getId}`,
        form
      );
      console.log(res.data);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(updatetcData);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `https://www.joyseniorsecondary.ac.in/api/auth/deleteTc/${id}`
      );
      console.log(res.data);
      window.location.reload();
    } catch (error) {
      console.log(error);
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
          <h1 className="text-center">Upload Transfer Certificate</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="m-3">
                <button
                  className="btn btn-success"
                  onClick={() => navigate("/upload-TC")}
                >
                  Upload +
                </button>
              </div>

              <div>
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th className="text-center">Roll Number</th>
                      <th className="text-center">Operation</th>
                    </tr>
                  </thead>
                  {tcData.map((item) => (
                    <tbody key={item.id}>
                      <tr>
                        <td className="text-center">
                          <span className="fs-4 fw-semibold">
                            {item.roll_no}
                          </span>
                        </td>
                        <td>
                          <ul className="d-flex justify-content-evenly align-items-center">
                            <li>
                              <button oncli className="btn btn-warning">
                                <a href={item.tc_pdf}>view</a>
                              </button>
                            </li>
                            <li>
                              <Button
                                onClick={() => handleShow(item.id)}
                                className="btns5"
                              >
                                Update
                              </Button>
                            </li>

                            <Modal
                              show={showModal}
                              onHide={handleClose}
                              centered
                            >
                              <Modal.Header closeButton>
                                <Modal.Title>Transfer Certificate</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <form
                                  onSubmit={handleSubmit}
                                  encType="multipart/form-data"
                                >
                                  <div className="form-group">
                                    <label>Roll No.</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      name="rollno"
                                      value={updatetcData.rollno}
                                      onChange={handleChange}
                                    />
                                  </div>

                                  <div className="form-group">
                                    <label>TC File</label>
                                    <input
                                      type="file"
                                      name="tc"
                                      className="form-control"
                                      onChange={handleFileChange}
                                    />
                                  </div>
                                  <Button variant="primary" type="submit">
                                    Save changes
                                  </Button>
                                </form>
                              </Modal.Body>
                            </Modal>
                            <li>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="btn btn-danger"
                              >
                                {" "}
                                Delete
                              </button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default UploadTC;
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
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
