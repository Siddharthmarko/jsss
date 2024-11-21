import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlinePoweroff } from "react-icons/ai";
import { AiOutlineFilePpt } from "react-icons/ai";
import { AiFillTrophy } from "react-icons/ai";
import { AiTwotoneSchedule, AiOutlineAppstore } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { MdOutlineDoNotDisturb } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { AiOutlineFileDone } from "react-icons/ai";
import { AiTwotoneCalendar } from "react-icons/ai";
import RouterMain from "../RouterMain";

function RegisterCards() {
  const navigate = useNavigate();
  return (
    <>
    <RouterMain/>
      <Wrapper>
        <div className="container-fluid">
          <div className="row" id="cardrow">
            <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/admin-Register")}
            >
              <div className="card" id="card1">
                <div className="card-body ">
                  <AiOutlineFileDone size={30} />

                  <h3>Admin Register</h3>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/all-register-student")}
            >
              <div className="card" id="card2">
                <div className="card-body ">
                  <PiStudentFill size={32} />
                  <h3>All Register Student</h3>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/block-student-data")}
            >
              <div className="card" id="card3">
                <div className="card-body ">
                  <MdOutlineDoNotDisturb size={30} />
                  <h3>Blocked Student</h3>
                </div>
              </div>
            </div>
            {/* <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/photo-gallery")}
            >
              <div className="card" id="card4">
                <div className="card-body ">
                  <AiFillPicture size={30} />
                  <h3>Photo Gallery</h3>
                </div>
              </div>
            </div> */}

            {/* <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/activity")}
            >
              <div className="card" id="card5">
                <div className="card-body ">
                  <AiTwotoneSchedule size={30} />
                  <h3>Activities</h3>
                </div>
              </div>
            </div> */}
            {/* <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/YourComponent")}
            >
              <div className="card" id="card6">
                <div className="card-body ">
                  <AiFillTrophy size={30} />
                  <h3>Award & Achievement</h3>
                </div>
              </div>
            </div> */}
            {/* <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/upcoming-event")}
            >
              <div className="card" id="card7">
                <div className="card-body ">
                  <AiTwotoneCalendar size={30} />
                  <h3>Upcoming Events</h3>
                </div>
              </div>
            </div> */}
            {/* <div
              className="col-lg-4 col-md-12"
              onClick={() => navigate("/uploadcertificate")}
            >
              <div className="card" id="card7">
                <div className="card-body ">
                  <AiOutlineFilePpt size={30} />
                  <h3>Tranfer & Character Certificate</h3>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default RegisterCards;
const Wrapper = styled.div`
  .card {
    height: 90%;
    width: 100%;
    padding: 10%;
    border-radius: 2%;
    text-align: center;
  }
  #card1 {
    background-image: linear-gradient(#fff0b4, #f3e8f2);
  }
  #card2 {
    background-image: linear-gradient(#cde6db, #f3e8f2);
  }
  #card3 {
    background-image: linear-gradient(#9dc5f8, #dfeefa);
  }
  #card4 {
    background-image: linear-gradient(#cde6db, #f3e8f2);
  }
  #card5 {
    background-image: linear-gradient(#9dc5f8, #dfeefa);
  }
  #card6 {
    background-image: linear-gradient(#fff0b4, #f3e8f2);
  }
  #card7 {
    background-image: linear-gradient(#fff0b4, #f3e8f2);
  }
  #card8 {
    background-image: linear-gradient(#cde6db, #f3e8f2);
  }
`;
