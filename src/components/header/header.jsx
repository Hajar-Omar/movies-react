import { Link } from "react-router-dom";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";
//import imgSrc from '../../assets/images/me.png'

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <h1 className="mb-0">
          <Link to="/dashboard">FUN</Link>
        </h1>
        <Link aria-current="page" to="/prefrences">
          <img
            src="/images/me.png"
            alt="avatar"
            title="my profile"
            width="40"
            className="mx-3"
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
                  to="/games?xbox"
                >
                  XBox
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  className="nav-link"
                  aria-current="page"
                  to="/games?switch"
                >
                  Switch games
                </Dropdown.Item>
                <Dropdown.Item
                  as={Link}
                  className="nav-link"
                  aria-current="page"
                  to="/games?payStation"
                >
                  Play Station
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
