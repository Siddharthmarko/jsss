import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MediaMain = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const [getId, setGetId] = useState("")
  const handleShow = (id) => {
    setShowModal(true);
    setFormData({ ...formData });
    setGetId(id);
  };
  const [awards, setAwards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://joyseniorsecondary.ac.in/api/auth/getmediacorner");
        setAwards(response.data.mediaCornerData);
      } catch (error) {
        console.error('Error fetching awards:', error);
      }
    };
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    year: "",
    cardimg: null,
    // bulkimg: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
  
    // Ensure that files is always an array
    const updatedFiles = Array.from(files);
  
    setFormData((prev) => ({
      ...prev,
      [name]: updatedFiles.length > 0 ? updatedFiles[0] : null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(getId);
  
    try {
        const form = new FormData();
      console.log(form);
      form.append("title", formData.title);
      form.append("year", formData.year);
      form.append("cardimg", formData.cardimg);
      const response = await axios.put(
        `https://joyseniorsecondary.ac.in/api/auth/updateMediaCorner/${getId}`,
        form, // Only send title and descp for updat
      );
      console.log(response.data); // Handle the response as needed
      window.location.reload();
      handleClose(); // Close the modal after successful update
    } catch (error) {
      console.error('Error updating awards and achievements:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://joyseniorsecondary.ac.in/api/auth/deleteMediaCornerById/${id}`);
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting awards and achievements:', error);
      // Handle error
    }
  };

  const handleView = (id) =>{
    console.log(id);
    navigate(`/view-media-corner/${id}`)
  }

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
                <button className="btns2" onClick={()=>navigate("/AdminHome")}>Admin Dashbord</button>
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
            <div className="col-lg-12 col-md-12 col-md-12 col-12">
              
              <table className="table">
                <thead className="table-dark">
                  <tr>
                    <th className="text-center">Medias Names</th>
                    <th className="text-center">Any type of Action</th>
                  </tr>
                </thead>
                {awards?.map((item) => (
                <tbody key={item.id}>
                  <tr>
                    <td className="text-center">
                      <span>{item.title}</span>
                    </td>
                    <td>
                      <ul>
                        <li>
                          <button onClick={() => handleView(item.id)} className="btns4">View Cards</button>
                        </li>
                        <li>
                          <Button
                            onClick={() => handleShow(item.id)}
                           className="btns5"
                          >
                            Update Cards
                          </Button>
                        </li>

                        <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Activity</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                      <div className="form-group">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Year</label>
                        <input
                          type="text"
                          className="form-control"
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Card Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="cardimg"
                          onChange={handleFileChange}
                        />
                      </div>
                      <Button variant="primary" type="submit">
                        Save changes
                      </Button>
                    </form>
                  </Modal.Body>
                </Modal>
                        <li>
                          <button onClick={() => handleDelete(item.id)} className="btns6"> Delete Cards</button>
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

export default MediaMain;
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
    font-size: 25px;
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
  .btns4 {
    padding-inline: 25px;
    padding-block: 10px;
    border-radius: 25px;
    border: 2px solid #33ffe0;
    background: none;
    font-size: 18px;
    font-weight: 500;
    &:hover {
      background-color: #33ffe0;
      color: white;
    }
  }
  .btns5 {
    padding-inline: 25px;
    padding-block: 10px;
    border-radius: 25px;
    border: 2px solid #4cff33;
    background: none;
    font-size: 18px;
    font-weight: 500;
    color: black;
    &:hover {
      background-color: #4cff33;
      color: white;
    }
  }
  .btns6 {
    padding-inline: 25px;
    padding-block: 10px;
    border-radius: 25px;
    border: 2px solid #b833ff;
    background: none;
    font-size: 18px;
    font-weight: 500;
    &:hover {
      background-color: #b833ff;
      color: white;
    }
  }
`; 