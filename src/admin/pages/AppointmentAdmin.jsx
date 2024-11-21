import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const AppointmentAdmin = () => {
  const [getAppoint, setGetAppoint] = useState([]);
  const navigate = useNavigate();
  const fetchdata = async () => {
    try {
      const res = await axios.get(
        `https://www.joyseniorsecondary.ac.in/api/auth/getappointment`
      );
      setGetAppoint(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Styled>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="d-flex justify-content-between align-items-center m-3">
                <button className="btns1" onClick={() => window.history.back()}>
                  <IoIosArrowBack />
                </button>
                <button
                  className="btns2"
                  onClick={() => navigate("/AdminHome")}
                >
                  Admin Dashbord
                </button>
                <button
                  className="btns3"
                  onClick={() => window.location.reload()}
                >
                  <FaArrowRotateRight />
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <table className="table">
              <thead className="table-dark">
                <tr>
                  <th className="text-center">Names</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Date</th>
                  <th className="text-center">Phone No.</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">Message</th>
                </tr>
              </thead>
              {getAppoint.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td className="text-center">
                      <span>
                        {item.fname}&nbsp;{item.lname}
                      </span>
                    </td>
                    <td className="text-center">
                      <span>{item.email}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.create_date}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.phone}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.className}</span>
                    </td>
                    <td className="text-center">
                      <span>{item.msg}</span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default AppointmentAdmin;
const Styled = styled.div`
  .btns1 {
    background-color: #c7cc26;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 10px;
  }
  .btns2 {
    background-color: #de169a;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 10px;
  }
  .btns3 {
    background-color: #14b7a8;
    color: white;
    border: none;
    padding: 1rem;
    border-radius: 10px;
  }
  span {
    color: black;
    font-size: 20px;
    font-weight: 500;
    font-family: "Times New Roman", Times, serif;
  }
  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    list-style: none;
  }
`;
