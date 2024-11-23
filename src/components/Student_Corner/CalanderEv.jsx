import React from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const CalanderEv = () => {
  return (
    <>
      <Header />
      <Header2 heading="School Annual Event Calender" />
      <Container>
        <div className="container-fluid calander-box bg-light mt-3">
          <div className="row">
            <div className="col-lg-1 col-sm-0"></div>
            <fieldset className="col-lg-10 col-sm-12 bdr">
              <iframe
                title="Tockify Calendar"
                src="https://www.commoninja.com/calendar/editor/view" // Replace with your google calender here
                style={{ border: "0", width: "100%", height: "600px" }}
                frameBorder="0"
              />
            </fieldset>
          </div>
        </div>
      </Container>
      <Footer />
      <Copy />
    </>
  );
};

export default CalanderEv;

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }
  .bdr {
    border: 1px solid grey;
  }
`;
