import React from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";

const Uniform = () => {
  return (
    <>
      <Header />
      <Header2 heading="Our Uniform" />

      <Container>
        <div className="Container-fluid">
          <div className="row mt-5 Uniness">
            <div className="col-1"></div>
            <div className="col-10 text-center">
              <img
                src={"https://img.freepik.com/free-vector/hand-drawn-school-uniform-element-collection_23-2149907795.jpg?t=st=1732358546~exp=1732362146~hmac=f08b87c5baa0862b8a6250fe61e177948ffee837780f50d7e41ecb80cd77d800&w=1480"}
                height={750}
                width={1270}
                alt="uniform"
                className="Uniform img-fluid"
              />
            </div>
            <div className="col-1"></div>
          </div>
        </div>

        <div className="pdf mt-4">
          <h2>Download Uniform PDF</h2>
          <div className="col-lg-3 text-center mt-4 mb-5">
            <a>
              <button type="button" class="btn button p-2">
                Download
              </button>
            </a>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Uniform;
const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  body {
    background-color: #4d7db7;
  }
  .Uniform {
    @media only screen and (min-width: 200px) and (max-width: 1024px) {
      width: 100%;
      height: 100%;
    }
  }
  .button {
    border-radius: 0px 15px 0px 15px;
    color: #dc3545;
    border-color: #dc3545;
    border-radius: 0px 15px;
  }
  .button:hover {
    transition: color 0.3s ease;
    color: #e69b00;
    border-color: #e69b00;
  }
  .pdf {
    display: grid;
    place-items: center;
  }
  /* .Uniness{
  @media only screen and (min-width:1025px) and (max-width:1273px) {
    margin-right:1224px;
  }
  @media only screen and (min-width:1273px) and (max-width:1495px) {
   width:60%;
  }
  @media only screen and (min-width:1600px) and (max-width:3200px) {
   
  }
} */
`;
