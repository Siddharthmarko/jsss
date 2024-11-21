import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Modal, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewMedia = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    setShowModal(true);
  };
  const { id } = useParams();
  console.log(id);

  const [allImg, setAllImg] = useState([]);
  console.log(allImg);

  const getImage = async () => {
    try {
      const res = await axios.get(
        `https://joyseniorsecondary.ac.in/api/auth/getMediacornerbyid/${id}`
      );
      console.log(res.data.mediaCornerData);
      setAllImg(res.data.mediaCornerData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    getImage();
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
        </div>

        <div className="container" style={{ marginTop: "10rem" }}>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="card" style={{ width: "22rem" }}>     
                  <img
                    src={allImg.cardimg}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{allImg.title}</h5>
                    {/* <p className="card-text">
                     {item.descp}
                    </p> */}
                    {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                    {/* <Button className="btn4" onClick={handleShow}>
                      <IoIosArrowForward size={30} />
                    </Button>
                    <Modal show={showModal} onHide={handleClose} centered>
                      <Modal.Header closeButton>
                        <Modal.Title>Award & Achievement</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Carousel>
                        {item.bulkImageUrls.map((url)=>(
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              key={url}
                              src={url}
                              alt="First slide"
                            />
                          </Carousel.Item>
                          ))}
                        </Carousel>
                      </Modal.Body>
                    </Modal> */}
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default ViewMedia;
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
  .btn4 {
    margin-left: 8rem;
    border: none;
    padding: 0.5rem;
    border-radius: 50%;
    color: white;
    background-color: #929fba;
  }
`;
