import React from "react";
// import SclEvent from '../components/SclEvent';
// import PhotoScl from '../components/PhotoScl';
import SportScl from "./SportScl";
import SportSectionII from "./SportSectionII";
import Header from "../../Layout/Header";
import Header2 from "../../Layout/Header2";
import Footer from "../../Layout/Footer";
import Copy from "../../Layout/Copy";

const Home_Sport = () => {
  return (
    <>
      <Header />
      <Header2 heading="Sports Gallery"/>
      <SportScl />
      <SportSectionII />
      <Footer />
      <Copy/>
    </>
  );
};

export default Home_Sport;
