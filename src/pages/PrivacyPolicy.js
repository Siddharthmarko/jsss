import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import Copy from "../Layout/Copy";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>
            This privacy policy outlines how DG Kidoes Preschool uses and
            protects any information that you provide while using this website.
            DG Kidoes Preschool is committed to safeguarding your privacy. If we
            request any information that can identify you while using this
            website, rest assured that it will only be used in accordance with
            this privacy policy.
          </p>
          <h3>What we collect? We may collect the following information:</h3>
          <ul>
            <li>Personal Information of the Students</li>
            <li>Academic Information of the Students</li>
            <li>Demographic information such as postcode.</li>
            <li>Location of the employees</li>
            <li>Android Unique ID.</li>
          </ul>
          <h3>What do we do with the information?</h3>
          <p>
            We require this information for providing you convenient online
            transactions both financial and academic. We will never share, sell,
            or rent individual personal information with anyone for their
            promotional use without your advance permission or unless ordered by
            a court of law. Information submitted to us is only available to
            employees of Doaguru School Jabalpur, managing this information for
            purposes of contacting you or sending you emails based on your
            request for information. We use location of the device so that
            whenever an employee of Daoguru School Jabalpur marks attendance
            from the mobile app, school will get to know whether the attendance
            was marked from an allowed premises. We are storing Android Unique
            ID along with other login information to keep record that what all
            accounts are being accessed from a single device.
          </p>
        </div>
      </div>
      <Footer />
      <Copy />
    </>
  );
};

export default PrivacyPolicy;
