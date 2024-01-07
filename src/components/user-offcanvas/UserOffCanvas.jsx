import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";

const UserOffCanvas = ({ show, handleClose }) => {
  // selectors
  const currentState = useSelector((state) => state);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      //   responsive="lg"
      placement="end"
      scroll="true"
      backdrop="true"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4>My Saved Data</h4>
              <h4>
                {currentState.user.firstName} {currentState.user.lastName}
              </h4>
            </div>{" "}
            <img
              src={currentState.user.photo ?? "/images/me.png"}
              alt="avatar"
              title="my profile"
              width="60"
              height="60"
              className="mx-3 img-top"
            />
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {currentState && (
          <table className="table table-striped table-hover mb-0">
            <tbody>
              <tr>
                <th scope="row">Country</th>
                <td>{currentState.user.country.name ?? "-"}</td>
              </tr>
              <tr>
                <th scope="row">Bio</th>
                <td>{currentState.user.bio ?? "-"}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{currentState.user.email ?? "-"}</td>
              </tr>
              <tr>
                <th scope="row">Fav color</th>
                <td>
                  {" "}
                  <div
                    className="box"
                    style={{ "background-color": currentState.user.color }}
                  ></div>
                </td>
              </tr>
              <tr>
                <th scope="row">Fav Coffee</th>
                <td>{currentState.user.coffee.title ?? "-"}</td>
              </tr>
            </tbody>
          </table>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserOffCanvas;
