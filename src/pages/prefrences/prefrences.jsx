import React from "react";
import Country from "./Country";
import Button from "react-bootstrap/Button";
import Coffee from "./Coffee";
import Info from "./Info";
import Notes from "./Notes";

function Prefrences() {
  return (
    <>
      <h1>Prefrences show all state data</h1>
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
      <div className="d-flex justify-content-end my-5 w-100">
        <Button className="btn btn-success px-5">Save</Button>
      </div>
    </>
  );
}

export default Prefrences;
