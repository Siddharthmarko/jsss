import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
// import logo from "../../admin/images/cropped-unnamed-1.png";
import logo1 from "../../admin/images/DGlogo.png"
// import logo from "../all imgs/home/DSlogo4.png"

import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess, 
  signInFailure,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const AdminLogin = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await axios.post(
        `https://www.joyseniorsecondary.ac.in/api/auth/loginadmin`,
        loginData
      );
      console.log(res.data);
      dispatch(signInSuccess(res.data));
      navigate("/AdminHome");
      setLoginData({
        username: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
      dispatch(signInFailure(err.message));
    }
  };

  return (
    <>
      <Styled>
        <div className="containerbox h-100">
          <div className="row ">
            <div className="main-head col-10 col-md-8 mt-md-5 m-auto shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="small d-flex flex-column justify-content-center align-items-center">
                
                <div className="p-2">
                  <img src={logo1} alt="logo" width={"250px"} />
                </div>
                <div>
                  <h3>Login</h3>
                </div>
                <form onSubmit={handleSubmit} className="formi">
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form5Example1">
                      UserName
                    </label>
                    <input
                      type="text"
                      id="form5Example1"
                      className="inputbox form-control"
                      name="username"
                      value={loginData.username}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form5Example2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form5Example2"
                      className="inputbox form-control "
                      name="password"
                      value={loginData.password}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-shadow mb-4 mt-4"
                  >
                    Login
                  </button>
                  <p className="text-danger fw-bold">
                    {/* {error ? "Something went wrong!" : ""} */}
                    {error ? "" : ""}
                  </p>
                  {/* <Link to="/admin-register">Register</Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default AdminLogin;

const Styled = styled.div`

.containerbox {
  background: linear-gradient(135deg, #7d38c6 0%, #a45eb0 50%, #c78ad5 100%);
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
}


.btn {
  background-color: #7d38c6;
  color: white;
  border: none;
}

.btn-shadow:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a shadow on hover */
  }


  .form-control-custom:focus {
    outline: none; /* Remove default focus outline */
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.25); /* Add a custom box shadow */
    border-color: #007bff; /* Change border color */
  }



 @media (min-width: 430px){

  .main-head {
    width: 450px;
    
  }

}

@media (min-width: 576px){

}
 @media (min-width: 768px){

 
}

@media (min-width: 992px){

  .inputbox {
    width: 300px;
  }

}

@media (min-width: 1200px){

}
 @media (min-width: 1400px){

}


`;
