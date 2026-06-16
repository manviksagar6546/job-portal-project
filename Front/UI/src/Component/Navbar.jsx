import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  const logout = () => {

    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <nav>

      <Link to="/">Home</Link>

      {!user && (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      )}

      {user?.role === "ROLE_ADMIN" && (
        <>
          <Link to="/add-job">
            Add Job
          </Link>
        </>
      )}

      {user && (
        <button onClick={logout}>
          Logout
        </button>
      )}

    </nav>
  );
}

export default Navbar;