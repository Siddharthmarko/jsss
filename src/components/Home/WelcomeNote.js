import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const WelcomeNote = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Roboto+Serif:opsz,wght@8..144,600;8..144,700;8..144,900&family=RocknRoll+One&family=Sofia&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <div className="container mt-md-5 mb-md-5" data-aos="fade-right">
          <h2 className="text-center title">
            Welcome To Doaguru School
          </h2>
          <p className="">
            In an era focused on nurturing each child's potential, Doaguru School's motto,
            “Empowering Growth Through Encouragement,” reflects our commitment to fostering
            a supportive and positive learning environment.
          </p>
          <p className="">
            In a world often marked by criticism and judgment, our motto
            champions a transformative mindset. It underscores the significance
            of providing children with positive role models who inspire, guide,
            and ignite their aspirations. While criticism can erode self-esteem
            and hinder growth, model instils values, fosters resilience, and
            encourages the pursuit of excellence.
          </p>
          <p className="">
            It also highlights the crucial role of parents and guardians in a child's development.
            By offering unconditional love, actively listening, and setting positive examples,
            they can become constructive role models rather than focusing on criticism.
          </p>
        </div>
      </Container>
    </>
  );
};

export default WelcomeNote;
const Container = styled.div`
  h2{
    font-size: 41px;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 0.8px;
  }

  .container  {
    margin-top: 20px;
  }

  p {
    color: #5a626d;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 400;
    padding: 16px;
  }

  .title{
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 2.5rem;
    }
  }




@media (min-width: 576px) {
}

@media (min-width: 768px) {
 
   
  p {
    text-align: center;
    font-size: 20px;
  }
}


@media (min-width: 992px) {
  }



@media (min-width: 1200px) {
}


@media (min-width: 1400px) {
   
  p {
    text-align: center;
    font-size: 20px;
  }

  

}


`;
