import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Annual from "../../images/Annual_sports-40.jpg";
import sports_day from "../../images/sports_day.jpg";
import prey from "../../images/prey_ground.jpg";
import Happy_face from "../../images/Happy_face.jpg";
import new1 from "../../images/americaparade.jpeg";
import new2 from "../../images/roadparade.jpeg";
import new3 from "../../images/celebrate.jpg";
import new4 from "../../images/assembly.jpg";

const SportSectionII = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
    return () => {
      AOS.refresh(); // Clean up on component unmount
    };
  }, []);

  return (
    <>
      <Container>
        <div className="container-fluid animal-2 ">
          <div className="row">
            <div className="parade col-lg-12 col-sm-12">
              <img src={new2} alt="playGround" className="Annual" />
            </div>
            <div className="overlay position-absolute"></div>

            <div
              className="container-fluid animal-child-1"
              data-aos="zoom-in-up"
            >
              <div className="row">
                <div>
                  <h2 class="text-center white">
                    Promoting Excellence in Sports and Leadership
                  </h2>
                </div>
                <div className="col-2"></div>
                <div className="underline col-lg-8 d-flex justify-content-center"></div>
                <div className="col-2"></div>
                <div>
                  <p className="text-center dedication">
                    With dedication, discipline, and teamwork, our NCC cadets
                    achieve excellence both in sports and in life. Their strong
                    commitment to sportsmanship and leadership exemplifies the
                    high standards of excellence we uphold at Doaguru School.
                  </p>
                </div>
              </div>
            </div>

            <div className="container-fluid animal-child-2">
              <div className="row">
                <div
                  className="sportman col-lg-12 text-center position-absolute top-50 "
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <img
                    src={new1}
                    alt={sports_day}
                    width={780}
                    className="img-fluid z-2 sports_day rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid zoom">
          <div className="sports row px-lg-5 ">
            <div
              className="col-lg-12 text-center px-lg-5 "
              data-aos="zoom-in-up"
            >
              <h2 class="honoring elementor-heading-title  ">
                Honoring Achievements in Sports
              </h2>
              <p className="mx-lg-5 px-lg-5 mt-lg-5 mt-3 mb-lg-5 joy">
                At Doaguru School, we nurture a culture of sporting excellence
                by offering Key Stage 2 pupils numerous opportunities to display
                their athletic skills. Our extensive sports program includes a
                variety of inter-school and inter-house competitions, designed
                to engage a wide range of interests and abilities.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-12 text-center mt-5 mb-5 cele"
              data-aos="fade-up"
            >
              <img
                src={new3}
                alt="Our-child"
                className="img-fluid rounded celebrate"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12 prey_Ground mb-5">
              <div className="col-lg-8 culture">
                <div className="row p-5 text-center ">
                  <p>
                    “At Doaguru School, we foster an environment of respect and
                    kindness, where students celebrate diversity and engage with
                    each other with empathy and understanding.” – Doaguru
                    School’s Internal Review, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SportSectionII;

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }

  .parade {
    height: 100px;
  }

  .celebrate {
    width: 350px;
    margin: auto;
  }

  .white {
    font-size: 25px;
    font-family: "RocknRoll One", sans-serif;
    color: #ffffff;
  }
  .underline {
    width: 62%;
    border-bottom: 2px solid gold;
    margin: 10px 2px 0px 30px;
    @media only screen and (min-width: 218px) and (max-width: 745px) {
      width: 75%;
      margin: 10px 0px 0px -15px;
    }
    @media only screen and (min-width: 746px) and (max-width: 1023px) {
      width: 80%;
      margin: 10px 0px 0px 80px;
    }
  }
  .joy {
    padding: 30px 40px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
  }
  .Our-child {
    border-radius: 10px;
  }

  .dedication {
    padding: 30px 30px;
    font-size: 15px;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      /* padding: 45px; */
      margin-top: -20px;
    }
    @media only screen and (min-width: 747px) and (max-width: 1024px) {
      padding: 10px 175px;
      margin-top: 50px;
    }
  }
  .animal-2 {
    position: relative;
  }
  .animal-child-1 {
    position: absolute;
    top: 70px;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      margin-top: -50px;
    }
  }
  .animal-child-2 {
    position: absolute;
    top: 150px;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      width: 80%;
      margin-left: 35px;
      margin-top: 100px;
      background-color: red;
    }
    /* @media only screen and (min-width: 747px) and (max-width: 1024px) {
      width: 60%;
      margin-left: 80px;
      margin-top: 100px;
    } */
  }
  .Annual {
    width: 100%;
    height: 60%;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      height: 270%;
    }
    @media only screen and (min-width: 747px) and (max-width: 1024px) {
      height: 126%;
    }
  }
  .overlay {
    width: 100%;
    height: 60%;
    background-color: #4d4dff;
    opacity: 0.7;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      height: 270%;
    }
    @media only screen and (min-width: 747px) and (max-width: 1024px) {
      height: 126%;
    }
  }
  .prey_Ground {
    /* border: 1px solid #000; */

    background-image: url(${new4});
    background-position: center;
    /* Center the image */
    background-repeat: no-repeat;
    /* Do not repeat the image */
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 65vh;
  }
  .culture {
    background-color: #faef1d;
    opacity: 0.9;
    border-radius: 15px;
    margin-top: 100px;
    margin-left: 190px;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      padding: 0px;
      width: 350px;
      margin: 35px auto 0px auto;
    }
    /* @media only screen and (min-width: 747px) and (max-width: 1024px) {
      width: 46%;
      margin: 80px auto;
    } */
  }
  .celebrating {
    height: 500vh;
  }
  .zoom {
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      margin-top: 500px;
    }
    @media only screen and (min-width: 747px) and (max-width: 1024px) {
      margin-top: 400px;
    }
  }

  @media (width: 344px) {
    .culture {
      width: 90%;
    }
  }

  @media (min-width: 768px) {
    .celebrate {
      width: 650px;
      margin: auto;
    }

    .culture {
      width: 70%;
      font-size: 25px;
      /* width: 46%; */
      margin: 80px auto;
    }

    .parade {
      height: 400px;
    }

    .sports {
      margin-top: 50px;
    }

    .animal-child-2 {
      width: 80%;
      margin-left: 80px;
      /* margin-top: 100px; */
      margin-top: 190px;
    }

    .dedication {
      padding: 40px 100px;
      font-size: 20px;
    }

    .honoring {
      background-color: white;
      margin: 0px 120px;
      padding: 12px 0px;
      border-radius: 10px;
    }

    .joy {
      padding: 30px 40px;
      font-size: 20px;
    }
  }

  @media (min-width: 992px) {
    .culture {
      width: 1200px;
      /* margin: 120px auto; */
    }
  }

  @media (min-width: 1200px) {
    .dedication {
      padding: 40px 250px;
      font-size: 19px;
    }

    .sports {
      margin-top: 50px;
    }

    .honoring {
      background-color: white;
      margin: 0px 200px;
      padding: 12px 0px;
      border-radius: 10px;
    }

    .parade {
      height: auto;
    }
  }
`;
