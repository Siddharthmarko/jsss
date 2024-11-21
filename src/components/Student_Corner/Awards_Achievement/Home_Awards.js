import React from "react";
import Awards_Achievement from "./Awards_Achievement";
import styled from "styled-components";
import Our_Achievement from "./Our_Achievement";
import Extra_Curricular from "./Extra_Curricular";

function Home_Awards() {
  return (
    <>
      <Wrapper>
        <Awards_Achievement />
        <Our_Achievement />
        <Extra_Curricular />
      </Wrapper>
    </>
  );
}

export default Home_Awards;
const Wrapper = styled.div``;
