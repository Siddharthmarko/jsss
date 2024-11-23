import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Header2 from "../Layout/Header2";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Copy from "../Layout/Copy";

const img2 = "https://via.placeholder.com/600x400?text=Founder+Image";  // Placeholder for Founder Image
const img3 = "https://via.placeholder.com/600x400?text=Manager+Image";  // Placeholder for Manager Image

const FounderManager = () => {
  return (
    <>
      <Header />
      <StyledDiv>
        <Header2 heading="Founder & Manager" />
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Sofia&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <div className="conatiner-fluid">
          <div className="row mt-4">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center align-items-center"
              id="ipad"
            >
              <div className="" style={{}}>
                {/* Founder Image */}
                <img
                  src="https://media.istockphoto.com/id/533557326/photo/woman-in-the-office.jpg?s=612x612&w=0&k=20&c=p0MgoFmxUGKvDE7f_DkeNg37Yj24lxPcCBFXoo1SCgc="
                  alt="Miss Amelia Atkinson"
                  className="founder img-fluid my-2 mt-4"
                  id="img"
                />
                <h2
                  className="d-flex justify-content-center align-items-center mt-2"
                  style={{
                    fontFamily: "ABeeZee Sans-serif",
                    fontWeight: "700",
                  }}
                >
                  Miss Amelia Atkinson
                </h2>
                <p
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    fontFamily: "Roboto Sans-serif",
                    fontWeight: "500",
                    textShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  Founder of Doaguru School
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center w-full "
              id="heading"
            >
              <div className="text-center">
                <h1 className="heading ">Meet Our Founder</h1>
                <p className="desc">
                  In 1964, Doaguru Founder began her journey with a simple yet
                  profound idea. Gathering six young children under a drumstick
                  tree, she started teaching them various subjects, planting the
                  seeds for what would become the Doaguru School. Her unwavering
                  dedication and attention to each child’s needs quickly drew
                  the interest of other parents. Despite her small stature, the
                  Founder’s immense strength and determination shone through.
                  Early on, student progress cards were uniquely crafted in
                  animal shapes, a cherished tradition that many of her former
                  students, now parents themselves, still remember fondly.
                </p>
                <p className="desc">
                  Doaguru Founder’s relentless hard work and dedication
                  transformed a small elementary institution, initially known as
                  'Doaguru Nursery' and later 'Doaguru Tutorials,' into the
                  well-regarded 'Doaguru School.' In 1986, refusing to rest on
                  her achievements, she passed on her vision and goodwill,
                  paving the way for the establishment of Doaguru Senior
                  Secondary School, which was founded that same year.
                </p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-center align-items-center text-center">
              <h2 className="heading" id="heading1">
                Exploring the Journey of Our Founder
              </h2>
            </div>
          </div>
          <div className="row mt-5 ">
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-3"
              id="you"
            >
              <div className="card " id="card1">
                {/* Video of Founder's Journey */}
                <iframe
                  src="https://www.youtube.com/embed/wcfGnOrWkN0?si=tQ5cyCgGiCxf37DR"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="rounded-3"
                ></iframe>
                <div className="card-body p-3">
                  <p className="card-text text-center">
                    Late Miss Amelia Atkinson Journey of Years Part 1
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-3 "
              id="you1"
            >
              <div className="card" id="card1">
                {/* Video of Founder's Journey */}
                <iframe
                  src="https://www.youtube.com/embed/wcfGnOrWkN0?si=tQ5cyCgGiCxf37DR"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  className="rounded-3"
                ></iframe>
                <div className="card-body p-3">
                  <p className="card-text text-center ">
                    Late Miss Amelia Atkinson Journey of Years Part 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-lg-6 col-md-12 p-5 d-flex flex-column justify-content-center align-items-center">
              {/* Manager Image */}
              <img
                src="https://images.pexels.com/photos/5014608/pexels-photo-5014608.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Director"
                className="dirimg img-fluid founder my-2 mt-4"
                style={{ width: "100%", height: "auto"}} 
              />
            </div>
            <div
              className="col-lg-6 col-md-12 d-flex flex-column justify-content-center"
              id="heading"
            >
              <h1 className="heading">Meet Our Manager</h1>
              <p className="desc1">
                Joining Doaguru School during this exciting time has been a
                remarkable experience. Since then, the institution has steadily
                progressed. Doaguru School offers the ideal environment,
                combining extensive resources with a personal touch that ensures
                every student is valued and supported in achieving their highest
                potential.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </StyledDiv>
      <Copy />
    </>
  );
};

export default FounderManager;

const StyledDiv = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .heading {
    color: #7d38c6;
    font-family: "Sofia", Sans-serif;
    font-weight: 600;
    -webkit-text-stroke-color: #000;
    stroke: #000;
    font-size: 30px;
    margin-left: 1rem;
    margin-bottom: 3px;
    text-align: center;
  }

  .desc {
    border: 0;
    text-align: justify;
    color: #5a626d;
    font-family: "Poppins", Sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.3px;
    word-spacing: 0px;
    padding: 0px 10px;
  }
  .card-body {
    background-color: #f7f7f7;
  }
  .card-text {
    font-family: "Times New Roman", Sans-serif;
    font-size: 23px;
    line-height: 29px;
  }
  .dirimg {
    // height: auto;
    // width: 600px;
    border: none;
    border-radius: 0 !important;
  }
  #heading {
    line-height: 1rem;
    @media screen and (max-width: 768px) {
      margin-left: 0rem;
    }
  }

  .desc1 {
    border: 0;
    text-align: justify;
    color: #5a626d;
    font-family: "Poppins", Sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0.3px;
    word-spacing: 0px;
    padding: 0px 10px;
    /* line-height: 3rem; */
  }

  #card1 {
    /* width: 25.4rem; */
    border: none;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    align-items: center;
    /* padding: 0px 10px; */
  }
  iframe {
    width: 405px;
    height: 300px;
    /* @media screen and (max-width: 768px) {
      width: 22.5rem;
    } */
  }
  #ipad {
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      margin: auto;
    }
  }

  @media (min-width: 430px) {
  }

  @media (min-width: 540px) {
    .dirimg {
      height: auto;
      width: 250px;
      border: none;
      border-radius: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    .desc {
      font-size: 17px;
      line-height: 30px;
    }

    .desc1 {
      font-size: 17px;
      line-height: 30px;
    }

    .heading {
      font-size: 35px;
      margin-left: 1rem;
    }

    #heading1 {
      font-size: 35px;
      margin-top: 2rem;
      margin-left: 1rem;
    }

    .dirimg {
      height: auto;
      width: 300px;
      border: none;
      border-radius: 1.5rem;
    }
  }
  @media (min-width: 992px) {
    .desc {
      font-size: 20px;
      line-height: 34px;
      padding: 0px 15px;
    }

    .desc1 {
      font-size: 20px;
      line-height: 34px;
      margin-right: 10px;
    }

    .heading {
      font-size: 35px;
    }
  }
  @media (min-width: 1200px) {
    .desc {
      font-size: 20px;
      line-height: 50px;
    }

    .desc1 {
      font-size: 20px;
      line-height: 50px;
    }

    .dirimg {
      height: auto;
      width: 400px;
      border: none;
      border-radius: 1.5rem;
    }
  }
  @media (min-width: 1400px) {
  }
`;
