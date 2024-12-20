import React from "react";
import styled from "styled-components";

const Copy = () => {
  return (
    <>
      <Container>
        <div className="Container">
          <div className="row">
            <div className="col-lg-12 right bg-light ">
              <div className="row">
                <div className="col-lg-6 col-sm-12 mt-3 d-flex justify-content-center align-items-center">
                  <p>
                    &copy; 2023 Doaguru SCHOOL . DEVELOPED BY
                    Doaguru INFOSYSTEMS
                  </p>
                </div>

                <div className="col-lg-4 mt-3 col-sm-12 d-flex justify-content-center">
                  <div className="d-flex justify-content-center ">
                    <div className="d-flex justify-content-center mx-0">
                      <p><a href="">TERMS AND CONDITION</a></p>
                    </div>
                    <div className="">
                      <p>|</p>
                    </div>
                    <div className="text-center ">
                      <p><a href="">PRIVACY POLICY</a></p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-sm-12 mt-3 text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Copy;

const Container = styled.div`
  background-color: #4c4c4c;

  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  .right {
    height: 70px;
  }
  h6 {
    color: #102d5e;
    font-family: "Roboto", sans-serif;
    @media only screen and (min-width: 280px) and (max-width: 745px) {
      font-size: 12px;
      margin-top: 5px;
    }
  }
  p {
    font-size: 13px;
    margin-left: 7px;
    font-family: "Roboto", sans-serif;
    @media only screen and (min-width: 280px) and (max-width: 745px) {
      text-align: center;
    }
  }
  .half {
    @media only screen and (min-width: 280px) and (max-width: 745px) {
      display: none;
    }
  }
`;
