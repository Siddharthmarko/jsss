import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RouterMain from "../RouterMain";

const UpcomingComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://www.joyseniorsecondary.ac.in/api/auth/upcominevent",
        formData
      );
      console.log("Upcoming Event Data Uploaded Successfully");
      handleClose();
    } catch (error) {
      console.error("Error uploading data:", error.message);
    }
  };

  const handleActivity = () => {
    navigate("/upcoming-Event-main");
  };

  return (
    <>
      <RouterMain />
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
                  Insert Upcoming Events
                </Button>

                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Upcoming Events</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={handleSubmit}>
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
                          name="desc"
                          value={formData.desc}
                          onChange={handleChange}
                        />
                      </div>

                      <Button variant="primary" type="submit">
                        Save changes
                      </Button>
                    </form>
                  </Modal.Body>
                </Modal>

                <button className="Insert" onClick={handleActivity}>
                  Show all Upcoming Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default UpcomingComponent;

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
