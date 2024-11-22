import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import pdf from '../all imgs/Fee-instructions-2023-24-1.pdf'
import pdf2 from '../all imgs/Fee-Structure-2023-24-b9.pdf'
import DSlogo4 from '../all imgs/home/DSlogo4.png'

function Footer() {
  const schoolName =
    "290 Washington St,";
  const addressLine1 =
    "Somerville Ave suite 327,";
  const addressLine2 = "Cambridge,";
  const city = "MA ";
  const postalCode = "02139,";
  const state = "United States";
  const emailAddress =
    "Doaguruschool@gmail.com";
  const contact1 = "9996655444";
  const contact2 = "1235243132";
  const contact3 = "5545588";

  const googleMapsUrl = `https://www.google.com/maps?q=${schoolName},${addressLine1},${addressLine2},${city}-${postalCode},${state}`;

  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <StyledDiv>
        <div className="Footer mt-2 ">
          <div className="container-fluid mx-lg-0">
            <div className="row">
              <div className="d-md-flex d-lg-flex justify-content-around">
                <div className="d-none d-lg-block d-xxl-block">
                  <div>
                  <img 
  src={DSlogo4} 
  alt="JSS Logo" 
  className="img-thumbnail" 
  style={{ height: '250px', width: '250px', backgroundColor: "#7D38C6" }} 
/>
                  </div>
                  <div className="col-md-12 col-lg-12 col-12 ft-0 social">
                {/* <h3 className="fhead">
                  <span className="yspan">
                    [
                  </span>
                  Social Media
                  <span className="yspan">
                    ]
                  </span>
                </h3> */}
                <img src="" alt="" />
                <a
                  className="btn btn-floating m-1 px-md-2"
                  href="https://www.youtube.com/@Doaguru.infosystems"
                  role="button">
                  <i class="bi bi-youtube icon text-danger"></i>
                </a>
                <a
                  className="btn btn-floating m-1 px-md-2"
                  href="https://www.facebook.com/Digitalmarketingandwebsitedesigncompany/"
                  role="button">
                  <i class="bi bi-facebook icon text-primary"></i>
                </a>
                <a
                  className="btn btn-floating m-1 px-md-2"
                  href="https://www.instagram.com/Doaguruinfosystems/?hl=en"
                  role="button">
                  <i className="bi bi-instagram icon insta text" style={{ color: '#cd486b' }}></i>

                </a>
                <a
                  className="btn btn-floating m-1 px-md-2"
                  href="https://www.linkedin.com/company/Doaguru-info-sys/"
                  role="button">
                  <i class="bi bi-linkedin icon text-primary"></i>
                </a>
              </div>
                </div>
                <div className="include col-md-3 col-lg-3 col-12 ft-1">
                  <h3 className="fhead">
                    <span className="yspan">
                      [
                    </span>
                    Contact information
                    <span className="yspan">
                      ]
                    </span>
                  </h3>
                  <div className="data1 datas">
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration:
                          "none",
                      }}>
                      <p className="text-start text-dark fw-semibold ">
                        <span className="yspan">
                          &gt;
                        </span>{" "}
                        {schoolName}
                      </p>
                      <p className="text-start text-dark fw-semibold ">
                        {addressLine1}
                      </p>
                      <p className="text-start text-dark fw-semibold ">
                        {addressLine2}{" "}
                        {city}-
                        {postalCode}(
                        {state})
                      </p>
                    </a>

                  </div>
                  <p className="text-start text-dark fw-semibold datas mt-3">
                    <span className="yspan">
                      &gt;
                    </span>
                    &nbsp;
                    <a
                      href={`tel:${contact1}`}
                      style={{
                        textDecoration:
                          "none",
                        color: "black",
                        paddingLeft:
                          "0.2rem",
                      }}>
                      {contact1}
                    </a>
                    <br />
                    <a
                      href={`tel:${contact2}`}
                      style={{
                        textDecoration:
                          "none",
                        color: "black",
                        paddingLeft:
                          "1.6rem",
                      }}>
                      {contact2}
                    </a>
                    <br />
                    <a
                      href={`tel:${contact3}`}
                      style={{
                        textDecoration:
                          "none",
                        color: "black",

                        paddingLeft:
                          "1.6rem",
                      }}>
                      {contact3}
                    </a>
                  </p>
                  <p className="text-start text-dark fw-semibold datas">
                    <span className="yspan">
                      &gt;
                    </span>
                    &nbsp;
                    <a
                      href={`mailto:${emailAddress}`}
                      style={{
                        textDecoration:
                          "none",
                        color: "black",
                      }}>
                      {emailAddress}
                    </a>
                  </p>
                </div>
                <div className="include col-md-3 col-lg-3 col-12 ft-2 ps-md-5 links">
                  <h3 className="fhead">
                    <span className="yspan">
                      [
                    </span>
                    Quick Links
                    <span className="yspan">
                      ]
                    </span>
                  </h3>
                  <ul
                    className="ps-0 "
                    style={{
                      listStyle: "none",
                    }}>
                    <li className="nav-item py-2 py-2 links">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                        to="/school-annual-calendar"
                        onClick={handleTop}
                      >

                        Annual School
                        Calender
                      </Link>
                    </li>
                    <li className="nav-item py-2 links">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                        to="/our-magazine"
                        onClick={handleTop}
                      >
                        Our School
                        Magazine
                      </Link>
                    </li>
                    <li className="nav-item py-2 links">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                        to="/birthday-corner"
                        onClick={handleTop}
                      >

                        Birthday Corner
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="include col-md-3 col-lg-3 col-12 ft-3 ps-md-5 links">
                  <h3 className="fhead">
                    <span className="yspan">
                      [
                    </span>
                    Other Info
                    <span className="yspan">
                      ]
                    </span>
                  </h3>
                  <ul
                    className="ps-0"
                    style={{
                      listStyle: "none",
                    }}>
                    <li className="nav-item py-2">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                        to="/our-uniform"
                        onClick={handleTop}
                      >
                        Our Uniform
                      </Link>
                    </li>
                    <li className="nav-item py-2">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                        to="/admin-LogIn"
                        target="_blank"
                      >
                        Admin
                      </Link>
                    </li>
                    <li className="nav-item py-2">
                      <span className="yspan">
                        &gt;
                      </span>
                      &nbsp;
                      <Link
                        className="text-decoration-none text-dark fw-semibold"
                      // to={pdf2}
                      // target="_blank"
                      >
                        Fees Structure
                      </Link>

                    </li>
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </StyledDiv>
    </>
  );
}

