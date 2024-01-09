import React from "react";
import Country from "./Country";
import Coffee from "./Coffee";
import Info from "./Info";
import Notes from "./Notes";
import Card from "react-bootstrap/Card";

const Prefrences = () => {
  return (
    <>
      <h2 className="mb-5">My Profile</h2>
      <div className="row d-flex">
        <div className="col-12 col-lg-6">
          <Card>
            <Card.Body>
              <Info />
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Notes />
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-lg-6">
          <Card>
            <Card.Body>
              <Coffee />
            </Card.Body>
          </Card>
          <Card className="mt-4">
            <Card.Body>
              <Country />
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Prefrences;
