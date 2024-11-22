import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { styled } from "styled-components";
import { Carousel } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";

function Our_Achievement() {
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

  const [cardData, setCardData] = useState([
    {
      id: 1,
      title: "Excellence in Science",
      year: 2024,
      cardImageUrl: "https://via.placeholder.com/300",
      description: "Awarded for outstanding performance in Science in 2024.",
    },
    {
      id: 2,
      title: "Best Sports Team",
      year: 2023,
      cardImageUrl: "https://via.placeholder.com/300",
      description: "Recognized as the best sports team in 2023.",
    },
    {
      id: 3,
      title: "Cultural Fest Winner",
      year: 2022,
      cardImageUrl: "https://via.placeholder.com/300",
      description: "Awarded for winning the annual cultural festival in 2022.",
    },
    // Add more dummy data here as needed
  ]);

  const [imgData, setImgData] = useState([
    {
      bulkimages: "https://via.placeholder.com/800x400",
    },
    {
      bulkimages: "https://via.placeholder.com/800x400",
    },
    // Add more dummy image data here as needed
  ]);

  const filteredCards = cardData
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((card) =>
      filterYear ? card.year && card.year.toString() === filterYear : true
    );

  const uniqueYears = [...new Set(cardData.map((card) => card.year))];

  return (
    <Wrapper>
      <div className="container mt-5">
        <h1 className="text-center" style={{ color: "#7d38c6" }}>
          Our Achievements
        </h1>
        <div
          className="underline mx-auto"
          style={{
            height: 3,
            width: "4rem",
            backgroundColor: "#34495E",
            marginTop: 20,
            marginBottom: 30,
          }}
        ></div>
      </div>

      <div className="container mb-5 mt-5">
        <div className="d-flex justify-content-center">
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
            className="form-control me-2"
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
                  src={card.cardImageUrl}
                  height={300}
                  className="card-img-top"
                  alt={`Card ${card.id}`}
                />

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
                    onClick={() => handleShow()}
                  >
                    <IoIosArrowForward size={30} />
                  </button>
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
            {selectedCard ? selectedCard.description : "Default Description"}
          </Modal.Body>
        </Modal>

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
                <h5 className="modal-title" id="staticBackdropLabel">
                  Award Achievement Modal
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
    </Wrapper>
  );
}

export default Our_Achievement;

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
