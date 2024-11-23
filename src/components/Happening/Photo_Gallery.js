import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoIosArrowForward } from "react-icons/io";
import { Carousel } from "react-bootstrap";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Photo_Gallery = () => {
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

  // Dummy data for cardData
  const cardData = [
    {
      id: 1,
      title: "Annual Event 2024",
      year: 2024,
      cardImageUrl: "https://via.placeholder.com/300",
      descp: "Event description goes here.",
    },
    {
      id: 2,
      title: "Sports Day 2023",
      year: 2023,
      cardImageUrl: "https://via.placeholder.com/300",
      descp: "Sports day event highlights.",
    },
    {
      id: 3,
      title: "Science Fair 2022",
      year: 2022,
      cardImageUrl: "https://via.placeholder.com/300",
      descp: "Students showcased innovative projects.",
    },
    // Add more items here as needed
  ];

  const [imgData, setImgData] = useState([]);

  // Dummy data for imgData (Images in the carousel)
  const handleModal = (id) => {
    // Simulate getting data based on the id
    const images = [
      { bulkimages: "https://via.placeholder.com/600" },
      { bulkimages: "https://via.placeholder.com/600" },
      { bulkimages: "https://via.placeholder.com/600" },
    ];
    setImgData(images);
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
      <Header2 heading="Photo Gallery" />

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
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
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
                  {card.cardImageUrl && (
                    <img
                      src={card.cardImageUrl}
                      height={300}
                      className="card-img-top"
                      alt={`Card ${card.id}`}
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title mt-2">{card.title}</h5>
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
                              className="modal-title "
                              id="staticBackdropLabel"
                            >
                              Photo Gallery
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
                              {imgData.map((item, index) => (
                                <Carousel.Item key={index}>
                                  <div className="d-flex justify-content-center align-items-center flex-column">
                                    <img
                                      className="d-block w-100"
                                      src={item.bulkimages}
                                      alt="event images"
                                    />
                                  </div>
                                </Carousel.Item>
                              ))}
                            </Carousel>
                          </div>
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

        <div className="m-4">
        </div>
      </Wrapper>
      <Footer />
      <Copy />
    </>
  );
};

export default Photo_Gallery;

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
