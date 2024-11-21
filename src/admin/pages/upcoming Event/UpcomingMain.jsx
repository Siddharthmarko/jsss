import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpcomingMain = () => {
  // const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const [getId, setGetId] = useState("")
  // const handleShow = (id) => {
  //   setShowModal(true);
  //   setFormData({ ...formData });
  //   setGetId(id);
  // };
  const [awards, setAwards] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.joyseniorsecondary.ac.in/api/auth/getAllupcomingevents"
      );
      setAwards(response.data);
    } catch (error) {
      console.error("Error fetching awards:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handledelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://www.joyseniorsecondary.ac.in/api/auth/deleteUpcomingEvent/${id}`
      );
      if (response.status === 200) {
        console.log("Event deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting event:", error.message);
    }
  };
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
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-md-12 col-12">
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th className="text-center">Upcoming Event Names</th>
                    <th className="text-center">Upcoming Event Link</th>
                    <th className="text-center">type of Action</th>
                  </tr>
                </thead>
                {awards?.map((item) => (
                  <tbody key={item.id}>
                    <tr>
                      <td className="text-center">
                        <span>{item.title}</span>
                      </td>
                      <td className="text-center">
                        <span>{item.desc}</span>
                      </td>
                      <td>
                        <ul>
                          <li>
                            <button
                              onClick={() => handledelete(item.id)}
                              className="btn btn-danger"
                            >
                              {" "}
                              Delete Event
                            </button>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default UpcomingMain;
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
    font-size: 22px;
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
