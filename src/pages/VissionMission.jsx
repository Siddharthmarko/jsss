import React from "react";
import styled from "styled-components";
import vimg1 from "../all imgs/vission&mission/1072818_OMUNMO0_vw9a8g.jpg";
import vimg2 from "../all imgs/vission&mission/28563661_6152022_general2_13_gudvii.jpg";
import { Helmet } from "react-helmet";
import Header from "../Layout/Header";
import Header2 from "../Layout/Header2";
import Footer from "../Layout/Footer";
import Copy from "../Layout/Copy";

const VissionMission = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&family=Prata&family=Vibur&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header/>
      <Header2 heading="Vision And Mission"/>
      <Styled>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="zoom-in">
              <div className="imgBox">
                <img src={vimg1} alt="vission" className="image img-fluid" />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="">
                <h2>Vision</h2>
                <ol>
                  <li className="para">
                    <strong>Integral Formation:</strong> We aim for the overall
                    development of the child, focusing not only on academic
                    growth but also on their personal, social, and cultural
                    growth.
                  </li>
                  <li  className="para">
                    <strong>Awareness:</strong> We want students to become
                    conscious of the world, its people, and the challenges it
                    faces. This suggests a desire to nurture global citizens
                    with a broad perspective.
                  </li>
                  <li  className="para">
                    <strong>Preparation for Career:</strong> The vision includes
                    preparing students for their chosen careers, highlighting
                    the practical aspect of education and its application in
                    real world contexts.
                  </li>
                  <li  className="para">
                    <strong>Fulfilment and Glory:</strong> The ultimate aim is
                    make students to find fulfilment by contributing positively
                    to society and humanity. This reflects a strong emphasis on
                    ethics and social responsibility.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12" data-aos="zoom-in">
              <div className="imgBox">
                <img src={vimg2} alt="vission" className="image img-fluid" />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="">
                <h2>Mission</h2>
                <ol>
                  <li className="para">
                    <strong>Holistic Development:</strong> Our mission is
                    centered around the holistic development of students. This
                    could include cognitive, emotional, social and physical
                    growth, ensuring a well-rounded education.
                  </li>
                  <li className="para">
                    <strong>Individualized Teaching:</strong> We aim to stress
                    teaching according to students' individual learning styles.
                    This student-centered approach can lead to better
                    understanding and engagement.
                  </li>
                  <li className="para">
                    <strong>Discipline and Punctuality:</strong> The motive is
                    to  highlight the importance of discipline and punctuality.
                    These values can cultivate responsibility and a strong work
                    ethic in students.
                  </li>
                  <li className="para">
                    <strong>Collaborative Goal:</strong> The use of “together
                    aim to achieve the goal” suggests a collaborative effort
                    involving educators, students, parents and possibly the
                    community, all working towards a common objective.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Styled>
      <Footer/>
      <Copy/>
    </>
  );
};

export default VissionMission;
const Styled = styled.div`

  .imgBox {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  .image {
    width: 250px;
    height: 250px;
  }

  .para {
    font-size: 14px;
  }

  h2 {
    font-size: 55px;
    font-family: "Times New Roman", Times, serif;
    font-weight: 600;
    color: #7d38c6;
  }

  ol li {
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #5a626d;
  }

 @media (min-width: 430px){

 }

 @media (min-width: 576px){

 }

 @media (min-width: 768px){

  .image {
    width: 250px;
    height: 250px;
  }
  
 

  .para {
    font-size: 17px;
  }

}

 @media (min-width: 912px){

  .imgBox  {
    margin-top: 0px;

  }

 }

 @media (min-width: 992px){

  .image {
    width: 250px;
    height: 250px;
  }

  .para {
    font-size: 20px;
  }

  .imgBox  {
    margin-top: 90px;

  }


}

 @media (min-width: 1200px){

 }

 @media (min-width: 1400px){

 }
`;
