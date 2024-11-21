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
      <Header2 heading="School Annual Event Calender"/>
      <Container>
        <div className="container-fluid calander-box bg-light mt-3">
          <div className="row">
            <div className="col-lg-1 col-sm-0"></div>
            <fieldset className="col-lg-10 col-sm-12 bdr">
              <iframe
                title="Calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=UTC&showTitle=0&showTz=0&src=am95ZGlnaXRhbDIwMjJAZ21haWwuY29t&src=MWQzYTMyNjRlZjhmM2Q4NGM5OTRhY2RjNDJiNDE0ZjkyNTY1OTU2NjcxM2M0ODEyMTM1NTQ4MmJhNmQ4MDk1OUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23D50000&color=%231313cc&color=%2333B679&color=%23F6BF26"
                style={{ border: "0", width: "100%", height: "600px" }}
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
