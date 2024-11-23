import React from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

// Demo PDF Links (Placeholder URLs)
const pdf1 = "https://www.w3.org/WAI/WCAG21/quickref/WCAG2.1%20Quick%20Reference%20-%20PDF%20Demo.pdf";
const pdf2 = "https://www.w3.org/WAI/WCAG21/quickref/WCAG2.1%20Quick%20Reference%20-%20PDF%20Demo.pdf";
const pdf3 = "https://www.w3.org/WAI/WCAG21/quickref/WCAG2.1%20Quick%20Reference%20-%20PDF%20Demo.pdf";
const pdf4 = "https://www.w3.org/WAI/WCAG21/quickref/WCAG2.1%20Quick%20Reference%20-%20PDF%20Demo.pdf";

const Examination = () => {
  return (
    <>
      <Header />
      <Header2 heading="Examination Pattern" />
      <Container>
        <div className="mt-5 mb-2 top-heading">
          <h2 className="d-flex justify-content-center align-items-center mb-lg-0 mt-lg-5 mt-sm-0">
            Examination Pattern
          </h2>
        </div>
        <div className="Container mt-lg-5 mb-sm-0">
          <div className="row mb-5">
            <div className="col-lg-12 mt-lg-0">
              <div className="row">
                <div className="col-lg-6 exam mt-lg-0">
                  <h2>for class I - V</h2>
                  <div className="col-lg-3 col-sm-6">
                    <a href={pdf1} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn button p-2 ms-lg-5 mt-3">
                        Download
                      </button>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 exam mt-lg-5">
                  <h2>for class VI - VIII</h2>
                  <div className="col-lg-3 col-sm-6">
                    <a href={pdf2} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn button p-2 ms-lg-5 mt-3">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-lg-5">
              <div className="row">
                <div className="col-lg-6 exam mt-lg-5">
                  <h2>for class IX -X</h2>
                  <div className="col-lg-3 col-sm-6">
                    <a href={pdf3} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn button p-2 ms-lg-5 mt-3">
                        Download
                      </button>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 exam mt-lg-5">
                  <h2>for class XI - XII</h2>
                  <div className="col-lg-3 col-sm-6">
                    <a href={pdf4} target="_blank" rel="noopener noreferrer">
                      <button type="button" className="btn button p-2 ms-lg-5 mt-3">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      <Copy />
    </>
  );
};

export default Examination;

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  .top-heading {
    @media only screen and (min-width: 214px) and (max-width: 300px) {
      text-align: center;
    }
  }
  h2 {
    font-family: "ABeeZee", sans-serif;
    font-size: 41px;
    color: #4d4dff;
    font-weight: 600;
    @media only screen and (min-width: 200px) and (max-width: 1023px) {
      font-size: 30px;
      margin-top: 25px;
    }
  }
  .button {
    color: #dc3545;
    border-color: #dc3545;
    border-radius: 0px 15px;
    @media only screen and (min-width: 745px) and (max-width: 1023px) {
      margin-left: 160px;
    }
  }

  .button:hover {
    transition: color 0.3s ease;
    color: #e69b00;
    border-color: #e69b00;
  }

  .exam {
    display: grid;
    place-items: center;
  }
`;
