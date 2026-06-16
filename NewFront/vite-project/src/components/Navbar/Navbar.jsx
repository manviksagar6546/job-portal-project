import { Link } from "react-router-dom";
import { getUser, logoutUser } from "../../utils/storage";

function Navbar() {
  const user = getUser();

  const handleLogout = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          Job Portal
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/applications">
              Applications
            </Link>

            {user?.role === "ADMIN" && (
              <>
                <Link className="nav-link" to="/admin">
                  Admin Dashboard
                </Link>

                <Link className="nav-link" to="/add-job">
                  Add Job
                </Link>
              </>
            )}

            {!user ? (
              <>
                <Link className="nav-link" to="/login">
                  Login
                </Link>

                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <>
                <span className="nav-link">
                  Welcome, {user.name}
                </span>

                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;