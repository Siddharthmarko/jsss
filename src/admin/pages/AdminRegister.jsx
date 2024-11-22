import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Swal from "sweetalert2";
import logo from "../../admin/images/DGlogo.png";
import { Link } from "react-router-dom";
import RouterMain from "./RouterMain";

const AdminRegister = () => {
  const [regsData, setRegsData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://www.joyseniorsecondary.ac.in/api/auth/regsadmis`,
        regsData
      );
      console.log(res.data);

      Swal.fire({
        title: "Success!",
        text: "Admin Register",
        icon: "success",
        confirmButtonText: "OK",
      });

      setRegsData({
        username: "",
        password: "",
      });

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <RouterMain />
      <Styled>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="p-4">
                  <img src={logo} alt="logo" width={"150px"} />
                </div>
                <div>
                  <h3>Register</h3>
                </div>
                <form onSubmit={handleSubmit} style={{ width: "15rem" }}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="form5Example1"
                      className="form-control"
                      name="username"
                      value={regsData.username}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form5Example1">
                      UserName
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                      name="password"
                      value={regsData.password}
                      onChange={handleChange}
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Password
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block mb-4"
                    onClick={handleSubmit}
                  >
                    Register
                  </button>
                  {/* <Link to="/admin-LogIn">Login</Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Styled>
    </>
  );
};

export default AdminRegister;
const Styled = styled.div``;