export default Footer;
const StyledDiv = styled.div`
  .Footer {
    background-color: #eee;
    padding: 3rem 0;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
  }
  .ft-1 h3 {
    font-weight: 800;
    font-family: Georgia,
      "Times New Roman", Times, serif;
    color: black;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1em;
  }
  .ft-2 h3 {
    font-weight: 800;
    font-family: Georgia,
      "Times New Roman", Times, serif;
    color: black;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1em;
  }
  .ft-3 h3 {
    font-weight: 800;
    font-family: Georgia,
      "Times New Roman", Times, serif;
    color: black;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1em;
  }
  .ft-0 h3 {
    font-weight: 800;
    font-family: Georgia,
      "Times New Roman", Times, serif;
    color: black;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 1em;
  }

  .ft-0 a i {
    color: black;
    font-size: 1.5rem;
  }
  .ft-0 a i:hover {
    color: #feab00;
  }
  .yspan {
    color: #feab00;
    font-weight: bolder;
    font-size: large;
  }

  .fhead {
    margin-bottom: 30px;
  }
  
  .social {
    text-align: center;
  }

  .links {
    margin-top: 10px;
  }

  .include {
    margin-left: 20px;
  }

  .insta{
    
    color: #cd486b;
  }


    @media (min-width: 200px){
      
  .data1 {
    line-height: 12px;
  }

    }

    @media (min-width: 768px){

      .data1 {
    line-height: 18px;
  }

  h3 {
    width: 200px;
  }
  
  .links {
    width: 200px;
  }

    }

    @media (min-width: 992px){

      h3 {
        width: 300px;
      }
    }

`;