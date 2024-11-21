import React from "react";
import styled from "styled-components";
import Header from "../../../Layout/Header";
import Header2 from "../../../Layout/Header2";

function Awards_Achievement() {
  return (
    <>
      <Header />
      <Header2 heading="Awards & Achievements" />
      <Wrapper>
        <div className="container-fluid" style={{ backgroundColor: "#f7f7f7" }}>
          <div className="container text-center">
            <h1 className=" hdd">Doaguru School</h1>
            <p className="para">
              In its academic pursuits, Doaguru School has consistently excelled
              across various fields. The years of dedicated effort have infused
              new energy into the institution, enriching its long and storied
              journey. Its success narrative is marked by achievements
              recognized by both governmental and non-governmental
              organizations.
            </p>
            <p className="para">
              The school has successfully stood the test of time, excelling in
              academics, culture, sports, and extracurricular activities.
              Doaguru School has actively supported the state government's
              literacy mission, receiving an excellence certificate for its
              moral and effective promotion of the initiative. The school
              consistently sets high standards and has been recognized for its
              remarkable achievements across various ventures.
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Awards_Achievement;
const Wrapper = styled.div`
  .hdd {
    font-size: 1.7rem;
    font-weight: bolder;
    /* padding: 4rem; */
    padding: 12px 0px;
    /* @media screen and (max-width: 768px) {
      padding: 2rem;
      font-size: 2rem;
    } */
  }
  .para {
    font-size: 16px;
    color: #5a626d;
    line-height: 1.5rem;
    padding: 1rem;
  }

  @media (min-width: 430px) {
  }

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
    .hdd {
      font-size: 2rem;
      padding: 2rem;
    }

    .para {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  @media (min-width: 992px) {
    .para {
      font-size: 1.4rem;
      line-height: 2.5rem;
    }

    .hdd {
      font-size: 2.5rem;
      padding: 2rem;
    }
  }

  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
