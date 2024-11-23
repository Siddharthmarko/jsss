import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import styled from "styled-components";
import new1 from "../all imgs/home/school1.jpg"
import new2 from "../all imgs/home/trophy1.jpg"
import new3 from "../all imgs/home/linkimg.jpg"

const OursSchoolCard = () => {
  return (
    <StyledDiv>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="section1" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <h3 className=" head">quick link</h3>
                <ul className="title">
                  <li>
                    <FaArrowRight className="icon" />
                    <a href="">CBSE</a>
                  </li>
                  <li>
                    <FaArrowRight className="icon" />
                    <a href="">National Digital Library</a>
                  </li>
                  <li>
                    <FaArrowRight className="icon" />
                    <a href="">CBSE CIRCULARS</a>
                  </li>
                </ul>
              <div className="">
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
          <div className="section2" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
            <h3 className=" head">educational links</h3>
            <ul className="title">
              <li><FaArrowRight className="icon" /><a href="" className="px-4">Learn</a></li>
              <li><FaArrowRight className="icon" /><a href="" className="px-4">Encyclopedia</a></li>
              <li><FaArrowRight className="icon" /><a href="" className="px-4">NCERT</a></li>
            </ul>
          <div className="">
          </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-12">
          <div className="section3" data-aos="fade-left" data-aos-offset="300" data-aos-duration="900">
          <h3 className=" head">downloads</h3>
            <ul className="title">
              <li><FaArrowRight className="icon" /><a href="" className="px-4">CBSE Academic</a></li>
              <li><FaArrowRight className="icon" /><a href="" className="px-4">CBSE Exam Results</a></li>
              <li><FaArrowRight className="icon" /><a href="" className="px-4">Transfer Certificate</a></li>
            </ul>
          <div className="">
          </div>
          </div>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default OursSchoolCard;
const StyledDiv = styled.div`
.section1{
  margin-top: 1rem;
  width: 100%;
  height: 285px;
  background-image: url(${new1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}
.section2{
  margin-top: 1rem;
  width: 100%;
  height: 285px;
  background-image: url(${new3});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}
.section3{
  margin-top: 1rem;
  width: 100%;
  height: 285px;
  background-image: url(${new2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
}
.overlay{
 width: 100%;
 height: 100%;
 background-color: #4d4dff;
  position: absolute;
  z-index: 1;
 opacity: 0.7; 
}
.head{
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
  position: absolute;
  z-index: 3;
  left: 10rem;
  top: 1rem;
  @media screen and (max-width: 768px) {
    left: 2rem;
  }
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
    left: 4rem;
  }
}
li{
  list-style: none;
  padding: 1rem;
}
li a{
  text-decoration: none;
  color: white;
  padding-left: 2rem;
  font-weight: 500;
  
}
.icon{
  color: white;
  font-weight: 400;
  font-size: 18px;
  
}
.title{
  position: absolute;
  z-index: 2;
  top: 3rem;
  @media screen and (min-width: 1020px) and (max-width: 1600px) {
    top: 4rem;
  }
}
`;