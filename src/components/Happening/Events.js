import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Handle Modal Visibility
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  // Video data array
  const videos = [
    {
      id: 1,
      title: "Drill Dance | Sparkling Doaguru Kids 2023",
      description: "Fantastic Performance by Class-2nd 'The Drill Dance'",
      year: 2023,
      videoUrl:
        "https://www.youtube.com/embed/om4adqcy1Nw?controls=0&start=7",
      model_title: "3-D Mapping Shown Video",
      model_desc: "'A Tribute to Our Legend' through 'The Mega 3-D Mapping Show'",
    },
    {
      id: 2,
      title: "Boys on the Chairs | Sparkling Doaguru Kids 2023",
      description: "Fantastic Performance by Class-3rd 'Boys on the Chairs'",
      year: 2023,
      videoUrl:
        "https://www.youtube.com/embed/KT0WYiDSIMc?controls=0&start=17",
      model_title: "3-D Mapping Shown Video",
      model_desc: "'A Tribute to Our Legend' through 'The Mega 3-D Mapping Show'",
    },
    {
      id: 3,
      title: "Tribute to Lord Ganesha | Sparkling Doaguru Kids 2023",
      description: "Fantastic Performance by Class-3rd 'Lord Ganesha'",
      year: 2023,
      videoUrl: "https://www.youtube.com/embed/pSJzavFh1_Y",
      model_title: "3-D Mapping Shown Video",
      model_desc: "'A Tribute to Our Legend' through 'The Mega 3-D Mapping Show'",
    },
  ];

  // Filtered cards based on search term and year
  const filteredCards = videos
    .filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((video) => (filterYear ? video.year === parseInt(filterYear) : true));

  return (
    <>
      <Header />
      <Header2 heading="Events at Our School" />

      <Wrapper>
        <div className="container mb-5 mt-5">
          {/* Search and Filter Section */}
          <div className="d-flex justify-content-center">
            <select
              className="form-select mx-2"
              aria-label="Select Year"
              value={filterYear || ""}
              onChange={(e) => setFilterYear(e.target.value || null)}
            >
              <option value="">All</option>
              <option value="2023">2023</option>
              <option value="2018">2018</option>
              <option value="2016">2016</option>
              <option value="2013">2013</option>
              {/* Add more years dynamically if needed */}
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

          {/* Cards Section */}
          <div className="row mt-3">
            {filteredCards.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card shadow p-3 bg-white rounded-4">
                  {card.videoUrl && (
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={card.videoUrl}
                        title={card.title}
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title mt-2">{card.title}</h5>
                    <p className="card-text mt-3">{card.description}</p>
                    {card.model_title && (
                      <Button
                        variant="primary"
                        onClick={() => handleCardClick(card)}
                      >
                        Learn More
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal Section */}
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            centered
          >
            <Modal.Header closeButton style={{ backgroundColor: "#4d4dff" }}>
              <Modal.Title
                style={{ color: "white", textAlign: "center" }}
              >
                {selectedCard ? selectedCard.model_title : "No Title"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#4d4dff", color: "white" }}>
              {selectedCard ? selectedCard.model_desc : "No Description"}
            </Modal.Body>
          </Modal>
        </div>
      </Wrapper>

      <Footer />
      <Copy />
    </>
  );
};

export default Events;

// Styled Components
const Wrapper = styled.div`
  .card {
    width: 95%;
    height: 95%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-control {
    width: 25%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .form-select {
    width: 15%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .card-text {
    color: #73666d;
    font-size: 16px;
    font-weight: 400;
  }
`;
