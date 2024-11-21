import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import backgroundImage1 from "../../all imgs/our cards/mlschool.jpg";
import backgroundImage2 from "../../all imgs/our cards/mission.jpg";
import backgroundImage3 from "../../all imgs/our cards/contactus.jpg";

const HomeCard = () => {
  return (
    <StyledDiv>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="section1 border border-2">
                <div className="cd">
                  {/* yellow line start */}
                  <div className="d-flex justify-content-center align-items-center p-2">
                    <div className="border border-1 border-warning" style={{width:"32rem"}}></div>
                  </div>
                  {/* yellow line end */}

                  <div className="p-2">
                    <span className="textIcon">
                      Our School <IoIosArrowForward />
                    </span>
                  </div>

                  <div className="p-3">
                    <button className="button"><a href="">Read More</a></button>
                  </div>
                </div>
              {/* <div className="overlay">
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="section2 border border-2">
              <div className="cd">
                  {/* yellow line start */}
                  <div className="d-flex justify-content-center align-items-center p-2">
                    <div className="border border-1 border-warning" style={{width:"32rem"}}></div>
                  </div>
                  {/* yellow line end */}

                  <div className="p-2">
                    <span className="textIcon">
                    Our Vision & Misssion <IoIosArrowForward />
                    </span>
                  </div>

                  <div className="p-3">
                    <button className=" button"><a href="">Read More</a></button>
                  </div>
                </div>
              {/* <div className="overlay">
              </div> */}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 ">
            <div className="section3 border border-2">
              <div className="cd">
                  {/* yellow line start */}
                  <div className="d-flex justify-content-center align-items-center p-2">
                    <div className="border border-1 border-warning" style={{width:"32rem"}}></div>
                  </div>
                  {/* yellow line end */}

                  <div className="p-2">
                    <span className="textIcon">
                    Contact us <IoIosArrowForward />
                    </span>
                  </div>

                  <div className="p-3">
                    <button className="button"><a href="">Read More</a></button>
                  </div>
                </div>
              {/* <div className="overlay">
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default HomeCard;
const StyledDiv = styled.div`
  .section1 {
    margin-top: 1rem;
    width: 100%;
    height: 285px;
    background-image: url(${backgroundImage1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
      
 /* Add inner shadow */
  box-shadow: inset -10px -10px 30px rgba(0, 0, 0, 0.8); /* Deeper shadow from a specific direction */
  opacity: 1; /* Ensures the section is fully opaque */

  }
  .section2 {
    margin-top: 1rem;
    width: 100%;
    height: 285px;
    background-image: url(${backgroundImage2});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    
     /* Add inner shadow */
  box-shadow: inset -10px -10px 30px rgba(0, 0, 0, 0.8); /* Deeper shadow from a specific direction */
  opacity: 1; /* Ensures the section is fully opaque */
  }
  .section3 {
    margin-top: 1rem;
    width: 100%;
    height: 285px;
    background-image: url(${backgroundImage3});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;

    /* Add inner shadow */
  box-shadow: inset -10px -10px 30px rgba(0, 0, 0, 0.8); /* Deeper shadow from a specific direction */
  opacity: 1; /* Ensures the section is fully opaque */
    
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: #4d4dff;
    opacity: 0.6;
    position: absolute;
    z-index: 1;

  }
  .cd{
    padding-top: 15%;
    position: absolute;
    z-index: 2;
  }
  .textIcon{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    color: white;
    padding-left: 1rem;
  }
  .button{
    background-color: white;
    color: black;
    font-weight: 500;
    border: none;
    padding: 12px 24px;
    border-radius: 5px;
  
  }
  a{
    text-decoration: none;
    color: black;
  }
`;