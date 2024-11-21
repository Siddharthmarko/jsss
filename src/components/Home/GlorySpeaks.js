import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import prey from "../../all imgs/home/assembly.jpg";
// import Background_Computer from "../images/Background-Computer.jpg"
// import Background_Tab from "../images/Background-Tab.jpg"
// import Background_Mobile from "../images/Background-Mobile.jpg"

export default function GlorySpeaks() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&family=Vibur&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Wrapper>
        {/* <section id="banner" className="banner"> */}

        {/* <img
              src="https://res.cloudinary.com/dsujv9zbq/image/upload/v1698824602/3d-rendering-house-model_phslke.jpg"
              className="card-img rounded-0"
              alt="banner.jpg"
            /> */}
        {/* <div className="container">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12"></div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                 
                    <div className="card-img-overlay">
                      <div className="boxshadow d-flex flex-column align-items-center justify-content-start">
                        <h2 className="text-center fw-bold fs-3 mt-5 banner-heading">
                        Our Success Reflects
                        </h2>
                        <h2 className=" mt-3 mb-5 text-center curse">
                        Our Commitment and Excellence.                      </h2>
                      </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"></div>
              </div>
            </div> */}

        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12 prey_Ground mb-5">
              {/* <div className="col-lg-4 culture">
                <div className="row p-5 text-center fs-5">
                  <p>
                    “At Doaguru School, we foster an environment of respect and kindness, where students celebrate diversity and engage with each other with empathy and understanding.” – Doaguru School’s Internal Review, 2023
                  </p>
                </div>
              </div> */}
              <div className="card-img-overlay  culture">
                <div className="boxshadow">
                  <h2 className="text-center fw-bold fs-3 banner-heading">
                    Our Success Reflects
                  </h2>
                  <h2 className=" mt-3 text-center curse">
                    Our Commitment and Excellence.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </section> */}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`


  * {
    margin: 0;
    padding: 0;
  }


  .card {
    width: 100%;
    height: 35rem;
    background-image: url("https://test.joyseniorsecondary.ac.in/wp-content/uploads/2023/08/DSC01704-scaled.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: table;

    @media only screen and (min-width: 768px) and (max-width: 1025px) {
      background-image: url("https://test.joyseniorsecondary.ac.in/wp-content/uploads/2023/08/DSC01704-scaled.jpg");

      /* width: 100%;
        height: 100%; */
    }
    @media only screen and (max-width: 767px) {
      background-image: url("https://test.joyseniorsecondary.ac.in/wp-content/uploads/2023/08/DSC01704-scaled.jpg");
    }
  }
  .banner {
    overflow: hidden;
  }

  /* .banner-heading {
    font-size: 50px;
    word-spacing: 5px;
    font-family: 'Prata', serif;
    @media screen and (max-width: 620px) {
      font-size: 20px;
      text-align: center;
    }
    @media only screen and (min-width: 620px) and (max-width: 768px) {
      font-size: 30px;
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 35px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1600px) {
      font-size: 40px;
    }
  } */

  h1 {
    box-shadow: inset 1px 1px 125px #2f2525;
    padding: 1rem;
    border-radius: 1rem;
  }

  .curse {
    color:#7d38c6;
    font-size: 43px;
    font-family: 'Vibur', cursive;
    font-weight: 500;
  }
  
  .boxshadow {
    background-color: #ebcf4b;
    z-index: 9;
    border-radius: 1rem;
    padding: 1rem;
  }
  .card-img-overlay {
    margin-top: 9rem;
  }

  .prey_Ground {
    border: 1px solid #000;
    background-image: url(${prey});
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
         width: 350px;
         margin: auto;
         margin-top: 100px;
         /* margin-top: 100px;
         margin-left: 190px; */
         /* margin-left: 20px;  */
    }


/* 
  .culture {
    border-radius: 15px;
    margin-top: 100px;
    margin-left: 190px;
    @media only screen and (min-width: 214px) and (max-width: 745px) {
      padding: 0px;
      width: 350px;
      margin: 35px auto 0px auto;
    }
    @media only screen and (min-width: 747px) and (max-width: 1024px) {
      width: 46%;
      margin: 80px auto;
    }
  } */

  @media (min-width: 768px){


    .culture {
         width: 500px;
         margin-top: 100px;
         /* margin-left: 190px; */
    }

    .banner-heading {
      margin-top: 35px;
      word-spacing: 5px;
    }
    
    .curse {
      margin-bottom: 35px;
  }
  }


  @media (min-width: 1200px){


    .culture {
         width: 412px;
         margin-top: 100px;
         margin-left: 190px;
    }

    .banner-heading {
      margin-top: 35px;
      word-spacing: 5px;
    }
    
    .curse {
      margin-bottom: 35px;
  }
}
  
`;





// @media (min-width: 430px){

// }

// @media (min-width: 576px){

// }

// @media (min-width: 768px){

// }

// @media (min-width: 992px){

// }

// @media (min-width: 1200px){

// }

// @media (min-width: 1400px){

// }