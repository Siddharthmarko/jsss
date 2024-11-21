import React from "react";
import img from "../../all imgs/home/00000000000000a.webp";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import img1 from "../../all imgs/home/teacherteach.webp";

const DedicatedTeaching = () => {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&family=Vibur&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Styled>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" >
              <div className="mt-5">
                <h2 className="text-center">
                  Introducing Our Committed Teaching Team
                </h2>
                <div className=" para-div p-2">
                  <p className="word-cnt">
                    At Doaguru School, our strength lies in our exceptional educators.
                    Our dedicated teaching staff brings extensive experience and commitment
                    to each classroom, providing personalized attention and support to help every student thrive.
                  </p>
                </div>
              </div>
              <div className="">
                <h2 className="fs-1 text-center curse">
                  "Cultivating Minds, Creating Bright Futures."
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="imgBox">
                <img src={img1} alt="image" className="image image-fluid" />
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default DedicatedTeaching;
const Styled = styled.div`
  .text-center {
    font-weight: 700;
    color: black;
  }
  .word-cnt {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #5a626d;
    letter-spacing: 1px;
    /* line-height: 1.5rem; */
    text-align: justify;
  }
  .curse{
    font-family: 'Vibur', cursive;
    /* font-size: 42px; */
    color: #7d38c6;
    margin-bottom: 1.9rem;
  }
  .imgBox{
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-bottom: 5rem;
  }
  .imgBox img{
    width: 360px;
    height: 220px;
    border-radius: 12px;
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }



  
  @media (width: 344px) {

    .imgBox img {
    height: 205px;
    width:  320px;
  }
  }


  @media (min-width: 430px) {

  .imgBox img {
    height: 310px;
    width:  410px;
  }
}

@media (min-width: 576px) {
  .word-cnt {
    font-size: 20px;
  }
}

@media (min-width: 768px) {
 
   
.word-cnt{
    font-size: 20px;
    line-height: 2.0rem;

  }
  
  .imgBox img {

    height: 470px;
    width:  750px;
    margin-top: 45px;
  }

}



@media (min-width: 992px) {
  .word-cnt {
    font-size: 20px;
  }

  .imgBox img {
    display: block;
    margin-left: auto;
    margin-right: auto; 
    height: 400px;
    width:  960px;
    margin-top: 45px;
  }

}



@media (min-width: 1200px) {
  
  .word-cnt {
    font-size: 20px;
    line-height: 2.5rem;
    text-align: start;
    letter-spacing: 1px;
    line-height: 2.5rem;

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

  .imgBox img {
    height: 420px;
    width:  1000px;
    margin-top: 45px;
  }

  /* .para-div {
    padding-top: 5px;
  } */
 
}


@media (min-width: 1400px) {
   
  .word-cnt {
    font-size: 20px;
    line-height: 2.5rem;
    text-align: start;
    letter-spacing: 1px;
    line-height: 2.5rem;

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
