import React, { useState } from "react";
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

  // Static data for cardData
  const cardData = [
    {
      id: 1,
      title: "Event 1",
      year: 2023,
      cardImageUrl: "https://placeimg.com/300/200/tech",
    },
    {
      id: 2,
      title: "Event 2",
      year: 2022,
      cardImageUrl: "https://placeimg.com/300/200/nature",
    },
    {
      id: 3,
      title: "Event 3",
      year: 2021,
      cardImageUrl: "https://placeimg.com/300/200/people",
    },
    // Add more event cards as needed
  ];

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
        <div className="container mb-5 mt-5">
          <div className="d-flex justify-content-center">
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
                    >
                      <IoIosArrowForward size={30} />
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
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
                              {/* Use a static array for the modal images */}
                              <Carousel.Item>
                                <div className="d-flex justify-content-center align-items-center flex-column">
                                  <img
                                    className="d-block w-100"
                                    src="https://placeimg.com/800/600/tech"
                                    alt="event images"
                                  />
                                </div>
                              </Carousel.Item>
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
        </div>

        <div className="m-4">
          {/* Gallery */}
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <img
                src="https://media.istockphoto.com/id/1146902501/photo/school-children-jumping-and-celebrating-in-school-campus.jpg?s=612x612&w=0&k=20&c=rSETssGcQbFELUNmMAMNRSloiqMeB5noBfCIfgOkAVQ="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://images.pexels.com/photos/8441831/pexels-photo-8441831.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://images.pexels.com/photos/8926457/pexels-photo-8926457.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://media.istockphoto.com/id/1280864057/photo/girl-with-face-mask-back-at-school-after-covid-19-quarantine-and-lockdown-raising-hand.jpg?s=612x612&w=0&k=20&c=GCXWoPt0eo4qUtoPFyuzkCDObV7ymZm-CteKt1y94BA="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
              <img
                src="https://media.istockphoto.com/id/1148232091/photo/teacher-explaining-to-students-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=jT-_JQ_IEBXhKUGtbtI98dJtPIb20ovr0WgrvvMsXvU="
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />

              <img
                src="https://images.pexels.com/photos/8612980/pexels-photo-8612980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-100 shadow-1-strong rounded mb-4"
                alt="Event Image"
              />
            </div>
          </div>
          {/* Gallery */}
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
    background-color: #64a9e0;
    border-radius: 8px;
    margin-top: 10px;
  }
`;

