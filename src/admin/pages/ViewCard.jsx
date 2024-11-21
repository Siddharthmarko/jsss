import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewCard = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [getBulkData, setGetBulkData] = useState([]);
  const handleClose = () => setShowModal(false); 
  const handleShow = () => {
    setShowModal(true);
  };
  const { id } = useParams();
  console.log(id);

  const [allImg, setAllImg] = useState([]);

  const getImage = async () => {
    try {
      const res = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getawardsid/${id}`
      );
      console.log(res.data);
      setAllImg(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getBulkPicture = async () => {
    try {
      const response = await axios.get(
        "https://www.joyseniorsecondary.ac.in/api/auth/getawardAchivBulk"
      );
      console.log(response.data);
      setGetBulkData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredImages = getBulkData.filter((image) => {
    return allImg.map((item) => item.id).includes(image.award_id);
  });

  console.log(filteredImages);

  useEffect(() => {
    getImage();
    getBulkPicture();
  }, []);

  console.log(allImg);

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
        </div>

        <div className="container" style={{ marginTop: "10rem" }}>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                {allImg.map((item) => (
                  <div
                    className="card"
                    style={{ width: "22rem" }}
                    key={item.id}
                  >
                    <img
                      src={item.cardImageUrl}
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      {/* <p className="card-text">{item.descp}</p> */}
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Read More
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                               Awards & Achievements
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body"><p className="card-text">{item.descp}</p></div>
                            <div class="modal-footer">
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button className="btn4" onClick={handleShow}>
                        <IoIosArrowForward size={30} />
                      </Button>
                      <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          <Modal.Title>View Activities</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Carousel>
                            {filteredImages.map((url, index) => (
                              <Carousel.Item>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                  <img
                                    className="d-block w-100"
                                    src={url.bulkimages}
                                    alt="event images"
                                  />
                                </div>
                              </Carousel.Item>
                            ))}
                          </Carousel>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default ViewCard;
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
  .btn4 {
    margin-left: 8rem;
    border: none;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
    background-color: #929fba;
  }
`;
