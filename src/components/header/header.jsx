import { Link } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";
//import imgSrc from '../../assets/images/me.png'
import { useSelector } from "react-redux";
import { useState } from "react";
import UserOffCanvas from "../user-offcanvas/UserOffCanvas";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // selectors
  const currentPhoto = useSelector((state) => state.user.photo);

  return (
    <>
      <UserOffCanvas  show={show} handleClose={handleClose} />
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <h1 className="mb-0">
            <Link onClick={handleShow}>FUN Zone</Link>
          </h1>
          <Link aria-current="page" to="/prefrences">
            <img
              src={currentPhoto ?? "/images/me.png"}
              alt="avatar"
              title="my profile"
              width="60"
              height="60"
              className="mx-3 img-top"
            />
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/jokes">
                Jokes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/coding">
                Coding
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Games
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    as={Link}
                    className="nav-link"
                    aria-current="page"
                    to="/games?type=xbox"
                  >
                    XBox
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    className="nav-link"
                    aria-current="page"
                    to="/games?type=switch"
                  >
                    Switch games
                  </Dropdown.Item>
                  <Dropdown.Item
                    as={Link}
                    className="nav-link"
                    aria-current="page"
                    to="/games?type=playstation"
                  >
                    Play Station
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
