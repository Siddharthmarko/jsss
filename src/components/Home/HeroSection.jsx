import React from "react";
import styled from "styled-components";
// import video from "../../all imgs/home/Doaguru school hero video.mp4"
import logo from "../../all imgs/home/DSlogo4.png"

const HeroSection = () => {
  const searchHandler = () => {
    alert("hello");
  };
  return (
    <>
      <Container>
        {/* <div className=" herosection bg-primary" >
          <div className="logosect container-fluid menu-icon">
            <div className="logo text-center ">
              <img
                src={logo}
                alt="logo"
                srcset=""
              />
            </div>
          </div>
          <div className="videosect bg-danger">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div> */}


        <div className="container-fluid p-0">
          <div className="herosection d-flex flex-column align-items-center position-relative">
            <div className="logosect position-absolute top-0 start-0 p-3 w-100 d-flex justify-content-center">
              <img
                src={logo}
                alt="logo"
                className="brandlogo"
              // style={{ width: "200px" }}
              />
            </div>
            <div className="videosect w-100 h-100 overflow-hidden">
              <video
                src="https://videos.pexels.com/video-files/12724008/12724008-uhd_2732_1440_60fps.mp4"
                autoPlay
                muted
                loop
                className="herovideo w-100 object-fit-cover"
              ></video>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
const Container = styled.div`



.brandlogo {
    width: 170px;
  }

  .herovideo {
    height: 200px;
  }
  

@media (min-width: 576px) {
  .brandlogo {
    width: 280px;
  }

  .herovideo {
    height: 300px;
  }
}

@media (min-width: 768px) {
  .brandlogo {
      width: 400px;
    }
    
    .herovideo {
      height: 450px;
    }
}


@media (min-width: 992px) {
 
  .brandlogo {
      width: 400px;
    }
    
    .herovideo {
      height: 450px;
    }

  }



@media (min-width: 1200px) {
  
  .brandlogo {
      width: 400px;
    }

    .herovideo {
      height: 490px;
    }

}


@media (min-width: 1400px) {
   
  .brandlogo {
      width: 400px;
    }

    .herovideo {
      height: 620px;
    }
}






/* .herosection {

position: relative;

height: 25vh;

overflow: hidden; 

} */


/* 
.videosect {

position: absolute;

top: 20;

left: 0;

width: 100%;

height: 100%;

overflow: hidden;

object-fit: cover;

} */


/* 
video {

position: absolute;

top: 20;

left: 0;

width: 100%;

height: 100%;

object-fit: cover; /* Ensures the video covers the container */

/* }  */

/* ..............................new...................................... */

  /* .herosection {
    video {
      width: 100%;
    }
  }
  .relat {
    position: relative;
  }
  .absol {
    position: absolute;
    display: flex;
    margin-top: 10px;
    float: right;
    margin-left: 0rem;
    margin-right: 1rem;
    align-items: center;
    color: white;
  }
  input {
    border: none;
    border-bottom: 2px solid white;
    border-radius: 0;
    margin-left: 1rem;
    background-color: transparent;
  } */

  /* .logo {
    img { */
      /* width: 400px; */  // normal laptop size
      /* width: 200px;
    }
  } */

  /* .searchGlobal {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
  } */

  /* .menu-icon {
    position: absolute;
    z-index: 9;
  } */

  /* .videosect {
    position: relative; */
    /* width: 100%; */
    /* height: 620px; */
  /* } */


/*   
  @media screen and (min-width: 280px) and (max-width: 450px) {



  } */

  /* @media screen and (min-width: 280px) and (max-width: 450px) {
    .herosection video {
    width: 100%;
    height: 5rem;
  }
} */




`;
