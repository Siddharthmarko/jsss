import React from "react";
import Header from "../Layout/Header";

const Pricing = () => {
  return (
    <>
      <Header />
      <div>
        <h2>Our Pricing Policy</h2>
        <p>
          Limited seats are available. <br />
          This registration does not entitle a child for admission. <br />
          Please ensure that the Name of the child and parents are same in all
          the documents or it may lead to the discrepancy and may result in the
          rejection of the form. <br />
          More than one Registration forms for one candidate will be rejected.{" "}
          <br />
          Incomplete Registration will be summarily rejected No future request
          will be entertained to have any change in the date of birth of the
          child. <br />
          e-Registration charges (Rs. 750/-) is non-refundable. <br /> In case
          of remaining / absent on due Date / Time of interview or test the
          registration charges get forfeited.
        </p>
      </div>
    </>
  );
};

export default Pricing;
