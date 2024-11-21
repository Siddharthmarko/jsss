import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import { Carousel } from "react-bootstrap";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    handleShow();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [cardData, setCardData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getactivity`
      );
      console.log(res.data);
      setCardData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [imgData, setImgData] = useState([]);

  const handleModal = async (id) => {
    try {
      const res = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/activityBulkImagesId/${id}`
      );
      console.log(res.data.images);
      setImgData(res.data.images);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredCards = cardData
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((card) =>
      filterYear ? card.year && card.year.toString() === filterYear : true
    );
  const uniqueYears = [...new Set(cardData.map((card) => card.year))];

  return (
    <>
      <Header />
      <Header2 heading="Activities" />

      <Wrapper>
        <div className="container mb-5 mt-5 ">
          <div className="d-flex justify-content-center ">
            <select
              className="form-select mx-2"
              aria-label="Default select example"
              value={filterYear || ""}
              onChange={(e) => setFilterYear(e.target.value || null)}
            >
              <option value="">All</option>
              {uniqueYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="row mt-3">
            {filteredCards.map((card) => (
              <div key={card.id} className="col-lg-4 mt-2">
                <div className="card shadow p-3 bg-white rounded-4">
                  <img
                    src={card.cardimg}
                    height={300}
                    className="card-img-top"
                    alt={`Card ${card.id}`}
                  />

                  <div className="card-body">
                    <h5 className="card-title mt-2">{card.title}</h5>
                    {/* <p className="card-text">{card.descp}</p> */}
                    {card.title && (
                      <Button
                        variant="primary"
                        onClick={() => handleCardClick(card)}
                      >
                        Read More
                      </Button>
                    )}

                    <button
                      type="button"
                      className="btn4"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => handleModal(card.id)}
                    >
                      <IoIosArrowForward size={30} />
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Activities Modal
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <Carousel>
                              {imgData.map((item) => (
                                <Carousel.Item>
                                  <div className="d-flex justify-content-center align-items-center flex-column">
                                    <img
                                      className="d-block w-100"
                                      src={item.bulkimages}
                                      alt="event images"
                                    />
                                    {/* <button className="btn btn-danger" onClick={()=>deleteImages(item.id)}>
                                    Delete
                                  </button> */}
                                  </div>
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          </div>
                          {/* <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Understood
                            </button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton style={{ backgroundColor: "#4d4dff" }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "white", textAlign: "center" }}
              >
                {selectedCard ? selectedCard.title : "Default Title"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#4d4dff", color: "white" }}>
              {selectedCard ? selectedCard.descp : "Default Description"}
            </Modal.Body>
          </Modal>
        </div>
      </Wrapper>
      <Footer />
      <Copy />
    </>
  );
};

export default Activities;
const Wrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
  .form-control {
    width: 25%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-select {
    width: 10%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
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
