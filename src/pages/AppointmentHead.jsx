import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Layout/Header";
import Header2 from "../Layout/Header2";
import Footer from "../Layout/Footer";
import Copy from "../Layout/Copy";

const AppointmentHead = () => {
  const [appoint, setAppoint] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    className: "",
    section: "",
    addmission: "",
    msg: "",
  });

  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   // Set the current date when the component is mounted
  //   const today = new Date();
  //   const formattedDate = today.toISOString().split("T")[0];
  //   setCurrentDate(formattedDate);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppoint((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        // `https://www.joyseniorsecondary.ac.in/api/auth/appointment`,
        appoint
      );
      console.log(res.data);

      Swal.fire({
        title: "Success!",
        text: "We will contact you shortly",
        icon: "success",
        confirmButtonText: "OK",
      });

      setAppoint({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        className: "",
        section: "",
        addmission: "",
        msg: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <Header2 heading="Appointment With Head" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center p-5">
            <h3>Booking your Meeting with Doaguru School Head</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init class="form-outline">
                <input
                  type="text"
                  id="form6Example1"
                  className="form-control"
                  name="fname"
                  value={appoint.fname}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" for="form6Example1">
                  First Name
                </label>
              </div>
            </div>
            <div class="col">
              <div data-mdb-input-init class="form-outline">
                <input
                  type="text"
                  id="form6Example2"
                  className="form-control"
                  name="lname"
                  value={appoint.lname}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" for="form6Example2">
                  Last Name
                </label>
              </div>
            </div>
          </div>

          {/* Email */}
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="text"
              id="form6Example3"
              className="form-control"
              name="email"
              value={appoint.email}
              onChange={handleChange}
              required
            />
            <label className="form-label" for="form6Example3">
              Email ID
            </label>
          </div>

          {/* <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="text"
            id="currentDate"
            className="form-control"
            name="currentDate"
            value={currentDate}
            readOnly // Make the input readOnly
          />
          <label className="form-label" htmlFor="currentDate">
            Current Date
          </label>
        </div> */}

          {/* PHONE NO */}
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="text"
              id="form6Example3"
              className="form-control"
              name="phone"
              value={appoint.phone}
              onChange={handleChange}
              required
            />
            <label className="form-label" for="form6Example3">
              Phone
            </label>
          </div>

          {/*  Class Dropdown */}
          <div data-mdb-input-init class="form-outline mb-4">
            <select
              id="form6Example4"
              className="form-select"
              name="className"
              value={appoint.className}
              onChange={handleChange}
              required
            >
              <option value="" selected disabled>
                Choose Class
              </option>
              <option value="class1">Class 1</option>
              <option value="class2">Class 2</option>
              <option value="class3">Class 3</option>
              <option value="class4">Class 4</option>
              <option value="class5">Class 5</option>
              <option value="class6">Class 6</option>
              <option value="class7">Class 7</option>
              <option value="class8">Class 8</option>
              <option value="class9">Class 9</option>
              <option value="class10">Class 10</option>
              <option value="class11">Class 11</option>
              <option value="class12">Class 12</option>
            </select>
            <label className="form-label" for="form6Example4">
              Class
            </label>
          </div>

          {/* Section dropdown */}
          <div data-mdb-input-init className="form-outline mb-4">
            <select
              id="form6Example5"
              className="form-select"
              name="section"
              value={appoint.section}
              onChange={handleChange}
              required
            >
              <option value="" selected disabled>
                Choose Section
              </option>
              <option value="sectionA">Section A</option>
              <option value="sectionB">Section B</option>
              <option value="sectionC">Section C</option>
              <option value="sectionD">Section D</option>
              <option value="sectionE">Section E</option>
            </select>
            <label className="form-label" for="form6Example5">
              Section
            </label>
          </div>

          {/* Admission No */}
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="text"
              id="form6Example6"
              className="form-control"
              name="addmission"
              value={appoint.addmission}
              onChange={handleChange}
              required
            />
            <label className="form-label" for="form6Example6">
              Admission No
            </label>
          </div>

          {/* <!-- Message input --> */}
          <div data-mdb-input-init class="form-outline mb-4">
            <textarea
              className="form-control"
              id="form6Example7"
              rows="4"
              name="msg"
              value={appoint.msg}
              onChange={handleChange}
              required
            ></textarea>
            <label className="form-label" for="form6Example7">
              Purpose For Visit
            </label>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            className="btn btn-primary btn-block mb-4"
          >
            Submit Request
          </button>
        </form>
      </div>
      <Footer />
      <Copy />
    </>
  );
};

export default AppointmentHead;
