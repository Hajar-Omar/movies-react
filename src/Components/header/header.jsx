import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <h1>Movies List</h1>

      <ul>
        <li>
          <Link to="/movies">Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
