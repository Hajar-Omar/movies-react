import { Link } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>Movies</h1>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/movies">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Select an Option
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
