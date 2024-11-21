import React from "react";
import styled from "styled-components";
import birth from "../../../images/bday.mp4";

function Video() {
  return (
    <Wrapper>
      <div className="">
        <div className="showcase">

          <video  className="background-video" muted loop autoPlay controls >
            <source src={birth} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </Wrapper>
  );
}


export default Video;

const Wrapper = styled.div`
 .showcase {
    position: relative;
    overflow: hidden;
    height: 40rem;
    margin-top: -1rem;

    @media screen and (max-width: 768px) {
        height: 15rem;
    margin-bottom: 0rem;
    }
    @media screen and (min-width: 768px) and (max-width: 1020px) {
      height: 30rem;
    }
    @media screen and (min-width: 1400px) and (max-width: 3300px) {
      height: 55rem;
    }
  }

  .background-video {
    position: absolute; 
    top: 1rem;
    left: 0;
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
   
    }
    
  

`;
