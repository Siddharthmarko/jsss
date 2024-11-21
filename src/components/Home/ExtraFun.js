import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import img5 from "../../all imgs/home/wallpaint.jpg";

const ExtraFun = () => {
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
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="imgBox">
                <img
                  src={img5}
                  alt="imgbox"
                  srcset=""
                  className="rounded-4 shadow img-fluid"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className=" leftside mt-5">
                <h2 className="fw-bold fs-1">"Adventure Awaits in Our Arena!"</h2>
                <p className="word-wr">
                In addition to our prominent features, Doaguru School boasts some exciting 
                fun-filled areas. Our auditorium is a spacious venue for events like singing,
                 dancing, and plays, as well as large gatherings. For art enthusiasts, we have 
                 dedicated rooms where you can draw, paint, and let your creativity flourish.
                </p>
                <p className="fs-1 curse">
                "A Stage for Every Creative Spark."
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ExtraFun;
const Container = styled.div`


  .imgBox {
    img {
      height: 210.33px;
      width: 665.5px;
    }
  }

  .facility {
    margin-bottom: 3rem;
  }

  .word-wr {
    font-size: 14px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #5a626d;
    text-align: center;
    /* line-height: 2.5rem; */
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

  @media (min-width: 430px) {
  .leftside {
    margin-top: 0;
  }

  .imgBox img {
    height: 310px;
    width:  1000px;
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
  
  .imgBox img {
    display: block;
    margin-left: auto;
    margin-right: auto; 
    height: 470px;
    width:  1000px;
    margin-top: 45px;
  }

  .leftside {
    padding-left: 4px;
  }

}



@media (min-width: 992px) {
  .word-wr {
    font-size: 20px;
  }

  .imgBox img {
    display: block;
    margin-left: auto;
    margin-right: auto; 
    height: 310px;
    width:  1000px;
    margin-top: 45px;
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
    padding-left: 4px;
  }

  img {
    height: 443.33px;
  
  }

  .imgBox img {
    height: 420px;
    width:  1000px;
    margin-top: 45px;
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
