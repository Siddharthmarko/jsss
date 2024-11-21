import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Event1 from "../../videos/Event1.mp4";
import Event2 from "../../videos/Event2.mp4";
import Event3 from "../../videos/Event3.mp4";
import Event4 from "../../videos/Event4.mp4";
import Event5 from "../../videos/Event5.mp4";
import Event6 from "../../videos/Event6.mp4";
import Event7 from "../../videos/Event7.mp4";
import Event8 from "../../videos/Event8.mp4";
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

      videoUrl: 'https://www.youtube.com/embed/iN-fmC6V0ME?si=4TsApMMIikAOwut5&amp;controls=0&amp;start=17',
      model_title: "3-D Mapping Shown Video",
      model_desc:
        "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    },
    // {
    //   id: 3,
    //   title: "Teri hai Zameen.....",
    //   description:
    //     "Roli Khare and her troupe performing on the occasion of Commemoration of Vimala Grace ",
    //   year: 2013,
    //   videoUrl: 'https://www.youtube.com/embed/KT0WYiDSIMc?si=Xo-AM5hSMYhIN6vY&amp;controls=0&amp;start=17',
    //   model_title: "Teri hai Zameen.....",
    //   model_desc:
    //     "'Roli Khare and her troupe performing on the occasion of Commemoration of Vimala Grace Auditorium on 6th January 2013.'",

    //   videoUrl: Event2, 
    // },

  ])

  const cardData = [
    // {
    //   id: 1,
    //   title: "3-D Mapping Shown",
    //   description:
    //     "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    //   year: 2016,
    //   imageUrl:
    //     "https://lh3.googleusercontent.com/pw/ABLVV84mPA0X2ca-OgQtgj13M73OpUlFXiMM9j0X4Ll5stDpaS3MUPorN6g6hHGKGKXJtH9h_UyIVuE4u5fTnd55j-1mugpoIg7WjLcCZpwGLOx9LD-6RentjcMZ5j7dNVmQCgbeLjEAkupPpllJ0ExOsqdi=w680-h453-s-no-gm?authuser=0",
    //   link: "https://photos.google.com/share/AF1QipNBb7QG3mr91_uN-5VZQVR4EQdDD_GmzrHW1MUqRC8jNW9F-CLvQv1vlXA14hfnRg?key=U3djX2xqUF9ybmZTMHFaMTB3Y3hEaE9CUXRoTTlB",
    //   model_title: "3-D Mapping Shown",
    //   model_desc:
    //     "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    // },

    // {
    //   id: 2,
    //   title: "3-D Mapping Shown Video",
    //   description:
    //     "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    //   year: 2023,

    //   videoUrl: 'https://www.youtube.com/embed/om4adqcy1Nw?si=4YKJ6OZ63JHdF9GH&amp;controls=0&amp;start=7',
    //   model_title: "3-D Mapping Shown Video",
    //   model_desc:
    //     "'A Tribute to Our Legend' through the first of its kind 'The Mega 3-D Mapping Show'",
    // },
    // {
    //   id: 3,
    //   title: "Teri hai Zameen.....",
    //   description:
    //     "Roli Khare and her troupe performing on the occasion of Commemoration of Vimala Grace ",
    //   year: 2013,
    //   model_title: "Teri hai Zameen.....",
    //   model_desc:
    //     "'Roli Khare and her troupe performing on the occasion of Commemoration of Vimala Grace Auditorium on 6th January 2013.'",

    //   videoUrl: Event2,
    // },
    // {
    //   id: 4,
    //   title: "Vimala Grace Auditorium-I",
    //   description:
    //     "On the Commemoration of Vimala Grace Auditorium Folk Dance RAI was performed by",
    //   year: 2013,
    //   model_title: "Vimala Grace Auditorium-I",
    //   model_desc:
    //     "'On the Commemoration of Vimala Grace Auditorium Folk Dance RAI was performed by Joyians and Harmonica by Dr. Nakul Dhagat and Manas Dhagat made the evening a bliss and enjoyable.'",
    //   videoUrl: Event3,
    // },
    // {
    //   id: 5,
    //   title: "Vimala Grace Auditorium - II",
    //   description:
    //     "Padamshree Prahalad Singh Tipaniya on the occasion of Commemoration of Vimala Grace ",
    //   year: 2013,
    //   model_title: "Vimala Grace Auditorium - II",
    //   model_desc:
    //     "'Padamshree Prahalad Singh Tipaniya on the occasion of Commemoration of Vimala Grace Auditorium at the Campus of Joy on 6th January 2013.'",

    //   videoUrl: Event4,
    // },
    // {
    //   id: 6,
    //   title: "Ram Kare Aisa Ho.....",
    //   description:
    //     "Ram Kare Aisa Ho Jaye harmonica performance by Dr. Nakul Dhagat on the",

    //   videoUrl: Event5,
    //   year: 2013,
    //   model_title: "Ram Kare Aisa Ho.....",
    //   model_desc:
    //     "'Ram Kare Aisa Ho Jaye harmonica performance by Dr. Nakul Dhagat on the occasion of Commemoration of Vimala Grace Auditorium on 6th January 2013,at Campus.,year: 2023'",
    // },
    // {
    //   id: 7,
    //   title: "Aero Adventures",
    //   description:
    //     "Joy celebrates its Founder's Day by organizing the Air Adventure Sports, exclusively for its  ",

    //   imageUrl:
    //     "https://test.joyseniorsecondary.ac.in/wp-content/uploads/2023/08/aero-adventure.png",
    //   link: "https://photos.google.com/share/AF1QipNBb7QG3mr91_uN-5VZQVR4EQdDD_GmzrHW1MUqRC8jNW9F-CLvQv1vlXA14hfnRg?key=U3djX2xqUF9ybmZTMHFaMTB3Y3hEaE9CUXRoTTlB",
    //   year: 2018,
    //   model_title: "Aero Adventures",
    //   model_desc:
    //     "'Joy celebrates its Founder's Day by organizing the Air Adventure Sports, exclusively for its students from 6th January to 10th January 2018. The Joyians had an amazing experience of : Parasailing, Para Motoring, Ejection Bungee & Tethered Hot Air Balloon, organized by team of Aero Adventures Nav Sansad Vihar Sector 22, Dwarka new Delhi. '",
    // },
    // {
    //   id: 8,
    //   title: "Harmonica Tare Zamin.....",
    //   description:
    //     "Ram Kare Aisa Ho Jaye harmonica performance by Dr. Nakul Dhagat on the ",
    //   year: 2013,

    //   videoUrl: Event6,
    //   model_title: "Harmonica Tare Zamin.....",
    //   model_desc:
    //     "'Ram Kare Aisa Ho Jaye harmonica performance by Dr. Nakul Dhagat on the occasion of Commemoration of Vimala Grace Auditorium on 6th January 2013,at Campus.'",
    // },
    // {
    //   id: 9,
    //   title: "Sohlava Saal",
    //   description:
    //     "Sohlava Saal harmonica performance by Dr. Nakul Dhagat and Manas Dhagat on the ",
    //   year: 2013,

    //   videoUrl: Event7,
    //   model_title: "Sohlava Saal",
    //   model_desc:
    //     "'Sohlava Saal harmonica performance by Dr. Nakul Dhagat and Manas Dhagat on the occasion of Commemoration of Vimala Grace Auditorium on 6th January 2013,at Campus.'",
    // },
    // {
    //   id: 10,
    //   title: "Ranbheri",

    //   year: 1998,

    //   videoUrl: Event8,
    // },
    // Add more card objects as needed
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
