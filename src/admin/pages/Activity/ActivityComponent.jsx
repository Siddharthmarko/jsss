import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RouterMain from "../RouterMain";

const ActivityComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    descp: "",
    year: "",
    cardimg: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    // Ensure that files is always an array
    const updatedFiles = Array.from(files);

    setFormData((prev) => ({
      ...prev,
      [name]: name === "bulkimg" ? updatedFiles : updatedFiles[0], // Adjust for bulkimg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      console.log(form);
      form.append("cardimg", formData.cardimg);
      form.append("title", formData.title);
      form.append("descp", formData.descp);
      form.append("year", formData.year);

      await axios.post("https://joyseniorsecondary.ac.in/api/auth/activity", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Data and images uploaded successfully");
      console.log(form);
      handleClose();
      window.location.reload();
    } catch (error) {
      console.error("Error uploading data and images:", error.message);
    }
  };

  const handleActivity = () =>{
    navigate("/activity-main-part")
  }

  return (
    <>
    <RouterMain/>
      <Styled>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div className="d-flex justify-content-around align-items-center mt-5">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="Insert"
                >
                  Insert Activity
                </Button>

                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Activity</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="descp"
                          value={formData.descp}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Year</label>
                        <input
                          type="text"
                          className="form-control"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Card Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="cardimg"
                          onChange={handleFileChange}
                        />
                      </div>

                      {/* <div className="form-group">
                        <label>Bulk Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="bulkimg"
                          multiple
                          onChange={handleFileChange}
                        />
                      </div> */}

                      <Button variant="primary" type="submit">
                        Save changes
                      </Button>
                    </form>
                  </Modal.Body>
                </Modal>

                <button className="Insert" onClick={handleActivity}>Show all Activity</button>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default ActivityComponent;

const Styled = styled.div`
  .Insert {
    padding: 5rem;
    background-color: chocolate;
    color: white;
    font-size: 30px;
    border: none;
    border-radius: 12px;
  }
`;
