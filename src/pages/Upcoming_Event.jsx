import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import axios from "axios";
import Copy from "../Layout/Copy";

const Upcoming_Event = () => {
  const [upEvent, setUpEvent] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.joyseniorsecondary.ac.in/api/auth/getAllupcomingevents`);
      console.log(response.data);
      setUpEvent(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData()
  }, [])
  return (
    <>
      <Header />

      <Container>
        <>
          <div className="container-fluid">
            <div className="Container mx-1">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-1 "></div>

                <div className="col-lg-6 col-md-7 col-sm-10 mt-5">
                  <div class="card rounded-3 text-black p-2">
                    {upEvent.map((item)=>(
                    <div>
                      <h4 className="Certificate mt-5 mx-4">
                        {" "}
                       {item.title}
                      </h4>
                      <div className="mx-4">
                      <a href={item.desc}>{item.desc}</a>
                    </div>
                    </div>
                    ))}
                    <br /> 
                  </div>
                </div>

                <div className="col-lg-3 col-md-1 col-sm-1"></div>
              </div>
            </div>
          </div>
        </>
      </Container>
      <Footer />
      <Copy/>
    </>
  );
};

export default Upcoming_Event;

const Container = styled.div`
  background-color: #f9fafb;
  height: 45vh;
  * {
    margin: 0;
    padding: 0;
    border: border-box;
  }

  .button {
    border-radius: 0px 15px 0px 15px;
  }
  .card {
    height: 120%;
    width: 120%;
    margin: 1%;
    border-style: none;

    @media screen and (max-width: 768px) {
      height: 100%;
      width: 100%;
      margin: 0%;
    }
  }
  a {
    text-decoration: none;
  }
`;
