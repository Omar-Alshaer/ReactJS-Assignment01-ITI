import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Courses</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
