import { Link } from "react-router-dom";
import "./navbar.scss";
function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add-job">Add Job</Link>
        </nav>
    );
}

export default Navbar;