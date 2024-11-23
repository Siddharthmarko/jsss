import React from "react";
import styled from "styled-components";
import logo from "../../all imgs/home/DSlogo4.png"

const HeroSection = () => {

  return (
    <>
      <Container>
        <div className="container-fluid p-0">
          <div className="herosection d-flex flex-column align-items-center position-relative">
            <div className="logosect position-absolute top-0 start-0 p-3 w-100 d-flex justify-content-center">
              <img
                src={logo}
                alt="logo"
                className="brandlogo"
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





`;
