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

  const handleCardClick = (card) => {
    setSelectedCard(card);
    handleShow();
  };



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [videos, setVideos] = useState([

    {
      id: 1,
      title: "Drill Dance | Sparkling Doaguru Kids 2023",
      description:
        "'Fantastic Performance by Class-2nd 'The Drill Dance'",
      year: 2023,

      videoUrl: 'https://www.youtube.com/embed/om4adqcy1Nw?si=4YKJ6OZ63JHdF9GH&amp;controls=0&amp;start=7',
      model_title: "3-D Mapping Shown Video",
      model_desc:
        "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    },
    {
      id: 2,
      title: "Boys on the Chairs | Sparkling Doaguru Kids 2023",
      description:
        "'Fantastic Performance by Class-3rd 'Boys on the Chairs'",
      year: 2023,

      videoUrl: 'https://www.youtube.com/embed/KT0WYiDSIMc?si=Xo-AM5hSMYhIN6vY&amp;controls=0&amp;start=17',
      model_title: "3-D Mapping Shown Video",
      model_desc:
        "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    },
   
    {
      id: 3,
      title: "Tribute to God Kataragama Lord Ganesha | Sparkling Doaguru Kids 2023",
      description:
        "'Fantastic Performance by Class-3rd 'Lord Ganesha'",
      year: 2023,

      videoUrl: 'https://www.youtube.com/watch?v=jwQcLBf53Zw',
      model_title: "3-D Mapping Shown Video",
      model_desc:
        "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    },


  ])

  const cardData = [
   
  ];
  const filteredCards = cardData
    .filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((card) =>
      filterYear ? card.year && card.year.toString() === filterYear : true
    );

  return (
    <>
      <Header />
      <Header2 heading="Events at Our School" />

      <Wrapper>
        <div className="container mb-5 mt-5">
          <div className="d-flex justify-content-center ">
            <select
              class="form-select mx-2"
              aria-label="Default select example"
              value={filterYear || ""}
              onChange={(e) => setFilterYear(e.target.value || null)}
            >
              {" "}
              <option value="">All</option>
              <option value="2018">2018</option>
              <option value="2016">2016</option>
              <option value="2013">2013</option>
              <option value="1998">1998</option>
              {/* Add more years as needed */}
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

          {/* <div className="row mt-3">
            {filteredCards.map((card) => (
              <div key={card.id} className="col-lg-4 ">
                <div className="card shadow p-3 mb-5 bg-white rounded-4">
                  {card.imageUrl && (
                    <Link to={card.link} target="_blank">
                      {" "}
                      <img
                        src={card.imageUrl}
                        height={200}
                        className="card-img-top"
                        alt={`Card ${card.id}`}
                      />
                    </Link>
                  )}
                  {card.videoUrl && (
                    <div className="ratio ratio-16x9">
                      <video width="560" height="315" controls>
                        <source src={card.videoUrl} type="video/mp4" />
                      </video>
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
                        Read More
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}


          {/* new one for demo  */}

          <div className="row mt-3">
            {videos.map((video) => (
              <div key={video.id} className="col-lg-4">
                <div className="card shadow p-3 mb-5 bg-white rounded-4">
                  {video.imageUrl && (
                    <Link to={video.link} target="_blank">
                      <img
                        src={video.imageUrl}
                        height={200}
                        className="card-img-top"
                        alt={`Card ${video.id}`}
                      />
                    </Link>
                  )}
                  {video.videoUrl && (
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="560"
                        height="315"
                        src={video.videoUrl}
                        title={`YouTube video ${video.id}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}

                  <div className="card-body">
                    <h5 className="card-title mt-2">{video.title}</h5>
                    <p className="card-text mt-3">{video.description}</p>
                    {video.model_title && (
                      <Button variant="primary" onClick={() => handleCardClick(video)}>
                        Read More
                      </Button>
                    )}
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
            <Modal.Header closeButton style={{ backgroundColor: "#4d4dff", }}>
              <Modal.Title
                id="contained-modal-title-vcenter"
                style={{ color: "white", textAlign: "center" }}
              >
                {selectedCard ? selectedCard.model_title : "Default Title"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#4d4dff", color: "white" }}>
              {selectedCard ? selectedCard.model_desc : "Default Description"}
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
    width: 10%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .card-text {
    color: #73666d;
    font-size: 17px;
    font-weight: 400;
  }
`;
