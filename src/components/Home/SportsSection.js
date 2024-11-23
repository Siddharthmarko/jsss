import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

// Online Image Links (Placeholder URLs)
const img1 = "https://via.placeholder.com/665x310?text=Yoga";
const img2 = "https://via.placeholder.com/665x310?text=Running";
const img3 = "https://via.placeholder.com/665x310?text=Sports+Day";
const img4 = "https://via.placeholder.com/665x310?text=Dancing";
const img5 = "https://via.placeholder.com/665x310?text=Winning";
const img6 = "https://via.placeholder.com/665x310?text=Zig-Zag";
const img7 = "https://via.placeholder.com/665x310?text=Running+Again";

const SportsSection = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Serif:opsz,wght@8..144,600;8..144,700;8..144,900&family=RocknRoll+One&family=Sofia&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Serif:opsz,wght@8..144,600;8..144,700;8..144,900&family=RocknRoll+One&family=Sofia&family=Vibur&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <div className="container-fluid facility">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="fade-right">
              <div className="leftside self-align-center">
                <h2 className="fw-bold fs-2">Sports</h2>
                <div className="py-3">
                  <p className=" word-wr">
                    A healthy mind thrives in a healthy body. Whether you enjoy basketball, football,
                    or any other sport, our expansive playground is ready for you. Engaging in sports
                    keeps you fit while also teaching valuable lessons in teamwork and sportsmanship.
                  </p>
                  <p className="fs-1 curse">"Fitness and Fun, Together Always!"</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="flip-left">
              <div
                id="carouselExample"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-interval="1000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={img1}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Yoga"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img2}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Running"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img3}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Sports Day"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img4}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Dancing"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img5}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Winning"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img6}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Zig-Zag"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={img7}
                      className="d-block rounded-4 shadow img-fluid"
                      alt="Running Again"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SportsSection;

const Container = styled.div`
  .facility {
    margin-top: 0;
    margin-bottom: 3rem;
  }

  .word-wr {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #5a626d;
    line-height: 1.3rem;
    text-align: center;
  }

  .curse {
    color: #7d38c6;
    font-family: 'Vibur', cursive;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-family: "Roboto Flex", Sans-serif;
    font-weight: 700;
    text-align: center;
  }

  img {
    height: 210px;
    width: 665.5px;
  }

  @media (min-width: 430px) {
    .leftside {
      margin-top: 0;
    }

    img {
      height: 310px;
      width: 665.5px;
    }
  }

  @media (min-width: 576px) {
    .word-wr {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    .word-wr {
      font-size: 20px;
      line-height: 2.0rem;
    }

    img {
      height: 470.33px;
      width: 900px;
    }
  }

  @media (min-width: 992px) {
    .word-wr {
      font-size: 20px;
    }

    img {
      height: 310px;
      width: 665.5px;
    }
  }

  @media (min-width: 1200px) {
    .word-wr {
      font-size: 20px;
      line-height: 2.5rem;
      text-align: start;
      letter-spacing: 1px;
    }

    .curse {
      text-align: start;
    }

    h2 {
      text-align: start;
    }

    img {
      height: 443.33px;
    }
  }

  @media (min-width: 1400px) {
    .word-wr {
      font-size: 20px;
      line-height: 2.5rem;
      text-align: start;
      letter-spacing: 1px;
    }

    .leftside {
      margin-top: 20px;
      padding-left: 4px;
    }

    .curse {
      text-align: start;
    }

    h2 {
      text-align: start;
    }

    img {
      height: 443.33px;
    }
  }
`;
