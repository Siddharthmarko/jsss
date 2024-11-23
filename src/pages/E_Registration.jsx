import React from "react";
import styled from "styled-components";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Header2 from "../Layout/Header2";
import { Link } from "react-router-dom";

const E_Registration = () => {
  return (
    <>
      <Header />
      <Header2 heading="E-Registration Details" />

      <Container>
        <>
          <div className="container-fluid">
            <div className="Container   mx-1">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-1 "></div>

                <div className="col-lg-6 col-md-7  col-sm-10 mt-5">
                
                  <div className="d-flex justify-content-center mt-2">
                    <a
                      href="https://joyjbl.nascorptechnologies.com/gw/gls/onlineAppForms?code=tqmeQ7"
                      target="_blank"
                    >
                      {/* <button className="btn btn-success p-2">
                        e-Registration
                      </button> */}
                    </a>
                  </div>

                  <div className="">
                    <table class="table table-striped">
                      <tbody>
                        <tr>
                          <td className="text-white bg-black text-center">
                            Document Required
                          </td>
                        </tr>
                        <tr>
                          <td>Birth Certificate of the child.</td>
                        </tr>
                        <tr>
                          <td>Student Passport Size Photo.</td>
                        </tr>
                        <tr>
                          <td>Father and Mother of Passport Size Photo.</td>
                        </tr>
                        <tr>
                          <td>
                            Caste Certificate of the child. (For ST / SC /OBC
                            Candidates)
                          </td>
                        </tr>
                        <tr>
                          <td>AADHAAR Card of Child.</td>
                        </tr>
                        <tr>
                          <td>Samagra Family Card.</td>
                        </tr>
                        <tr>
                          <td>
                            Child's bank passbook first page with visible
                            Account No. and Bank IFSC Code.
                          </td>
                        </tr>
                        <tr>
                          <td>Previous class result.</td>
                        </tr>
                        <tr>
                          <td>
                            Class II onwards without the Original Transfer
                            Certificate (TC) admission will not be given.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Blood group of the child (Certified from the
                            recognized pathology)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-3 col-md-1 col-sm-1"></div>
              </div>
            </div>
          </div>
        </>
      </Container>
      <Footer />
    </>
  );
};

export default E_Registration;

const Container = styled.div`
  background-color: #f9fafb;
  height: 100%;

  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  td {
    padding: 2%;
  }
`;
