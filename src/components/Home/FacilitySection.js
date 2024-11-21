import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import img1 from "../../all imgs/home/creativity img.jpg";
import img2 from "../../all imgs/home/library.jpeg";

const FacilitySection = () => {
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
        {/* facility */}
        <div className="container-fluid facility">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
              <div className="leftside mt-md-5 pl-md-4">
                <h2 className="fw-bold fs-2">Facilities of Doaguru</h2>
                <div className="py-3">
                  <p className="word-wr">
                    Welcome to Doaguru School, where education becomes an exciting journey of exploration and growth!
                    We are dedicated to creating a dynamic learning environment that nurtures curiosity, confidence,
                    and creativity in every student.
                  </p>
                  <p className="fs-1 curse">"Empowering Future Leader"</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
              <div className="imgBox">
                <img
                  src={img1}
                  alt="imgbox"
                  srcset=""
                  className="rounded-4 shadow img-fluid mt-md-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* library */}
        <div className="container-fluid facility">
          <div className="second-line row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right">
              <div className="imgBox px-xl-5">
                <img
                  src={img2}
                  alt="imgbox"
                  srcset=""
                  className="rounded-4 shadow img-fluid mt-md-5"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right">
              <div className="leftside mt-5">
                <h2 className="fw-bold fs-2">Library Wonderland</h2>
                <div className="py-3">
                  <p className="word-wr">
                    Our library is a treasure trove of books and information. It offers a diverse collection
                    of literature and academic resources that allow you to explore various subjects in depth.
                    It’s a space where you can continually advance your knowledge and achieve important learning milestones.
                  </p>
                  <p className="fs-1 curse">
                    "Igniting Minds, Inspiring Growth"
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

export default FacilitySection;
const Container = styled.div`


.facility {
    margin-bottom: 3rem;
  }

  .word-wr {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #5a626d;
    text-align: center;
    
  }

  .leftside {
    margin-top: 10px;
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

  .imgBox {
    img {
      cursor: pointer;
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
  }
  
  .imgBox img {
    display: block;
    margin-left: auto;
    margin-right: auto; 
  }

  
}

@media (min-width: 992px) {
  .word-wr {
    font-size: 20px;
  }

}



@media (min-width: 1200px) {
  
  .word-wr {
    font-size: 20px;
    line-height: 2.5rem;
    text-align: start;
  }

  .curse {
    text-align: start;
  }

  h2 {
    text-align: start;
  }

  .imgBox {
    img {
      height: 443.33px;
      width: 665.5px;
    }
  }


}


@media (min-width: 1400px) {
   
  .word-wr {
    font-size: 20px;
    line-height: 2.5rem;
    text-align: start;

  }

  .leftside {
    margin-top: 20px;
  }

  .curse {
    text-align: start;
  }

  h2 {
    text-align: start;
  }

  .imgBox {
    img {
      height: 443.33px;
      width: 665.5px;
    }
  }
  

}








`;
