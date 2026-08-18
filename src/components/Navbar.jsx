import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const cartCount = useSelector((state) => state.cart.items.length);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">My Courses</Link>

        <div className="navbar-nav align-items-center">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/cart">Cart ({cartCount})</Link>
          <button className="btn btn-light btn-sm ms-2" onClick={toggleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
