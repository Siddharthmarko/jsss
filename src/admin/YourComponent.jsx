import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import RouterMain from "./pages/RouterMain";

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    descp: "",

    cardimg: null,
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
      [name]: name === "bulkimg" ? updatedFiles : updatedFiles[0], // Adjust for bulkimg
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      console.log(form);
      form.append("cardimg", formData.cardimg);
      form.append("title", formData.title);
      form.append("descp", formData.descp);
      form.append("year", formData.year);

      // Append each file in bulkimg array
      // formData.bulkimg.forEach((file, index) => {
      //   form.append("bulkimg", file); // Use the correct field name without [index]
      // });

      await axios.post(
        "https://www.joyseniorsecondary.ac.in/api/auth/awardsachiv",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Data and images uploaded successfully");
      console.log(form);
      handleClose();
    } catch (error) {
      console.error("Error uploading data and images:", error.message);
    }
  };

  const handleAward = () => {
    navigate("/award-two");
  };

  return (
    <>
      <RouterMain />
      <Styled>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
              <div className="d-flex justify-content-between align-items-center mt-5">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  className="Insert"
                >
                  Insert Award & Achievement
                </Button>

                <Modal show={showModal} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Award & Achievement</Modal.Title>
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
                        <label>Description</label>
                        <input
                          type="text"
                          className="form-control"
                          name="descp"
                          value={formData.descp}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>year</label>
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

                      {/* <div className="form-group">
                        <label>Bulk Image</label>
                        <input
                          type="file"
                          className="form-control"
                          name="bulkimg"
                          multiple
                          onChange={handleFileChange}
                        />
                      </div> */}

                      <Button variant="primary" type="submit">
                        Save changes
                      </Button>
                    </form>
                  </Modal.Body>
                </Modal>

                <button className="Insert" onClick={handleAward}>
                  Show all Award & Achievement
                </button>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default YourComponent;

const Styled = styled.div`
  .Insert {
    padding: 5rem;
    background-color: chocolate;
    color: white;
    font-size: 30px;
    border: none;
    border-radius: 12px;
  }
`;

// import React, { useState, useEffect } from 'react';

// const YourComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://www.joyseniorsecondary.ac.in/api/auth/getawards');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data.map((item) => (
//         <div key={item.id}>
//           <img src={item.cardImageUrl} alt="Card" />
//           <h2>{item.title}</h2>
//           <p>{item.descp}</p>
//           <div>
//             {item.bulkImageUrls.map((url) => (
//               <img key={url} src={url} alt="Bulk" />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;
