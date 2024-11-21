import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import axios from "axios";
import ImageModal from "./ImageModal";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Media_Corner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const fetchingData = async () => {
    try {
      const response = await axios.get(
        // `https://www.joyseniorsecondary.ac.in/api/auth/getmediacorner`
      );
      console.log(response.data.mediaCornerData);
      setCardData(response.data.mediaCornerData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

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
      <Header2 heading="School Media Corner" />

      <Wrapper>
        <div className="container-fluid mt-2 mb-5">
          <div className="card" id="card1">
            <div className="front text-center mt-4">
              <h1 style={{ color: "#f1cf31" }}>
              Visual Highlights: A Journey Through Doaguru
              </h1>
            </div>
            <div className="back text-center text-white mb-5">
              <h5>
              "Discover our school's story through 'Visual Highlights' 
              Dive into a visual voyage of cherished memories, dynamic events, 
              and enriching learning experiences, all vividly captured in stunning images.
              </h5>
            </div>
          </div>
        </div>
        <div className="container mb-5 ">
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
                <div
                  key={card.id}
                  className="card shadow p-3 bg-white rounded-4"
                  onClick={() => handleImageClick(card.cardimg)} // Handle image click
                >
                  <img
                    src={card.cardimg}
                    height={400}
                    className="card-img-top"
                    alt={`Card ${card.id}`}
                    style={{ cursor: "pointer" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title mt-2">{card.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
      {selectedImage && (
        <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />
      )}
      <Footer />
      <Copy />
    </>
  );
};

export default Media_Corner;
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
  #card1 {
    perspective: 1000px;
    height: 100px; /* Adjust the height as needed */
    transform-style: preserve-3d;
    transition: transform 0.5s ease;
    background-color: #7d38c6;
  }

  #card1:hover {
    cursor: pointer;
    transform: rotateX(180deg);
  }

  .front,
  .back {
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateX(180deg);
    margin-top: -2.5rem;
  }

`;