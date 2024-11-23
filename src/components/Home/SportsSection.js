import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

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
                  <p className="word-wr">
                    A healthy mind thrives in a healthy body. Whether you enjoy basketball, football,
                    or any other sport, our expansive playground is ready for you. Engaging in sports
                    keeps you fit while also teaching valuable lessons in teamwork and sportsmanship.
                  </p>
                  <p className="fs-1 curse">"Fitness and Fun, Together Always!"</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" data-aos="flip-left">
              <div className="image-container">
                <img
                  src="https://media.istockphoto.com/id/2152254654/photo/cropped-shot-of-a-diverse-professional-players-playing-basketball-in-a-hall.jpg?s=612x612&w=0&k=20&c=I_S72HfJj67-iiyN5T2mt5CinjhQxGOeSxRRHbvK_BI="
                  className="d-block rounded-4 shadow img-fluid"
                  alt="Sports"
                />
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

  .image-container img {
    height: 210px;
    width: 665.5px;
  }

  @media (min-width: 430px) {
    .leftside {
      margin-top: 0;
    }

    .image-container img {
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

    .image-container img {
      height: 470.33px;
      width: 900px;
    }
  }

  @media (min-width: 992px) {
    .word-wr {
      font-size: 20px;
    }

    .image-container img {
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

    .image-container img {
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

    .image-container img {
      height: 443.33px;
    }
  }
`;
