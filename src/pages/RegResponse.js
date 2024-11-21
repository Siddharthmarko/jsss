import React, { useEffect, useState } from "react";
// import Layout from "../Layout/Layout";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
// require("./globalContext");

const RegResponse = () => {
  const [data, setData] = useState([]);
  const [showGreet, setShowGreet] = useState(false);

  const getLastReciept = async () => {
    try {
      const res = await axios.get(
        "https://joyseniorsecondary.ac.in/api/auth/getLastReceipt"
      );
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async () => {
    // alert("hello");
    try {
      // await getLastReciept();
      console.log(data);
      const response = await axios.put(
        `https://joyseniorsecondary.ac.in/api/auth/update-order/${data.recID}`,
        { status: "success" }
      );
      console.log(response);
      setShowGreet(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(showGreet);
  useEffect(() => {
    getLastReciept();

    // Call updateStatus() five times
    // Array.from({ length: 5 }).forEach(() => {
    //   updateStatus();
    // });
  }, []);

  console.log(data.recID);

  return (
    <>
      <Header />
      <Container>
        <div className="d-flex justify-content-center">
          {showGreet === false ? (
            <>
              <div className="container d-flex justify-content-center p-5">
                <div className="box p-5 rounded">
                  <p>Please Confirm Payment</p>
                  <button className="btn btn-success" onClick={updateStatus}>
                    submit
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="box p-5 rounded shadow">
                <p className="text-justify">
                  Dear Parent,
                  <br /> <br />
                  We thank you and appreciate you for your interest in seeking
                  e-Registration with our school for your ward. Your
                  e-registration receipt number -{" "}
                  <strong>{data.receipt}</strong> please come and show
                  e-registration reciept number and collect the prospectus on
                  payment of (750/-) from the executives at Front Desk of our
                  institution between 10:00 am to 2:00 pm only, from 15th
                  January 2024 onwards.
                  <br />
                  <br />
                  Principal <br /> <strong>Doaguru Senior Secondary School</strong>
                </p>
                <Link to="/" className="btn btn-outline-success">
                  Go Home
                </Link>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default RegResponse;
const Container = styled.div`
  background: url("https://res.cloudinary.com/antrix/image/upload/v1681813312/party%20people%20rockon/mid-two-bg_ego2on.png");
  height: 90vh;
  .box {
    width: 25rem;
    background: #e0e0e0;
    // box-shadow: 0px 11px 30px #988f8f;
    margin-top: 5rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    p {
      text-align: justify;
    }
  }
`;
