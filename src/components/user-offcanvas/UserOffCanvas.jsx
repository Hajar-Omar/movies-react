import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";

const UserOffCanvas = ({ show, handleClose }) => {
  // selectors
  const currentUser = useSelector((state) => state.user);
  const currentNotes = useSelector((state) => state.notes);

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      //responsive="lg"
      placement="end"
      scroll="true"
      backdrop="truw"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h4>My Saved Data</h4>
              <h4>
                {currentUser.firstName} {currentUser.lastName}
              </h4>
            </div>
            <img
              src={currentUser.photo ?? "/images/me.png"}
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
        {currentUser && (
          <table className="table table-striped table-hover mb-0">
            <tbody>
              {currentUser.country.name && (
                <tr>
                  <th scope="row">Country</th>
                  <td>{currentUser.country.name ?? "-"}</td>
                </tr>
              )}
              {currentUser.bio && (
                <tr>
                  <th scope="row">Bio</th>
                  <td>{currentUser.bio ?? "-"}</td>
                </tr>
              )}
              {currentUser.email && (
                <tr>
                  <th scope="row">Email</th>
                  <td>{currentUser.email ?? "-"}</td>
                </tr>
              )}
              {currentUser.color && (
                <tr>
                  <th scope="row">Fav color</th>
                  <td>
                    <div
                      className="box"
                      style={{ backgroundColor: currentUser.color }}
                    ></div>
                  </td>
                </tr>
              )}
              {currentUser.coffee.title && (
                <tr>
                  <th scope="row">Fav Coffee</th>
                  <td>{currentUser.coffee.title ?? "-"}</td>
                </tr>
              )}
              {currentNotes.length && (
                <tr>
                  <th scope="row">Your Notes</th>
                  <td>
                    <ul>
                      {currentNotes.map((note, i) => (
                        <li key={i}>{note.value}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UserOffCanvas;
