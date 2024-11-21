import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import img1 from "../../all imgs/home/lab.jpg"

const HighLabs = () => {
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="flip-up">
              <div className="imgBox">
                <img
                  src={img1}
                  alt="imgbox"
                  srcset=""
                  className="rounded-4 shadow img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
              <div className="leftside mt-5">
                <h2 className="fw-bold fs-2 ">Innovative Labs</h2>
                <div className="py-3">
                <p className=" word-wr">
                In our advanced labs, you’ll engage with the latest scientific equipment, computers,
                 and chemicals. Experience hands-on learning where you can not only study theories but 
                 also apply them in a safe, innovative environment, making science come alive.
                </p>
                <p className="fs-1 curse">"Experiment Freely, Learn Deeply!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HighLabs;
const Container = styled.div`
  .facility {
    margin-bottom: 3rem;
  }

  .word-wr {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #5a626d;
    /* line-height: 2.5rem; */
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
    /* letter-spacing: 1px; */
    line-height: 2.0rem;

  }
  
  .imgBox img {
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }

  .leftside {
    /* margin-top: 20px; */
    padding-left: 4px;
  }

  img {
    /* height: 443.33px; */
    height: 470.33px;
    width: 900px;
  }

  
}

@media (min-width: 992px) {
  .word-wr {
    font-size: 20px;
  }

  img {
    /* height: 443.33px;
    width: 800px; */
    height: 310px;
    width: 665.5px;
    margin-top: 50px;
  } 

}



@media (min-width: 1200px) {
  
  .word-wr {
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

  .leftside {
    /* margin-top: 20px; */
    padding-left: 4px;
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
    line-height: 2.5rem;

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
