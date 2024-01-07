import React from "react";
import Country from "./Country";
import Coffee from "./Coffee";
import Info from "./Info";
import Notes from "./Notes";

function Prefrences() {
  return (
    <>
      <h2 className="mb-5">My Profile</h2>
      <div className="row mx-0 d-flex">
        <div className="col-12 col-lg-6">
          <Info />
          <Notes />
        </div>
        <div className="col-12 col-lg-6">
          <Coffee />
          <Country />
        </div>
      </div>
    </>
  );
}

export default Prefrences;
