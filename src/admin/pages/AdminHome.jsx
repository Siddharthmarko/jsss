import React from "react";
import AdminHomeCards from "./AdminHomeCards";

function AdminHome() {
  return (
    <div>
      <div className="col-lg-12 mt-3" id="set">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="hdd">Doaguru School</h1>
            <div
              className="underline mx-auto"
              style={{
                height: 3,
                width: "4rem",
                backgroundColor: "#34495E",
                marginTop: 20,
                marginBottom: 20,
              }}
            ></div>
            <h5 className="mt-2 mb-4">
              Welcome to Admin DashBoard
            </h5>
          </div>
          <div className="col-lg-12">
            <AdminHomeCards/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
